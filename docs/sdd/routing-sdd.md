# SDD — 路由契約（M0）

## 0. 文件目的
定義 M0 階段的公開 URL 契約與路由責任邊界。
本文件鎖定網站骨架，避免內容與資料邏輯提前滲入。

---

## 1. 範圍（Scope）

### 納入範圍
- 公開路由：/paths、/node/[id]、/artifact/[id]
- 每條路由的責任與非責任邊界

### 不納入範圍
- Content Collections 與 Zod Schema（Day 7）
- Data / Service 層設計（Day 11）
- View Count / Response 功能（Day 12–13）
- UI 樣式與元件設計（Day 3 之後）

---

## 2. 路由清單（Route Contract）

| 路由 | 類型 | 參數 | 負責 | 不負責 |
|------|------|------|------|--------|
| /paths | 靜態 | - | 顯示 Path 列表入口 | 資料定義、資料驗證、資料來源 |
| /node/[id] | 動態 | id:string | 根據 id 顯示單一 Node 頁面（僅 View） | 驗證 id、讀取 storage、資料轉換 |
| /artifact/[id] | 動態 | id:string | 根據 id 顯示單一 Artifact 頁面（僅 View） | 驗證內容結構、操作儲存層 |

---

## 3. 邊界定義（不可違反）

- Route/Page 只負責 View orchestration（畫面呈現）
- Route 不得：
  - 定義資料結構
  - 資料驗證
  - 直接存取檔案系統或資料庫
  - 撰寫商業邏輯
  - 假設資料來源格式或資料存在性

- 資料驗證責任：屬於 Zod Schema（Day 7）
- 資料讀取與轉換責任：屬於 Service / Adapter 層（Day 11）

---

## 4. URL 與 ID 契約

### 4.1 ID 規則
- id 為穩定識別字串
- 路由層不得根據 title 自動生成 id
- id 來源將由 Content Layer 提供


### 4.2 穩定性原則
- 一旦公開，URL 不得隨意變更
- 修改標題不得破壞既有連結
- 外部連結不得依賴 UI 文字
- URL 不包含語意 slug（避免日後重命名破壞）

---

## 5. M0 實作說明

- 動態路由在 Astro SSG 下需提供 getStaticPaths()
- M0 僅使用最小 stub id（例如 "test"）驗證路由
- 不引入任何內容假設

目前靜態測試路徑：
- /node/test
- /artifact/test

---

## 6. 驗收標準（DoD）

- /paths 可成功載入
- /node/test 可成功載入
- /artifact/test 可成功載入
- 本文件與實作路由一致
- 能清楚說明每條路由的「負責 / 不負責」

---
## 7. Future Hook Points

- 未來將由 Content Collections 提供資料
- 未來可能加入 service 層
- Storage 替換點預留
- ViewModel 轉換層（避免 UI 直接依賴資料來源）


---

## 8. 版本紀錄
- v0.1：M0 Day 2 初版路由契約