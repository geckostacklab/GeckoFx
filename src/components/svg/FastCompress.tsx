import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  thunder: "white",
  star: "#00FF99",
  starCore: "white",
  vortexTeal: "#93FCE5",
  vortexGreen: "#00FF26",
  vortexGlow: "#BDFDEF",
  ring: "white",
  zapGlow: "#00FF26",
  zap: "#C7FFCF",
} as const

type FastCompressColors = {
  thunder: string
  star: string
  starCore: string
  vortexTeal: string
  vortexGreen: string
  vortexGlow: string
  ring: string
  zapGlow: string
  zap: string
}

type Props = {
  className?: string
  colors?: Partial<FastCompressColors>
  animation?: boolean
  speed?: number
}

const THUNDER_PATHS = [
  "M360.035 207.721C358.138 208.261 355.136 209.626 353.505 209.765C349.888 210.074 346.705 206.085 342.873 204.863C339.785 203.877 334.454 212.039 329.109 215.756C325.951 217.952 322.432 220.25 318.477 220.941C315.063 221.894 311.8 221.902 308.524 223.117C307.702 223.53 306.893 223.799 306.059 224.895",
  "M356.764 145.566C351.865 145.836 348.602 146.924 345.326 147.746C343.723 148.148 341.241 147.202 338.383 146.797C334.17 146.2 334.143 141.485 332.92 139.988C329.06 135.263 319.962 136.047 317.52 133.986C315.889 133.037 312.356 132.481 307.862 132.076C306.067 131.671 305.257 130.861 303.605 129.209",
  "M280.706 145.566C278.809 145.296 274.998 143.669 271.587 141.35C267.583 138.628 265.184 135.49 261.908 134.121C258.723 132.788 255.37 131.401 252.094 129.218C248.63 126.908 244.738 124.319 241.463 121.857C237.335 118.755 230.017 119.674 226.607 118.582C222.62 117.306 219.385 115.045 216.38 112.726C213.578 110.564 213.105 105.787 210.52 102.912C209.293 101.42 207.928 100.316 206.296 99.5019C205.474 98.9581 204.665 98.1484 202.195 96.4964",
  "M265.167 143.113C264.358 141.755 258.396 136.341 254.274 131.675C250.943 127.905 248.271 125.137 246.635 121.591C244.678 117.348 245.539 112.068 243.777 108.093C242.21 104.56 238.735 102.238 237.774 97.8744C237.064 94.6523 231.653 95.1388 224.17 94.5908C218.68 94.1889 214.478 92.6853 211.068 91.7284C207.237 90.6534 202.767 90.7716 198.257 89.9578C194.77 89.3288 192.397 84.5234 190.884 80.835C190.517 79.9404 190.745 78.7986 190.34 77.9726C189.536 76.3314 187.482 75.7808 185.985 74.9671C184.38 74.0945 184.202 70.6203 183.258 67.349C181.66 61.8168 174.405 64.8792 172.487 62.2948C171.398 60.8279 167.6 60.512 163.106 60.7818C158.342 61.068 155.595 65.1409 152.319 67.0464C150.624 68.0325 149.044 68.9601 147.412 69.2341C144.01 69.8054 140.874 66.5148 135.018 65.697C130.498 65.0657 128.884 58.3529 121.393 56.8358C117.966 54.2474 114.703 51.5322 110.348 50.0192C108.447 49.8802 105.478 49.8802 102.42 49.8802",
  "M285.613 203.632C285.073 203.632 282.366 203.632 277.876 204.441C269.754 205.906 267.637 212.89 263.008 214.803C256.677 217.421 253.456 217.519 250.728 219.436C248.033 221.332 246.651 225.697 243.098 228.702C241.703 229.882 239.823 230.612 238.596 233.188C236.668 237.237 237.639 241.244 236.551 242.875C235.464 244.507 234.638 246.421 230.315 248.056C210.864 255.417 205.76 252.145 202.207 255.008C198.661 257.6 195.66 260.054 194.298 261.685C193.746 262.507 193.476 263.317 193.198 266.605",
  "M255.353 211.81C250.732 211.81 246.373 212.89 241.74 214.259C238.176 215.313 234.924 216.439 231.783 218.479C228.511 220.606 226.745 223.799 224.828 226.928C223.006 229.899 218.567 230.882 215.427 233.2C212.111 235.648 207.118 236.607 204.656 239.604C202.158 242.646 200.297 246.142 197.978 249.418C195.358 253.119 192.119 255.956 190.07 259.232C189.132 260.731 188.299 262.507 186.668 263.869C183.818 266.247 179.311 265.509 169.248 265.652C164.425 265.72 161.319 262.793 152.613 262.65C149.84 262.605 148.226 263.603 146.999 264.552C143.991 266.878 142.248 272.575 138.96 276.541C135.545 280.661 134.593 284.58 132.822 287.856C131.109 291.025 129.956 293.585 129.142 294.946C126.437 299.472 116.339 295.507 107.633 295.498C104.889 296.308 103.245 297.134 101.614 297.678C100.792 297.952 99.9822 298.222 97.5123 300.135",
  "M158.85 260.88C156.952 260.88 153.141 259.8 149.866 257.752C148.366 256.814 146.59 257.06 144.959 257.604C141.487 258.761 138.42 261.419 134.466 261.967C132.538 262.235 130.782 263.333 128.741 263.198C126.971 262.793 125.597 260.896 122.878 259.248C122.056 258.974 121.246 258.704 119.594 258.426",
] as const

const THUNDER_GRADIENTS = [
  { x1: 333.047, y1: 204.781, x2: 333.047, y2: 224.895, stops: [1, 0] },
  { x1: 330.184, y1: 129.209, x2: 330.184, y2: 147.843, stops: [0, 1] },
  { x1: 241.45, y1: 96.4964, x2: 241.45, y2: 145.566, stops: [0, 1] },
  { x1: 183.793, y1: 49.8802, x2: 183.793, y2: 143.113, stops: [0, 1] },
  { x1: 239.406, y1: 203.632, x2: 239.406, y2: 266.605, stops: [1, 0] },
  { x1: 176.433, y1: 211.81, x2: 176.433, y2: 300.135, stops: [1, 0] },
  { x1: 139.222, y1: 257.122, x2: 139.222, y2: 263.21, stops: [1, 0] },
] as const

const VORTEX_LINES = [
  {
    d: "M72.105 51.6429C73.9707 66.9924 92.1532 105.161 149.957 135.042C207.761 164.922 435.245 180.237 541.761 184.160",
    filter: "filter5",
    gradient: "paint14",
    direction: 1,
  },
  {
    d: "M72.105 310.831C73.9707 295.594 92.1532 257.706 149.957 228.045C207.761 198.384 435.245 183.182 541.761 179.288",
    filter: "filter6",
    gradient: "paint15",
    direction: -1,
  },
  {
    d: "M61.3866 95.4905C63.2503 110.628 121.364 152.51 184.9 167.648C248.032 182.689 424.642 176.394 531.043 180.263",
    filter: "filter7",
    gradient: "paint16",
    direction: 1,
  },
  {
    d: "M60.4122 266.009C62.2798 250.697 120.514 208.334 184.182 193.022C247.445 177.808 424.421 184.175 531.043 180.262",
    filter: "filter8",
    gradient: "paint17",
    direction: -1,
  },
] as const

const STAR1_D =
  "M556.194 87.7607L557.243 170.324L579.327 90.3952L559.279 170.795L601.116 98.1456L561.136 171.709L620.294 110.562L562.706 173.014L635.747 126.922L563.897 174.632L646.576 146.275L564.641 176.472L652.153 167.496L564.894 178.425L652.153 189.353L564.641 180.377L646.576 210.574L563.897 182.217L635.747 229.927L562.706 183.835L620.294 246.287L561.136 185.14L601.116 258.703L559.279 186.054L579.327 266.454L557.243 186.525L556.194 269.088L555.145 186.525L533.061 266.454L553.109 186.054L511.272 258.703L551.252 185.14L492.094 246.287L549.682 183.835L476.641 229.927L548.491 182.217L465.812 210.574L547.747 180.377L460.235 189.353L547.494 178.425L460.235 167.496L547.747 176.472L465.812 146.275L548.491 174.632L476.641 126.922L549.682 173.014L492.094 110.562L551.252 171.709L511.272 98.1456L553.109 170.795L533.061 90.3952L555.145 170.324L556.194 87.7607Z"

const STAR2_D =
  "M598.139 111.348L562.671 179.15L612.06 121.427L563.421 179.868L622.951 135.096L563.968 180.779L630.181 151.56L564.282 181.829L633.329 169.861L564.343 182.959L632.211 188.937L564.149 184.102L626.894 207.68L563.71 185.191L617.685 224.998L563.052 186.165L605.121 239.887L562.213 186.965L589.931 251.481L561.242 187.546L572.998 259.105L560.196 187.873L555.306 262.318L559.135 187.929L537.884 260.932L558.121 187.708L521.744 255.028L557.212 187.225L507.823 244.948L556.462 186.508L496.932 231.28L555.915 185.597L489.702 214.816L555.601 184.546L486.554 196.514L555.54 183.417L487.672 177.438L555.734 182.274L492.989 158.696L556.173 181.184L502.198 141.377L556.831 180.211L514.762 126.489L557.67 179.41L529.952 114.895L558.641 178.83L546.885 107.27L559.687 178.502L564.577 104.058L560.748 178.447L581.999 105.444L561.762 178.667L598.139 111.348Z"

const STAR3_D =
  "M529.46 107.749L558.601 178.502L546.129 103.564L559.633 178.388L563.601 104.006L560.682 178.554L580.86 109.051L561.689 178.989L596.903 118.404L562.593 179.668L610.798 131.522L563.344 180.552L621.737 147.642L563.896 181.589L629.085 165.828L564.219 182.718L632.414 185.024L564.293 183.875L631.531 204.112L564.114 184.992L626.488 221.984L563.692 186.004L617.577 237.602L563.052 186.853L605.316 250.057L562.232 187.488L590.419 258.626L561.278 187.874L573.749 262.811L560.246 187.987L556.278 262.369L559.196 187.821L539.019 257.324L558.19 187.386L522.976 247.971L557.285 186.707L509.081 234.854L556.535 185.823L498.141 218.733L555.982 184.786L490.794 200.547L555.659 183.657L487.464 181.352L555.586 182.5L488.347 162.263L555.765 181.383L493.391 144.391L556.186 180.371L502.302 128.773L556.826 179.522L514.562 116.318L557.647 178.887L529.46 107.749Z"

const RING1_D =
  "M150.403 99.7579C153.965 89.2417 163.124 70.7539 171.774 72.2803C182.534 74.1788 189.999 86.5281 195.182 114.514C200.27 141.992 203.085 220.246 192.128 250.377C190.093 255.975 171.774 304.824 150.403 246.307"

const RING2_D =
  "M262.858 140.466C265.728 134.55 272.682 115.691 279.65 116.55C288.318 117.618 293.903 130.062 296.951 146.063C301.022 167.435 300.434 200.001 296.951 214.249C296.108 217.698 281.686 266.151 259.805 214.249"

const RING3_D =
  "M343.765 153.696C346.193 149.153 348.854 144.537 353.433 144.537C359.54 144.537 362.867 153.696 363.61 156.24C367.079 168.11 369.043 195.127 361.575 208.143C360.188 210.561 353.433 222.391 343.765 205.09"

const VORTEX_FILL_D =
  "M44.4629 -1.14441e-05C58.531 7.62188 91.6504 32.1138 111.583 69.1055C131.516 106.097 248.365 139.058 304.299 150.914L541.762 169.206V192.072L304.299 206.808C249.721 215.615 134.77 240.649 111.583 270.323C88.3961 299.998 57.175 327.742 44.4629 337.904L0 340L0 -1.14441e-05H44.4629Z"

const VECTOR5_D =
  "M60.4122 187.083C150.977 181.495 119.244 183.934 184.557 180.479C261.384 176.415 424.536 184.374 531.043 180.479"

const ZAP_GLOW_D =
  "M571 173.779L592.437 140L633.361 148.445L607.377 173.779L623.617 188.72L571 234.841L592.437 188.72L571 173.779Z"

const ZAP_D =
  "M578.317 171.041L593.154 146.995C593.82 145.917 595.091 145.373 596.33 145.636L622.116 151.108C624.443 151.602 625.297 154.477 623.618 156.161L608.578 171.242C607.386 172.437 607.414 174.38 608.64 175.54L617.238 183.675C618.51 184.879 618.485 186.911 617.185 188.083L587.491 214.852C585.077 217.027 581.41 214.349 582.748 211.388L593.251 188.149C593.84 186.846 593.427 185.308 592.265 184.475L579.122 175.054C577.84 174.136 577.489 172.382 578.317 171.041Z"

export default function FastCompress({
  className = "w-200",
  colors,
  animation = true,
  speed = 6,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const u = (s: string) => `${uid}-${s}`

  const sf = 1 / speed
  const thunderCycle = 2.4 * sf
  const vortexCycle = 1.2 * sf

  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 665 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {animation && (
          <style>{`
            @keyframes ${uid}-speed-ltr {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: -100; }
            }
            @keyframes ${uid}-speed-rtl {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: 100; }
            }
            .${uid}-speed-ltr {
              stroke-dasharray: 18 82;
              animation: ${uid}-speed-ltr ${vortexCycle}s linear infinite;
            }
            .${uid}-speed-rtl {
              stroke-dasharray: 18 82;
              animation: ${uid}-speed-rtl ${vortexCycle}s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .${uid}-speed-ltr,
              .${uid}-speed-rtl {
                animation: none;
              }
            }
          `}</style>
        )}
        <g id="fast-compress">
          <g id="thunder">
            {THUNDER_PATHS.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke={`url(#${u(`paint${i}`)})`}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                pathLength={1}
                strokeDasharray={1}
                animate={
                  animation
                    ? {
                      strokeDashoffset: [1, 0, 0, 0, 0, 0, 0, 1],
                      opacity: [0, 1, 1, 0.3, 0.9, 0.4, 0.8, 0],
                    }
                    : { strokeDashoffset: 0, opacity: 1 }
                }
                transition={{
                  duration: thunderCycle,
                  times: [0, 0.15, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
                  repeat: Infinity,
                  delay: i * 0.05 * sf,
                  ease: "easeOut",
                }}
              />
            ))}
          </g>
          <g id="bg-glow">
            <g filter={`url(#${u("filter0")})`}>
              <path d={STAR1_D} fill={c.star} />
            </g>
            <g filter={`url(#${u("filter1")})`}>
              <path d={STAR2_D} fill={c.star} />
            </g>
            <g filter={`url(#${u("filter2")})`} opacity="0.16">
              <path d={STAR3_D} fill={c.star} />
            </g>
            <g filter={`url(#${u("filter3")})`}>
              <ellipse cx="556.861" cy="186.424" rx="46.6652" ry="47.9985" fill={c.star} />
            </g>
            <g filter={`url(#${u("filter4")})`}>
              <circle cx="536.794" cy="180.166" r="17.5544" fill={c.starCore} />
            </g>
          </g>
          <g id="vortex">
            {VORTEX_LINES.map((line, i) => (
              <g key={i}>
                <g filter={`url(#${u(line.filter)})`}>
                  <path
                    d={line.d}
                    stroke={`url(#${u(line.gradient)})`}
                    strokeWidth="6"
                    fill="none"
                    opacity={animation ? 0.55 : 1}
                  />
                </g>
                {animation && (
                  <path
                    d={line.d}
                    stroke={c.star}
                    strokeWidth="3"
                    opacity={0.2}
                    fill="none"
                    strokeLinecap="round"
                    className={
                      line.direction === 1
                        ? `${uid}-speed-ltr`
                        : `${uid}-speed-ltr`
                    }
                  />
                )}
              </g>
            ))}
            <motion.g
              filter={`url(#${u("filter9")})`}
              animate={
                animation
                  ? { opacity: [0.6, 1, 0.6] }
                  : { opacity: 1 }
              }
              transition={{
                duration: vortexCycle,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d={VECTOR5_D}
                stroke={`url(#${u("paint18")})`}
                strokeWidth="6"
                fill="none"
              />
            </motion.g>
            <motion.path
              d={VORTEX_FILL_D}
              fill={`url(#${u("paint19")})`}
              animate={
                animation
                  ? { opacity: [0.85, 1, 0.85] }
                  : { opacity: 1 }
              }
              transition={{
                duration: vortexCycle * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
          <g id="glow-ring-1">
            <g filter={`url(#${u("filter10")})`}>
              <path d={RING1_D} stroke={c.ring} strokeWidth="6" fill="none" />
            </g>
            <motion.path
              d={RING1_D}
              stroke={c.ring}
              strokeWidth="6"
              fill="none"
              animate={
                animation
                  ? { opacity: [0.5, 1, 0.5] }
                  : { opacity: 1 }
              }
              transition={{
                duration: vortexCycle * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
          <g id="glow-ring-2">
            <g filter={`url(#${u("filter11")})`}>
              <path d={RING2_D} stroke={c.ring} strokeWidth="4" fill="none" />
            </g>
            <motion.path
              d={RING2_D}
              stroke={c.ring}
              strokeWidth="4"
              fill="none"
              animate={
                animation
                  ? { opacity: [0.5, 1, 0.5] }
                  : { opacity: 1 }
              }
              transition={{
                duration: vortexCycle * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
          </g>
          <g id="glow-ring-3">
            <g filter={`url(#${u("filter12")})`}>
              <path d={RING3_D} stroke={c.ring} strokeWidth="2" fill="none" />
            </g>
            <motion.path
              d={RING3_D}
              stroke={c.ring}
              strokeWidth="2"
              fill="none"
              animate={
                animation
                  ? { opacity: [0.5, 1, 0.5] }
                  : { opacity: 1 }
              }
              transition={{
                duration: vortexCycle * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            />
          </g>
          <g id="box">
            <foreignObject
              x="504.664"
              y="61.3228"
              width="190.017"
              height="238.2"
            >
              <div
                style={{
                  backdropFilter: "blur(15px)",
                  clipPath: `url(#${u("bgblur_clip")})`,
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <rect
              id="Rectangle 1"
              data-figma-bg-blur-radius="30"
              width="129.457"
              height="177.823"
              rx="15"
              transform="matrix(0.999993 -0.0038002 -0.00379818 0.999993 535.283 91.7578)"
              fill="#B1B1B1"
              fillOpacity="0.22"
            />
            <rect
              id="Rectangle 2"
              width="118.486"
              height="166.846"
              rx="13"
              transform="matrix(0.999993 -0.00380021 -0.00379819 0.999993 540.634 97.4504)"
              fill="#121212"
            />
          </g>
          <g
            id="zap"
          >
            <g filter={`url(#${u("filter14")})`}>
              <path d={ZAP_GLOW_D} fill={c.zapGlow} fillOpacity="0.38" />
            </g>
            <path d={ZAP_D} fill={c.zap} />
          </g>
        </g>
        <defs>
          {THUNDER_GRADIENTS.map((g, i) => (
            <linearGradient
              key={i}
              id={u(`paint${i}`)}
              x1={g.x1}
              y1={g.y1}
              x2={g.x2}
              y2={g.y2}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={c.thunder} stopOpacity={g.stops[0]} />
              <stop offset="1" stopColor={c.thunder} stopOpacity={g.stops[1]} />
            </linearGradient>
          ))}
          <filter
            id={u("filter0")}
            x="450.235"
            y="77.7607"
            width="211.918"
            height="201.328"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter
            id={u("filter1")}
            x="484.554"
            y="102.058"
            width="150.774"
            height="162.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1" />
          </filter>
          <filter
            id={u("filter2")}
            x="485.464"
            y="101.564"
            width="148.95"
            height="163.248"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1" />
          </filter>
          <filter
            id={u("filter3")}
            x="460.196"
            y="88.4258"
            width="193.33"
            height="195.997"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" />
          </filter>
          <filter
            id={u("filter4")}
            x="489.24"
            y="132.611"
            width="95.1088"
            height="95.1087"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter
            id={u("filter5")}
            x="59.127"
            y="41.2809"
            width="492.745"
            height="155.877"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter
            id={u("filter6")}
            x="59.1272"
            y="166.29"
            width="492.744"
            height="154.905"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter
            id={u("filter7")}
            x="48.4091"
            y="85.124"
            width="492.743"
            height="108.137"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter
            id={u("filter8")}
            x="47.4343"
            y="167.264"
            width="493.719"
            height="109.108"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter
            id={u("filter9")}
            x="50.2275"
            y="166.288"
            width="490.925"
            height="33.7894"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter
            id={u("filter10")}
            x="139.561"
            y="61.19"
            width="71.1107"
            height="224.606"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <filter
            id={u("filter11")}
            x="251.962"
            y="108.521"
            width="55.8257"
            height="137.582"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <filter
            id={u("filter12")}
            x="339.883"
            y="140.537"
            width="30.8107"
            height="77.7997"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
          <clipPath
            id={u("bgblur_clip")}
            transform="translate(-504.664 -61.3228)"
          >
            <rect
              width="129.457"
              height="177.823"
              rx="15"
              transform="matrix(0.999993 -0.0038002 -0.00379818 0.999993 535.283 91.7578)"
            />
          </clipPath>
          <filter
            id={u("filter14")}
            x="545.6"
            y="114.6"
            width="113.161"
            height="145.641"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="12.7" />
          </filter>
          <linearGradient
            id={u("paint14")}
            x1="72.105"
            y1="117.901"
            x2="541.761"
            y2="117.901"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0" />
            <stop offset="1" stopColor={c.vortexTeal} />
          </linearGradient>
          <linearGradient
            id={u("paint15")}
            x1="541.761"
            y1="245.059"
            x2="72.105"
            y2="245.059"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.vortexTeal} />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={u("paint16")}
            x1="60.8783"
            y1="109.115"
            x2="532.929"
            y2="179.237"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0" />
            <stop offset="1" stopColor={c.vortexTeal} />
          </linearGradient>
          <linearGradient
            id={u("paint17")}
            x1="531.043"
            y1="223.136"
            x2="60.4122"
            y2="223.136"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.vortexTeal} />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={u("paint18")}
            x1="531.043"
            y1="223.15"
            x2="60.9212"
            y2="223.15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.vortexGreen} />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={u("paint19")}
            x1="541.253"
            y1="178.352"
            x2="-63.8439"
            y2="174.79"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.vortexGlow} />
            <stop offset="0.913462" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
