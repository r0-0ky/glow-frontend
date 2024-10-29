// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'
import { ToolsBarStore, ToolsBarState } from './types'

export const initToolsBarStore = (): ToolsBarState => {
  return { selectedItem: 'default-cursor' }
}

export const defaultInitState: ToolsBarState = {
  selectedItem: 'default-cursor',
}

export const createToolsBarStore = (
  initState: ToolsBarState = defaultInitState,
) => {
  return createStore<ToolsBarStore>()((set) => ({
    ...initState,
    updateSelectedItem: (state) => set(() => ({ selectedItem: state })),
  }))
}
