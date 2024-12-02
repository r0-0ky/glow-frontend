"use client";

import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node';
import { useEffect, useRef, useState } from 'react';
import { Layer, Rect, Circle, Stage } from 'react-konva';
import classes from './styles.module.scss';
import cn from 'classnames';
import { useToolsBarStore } from '@/src/app/providers/tools-bar/tools-bar.provider';

export const CanvasBoard: React.FC = () => {
  const { selectedItem } = useToolsBarStore(state => state)
  const [stage, setStage] = useState({
    scale: 1,
    x: 0,
    y: 0
  });
  const divRef = useRef(null)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })

  const [shapes, setShapes] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState(null);
  const stageRef = useRef<typeof Stage>(null);
  const [isDraggingStage, setIsDraggingStage] = useState(false);

  const handleMouseDown = () => {
    const current = stageRef.current as 
    setIsDrawing(true);
    if (current) {
      const pos = current.getPointerPosition();
      setStartPos(pos);
      setShapes((prevShapes) => [...prevShapes, { x: pos.x, y: pos.y, width: 0, height: 0 }]);
    }
  };

  const handleMouseMove = () => {
    if (!isDrawing || shapes.length === 0) return;
    const pos = stageRef.current.getPointerPosition();
    setShapes((prevShapes) => {
      const newShapes = [...prevShapes];
      const lastShape = newShapes[newShapes.length - 1];
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
  };

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

  useEffect(() => {
    if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight
      })
    }

    if (selectedItem !== 'hand-cursor') {
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
          setIsDraggingStage(true)
        }
      })
  
      window.addEventListener('keyup', (e) => {
        if (e.code === 'Space') {
          setIsDraggingStage(false)
        }
      })
    }

    return () => {
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
          setIsDraggingStage(true)
        }
      })

      window.addEventListener('keyup', (e) => {
        if (e.code === 'Space') {
          setIsDraggingStage(false)
        }
      })
    }
  }, [])

  useEffect(() => {
    if (selectedItem === 'hand-cursor') {
      setIsDraggingStage(true)
    }
    else {
      setIsDraggingStage(false)
    }
  }, [selectedItem])

  return (
    <div className={cn(classes.wrapper)} ref={divRef}>
      <Stage draggable={isDraggingStage} ref={stageRef} width={dimensions.width} height={dimensions.height} onWheel={handleWheel} scaleX={stage.scale} scaleY={stage.scale} x={stage.x} y={stage.y} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <Layer>
          <Rect draggable width={50} height={50} fill="red" />
          <Circle draggable x={200} y={200} stroke="black" radius={50} />
          {shapes.map((shape) => (
            <Rect
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
  )
}