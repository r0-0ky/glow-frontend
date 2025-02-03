"use client";

import { CanvasBoard } from "@/src/widgets/canvas-board"
import classes from './styles.module.scss';
import cn from 'classnames';
import { ToolsBar } from "@/src/widgets/tools-bar";
import Panel from "antd/lib/splitter/Panel";
import { Splitter } from "antd/lib";

export const DesignPage: React.FC = () => {
  
  return (
    <Splitter style={{maxHeight: 'calc(100vh - 60px)', height: '100%'}}>
    <Panel max={'30%'} min={'10%'}>
      <aside className={classes.leftSide}>
      </aside>
    </Panel>
    <Panel defaultSize={'70%'} >
      <section className={cn(classes.paintZoneContainer)}>
        <CanvasBoard />
        <ToolsBar styles={{position: 'absolute', bottom: 30, right: '50%', transform: 'translateX(50%)'}} />
      </section>
    </Panel>
    <Panel max={'30%'} min={'10%'}>
    <aside className={classes.rightSide}>
    </aside>
    </Panel>
  </Splitter>
  )
}