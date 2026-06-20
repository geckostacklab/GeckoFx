import { cn } from "../../../lib/utils"

export default function CrossAir({
  className,
  color,
  style
}: {
  className?: string,
  color?: string
  style?: React.CSSProperties
}) {
  return (
    <svg className={cn(className)} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M0 5H5V8V10" stroke={color || "white"} />
      <path d="M5 0V5H10" stroke={color || "white"} />
    </svg>
  )
}