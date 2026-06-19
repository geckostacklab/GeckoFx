import { motion, useMotionValue, useSpring } from "motion/react";
import { useId, useRef } from "react";

const COLORS = {
  accent: "#4C9EFF",
  darkest: "#0F1216",
  dark1: "#1F2532",
  dark2: "#161921",
  dark3: "#181C25",
  dark4: "#232C3B",
  stroke: "#2F374F",
  strokeLight: "#404A67",
  white: "white",
} as const;

export type ServerRackColors = {
  accent: string,
  darkest: string,
  dark1: string,
  dark2: string,
  dark3: string,
  dark4: string,
  stroke: string,
  strokeLight: string,
  white: string,
};

const LEFT_CABLE_PATH = "M3.00028 28V331.5C3.00026 335 3.0001 337.5 6.00028 341C9.39452 344.96 69.1671 377.833 129 413.5"
const RIGHT_CABLE_PATH = "M399.501 27V330.5C399.501 334 399.501 336.5 396.501 340C393.107 343.96 333.334 376.833 273.501 412.5"

export default function ServerRack({
  className = "h-100",
  colors,
  float = true,
  beam = false,
  beamStroke = [6, 10],
  magnetic = false,
}: {
  className?: string
  colors?: Partial<ServerRackColors>
  float?: boolean
  beam?: boolean,
  beamStroke?: [number, number],
  magnetic?: boolean
}) {

  const c = { ...COLORS, ...colors }

  const uid = useId()
  const g = (n: number) => `${uid}-paint${n}_linear_2011_144`
  const clipId = `${uid}-bgblur_0_2011_144_clip_path`

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

  return (
    <div>
      <style>{`
        @keyframes dataFlow {
          to { stroke-dashoffset: -400; }
        }
        @keyframes ledPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes capBreathe {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.75; }
        }
        @keyframes huerotate {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        ${beam && `
          .cable {
          stroke-dasharray: ${beamStroke[0]} ${beamStroke[1]};
          animation: dataFlow 3s linear infinite;
        }
        .cable-reverse {
          stroke-dasharray: ${beamStroke[0]} ${beamStroke[1]};
          animation: dataFlow 3s linear infinite reverse;
        }
          `
        }

        .sp-1 { animation-duration: 10s; }
        .sp-2 { animation-duration: 2.8s; }
        .sp-3 { animation-duration: 3.6s; }
        .sp-4 { animation-duration: 4.6s; }

        .led { animation: ledPulse 1.8s ease-in-out infinite; }
        .led-1 { animation-delay: 0s; }
        .led-2 { animation-delay: 0.1s; }
        .led-3 { animation-delay: 0.2s; }
        .led-4 { animation-delay: 0.3s; }
        .led-5 { animation-delay: 0.4s; }
        .led-6 { animation-delay: 0.5s; }
        .led-7 { animation-delay: 0.6s; }
        .led-8 { animation-delay: 0.7s; }
        .led-9 { animation-delay: 0.8s; }

        .top-cap { animation: capBreathe 3.5s ease-in-out infinite; }

      `}</style>

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={magnetic ? "cursor-pointer" : undefined}
      >
        <svg
          className={className}
          viewBox="0 0 403 589"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <path className="top-cap" d="M205.328 14L363.811 109.25H46.8453L205.328 14Z" fill={c.accent} opacity={0.5} />
          {/* <rect x="128.328" y="50" width="154" height="103" fill="#4C9EFF" /> */}
          <foreignObject x="-56.6188" y="-96.7501" width="523.893" height="577.5">
            <div
              style={{
                backdropFilter: "blur(50px)",
                clipPath: `url(#${clipId})`,
                height: "100%",
                width: "100%"
              }}
            >
            </div>
          </foreignObject>

          <g>
            <motion.g
              animate={float && {
                y: [0, -4, 0],
                transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <path
                data-figma-bg-blur-radius="100"
                d="M195.894 7.33594C201.711 3.88799 208.945 3.88799 214.762 7.33594L356.709 91.4805C362.329 94.8121 365.774 100.861 365.774 107.395V276.605C365.774 283.139 362.329 289.188 356.709 292.52L214.762 376.664C208.945 380.112 201.711 380.112 195.894 376.664L53.9471 292.52C48.3272 289.188 44.8817 283.139 44.8817 276.605V107.395C44.8817 100.861 48.3272 94.8121 53.9471 91.4805L195.894 7.33594Z"
                fill={c.white} fill-opacity="0.05"
                stroke={`url(#${g(0)})`}
                stroke-width="3"
              />

              {/* Stack Layer 1 (bottom) */}
              <motion.g
                initial={{ opacity: 0, scale: 0.55, y: -6 }}
                // animate={{ opacity: row.opacity, scale: 1, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <path d="M66.328 274.5L203.828 354.5V308L66.328 228.5V274.5Z" fill={`url(#${g(1)})`} stroke={c.stroke} stroke-width="2" />
                <path d="M91.2069 259.598C92.6514 261.661 93.3312 263.918 93.3036 265.872C93.276 267.827 92.5509 269.394 91.2819 270.283C90.0126 271.172 88.2908 271.317 86.4441 270.675C84.599 270.033 82.7103 268.622 81.2658 266.559C79.8214 264.496 79.1414 262.238 79.169 260.285C79.1967 258.33 79.9224 256.762 81.1916 255.873C82.4608 254.984 84.1821 254.839 86.0286 255.482C87.8737 256.124 89.7623 257.535 91.2069 259.598Z" stroke={c.stroke} stroke-width="2" />
                <path d="M188.828 313.072L110.328 267.572C108.948 266.772 107.828 266.572 106.828 268.572V281.072C106.828 282.672 108.495 283.739 109.328 284.072C135.328 299.072 187.416 329.131 188.828 330.072C190.328 331.072 191.328 330.072 191.828 329.072V316.572C191.828 314.972 189.828 313.572 188.828 313.072Z" stroke={c.stroke} stroke-width="2" />
                <path d="M204.328 354V308.5L342.828 228V274.5L204.328 354Z" fill={`url(#${g(2)})`} stroke={c.stroke} stroke-width="2" />
                <line x1="274.828" y1="285" x2="274.828" y2="298" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-1" />
                <line x1="281.828" y1="281" x2="281.828" y2="294" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-2" />
                <line x1="288.828" y1="277" x2="288.828" y2="290" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-3" />
                <line x1="295.828" y1="273" x2="295.828" y2="286" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-4" />
                <line x1="302.828" y1="269" x2="302.828" y2="282" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-5" />
                <line x1="309.828" y1="265" x2="309.828" y2="278" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-6" />
                <line x1="316.828" y1="261" x2="316.828" y2="274" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-7" />
                <line x1="323.828" y1="257" x2="323.828" y2="270" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-8" />
                <line x1="330.828" y1="253" x2="330.828" y2="266" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-9" />
                <path d="M341.828 228L204.328 308L66.328 228L204.328 149L341.828 228Z" fill={c.darkest} stroke={c.stroke} stroke-width="2" />
                <path d="M204.328 162L92.328 227.5L204.328 292L318.328 227.5L204.328 162Z" fill={c.dark2} fill-opacity="0.81" stroke={c.stroke} stroke-width="2" className="core-breathe" />
              </motion.g>

              {/* Stack Layer 2 (middle) */}
              <motion.g
                initial={{ opacity: 0, scale: 0.55, y: -6 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <path d="M67.328 215.5L204.828 295.5V249L67.328 169.5V215.5Z" fill={`url(#${g(3)})`} stroke={c.stroke} stroke-width="2" />
                <path d="M92.2069 200.598C93.6514 202.661 94.3312 204.918 94.3036 206.872C94.276 208.827 93.5509 210.394 92.2819 211.283C91.0126 212.172 89.2908 212.317 87.4441 211.675C85.599 211.033 83.7103 209.622 82.2658 207.559C80.8214 205.496 80.1414 203.238 80.169 201.285C80.1967 199.33 80.9224 197.762 82.1916 196.873C83.4608 195.984 85.1821 195.839 87.0286 196.482C88.8737 197.124 90.7623 198.535 92.2069 200.598Z" stroke={c.stroke} stroke-width="2" />
                <path d="M189.828 254.072L111.328 208.572C109.948 207.772 108.828 207.572 107.828 209.572V222.072C107.828 223.672 109.495 224.739 110.328 225.072C136.328 240.072 188.416 270.131 189.828 271.072C191.328 272.072 192.328 271.072 192.828 270.072V257.572C192.828 255.972 190.828 254.572 189.828 254.072Z" stroke={c.stroke} stroke-width="2" />
                <path d="M205.328 295V249.5L343.828 169V215.5L205.328 295Z" fill={`url(#${g(4)})`} stroke={c.stroke} stroke-width="2" />
                <line x1="275.828" y1="226" x2="275.828" y2="239" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-1" />
                <line x1="282.828" y1="222" x2="282.828" y2="235" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-2" />
                <line x1="289.828" y1="218" x2="289.828" y2="231" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-3" />
                <line x1="296.828" y1="214" x2="296.828" y2="227" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-4" />
                <line x1="303.828" y1="210" x2="303.828" y2="223" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-5" />
                <line x1="310.828" y1="206" x2="310.828" y2="219" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-6" />
                <line x1="317.828" y1="202" x2="317.828" y2="215" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-7" />
                <line x1="324.828" y1="198" x2="324.828" y2="211" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-8" />
                <line x1="331.828" y1="194" x2="331.828" y2="207" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-9" />
                <path d="M342.828 169L205.328 249L67.328 169L205.328 90L342.828 169Z" fill={c.darkest} stroke={c.stroke} stroke-width="2" />
                <path d="M205.328 103L93.328 168.5L205.328 233L319.328 168.5L205.328 103Z" fill={c.dark2} fill-opacity="0.81" stroke={c.stroke} stroke-width="2" className="core-breathe-2" />
              </motion.g>

              {/* Stack Layer 3 (top) */}
              <motion.g
                initial={{ opacity: 0, scale: 0.55, y: -6 }}
                // animate={{ opacity: row.opacity, scale: 1, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <path d="M67.828 155.5L205.328 235.5V189L67.828 109.5V155.5Z" fill={`url(#${g(5)})`} stroke={c.stroke} stroke-width="2" />
                <path d="M92.7069 140.598C94.1514 142.661 94.8312 144.918 94.8036 146.872C94.776 148.827 94.0509 150.394 92.7819 151.283C91.5126 152.172 89.7908 152.317 87.9441 151.675C86.099 151.033 84.2103 149.622 82.7658 147.559C81.3214 145.496 80.6414 143.238 80.669 141.285C80.6967 139.33 81.4224 137.762 82.6916 136.873C83.9608 135.984 85.1821 135.839 87.5286 136.482C89.3737 137.124 91.2623 138.535 92.7069 140.598Z" stroke={c.stroke} stroke-width="2" />
                <path d="M190.328 194.072L111.828 148.572C110.448 147.772 109.328 147.572 108.328 149.572V162.072C108.328 163.672 109.995 164.739 110.328 165.072C136.328 180.072 188.916 210.131 190.328 211.072C191.828 212.072 192.828 211.072 193.328 210.072V197.572C193.328 195.972 191.328 194.572 190.328 194.072Z" stroke={c.stroke} stroke-width="2" />
                <path d="M205.828 235V189.5L344.328 109V155.5L205.828 235Z" fill={`url(#${g(6)})`} stroke={c.stroke} stroke-width="2" />
                <path d="M276.328 166V179" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-1" />
                <path d="M283.328 162V175" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-2" />
                <path d="M290.328 158V171" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-3" />
                <path d="M297.328 154V167" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-4" />
                <path d="M304.328 150V163" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-5" />
                <path d="M311.328 146V159" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-6" />
                <path d="M318.328 142V155" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-7" />
                <path d="M325.328 138V151" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-8" />
                <path d="M332.328 134V147" stroke={c.strokeLight} stroke-opacity="0.51" stroke-width="2" stroke-linecap="round" className="led led-9" />
                <path d="M343.328 109L205.828 189L67.828 109L205.828 30L343.328 109Z" fill={`url(#${g(7)})`} stroke={c.stroke} stroke-width="2" />
                <path d="M205.828 43L93.828 108.5L205.828 173L319.828 108.5L205.828 43Z" stroke={c.stroke} stroke-width="2" />
              </motion.g>
            </motion.g>


            {/* Cables - left side */}
            <path className="cable sp-1" d={LEFT_CABLE_PATH} stroke={`url(#${g(8)})`} stroke-width="5" stroke-linecap="round" />
            <path d="M2.50053 223V336.37C2.50052 337.677 2.50046 338.611 3.64338 339.918C4.93642 341.397 27.7069 353.677 50.5005 367" stroke={`url(#${g(9)})`} stroke-width="5" stroke-linecap="round" />
            <path className=" sp-3" d="M118.407 586V412.796C118.407 410.799 118.407 409.372 116.695 407.375C114.758 405.115 80.6467 386.355 46.5005 366" stroke={`url(#${g(10)})`} stroke-width="5" stroke-linecap="round" />
            <path d="M118.692 474.716V410.017C118.692 409.271 118.692 408.738 118.04 407.992C117.302 407.148 104.307 400.14 91.2994 392.537" stroke={`url(#${g(11)})`} stroke-width="5" stroke-linecap="round" />
            <g opacity="0.5">
              <path className="sp-2" d="M77.4072 562V388.796C77.4072 386.799 77.4073 385.372 75.6951 383.375C73.7581 381.115 39.6466 362.355 5.50048 342" stroke={`url(#${g(12)})`} stroke-width="5" stroke-linecap="round" />
              <path d="M77.6924 450.716V386.017C77.6924 385.271 77.6925 384.738 77.0402 383.992C76.3023 383.148 63.3075 376.14 50.2994 368.537" stroke={`url(#${g(13)})`} stroke-width="5" stroke-linecap="round" />
            </g>
            <path className=" sp-3" d="M55.291 501.514V374.356C55.291 372.889 55.291 371.842 54.034 370.375C52.6119 368.716 27.5689 354.943 2.50038 340" stroke={`url(#${g(14)})`} stroke-width="5" stroke-linecap="round" />
            <path d="M55.5004 419.814V372.316C55.5004 371.768 55.5004 371.377 55.0216 370.829C54.4798 370.209 44.9396 365.064 35.3897 359.482" stroke={`url(#${g(15)})`} stroke-width="5" stroke-linecap="round" />

            {/* Cables - right side */}
            <path className="cable sp-1" d={RIGHT_CABLE_PATH} stroke={`url(#${g(16)})`} stroke-width="5" stroke-linecap="round" />
            <path d="M400.001 222V335.37C400.001 336.677 400.001 337.611 398.858 338.918C397.565 340.397 374.794 352.677 352.001 366" stroke={`url(#${g(17)})`} stroke-width="5" stroke-linecap="round" />
            <path className=" sp-3" d="M284.094 585V411.796C284.094 409.799 284.094 408.372 285.806 406.375C287.743 404.115 321.854 385.355 356.001 365" stroke={`url(#${g(18)})`} stroke-width="5" stroke-linecap="round" />
            <path d="M283.809 473.716V409.017C283.809 408.271 283.809 407.738 284.461 406.992C285.199 406.148 298.194 399.14 311.202 391.537" stroke={`url(#${g(19)})`} stroke-width="5" stroke-linecap="round" />
            <g opacity="0.5">
              <path className="sp-2" d="M325.094 561V387.796C325.094 385.799 325.094 384.372 326.806 382.375C328.743 380.115 362.854 361.355 397.001 341" stroke={`url(#${g(20)})`} stroke-width="5" stroke-linecap="round" />
              <path d="M324.809 449.716V385.017C324.809 384.271 324.809 383.738 325.461 382.992C326.199 382.148 339.194 375.14 352.202 367.537" stroke={`url(#${g(21)})`} stroke-width="5" stroke-linecap="round" />
            </g>
            <path d="M347.21 500.514V373.356C347.21 371.889 347.21 370.842 348.467 369.375C349.889 367.716 374.932 353.943 400.001 339" stroke={`url(#${g(22)})`} stroke-width="5" stroke-linecap="round" />
            <path className=" sp-4" d="M347.001 418.814V371.316C347.001 370.768 347.001 370.377 347.479 369.829C348.021 369.209 357.561 364.064 367.111 358.482" stroke={`url(#${g(23)})`} stroke-width="5" stroke-linecap="round" />
          </g>

          <defs>
            <clipPath id={clipId} transform="translate(56.6188 96.7501)"><path d="M195.894 7.33594C201.711 3.88799 208.945 3.88799 214.762 7.33594L356.709 91.4805C362.329 94.8121 365.774 100.861 365.774 107.395V276.605C365.774 283.139 362.329 289.188 356.709 292.52L214.762 376.664C208.945 380.112 201.711 380.112 195.894 376.664L53.9471 292.52C48.3272 289.188 44.8817 283.139 44.8817 276.605V107.395C44.8817 100.861 48.3272 94.8121 53.9471 91.4805L195.894 7.33594Z" />
            </clipPath><linearGradient id={g(0)} x1="205.328" y1="0" x2="205.328" y2="384" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.accent} stop-opacity="0.63" />
              <stop offset="1" stop-color={c.accent} stop-opacity="0.13" />
            </linearGradient>
            <linearGradient id={g(1)} x1="205.828" y1="337.5" x2="65.828" y2="257" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.darkest} />
              <stop offset="1" stop-color={c.dark1} />
            </linearGradient>
            <linearGradient id={g(2)} x1="342.828" y1="255" x2="203.828" y2="331.5" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.dark3} />
              <stop offset="1" stop-color={c.dark1} />
            </linearGradient>
            <linearGradient id={g(3)} x1="206.828" y1="278.5" x2="66.828" y2="198" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.darkest} />
              <stop offset="1" stop-color={c.dark1} />
            </linearGradient>
            <linearGradient id={g(4)} x1="343.828" y1="196" x2="204.828" y2="272.5" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.dark3} />
              <stop offset="1" stop-color={c.dark1} />
            </linearGradient>
            <linearGradient id={g(5)} x1="207.328" y1="218.5" x2="67.328" y2="138" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.darkest} />
              <stop offset="1" stop-color={c.dark1} />
            </linearGradient>
            <linearGradient id={g(6)} x1="344.328" y1="136" x2="205.328" y2="212.5" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.dark3} />
              <stop offset="1" stop-color={c.dark1} />
            </linearGradient>
            <linearGradient id={g(7)} x1="196.828" y1="49" x2="82.828" y2="119" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.dark3} />
              <stop offset="1" stop-color={c.dark4} />
            </linearGradient>
            <linearGradient id={g(8)} x1="2.42264" y1="287.421" x2="80.9005" y2="262.116" gradientUnits="userSpaceOnUse">
              <stop offset="0.451923" stop-color={c.accent} />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(9)} x1="2.50052" y1="339.5" x2="36.5005" y2="326.5" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.white} />
              <stop offset="1" stop-color={c.white} stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(10)} x1="118.737" y1="437.952" x2="73.9506" y2="452.393" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.accent} />
              <stop offset="0.528846" stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(11)} x1="118.692" y1="408.231" x2="99.2891" y2="415.65" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.white} />
              <stop offset="1" stop-color={c.white} stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(12)} x1="77.7369" y1="413.952" x2="32.9505" y2="428.393" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.accent} />
              <stop offset="0.528846" stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(13)} x1="77.6924" y1="384.231" x2="58.289" y2="391.65" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.white} />
              <stop offset="1" stop-color={c.white} stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(14)} x1="55.533" y1="392.823" x2="22.6529" y2="403.426" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.accent} />
              <stop offset="0.528846" stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(15)} x1="55.5004" y1="371.004" x2="41.2553" y2="376.451" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.white} />
              <stop offset="1" stop-color={c.white} stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(16)} x1="400.078" y1="286.421" x2="321.601" y2="261.116" gradientUnits="userSpaceOnUse">
              <stop offset="0.451923" stop-color={c.accent} />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(17)} x1="400.001" y1="338.5" x2="366.001" y2="325.5" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.white} />
              <stop offset="1" stop-color={c.white} stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(18)} x1="283.764" y1="436.952" x2="328.55" y2="451.393" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.accent} />
              <stop offset="0.528846" stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(19)} x1="283.809" y1="407.231" x2="303.212" y2="414.65" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.white} />
              <stop offset="1" stop-color={c.white} stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(20)} x1="324.764" y1="412.952" x2="369.551" y2="427.393" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.accent} />
              <stop offset="0.528846" stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(21)} x1="324.809" y1="383.231" x2="344.212" y2="390.65" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.white} />
              <stop offset="1" stop-color={c.white} stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(22)} x1="346.968" y1="391.823" x2="379.848" y2="402.426" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.accent} />
              <stop offset="0.528846" stop-opacity="0" />
            </linearGradient>
            <linearGradient id={g(23)} x1="347.001" y1="370.004" x2="361.246" y2="375.451" gradientUnits="userSpaceOnUse">
              <stop stop-color={c.white} />
              <stop offset="1" stop-color={c.white} stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  )
}
