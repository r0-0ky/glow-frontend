"use client";

import { CanvasBoard } from "@/src/widgets/canvas-board"
import classes from './styles.module.scss';
import cn from 'classnames';
import { ToolsBar } from "@/src/widgets/tools-bar";

export const DesignPage: React.FC = () => {
  
  return (
    <div className={cn(classes.mainWrapper)}>
      <aside className={classes.leftSide}>

      </aside>
      <section className={cn(classes.paintZoneContainer)}>
        <CanvasBoard />
        <ToolsBar styles={{position: 'absolute', bottom: 20, right: '50%', transform: 'translateX(50%)'}} />
      </section>

    </div>
  )
}