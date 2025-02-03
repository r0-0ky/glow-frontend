"use client";

import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Layer, Rect, Circle, Stage } from 'react-konva';
import classes from './styles.module.scss';
import cn from 'classnames';
import { useToolsBarStore } from '@/src/app/providers/tools-bar/tools-bar.provider';
import { Stage as StageT } from 'konva/lib/Stage';
import { Vector2d } from 'konva/lib/types';
import { ToolsBarEnum } from '../../tools-bar/ui/types';

export const CanvasBoard: React.FC = () => {
  const { selectedItem } = useToolsBarStore(state => state)
  const [stage, setStage] = useState({
    scale: 1,
    x: 0,
    y: 0
  });
  const divRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });
  const padding = 500;

  const [shapes, setShapes] = useState<{
    x?: number;
    y?: number;
    width: number;
    height: number;
    id: number;
  }[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState<Vector2d | null>(null);
  const stageRef = useRef<StageT>(null);

  const handleMouseDown = useCallback(() => {
    if (selectedItem !== ToolsBarEnum.RECTANGLE) return
    const current = stageRef.current
    setIsDrawing(true);
    if (current) {
      const pos = current.getPointerPosition();
      setStartPos(pos);
      setShapes((prevShapes) => [...prevShapes, { id: shapes.length, x: pos?.x, y: pos?.y, width: 0, height: 0 }]);
    }
  }, [selectedItem, shapes.length]);

  const handleMouseMove = useCallback(() => {
    if (selectedItem !== ToolsBarEnum.RECTANGLE) return
    if (!isDrawing || shapes.length === 0) return;
    const pos = stageRef?.current?.getPointerPosition();
    setShapes((prevShapes) => {
      const newShapes = [...prevShapes];
      const lastShape = newShapes[newShapes.length - 1];
      if (!startPos || !pos) return prevShapes;
      return [
        ...newShapes.slice(0, newShapes.length - 1),
        {
          ...lastShape,
          width: Math.abs(startPos.x - pos.x),
          height: Math.abs(startPos.y - pos.y),
          x: Math.min(startPos.x, pos.x),
          y: Math.min(startPos.y, pos.y),
          id: Math.random(),
        },
      ];
    });
  }, [selectedItem, isDrawing, startPos, shapes]);

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleWheel = (e: KonvaEventObject<WheelEvent, Node<NodeConfig>>) => {
    if (e.evt.ctrlKey) {
      e.evt.preventDefault();
      const scaleBy = 1.05;
      const stage = e.target.getStage();
      if (stage) {
        const oldScale = stage.scaleX();
        const pointerPosition = stage.getPointerPosition()
        if (pointerPosition) {
          const mousePointTo = {
            x: pointerPosition.x / oldScale - stage.x() / oldScale,
            y: pointerPosition.y / oldScale - stage.y() / oldScale
          };
          const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
          if (newScale > 0.1 && newScale < 20) {
            setStage({
              scale: newScale,
              x: (pointerPosition.x / newScale - mousePointTo.x) * newScale,
              y: (pointerPosition.y / newScale - mousePointTo.y) * newScale
            });
          }
        }
      }
    }
  }

  const canDrags = useMemo(() => {
    if (selectedItem === ToolsBarEnum.DEFAULT_CURSOR) {
      return true
    }
    else {
      return false
    }
  },[selectedItem])

  useEffect(() => {
    setDimensions({
      width: window.innerWidth + padding * 2,
      height: window.innerHeight + padding * 2
    })
  }, [])

  return (
    <div className={cn(classes.wrapper)} ref={divRef}>
      <div className={classes.largeContainer}>
        <Stage style={{background: '#e0e0e0'}} ref={stageRef} width={dimensions.width} height={dimensions.height} onWheel={handleWheel} scaleX={stage.scale} scaleY={stage.scale} x={stage.x} y={stage.y} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          <Layer>
            <Rect draggable={canDrags} width={50} height={50} fill="red" />
            <Circle draggable={canDrags} x={200} y={200} stroke="black" radius={50} />
            {shapes.map((shape) => (
              <Rect
                draggable={canDrags}
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                fill="rgba(255, 0, 0, 0.5)" // Example color
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  )
}