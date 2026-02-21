# SDD — Path

## 1. Definition

Path 是一條可被走訪的能力主幹。
它負責描述一個能力組裝方向，以及其包含的 Node 順序。

Path 不包含 Node 內容本身。

---

## 2. Data Contract

A Path must contain:

- id: string
- title: string
- description: string
- nodeIds: string[]
- artifactGoal: string

---

## 3. URL Mapping

- /paths
- /paths/[id]

---

## 4. Responsibility Boundary

Path:
- 持有 nodeIds
- 不嵌入 Node 內容
- 不處理 Node 渲染

Node:
- 由 /node/[id] 負責

---

## 5. Non-Goals (M0)

- 不處理排序策略
- 不處理多 Path 關聯
- 不處理狀態追蹤