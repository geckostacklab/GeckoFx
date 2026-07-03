import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  bgGlowTo: "#C498FF",
  baseStroke: "#A572D0",
  chipOuter: "#342479",
  chipInner: "#100629",
  chipEdges: "#392D67",
  chipTop: "#180E26",
  chipCore: "#3C2758",
  pinFrom: "#BC89FF",
  pinTo: "white",
  topStrokeFrom: "#9DD6FF",
  topStrokeMid: "#5CAEFF",
  topStrokeTo: "#C98BFF",
  topStrokeEnd: "#EBC2FF",
  logo: "white",
} as const

type AudioChipColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  float?: boolean
  animate?: boolean
  colors?: Partial<AudioChipColors>
}

const PARTICLE_VARIANTS = ["pf-a", "pf-b", "pf-c", "pf-d", "pf-e"]

const PARTICLE_DELAYS = [
  0, 0.4, 0.8, 1.2, 0.2, 0.6, 1.0, 1.4, 0.3, 0.7, 1.1, 1.5, 0.5, 0.9, 1.3,
  1.7, 0.1, 0.5, 0.9, 1.3, 0.2, 0.6, 1.0, 1.4, 0.4, 0.8, 1.2, 1.6, 0.3,
  0.7, 1.1, 1.5, 0.5, 0.9, 1.3, 1.7, 0.0, 0.4, 0.8, 1.2, 0.2, 0.6, 1.0,
  1.4, 0.3, 0.7, 1.1, 1.5, 0.5, 0.9, 1.3,
]

const PARTICLE_DURATIONS = [
  5.0, 6.2, 4.6, 7.0, 5.4, 6.6, 4.8, 6.0, 5.8, 6.4, 4.4, 7.2, 5.2, 6.8,
  4.6, 6.0, 5.6, 6.4, 4.8, 6.6, 5.0, 6.2, 4.4, 7.0, 5.8, 6.6, 4.6, 6.0,
  5.2, 6.4, 4.8, 6.8, 5.4, 6.2, 4.6, 6.0, 5.6, 6.4, 4.8, 7.2, 5.0, 6.6,
  4.4, 6.0, 5.8, 6.4, 4.6, 6.8, 5.2, 6.2, 4.8,
]

function particleClass(i: number) {
  return `${PARTICLE_VARIANTS[i % PARTICLE_VARIANTS.length]}-${i}`
}

export default function AudioChip({
  className = "h-100",
  float = true,
  animate = true,
  colors,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const fId = (n: number) => `${uid}f${n}`
  const cId = (n: number) => `${uid}c${n}`
  const pId = (n: number) => `${uid}p${n}`

  return (
    <div className="relative">
      {animate && (
        <style>{`
        @keyframes particleA {
          0%, 100% { transform: translate(0, 0); opacity: 0.85; }
          25% { transform: translate(2px, -3px); opacity: 1; }
          50% { transform: translate(-1.5px, -5px); opacity: 0.9; }
          75% { transform: translate(3px, -1.5px); opacity: 1; }
        }
        @keyframes particleB {
          0%, 100% { transform: translate(0, 0); opacity: 0.9; }
          33% { transform: translate(-3px, 2px); opacity: 1; }
          66% { transform: translate(2px, -4px); opacity: 0.8; }
        }
        @keyframes particleC {
          0%, 100% { transform: translate(0, 0); opacity: 1; }
          50% { transform: translate(2.5px, 3px); opacity: 0.7; }
        }
        @keyframes particleD {
          0%, 100% { transform: translate(0, 0); opacity: 0.9; }
          20% { transform: translate(3px, -1px); opacity: 1; }
          40% { transform: translate(-2px, 3px); opacity: 0.95; }
          60% { transform: translate(1.5px, -4px); opacity: 0.8; }
          80% { transform: translate(-3px, -2px); opacity: 1; }
        }
        @keyframes particleE {
          0%, 100% { transform: translate(0, 0); opacity: 1; }
          50% { transform: translate(-2px, -2.5px); opacity: 0.85; }
        }

        .ac-chip-float {
          animation: chipFloat 5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .pf-a-0, .pf-a-5, .pf-a-10, .pf-a-15, .pf-a-20, .pf-a-25, .pf-a-30, .pf-a-35, .pf-a-40, .pf-a-45, .pf-a-50 { animation-name: particleA; }
        .pf-b-1, .pf-b-6, .pf-b-11, .pf-b-16, .pf-b-21, .pf-b-26, .pf-b-31, .pf-b-36, .pf-b-41, .pf-b-46 { animation-name: particleB; }
        .pf-c-2, .pf-c-7, .pf-c-12, .pf-c-17, .pf-c-22, .pf-c-27, .pf-c-32, .pf-c-37, .pf-c-42, .pf-c-47 { animation-name: particleC; }
        .pf-d-3, .pf-d-8, .pf-d-13, .pf-d-18, .pf-d-23, .pf-d-28, .pf-d-33, .pf-d-38, .pf-d-43, .pf-d-48 { animation-name: particleD; }
        .pf-e-4, .pf-e-9, .pf-e-14, .pf-e-19, .pf-e-24, .pf-e-29, .pf-e-34, .pf-e-39, .pf-e-44, .pf-e-49 { animation-name: particleE; }

        [class*="pf-"] {
          transform-box: fill-box;
          transform-origin: center;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
      )}

      <motion.svg
        className={className}
        viewBox="0 0 362 286"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        initial={animate ? { opacity: 0, scale: 0.9, y: 8 } : false}
        whileInView={animate ? { opacity: 1, scale: 1, y: 0 } : undefined}
        viewport={animate ? { once: true, amount: "some" } : undefined}
        transition={animate ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] } : undefined}
      >
        <g id="voice-chip">
          <g id="chip-group">
            <motion.g id="bg-glow"
              animate={animate ? { opacity: [0, 1] } : undefined}
              transition={animate ? {duration: 2, ease: "easeInOut"} : undefined}
            >
              <g id="Vector 6" opacity="0.3" filter={`url(#${fId(0)})`}>
                <path d="M261 171H84.5L10 10H329.5L261 171Z" fill={`url(#${pId(0)})`} shape-rendering="crispEdges" />
              </g>
            </motion.g>
            <g id="base">
              <foreignObject x="105.602" y="199.601" width="143.149" height="86.0284"><div style={{
                backdropFilter: "blur(2px)",
                clipPath: `url(#${cId(0)})`,
                height: "100%",
                width: "100%"
              }}></div></foreignObject><rect id="Rectangle 1" data-figma-bg-blur-radius="4" x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 102.616 243.048)" fill="black" fill-opacity="0.31" stroke={`url(#${pId(1)})`} />
              <foreignObject x="215.602" y="138.601" width="143.149" height="86.0284"><div style={{
                backdropFilter: "blur(2px)",
                clipPath: `url(#${cId(1)})`,
                height: "100%",
                width: "100%"
              }}></div></foreignObject><rect id="Rectangle 2" data-figma-bg-blur-radius="4" x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 212.616 182.048)" fill="black" fill-opacity="0.31" stroke={`url(#${pId(2)})`} />
              <foreignObject x="105.602" y="74.6005" width="143.149" height="86.0284"><div style={{
                backdropFilter: "blur(2px)",
                clipPath: `url(#${cId(2)})`,
                height: "100%",
                width: "100%"
              }}></div></foreignObject><rect id="Rectangle 3" data-figma-bg-blur-radius="4" x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 102.616 118.048)" fill="black" fill-opacity="0.31" stroke={`url(#${pId(3)})`} />
              <foreignObject x="3.60229" y="138.601" width="143.149" height="86.0284"><div style={{
                backdropFilter: "blur(2px)",
                clipPath: `url(#${cId(3)})`,
                height: "100%",
                width: "100%"
              }}></div></foreignObject><rect id="Rectangle 4" data-figma-bg-blur-radius="4" x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 0.616025 182.048)" fill="black" fill-opacity="0.31" stroke={`url(#${pId(4)})`} />
            </g>
            <g id="bottom">
              <g id="Vector 4" filter={`url(#${fId(5)})`}>
                <path d="M105.5 208L114 202.5V153L105.5 146.5V138.5L108.5 137H125.5L132.5 141.5H222L228 137H246.5L249 140V148L240.5 153V204L249 209.5V216.5L246.5 219.5H228L222 215H132.5L123.5 219.5H108.5L105.5 216.5V208Z" fill={c.chipOuter} />
              </g>
              <path id="Vector 5" d="M125.5 199.997L131.66 195.93V159.33L125.5 154.524V148.609L127.674 147.5H139.995L145.068 150.827H209.932L214.28 147.5H227.688L229.5 149.718V155.633L223.34 159.33V197.039L229.5 201.106V206.282L227.688 208.5H214.28L209.932 205.173H145.068L138.545 208.5H127.674L125.5 206.282V199.997Z" fill={c.chipInner} />
            </g>
            <motion.g
              id="chip"
              animate={float ? { y: [0, -5, 0] } : undefined}
              transition={float ? { duration: 5, repeat: 10, ease: "easeInOut", delay: 3 } : undefined}
            >
              <path id="edges" d="M84.5 181.5V174.5V173.5L102 183.5H115.5L152.5 205L153 213.5L172 224.5H179.5L198 213.5L198.5 212.5L198 205L234.5 183.5H250L267 171.5V179L250 191.5H236L199 213.5V221L179.5 232H172L152 220V213L114.5 191H100L84.5 181.5Z" fill={c.chipEdges} />
              <g id="pins">
                <circle className={animate ? "ac-pin-glow-1" : ""} cx="213.5" cy="201.5" r="1" fill={`url(#${pId(5)})`} />
                <circle className={animate ? "ac-pin-glow-2" : ""} cx="218.5" cy="198.5" r="1" fill={`url(#${pId(6)})`} />
                <circle className={animate ? "ac-pin-glow-3" : ""} cx="223.5" cy="195.5" r="1" fill={`url(#${pId(7)})`} />
              </g>
              <g id="pins_2">
                <circle className={animate ? "ac-pin-glow-2" : ""} cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 137.5 199.5)" fill={`url(#${pId(8)})`} />
                <circle className={animate ? "ac-pin-glow-1" : ""} cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 132.5 196.5)" fill={`url(#${pId(9)})`} />
                <circle className={animate ? "ac-pin-glow-3" : ""} cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 127.5 193.5)" fill={`url(#${pId(10)})`} />
              </g>
              <g id="top">
                <g id="Vector 1">
                  <path d="M152.5 129.5V136.5L115.942 157.249L102 157.5L84.5 168V173.5L102 183.5H115.5L152.5 205V213.5L172 224.5H179.5L198 213.5V205L234 183.5H250L266.5 171.5V167.5L248.5 157.5H234L198 136.5V128L179.5 117.5H172L152.5 129.5Z" fill={c.chipTop} />
                  <path
                    d="M115.5 157.5L115.942 157.249M115.942 157.249L152.5 136.5V129.5L172 117.5H179.5L198 128V136.5L234 157.5H248.5L266.5 167.5V171.5L250 183.5H234L198 205V213.5L179.5 224.5H172L152.5 213.5V205L115.5 183.5H102L84.5 173.5V168L102 157.5L115.942 157.249Z"
                    stroke={`url(#${pId(11)})`}
                  />
                </g>
                <path id="Vector 3" className={animate ? "ac-core-pulse" : ""} d="M159.174 141.023V145.995L133.275 160.733L123.398 160.911L111 168.369V172.276L123.398 179.379H132.962L159.174 194.65V200.687L172.989 208.5H178.302L191.409 200.687V194.65L216.913 179.379H228.248L239 171.5V168.5L227.185 160.911H216.913L191.409 145.995V139.958L178.302 132.5H172.989L159.174 141.023Z" fill={c.chipCore} fill-opacity="0.69" />
              </g>
              <path
                id="logo"
                d="M196.483 161.576C196.961 161.852 197.737 161.852 198.215 161.576C198.693 161.299 198.693 160.852 198.215 160.576L197.349 161.076L196.483 161.576ZM190.95 159.583L191.816 159.083L191.67 159L191.486 158.948L190.95 159.583ZM183.811 159.316L184.677 158.816L184.617 158.782L184.55 158.752L183.811 159.316ZM179.996 161.518L180.862 161.018L180.803 160.984L180.736 160.955L179.996 161.518ZM194.681 169.997L195.605 169.533L195.577 169.514L195.547 169.497L194.681 169.997ZM189.913 172.75L189.047 173.25L189.077 173.267L189.109 173.283L189.913 172.75ZM171.081 161.878L171.947 161.378L171.898 161.349L171.843 161.324L171.081 161.878ZM163.452 166.282L164.318 165.782L164.268 165.754L164.213 165.729L163.452 166.282ZM182.284 177.155L181.417 177.655L181.447 177.672L181.479 177.688L182.284 177.155ZM177.992 179.633L178.916 179.168L178.888 179.15L178.858 179.133L177.992 179.633ZM159.253 173.494L160.119 172.994L160.06 172.96L159.993 172.931L159.253 173.494ZM169.792 179.579L170.752 179.139L170.708 179.108L170.658 179.079L169.792 179.579ZM165.978 181.781L165.112 182.281L165.161 182.31L165.216 182.335L165.978 181.781ZM159.24 177.891L160.106 177.391L160.04 177.353L159.964 177.321L159.24 177.891ZM160.72 182.223C161.198 182.5 161.974 182.5 162.452 182.223C162.93 181.947 162.93 181.5 162.452 181.223L161.586 181.723L160.72 182.223ZM197.349 161.076L198.215 160.576L193.723 157.982L192.857 158.482L191.991 158.982L196.483 161.576L197.349 161.076ZM192.857 158.482L193.723 157.982C193.352 157.768 192.701 157.475 191.928 157.34C191.528 157.27 191.031 157.231 190.508 157.306C189.961 157.385 189.488 157.571 189.129 157.85L190.11 158.273L191.091 158.696C191.139 158.659 191.142 158.673 191.097 158.679C191.075 158.682 191.106 158.673 191.219 158.693C191.331 158.713 191.471 158.752 191.623 158.81C191.773 158.867 191.902 158.931 191.991 158.982L192.857 158.482ZM190.11 158.273L189.129 157.85C188.799 158.105 188.603 158.391 188.586 158.696C188.569 158.997 188.729 159.257 188.939 159.461C189.338 159.847 189.977 160.096 190.413 160.219L190.95 159.583L191.486 158.948C191.413 158.927 191.315 158.893 191.222 158.849C191.128 158.804 191.071 158.763 191.044 158.737C191.02 158.714 191.035 158.719 191.034 158.742C191.033 158.769 191.013 158.756 191.091 158.696L190.11 158.273ZM190.95 159.583L190.084 160.083L196.822 163.974L197.688 163.474L198.554 162.974L191.816 159.083L190.95 159.583ZM197.688 163.474L196.822 163.974C197.061 164.112 197.355 164.355 197.466 164.596C197.559 164.798 197.524 164.962 197.226 165.134L198.092 165.634L198.958 166.134C199.995 165.536 200.103 164.819 199.833 164.232C199.581 163.686 199.005 163.234 198.554 162.974L197.688 163.474ZM198.092 165.634L197.226 165.134C196.927 165.306 196.644 165.326 196.294 165.273C195.876 165.208 195.455 165.039 195.216 164.901L194.35 165.401L193.484 165.901C193.935 166.161 194.718 166.494 195.664 166.639C196.679 166.795 197.921 166.733 198.958 166.134L198.092 165.634ZM194.35 165.401L195.216 164.901L184.677 158.816L183.811 159.316L182.945 159.816L193.484 165.901L194.35 165.401ZM183.811 159.316L184.55 158.752C184.047 158.532 183.221 158.312 182.243 158.292C181.214 158.272 180.079 158.476 179.071 159.057L179.937 159.557L180.803 160.057C181.322 159.758 181.795 159.698 182.158 159.706C182.571 159.714 182.919 159.813 183.071 159.88L183.811 159.316ZM179.937 159.557L179.071 159.057C178.059 159.642 177.731 160.295 177.949 160.904C178.148 161.459 178.761 161.865 179.257 162.082L179.996 161.518L180.736 160.955C180.576 160.885 180.396 160.751 180.348 160.617C180.328 160.561 180.327 160.497 180.372 160.419C180.419 160.338 180.531 160.215 180.803 160.057L179.937 159.557ZM179.996 161.518L179.13 162.018L193.815 170.497L194.681 169.997L195.547 169.497L180.862 161.018L179.996 161.518ZM194.681 169.997L193.758 170.461C194.221 170.768 194.813 171.281 195.096 171.793C195.381 172.308 195.276 172.644 194.887 172.869L195.753 173.369L196.619 173.869C197.946 173.102 197.842 172.108 197.43 171.363C197.016 170.614 196.214 169.937 195.605 169.533L194.681 169.997ZM195.753 173.369L194.887 172.869C194.497 173.094 193.915 173.154 193.023 172.99C192.136 172.826 191.249 172.484 190.717 172.217L189.913 172.75L189.109 173.283C189.808 173.635 190.982 174.098 192.278 174.337C193.569 174.575 195.292 174.635 196.619 173.869L195.753 173.369ZM189.913 172.75L190.779 172.25L171.947 161.378L171.081 161.878L170.215 162.378L189.047 173.25L189.913 172.75ZM171.081 161.878L171.843 161.324C170.933 160.907 169.381 160.422 167.581 160.292C165.726 160.158 163.608 160.405 161.777 161.461L162.643 161.961L163.509 162.461C164.731 161.756 166.061 161.608 167.276 161.696C168.547 161.787 169.688 162.142 170.32 162.431L171.081 161.878ZM162.643 161.961L161.777 161.461C159.928 162.529 159.636 163.702 160.15 164.716C160.632 165.669 161.788 166.423 162.69 166.836L163.452 166.282L164.213 165.729C163.574 165.436 162.8 164.91 162.501 164.319C162.233 163.79 162.306 163.156 163.509 162.461L162.643 161.961ZM163.452 166.282L162.586 166.782L181.417 177.655L182.284 177.155L183.15 176.655L164.318 165.782L163.452 166.282ZM182.284 177.155L181.479 177.688C182.004 177.952 182.662 178.398 182.978 178.854C183.132 179.076 183.182 179.266 183.15 179.423C183.121 179.567 183.015 179.722 182.727 179.889L183.593 180.389L184.459 180.889C185.125 180.505 185.486 180.058 185.583 179.589C185.676 179.133 185.51 178.7 185.252 178.328C184.745 177.597 183.795 176.977 183.088 176.622L182.284 177.155ZM183.593 180.389L182.727 179.889C182.439 180.055 182.169 180.116 181.92 180.133C181.648 180.152 181.318 180.123 180.935 180.034C180.145 179.851 179.372 179.471 178.916 179.168L177.992 179.633L177.068 180.097C177.684 180.505 178.758 181.054 180.024 181.347C180.668 181.496 181.418 181.591 182.208 181.537C183.02 181.482 183.794 181.273 184.459 180.889L183.593 180.389ZM177.992 179.633L178.858 179.133L164.173 170.654L163.307 171.154L162.441 171.654L177.126 180.133L177.992 179.633ZM163.307 171.154L164.173 170.654C163.702 170.382 162.889 170.105 161.866 170.072C160.789 170.038 159.637 170.278 158.567 170.896L159.433 171.396L160.299 171.896C160.946 171.522 161.442 171.475 161.729 171.484C162.07 171.495 162.335 171.593 162.441 171.654L163.307 171.154ZM159.433 171.396L158.567 170.896C157.5 171.511 157.089 172.175 157.241 172.806C157.383 173.397 157.989 173.828 158.514 174.058L159.253 173.494L159.993 172.931C159.862 172.873 159.7 172.751 159.667 172.612C159.643 172.513 159.649 172.271 160.299 171.896L159.433 171.396ZM159.253 173.494L158.387 173.994L168.926 180.079L169.792 179.579L170.658 179.079L160.119 172.994L159.253 173.494ZM169.792 179.579L168.833 180.018C169.045 180.172 169.312 180.449 169.4 180.731C169.48 180.988 169.407 181.195 169.092 181.377L169.958 181.877L170.824 182.377C171.845 181.788 171.994 181.069 171.811 180.48C171.635 179.917 171.151 179.43 170.752 179.139L169.792 179.579ZM169.958 181.877L169.092 181.377C168.778 181.559 168.418 181.601 167.973 181.555C167.485 181.504 167.006 181.35 166.739 181.227L165.978 181.781L165.216 182.335C165.72 182.566 166.563 182.845 167.539 182.947C168.558 183.053 169.804 182.966 170.824 182.377L169.958 181.877ZM165.978 181.781L166.844 181.281L160.106 177.391L159.24 177.891L158.374 178.391L165.112 182.281L165.978 181.781ZM159.24 177.891L159.964 177.321C159.577 177.157 158.939 176.945 158.23 176.841C157.542 176.74 156.459 176.701 155.627 177.182L156.493 177.682L157.359 178.182C157.289 178.222 157.28 178.161 157.627 178.212C157.95 178.259 158.304 178.372 158.515 178.461L159.24 177.891ZM156.493 177.682L155.627 177.182C154.75 177.688 154.908 178.323 155.171 178.714C155.432 179.104 155.892 179.436 156.228 179.63L157.094 179.13L157.96 178.63C157.777 178.525 157.555 178.353 157.455 178.203C157.407 178.133 157.413 178.105 157.412 178.113C157.408 178.136 157.383 178.167 157.359 178.182L156.493 177.682ZM157.094 179.13L156.228 179.63L160.72 182.223L161.586 181.723L162.452 181.223L157.96 178.63L157.094 179.13Z"
                fill={c.logo}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
            </motion.g>
          </g>
          <g id="sparkle">
            <g id="glow-balls">
              <g
                id="glow-balls_2"
                className={animate ? particleClass(0) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[0]}s`, animationDelay: `${PARTICLE_DELAYS[0]}s` } : undefined}
              >
                <g id="Ellipse 9" filter={`url(#${fId(6)})`}>
                  <circle cx="147.5" cy="77.5" r="2" fill="white" />
                </g>
                <circle id="Ellipse 10" cx="147.5" cy="77.5" r="2" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_3"
                className={animate ? particleClass(1) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[1]}s`, animationDelay: `${PARTICLE_DELAYS[1]}s` } : undefined}
              >
                <g id="Ellipse 9_2" filter={`url(#${fId(7)})`}>
                  <circle cx="261.5" cy="115.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_2" cx="261.5" cy="115.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_4"
                className={animate ? particleClass(2) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[2]}s`, animationDelay: `${PARTICLE_DELAYS[2]}s` } : undefined}
              >
                <g id="Ellipse 9_3" filter={`url(#${fId(8)})`}>
                  <circle cx="209.5" cy="183.5" r="2" fill="white" />
                </g>
                <circle id="Ellipse 10_3" cx="209.5" cy="183.5" r="2" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_5"
                className={animate ? particleClass(3) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[3]}s`, animationDelay: `${PARTICLE_DELAYS[3]}s` } : undefined}
              >
                <g id="Ellipse 9_4" filter={`url(#${fId(9)})`}>
                  <circle cx="127.5" cy="183.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_4" cx="127.5" cy="183.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_6"
                className={animate ? particleClass(4) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[4]}s`, animationDelay: `${PARTICLE_DELAYS[4]}s` } : undefined}
              >
                <g id="Ellipse 9_5" filter={`url(#${fId(10)})`}>
                  <circle cx="93.5" cy="140.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_5" cx="93.5" cy="140.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_7"
                className={animate ? particleClass(5) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[5]}s`, animationDelay: `${PARTICLE_DELAYS[5]}s` } : undefined}
              >
                <g id="Ellipse 9_6" filter={`url(#${fId(11)})`}>
                  <circle cx="147.5" cy="114.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_6" cx="147.5" cy="114.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_8"
                className={animate ? particleClass(6) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[6]}s`, animationDelay: `${PARTICLE_DELAYS[6]}s` } : undefined}
              >
                <g id="Ellipse 9_7" filter={`url(#${fId(12)})`}>
                  <circle cx="235.5" cy="149.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_7" cx="235.5" cy="149.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_9"
                className={animate ? particleClass(7) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[7]}s`, animationDelay: `${PARTICLE_DELAYS[7]}s` } : undefined}
              >
                <g id="Ellipse 9_8" filter={`url(#${fId(13)})`}>
                  <circle cx="174.5" cy="56.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_8" cx="174.5" cy="56.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_10"
                className={animate ? particleClass(8) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[8]}s`, animationDelay: `${PARTICLE_DELAYS[8]}s` } : undefined}
              >
                <g id="Ellipse 9_9" filter={`url(#${fId(14)})`}>
                  <circle cx="248.75" cy="124.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_9" cx="248.75" cy="124.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_11"
                className={animate ? particleClass(9) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[9]}s`, animationDelay: `${PARTICLE_DELAYS[9]}s` } : undefined}
              >
                <g id="Ellipse 9_10" filter={`url(#${fId(15)})`}>
                  <circle cx="242.75" cy="138.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_10" cx="242.75" cy="138.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_12"
                className={animate ? particleClass(10) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[10]}s`, animationDelay: `${PARTICLE_DELAYS[10]}s` } : undefined}
              >
                <g id="Ellipse 9_11" filter={`url(#${fId(16)})`}>
                  <circle cx="224.75" cy="134.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_11" cx="224.75" cy="134.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_13"
                className={animate ? particleClass(11) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[11]}s`, animationDelay: `${PARTICLE_DELAYS[11]}s` } : undefined}
              >
                <g id="Ellipse 9_12" filter={`url(#${fId(17)})`}>
                  <circle cx="208.75" cy="111.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_12" cx="208.75" cy="111.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_14"
                className={animate ? particleClass(12) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[12]}s`, animationDelay: `${PARTICLE_DELAYS[12]}s` } : undefined}
              >
                <g id="Ellipse 9_13" filter={`url(#${fId(18)})`}>
                  <circle cx="194.75" cy="133.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_13" cx="194.75" cy="133.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_15"
                className={animate ? particleClass(13) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[13]}s`, animationDelay: `${PARTICLE_DELAYS[13]}s` } : undefined}
              >
                <g id="Ellipse 9_14" filter={`url(#${fId(19)})`}>
                  <circle cx="162.75" cy="187.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_14" cx="162.75" cy="187.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_16"
                className={animate ? particleClass(14) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[14]}s`, animationDelay: `${PARTICLE_DELAYS[14]}s` } : undefined}
              >
                <g id="Ellipse 9_15" filter={`url(#${fId(20)})`}>
                  <circle cx="167.75" cy="135.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_15" cx="167.75" cy="135.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_17"
                className={animate ? particleClass(15) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[15]}s`, animationDelay: `${PARTICLE_DELAYS[15]}s` } : undefined}
              >
                <g id="Ellipse 9_16" filter={`url(#${fId(21)})`}>
                  <circle cx="182.75" cy="144.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_16" cx="182.75" cy="144.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_18"
                className={animate ? particleClass(16) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[16]}s`, animationDelay: `${PARTICLE_DELAYS[16]}s` } : undefined}
              >
                <g id="Ellipse 9_17" filter={`url(#${fId(22)})`}>
                  <circle cx="197.75" cy="153.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_17" cx="197.75" cy="153.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
            </g>
            <g id="glow-balls_19" opacity="0.49">
              <g
                id="glow-balls_20"
                className={animate ? particleClass(17) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[17]}s`, animationDelay: `${PARTICLE_DELAYS[17]}s` } : undefined}
              >
                <g id="Ellipse 9_18" filter={`url(#${fId(23)})`}>
                  <circle cx="151.594" cy="103.938" r="1.49434" fill="white" />
                </g>
                <circle id="Ellipse 10_18" cx="151.594" cy="103.938" r="1.49434" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_21"
                className={animate ? particleClass(18) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[18]}s`, animationDelay: `${PARTICLE_DELAYS[18]}s` } : undefined}
              >
                <g id="Ellipse 9_19" filter={`url(#${fId(24)})`}>
                  <circle cx="236.772" cy="132.33" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_19" cx="236.772" cy="132.33" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_22"
                className={animate ? particleClass(19) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[19]}s`, animationDelay: `${PARTICLE_DELAYS[19]}s` } : undefined}
              >
                <g id="Ellipse 9_20" filter={`url(#${fId(25)})`}>
                  <circle cx="197.919" cy="183.138" r="1.49434" fill="white" />
                </g>
                <circle id="Ellipse 10_20" cx="197.919" cy="183.138" r="1.49434" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_23"
                className={animate ? particleClass(20) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[20]}s`, animationDelay: `${PARTICLE_DELAYS[20]}s` } : undefined}
              >
                <g id="Ellipse 9_21" filter={`url(#${fId(26)})`}>
                  <circle cx="136.651" cy="183.138" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_21" cx="136.651" cy="183.138" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_24"
                className={animate ? particleClass(21) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[21]}s`, animationDelay: `${PARTICLE_DELAYS[21]}s` } : undefined}
              >
                <g id="Ellipse 9_22" filter={`url(#${fId(27)})`}>
                  <circle cx="111.247" cy="151.009" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_22" cx="111.247" cy="151.009" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_25"
                className={animate ? particleClass(22) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[22]}s`, animationDelay: `${PARTICLE_DELAYS[22]}s` } : undefined}
              >
                <g id="Ellipse 9_23" filter={`url(#${fId(28)})`}>
                  <circle cx="151.594" cy="131.583" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_23" cx="151.594" cy="131.583" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_26"
                className={animate ? particleClass(23) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[23]}s`, animationDelay: `${PARTICLE_DELAYS[23]}s` } : undefined}
              >
                <g id="Ellipse 9_24" filter={`url(#${fId(29)})`}>
                  <circle cx="217.345" cy="157.734" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_24" cx="217.345" cy="157.734" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_27"
                className={animate ? particleClass(24) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[24]}s`, animationDelay: `${PARTICLE_DELAYS[24]}s` } : undefined}
              >
                <g id="Ellipse 9_25" filter={`url(#${fId(30)})`}>
                  <circle cx="171.768" cy="88.2472" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_25" cx="171.768" cy="88.2472" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_28"
                className={animate ? particleClass(25) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[25]}s`, animationDelay: `${PARTICLE_DELAYS[25]}s` } : undefined}
              >
                <g id="Ellipse 9_26" filter={`url(#${fId(31)})`}>
                  <circle cx="227.245" cy="139.242" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_26" cx="227.245" cy="139.242" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_29"
                className={animate ? particleClass(26) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[26]}s`, animationDelay: `${PARTICLE_DELAYS[26]}s` } : undefined}
              >
                <g id="Ellipse 9_27" filter={`url(#${fId(32)})`}>
                  <circle cx="222.762" cy="149.702" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_27" cx="222.762" cy="149.702" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_30"
                className={animate ? particleClass(27) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[27]}s`, animationDelay: `${PARTICLE_DELAYS[27]}s` } : undefined}
              >
                <g id="Ellipse 9_28" filter={`url(#${fId(33)})`}>
                  <circle cx="209.313" cy="146.713" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_28" cx="209.313" cy="146.713" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_31"
                className={animate ? particleClass(31) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[31]}s`, animationDelay: `${PARTICLE_DELAYS[31]}s` } : undefined}
              >
                <g id="Ellipse 9_29" filter={`url(#${fId(34)})`}>
                  <circle cx="197.359" cy="129.528" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_29" cx="197.359" cy="129.528" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_32"
                className={animate ? particleClass(32) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[32]}s`, animationDelay: `${PARTICLE_DELAYS[32]}s` } : undefined}
              >
                <g id="Ellipse 9_30" filter={`url(#${fId(35)})`}>
                  <circle cx="186.898" cy="145.966" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_30" cx="186.898" cy="145.966" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_33"
                className={animate ? particleClass(33) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[33]}s`, animationDelay: `${PARTICLE_DELAYS[33]}s` } : undefined}
              >
                <g id="Ellipse 9_31" filter={`url(#${fId(36)})`}>
                  <circle cx="162.989" cy="186.313" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_31" cx="162.989" cy="186.313" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_34"
                className={animate ? particleClass(34) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[34]}s`, animationDelay: `${PARTICLE_DELAYS[34]}s` } : undefined}
              >
                <g id="Ellipse 9_32" filter={`url(#${fId(37)})`}>
                  <circle cx="166.725" cy="147.46" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_32" cx="166.725" cy="147.46" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_35"
                className={animate ? particleClass(35) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[35]}s`, animationDelay: `${PARTICLE_DELAYS[35]}s` } : undefined}
              >
                <g id="Ellipse 9_33" filter={`url(#${fId(38)})`}>
                  <circle cx="177.932" cy="154.185" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_33" cx="177.932" cy="154.185" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_36"
                className={animate ? particleClass(36) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[36]}s`, animationDelay: `${PARTICLE_DELAYS[36]}s` } : undefined}
              >
                <g id="Ellipse 9_34" filter={`url(#${fId(39)})`}>
                  <circle cx="189.14" cy="160.909" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_34" cx="189.14" cy="160.909" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
            </g>
            <g id="glow-balls_37" opacity="0.7">
              <g
                id="glow-balls_38"
                className={animate ? particleClass(37) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[37]}s`, animationDelay: `${PARTICLE_DELAYS[37]}s` } : undefined}
              >
                <g id="Ellipse 9_35" filter={`url(#${fId(40)})`}>
                  <circle cx="175.33" cy="116.132" r="0.830186" fill="white" />
                </g>
                <circle id="Ellipse 10_35" cx="175.33" cy="116.132" r="0.830186" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_39"
                className={animate ? particleClass(38) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[38]}s`, animationDelay: `${PARTICLE_DELAYS[38]}s` } : undefined}
              >
                <g id="Ellipse 9_36" filter={`url(#${fId(41)})`}>
                  <circle cx="222.651" cy="131.905" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_36" cx="222.651" cy="131.905" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_40"
                className={animate ? particleClass(39) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[39]}s`, animationDelay: `${PARTICLE_DELAYS[39]}s` } : undefined}
              >
                <g id="Ellipse 9_37" filter={`url(#${fId(42)})`}>
                  <circle cx="201.066" cy="160.132" r="0.830186" fill="white" />
                </g>
                <circle id="Ellipse 10_37" cx="201.066" cy="160.132" r="0.830186" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_41"
                className={animate ? particleClass(40) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[40]}s`, animationDelay: `${PARTICLE_DELAYS[40]}s` } : undefined}
              >
                <g id="Ellipse 9_38" filter={`url(#${fId(43)})`}>
                  <circle cx="167.028" cy="160.132" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_38" cx="167.028" cy="160.132" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_42"
                className={animate ? particleClass(41) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[41]}s`, animationDelay: `${PARTICLE_DELAYS[41]}s` } : undefined}
              >
                <g id="Ellipse 9_39" filter={`url(#${fId(44)})`}>
                  <circle cx="152.915" cy="142.283" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_39" cx="152.915" cy="142.283" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_43"
                className={animate ? particleClass(42) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[42]}s`, animationDelay: `${PARTICLE_DELAYS[42]}s` } : undefined}
              >
                <g id="Ellipse 9_40" filter={`url(#${fId(45)})`}>
                  <circle cx="175.33" cy="131.491" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_40" cx="175.33" cy="131.491" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_44"
                className={animate ? particleClass(43) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[43]}s`, animationDelay: `${PARTICLE_DELAYS[43]}s` } : undefined}
              >
                <g id="Ellipse 9_41" filter={`url(#${fId(46)})`}>
                  <circle cx="211.858" cy="146.019" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_41" cx="211.858" cy="146.019" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_45"
                className={animate ? particleClass(44) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[44]}s`, animationDelay: `${PARTICLE_DELAYS[44]}s` } : undefined}
              >
                <g id="Ellipse 9_42" filter={`url(#${fId(47)})`}>
                  <circle cx="186.538" cy="107.415" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_42" cx="186.538" cy="107.415" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_46"
                className={animate ? particleClass(45) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[45]}s`, animationDelay: `${PARTICLE_DELAYS[45]}s` } : undefined}
              >
                <g id="Ellipse 9_43" filter={`url(#${fId(48)})`}>
                  <circle cx="217.358" cy="135.745" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_43" cx="217.358" cy="135.745" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_47"
                className={animate ? particleClass(46) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[46]}s`, animationDelay: `${PARTICLE_DELAYS[46]}s` } : undefined}
              >
                <g id="Ellipse 9_44" filter={`url(#${fId(49)})`}>
                  <circle cx="214.868" cy="141.557" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_44" cx="214.868" cy="141.557" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_48"
                className={animate ? particleClass(47) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[47]}s`, animationDelay: `${PARTICLE_DELAYS[47]}s` } : undefined}
              >
                <g id="Ellipse 9_45" filter={`url(#${fId(50)})`}>
                  <circle cx="207.396" cy="139.896" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_45" cx="207.396" cy="139.896" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_49"
                className={animate ? particleClass(28) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[28]}s`, animationDelay: `${PARTICLE_DELAYS[28]}s` } : undefined}
              >
                <g id="Ellipse 9_46" filter={`url(#${fId(51)})`}>
                  <circle cx="200.755" cy="130.349" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_46" cx="200.755" cy="130.349" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_50"
                className={animate ? particleClass(29) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[29]}s`, animationDelay: `${PARTICLE_DELAYS[29]}s` } : undefined}
              >
                <g id="Ellipse 9_47" filter={`url(#${fId(52)})`}>
                  <circle cx="194.943" cy="139.481" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_47" cx="194.943" cy="139.481" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_51"
                className={animate ? particleClass(30) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[30]}s`, animationDelay: `${PARTICLE_DELAYS[30]}s` } : undefined}
              >
                <g id="Ellipse 9_48" filter={`url(#${fId(53)})`}>
                  <circle cx="181.66" cy="161.896" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_48" cx="181.66" cy="161.896" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_52"
                className={animate ? particleClass(48) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[48]}s`, animationDelay: `${PARTICLE_DELAYS[48]}s` } : undefined}
              >
                <g id="Ellipse 9_49" filter={`url(#${fId(54)})`}>
                  <circle cx="183.736" cy="140.311" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_49" cx="183.736" cy="140.311" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_53"
                className={animate ? particleClass(49) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[49]}s`, animationDelay: `${PARTICLE_DELAYS[49]}s` } : undefined}
              >
                <g id="Ellipse 9_50" filter={`url(#${fId(55)})`}>
                  <circle cx="189.962" cy="144.047" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_50" cx="189.962" cy="144.047" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_54"
                className={animate ? particleClass(50) : ""}

                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[50]}s`, animationDelay: `${PARTICLE_DELAYS[50]}s` } : undefined}
              >
                <g id="Ellipse 9_51" filter={`url(#${fId(56)})`}>
                  <circle cx="196.188" cy="147.783" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_51" cx="196.188" cy="147.783" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter id={fId(0)} x="0" y="0" width="339.5" height="181" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2051_266" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2051_266" result="shape" />
            <feGaussianBlur stdDeviation="5" result="effect2_foregroundBlur_2051_266" />
          </filter>
          <clipPath id={cId(0)} transform="translate(-105.602 -199.601)"><rect x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 102.616 243.048)" />
          </clipPath><clipPath id={cId(1)} transform="translate(-215.602 -138.601)"><rect x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 212.616 182.048)" />
          </clipPath><clipPath id={cId(2)} transform="translate(-105.602 -74.6005)"><rect x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 102.616 118.048)" />
          </clipPath><clipPath id={cId(3)} transform="translate(-3.60229 -138.601)"><rect x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 0.616025 182.048)" />
          </clipPath><filter id={fId(5)} x="101.5" y="137" width="151.5" height="90.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2051_266" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2051_266" result="shape" />
          </filter>
          <filter id={fId(6)} x="141.5" y="71.5" width="12" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(7)} x="256.5" y="110.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(8)} x="203.5" y="177.5" width="12" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(9)} x="122.5" y="178.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(10)} x="88.5" y="135.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(11)} x="142.5" y="109.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(12)} x="230.5" y="144.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(13)} x="169.5" y="51.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(14)} x="244.5" y="120.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(15)} x="238.5" y="134.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(16)} x="220.5" y="130.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(17)} x="204.5" y="107.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(18)} x="190.5" y="129.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(19)} x="158.5" y="183.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(20)} x="163.5" y="131.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(21)} x="178.5" y="140.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(22)} x="193.5" y="149.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(23)} x="146.1" y="98.4434" width="10.9886" height="10.9887" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(24)} x="232.025" y="127.583" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(25)} x="192.425" y="177.643" width="10.9886" height="10.9887" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(26)} x="146.1" y="98.4434" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(27)} x="106.5" y="146.262" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(28)} x="146.847" y="126.836" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(29)} x="212.598" y="152.987" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(30)} x="167.021" y="83.5" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(31)} x="223.058" y="135.055" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(32)} x="218.575" y="145.515" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(33)} x="205.126" y="142.526" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(34)} x="193.172" y="125.342" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(35)} x="182.711" y="141.779" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(36)} x="158.802" y="182.126" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(37)} x="162.538" y="143.274" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(38)} x="173.745" y="149.998" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(39)} x="184.953" y="156.723" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(40)} x="170.5" y="111.302" width="9.6604" height="9.66037" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(41)} x="218.236" y="127.49" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(42)} x="196.236" y="155.302" width="9.6604" height="9.66037" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(43)} x="162.613" y="155.717" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(44)} x="148.5" y="137.868" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(45)} x="170.915" y="127.076" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(46)} x="207.443" y="141.604" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(47)} x="182.123" y="103" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(48)} x="213.255" y="131.641" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(49)} x="210.764" y="137.453" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(50)} x="203.292" y="135.792" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(51)} x="196.651" y="126.245" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(52)} x="190.839" y="135.377" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(53)} x="177.557" y="157.792" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(54)} x="179.632" y="136.207" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(55)} x="185.858" y="139.943" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id={fId(56)} x="192.085" y="143.679" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <linearGradient id={pId(0)} x1="177.5" y1="52.5" x2="177.5" y2="181" gradientUnits="userSpaceOnUse">
            <stop stop-opacity="0" />
            <stop offset="1" stop-color={c.bgGlowTo} />
          </linearGradient>
          <linearGradient id={pId(1)} x1="30.2724" y1="84.0429" x2="221.598" y2="43.8137" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.baseStroke} />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id={pId(2)} x1="63.3968" y1="75.1673" x2="85.5562" y2="-43.429" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.baseStroke} />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id={pId(3)} x1="35.5404" y1="75.3109" x2="106.47" y2="10.4451" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.baseStroke} />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id={pId(4)} x1="26.6177" y1="85.3882" x2="150.987" y2="24.1139" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.baseStroke} />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id={pId(5)} x1="213.5" y1="200.5" x2="213.5" y2="202.5" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.pinFrom} />
            <stop offset="1" stop-color={c.pinTo} />
          </linearGradient>
          <linearGradient id={pId(6)} x1="218.5" y1="197.5" x2="218.5" y2="199.5" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.pinFrom} />
            <stop offset="1" stop-color={c.pinTo} />
          </linearGradient>
          <linearGradient id={pId(7)} x1="223.5" y1="194.5" x2="223.5" y2="196.5" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.pinFrom} />
            <stop offset="1" stop-color={c.pinTo} />
          </linearGradient>
          <linearGradient id={pId(8)} x1="1" y1="0" x2="1" y2="2" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.pinFrom} />
            <stop offset="1" stop-color={c.pinTo} />
          </linearGradient>
          <linearGradient id={pId(9)} x1="1" y1="0" x2="1" y2="2" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.pinFrom} />
            <stop offset="1" stop-color={c.pinTo} />
          </linearGradient>
          <linearGradient id={pId(10)} x1="1" y1="0" x2="1" y2="2" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.pinFrom} />
            <stop offset="1" stop-color={c.pinTo} />
          </linearGradient>
          <linearGradient id={pId(11)} x1="176.25" y1="117.5" x2="176.25" y2="224.5" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.topStrokeFrom} />
            <stop offset="0.125" stop-color={c.topStrokeMid} />
            <stop offset="0.899038" stop-color={c.topStrokeTo} />
            <stop offset="1" stop-color={c.topStrokeEnd} />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}
