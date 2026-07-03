import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  scanZone: "#C786FF",
  scanZoneGradientFrom: "#E1BEFF",
  scanZoneGradientTo: "#785099",
  detectedOuter: "#E5C9DE",
  detectedInner: "#311E2E",
  detectedCore: "#E5C9DE",
  glowPoint: "#EBD4FF",
  radarLine: "#363636",
} as const

type RadarScanColors = {
  scanZone: string
  scanZoneGradientFrom: string
  scanZoneGradientTo: string
  detectedOuter: string
  detectedInner: string
  detectedCore: string
  glowPoint: string
  radarLine: string
}

type Props = {
  className?: string
  colors?: Partial<RadarScanColors>
  animation?: boolean
}

const RADAR_CX = 192.05
const RADAR_CY = 201

const SCAN_ZONE_D =
  "M318.796 76.3957C322.403 72.8659 322.416 67.0432 318.64 63.6954C285.129 33.9873 241.704 17.0129 196.29 16.0801C150.874 15.1473 106.757 30.3258 72.0002 58.6354C68.0875 61.8224 67.8566 67.6401 71.3119 71.318L186.054 193.452C189.506 197.127 195.304 197.249 198.908 193.722L318.796 76.3957Z"

const SCAN_ZONE_INNER_D =
  "M293.263 80.7373C296.777 77.2226 296.794 71.5012 293.077 68.2012C266.248 44.3829 231.742 30.7903 195.679 30.0334C159.616 29.2765 124.57 41.4094 96.7655 64.0811C92.9132 67.2222 92.6896 72.9393 96.0537 76.5984L186.147 174.591C189.612 178.359 195.517 178.483 199.137 174.863L293.263 80.7373Z"

const RADAR_LINES = [
  {
    d: "M192.343 200.951L4.21582 200.951",
    points: [
      { cx: 118.378, cy: 200.951, rotate: 0 },
      { cx: 81.3961, cy: 200.951, rotate: 0 },
      { cx: 42.8061, cy: 200.951, rotate: 0 },
      { cx: 4.21585, cy: 200.951, rotate: 0 },
    ],
    filterStart: 0,
  },
  {
    d: "M192.435 201.324L29.5121 107.26",
    points: [
      { cx: 128.38, cy: 164.342, rotate: 30 },
      { cx: 96.3524, cy: 145.851, rotate: 30 },
      { cx: 62.9325, cy: 126.556, rotate: 30 },
      { cx: 29.5125, cy: 107.261, rotate: 30 },
    ],
    filterStart: 4,
  },
  {
    d: "M192.328 201.692L98.2645 38.7696",
    points: [
      { cx: 155.346, cy: 137.637, rotate: 60 },
      { cx: 136.854, cy: 105.61, rotate: 60 },
      { cx: 117.559, cy: 72.1899, rotate: 60 },
      { cx: 98.2642, cy: 38.7699, rotate: 60 },
    ],
    filterStart: 8,
  },
  {
    d: "M192.05 201.959L192.05 13.832",
    points: [
      { cx: 192.05, cy: 127.995, rotate: 90 },
      { cx: 192.05, cy: 91.0124, rotate: 90 },
      { cx: 192.05, cy: 52.4221, rotate: 90 },
      { cx: 192.05, cy: 13.8319, rotate: 90 },
    ],
    filterStart: 12,
  },
  {
    d: "M191.677 202.051L285.741 39.1277",
    points: [
      { cx: 228.659, cy: 137.996, rotate: 120 },
      { cx: 247.15, cy: 105.968, rotate: 120 },
      { cx: 266.446, cy: 72.5481, rotate: 120 },
      { cx: 285.741, cy: 39.1281, rotate: 120 },
    ],
    filterStart: 16,
  },
  {
    d: "M191.308 201.944L354.23 107.88",
    points: [
      { cx: 255.362, cy: 164.961, rotate: 150 },
      { cx: 287.39, cy: 146.47, rotate: 150 },
      { cx: 320.81, cy: 127.175, rotate: 150 },
      { cx: 354.23, cy: 107.88, rotate: 150 },
    ],
    filterStart: 20,
  },
  {
    d: "M191.041 201.666L379.168 201.666",
    points: [
      { cx: 265.006, cy: 201.666, rotate: 180 },
      { cx: 301.988, cy: 201.666, rotate: 180 },
      { cx: 340.578, cy: 201.666, rotate: 180 },
      { cx: 379.168, cy: 201.666, rotate: 180 },
    ],
    filterStart: 24,
  },
  {
    d: "M190.95 201.292L353.873 295.356",
    points: [
      { cx: 255.005, cy: 238.274, rotate: -150 },
      { cx: 287.032, cy: 256.766, rotate: -150 },
      { cx: 320.452, cy: 276.061, rotate: -150 },
      { cx: 353.872, cy: 295.356, rotate: -150 },
    ],
    filterStart: 28,
  },
  {
    d: "M191.057 200.923L285.121 363.846",
    points: [
      { cx: 228.04, cy: 264.978, rotate: -120 },
      { cx: 246.531, cy: 297.006, rotate: -120 },
      { cx: 265.826, cy: 330.426, rotate: -120 },
      { cx: 285.121, cy: 363.846, rotate: -120 },
    ],
    filterStart: 32,
  },
  {
    d: "M191.335 200.657L191.335 388.784",
    points: [
      { cx: 191.335, cy: 274.621, rotate: -90 },
      { cx: 191.335, cy: 311.604, rotate: -90 },
      { cx: 191.335, cy: 350.194, rotate: -90 },
      { cx: 191.335, cy: 388.784, rotate: -90 },
    ],
    filterStart: 36,
  },
  {
    d: "M191.709 200.566L97.6451 363.489",
    points: [
      { cx: 154.727, cy: 264.621, rotate: -60 },
      { cx: 136.235, cy: 296.649, rotate: -60 },
      { cx: 116.94, cy: 330.068, rotate: -60 },
      { cx: 97.6451, cy: 363.489, rotate: -60 },
    ],
    filterStart: 40,
  },
  {
    d: "M192.078 200.673L29.1554 294.737",
    points: [
      { cx: 128.023, cy: 237.655, rotate: -30 },
      { cx: 95.996, cy: 256.147, rotate: -30 },
      { cx: 62.5758, cy: 275.442, rotate: -30 },
      { cx: 29.1554, cy: 294.737, rotate: -30 },
    ],
    filterStart: 44,
  },
] as const

const GLOW_FILTERS = [
  { x: 114.163, y: 196.735, w: 8.43164, h: 8.43164 },
  { x: 77.1803, y: 196.735, w: 8.43164, h: 8.43164 },
  { x: 38.5902, y: 196.735, w: 8.43164, h: 8.43164 },
  { x: 0, y: 196.735, w: 8.43164, h: 8.43164 },
  { x: 124.163, y: 160.125, w: 8.43274, h: 8.43286 },
  { x: 92.136, y: 141.634, w: 8.43274, h: 8.43286 },
  { x: 58.7161, y: 122.339, w: 8.43274, h: 8.43286 },
  { x: 25.2961, y: 103.044, w: 8.43274, h: 8.4328 },
  { x: 151.129, y: 133.421, w: 8.43274, h: 8.43286 },
  { x: 132.638, y: 101.394, w: 8.43274, h: 8.43274 },
  { x: 113.343, y: 67.9736, w: 8.43274, h: 8.43274 },
  { x: 94.0479, y: 34.5536, w: 8.43274, h: 8.43274 },
  { x: 187.834, y: 123.779, w: 8.43164, h: 8.43164 },
  { x: 187.834, y: 86.7965, w: 8.43164, h: 8.4317 },
  { x: 187.834, y: 48.2063, w: 8.43164, h: 8.4317 },
  { x: 187.834, y: 9.61609, w: 8.43164, h: 8.4317 },
  { x: 224.443, y: 133.779, w: 8.43274, h: 8.43274 },
  { x: 242.934, y: 101.752, w: 8.43274, h: 8.43274 },
  { x: 262.229, y: 68.3317, w: 8.43274, h: 8.4328 },
  { x: 281.525, y: 34.9117, w: 8.43274, h: 8.4328 },
  { x: 251.146, y: 160.745, w: 8.43274, h: 8.43274 },
  { x: 283.173, y: 142.254, w: 8.43274, h: 8.43274 },
  { x: 316.594, y: 122.959, w: 8.43274, h: 8.43274 },
  { x: 350.014, y: 103.664, w: 8.43274, h: 8.4328 },
  { x: 260.79, y: 197.45, w: 8.43164, h: 8.43164 },
  { x: 297.772, y: 197.45, w: 8.43164, h: 8.43164 },
  { x: 336.362, y: 197.45, w: 8.43164, h: 8.43164 },
  { x: 374.952, y: 197.451, w: 8.43164, h: 8.43164 },
  { x: 250.788, y: 234.058, w: 8.43274, h: 8.43274 },
  { x: 282.816, y: 252.549, w: 8.43274, h: 8.43274 },
  { x: 316.236, y: 271.844, w: 8.43274, h: 8.43274 },
  { x: 349.656, y: 291.14, w: 8.43274, h: 8.43274 },
  { x: 223.823, y: 260.762, w: 8.43274, h: 8.43274 },
  { x: 242.314, y: 292.79, w: 8.43274, h: 8.43274 },
  { x: 261.609, y: 326.209, w: 8.43274, h: 8.43274 },
  { x: 280.904, y: 359.629, w: 8.43274, h: 8.43274 },
  { x: 187.119, y: 270.406, w: 8.43164, h: 8.43164 },
  { x: 187.119, y: 307.388, w: 8.43164, h: 8.43164 },
  { x: 187.119, y: 345.978, w: 8.43164, h: 8.43164 },
  { x: 187.119, y: 384.568, w: 8.43164, h: 8.43164 },
  { x: 150.51, y: 260.405, w: 8.43274, h: 8.43274 },
  { x: 132.019, y: 292.432, w: 8.43274, h: 8.43274 },
  { x: 112.724, y: 325.852, w: 8.43274, h: 8.43274 },
  { x: 93.4287, y: 359.272, w: 8.43274, h: 8.43274 },
  { x: 123.807, y: 233.439, w: 8.43274, h: 8.43274 },
  { x: 91.7795, y: 251.93, w: 8.43274, h: 8.43274 },
  { x: 58.3594, y: 271.225, w: 8.43274, h: 8.43274 },
  { x: 24.939, y: 290.52, w: 8.43274, h: 8.43274 },
] as const

export default function RadarScan({
  className = "w-100",
  colors,
  animation = true,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const u = (s: string) => `${uid}-${s}`

  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 384 393"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {animation && (
          <style>{`
            #${uid}-scan-zone {
              transform-origin: ${RADAR_CX}px ${RADAR_CY}px;
              transform-box: view-box;
              animation: ${uid}-spin 4s linear infinite;
            }
            @keyframes ${uid}-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        )}
        <g id={u("radar")}>
          <g id="Ellipse 1">
            <circle cx="192.343" cy="196.127" r="188.127" fill={`url(#${u("paint0_radial")})`} />
            <circle cx="192.343" cy="196.127" r="187.627" stroke="white" strokeOpacity="0.15" />
          </g>
          <g id="Ellipse 2">
            <circle cx="193.147" cy="195.323" r="151.949" fill={`url(#${u("paint1_radial")})`} />
            <circle cx="193.147" cy="195.323" r="151.449" stroke="white" strokeOpacity="0.15" />
          </g>
          <g id="Ellipse 3">
            <circle cx="192.343" cy="196.127" r="110.947" fill={`url(#${u("paint2_radial")})`} />
            <circle cx="192.343" cy="196.127" r="110.447" stroke="white" strokeOpacity="0.15" />
          </g>
          <g id="Ellipse 4">
            <circle cx="192.343" cy="200.951" r="73.9645" fill={`url(#${u("paint3_radial")})`} />
            <circle cx="192.343" cy="200.951" r="73.4645" stroke="white" strokeOpacity="0.15" />
          </g>
          <g id="radar-web">
            {RADAR_LINES.map((line, lineIndex) => (
              <g key={lineIndex} id={`radar-lines-with-points_${lineIndex + 1}`}>
                <path d={line.d} stroke={c.radarLine} strokeLinecap="round" />
                {line.points.map((point, pointIndex) => {
                  const filterIndex = line.filterStart + pointIndex
                  return (
                    <g key={pointIndex} id={`glow-point_${filterIndex + 1}`} opacity="0.6">
                      <g opacity="0.4" filter={`url(#${u(`filter${filterIndex}_f`)})`}>
                        <circle
                          cx={point.cx}
                          cy={point.cy}
                          r="3.21585"
                          transform={`rotate(${point.rotate} ${point.cx} ${point.cy})`}
                          fill={c.glowPoint}
                        />
                      </g>
                      <circle
                        cx={point.cx}
                        cy={point.cy}
                        r="1.60792"
                        transform={`rotate(${point.rotate} ${point.cx} ${point.cy})`}
                        fill="white"
                      />
                    </g>
                  )
                })}
              </g>
            ))}
          </g>
          <g
            id={u("scan-zone")}
            className={animation ? `${uid}-scan-zone` : undefined}
          >
            <g filter={`url(#${u("filter48_i")})`}>
              <path d={SCAN_ZONE_D} fill={c.scanZone} fillOpacity="0.41" />
            </g>
            <path d={SCAN_ZONE_D} fill={`url(#${u("paint4_linear")})`} fillOpacity="0.41" />
            <g filter={`url(#${u("filter49_f")})`}>
              <path d={SCAN_ZONE_INNER_D} fill="black" fillOpacity="0.53" />
            </g>
          </g>
          <foreignObject x="141.792" y="148.792" width="102.709" height="102.709">
            <div
              style={{
                backdropFilter: "blur(10px)",
                clipPath: `url(#${u("bgblur_clip")})`,
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g id="middle-point" data-figma-bg-blur-radius="20">
            <circle cx="193.147" cy="200.147" r="31.3545" fill={`url(#${u("paint5_radial")})`} />
            <circle cx="193.147" cy="200.147" r="30.8545" stroke="white" strokeOpacity="0.15" />
          </g>
          <motion.g
            id="detected-points"
            animate={
              animation
                ? {  opacity: [0.1, 1, 0.1] }
                : { scale: 1, opacity: 0.6 }
            }
            transition={
              animation
                ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0 }
            }
            style={{
              transformOrigin: "152.949px 71.513px",
              transformBox: "view-box",
            }}
          >
            <g filter={`url(#${u("filter51_f")})`}>
              <circle cx="152.949" cy="71.513" r="7.23566" fill={c.detectedOuter} />
            </g>
            <circle cx="152.949" cy="71.513" r="7.23566" fill={c.detectedInner} />
            <circle cx="152.948" cy="71.5129" r="5.16833" fill={c.detectedCore} />
          </motion.g>
          <motion.g
            id="detected-points_2"
            animate={
              animation
                ? { opacity: [0.1, 1, 0.1] }
                : { scale: 1, opacity: 0.6 }
            }
            transition={
              animation
                ? {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.75,
                  }
                : { duration: 0 }
            }
            style={{
              transformOrigin: "291.23px 163.165px",
              transformBox: "view-box",
            }}
          >
            <g filter={`url(#${u("filter52_f")})`}>
              <circle cx="291.23" cy="163.165" r="5.62773" fill={c.detectedOuter} />
            </g>
            <circle cx="291.23" cy="163.165" r="5.62773" fill={c.detectedInner} />
            <circle cx="291.23" cy="163.165" r="4.01981" fill={c.detectedCore} />
          </motion.g>
        </g>
        <defs>
          {GLOW_FILTERS.map((f, i) => (
            <filter
              key={i}
              id={u(`filter${i}_f`)}
              x={f.x}
              y={f.y}
              width={f.w}
              height={f.h}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur" />
            </filter>
          ))}
          <filter
            id={u("filter48_i")}
            x="68.8823"
            y="16.0396"
            width="252.605"
            height="180.25"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.781525 0 0 0 0 0.524038 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
          <filter
            id={u("filter49_f")}
            x="63.692"
            y="0"
            width="262.19"
            height="207.499"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur" />
          </filter>
          <clipPath id={u("bgblur_clip")} transform="translate(-141.792 -148.792)">
            <circle cx="193.147" cy="200.147" r="31.3545" />
          </clipPath>
          <filter
            id={u("filter51_f")}
            x="143.713"
            y="62.2773"
            width="18.4713"
            height="18.4713"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" />
          </filter>
          <filter
            id={u("filter52_f")}
            x="283.603"
            y="155.537"
            width="15.2555"
            height="15.2555"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" />
          </filter>
          <radialGradient
            id={u("paint0_radial")}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(192.343 196.127) rotate(90) scale(188.127 188.127)"
          >
            <stop stopColor="#737373" stopOpacity="0" />
            <stop offset="0.793681" stopColor="#8D8D8D" stopOpacity="0.0475" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.19" />
          </radialGradient>
          <radialGradient
            id={u("paint1_radial")}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(193.147 195.323) rotate(90) scale(151.949 151.949)"
          >
            <stop stopColor="#737373" stopOpacity="0" />
            <stop offset="0.793681" stopColor="#8D8D8D" stopOpacity="0.0475" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.19" />
          </radialGradient>
          <radialGradient
            id={u("paint2_radial")}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(192.343 196.127) rotate(90) scale(110.947 110.947)"
          >
            <stop stopColor="#737373" stopOpacity="0" />
            <stop offset="0.793681" stopColor="#8D8D8D" stopOpacity="0.0475" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.19" />
          </radialGradient>
          <radialGradient
            id={u("paint3_radial")}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(192.343 200.951) rotate(90) scale(73.9645 73.9645)"
          >
            <stop stopColor="#737373" stopOpacity="0" />
            <stop offset="0.793681" stopColor="#8D8D8D" stopOpacity="0.0475" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.19" />
          </radialGradient>
          <linearGradient
            id={u("paint4_linear")}
            x1="192"
            y1="122"
            x2="192"
            y2="16.0001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c.scanZoneGradientFrom} />
            <stop offset="1" stopColor={c.scanZoneGradientTo} stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id={u("paint5_radial")}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(193.147 200.147) rotate(90) scale(31.3545 31.3545)"
          >
            <stop stopColor="#737373" stopOpacity="0" />
            <stop offset="0.0001" stopColor="#8D8D8D" stopOpacity="0.0475" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.19" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
