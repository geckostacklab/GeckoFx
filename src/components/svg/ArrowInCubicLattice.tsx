import { motion, useMotionValue, useSpring } from "motion/react"
import { useId, useRef } from "react"

const DEFAULT_COLORS = {
  primary: "#A135FF",
  primaryLight: "#C697FF",
  primaryDark: "#4900AD",
  arrowStroke: "#818181",
  cubeStroke: "#6E6E6E",
  edgeHighlight: "#F0E3FF",
  edgeShadow: "#262626",
}

type ArrowInCubicLatticeColors = {
  primary: string
  primaryLight: string
  primaryDark: string
  arrowStroke: string
  cubeStroke: string
  edgeHighlight: string
  edgeShadow: string
}

type Props = {
  className?: string
  colors?: Partial<ArrowInCubicLatticeColors>
  float?: boolean
  floatDistance?: number
  floatDelay?: number
  magnetic?: boolean
}

export default function ArrowInCubicLattice({
  className = "h-100",
  colors = DEFAULT_COLORS,
  float = true,
  floatDistance = 20,
  floatDelay = 0,
  magnetic = true,
}: Props) {
  const {
    primary,
    primaryLight,
    primaryDark,
    arrowStroke,
    cubeStroke,
    edgeHighlight,
    edgeShadow,
  } = colors

  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 16, stiffness: 120, mass: 0.5 })
  const springY = useSpring(mouseY, { damping: 16, stiffness: 120, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic) return
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const offsetX = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 10
    const offsetY = ((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * 10
    mouseX.set(offsetX)
    mouseY.set(offsetY)
  }

  const handleMouseLeave = () => {
    if (!magnetic) return
    mouseX.set(0)
    mouseY.set(0)
  }

  const ids = {
    p0: useId(),
    p1: useId(),
    p2: useId(),
    p3: useId(),
    p4: useId(),
    p5: useId(),
    p6: useId(),
    p7: useId(),
    p8: useId(),
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={magnetic ? "cursor-pointer" : undefined}
    >
      <motion.div
        initial={float ? { y: floatDistance } : undefined}
        animate={{ y: float ? -floatDistance : 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className="rounded-3xl overflow-hidden"
      >
        <svg
          className={className}
          viewBox="0 0 464 381"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <g id="arrow-inside-cubic-lattice">
            <g id="cube-back-face">
              <path
                d="M122.5 357L257.87 367.258L450.128 241.296L304.277 237.981L122.5 357Z"
                stroke={cubeStroke}
                strokeOpacity="0.5"
              />
              <path
                d="M121.963 357.314L10 133.5L211.5 12.5L304.277 237.981L121.963 357.314Z"
                stroke={cubeStroke}
                strokeOpacity="0.5"
              />
              <circle cx="122.259" cy="357.259" r="13.2592" fill={`url(#${ids.p0})`} />
              <circle cx="304.259" cy="238.259" r="13.2592" fill={`url(#${ids.p1})`} />
            </g>
            <motion.g
              id="arrow"
              style={{ x: springX, y: springY }}
            >
              <path
                d="M121.963 141.851L131 125.5L243 162L254.555 284.388L237.981 287.703L198.5 229.5L155.111 264.499L125.277 228.036L172.5 193L121.963 141.851Z"
                fill="black"
                stroke={arrowStroke}
              />
              <path
                d="M307.592 105.389L131.907 125.277L188.259 178.314L138.537 218.092L168.37 254.555L214.777 218.092L254.555 284.388L307.592 105.389Z"
                fill={`url(#${ids.p2})`}
                stroke={`url(#${ids.p3})`}
              />
            </motion.g>
            <g id="cube-top-faces">
              <path
                d="M257.87 367.258L148.481 148.481L350.684 25.8333L450.128 241.296L257.87 367.258Z"
                stroke={cubeStroke}
                strokeOpacity="0.5"
              />
              <path
                d="M148.481 148.481L12.574 131.907L211.462 12.574L347.5 27.9999L148.481 148.481Z"
                stroke={cubeStroke}
                strokeOpacity="0.5"
              />
              <circle cx="213.259" cy="13.2592" r="13.2592" fill={`url(#${ids.p4})`} />
              <circle cx="13.2592" cy="134.259" r="13.2592" fill={`url(#${ids.p5})`} />
              <circle cx="259.259" cy="367.259" r="13.2592" fill={`url(#${ids.p6})`} />
              <circle cx="450.259" cy="241.259" r="13.2592" fill={`url(#${ids.p7})`} />
              <circle cx="347.369" cy="29.148" r="13.2592" fill={`url(#${ids.p8})`} />
            </g>
          </g>
          <Definations
            ids={ids}
            primary={primary}
            primaryLight={primaryLight}
            primaryDark={primaryDark}
            edgeHighlight={edgeHighlight}
            edgeShadow={edgeShadow}
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

function Definations({
  ids,
  primary,
  primaryLight,
  primaryDark,
  edgeHighlight,
  edgeShadow,
}: {
  ids: {
    p0: string
    p1: string
    p2: string
    p3: string
    p4: string
    p5: string
    p6: string
    p7: string
    p8: string
  }
  primary?: string
  primaryLight?: string
  primaryDark?: string
  edgeHighlight?: string
  edgeShadow?: string
}) {
  return (
    <defs>
      <linearGradient id={ids.p0} x1="127.89" y1="346.111" x2="114.39" y2="374.111" gradientUnits="userSpaceOnUse">
        <stop stopColor={edgeHighlight} />
        <stop offset="1" stopColor={edgeShadow} />
      </linearGradient>
      <linearGradient id={ids.p1} x1="309.89" y1="227.111" x2="296.39" y2="255.111" gradientUnits="userSpaceOnUse">
        <stop stopColor={edgeHighlight} />
        <stop offset="1" stopColor={edgeShadow} />
      </linearGradient>
      <linearGradient id={ids.p2} x1="307.592" y1="108.703" x2="219.749" y2="284.388" gradientUnits="userSpaceOnUse">
        <stop stopColor={primaryLight} />
        <stop offset="0.473827" stopColor={primary} />
        <stop offset="1" stopColor={primaryDark} />
      </linearGradient>
      <linearGradient id={ids.p3} x1="274.444" y1="128.592" x2="314.221" y2="211.462" gradientUnits="userSpaceOnUse">
        <stop stopColor={primaryLight} />
        <stop offset="1" stopColor={primary} stopOpacity="0" />
      </linearGradient>
      <linearGradient id={ids.p4} x1="218.89" y1="2.11121" x2="205.39" y2="30.1112" gradientUnits="userSpaceOnUse">
        <stop stopColor={edgeHighlight} />
        <stop offset="1" stopColor={edgeShadow} />
      </linearGradient>
      <linearGradient id={ids.p5} x1="18.89" y1="123.111" x2="5.39001" y2="151.111" gradientUnits="userSpaceOnUse">
        <stop stopColor={edgeHighlight} />
        <stop offset="1" stopColor={edgeShadow} />
      </linearGradient>
      <linearGradient id={ids.p6} x1="264.89" y1="356.111" x2="251.39" y2="384.111" gradientUnits="userSpaceOnUse">
        <stop stopColor={edgeHighlight} />
        <stop offset="1" stopColor={edgeShadow} />
      </linearGradient>
      <linearGradient id={ids.p7} x1="455.89" y1="230.111" x2="442.39" y2="258.111" gradientUnits="userSpaceOnUse">
        <stop stopColor={edgeHighlight} />
        <stop offset="1" stopColor={edgeShadow} />
      </linearGradient>
      <linearGradient id={ids.p8} x1="353" y1="18" x2="339.5" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor={edgeHighlight} />
        <stop offset="1" stopColor={edgeShadow} />
      </linearGradient>
    </defs>
  )
}
