import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  frame: "#0B0102",
  frameStroke: "#D9D9D9",
  frameHighlight: "#DDDDDD",
  frameHighlightBright: "white",
  accent: "white",
  led: "#53070F",
  ledGlow: "#FF001A",
  lensGradientStart: "#BFBFBF",
  lensGradientEnd: "#595959",
  lensGlareStart: "#0B0102",
  lensGlareEnd: "#53070F",
  lensGlareStrokeStart: "white",
  lensGlareStrokeEnd: "#C9C9C9",
} as const

type IsometricCameraColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<IsometricCameraColors>
  animate?: boolean
  blinkSpeed?: number
}

export default function IsometricCamera({
  className = "w-80",
  colors,
  animate = true,
  blinkSpeed = 1.5,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const paint0Id = `${uid}-paint0`
  const paint1Id = `${uid}-paint1`
  const paint2Id = `${uid}-paint2`
  const paint3Id = `${uid}-paint3`
  const paint4Id = `${uid}-paint4`
  const paint5Id = `${uid}-paint5`
  const ledGlowFilterId = `${uid}-ledGlowFilter`

  return (
    <div>
      <svg
        className={className}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 436 547"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="isometric-camera">
          <g id="camera-frame">
            <path d="M384.657 77.793L119.138 228.442L2.38455 149.351L267.904 0.585205L384.657 77.793Z" fill={c.frame} stroke={c.frameStroke} />
            <path d="M119.138 518.443V228.442L2.02508 149.902L0.501434 445.001L119.138 518.443Z" fill={c.frame} stroke={c.frameStroke} />
            <path d="M384.657 352.728L119.727 519.005V228.751L384.657 77.7928V352.728Z" fill={c.frame} stroke={c.frameStroke} />
            <path d="M105.956 220.91L371.476 68.3774" stroke={c.frameHighlight} />
            <path d="M110.204 223.205L375.723 70.6727" stroke={c.frameHighlightBright} strokeOpacity="0.44" />
            <path d="M106.945 220.569V510.806" stroke={c.frameHighlight} />
            <path d="M110.204 222.533V513.479" stroke={c.frameHighlightBright} strokeOpacity="0.44" />
          </g>
          <g id="camera-buttons">
            <path d="M52.0845 223.293C62.6214 229.377 71.2208 245.04 71.2208 258.322C71.2208 271.604 62.6215 277.338 52.0845 271.254C41.5475 265.171 32.9474 249.507 32.9474 236.225C32.9474 222.942 41.5475 217.21 52.0845 223.293Z" stroke={c.accent} />
            <path id="indicator-led" d="M367.078 101.328C371.736 98.6388 375.57 101.162 375.57 107.09C375.57 113.019 371.736 119.968 367.078 122.658C362.42 125.348 358.585 122.825 358.585 116.896C358.585 110.968 362.42 104.017 367.078 101.328Z" fill={c.led} stroke={c.accent} />
            <motion.g
              id="indicator-led-glow"
              filter={`url(#${ledGlowFilterId})`}
              animate={animate ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.8 }}
              transition={
                animate
                  ? { duration: blinkSpeed, repeat: Infinity, ease: "easeInOut" }
                  : undefined
              }
            >
              <ellipse cx="10.3063" cy="11.1652" rx="10.3063" ry="11.1652" transform="matrix(0.866025 -0.5 0 1 358.152 105.981)" fill={c.ledGlow} />
            </motion.g>
            <path d="M52.0845 392.773C62.6214 398.857 71.2208 414.52 71.2208 427.802C71.2208 441.085 62.6215 446.818 52.0845 440.734C41.5475 434.651 32.9474 418.988 32.9474 405.705C32.9474 392.423 41.5475 386.69 52.0845 392.773Z" stroke={c.accent} />
            <rect width="15.0649" height="75.3247" rx="3" transform="matrix(0.866025 0.5 0 1 47.5794 294.352)" fill={c.accent} />
            <rect width="15.0649" height="46.9748" rx="3" transform="matrix(0.866025 0.5 0 1 47.5794 294.352)" fill={c.led} fillOpacity="0.52" />
            <rect width="15.0649" height="33.3627" rx="3" transform="matrix(0.866025 0.5 0 1 47.5794 294.352)" fill={c.led} fillOpacity="0.62" />
            <rect width="15.0649" height="17.603" rx="3" transform="matrix(0.866025 0.5 0 1 47.5794 294.352)" fill={c.led} />
          </g>
          <g id="camera-lens">
            <path d="M382.356 182.143L307.45 145.585C271.043 152.49 189.19 187.39 153.034 271.754C116.878 356.118 130.437 411.105 141.735 428.053L204.164 467.518" stroke={c.frameHighlight} />
            <g id="lens-frame">
              <path d="M311.216 198.136C379.632 158.637 435.068 188.535 435.068 264.863C435.068 341.19 379.631 435.1 311.216 474.6C242.8 514.1 187.363 484.203 187.363 407.875C187.363 331.548 242.8 237.636 311.216 198.136Z" fill={c.frame} stroke={`url(#${paint0Id})`} />
              <path d="M311.149 205.468C375.774 168.157 428.146 197.029 428.146 269.919C428.146 342.809 375.774 432.155 311.149 469.466C246.524 506.777 194.152 477.905 194.152 405.015C194.152 332.125 246.524 242.779 311.149 205.468Z" fill={c.frame} stroke={`url(#${paint1Id})`} />
              <path d="M311.448 210.258C373.479 174.445 423.747 202.158 423.748 272.12C423.748 342.083 373.479 427.841 311.448 463.654C249.418 499.468 199.149 471.755 199.149 401.792C199.149 331.829 249.418 246.071 311.448 210.258Z" fill={c.frame} stroke={`url(#${paint2Id})`} />
              <path d="M310.732 219.253C369.613 185.258 417.319 210.959 417.319 276.602C417.319 342.245 369.613 423.031 310.732 457.025C251.852 491.019 204.146 465.32 204.146 399.677C204.146 334.034 251.852 253.247 310.732 219.253Z" fill={c.frame} stroke={`url(#${paint3Id})`} />
            </g>
            <path id="lens-glare" d="M310.057 224.412C366.532 191.806 412.188 216.529 412.188 279.366C412.188 342.202 366.532 419.643 310.057 452.249C253.582 484.855 207.926 460.132 207.926 397.296C207.926 334.46 253.582 257.018 310.057 224.412Z" fill={`url(#${paint4Id})`} stroke={`url(#${paint5Id})`} strokeWidth="5" />
            <path d="M207.644 384.741C223.337 399.806 279.403 412.847 323.381 342.624C367.378 272.372 333.813 236.602 311.216 222.793" stroke={c.frameHighlight} />
            <path d="M203.454 389.689C220.333 405.554 280.636 419.287 327.938 345.338C375.26 271.358 339.159 233.692 314.854 219.15" stroke={c.frameHighlight} strokeOpacity="0.45" />
            <path d="M203.454 393.461C220.82 409.94 282.863 424.205 331.529 347.391C380.216 270.543 343.074 231.417 318.067 216.311" stroke={c.frameHighlight} strokeOpacity="0.13" />
            <path d="M202.035 398.554C220.212 415.771 285.154 430.676 336.095 350.422C387.057 270.133 349.556 232.093 323.381 216.311" stroke={c.frameHighlight} strokeOpacity="0.13" />
          </g>
        </g>
        <defs>
          <linearGradient id={paint0Id} x1="264.482" y1="244.696" x2="429.089" y2="303.649" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.lensGradientStart} />
            <stop offset="1" stopColor={c.lensGradientEnd} />
          </linearGradient>
          <linearGradient id={paint1Id} x1="266.993" y1="249.638" x2="423.167" y2="305.093" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.lensGradientStart} />
            <stop offset="1" stopColor={c.lensGradientEnd} />
          </linearGradient>
          <linearGradient id={paint2Id} x1="269.059" y1="252.64" x2="418.985" y2="305.878" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.lensGradientStart} />
            <stop offset="1" stopColor={c.lensGradientEnd} />
          </linearGradient>
          <linearGradient id={paint3Id} x1="270.491" y1="259.264" x2="412.197" y2="310.039" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.lensGradientStart} />
            <stop offset="1" stopColor={c.lensGradientEnd} />
          </linearGradient>
          <linearGradient id={paint4Id} x1="310.057" y1="221.912" x2="410.879" y2="396.54" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.lensGlareStart} />
            <stop offset="1" stopColor={c.lensGlareEnd} />
          </linearGradient>
          <linearGradient id={paint5Id} x1="359.572" y1="405.781" x2="229.872" y2="345.835" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.lensGlareStrokeStart} />
            <stop offset="1" stopColor={c.lensGlareStrokeEnd} />
          </linearGradient>
          <filter
            id={ledGlowFilterId}
            x="338.152"
            y="79.6934"
            width="57.8511"
            height="64.6"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
