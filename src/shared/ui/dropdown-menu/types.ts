export interface DropdownMenuProps {
  items: itemsType[]
  selectedItem: string
  handleSelectItem: (value: string) => void
  closeState: boolean
  handleCloseMenu: () => void
} 

export interface itemsType {
  value: string
  icon: HTMLImageElement
  label: string
  selectedIcon: HTMLImageElement
}