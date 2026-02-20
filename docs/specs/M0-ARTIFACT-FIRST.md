# M0 Artifact-First Content Minimum Spec

## 1) Path (最小一條路徑)
### 必填欄位（M0）
- id: string (e.g. "ai-collab-boot")
- title: string
- summary: string (150~300 字)
- nodes: string[] (node ids，至少 3 個)

### 驗收證據
- /paths 頁面能看到這條 Path
- Path 詳細頁或展開區塊能看到 nodes 清單（>=3）

## 2) Node (至少 3 篇)
### 必填欄位（M0）
- id: string
- title: string
- objective: string (一句話：這篇要讓我具備什麼能力)
- practice: string[] (至少 1 個可做的 task)
- dod: string[] (至少 3 條可驗收標準)
- evidence: string[] (至少 1 個：連結/截圖/commit)

### 驗收證據
- /node/[id] 可開啟
- 每篇 Node 都看得到 objective / practice / dod / evidence

## 3) Artifact (至少 1 篇，可公開分享)
### 必填欄位（M0）
- id: string
- title: string
- context: string (這是什麼、為何做)
- output: string (成果本體：文章/影片/連結)
- link_to_nodes: string[] (至少 1 個 node id)

### 驗收證據
- /artifact/[id] 可開啟
- 內容可讓朋友看懂「你做了什麼」並能分享連結