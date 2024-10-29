import { DropdownMenuProps, itemsType } from "./types"
import classes from './styles.module.scss';
import cn from 'classnames';
import { MouseEventHandler, useEffect, useState } from "react";
import { ItemType } from "antd/es/menu/interface";

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, selectedItem, handleSelectItem, closeState, handleCloseMenu }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemSection, setSelectedItemSection] = useState(items[0]);

  const handleSwitchSection = (item: itemsType) => {
    setSelectedItemSection(item);
    handleSelectItem(item.value)
  }

  const handleOpenMenu = async () => {
    await handleCloseMenu();
    setIsOpen(!isOpen);
  }

  const selectMenu = (item: itemsType) => {
    handleCloseMenu();
    handleSwitchSection(item)
  }

  useEffect(() => {
    setIsOpen(false);
  }, [closeState])

  return (
    <div className={cn(classes.wrapper)}>
      <button onClick={() => handleSelectItem(selectedItemSection.value)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={cn(classes.defaultButton)} style={{ background: `${isHovered ? '#ececec' : 'transparent'} url(${selectedItemSection.value === selectedItem ? selectedItemSection.selectedIcon.src : selectedItemSection.icon.src}) center / contain no-repeat`, border: isHovered ? '5px solid #ececec' : '5px solid transparent'}} />
      <button onClick={handleOpenMenu} className={cn(classes.arrowButton)} />
      <div className={cn(classes.dropdown, !isOpen && classes.hidden)}>
        {items.map(item => (
          <button onClick={() => selectMenu(item)} className={cn(classes.dropdownWrapper)}>
            <span className={cn(selectedItemSection.value === item.value ? classes.dropdownArrow : classes.dropdownArrowHidden)} />
            <span className={cn(classes.dropdownIcon)} style={{ background: `url(${item.icon.src}) center / contain no-repeat`}}></span>
            <p className={cn(classes.dropdownLabel)}>{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  )
}