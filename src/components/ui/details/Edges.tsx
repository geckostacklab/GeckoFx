import { cn } from "../../../lib/utils";
import CrossAir from "./CrossAir";

export default function Edges({
  opacity = 50,
  color = "white",
  width = 14,
}: {
  opacity?: number,
  color?: string,
  width?: number,
}) {

  return (
    <>
      <CrossAir
        className={cn("absolute z-100")}
        color={color}
        style={{
          opacity: opacity / 100,
          top: `-${width / 2}px`,
          left: `-${width / 2}px`,
          width: `${width}px`,
        }}
      />
      <CrossAir
        className={cn("absolute z-100")}
        color={color}
        style={{
          opacity: opacity / 100,
          top: `-${width / 2}px`,
          right: `-${width / 2}px`,
          width: `${width}px`,
        }}
      />
      <CrossAir
        className={cn("absolute z-100")}
        color={color}
        style={{
          opacity: opacity / 100,
          bottom: `-${width / 2}px`,
          left: `-${width / 2}px`,
          width: `${width}px`,
        }}
      />
      <CrossAir
        className={cn("absolute z-100")}
        color={color}
        style={{
          opacity: opacity / 100,
          bottom: `-${width / 2}px`,
          right: `-${width / 2}px`,
          width: `${width}px`,
        }}
      />
    </>
  );
};