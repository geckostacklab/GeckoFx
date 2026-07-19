import { motion, useReducedMotion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  shackleGradientStart: "rgba(253, 128, 128, 1)",
  shackleGradientEnd: "rgba(230, 56, 48, 1)",
  lockBodyFill: "#FFC5C5",
  strokeStart: "#FFE4E4",
  strokeEnd: "white",
  keyHoleStart: "#FFD8D8",
  keyHoleEnd: "white",
} as const

type LockColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<LockColors>
  animate?: boolean,
  shakeDuration?: number
}

export default function Lock({
  className = "w-56",
  colors,
  animate = true,
  shakeDuration = 0.3,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const shouldReduceMotion = useReducedMotion()
  const canAnimate = animate && !shouldReduceMotion

  const clipPathId = `${uid}-clip`
  const bgBlurId = `${uid}-bgblur`
  const strokeGradientId = `${uid}-stroke`
  const keyHoleGradientId = `${uid}-keyhole`

  return (
    <div>
      <svg
        className={className}
        width="224"
        height="273"
        viewBox="0 0 224 273"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="lock"
        >
          <motion.g
            id="shackle-group"
            style={{
              transformBox: "fill-box",
              transformOrigin: "18px 133px",
            }}
            initial={canAnimate ? { x: 0, rotate: 0 } : undefined}
            animate={
              canAnimate
                ? {
                  x: [0, -6, 6, -6, 6, -3, 3, 0],
                  rotate: [0, -3, 3, -3, 3, -1.5, 1.5, 0],
                }
                : undefined
            }
            transition={
              canAnimate
                ? {
                  duration: shakeDuration,
                  delay: 0.1,
                  ease: "easeOut",
                  times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
                }
                : undefined
            }
          >
            <g clip-path={`url(#${clipPathId})`} data-figma-skip-parse="true">
              <g transform="matrix(-0.00049999 0.0965 -0.115658 -0.000599253 112.5 68)">
                <foreignObject x="-719.436" y="-719.436" width="1438.87" height="1438.87">
                  <div
                    style={{
                      background: `conic-gradient(from 90deg,${c.shackleGradientStart} 0deg,${c.shackleGradientEnd} 360deg)`,
                      height: "100%",
                      width: "100%",
                      opacity: 1,
                    }}
                  />
                </foreignObject>
              </g>
            </g>
          </motion.g>
          <foreignObject x="-30" y="65.5" width="284" height="237">
            <div
              style={{
                backdropFilter: "blur(15px)",
                clipPath: `url(#${bgBlurId})`,
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g
            id="lock-body-group"
          >
            <rect
              id="lock-body"
              data-figma-bg-blur-radius="30"
              x="1"
              y="96.5"
              width="222"
              height="175"
              rx="46"
              fill={c.lockBodyFill}
              fill-opacity="0.44"
              stroke={`url(#${strokeGradientId})`}
              stroke-width="2"
            />
            <circle
              id="key-hole"
              cx="112.5"
              cy="190"
              r="22.5"
              fill={`url(#${keyHoleGradientId})`}
            />
          </g>
        </g>
        <defs>
          <clipPath id={clipPathId}>
            <path d="M31 69V136H67V72.5C70 54 88.5 36.5 111 36.5C136.5 36.5 156 55.5 159.5 72.5V136H194V69C190.5 39.5 162 -1.52588e-05 111 0C60 1.52588e-05 32 42.5 31 69Z" />
          </clipPath>
          <clipPath id={bgBlurId} transform="translate(30 -65.5)">
            <rect x="1" y="96.5" width="222" height="175" rx="46" />
          </clipPath>
          <linearGradient
            id={strokeGradientId}
            x1="112"
            y1="95.5"
            x2="112"
            y2="272.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={c.strokeStart} />
            <stop offset="1" stop-color={c.strokeEnd} stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id={keyHoleGradientId}
            x1="112"
            y1="133.5"
            x2="112"
            y2="201.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={c.keyHoleStart} stop-opacity="0" />
            <stop offset="1" stop-color={c.keyHoleEnd} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
