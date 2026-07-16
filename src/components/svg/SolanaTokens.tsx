import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  coinSideFront: "#232740",
  coinSideBack: "#2F374F",
  coinEdgesGlare: "#E0E5EB",
  coinEdgesGlareStroke: "black",
  coinFaceFill: "white",
  coinFaceStroke: "#181D2A",
  coinFaceStrokeAlt: "#1E2638",
  coinArcFront: "#1865FE",
  coinArcBack: "#B67DF8",
  solanaLogo: "#313F5E",
  sparkleFill: "#FFF5A9",
  sparkleStroke: "#1E2638",
} as const

type SolanaTokensColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  colors?: Partial<SolanaTokensColors>
  animate?: boolean
  floatSpeed?: number
  sparkleSpeed?: number
}

export default function SolanaTokens({
  className = "w-80",
  colors,
  animate = true,
  floatSpeed = 3,
  sparkleSpeed = 1.5,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const u = (s: string) => `${uid}-${s}`

  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 630 852"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="solana-tokens">
          <motion.g
            id="coin"
            animate={animate ? { y: [0, -8, 0] } : undefined}
            transition={
              animate
                ? {
                    duration: floatSpeed,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : undefined
            }
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          >
            <g id="coin-side">
              <path
                id="coin-edges"
                d="M157.159 356.673C171.352 362.567 185.779 371.251 200.093 382.842C282.509 449.581 329.98 587.45 306.124 690.781C304.206 699.093 301.88 706.926 299.19 714.272L313.976 751.5L243.198 782.904C206.428 801.436 159.489 794.114 113.703 757.037C31.287 690.298 -16.1845 552.429 7.67137 449.098C19.983 395.77 48.8862 362.063 85.3052 351.103L144.976 326L157.159 356.673Z"
                fill={c.coinSideFront}
              />
              <g id="coin-edges-glare">
                <path
                  d="M113 656.5L50.5 680.5C52.6667 684.167 54.5 688 58.5 694C60.1 696.4 66.5 705.5 69.5 709.5L131.5 684C128.333 679.5 122.358 670.599 121 668.5C115.5 660 115 659.667 113 656.5Z"
                  fill={c.coinEdgesGlare}
                  stroke={c.coinEdgesGlareStroke}
                />
                <path
                  d="M68.0052 435L7.50525 448C0.00524998 469 -0.49475 504.5 1.50525 537C3.50525 569.5 15.5052 604 18.5052 613C20.9052 620.2 31.8386 644.333 37.0052 655.5L100.505 632C96.0052 621.667 86.4053 599.2 84.0052 592C81.0052 583 75.5052 567 68.0052 529C62.0052 498.6 65.5052 453.667 68.0052 435Z"
                  fill={c.coinEdgesGlare}
                  stroke={c.coinEdgesGlareStroke}
                />
              </g>
            </g>
            <g id="coin-front">
              <circle
                cx="192.019"
                cy="192.019"
                r="190.019"
                transform="matrix(0.224951 -0.97437 0.777146 0.62932 26.4761 610.195)"
                fill={c.coinFaceFill}
                stroke={c.coinFaceStroke}
                stroke-width="4"
              />
              <circle
                cx="156.105"
                cy="156.105"
                r="154.105"
                transform="matrix(0.224951 -0.97437 0.777146 0.62932 66.5 599.209)"
                fill={c.coinFaceFill}
                stroke={c.coinFaceStrokeAlt}
                stroke-width="4"
              />
              <path
                d="M154.5 371.5C124.667 389.167 68.6521 469.415 123.5 594.5C193 753 296 717 296 717"
                stroke={c.coinArcFront}
                stroke-width="15"
                stroke-linecap="round"
              />
              <g id="solana-logo">
                <path
                  d="M262.004 476L174.041 508.5L163.5 543L250.736 511L262.004 476Z"
                  fill={c.solanaLogo}
                />
                <path
                  d="M281.871 549L193.909 581.5L183.368 616L270.603 584L281.871 549Z"
                  fill={c.solanaLogo}
                />
                <path
                  d="M190.761 573L279.814 540L254.37 519L165.681 551.5L190.761 573Z"
                  fill={c.solanaLogo}
                />
              </g>
            </g>
          </motion.g>
          <motion.g
            id="coin_2"
            animate={animate ? { y: [0, -8, 0] } : undefined}
            transition={
              animate
                ? {
                    duration: floatSpeed,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: floatSpeed / 2,
                  }
                : undefined
            }
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          >
            <g id="coin-side_2">
              <path
                id="coin-edges_2"
                d="M472.661 120.673C458.468 126.567 444.041 135.251 429.727 146.842C347.311 213.581 299.839 351.45 323.695 454.781C325.614 463.093 327.939 470.926 330.63 478.272L315.844 515.5L386.622 546.904C423.392 565.436 470.331 558.114 516.117 521.037C598.533 454.298 646.004 316.429 622.148 213.098C609.837 159.77 580.934 126.063 544.515 115.103L484.844 90L472.661 120.673Z"
                fill={c.coinSideBack}
              />
              <g id="coin-edges-glare_2">
                <path
                  d="M516.82 420.5L579.32 444.5C577.153 448.167 575.32 452 571.32 458C569.72 460.4 563.32 469.5 560.32 473.5L498.32 448C501.486 443.5 507.462 434.599 508.82 432.5C514.32 424 514.82 423.667 516.82 420.5Z"
                  fill={c.coinEdgesGlare}
                  stroke={c.coinEdgesGlareStroke}
                />
                <path
                  d="M561.815 199L622.315 212C629.815 233 630.315 268.5 628.315 301C626.315 333.5 614.315 368 611.315 377C608.915 384.2 597.981 408.333 592.815 419.5L529.315 396C533.815 385.667 543.415 363.2 545.815 356C548.815 347 554.315 331 561.815 293C567.815 262.6 564.315 217.667 561.815 199Z"
                  fill={c.coinEdgesGlare}
                  stroke={c.coinEdgesGlareStroke}
                />
              </g>
            </g>
            <g id="coin-front_2">
              <circle
                cx="192.019"
                cy="192.019"
                r="190.019"
                transform="matrix(-0.224951 -0.97437 -0.777146 0.62932 603.344 374.195)"
                fill={c.coinFaceFill}
                stroke={c.coinFaceStroke}
                stroke-width="4"
              />
              <circle
                cx="156.105"
                cy="156.105"
                r="154.105"
                transform="matrix(-0.224951 -0.97437 -0.777146 0.62932 567.366 360.209)"
                fill={c.coinFaceFill}
                stroke={c.coinFaceStroke}
                stroke-width="4"
              />
              <path
                d="M484 134C513.833 151.667 569.848 231.915 515 357C445.5 515.5 342.5 479.5 342.5 479.5"
                stroke={c.coinArcBack}
                stroke-width="13"
                stroke-linecap="round"
              />
              <g id="solana-logo_2">
                <path
                  d="M450.004 239L362.041 271.5L351.5 306L438.736 274L450.004 239Z"
                  fill={c.solanaLogo}
                />
                <path
                  d="M469.871 312L381.909 344.5L371.368 379L458.603 347L469.871 312Z"
                  fill={c.solanaLogo}
                />
                <path
                  d="M378.761 336L467.814 303L442.37 282L353.681 314.5L378.761 336Z"
                  fill={c.solanaLogo}
                />
              </g>
            </g>
          </motion.g>
          <g id="sparkles">
            <motion.path
              id={u("star-1")}
              d="M525.74 669.271C527.017 665.759 531.983 665.759 533.26 669.271L541.811 692.797C542.384 694.375 543.594 695.641 545.145 696.286L568.022 705.807C571.307 707.173 571.307 711.827 568.022 713.193L545.145 722.714C543.594 723.359 542.384 724.625 541.811 726.203L533.26 749.729C531.983 753.241 527.017 753.241 525.74 749.729L517.189 726.203C516.616 724.625 515.406 723.359 513.855 722.714L490.978 713.193C487.693 711.827 487.693 707.173 490.978 705.807L513.855 696.286C515.406 695.641 516.616 694.375 517.189 692.797L525.74 669.271Z"
              fill={c.sparkleFill}
              stroke={c.sparkleStroke}
              stroke-width="2"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={
                animate
                  ? { opacity: [0.6, 1, 0.6], scale: [0.9, 1.05, 0.9] }
                  : undefined
              }
              transition={
                animate
                  ? {
                      duration: sparkleSpeed,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : undefined
              }
            />
            <motion.path
              id={u("star-2")}
              d="M129.74 158.271C131.017 154.759 135.983 154.759 137.26 158.271L145.811 181.797C146.384 183.375 147.594 184.641 149.145 185.286L172.022 194.807C175.307 196.173 175.307 200.827 172.022 202.193L149.145 211.714C147.594 212.359 146.384 213.625 145.811 215.203L137.26 238.729C135.983 242.241 131.017 242.241 129.74 238.729L121.189 215.203C120.616 213.625 119.406 212.359 117.855 211.714L94.9775 202.193C91.6933 200.827 91.6933 196.173 94.9775 194.807L117.855 185.286C119.406 184.641 120.616 183.375 121.189 181.797L129.74 158.271Z"
              fill={c.sparkleFill}
              stroke={c.sparkleStroke}
              stroke-width="2"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={
                animate
                  ? { opacity: [0.6, 1, 0.6], scale: [0.9, 1.05, 0.9] }
                  : undefined
              }
              transition={
                animate
                  ? {
                      duration: sparkleSpeed,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: sparkleSpeed / 3,
                    }
                  : undefined
              }
            />
            <motion.path
              id={u("star-3")}
              d="M480.091 732.333C480.57 731.017 482.43 731.017 482.909 732.333L486.89 743.265C487.129 743.922 487.634 744.45 488.28 744.719L498.862 749.115C500.095 749.627 500.095 751.373 498.862 751.885L488.28 756.281C487.634 756.55 487.129 757.078 486.89 757.735L482.909 768.667C482.43 769.983 480.57 769.983 480.091 768.667L476.11 757.735C475.871 757.078 475.366 756.55 474.72 756.281L464.138 751.885C462.905 751.373 462.905 749.627 464.138 749.115L474.72 744.719C475.366 744.45 475.871 743.922 476.11 743.265L480.091 732.333Z"
              fill={c.sparkleFill}
              stroke={c.sparkleStroke}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={
                animate
                  ? { opacity: [0.6, 1, 0.6], scale: [0.9, 1.05, 0.9] }
                  : undefined
              }
              transition={
                animate
                  ? {
                      duration: sparkleSpeed,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (sparkleSpeed * 2) / 3,
                    }
                  : undefined
              }
            />
          </g>
        </g>
      </svg>
    </div>
  )
}