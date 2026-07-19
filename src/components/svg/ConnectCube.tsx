import { motion, useMotionValue, useSpring } from "motion/react"
import { useId, useRef } from "react"

const DEFAULT_COLORS = {
  primary: "#988BFF",
  surface: "#191D26",
  border: "#2A333F",
  dot: "#384C6E",
  beamColor: "#FFFFFF",
}

type ConnectCubeColors = {
  primary: string
  surface: string
  border: string
  dot: string
  beamColor: string
}

type Props = {
  className?: string
  colors?: Partial<ConnectCubeColors>
  float?: boolean
  floatDistance?: number
  floatDelay?: number
  beam?: boolean,
  magnetic?: boolean
  ping?: boolean
}

const LINE1 = "M173 68C167.5 57 143.099 30.7861 131.499 33.1861C119.899 35.5861 115.332 49.5194 114.499 56.186C110.999 77.5193 111.399 138.786 140.999 213.186C177.999 306.186 217.499 383.686 249.999 401.186C275.999 415.186 285.499 403.019 286.999 395.186C288.499 390.519 287.6 374.9 284 356.5"
const LINE2 = "M62.0101 304.286C50.9158 309.593 24.28 333.533 26.4772 345.174C28.6744 356.814 42.5258 361.623 49.1769 362.572C70.4459 366.444 131.71 367.113 206.615 338.816C300.247 303.445 378.424 265.304 396.489 233.114C410.941 207.362 398.942 197.651 391.136 196.015C386.496 194.434 370.863 195.06 352.403 198.338"
const LINE3 = "M235.5 179.499C238.5 154 249.5 131.5 273 114.5C296.915 97.1995 321.5 96.5001 330 102.5"

export default function ConnectCube({
  className = "h-100",
  colors = DEFAULT_COLORS,
  float = true,
  floatDistance = 20,
  floatDelay = 0,
  beam = true,
  magnetic = true,
  ping = false,
}: Props) {
  const { primary, surface, border, dot, beamColor } = colors
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
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={magnetic ? "cursor-pointer" : undefined}
    >
      <motion.div
        initial={(float) ? { y: floatDistance } : undefined}
        animate={{ y: (float) ? -floatDistance : 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: floatDelay }}
        className="rounded-3xl overflow-hidden"
      >
        <svg
          className={className}
          viewBox="0 0 431 443"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* for chrome remove them as blur does not show up in chrome  */}
          {/* <rect x="127" y="58" width="178" height="119" fill={primary} />
          <path d="M216 16L398.731 126.25H33.2686L216 16Z" fill={primary} /> */}

          {/* blured container */}
          <foreignObject x="-71.1285" y="-96.7436" width="573.257" height="636.487">
            <div style={{
              backdropFilter: "blur(50px)",
              clipPath: "url(#bgblur_0_2013_3342_clip_path)",
              height: "100%",
              width: "100%"
            }}></div>
          </foreignObject>
          <path
            data-figma-bg-blur-radius="100"
            d="M206.059 7.34668C211.879 3.89279 219.121 3.89279 224.941 7.34668L391.569 106.229C397.185 109.561 400.629 115.607 400.629 122.138V320.862C400.629 327.393 397.185 333.439 391.569 336.771L224.941 435.653C219.121 439.107 211.879 439.107 206.059 435.653L39.4307 336.771C33.8148 333.439 30.3712 327.393 30.3711 320.862V122.138C30.3712 115.607 33.8148 109.561 39.4307 106.229L206.059 7.34668Z"
            fill={beamColor} fillOpacity="0.05"
            stroke={`url(#${ids.p0})`} strokeWidth="3"
          />
          <motion.rect
            y="1" width="197.763" height="199"
            transform="matrix(0.866025 0.5 -0.866025 0.5 218.937 21.5)"
            fill={surface} stroke={border} strokeWidth="2"
          />
          <circle opacity="0.41" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 70.0001 121.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 92.5167 108.5)" fill={dot} />
          <circle opacity="0.47" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 115.033 95.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 137.55 82.5)" fill={dot} />
          <g transform="matrix(0.866025 -0.5 0.866025 0.5 160.067 69.5)">
            <motion.circle
              cx="7.5" cy="7.5" r="7.5"
              fill={primary} filter="url(#cubeGlow)"
              initial={{ scale: ping ? 1 : undefined }}
              animate={{ scale: ping ? [1, 1.4, 1] : undefined }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          </g>
          <circle opacity="0.58" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 182.583 56.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 205.1 43.5)" fill={dot} />
          <circle opacity="0.54" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 92.0001 133.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 114.517 120.5)" fill={dot} />
          <circle opacity="0.43" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 137.033 107.5)" fill={dot} />
          <circle opacity="0.93" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 159.55 94.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 182.067 81.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 204.583 68.5)" fill={dot} />
          <circle opacity="0.48" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 227.1 55.5)" fill={dot} />
          <circle opacity="0.4" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 114 145.5)" fill={dot} />
          <circle opacity="0.28" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 136.517 132.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 159.033 119.5)" fill={dot} />
          <circle opacity="0.68" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 181.55 106.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 204.067 93.5)" fill={dot} />
          <circle opacity="0.33" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 226.583 80.5)" fill={dot} />
          <circle opacity="0.71" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 249.1 67.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 136 157.5)" fill={dot} />
          <circle opacity="0.3" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 158.517 144.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 181.033 131.5)" fill={dot} />
          <circle opacity="0.35" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 203.55 118.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 226.067 105.5)" fill={dot} />
          <circle cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 248.583 92.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 271.1 79.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 158 169.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 180.517 156.5)" fill={dot} />
          <circle opacity="0.31" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 203.033 143.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 225.55 130.5)" fill={dot} />
          <circle opacity="0.27" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 248.067 117.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 270.583 104.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 293.1 91.5)" fill={dot} />
          <circle opacity="0.52" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 180 181.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 202.517 168.5)" fill={dot} />
          <circle opacity="0.4" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 225.033 155.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 247.55 142.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 270.067 129.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 292.583 116.5)" fill={dot} />
          <g transform="matrix(0.866025 -0.5 0.866025 0.5 315.1 103.5)">
            <motion.circle
              cx="7.5" cy="7.5" r="7.5"
              fill={primary} filter="url(#cubeGlow)"
              initial={{ scale: ping ? 1 : undefined }}
              animate={{ scale: ping ? [1, 1.4, 1] : undefined }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          </g>
          <circle cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 202 193.5)" fill={dot} />
          <g transform="matrix(0.866025 -0.5 0.866025 0.5 224.517 180.5)">
            <motion.circle
              cx="7.5" cy="7.5" r="7.5"
              fill={primary} filter="url(#cubeGlow)"
              initial={{ scale: ping ? 1 : undefined }}
              animate={{ scale: ping ? [1, 1.4, 1] : undefined }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          </g>
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 247.033 167.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 269.55 154.5)" fill={dot} />
          <circle opacity="0.42" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 292.067 141.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 314.583 128.5)" fill={dot} />
          <circle opacity="0.3" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 337.1 115.5)" fill={dot} />
          <motion.rect
            x="0.866025" y="1.5" width="197.763" height="199"
            transform="matrix(0.866025 0.5 0 1 45.116 120.567)"
            fill={surface} stroke={border} strokeWidth="2"
            initial={{ opacity: 1 }}
          />
          <g transform="matrix(0.866025 0.5 0 1 56 293)">
            <motion.circle
              cx="7.5" cy="7.5" r="7.5"
              fill={primary} filter="url(#cubeGlow)"
              initial={{ scale: ping ? 1 : undefined }}
              animate={{ scale: ping ? [1, 1.4, 1] : undefined }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          </g>
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 78.5167 306)" fill={dot} />
          <circle opacity="0.47" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 101.033 319)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 123.55 332)" fill={dot} />
          <circle cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 146.067 345)" fill={dot} />
          <circle opacity="0.58" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 168.583 358)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 191.1 371)" fill={dot} />
          <circle opacity="0.54" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 57 263.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 79.5167 276.5)" fill={dot} />
          <circle opacity="0.43" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 102.033 289.5)" fill={dot} />
          <circle opacity="0.93" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 124.55 302.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 147.067 315.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 169.583 328.5)" fill={dot} />
          <circle opacity="0.48" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 192.1 341.5)" fill={dot} />
          <circle opacity="0.4" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 57 234)" fill={dot} />
          <circle opacity="0.28" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 79.5167 247)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 102.033 260)" fill={dot} />
          <circle opacity="0.68" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 124.55 273)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 147.067 286)" fill={dot} />
          <circle opacity="0.33" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 169.583 299)" fill={dot} />
          <circle opacity="0.71" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 192.1 312)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 57 204.5)" fill={dot} />
          <circle opacity="0.3" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 79.5167 217.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 102.033 230.5)" fill={dot} />
          <circle opacity="0.35" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 124.55 243.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 147.067 256.5)" fill={dot} />
          <circle cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 169.583 269.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 192.1 282.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 57 175)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 79.5167 188)" fill={dot} />
          <circle opacity="0.31" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 102.033 201)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 124.55 214)" fill={dot} />
          <circle opacity="0.27" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 147.067 227)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 169.583 240)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 192.1 253)" fill={dot} />
          <circle opacity="0.52" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 58.0903 147)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 80.607 160)" fill={dot} />
          <circle opacity="0.4" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 103.124 173)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 125.64 186)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 148.157 199)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 170.674 212)" fill={dot} />
          <circle opacity="0.27" cx="7.5" cy="7.5" r="7.5" transform="matrix(0.866025 0.5 0 1 193.19 225)" fill={dot} />
          <motion.rect
            x="-0.866025" y="1.5" width="197.763" height="199"
            transform="matrix(-0.866025 0.5 0 1 389.384 120.433)"
            fill={surface} stroke={border} strokeWidth="2"
            initial={{ opacity: 1 }}
          />
          <circle opacity="0.41" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 380 292)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 357.483 305)" fill={dot} />
          <circle opacity="0.47" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 334.967 318)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 312.45 331)" fill={dot} />
          <g transform="matrix(-0.866025 0.5 0 1 289.933 344)">
            <motion.circle
              cx="7.5" cy="7.5" r="7.5"
              fill={primary} filter="url(#cubeGlow)"
              initial={{ scale: ping ? 1 : undefined }}
              animate={{ scale: ping ? [1, 1.4, 1] : undefined }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          </g>
          <circle opacity="0.58" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 267.417 357)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 244.9 370)" fill={dot} />
          <circle opacity="0.54" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 379 262.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 356.483 275.5)" fill={dot} />
          <circle opacity="0.43" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 333.967 288.5)" fill={dot} />
          <circle opacity="0.93" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 311.45 301.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 288.933 314.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 266.417 327.5)" fill={dot} />
          <circle opacity="0.48" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 243.9 340.5)" fill={dot} />
          <circle opacity="0.4" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 379 233)" fill={dot} />
          <circle opacity="0.28" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 356.483 246)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 333.967 259)" fill={dot} />
          <circle opacity="0.68" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 311.45 272)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 288.933 285)" fill={dot} />
          <circle opacity="0.33" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 266.417 298)" fill={dot} />
          <circle opacity="0.71" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 243.9 311)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 379 203.5)" fill={dot} />
          <circle opacity="0.3" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 356.483 216.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 333.967 229.5)" fill={dot} />
          <circle opacity="0.35" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 311.45 242.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 288.933 255.5)" fill={dot} />
          <circle cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 266.417 268.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 243.9 281.5)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 379 174)" fill={dot} />
          <motion.path
            d="M343.493 202C343.493 206.142 346.401 207.821 349.988 205.75C353.575 203.679 356.483 198.642 356.483 194.5C356.483 190.358 353.575 188.679 349.988 190.75C346.401 192.821 343.493 197.858 343.493 202Z"
            fill={primary} filter="url(#cubeGlow)"
            initial={{ scale: ping ? 1 : undefined }}
            animate={{ scale: ping ? [1, 1.3, 1] : undefined }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <circle opacity="0.31" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 333.967 200)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 311.45 213)" fill={dot} />
          <circle opacity="0.27" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 288.933 226)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 266.417 239)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 243.9 252)" fill={dot} />
          <circle opacity="0.52" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 377.91 146)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 355.393 159)" fill={dot} />
          <circle opacity="0.4" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 332.876 172)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 310.36 185)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 287.843 198)" fill={dot} />
          <circle opacity="0.25" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 265.326 211)" fill={dot} />
          <circle opacity="0.27" cx="7.5" cy="7.5" r="7.5" transform="matrix(-0.866025 0.5 0 1 242.81 224)" fill={dot} />
          {/* connecting line 1 */}
          <path d={LINE1} stroke={`url(#${ids.p1})`} strokeWidth="5" strokeLinecap="round" />
          {
            beam && (
              <circle cx={0} cy={0} r={4.5} fill={beamColor} filter="url(#cubeGlow)">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s" path={LINE1} />
              </circle>
            )
          }
          {/* connecting line 2 */}
          <path d={LINE2} stroke={`url(#${ids.p2})`} strokeWidth="5" strokeLinecap="round" />
          {
            beam && <circle cx={0} cy={0} r={4.5} fill={beamColor} filter="url(#cubeGlow)">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.6s" path={LINE2} />
            </circle>
          }
          {/* connecting line 3 */}
          <path d={LINE3} stroke={`url(#${ids.p3})`} strokeWidth="5" strokeLinecap="round" />
          {
            beam && <circle cx={0} cy={0} r={4.5} fill={beamColor} filter="url(#cubeGlow)">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.2s" path={LINE3} />
            </circle>
          }
          <Definations ids={ids} primary={primary} beamColor={beamColor} />
        </svg>
      </motion.div>
    </motion.div>
  )
}


function Definations(
  { ids,
    primary,
    beamColor
  }:
    {
      ids:
      {
        p0: string,
        p1: string,
        p2: string,
        p3: string
      },
      primary?: string,
      beamColor?: string
    }
) {
  return (
    <defs>
      <filter id="cubeGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <clipPath id="bgblur_0_2013_3342_clip_path" transform="translate(71.1285 96.7436)"><path d="M206.059 7.34668C211.879 3.89279 219.121 3.89279 224.941 7.34668L391.569 106.229C397.185 109.561 400.629 115.607 400.629 122.138V320.862C400.629 327.393 397.185 333.439 391.569 336.771L224.941 435.653C219.121 439.107 211.879 439.107 206.059 435.653L39.4307 336.771C33.8148 333.439 30.3712 327.393 30.3711 320.862V122.138C30.3712 115.607 33.8148 109.561 39.4307 106.229L206.059 7.34668Z" />
      </clipPath>
      {/* 
    
      --- gradient definitions ----
      here you can update the colors and opacities as needed to achieve the desired visual effect.

    */}
      {/* container border gradient */}
      <linearGradient id={`${ids.p0}`} x1="215.5" y1="0" x2="215.5" y2="443" gradientUnits="userSpaceOnUse">
        <stop stopColor={primary} stop-opacity="0.9" />
        <stop offset="1" stopColor={primary} stop-opacity="0.1" />
      </linearGradient>
      {/* connecting lines gradients */}
      <radialGradient id={`${ids.p1}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(155.5 239.5) rotate(75.0617) scale(173.973 81.1399)">
        <stop stopColor={beamColor} />
        <stop offset="1" stopColor={primary} />
      </radialGradient>
      <radialGradient id={`${ids.p2}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(233.178 324.776) rotate(-13.9383) scale(173.973 81.1399)">
        <stop stopColor={beamColor} />
        <stop offset="1" stopColor={primary} />
      </radialGradient>
      <radialGradient id={`${ids.p3}`} cx="0" cy="0" r="1" gradientTransform="matrix(8.24999 52.5 -43.5765 -9.21827 268 106.5)" gradientUnits="userSpaceOnUse">
        <stop stopColor={beamColor} />
        <stop offset="1" stopColor={primary} />
      </radialGradient>
    </defs>
  )
}