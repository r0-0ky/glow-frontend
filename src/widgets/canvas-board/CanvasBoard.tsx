import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node';
import { useRef, useState } from 'react';
import { Layer, Rect, Circle, Stage, StageProps } from 'react-konva';


export const CanvasBoard: React.FC = () => {
  const [stage, setStage] = useState({
    scale: 1,
    x: 0,
    y: 0
  });
  const handleWheel = (e: KonvaEventObject<WheelEvent, Node<NodeConfig>>) => {
    e.evt.preventDefault();

    const scaleBy = 1.02;
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

  const [shapes, setShapes] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState(null);
  const stageRef = useRef(null);

  const handleMouseDown = () => {
    setIsDrawing(true);
    const pos = stageRef.current.getPointerPosition();
    setStartPos(pos);
    setShapes((prevShapes) => [...prevShapes, { x: pos.x, y: pos.y, width: 0, height: 0 }]);
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

  return (
    <Stage ref={stageRef} width={4000} height={4000} onWheel={handleWheel} scaleX={stage.scale} scaleY={stage.scale} x={stage.x} y={stage.y} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <Layer>
        <Rect width={50} height={50} fill="red" />
        <Circle x={200} y={200} stroke="black" radius={50} />
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
  )
}