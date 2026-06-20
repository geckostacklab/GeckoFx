import { cn } from "../../../lib/utils";
import Edges from "./Edges";

export default function Margin({
  className,
  vertical = false,
  edges = true,
  edgesWidth = 14,
  edgesOpacity = 50,
}: {
  className?: string
  vertical?: boolean
  edges?: boolean
  edgesWidth?: number
  edgesOpacity?: number
}) {
  return (
    <div className={cn(
      "relative bg-hatching",
      " h-10 w-full",
      {
        "screen-line-top screen-line-bottom": !vertical,
        "screen-line-left screen-line-right": vertical,
      },
      className
    )}
    >
      {edges && <Edges width={edgesWidth} opacity={edgesOpacity} />}
    </div>
  )
}