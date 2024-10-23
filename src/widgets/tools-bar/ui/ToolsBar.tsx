import { Select, Space } from 'antd'
import classes from './styles.module.scss';
import cn from 'classnames';
import DefaultCursorLogo from '@/src/widgets/tools-bar/images/cursor-default.svg';
import { useMemo, useState } from 'react';
import './index.css';

export const ToolsBar: React.FC = ({ styles }) => {
  const items = [
    {
      value: 'default-cursor',
      label: <DefaultCursorLogo />,
    },
    {
      value: '2',
      label: 'Item 2',
    },
    {
      value: '3',
      label: 'Item 3',
    },
  ];
  const [selectedValue, setSelectedValue] = useState('1')
  const handleChange = (value: string, option) => {
    console.log(value);
  }
  return (
    <div className={cn(classes.border)} style={styles}>
      <div className={cn(classes.wrapper)}>
      <Select
        defaultValue="2"
        style={{ width: 30, }}
        onChange={handleChange}
        options={items}
      />
      </div>
    </div>
  )
}