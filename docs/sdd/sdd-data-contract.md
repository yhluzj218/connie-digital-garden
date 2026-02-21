# SDD — Data Contract（M0 / Day 11）

## 0. 文件目的
定義 View Count 與 Response 的資料流契約（Input → Store → Read → Display）與 Service 邊界。
本文件不包含任何實作，只鎖定介面與替換點。

## 1. 範圍（Scope）
### 納入範圍
- View Count：increment / getCount 的資料流與介面
- Response：create / listByNode 的資料流與介面
- Service 與 Storage 的責任邊界
- Storage 替換點（local → future）

### 不納入範圍
- UI 呈現細節
- Auth / 權限設計
- 資料庫選型與效能最佳化
- 監控與追蹤（Day 14 再談）

## 2. 核心原則（Contract-first）
- Page/Route 只能呼叫 Service，不得直接碰 Storage
- Service 提供穩定介面，Storage 可替換
- 所有資料流必須可用文字描述完整走完

## 3. Data Flow：View Count
### 3.1 資料流（Input → Store → Read → Display）
- Input：使用者進入 /artifact/[id] 頁面
- Process：Page 呼叫 viewService.increment(id) 進行 +1，並呼叫 viewService.getCount(id) 取得最新數值
- Store：Service 透過 storage adapter 將 viewCount 寫入（key = artifactId）
- Read：Service 透過 storage adapter 讀取 viewCount（key = artifactId）
- Display：Page 將取得的 count 顯示在 UI（例如：Views: {count}）

### 3.2 Service Interface（僅定義）
- increment(id: string): Promise<void>
- getCount(id: string): Promise<number>

## 4. Data Flow：Response
### 4.1 資料流（Input → Store → Read → Display）

- Input：使用者在 /node/[id] 頁面提交一則回應（表單送出）
- Process：Page 呼叫 responseService.create(input) 寫入回應；並呼叫 responseService.listByNode(nodeId) 重新取得列表
- Store：Service 透過 storage adapter 寫入 response（key = nodeId；value 含 message、createdAt、author(可選)）
- Read：Service 透過 storage adapter 讀取該 nodeId 的 responses 列表
- Display：Page 顯示 responses 清單（最新在上或在下，Day 13 再決定）

### 4.2 Service Interface（僅定義）
- create(input: CreateResponseInput): Promise<void>
- listByNode(nodeId: string): Promise<Response[]>

## 5. Storage 替換點（Plug-in）
### 5.1 M0 預設（第一版）
- Storage：local（JSON / file / in-memory 擇一，Day 12 再定）
- 理由：快速驗證資料流與契約

### 5.2 未來可替換
- Azure Functions / API
- Cosmos DB / Table Storage / 其他 DB
- 原則：替換時不得影響 Page，只能替換 Storage 實作

## 6. 邊界與責任

- Page/Route：
  - 只負責接收使用者行為與顯示資料
  - 只能呼叫 Service
  - 不得直接讀寫 storage

- Service：
  - 定義穩定介面（increment / getCount / create / listByNode）
  - 負責協調資料流程（寫入 + 讀取）
  - 不關心資料實際存在哪裡

- Storage Adapter：
  - 負責實際讀寫資料（local JSON / DB / API）
  - 可被替換
  - 不可被 Page 直接使用