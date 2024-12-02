import classes from './styles.module.scss';
import cn from 'classnames';
import defaultCursorLogo from '@/src/widgets/tools-bar/images/cursor-default.svg';
import defaultCursorLogoSelected from '@/src/widgets/tools-bar/images/cursor-default-selected.svg';
import handCursorLogo from '@/src/widgets/tools-bar/images/cursor-hand.svg';
import handCursorLogoSelected from '@/src/widgets/tools-bar/images/cursor-hand-selected.svg';
import rectangleLogo from '@/src/widgets/tools-bar/images/rectangle.svg';
import rectangleLogoSelected from '@/src/widgets/tools-bar/images/rectangle-selected.svg';
import { DropdownMenu } from '@/src/shared/ui/dropdown-menu';
import { itemsType } from './../../../shared/ui/dropdown-menu/types';
import { useToolsBarStore } from '@/src/app/providers/tools-bar/tools-bar.provider';
import { useState } from 'react';
import { ToolsBarProps } from './types';

const items: itemsType[][]  = [
  [
    {
      value: 'default-cursor',
      icon: defaultCursorLogo,
      label: 'Move',
      selectedIcon: defaultCursorLogoSelected
    },
    {
      value: 'hand-cursor',
      icon: handCursorLogo,
      label: 'Hand tool',
      selectedIcon: handCursorLogoSelected
    },
  ],
  [
    {
      value: 'rectangle',
      icon: rectangleLogo,
      label: 'Rectangle',
      selectedIcon: rectangleLogoSelected
    },
    {
      value: 'defauflt-cursor',
      icon: defaultCursorLogo,
      label: 'Move',
      selectedIcon: defaultCursorLogoSelected
    },
  ],
  [
    {
      value: 'defssault-cursor',
      icon: defaultCursorLogo,
      label: 'Move',
      selectedIcon: defaultCursorLogoSelected
    },
    {
      value: 'deaffault-cursor',
      icon: defaultCursorLogo,
      label: 'Move',
      selectedIcon: defaultCursorLogoSelected
    },
    {
      value: 'deaffault-cursor',
      icon: defaultCursorLogo,
      label: 'Move',
      selectedIcon: defaultCursorLogoSelected
    },
  ],
]

export const ToolsBar: React.FC<ToolsBarProps> = ({ styles }) => {
  const { selectedItem, updateSelectedItem } = useToolsBarStore(state => state)
  const [closeState, setCloseState] = useState(false)
  const handleSelectItem = (value: string) => {
    updateSelectedItem(value)
  }

  return (
    <div className={cn(classes.wrapper)} style={styles}>
        {items.map((item, index) => (
          <DropdownMenu closeState={closeState} handleCloseMenu={() => setCloseState(!closeState)} handleSelectItem={handleSelectItem} selectedItem={selectedItem} items={item} key={index} />
        ))}
    </div>
  )
}