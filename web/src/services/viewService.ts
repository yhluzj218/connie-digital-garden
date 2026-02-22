import type { ViewStore } from "./viewContract"
import { MemoryViewStore } from "./viewMemoryStore"

// ✅ 單一替換點：未來換 AzureTableViewStore，只動這一行
const store: ViewStore = new MemoryViewStore()

export const incrementView = (id: string) => store.increment(id)
export const getView = (id: string) => store.get(id)
