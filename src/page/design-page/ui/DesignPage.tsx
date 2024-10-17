'use client'

import { CanvasBoard } from "@/src/widgets/canvas-board"
import classes from './styles.module.scss';
import cn from 'classnames';

export const DesignPage: React.FC = () => {
  
  return (
    <div className={cn(classes.mainWrapper)}>
      <aside className={classes.leftSide}>

      </aside>
      <CanvasBoard />

    </div>
  )
}