# Milestone M0 — End State (Artifact-First MVP)

## A. Friend-ready (公開可逛)
- [ ] 公開網址可瀏覽（Azure SWA）
- [ ] Home 10 秒看懂 Path → Node → Artifact
- [ ] /paths 有 1 條 Path（>= 3 Node）
- [ ] /node/[id] 至少 3 篇（Node #1~#3）
- [ ] /artifact/[id] 至少 1 篇可分享 Artifact（可對外連結）

## B. Architecture-ready (架構可演化)
- [ ] 固定路由存在：/paths /node/[id] /artifact/[id]
- [ ] Layout 分層（Token / Component / Layout）存在且可說明其邊界
- [ ] Content Collections + Zod Schema 上線
- [ ] 錯欄位 build fail（可重現且有紀錄）
- [ ] 文件數：>=2 份 SDD，>=1 份 ADR

## C. Engineer-mindset-ready (工程閉環)
- [ ] CI/CD 正常（push → build → deploy）
- [ ] 每天有 DoD 文件（docs/sprint/day-xx.md）
- [ ] 可清楚解釋資料流：Input → Store → Read → Display

## D. AI-collaboration-ready (AI 協作閉環)
- [ ] 至少 1 次「約束式開發」紀錄（限制 AI 只能改哪裡、輸出什麼）
- [ ] 至少 1 次 Debug 協作紀錄（問題→假設→驗證→修復）
- [ ] 至少 1 次 Prompt 對比紀錄（同題不同 prompt 結果比較）
- [ ] 至少 1 次 AI 架構挑戰紀錄（AI 提案→你反駁/修正→結論）