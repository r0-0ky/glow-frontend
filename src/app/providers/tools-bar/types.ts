import { ReactNode } from "react"
import { createToolsBarStore } from "../../stores/tools-bar/tools-bar.store"

export interface ToolsBarStoreProviderProps {
  children: ReactNode
}

export type ToolsBarStoreApi = ReturnType<typeof createToolsBarStore>