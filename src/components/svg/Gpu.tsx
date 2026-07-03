import { motion } from "motion/react";
import { useId } from "react";

const DEFAULT_COLORS = {
  frame: "#181D2A",
  frameInner: "#404A67",
  surface: "#1E2638",
  surfaceLight: "#2F374F",
  accent: "#6785C8",
  panel: "#283751",
  panelDark: "#20293F",
  led: "#00E5FF",
  stroke: "black",
  gradientFrom: "#20293F",
  gradientTo: "#283751",
} as const

type GpuColors = {
  frame: string
  frameInner: string
  surface: string
  surfaceLight: string
  accent: string
  panel: string
  panelDark: string
  led: string
  stroke: string
  gradientFrom: string
  gradientTo: string
}

type Props = {
  className?: string
  colors?: Partial<GpuColors>
  rotationDuration?: number
}

export default function Gpu({ 
  className = "w-100", 
  colors, 
  rotationDuration = 2 
}: Props) {
  const fan1Cx = 243.66;
  const fan1Cy = 124.65;
  const fan2Cx = 357.74;
  const fan2Cy = 58.65;
  // Linear part of the isometric projection: maps fan-face local to screen-relative-to-center
  const M_linear = "0.866025 -0.5 0.866025 0.5 0 0";
  // Inverse: maps screen-relative-to-center back to fan-face local
  const M_inv = "0.57735 0.57735 -1 1 0 0";
  const c = { ...DEFAULT_COLORS, ...colors }
  const uid = useId()

  return (
    <div>
      <svg className={className} viewBox="0 0 485 332" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            @keyframes gpu-rotor-pulse {
              0%, 100% { opacity: 0.7; }
              50% { opacity: 1; }
            }
            @keyframes gpu-rgb-cycle {
              0% { color: #00E5FF; stroke: #00E5FF; }
              25% { color: #7C4DFF; stroke: #7C4DFF; }
              50% { color: #FF4081; stroke: #FF4081; }
              75% { color: #FFD740; stroke: #FFD740; }
              100% { color: #00E5FF; stroke: #00E5FF; }
            }
            .gpu-rotor {
              animation: gpu-rotor-pulse 1.3s ease-in-out infinite;
            }
            .gpu-rotor-2 {
              animation-delay: 0.65s;
            }
            .gpu-led {
              fill: none;
              stroke-width: 1.5;
              filter: drop-shadow(0 0 3px currentColor) drop-shadow(0 0 8px currentColor);
              animation: gpu-rgb-cycle 5s linear infinite, gpu-led-pulse 2.4s ease-in-out infinite;
            }
            .gpu-led-2 {
              animation-delay: 0s, 1.2s;
            }
            .gpu-power-led {
              fill: #E0F7FA;
              filter: drop-shadow(0 0 3px #00E5FF) drop-shadow(0 0 6px #00E5FF);
              transform-box: fill-box;
              transform-origin: center;
              animation: gpu-power-pulse 1.5s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .gpu-rotor, .gpu-rotor-2,
              .gpu-led, .gpu-led-2 {
                animation: none;
              }
            }
          `}
        </style>
        <g id="GPU" filter={`url(#${uid}-filter0)`}>
          <g id="gpu-frame">
            <path id="Vector 10" d="M480.996 107V82.5L197.996 245.5L219.996 258.5L480.996 107Z" fill={c.frame} stroke={c.stroke} />
            <path id="Vector 9" d="M338.996 0.5L57.4956 164L197.996 245.5L480.996 82V78.5L345.496 0.5H338.996Z" fill={c.frameInner} stroke={c.stroke} />
            <path id="Vector 8" d="M223.496 260.5L208.496 269V308.5L223.496 299V260.5Z" fill={c.frameInner} stroke={c.stroke} />
            <path id="Vector 7" d="M208.496 308L36.4956 209.5L36.9956 170.5L208.496 269.5V308Z" fill={c.surface} stroke={c.stroke} />
            <rect id="Rectangle 6" width="28.8675" height="9.33949" rx="4.66974" transform="matrix(0.866025 0.5 0 1 65.9956 203.83)" fill={c.stroke} fill-opacity="0.67" />
            <rect id="Rectangle 7" width="28.8675" height="9.33949" rx="4.66974" transform="matrix(0.866025 0.5 0 1 147.996 251)" fill={c.stroke} fill-opacity="0.67" />
            <path id="Vector 4" d="M223.496 260.5L208.496 269L37.4956 170.5L15.9956 182L0.995621 173L37.4956 152.5L223.496 260.5Z" fill={c.accent} stroke={c.stroke} />
            <path id="Vector 5" d="M15.9956 220.5V182L36.9956 171L36.4956 209.5L15.9956 220.5Z" fill={c.accent} stroke={c.stroke} />
            <path id="Vector 6" d="M0.995621 212.5V173L15.4956 182.5V221L0.995621 212.5Z" fill={c.surface} stroke={c.stroke} />
            <path id="Vector 3" d="M91.9956 167.5V159.5L206.996 226H223.996L471.496 82V93.5L225.496 236H206.996L91.9956 167.5Z" fill={c.surfaceLight} stroke={c.stroke} />
            <g id="pins" className="gpu-pins">
              <g id="Vector 11">
                <path d="M454.996 137.5L282.996 236C277.496 238.5 270.512 238 266.996 236L258.996 231L267.996 226L446.996 121.5C447.829 122.333 450.596 124.8 454.996 128C459.396 131.2 456.829 135.667 454.996 137.5Z" fill={c.frameInner} />
                <path d="M267.996 226L258.996 231L266.996 236C270.512 238 277.496 238.5 282.996 236L454.996 137.5C456.829 135.667 459.396 131.2 454.996 128C450.596 124.8 447.829 122.333 446.996 121.5L267.996 226ZM282.996 236L267.996 226" stroke={c.stroke} />
              </g>
              <path id="Vector 12" d="M276.496 221.5L291.496 231" stroke={c.stroke} />
              <path id="Vector 13" d="M285.496 215.5L300.496 226" stroke={c.stroke} />
              <path id="Vector 14" d="M294.996 210.5L309.496 220.5" stroke={c.stroke} />
              <path id="Vector 15" d="M303.996 205L319.496 215" stroke={c.stroke} />
              <path id="Vector 16" d="M313.496 199.5L328.996 209.5" stroke={c.stroke} />
              <path id="Vector 17" d="M322.496 194.5L337.496 204.5" stroke={c.stroke} />
              <path id="Vector 18" d="M330.496 189.5L346.496 199.5" stroke={c.stroke} />
              <path id="Vector 19" d="M338.996 184.5L354.996 194.5" stroke={c.stroke} />
              <path id="Vector 20" d="M348.496 179L364.996 189" stroke={c.stroke} />
              <path id="Vector 21" d="M357.496 174L372.996 184" stroke={c.stroke} />
              <path id="Vector 22" d="M366.996 168.5L382.496 179" stroke={c.stroke} />
              <path id="Vector 23" d="M376.496 163L390.496 174" stroke={c.stroke} />
              <path id="Vector 24" d="M384.996 157.5L398.996 169.5" stroke={c.stroke} />
              <path id="Vector 25" d="M394.496 152L408.496 164" stroke={c.stroke} />
              <path id="Vector 26" d="M402.996 147.5L417.496 159" stroke={c.stroke} />
              <path id="Vector 27" d="M411.496 142.5L425.496 154" stroke={c.stroke} />
              <path id="Vector 28" d="M419.996 137.5L433.996 149.5" stroke={c.stroke} />
              <path id="Vector 29" d="M429.496 132L443.496 144" stroke={c.stroke} />
              <path id="Vector 30" d="M438.996 126.5L453.496 138.5" stroke={c.stroke} />
            </g>
            <path id="Vector 2" d="M389.496 8.5L339.496 9.5L91.9956 151V159L206.996 226H223.496L470.996 82L469.996 55L389.496 8.5Z" fill={c.accent} stroke={c.stroke} />
            <rect id="Rectangle 1" x="137.679" y="168.183" width="23" height="6" rx="3" transform="rotate(-30 137.679 168.183)" fill={c.surface} stroke={c.stroke} />
            <rect id="Rectangle 2" x="149.679" y="176.183" width="23" height="6" rx="3" transform="rotate(-30 149.679 176.183)" fill={c.panel} stroke={c.stroke} />
            <rect id="Rectangle 3" x="161.679" y="183.183" width="23" height="6" rx="3" transform="rotate(-30 161.679 183.183)" fill={c.panelDark} stroke={c.stroke} />
            <circle id="Ellipse 3" cx="3.5" cy="3.5" r="3.5" transform="matrix(0.866025 -0.5 0.866025 0.5 213.996 207.5)" fill={c.surface} />
            <circle id="Ellipse 7" cx="3.5" cy="3.5" r="3.5" transform="matrix(0.866025 -0.5 0.866025 0.5 119.996 152.5)" fill={c.surface} />
            <circle id="Ellipse 4" cx="3.5" cy="3.5" r="3.5" transform="matrix(0.866025 -0.5 0.866025 0.5 342.996 134.5)" fill={c.surface} />
            <circle id="Ellipse 5" cx="3.5" cy="3.5" r="3.5" transform="matrix(0.866025 -0.5 0.866025 0.5 441.996 56.5)" fill={c.surface} />
            <circle id="Ellipse 6" cx="3.5" cy="3.5" r="3.5" transform="matrix(0.866025 -0.5 0.866025 0.5 246.996 78.5)" fill={c.surface} />
            <rect id="Rectangle 4" x="174.679" y="190.183" width="23" height="6" rx="3" transform="rotate(-30 174.679 190.183)" fill={c.panel} stroke={c.stroke} />
            <rect id="Rectangle 5" x="186.679" y="198.183" width="23" height="6" rx="3" transform="rotate(-30 186.679 198.183)" fill={c.surface} stroke={c.stroke} />
            <ellipse id="Ellipse 8" cx="2.5" cy="3" rx="2.5" ry="3" transform="matrix(0.866025 0.5 0 1 3.99562 184)" fill={c.stroke} fill-opacity="0.67" />
            <ellipse id="Ellipse 9" cx="2.5" cy="3" rx="2.5" ry="3" transform="matrix(0.866025 0.5 0 1 3.99562 202)" fill={c.stroke} fill-opacity="0.67" />
            <circle id="Ellipse 10" cx="4.5" cy="4.5" r="4.5" transform="matrix(0.866025 0.5 0 1 50.9956 195)" fill={c.frameInner} />
            <circle id="Ellipse 11" cx="4.5" cy="4.5" r="4.5" transform="matrix(0.866025 0.5 0 1 97.9956 222)" fill={c.frameInner} />
            <circle id="Ellipse 12" cx="4.5" cy="4.5" r="4.5" transform="matrix(0.866025 0.5 0 1 133.996 243)" fill={c.frameInner} />
            <circle id="Ellipse 13" cx="4.5" cy="4.5" r="4.5" transform="matrix(0.866025 0.5 0 1 179.996 269)" fill={c.frameInner} />
            <rect id="Rectangle 8" x="214.996" y="274" width="2" height="20" rx="1" fill={c.frame} />
          </g>
          <g id="gpu-fan-set">
            <path id="Vector 1" d="M176.496 143.5V126.5H310.996L309.496 148C305.829 157.167 287.696 175.9 244.496 177.5C201.296 179.1 181.162 155.5 176.496 143.5Z" fill={c.surface} />
            <circle id="Ellipse 2" cx="54.6521" cy="54.6521" r="54.1521" transform="matrix(0.866025 -0.5 0.866025 0.5 148.996 124.652)" fill={c.frameInner} stroke={c.stroke} />
            <circle id="Ellipse 1" cx="45.1198" cy="45.1198" r="45.1198" transform="matrix(0.866025 -0.5 0.866025 0.5 165.506 124.652)" fill={c.frame} />
            <g transform={`translate(${fan1Cx} ${fan1Cy})`}>
              <circle
                className="gpu-led"
                cx="0" cy="0" r="51"
                transform={`matrix(${M_linear})`}
                stroke={c.led}
              />
            </g>
            <g transform={`translate(${fan1Cx} ${fan1Cy})`}>
              <g transform={`matrix(${M_linear})`}>
                <motion.g
                  id="Group 1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                >
                  <g transform={`matrix(${M_inv}) translate(${-fan1Cx} ${-fan1Cy})`}>
                    <g id="blade 1" filter={`url(#${uid}-filter1)`}>
                      <path d="M227.389 110.494L239.772 122.409L249.128 121.774L259.86 110.812C260.502 107.052 259.805 99.3411 251.879 98.5785C243.954 97.8159 230.049 99.6377 224.087 100.644C222.894 101.12 220.289 102.328 219.409 103.345C218.528 104.361 219.592 105.781 220.234 106.363L227.389 110.494Z" fill={`url(#${uid}-paint0)`} />
                      <path d="M227.389 110.494L239.772 122.409L249.128 121.774L259.86 110.812C260.502 107.052 259.805 99.3411 251.879 98.5785C243.954 97.8159 230.049 99.6377 224.087 100.644C222.894 101.12 220.289 102.328 219.409 103.345C218.528 104.361 219.592 105.781 220.234 106.363L227.389 110.494Z" stroke={c.frameInner} />
                    </g>
                    <g id="blade2" filter={`url(#${uid}-filter2)`}>
                      <path d="M268.566 115.203L247.927 122.352L249.028 127.754L268.015 133.95C274.528 134.32 287.883 133.918 289.204 129.342C290.525 124.767 287.369 116.738 285.626 113.296C284.801 112.608 282.71 111.104 280.948 110.595C279.187 110.087 276.729 110.701 275.72 111.072L268.566 115.203Z" fill={`url(#${uid}-paint1)`} />
                      <path d="M268.566 115.203L247.927 122.352L249.028 127.754L268.015 133.95C274.528 134.32 287.883 133.918 289.204 129.342C290.525 124.767 287.369 116.738 285.626 113.296C284.801 112.608 282.71 111.104 280.948 110.595C279.187 110.087 276.729 110.701 275.72 111.072L268.566 115.203Z" stroke={c.frameInner} />
                    </g>
                    <g id="blade3" filter={`url(#${uid}-filter3)`}>
                      <path d="M260.266 138.893L247.883 126.978L238.527 127.613L227.796 138.576C227.154 142.335 227.851 150.046 235.776 150.809C243.701 151.571 257.606 149.75 263.568 148.743C264.761 148.267 267.366 147.059 268.246 146.043C269.127 145.026 268.063 143.606 267.421 143.024L260.266 138.893Z" fill={`url(#${uid}-paint2)`} />
                      <path d="M260.266 138.893L247.883 126.978L238.527 127.613L227.796 138.576C227.154 142.335 227.851 150.046 235.776 150.809C243.701 151.571 257.606 149.75 263.568 148.743C264.761 148.267 267.366 147.059 268.246 146.043C269.127 145.026 268.063 143.606 267.421 143.024L260.266 138.893Z" stroke={c.frameInner} />
                    </g>
                    <g id="blade4" filter={`url(#${uid}-filter4)`}>
                      <path d="M218.826 134.502L239.464 127.353L238.364 121.951L219.376 115.755C212.864 115.385 199.509 115.787 198.188 120.363C196.867 124.938 200.023 132.966 201.765 136.409C202.591 137.097 204.682 138.601 206.443 139.11C208.204 139.618 210.663 139.004 211.672 138.633L218.826 134.502Z" fill={`url(#${uid}-paint3)`} />
                      <path d="M218.826 134.502L239.464 127.353L238.364 121.951L219.376 115.755C212.864 115.385 199.509 115.787 198.188 120.363C196.867 124.938 200.023 132.966 201.765 136.409C202.591 137.097 204.682 138.601 206.443 139.11C208.204 139.618 210.663 139.004 211.672 138.633L218.826 134.502Z" stroke={c.frameInner} />
                    </g>
                  </g>
                </motion.g>
              </g>
            </g>
            <g id="rotor" className="gpu-rotor" filter={`url(#${uid}-filter5)`}>
              <circle cx="7.62588" cy="7.62588" r="7.62588" transform="matrix(0.866025 -0.5 -0.866025 -0.5 243.9 132.418)" fill={c.panelDark} />
              <circle cx="7.62588" cy="7.62588" r="7.12588" transform="matrix(0.866025 -0.5 -0.866025 -0.5 243.9 132.418)" stroke={c.surfaceLight} />
            </g>
            {/* <circle className="gpu-power-led" cx="243.9" cy="124.79" r="2.5" /> */}
          </g>
          <g id="gpu-fan-set_2">
            <path id="Vector 1_2" d="M290.58 77.5V60.5H425.08L423.58 82C419.914 91.1667 401.78 109.9 358.58 111.5C315.38 113.1 295.247 89.5 290.58 77.5Z" fill={c.surface} />
            <circle id="Ellipse 2_2" cx="54.6521" cy="54.6521" r="54.1521" transform="matrix(0.866025 -0.5 0.866025 0.5 263.08 58.6521)" fill={c.frameInner} stroke={c.stroke} />
            <circle id="Ellipse 1_2" cx="45.1198" cy="45.1198" r="45.1198" transform="matrix(0.866025 -0.5 0.866025 0.5 279.591 58.6521)" fill={c.frame} />
            <g transform={`translate(${fan2Cx} ${fan2Cy})`}>
              <circle
                className="gpu-led gpu-led-2"
                cx="0" cy="0" r="51"
                transform={`matrix(${M_linear})`}
                stroke={c.led}
              />
            </g>
            <g transform={`translate(${fan2Cx} ${fan2Cy})`}>
              <g transform={`matrix(${M_linear})`}>
                <motion.g
                  id="Group 1_2"
                  animate={{ rotate: -360 }}
                  transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                >
                  <g transform={`matrix(${M_inv}) translate(${-fan2Cx} ${-fan2Cy})`}>
                    <g id="blade 1_2" filter={`url(#${uid}-filter6)`}>
                      <path d="M341.473 44.494L353.856 56.4094L363.212 55.7739L373.944 44.8117C374.586 41.0517 373.889 33.3411 365.964 32.5785C358.039 31.8159 344.133 33.6377 338.171 34.6439C336.979 35.1205 334.374 36.3279 333.493 37.3447C332.613 38.3615 333.677 39.7807 334.319 40.3633L341.473 44.494Z" fill={`url(#${uid}-paint4)`} />
                      <path d="M341.473 44.494L353.856 56.4094L363.212 55.7739L373.944 44.8117C374.586 41.0517 373.889 33.3411 365.964 32.5785C358.039 31.8159 344.133 33.6377 338.171 34.6439C336.979 35.1205 334.374 36.3279 333.493 37.3447C332.613 38.3615 333.677 39.7807 334.319 40.3633L341.473 44.494Z" stroke={c.frameInner} />
                    </g>
                    <g id="blade2_2" filter={`url(#${uid}-filter7)`}>
                      <path d="M382.65 49.2027L362.012 56.352L363.113 61.7537L382.1 67.9497C388.612 68.3204 401.967 67.9179 403.288 63.3424C404.609 58.7669 401.454 50.7385 399.711 47.2963C398.885 46.6078 396.794 45.1038 395.033 44.5954C393.272 44.087 390.814 44.7013 389.805 45.072L382.65 49.2027Z" fill={`url(#${uid}-paint5)`} />
                      <path d="M382.65 49.2027L362.012 56.352L363.113 61.7537L382.1 67.9497C388.612 68.3204 401.967 67.9179 403.288 63.3424C404.609 58.7669 401.454 50.7385 399.711 47.2963C398.885 46.6078 396.794 45.1038 395.033 44.5954C393.272 44.087 390.814 44.7013 389.805 45.072L382.65 49.2027Z" stroke={c.frameInner} />
                    </g>
                    <g id="blade3_2" filter={`url(#${uid}-filter8)`}>
                      <path d="M374.351 72.8932L361.968 60.9778L352.612 61.6133L341.88 72.5755C341.238 76.3355 341.935 84.0461 349.86 84.8087C357.785 85.5713 371.691 83.7495 377.653 82.7433C378.845 82.2667 381.45 81.0593 382.331 80.0425C383.211 79.0257 382.147 77.6065 381.505 77.0239L374.351 72.8932Z" fill={`url(#${uid}-paint6)`} />
                      <path d="M374.351 72.8932L361.968 60.9778L352.612 61.6133L341.88 72.5755C341.238 76.3355 341.935 84.0461 349.86 84.8087C357.785 85.5713 371.691 83.7495 377.653 82.7433C378.845 82.2667 381.45 81.0593 382.331 80.0425C383.211 79.0257 382.147 77.6065 381.505 77.0239L374.351 72.8932Z" stroke={c.frameInner} />
                    </g>
                    <g id="blade4_2" filter={`url(#${uid}-filter9)`}>
                      <path d="M332.911 68.5022L353.549 61.353L352.448 55.9513L333.461 49.7553C326.948 49.3846 313.593 49.7871 312.272 54.3626C310.952 58.9381 314.107 66.9665 315.85 70.4087C316.675 71.0971 318.767 72.6011 320.528 73.1095C322.289 73.6179 324.747 73.0036 325.756 72.6329L332.911 68.5022Z" fill={`url(#${uid}-paint7)`} />
                      <path d="M332.911 68.5022L353.549 61.353L352.448 55.9513L333.461 49.7553C326.948 49.3846 313.593 49.7871 312.272 54.3626C310.952 58.9381 314.107 66.9665 315.85 70.4087C316.675 71.0971 318.767 72.6011 320.528 73.1095C322.289 73.6179 324.747 73.0036 325.756 72.6329L332.911 68.5022Z" stroke={c.frameInner} />
                    </g>
                  </g>
                </motion.g>
              </g>
            </g>
            <g id="rotor_2" className="gpu-rotor gpu-rotor-2" filter={`url(#${uid}-filter10)`}>
              <circle cx="7.62588" cy="7.62588" r="7.62588" transform="matrix(0.866025 -0.5 -0.866025 -0.5 357.984 66.4184)" fill={c.panelDark} />
              <circle cx="7.62588" cy="7.62588" r="7.12588" transform="matrix(0.866025 -0.5 -0.866025 -0.5 357.984 66.4184)" stroke={c.surfaceLight} />
            </g>
            {/* <circle className="gpu-power-led gpu-power-led-2" cx="357.98" cy="58.79" r="2.5" /> */}
          </g>
        </g>
        <defs>
          <filter id={`${uid}-filter0`} x="0" y="0" width="481.496" height="331.409" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="22" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.250462 0 0 0 0 0.288808 0 0 0 0 0.403846 0 0 0 0.13 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter1`} x="218.462" y="98.0434" width="42.1925" height="26.7439" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter2`} x="247.273" y="110.049" width="42.8577" height="26.3599" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter3`} x="227.001" y="126.6" width="42.1925" height="26.7439" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter4`} x="197.261" y="115.296" width="42.8576" height="26.3599" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter5`} x="234.56" y="119.4" width="18.6795" height="12.7846" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter6`} x="332.546" y="32.0434" width="42.1925" height="26.7439" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter7`} x="361.357" y="44.0487" width="42.8576" height="26.3599" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter8`} x="341.085" y="60.6" width="42.1925" height="26.7439" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter9`} x="311.346" y="49.2964" width="42.8577" height="26.3599" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <filter id={`${uid}-filter10`} x="348.644" y="53.4002" width="18.6795" height="12.7846" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2057_273" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2057_273" result="shape" />
          </filter>
          <linearGradient id={`${uid}-paint0`} x1="238.339" y1="118.912" x2="245.916" y2="97.4848" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stopColor={c.gradientFrom} />
            <stop offset="1" stopColor={c.gradientTo} />
          </linearGradient>
          <linearGradient id={`${uid}-paint1`} x1="253.986" y1="121.525" x2="273.631" y2="142.365" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stopColor={c.gradientFrom} />
            <stop offset="1" stopColor={c.gradientTo} />
          </linearGradient>
          <linearGradient id={`${uid}-paint2`} x1="249.316" y1="130.476" x2="241.74" y2="151.902" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stopColor={c.gradientFrom} />
            <stop offset="1" stopColor={c.gradientTo} />
          </linearGradient>
          <linearGradient id={`${uid}-paint3`} x1="233.406" y1="128.18" x2="213.761" y2="107.34" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stopColor={c.gradientFrom} />
            <stop offset="1" stopColor={c.gradientTo} />
          </linearGradient>
          <linearGradient id={`${uid}-paint4`} x1="352.423" y1="52.9116" x2="360" y2="31.4848" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stopColor={c.gradientFrom} />
            <stop offset="1" stopColor={c.gradientTo} />
          </linearGradient>
          <linearGradient id={`${uid}-paint5`} x1="368.07" y1="55.5247" x2="387.715" y2="76.3647" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stopColor={c.gradientFrom} />
            <stop offset="1" stopColor={c.gradientTo} />
          </linearGradient>
          <linearGradient id={`${uid}-paint6`} x1="363.401" y1="64.4756" x2="355.824" y2="85.9025" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stopColor={c.gradientFrom} />
            <stop offset="1" stopColor={c.gradientTo} />
          </linearGradient>
          <linearGradient id={`${uid}-paint7`} x1="347.49" y1="62.1803" x2="327.845" y2="41.3402" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stopColor={c.gradientFrom} />
            <stop offset="1" stopColor={c.gradientTo} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
