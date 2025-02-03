import { ToolsBarEnum } from "@/src/widgets/tools-bar/ui/types"

export type ToolsBarState = {
  selectedItem: ToolsBarEnum
}

export type ToolsBarActions = {
  updateSelectedItem: (state: ToolsBarEnum) => void
}

export type ToolsBarStore = ToolsBarState & ToolsBarActions