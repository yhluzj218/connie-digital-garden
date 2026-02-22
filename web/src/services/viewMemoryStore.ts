import type { ViewStore } from "./viewContract"

export class MemoryViewStore implements ViewStore {
  private store = new Map<string, number>()

  async increment(id: string): Promise<void> {
    const current = this.store.get(id) ?? 0
    this.store.set(id, current + 1)
  }

  async get(id: string): Promise<number> {
    return this.store.get(id) ?? 0
  }
}
