import { motion, useInView } from "motion/react"
import { useId, useRef } from "react"

const DEFAULT_COLORS = {
  folderBackTop: "#36303C",
  folderBackBottom: "#000000",
  pageTop: "#EFEFF7",
  pageBottom: "#EFEFF7",
  pageLineStart: "#B9B9CF",
  pageLineEnd: "#E3E2F6",
  folderFrontTop: "#B9B9CF",
  folderFrontBottom: "#000000",
  folderBackShadowR: "0.701923",
  folderBackShadowG: "0.701923",
  folderBackShadowB: "0.701923",
  folderFrontShadowR: "0.595807",
  folderFrontShadowG: "0.595807",
  folderFrontShadowB: "0.716346",
} as const

type FolderColors = { [K in keyof typeof DEFAULT_COLORS]: string }

type Props = {
  className?: string
  colors?: Partial<FolderColors>
  animate?: boolean
}

const RIGHT_PAGE_CX = 195.643
const RIGHT_PAGE_CY = 17.3102
const LEFT_PAGE_CX = 42
const LEFT_PAGE_CY = 60.937

export default function Folder({ className = "w-100", colors, animate = true }: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const f0 = `${uid}-f0`
  const f1 = `${uid}-f1`
  const f2 = `${uid}-f2`
  const f3 = `${uid}-f3`
  const f4 = `${uid}-f4`

  const p = Array.from({ length: 25 }, (_, i) => `${uid}-p${i}`)
  const bgBlurClip = `${uid}-bgBlurClip`

  const popSpring = {
    type: "spring" as const,
    stiffness: 280,
    damping: 18,
    mass: 0.8,
  }

  const anim = animate ? (isInView ? "visible" : "hidden") : "visible"

  return (
    <div>
      <svg
        ref={ref}
        className={className}
        width="427"
        height="356"
        viewBox="0 0 427 356"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g id="folder">
          <g filter={`url(#${f0})`}>
            <rect x="17" y="11" width="392" height="344" rx="31" fill={`url(#${p[0]})`} />
          </g>

          <motion.g
            initial={animate ? "hidden" : false}
            animate={anim}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.g
              initial={animate ? "hidden" : false}
              animate={anim}
              variants={{
                hidden: { scale: 0.5, y: 40 },
                visible: { scale: 1, y: 0 },
              }}
              style={{ transformOrigin: "306px 161px", transformBox: "view-box" }}
              transition={{ ...popSpring, delay: 0.05 }}
            >
              <motion.g
                initial={animate ? "hidden" : false}
                animate={anim}
                variants={{
                  hidden: { rotate: -16 },
                  visible: { rotate: 0 },
                }}
                style={{ transformOrigin: `${RIGHT_PAGE_CX}px ${RIGHT_PAGE_CY}px`, transformBox: "view-box" }}
                transition={{ ...popSpring, delay: 0.05 }}
              >
                <foreignObject
                  x="195.643"
                  y="17.3102"
                  width="221.077"
                  height="288"
                  rx="24"
                  transform={`rotate(16 ${RIGHT_PAGE_CX} ${RIGHT_PAGE_CY})`}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: c.pageTop,
                      borderRadius: 24,
                      boxShadow: "inset 0 0 0 4px #FFFFFF",
                    }}
                  />
                </foreignObject>
                <g>
                  <rect x="215.208" y="60.371" width="158.667" height="15" rx="7.5" transform="rotate(16 215.208 60.371)" fill={`url(#${p[1]})`} />
                  <rect x="200.875" y="110.357" width="158.667" height="8" rx="4" transform="rotate(16 200.875 110.357)" fill={`url(#${p[2]})`} />
                  <rect x="194.811" y="131.504" width="158.667" height="8" rx="4" transform="rotate(16 194.811 131.504)" fill={`url(#${p[3]})`} />
                  <rect x="188.747" y="152.652" width="158.667" height="8" rx="4" transform="rotate(16 188.747 152.652)" fill={`url(#${p[4]})`} />
                  <rect x="182.682" y="173.8" width="158.667" height="8" rx="4" transform="rotate(16 182.682 173.8)" fill={`url(#${p[5]})`} />
                  <rect x="176.619" y="194.948" width="158.667" height="8" rx="4" transform="rotate(16 176.619 194.948)" fill={`url(#${p[6]})`} />
                  <rect x="170.555" y="216.095" width="158.667" height="8" rx="4" transform="rotate(16 170.555 216.095)" fill={`url(#${p[7]})`} />
                  <rect x="164.49" y="237.243" width="158.667" height="8" rx="4" transform="rotate(16 164.49 237.243)" fill={`url(#${p[8]})`} />
                </g>
              </motion.g>
            </motion.g>

            <motion.g
              initial={animate ? "hidden" : false}
              animate={anim}
              variants={{
                hidden: { scale: 0.5, y: 40 },
                visible: { scale: 1, y: 0 },
              }}
              style={{ transformOrigin: "224px 178px", transformBox: "view-box" }}
              transition={{ ...popSpring, delay: 0.0 }}
            >
              <foreignObject
                x="113.26"
                y="34.3102"
                width="221.077"
                height="288"
                rx="24"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: c.pageTop,
                    borderRadius: 24,
                    boxShadow: "inset 0 0 0 4px #FFFFFF",
                  }}
                />
              </foreignObject>
              <g>
                <rect x="143.936" y="70.3102" width="158.667" height="15" rx="7.5" fill={`url(#${p[9]})`} />
                <rect x="143.936" y="122.31" width="158.667" height="8" rx="4" fill={`url(#${p[10]})`} />
                <rect x="143.936" y="144.31" width="158.667" height="8" rx="4" fill={`url(#${p[11]})`} />
                <rect x="143.936" y="166.31" width="158.667" height="8" rx="4" fill={`url(#${p[12]})`} />
                <rect x="143.936" y="188.31" width="158.667" height="8" rx="4" fill={`url(#${p[13]})`} />
                <rect x="143.936" y="210.31" width="158.667" height="8" rx="4" fill={`url(#${p[14]})`} />
                <rect x="143.936" y="232.31" width="158.667" height="8" rx="4" fill={`url(#${p[15]})`} />
                <rect x="143.936" y="254.31" width="158.667" height="8" rx="4" fill={`url(#${p[16]})`} />
              </g>
            </motion.g>

            <motion.g
              initial={animate ? "hidden" : false}
              animate={anim}
              variants={{
                hidden: { scale: 0.5, y: 40 },
                visible: { scale: 1, y: 0 },
              }}
              style={{ transformOrigin: "153px 205px", transformBox: "view-box" }}
              transition={{ ...popSpring, delay: 0.05 }}
            >
              <motion.g
                initial={animate ? "hidden" : false}
                animate={anim}
                variants={{
                  hidden: { rotate: 16 },
                  visible: { rotate: 0 },
                }}
                style={{ transformOrigin: `${LEFT_PAGE_CX}px ${LEFT_PAGE_CY}px`, transformBox: "view-box" }}
                transition={{ ...popSpring, delay: 0.05 }}
              >
                <foreignObject
                  x="42"
                  y="60.937"
                  width="221.077"
                  height="288"
                  rx="24"
                  transform={`rotate(-16 ${LEFT_PAGE_CX} ${LEFT_PAGE_CY})`}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: c.pageTop,
                      borderRadius: 24,
                      boxShadow: "inset 0 0 0 4px #FFFFFF",
                    }}
                  />
                </foreignObject>
                <g>
                  <rect x="81.4104" y="87.087" width="158.667" height="15" rx="7.5" transform="rotate(-16 81.4104 87.087)" fill={`url(#${p[17]})`} />
                  <rect x="95.7435" y="137.073" width="158.667" height="8" rx="4" transform="rotate(-16 95.7435 137.073)" fill={`url(#${p[18]})`} />
                  <rect x="101.808" y="158.22" width="158.667" height="8" rx="4" transform="rotate(-16 101.808 158.22)" fill={`url(#${p[19]})`} />
                  <rect x="107.872" y="179.368" width="158.667" height="8" rx="4" transform="rotate(-16 107.872 179.368)" fill={`url(#${p[20]})`} />
                  <rect x="113.936" y="200.516" width="158.667" height="8" rx="4" transform="rotate(-16 113.936 200.516)" fill={`url(#${p[21]})`} />
                  <rect x="120" y="221.664" width="158.667" height="8" rx="4" transform="rotate(-16 120 221.664)" fill={`url(#${p[22]})`} />
                  <rect x="126.064" y="242.811" width="158.667" height="8" rx="4" transform="rotate(-16 126.064 242.811)" fill={`url(#${p[23]})`} />
                  <rect x="132.128" y="263.959" width="158.667" height="8" rx="4" transform="rotate(-16 132.128 263.959)" fill={`url(#${p[24]})`} />
                </g>
              </motion.g>
            </motion.g>
          </motion.g>

          <foreignObject x="-10" y="83" width="446.019" height="322.221">
            <div
              style={{
                backdropFilter: "blur(5px)",
                clipPath: `url(#${bgBlurClip})`,
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>
          <g filter={`url(#${f4})`}>
            <path
              d="M385 355.221H42C39.1667 354.554 32 352.021 26 347.221C20 342.421 17.8333 336.554 17.5 334.221L0.554299 120.221L0 113.221C1.6 104.821 8 98.7209 11 96.7209C13.4 94.7209 18 93.5542 20 93.2209C81 93.0542 204.2 92.8209 209 93.2209C213.8 93.6209 220 98.7209 222.5 101.221C235 115.888 260.9 145.721 264.5 147.721C268.1 149.721 274 150.554 276.5 150.721L405.5 152.221C408.5 152.721 415.7 155.521 420.5 162.721C425.3 169.921 426.167 175.054 426 176.721L409.5 331.221C409 334.388 406.7 342.021 401.5 347.221C396.3 352.421 388.333 354.721 385 355.221Z"
              fill={`url(#${p[0]})`}
              fillOpacity="0.6"
            />
          </g>
        </g>

        <defs>
          <filter id={f0} x="17" y="11" width="392" height="348" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values={`0 0 0 0 ${c.folderBackShadowR} 0 0 0 0 ${c.folderBackShadowG} 0 0 0 0 ${c.folderBackShadowB} 0 0 0 0.25 0`} />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>

          <filter id={f1} x="121.939" y="22.9895" width="280.537" height="326.422" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-4" dy="3" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>

          <filter id={f2} x="113.26" y="34.3102" width="221.077" height="288" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-4" dy="3" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>

          <filter id={f3} x="47.6794" y="5.67938" width="280.537" height="326.422" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-4" dy="3" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>

          <filter id={f4} x="-10" y="83" width="446.019" height="322.221" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="50" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values={`0 0 0 0 ${c.folderFrontShadowR} 0 0 0 0 ${c.folderFrontShadowG} 0 0 0 0 ${c.folderFrontShadowB} 0 0 0 0.7 0`} />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>

          <clipPath id={bgBlurClip} transform="translate(10 -83)">
            <path d="M385 355.221H42C39.1667 354.554 32 352.021 26 347.221C20 342.421 17.8333 336.554 17.5 334.221L0.554299 120.221L0 113.221C1.6 104.821 8 98.7209 11 96.7209C13.4 94.7209 18 93.5542 20 93.2209C81 93.0542 204.2 92.8209 209 93.2209C213.8 93.6209 220 98.7209 222.5 101.221C235 115.888 260.9 145.721 264.5 147.721C268.1 149.721 274 150.554 276.5 150.721L405.5 152.221C408.5 152.721 415.7 155.521 420.5 162.721C425.3 169.921 426.167 175.054 426 176.721L409.5 331.221C409 334.388 406.7 342.021 401.5 347.221C396.3 352.421 388.333 354.721 385 355.221Z" />
          </clipPath>

          <linearGradient id={p[0]} x1="213" y1="11" x2="213" y2="355" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.folderBackTop} />
            <stop offset="1" stopColor={c.folderBackBottom} />
          </linearGradient>

          <linearGradient id={p[1]} x1="215.208" y1="67.871" x2="373.875" y2="67.871" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[2]} x1="200.875" y1="114.357" x2="359.542" y2="114.357" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[3]} x1="194.811" y1="135.504" x2="353.478" y2="135.504" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[4]} x1="188.747" y1="156.652" x2="347.414" y2="156.652" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[5]} x1="182.682" y1="177.8" x2="341.35" y2="177.8" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[6]} x1="176.619" y1="198.948" x2="335.286" y2="198.948" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[7]} x1="170.555" y1="220.095" x2="329.222" y2="220.095" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[8]} x1="164.49" y1="241.243" x2="323.158" y2="241.243" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>

          <linearGradient id={p[9]} x1="143.936" y1="77.8102" x2="302.603" y2="77.8102" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[10]} x1="143.936" y1="126.31" x2="302.603" y2="126.31" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[11]} x1="143.936" y1="148.31" x2="302.603" y2="148.31" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[12]} x1="143.936" y1="170.31" x2="302.603" y2="170.31" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[13]} x1="143.936" y1="192.31" x2="302.603" y2="192.31" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[14]} x1="143.936" y1="214.31" x2="302.603" y2="214.31" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[15]} x1="143.936" y1="236.31" x2="302.603" y2="236.31" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[16]} x1="143.936" y1="258.31" x2="302.603" y2="258.31" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>

          <linearGradient id={p[17]} x1="81.4104" y1="94.587" x2="240.078" y2="94.587" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[18]} x1="95.7435" y1="141.073" x2="254.411" y2="141.073" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[19]} x1="101.808" y1="162.22" x2="260.475" y2="162.22" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[20]} x1="107.872" y1="183.368" x2="266.539" y2="183.368" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[21]} x1="113.936" y1="204.516" x2="272.603" y2="204.516" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[22]} x1="120" y1="225.664" x2="278.667" y2="225.664" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[23]} x1="126.064" y1="246.811" x2="284.731" y2="246.811" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
          <linearGradient id={p[24]} x1="132.128" y1="267.959" x2="290.795" y2="267.959" gradientUnits="userSpaceOnUse"><stop stopColor={c.pageLineStart} /><stop offset="1" stopColor={c.pageLineEnd} /></linearGradient>
        </defs>
      </svg>
    </div>
  )
}