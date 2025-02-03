// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'
import { ToolsBarStore, ToolsBarState } from './types'
import { ToolsBarEnum } from '@/src/widgets/tools-bar/ui/types'

export const initToolsBarStore = (): ToolsBarState => {
  return { selectedItem: ToolsBarEnum.DEFAULT_CURSOR }
}

export const defaultInitState: ToolsBarState = {
  selectedItem: ToolsBarEnum.DEFAULT_CURSOR,
}

export const createToolsBarStore = (
  initState: ToolsBarState = defaultInitState,
) => {
  return createStore<ToolsBarStore>()((set) => ({
    ...initState,
    updateSelectedItem: (state) => set(() => ({ selectedItem: state })),
  }))
}
