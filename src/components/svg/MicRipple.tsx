import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
  bgGlow: "#E5A3FF",
  bgGlowMid: "#4686FE",
  rippleFrom: "white",
  rippleMid: "#545FD2",
  rippleTo: "#E5A3FF",
  micBottom: "#2B1D75",
  micTop: "#1E0D2E",
  micStrokeFrom: "#E5A3FF",
  micStrokeMid: "#C476F6",
  micStrokeTo: "#4686FE",
  micStrokeEnd: "#92BDFF",
  micIcon: "#E5E1FC",
  micIconStroke: "white",
  meterFrom: "#3A2562",
  meterTo: "#4686FE",
  playBottomFrom: "#434AC7",
  playBottomTo: "#3D36A8",
  playTopFrom: "#545FD2",
  playTopTo: "#3433AC",
  playStroke: "#6E6DE5",
  playGlyph: "#D9D9D9",
  pauseBottomFrom: "#5A288E",
  pauseBottomTo: "#C76FE5",
  pauseTopFrom: "#AD58CE",
  pauseTopTo: "#73349D",
  pauseStroke: "#C76FE5",
  pauseGlyph: "#D9D9D9",
} as const

type MicRippleColors = {
  [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
  className?: string
  ripple?: boolean
  bounce?: boolean
  float?: boolean
  animate?: boolean
  colors?: Partial<MicRippleColors>
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

export default function MicRipple({
  className = "h-100",
  ripple = true,
  bounce = true,
  float = true,
  animate = true,
  colors,
}: Props) {
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()
  const fId = (n: number) => `${uid}f${n}`
  const pId = (n: number) => `${uid}p${n}`
  const mId = (n: number) => `${uid}m${n}`

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

        @keyframes mrRipple {
          0% { transform: scale(0.55); opacity: 0; }
          20% { opacity: 0.38; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        @keyframes micBounce {
          0%, 100% { transform: scale(1); }
          8% { transform: scale(1.06); }
          16% { transform: scale(0.98); }
          24% { transform: scale(1.03); }
          32% { transform: scale(1); }
        }

        @keyframes mrBtnFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes meterPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes micIconPulse {
          0%, 100% { opacity: 0.92; }
          50% { opacity: 1; }
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

        .mr-ripple{
          transform-box: fill-box;
          transform-origin: center;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
          animation-duration: 2.4s;
        }
        .mr-ripple { animation-name: mrRipple; animation-delay: 1.2s; }

        .mr-mic-bounce {
          transform-box: fill-box;
          transform-origin: center;
          animation: micBounce 2.4s ease-in-out infinite;
        }

        .mr-btn-float {
          animation: mrBtnFloat 4s ease-in-out infinite;
        }
        .mr-btn-float-delay {
          animation: mrBtnFloat 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .mr-meter-pulse {
          animation: meterPulse 1.2s ease-in-out infinite;
        }

        .mr-mic-icon-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: micIconPulse 1.6s ease-in-out infinite;
        }
      `}</style>
      )}

      <motion.svg
        className={className}
        viewBox="0 0 506 307"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        initial={animate ? { opacity: 0, scale: 0.9, y: 8 } : false}
        whileInView={animate ? { opacity: 1, scale: 1, y: 0 } : undefined}
        viewport={animate ? { once: true, amount: "some" } : undefined}
        transition={animate ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] } : undefined}
      >
        <g id="mic-ripple">
          <motion.g id="bg-glow"
            animate={animate ? { opacity: [0, 1] } : undefined}
            transition={animate ? { duration: 2, ease: "easeInOut" } : undefined}
          >
            <g id="bg-glow-inner" opacity="0.15" filter={`url(#${fId(0)})`}>
              <path d="M363.5 10L356 151.5C356 169 339.02 212.796 266 219C189.5 225.5 148.333 185.833 135 164L127.5 10H363.5Z" fill={`url(#${pId(0)})`} />
            </g>
          </motion.g>
          <g id="ripple">
            <g transform="matrix(0.866025 -0.5 0.866025 0.5 90 154.863)">
              <circle
                id="Ellipse 1"
                opacity="0.83"
                cx="89.8634"
                cy="89.8634"
                r="89.3634"
                stroke={`url(#${pId(1)})`}
              />
            </g>
            <g transform="matrix(0.866025 -0.5 0.866025 0.5 39 155.335)">
              <circle
                id="Ellipse 2"
                opacity="0.54"
                cx="119.335"
                cy="119.335"
                r="118.835"
                stroke={`url(#${pId(2)})`}
              />
            </g>
            <path
              id="Ellipse 3"
              opacity="0.38"
              d="M127.278 88.4844C197.096 48.1749 309.926 47.968 379.291 88.0156C448.656 128.064 448.298 193.207 378.48 233.516C308.662 273.825 195.832 274.032 126.467 233.984C57.1023 193.936 57.4602 128.794 127.278 88.4844Z"
              stroke={`url(#${pId(3)})`}
            />
          </g>
          <g id="ripple">
            <path
              id="Ellipse 3"
              className={ripple && animate ? "mr-ripple" : ""}
              opacity="0.38"
              d="M127.278 88.4844C197.096 48.1749 309.926 47.968 379.291 88.0156C448.656 128.064 448.298 193.207 378.48 233.516C308.662 273.825 195.832 274.032 126.467 233.984C57.1023 193.936 57.4602 128.794 127.278 88.4844Z"
              stroke={`url(#${pId(3)})`}
            />
          </g>
          <g id="sound-source">
            <g id="mic-button" className={animate && bounce ? "mr-mic-bounce" : ""}>
              <path id="bottom" d="M184.749 158.48H198.249L229.249 176.48L231.249 185.98C240.249 187.146 263.549 186.88 284.749 176.48C305.949 166.08 303.249 150.48 299.249 143.98L284.749 142.48L254.749 124.48V117.48C254.749 117.48 236.749 109.58 208.749 121.98C180.749 134.38 181.082 151.48 184.749 158.48Z" fill={c.micBottom} />
              <path id="top" d="M186 152.999H199.5L230.5 170.999L232.5 180.499C241.5 181.666 264.8 181.399 286 170.999C307.2 160.599 304.5 144.999 300.5 138.499L286 136.999L256 118.999V111.999C256 111.999 238 104.099 210 116.499C182 128.899 182.333 145.999 186 152.999Z" fill={c.micTop} stroke={`url(#${pId(4)})`} />
              <g id="mic-icon">
                <g id="mic" className={animate ? "mr-mic-icon-pulse" : ""}>
                  <g id="Subtract">
                    <mask id={mId(0)} fill="white">
                      <path d="M233.353 148.977C233.832 148.701 234.603 148.705 235.135 148.946C237.136 149.855 239.686 150.321 242.37 150.254C245.482 150.176 248.522 149.387 250.818 148.061C253.115 146.735 254.481 144.98 254.617 143.183C254.744 141.498 253.779 139.905 251.923 138.711C251.71 138.581 251.715 138.376 251.934 138.249L252.394 137.984C252.879 137.704 253.671 137.702 254.105 138.009C254.959 138.613 255.642 139.297 256.127 140.039C256.761 141.007 257.045 142.056 256.964 143.124C256.884 144.191 256.44 145.258 255.658 146.263C254.876 147.267 253.77 148.189 252.406 148.977C251.041 149.765 249.444 150.403 247.705 150.855C245.965 151.306 244.117 151.562 242.267 151.609C240.418 151.655 238.602 151.491 236.924 151.126C235.634 150.844 234.444 150.448 233.395 149.952C232.872 149.704 232.875 149.253 233.353 148.977Z" />
                    </mask>
                    <path d="M233.353 148.977C233.832 148.701 234.603 148.705 235.135 148.946C237.136 149.855 239.686 150.321 242.37 150.254C245.482 150.176 248.522 149.387 250.818 148.061C253.115 146.735 254.481 144.98 254.617 143.183C254.744 141.498 253.779 139.905 251.923 138.711C251.71 138.581 251.715 138.376 251.934 138.249L252.394 137.984C252.879 137.704 253.671 137.702 254.105 138.009C254.959 138.613 255.642 139.297 256.127 140.039C256.761 141.007 257.045 142.056 256.964 143.124C256.884 144.191 256.44 145.258 255.658 146.263C254.876 147.267 253.77 148.189 252.406 148.977C251.041 149.765 249.444 150.403 247.705 150.855C245.965 151.306 244.117 151.562 242.267 151.609C240.418 151.655 238.602 151.491 236.924 151.126C235.634 150.844 234.444 150.448 233.395 149.952C232.872 149.704 232.875 149.253 233.353 148.977Z" fill={c.micIcon} />
                    <path d="M242.37 150.254L242.423 150.96L242.423 150.96L242.37 150.254ZM250.818 148.061L251.685 148.561L251.685 148.561L250.818 148.061ZM254.617 143.183L255.84 143.214L255.84 143.214L254.617 143.183ZM251.923 138.711L252.835 138.239L252.824 138.232L252.813 138.225L251.923 138.711ZM256.127 140.039L257.273 139.789L257.273 139.789L256.127 140.039ZM256.964 143.124L258.188 143.154L258.188 143.154L256.964 143.124ZM255.658 146.263L256.775 146.553L256.775 146.553L255.658 146.263ZM252.406 148.977L253.272 149.477L253.272 149.477L252.406 148.977ZM247.705 150.855L248.207 151.499L248.207 151.499L247.705 150.855ZM242.267 151.609L242.321 152.315L242.321 152.315L242.267 151.609ZM236.924 151.126L236.491 151.787L236.491 151.787L236.924 151.126ZM254.105 138.009L255.053 137.561L254.105 138.009ZM235.135 148.946L234.378 149.502L235.135 148.946ZM235.135 148.946L234.378 149.502C236.619 150.52 239.459 151.035 242.423 150.96L242.37 150.254L242.316 149.548C239.912 149.608 237.653 149.19 235.892 148.391L235.135 148.946ZM242.37 150.254L242.423 150.96C245.856 150.874 249.181 150.006 251.685 148.561L250.818 148.061L249.952 147.561C247.862 148.767 245.109 149.477 242.316 149.548L242.37 150.254ZM250.818 148.061L251.685 148.561C254.188 147.115 255.691 145.196 255.84 143.214L254.617 143.183L253.393 143.152C253.272 144.765 252.042 146.354 249.952 147.561L250.818 148.061ZM254.617 143.183L255.84 143.214C255.98 141.353 254.915 139.577 252.835 138.239L251.923 138.711L251.011 139.183C252.643 140.233 253.507 141.643 253.393 143.152L254.617 143.183ZM251.934 138.249L252.8 138.749L253.26 138.484L252.394 137.984L251.528 137.484L251.068 137.749L251.934 138.249ZM254.105 138.009L253.156 138.456C253.926 139 254.543 139.617 254.981 140.288L256.127 140.039L257.273 139.789C256.742 138.976 255.993 138.225 255.053 137.561L254.105 138.009ZM256.127 140.039L254.981 140.288C255.554 141.165 255.814 142.117 255.741 143.093L256.964 143.124L258.188 143.154C258.275 141.994 257.967 140.85 257.273 139.789L256.127 140.039ZM256.964 143.124L255.741 143.093C255.677 143.945 255.42 144.795 254.998 145.589L256.115 145.973L257.232 146.357C257.798 145.292 258.119 144.169 258.188 143.154L256.964 143.124ZM255.658 146.263L254.541 145.973C254.159 146.666 253.673 147.331 253.089 147.952L254.32 148.477L255.551 149.001C256.222 148.286 256.782 147.514 257.232 146.553L255.658 146.263ZM252.406 148.977L253.272 149.477C253.272 149.477 253.272 149.477 253.272 149.477L252.406 148.977ZM247.705 150.855L248.207 151.499C248.207 151.499 248.207 151.499 248.207 151.499L247.705 150.855ZM242.267 151.609L242.321 152.315C242.321 152.315 242.321 152.315 242.321 152.315L242.267 151.609ZM236.924 151.126L236.491 151.787C236.491 151.787 236.491 151.787 236.491 151.787L236.924 151.126ZM254.105 138.009L255.053 137.561C254.112 136.912 253.391 136.527 253.108 136.379L252.394 137.984L251.681 139.589C251.681 139.589 252.082 139.781 253.156 140.456L254.105 138.009Z" fill="white" mask={`url(#${mId(0)})`} />
                  </g>
                  <rect id="Rectangle 1" x="0.866025" width="13" height="16" rx="6.5" transform="matrix(0.866025 -0.5 0.866025 0.5 227.446 141.888)" fill={c.micIcon} stroke={c.micIconStroke} />
                  <g id="Subtract_2">
                    <mask id={mId(1)} fill="white">
                      <path d="M256.887 149.564C257.843 150.116 257.843 151.012 256.887 151.564C255.93 152.116 254.379 152.116 253.423 151.564L249.808 149.477C250.175 149.376 250.52 149.239 250.824 149.064L252.556 148.064C252.86 147.888 253.097 147.689 253.272 147.477L256.887 149.564Z" />
                    </mask>
                    <path d="M256.887 149.564C257.843 150.116 257.843 151.012 256.887 151.564C255.93 152.116 254.379 152.116 253.423 151.564L249.808 149.477C250.175 149.376 250.52 149.239 250.824 149.064L252.556 148.064C252.86 147.888 253.097 147.689 253.272 147.477L256.887 149.564Z" fill={c.micIcon} />
                    <path d="M256.887 149.564L257.753 149.064V149.064L256.887 149.564ZM253.423 151.564L252.556 152.064V152.064L253.423 151.564ZM249.808 149.477L249.28 148.839L247.717 149.27L248.942 149.977L249.808 149.477ZM253.272 147.477L254.138 146.977L252.913 146.27L252.167 147.172L253.272 147.477ZM256.887 149.564L256.021 150.064C256.499 150.34 256.499 150.788 256.021 151.064L256.887 151.564L257.753 152.064C259.188 151.236 259.188 149.892 257.753 149.064L256.887 149.564ZM256.887 151.564L256.021 151.064C255.542 151.34 254.767 151.34 254.289 151.064L253.423 151.564L252.556 152.064C253.991 152.892 256.318 152.892 257.753 152.064L256.887 151.564ZM253.423 151.564L254.289 151.064L250.674 148.977L249.808 149.477L248.942 149.977L252.556 152.064L253.423 151.564ZM249.808 149.477L250.335 150.115C250.82 149.982 251.282 149.8 251.69 149.564L250.824 149.064L249.958 148.564C249.759 148.679 249.53 148.77 249.28 148.839L249.808 149.477ZM250.824 149.064L251.69 149.564L253.423 148.564L252.556 148.064L251.69 147.564L249.958 148.564L250.824 149.064ZM252.556 148.064L253.423 148.564C253.831 148.328 254.146 148.061 254.377 147.782L253.272 147.477L252.167 147.172C252.047 147.317 251.89 147.449 251.69 147.564L252.556 148.064ZM253.272 147.477L252.406 147.977L256.021 150.064L256.887 149.564L257.753 149.064L254.138 146.977L253.272 147.477Z" fill="white" mask={`url(#${mId(1)})`} />
                  </g>
                </g>
                <path id="meter" className={animate ? "mr-meter-pulse" : ""} d="M251.395 170H247.809V167.314H251.395V170ZM241.705 166.848L240.495 169.465L237 169.062L238.21 166.445L241.705 166.848ZM262.813 168.84L259.402 169.394L257.739 166.839L261.15 166.286L262.813 168.84ZM273.105 166.365L270.203 167.417L267.041 165.244L269.942 164.192L273.105 166.365ZM281.36 162.423L279.252 163.871L274.899 162.292L277.008 160.844L281.36 162.423ZM286.771 157.4L285.663 159.103L280.546 158.272L281.654 156.57L286.771 157.4ZM288.809 153.579H283.428V151.788H288.809V153.579ZM288.38 147.84L283.263 148.67L282.154 146.968L287.271 146.138L288.38 147.84ZM284.42 142.448L280.067 144.027L277.959 142.579L282.312 141L284.42 142.448Z" fill={`url(#${pId(5)})`} />
                <path id="meter_2" className={animate ? "mr-meter-pulse" : ""} d="M212.43 148.566L208.646 150.153L206.814 148.697L210.597 147.11L212.43 148.566ZM208.783 144.154L204.336 144.988L203.372 143.277L207.819 142.442L208.783 144.154ZM207.676 139.308H203V137.508H207.676V139.308ZM210.182 132.789L209.218 134.501L204.771 133.667L205.734 131.955L210.182 132.789ZM215.089 128.748L213.257 130.204L209.474 128.618L211.306 127.161L215.089 128.748ZM221.919 125.78L219.397 126.839L216.648 124.654L219.171 123.597L221.919 125.78ZM230.004 124.178L227.039 124.733L225.594 122.166L228.559 121.609L230.004 124.178ZM248.029 121.943L246.978 124.573L243.939 124.169L244.991 121.538L248.029 121.943ZM238.635 123.699H235.518V121H238.635V123.699Z" fill={`url(#${pId(6)})`} />
              </g>
            </g>
            <g id="play-button" className={animate && float ? "mr-btn-float" : ""}>
              <path id="bottom_2" d="M182.438 170.424C186.264 168.215 192.468 168.215 196.294 170.424L212.042 179.515L216.5 178.924V186.424L215.438 186.967C214.98 187.491 214.373 187.985 213.614 188.424L179.105 208.347C175.279 210.557 169.075 210.557 165.249 208.347L147.928 198.347C146.55 197.552 145.67 196.577 145.285 195.554L145 195.424V188.424L153.131 187.343L182.438 170.424Z" fill={`url(#${pId(7)})`} />
              <rect id="top_2" x="0.866025" width="54.8479" height="35" rx="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 141.116 189.357)" fill={`url(#${pId(8)})`} stroke={c.playStroke} />
              <g id="Polygon 1" filter={`url(#${fId(1)})`}>
                <path d="M188.26 181.119C188.45 180.616 187.675 180.168 186.803 180.278L175.347 181.719C174.4 181.839 174.056 182.515 174.741 182.91L183.701 188.083C184.386 188.479 185.557 188.28 185.764 187.734L188.26 181.119Z" fill={c.playGlyph} />
              </g>
            </g>
            <g id="pause-button" className={animate ? "mr-btn-float-delay" : ""}>
              <path id="bottom_3" d="M306.438 93.4241C310.264 91.2149 316.468 91.2149 320.294 93.4241L336.042 102.516L340.5 101.924V109.424L339.438 109.967C338.98 110.492 338.373 110.986 337.614 111.424L303.105 131.348C299.279 133.557 293.075 133.557 289.249 131.348L271.928 121.348C270.55 120.552 269.671 119.577 269.285 118.554L269 118.424V111.424L277.131 110.343L306.438 93.4241Z" fill={`url(#${pId(9)})`} />
              <rect id="top_3" x="0.866025" width="54.8479" height="35" rx="7.5" transform="matrix(0.866025 -0.5 0.866025 0.5 265.116 112.357)" fill={`url(#${pId(10)})`} stroke={c.pauseStroke} />
              <g id="Rectangle 16" filter={`url(#${fId(2)})`}>
                <rect width="10.2737" height="10.2737" rx="1" transform="matrix(0.866025 -0.5 0.866025 0.5 297 107.137)" fill={c.pauseGlyph} />
              </g>
            </g>
          </g>
          <g id="sparkle">
            <g id="glow-balls">
              <g
                id="glow-balls_2"
                className={animate ? particleClass(0) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[0]}s`, animationDelay: `${PARTICLE_DELAYS[0]}s` } : undefined}
              >
                <g id="Ellipse 9" filter={`url(#${fId(3)})`}>
                  <circle cx="229.353" cy="40.3411" r="1.57647" fill="white" />
                </g>
                <circle id="Ellipse 10" cx="229.353" cy="40.3411" r="1.57647" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_3"
                className={animate ? particleClass(1) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[1]}s`, animationDelay: `${PARTICLE_DELAYS[1]}s` } : undefined}
              >
                <g id="Ellipse 9_2" filter={`url(#${fId(4)})`}>
                  <circle cx="319.212" cy="70.2942" r="0.788235" fill="white" />
                </g>
                <circle id="Ellipse 10_2" cx="319.212" cy="70.2942" r="0.788235" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_4"
                className={animate ? particleClass(2) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[2]}s`, animationDelay: `${PARTICLE_DELAYS[2]}s` } : undefined}
              >
                <g id="Ellipse 9_3" filter={`url(#${fId(5)})`}>
                  <circle cx="278.224" cy="123.894" r="1.57647" fill="white" />
                </g>
                <circle id="Ellipse 10_3" cx="278.224" cy="123.894" r="1.57647" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_5"
                className={animate ? particleClass(3) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[3]}s`, animationDelay: `${PARTICLE_DELAYS[3]}s` } : undefined}
              >
                <g id="Ellipse 9_4" filter={`url(#${fId(6)})`}>
                  <circle cx="213.588" cy="123.894" r="0.788235" fill="white" />
                </g>
                <circle id="Ellipse 10_4" cx="213.588" cy="123.894" r="0.788235" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_6"
                className={animate ? particleClass(4) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[4]}s`, animationDelay: `${PARTICLE_DELAYS[4]}s` } : undefined}
              >
                <g id="Ellipse 9_5" filter={`url(#${fId(7)})`}>
                  <circle cx="186.788" cy="90" r="0.788235" fill="white" />
                </g>
                <circle id="Ellipse 10_5" cx="186.788" cy="90" r="0.788235" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_7"
                className={animate ? particleClass(5) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[5]}s`, animationDelay: `${PARTICLE_DELAYS[5]}s` } : undefined}
              >
                <g id="Ellipse 9_6" filter={`url(#${fId(8)})`}>
                  <circle cx="229.353" cy="69.506" r="0.788235" fill="white" />
                </g>
                <circle id="Ellipse 10_6" cx="229.353" cy="69.506" r="0.788235" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_8"
                className={animate ? particleClass(6) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[6]}s`, animationDelay: `${PARTICLE_DELAYS[6]}s` } : undefined}
              >
                <g id="Ellipse 9_7" filter={`url(#${fId(9)})`}>
                  <circle cx="298.718" cy="97.0941" r="0.788235" fill="white" />
                </g>
                <circle id="Ellipse 10_7" cx="298.718" cy="97.0941" r="0.788235" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_9"
                className={animate ? particleClass(7) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[7]}s`, animationDelay: `${PARTICLE_DELAYS[7]}s` } : undefined}
              >
                <g id="Ellipse 9_8" filter={`url(#${fId(10)})`}>
                  <circle cx="250.635" cy="23.7882" r="0.788235" fill="white" />
                </g>
                <circle id="Ellipse 10_8" cx="250.635" cy="23.7882" r="0.788235" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_10"
                className={animate ? particleClass(8) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[8]}s`, animationDelay: `${PARTICLE_DELAYS[8]}s` } : undefined}
              >
                <g id="Ellipse 9_9" filter={`url(#${fId(11)})`}>
                  <circle cx="309.162" cy="77.5853" r="0.197059" fill="white" />
                </g>
                <circle id="Ellipse 10_9" cx="309.162" cy="77.5853" r="0.197059" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_11"
                className={animate ? particleClass(9) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[9]}s`, animationDelay: `${PARTICLE_DELAYS[9]}s` } : undefined}
              >
                <g id="Ellipse 9_10" filter={`url(#${fId(12)})`}>
                  <circle cx="304.432" cy="88.6206" r="0.197059" fill="white" />
                </g>
                <circle id="Ellipse 10_10" cx="304.432" cy="88.6206" r="0.197059" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_12"
                className={animate ? particleClass(10) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[10]}s`, animationDelay: `${PARTICLE_DELAYS[10]}s` } : undefined}
              >
                <g id="Ellipse 9_11" filter={`url(#${fId(13)})`}>
                  <circle cx="290.244" cy="85.4677" r="0.197059" fill="white" />
                </g>
                <circle id="Ellipse 10_11" cx="290.244" cy="85.4677" r="0.197059" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_13"
                className={animate ? particleClass(11) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[11]}s`, animationDelay: `${PARTICLE_DELAYS[11]}s` } : undefined}
              >
                <g id="Ellipse 9_12" filter={`url(#${fId(14)})`}>
                  <circle cx="277.632" cy="67.3382" r="0.197059" fill="white" />
                </g>
                <circle id="Ellipse 10_12" cx="277.632" cy="67.3382" r="0.197059" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_14"
                className={animate ? particleClass(12) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[12]}s`, animationDelay: `${PARTICLE_DELAYS[12]}s` } : undefined}
              >
                <g id="Ellipse 9_13" filter={`url(#${fId(15)})`}>
                  <circle cx="266.597" cy="84.6794" r="0.197059" fill="white" />
                </g>
                <circle id="Ellipse 10_13" cx="266.597" cy="84.6794" r="0.197059" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_15"
                className={animate ? particleClass(13) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[13]}s`, animationDelay: `${PARTICLE_DELAYS[13]}s` } : undefined}
              >
                <g id="Ellipse 9_14" filter={`url(#${fId(16)})`}>
                  <circle cx="241.374" cy="127.244" r="0.197059" fill="white" />
                </g>
                <circle id="Ellipse 10_14" cx="241.374" cy="127.244" r="0.197059" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_16"
                className={animate ? particleClass(14) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[14]}s`, animationDelay: `${PARTICLE_DELAYS[14]}s` } : undefined}
              >
                <g id="Ellipse 9_15" filter={`url(#${fId(17)})`}>
                  <circle cx="245.315" cy="86.2559" r="0.197059" fill="white" />
                </g>
                <circle id="Ellipse 10_15" cx="245.315" cy="86.2559" r="0.197059" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_17"
                className={animate ? particleClass(15) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[15]}s`, animationDelay: `${PARTICLE_DELAYS[15]}s` } : undefined}
              >
                <g id="Ellipse 9_16" filter={`url(#${fId(18)})`}>
                  <circle cx="257.138" cy="93.35" r="0.197059" fill="white" />
                </g>
                <circle id="Ellipse 10_16" cx="257.138" cy="93.35" r="0.197059" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_18"
                className={animate ? particleClass(16) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[16]}s`, animationDelay: `${PARTICLE_DELAYS[16]}s` } : undefined}
              >
                <g id="Ellipse 9_17" filter={`url(#${fId(19)})`}>
                  <circle cx="268.962" cy="100.444" r="0.197059" fill="white" />
                </g>
                <circle id="Ellipse 10_17" cx="268.962" cy="100.444" r="0.197059" fill="white" fill-opacity="0.92" />
              </g>
            </g>
            <g id="glow-balls_19" opacity="0.49">
              <g
                id="glow-balls_20"
                className={animate ? particleClass(17) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[17]}s`, animationDelay: `${PARTICLE_DELAYS[17]}s` } : undefined}
              >
                <g id="Ellipse 9_18" filter={`url(#${fId(20)})`}>
                  <circle cx="211.094" cy="75.4378" r="1.49434" fill="white" />
                </g>
                <circle id="Ellipse 10_18" cx="211.094" cy="75.4378" r="1.49434" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_21"
                className={animate ? particleClass(18) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[18]}s`, animationDelay: `${PARTICLE_DELAYS[18]}s` } : undefined}
              >
                <g id="Ellipse 9_19" filter={`url(#${fId(21)})`}>
                  <circle cx="296.272" cy="103.83" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_19" cx="296.272" cy="103.83" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_22"
                className={animate ? particleClass(19) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[19]}s`, animationDelay: `${PARTICLE_DELAYS[19]}s` } : undefined}
              >
                <g id="Ellipse 9_20" filter={`url(#${fId(22)})`}>
                  <circle cx="257.419" cy="154.638" r="1.49434" fill="white" />
                </g>
                <circle id="Ellipse 10_20" cx="257.419" cy="154.638" r="1.49434" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_23"
                className={animate ? particleClass(20) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[20]}s`, animationDelay: `${PARTICLE_DELAYS[20]}s` } : undefined}
              >
                <g id="Ellipse 9_21" filter={`url(#${fId(23)})`}>
                  <circle cx="196.151" cy="154.638" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_21" cx="196.151" cy="154.638" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_24"
                className={animate ? particleClass(21) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[21]}s`, animationDelay: `${PARTICLE_DELAYS[21]}s` } : undefined}
              >
                <g id="Ellipse 9_22" filter={`url(#${fId(24)})`}>
                  <circle cx="170.747" cy="122.509" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_22" cx="170.747" cy="122.509" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_25"
                className={animate ? particleClass(22) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[22]}s`, animationDelay: `${PARTICLE_DELAYS[22]}s` } : undefined}
              >
                <g id="Ellipse 9_23" filter={`url(#${fId(25)})`}>
                  <circle cx="211.094" cy="103.083" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_23" cx="211.094" cy="103.083" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_26"
                className={animate ? particleClass(23) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[23]}s`, animationDelay: `${PARTICLE_DELAYS[23]}s` } : undefined}
              >
                <g id="Ellipse 9_24" filter={`url(#${fId(26)})`}>
                  <circle cx="276.845" cy="129.234" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_24" cx="276.845" cy="129.234" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_27"
                className={animate ? particleClass(24) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[24]}s`, animationDelay: `${PARTICLE_DELAYS[24]}s` } : undefined}
              >
                <g id="Ellipse 9_25" filter={`url(#${fId(27)})`}>
                  <circle cx="231.268" cy="59.7472" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_25" cx="231.268" cy="59.7472" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_28"
                className={animate ? particleClass(25) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[25]}s`, animationDelay: `${PARTICLE_DELAYS[25]}s` } : undefined}
              >
                <g id="Ellipse 9_26" filter={`url(#${fId(28)})`}>
                  <circle cx="286.745" cy="110.741" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_26" cx="286.745" cy="110.741" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_29"
                className={animate ? particleClass(26) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[26]}s`, animationDelay: `${PARTICLE_DELAYS[26]}s` } : undefined}
              >
                <g id="Ellipse 9_27" filter={`url(#${fId(29)})`}>
                  <circle cx="282.262" cy="121.202" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_27" cx="282.262" cy="121.202" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_30"
                className={animate ? particleClass(27) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[27]}s`, animationDelay: `${PARTICLE_DELAYS[27]}s` } : undefined}
              >
                <g id="Ellipse 9_28" filter={`url(#${fId(30)})`}>
                  <circle cx="268.813" cy="118.213" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_28" cx="268.813" cy="118.213" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_31"
                className={animate ? particleClass(31) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[31]}s`, animationDelay: `${PARTICLE_DELAYS[31]}s` } : undefined}
              >
                <g id="Ellipse 9_29" filter={`url(#${fId(31)})`}>
                  <circle cx="256.858" cy="101.028" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_29" cx="256.858" cy="101.028" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_32"
                className={animate ? particleClass(32) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[32]}s`, animationDelay: `${PARTICLE_DELAYS[32]}s` } : undefined}
              >
                <g id="Ellipse 9_30" filter={`url(#${fId(32)})`}>
                  <circle cx="246.398" cy="117.466" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_30" cx="246.398" cy="117.466" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_33"
                className={animate ? particleClass(33) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[33]}s`, animationDelay: `${PARTICLE_DELAYS[33]}s` } : undefined}
              >
                <g id="Ellipse 9_31" filter={`url(#${fId(33)})`}>
                  <circle cx="222.489" cy="157.813" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_31" cx="222.489" cy="157.813" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_34"
                className={animate ? particleClass(34) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[34]}s`, animationDelay: `${PARTICLE_DELAYS[34]}s` } : undefined}
              >
                <g id="Ellipse 9_32" filter={`url(#${fId(34)})`}>
                  <circle cx="226.225" cy="118.96" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_32" cx="226.225" cy="118.96" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_35"
                className={animate ? particleClass(35) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[35]}s`, animationDelay: `${PARTICLE_DELAYS[35]}s` } : undefined}
              >
                <g id="Ellipse 9_33" filter={`url(#${fId(35)})`}>
                  <circle cx="237.432" cy="125.685" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_33" cx="237.432" cy="125.685" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_36"
                className={animate ? particleClass(36) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[36]}s`, animationDelay: `${PARTICLE_DELAYS[36]}s` } : undefined}
              >
                <g id="Ellipse 9_34" filter={`url(#${fId(36)})`}>
                  <circle cx="248.64" cy="132.409" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_34" cx="248.64" cy="132.409" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
            </g>
            <g id="glow-balls_37" opacity="0.7">
              <g
                id="glow-balls_38"
                className={animate ? particleClass(37) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[37]}s`, animationDelay: `${PARTICLE_DELAYS[37]}s` } : undefined}
              >
                <g id="Ellipse 9_35" filter={`url(#${fId(37)})`}>
                  <circle cx="234.83" cy="87.632" r="0.830186" fill="white" />
                </g>
                <circle id="Ellipse 10_35" cx="234.83" cy="87.632" r="0.830186" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_39"
                className={animate ? particleClass(38) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[38]}s`, animationDelay: `${PARTICLE_DELAYS[38]}s` } : undefined}
              >
                <g id="Ellipse 9_36" filter={`url(#${fId(38)})`}>
                  <circle cx="282.151" cy="103.406" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_36" cx="282.151" cy="103.406" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_40"
                className={animate ? particleClass(39) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[39]}s`, animationDelay: `${PARTICLE_DELAYS[39]}s` } : undefined}
              >
                <g id="Ellipse 9_37" filter={`url(#${fId(39)})`}>
                  <circle cx="260.566" cy="131.632" r="0.830186" fill="white" />
                </g>
                <circle id="Ellipse 10_37" cx="260.566" cy="131.632" r="0.830186" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_41"
                className={animate ? particleClass(40) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[40]}s`, animationDelay: `${PARTICLE_DELAYS[40]}s` } : undefined}
              >
                <g id="Ellipse 9_38" filter={`url(#${fId(40)})`}>
                  <circle cx="226.528" cy="131.632" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_38" cx="226.528" cy="131.632" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_42"
                className={animate ? particleClass(41) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[41]}s`, animationDelay: `${PARTICLE_DELAYS[41]}s` } : undefined}
              >
                <g id="Ellipse 9_39" filter={`url(#${fId(41)})`}>
                  <circle cx="212.415" cy="113.783" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_39" cx="212.415" cy="113.783" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_43"
                className={animate ? particleClass(42) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[42]}s`, animationDelay: `${PARTICLE_DELAYS[42]}s` } : undefined}
              >
                <g id="Ellipse 9_40" filter={`url(#${fId(42)})`}>
                  <circle cx="234.83" cy="102.991" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_40" cx="234.83" cy="102.991" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_44"
                className={animate ? particleClass(43) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[43]}s`, animationDelay: `${PARTICLE_DELAYS[43]}s` } : undefined}
              >
                <g id="Ellipse 9_41" filter={`url(#${fId(43)})`}>
                  <circle cx="271.358" cy="117.519" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_41" cx="271.358" cy="117.519" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_45"
                className={animate ? particleClass(44) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[44]}s`, animationDelay: `${PARTICLE_DELAYS[44]}s` } : undefined}
              >
                <g id="Ellipse 9_42" filter={`url(#${fId(44)})`}>
                  <circle cx="246.038" cy="78.9151" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_42" cx="246.038" cy="78.9151" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_46"
                className={animate ? particleClass(45) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[45]}s`, animationDelay: `${PARTICLE_DELAYS[45]}s` } : undefined}
              >
                <g id="Ellipse 9_43" filter={`url(#${fId(45)})`}>
                  <circle cx="276.858" cy="107.245" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_43" cx="276.858" cy="107.245" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_47"
                className={animate ? particleClass(46) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[46]}s`, animationDelay: `${PARTICLE_DELAYS[46]}s` } : undefined}
              >
                <g id="Ellipse 9_44" filter={`url(#${fId(46)})`}>
                  <circle cx="274.368" cy="113.056" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_44" cx="274.368" cy="113.056" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_48"
                className={animate ? particleClass(47) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[47]}s`, animationDelay: `${PARTICLE_DELAYS[47]}s` } : undefined}
              >
                <g id="Ellipse 9_45" filter={`url(#${fId(47)})`}>
                  <circle cx="266.896" cy="111.396" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_45" cx="266.896" cy="111.396" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_49"
                className={animate ? particleClass(28) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[28]}s`, animationDelay: `${PARTICLE_DELAYS[28]}s` } : undefined}
              >
                <g id="Ellipse 9_46" filter={`url(#${fId(48)})`}>
                  <circle cx="260.255" cy="101.849" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_46" cx="260.255" cy="101.849" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_50"
                className={animate ? particleClass(29) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[29]}s`, animationDelay: `${PARTICLE_DELAYS[29]}s` } : undefined}
              >
                <g id="Ellipse 9_47" filter={`url(#${fId(49)})`}>
                  <circle cx="254.443" cy="110.981" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_47" cx="254.443" cy="110.981" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_51"
                className={animate ? particleClass(30) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[30]}s`, animationDelay: `${PARTICLE_DELAYS[30]}s` } : undefined}
              >
                <g id="Ellipse 9_48" filter={`url(#${fId(50)})`}>
                  <circle cx="241.16" cy="133.396" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_48" cx="241.16" cy="133.396" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_52"
                className={animate ? particleClass(48) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[48]}s`, animationDelay: `${PARTICLE_DELAYS[48]}s` } : undefined}
              >
                <g id="Ellipse 9_49" filter={`url(#${fId(51)})`}>
                  <circle cx="243.236" cy="111.811" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_49" cx="243.236" cy="111.811" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_53"
                className={animate ? particleClass(49) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[49]}s`, animationDelay: `${PARTICLE_DELAYS[49]}s` } : undefined}
              >
                <g id="Ellipse 9_50" filter={`url(#${fId(52)})`}>
                  <circle cx="249.462" cy="115.547" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_50" cx="249.462" cy="115.547" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_54"
                className={animate ? particleClass(50) : ""}
                style={animate ? { animationDuration: `${PARTICLE_DURATIONS[50]}s`, animationDelay: `${PARTICLE_DELAYS[50]}s` } : undefined}
              >
                <g id="Ellipse 9_51" filter={`url(#${fId(53)})`}>
                  <circle cx="255.688" cy="119.283" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_51" cx="255.688" cy="119.283" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter id={fId(0)} x="117.5" y="0" width="256" height="229.711" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(1)} x="170.382" y="180.261" width="21.9076" height="16.0295" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2053_88" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2053_88" result="shape" />
          </filter>
          <filter id={fId(2)} x="293.507" y="102.293" width="24.78" height="17.688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2053_88" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2053_88" result="shape" />
          </filter>
          <filter id={fId(3)} x="223.776" y="34.7646" width="11.153" height="11.153" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(4)} x="314.424" y="65.5059" width="9.57648" height="9.57648" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(5)} x="272.647" y="118.318" width="11.153" height="11.153" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(6)} x="208.8" y="119.106" width="9.57648" height="9.57648" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(7)} x="182" y="85.2118" width="9.57648" height="9.57648" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(8)} x="224.565" y="64.7177" width="9.57648" height="9.57648" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(9)} x="293.929" y="92.3058" width="9.57648" height="9.57648" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(10)} x="245.847" y="19" width="9.57648" height="9.57648" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(11)} x="304.965" y="73.3882" width="8.3941" height="8.3941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(12)} x="300.235" y="84.4235" width="8.3941" height="8.3941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(13)} x="286.047" y="81.2706" width="8.3941" height="8.3941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(14)} x="273.435" y="63.1412" width="8.3941" height="8.3941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(15)} x="262.4" y="80.4824" width="8.3941" height="8.3941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(16)} x="237.177" y="123.047" width="8.3941" height="8.3941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(17)} x="241.118" y="82.0588" width="8.3941" height="8.3941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(18)} x="252.941" y="89.153" width="8.3941" height="8.3941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(19)} x="264.765" y="96.2471" width="8.3941" height="8.3941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(20)} x="205.6" y="69.9434" width="10.9887" height="10.9887" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(21)} x="291.525" y="99.083" width="9.49432" height="9.49432" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(22)} x="251.925" y="149.143" width="10.9887" height="10.9887" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(23)} x="191.404" y="149.891" width="9.49432" height="9.49432" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(24)} x="166" y="117.762" width="9.49432" height="9.49432" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(25)} x="206.347" y="98.3359" width="9.49432" height="9.49432" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(26)} x="272.098" y="124.487" width="9.49432" height="9.49432" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(27)} x="226.521" y="55" width="9.49432" height="9.49432" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(28)} x="282.558" y="106.555" width="8.3736" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(29)} x="278.075" y="117.015" width="8.3736" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(30)} x="264.626" y="114.026" width="8.3736" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(31)} x="252.672" y="96.8415" width="8.3736" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(32)} x="242.211" y="113.279" width="8.3736" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(33)} x="218.302" y="153.626" width="8.3736" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(34)} x="222.038" y="114.774" width="8.3736" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(35)} x="233.245" y="121.498" width="8.3736" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(36)} x="244.453" y="128.223" width="8.3736" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(37)} x="230" y="82.8018" width="9.6604" height="9.6604" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(38)} x="277.736" y="98.9904" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(39)} x="255.736" y="126.802" width="9.6604" height="9.6604" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(40)} x="222.113" y="127.217" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(41)} x="208" y="109.368" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(42)} x="230.415" y="98.5756" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(43)} x="266.943" y="113.104" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(44)} x="241.623" y="74.5" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(45)} x="272.755" y="103.141" width="8.20752" height="8.20752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(46)} x="270.264" y="108.953" width="8.20752" height="8.20752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(47)} x="262.792" y="107.292" width="8.20752" height="8.20752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(48)} x="256.151" y="97.7451" width="8.20752" height="8.20752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(49)} x="250.339" y="106.877" width="8.20752" height="8.20752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(50)} x="237.057" y="129.292" width="8.20752" height="8.20752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(51)} x="239.132" y="107.707" width="8.20752" height="8.20752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(52)} x="245.358" y="111.443" width="8.20752" height="8.20752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <filter id={fId(53)} x="251.585" y="115.179" width="8.20752" height="8.20752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2053_88" />
          </filter>
          <linearGradient id={pId(0)} x1="283.5" y1="21.5" x2="289.5" y2="211" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.bgGlowMid} stop-opacity="0" />
            <stop offset="0.5" stop-color={c.bgGlowMid} />
            <stop offset="1" stop-color={c.bgGlow} />
          </linearGradient>
          <linearGradient id={pId(1)} x1="44.9628" y1="16.2363" x2="105.357" y2="175.091" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.rippleFrom} stop-opacity="0" />
            <stop offset="0.600962" stop-color={c.rippleMid} />
            <stop offset="1" stop-color={c.rippleTo} />
          </linearGradient>
          <linearGradient id={pId(2)} x1="59.7089" y1="21.5612" x2="139.91" y2="232.514" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.rippleFrom} stop-opacity="0" />
            <stop offset="0.600962" stop-color={c.rippleMid} />
            <stop offset="1" stop-color={c.rippleTo} />
          </linearGradient>
          <linearGradient id={pId(3)} x1="86.2381" y1="137.973" x2="315.879" y2="317.612" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.rippleFrom} stop-opacity="0" />
            <stop offset="0.600962" stop-color={c.rippleMid} />
            <stop offset="1" stop-color={c.rippleTo} />
          </linearGradient>
          <linearGradient id={pId(4)} x1="301.5" y1="139" x2="184" y2="145" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.micStrokeFrom} />
            <stop offset="0.0817308" stop-color={c.micStrokeMid} />
            <stop offset="0.918269" stop-color={c.micStrokeTo} />
            <stop offset="1" stop-color={c.micStrokeEnd} />
          </linearGradient>
          <linearGradient id={pId(5)} x1="262.904" y1="141" x2="262.904" y2="170" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.meterFrom} />
            <stop offset="1" stop-color={c.meterTo} />
          </linearGradient>
          <linearGradient id={pId(6)} x1="225.515" y1="121" x2="225.515" y2="150.153" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.meterFrom} />
            <stop offset="1" stop-color={c.meterTo} />
          </linearGradient>
          <linearGradient id={pId(7)} x1="204.5" y1="192.5" x2="157" y2="203.5" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.playBottomFrom} />
            <stop offset="1" stop-color={c.playBottomTo} />
          </linearGradient>
          <linearGradient id={pId(8)} x1="17.0178" y1="29.1702" x2="56.896" y2="20.0302" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.playTopFrom} />
            <stop offset="1" stop-color={c.playTopTo} />
          </linearGradient>
          <linearGradient id={pId(9)} x1="297.5" y1="123.5" x2="297" y2="133" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.pauseBottomFrom} />
            <stop offset="1" stop-color={c.pauseBottomTo} />
          </linearGradient>
          <linearGradient id={pId(10)} x1="17.0178" y1="29.1702" x2="56.896" y2="20.0302" gradientUnits="userSpaceOnUse">
            <stop stop-color={c.pauseTopFrom} />
            <stop offset="1" stop-color={c.pauseTopTo} />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}
