import classes from './styles.module.scss';
import cn from 'classnames';
import defaultCursorLogo from '@/src/widgets/tools-bar/images/cursor-default.svg?url';
import defaultCursorLogoSelected from '@/src/widgets/tools-bar/images/cursor-default-selected.svg?url';
import handCursorLogo from '@/src/widgets/tools-bar/images/cursor-hand.svg?url';
import handCursorLogoSelected from '@/src/widgets/tools-bar/images/cursor-hand-selected.svg?url';
import rectangleLogo from '@/src/widgets/tools-bar/images/rectangle.svg?url';
import rectangleLogoSelected from '@/src/widgets/tools-bar/images/rectangle-selected.svg?url';
import { DropdownMenu } from '@/src/shared/ui/dropdown-menu';
import { itemsType } from './../../../shared/ui/dropdown-menu/types';
import { useToolsBarStore } from '@/src/app/providers/tools-bar/tools-bar.provider';
import { useState } from 'react';
import { ToolsBarEnum, ToolsBarProps } from './types';

const items: itemsType[][]  = [
  [
    {
      value: ToolsBarEnum.DEFAULT_CURSOR,
      icon: defaultCursorLogo,
      label: 'Move',
      selectedIcon: defaultCursorLogoSelected
    },
    {
      value: ToolsBarEnum.HAND_CURSOR,
      icon: handCursorLogo,
      label: 'Hand tool',
      selectedIcon: handCursorLogoSelected
    },
  ],
  [
    {
      value: ToolsBarEnum.RECTANGLE,
      icon: rectangleLogo,
      label: 'Rectangle',
      selectedIcon: rectangleLogoSelected
    }
  ],
]

export const ToolsBar: React.FC<ToolsBarProps> = ({ styles }) => {
  const { selectedItem, updateSelectedItem } = useToolsBarStore(state => state)
  const [closeState, setCloseState] = useState(false)
  const handleSelectItem = (value: string) => {
    updateSelectedItem(value as ToolsBarEnum)
  }

  return (
    <div className={cn(classes.wrapper)} style={styles}>
        {items.map((item, index) => (
          <DropdownMenu closeState={closeState} handleCloseMenu={() => setCloseState(!closeState)} handleSelectItem={handleSelectItem} selectedItem={selectedItem} items={item} key={index} />
        ))}
    </div>
  )
}