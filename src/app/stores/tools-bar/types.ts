export type ToolsBarState = {
  selectedItem: string
}

export type ToolsBarActions = {
  updateSelectedItem: (state: string) => void
}

export type ToolsBarStore = ToolsBarState & ToolsBarActions