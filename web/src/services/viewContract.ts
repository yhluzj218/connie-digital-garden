export interface ViewStore {
  increment(id: string): Promise<void>
  get(id: string): Promise<number>
}
