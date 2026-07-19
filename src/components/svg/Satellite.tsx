import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
    primary: "#7F77DD",
    secondary: "#1A1530",
    cell: "#221B40",
    body: "#150F28",
    bodyInner: "#0D0920",
    grid: "#3C3489",
    led: "#AFA9EC",
    signal: "#D4537E",
    stroke: "#534AB7",
    glow: "#26215C",
    thruster: "#F0997B",
} as const

type SatelliteColors = {
    [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
    className?: string
    colors?: Partial<SatelliteColors>
    animate?: boolean
    entranceAnimation?: boolean
}

export default function Satellite({
    className = "w-full",
    colors,
    animate = true,
    entranceAnimation = true,
}: Props) {
    const c: SatelliteColors = { ...DEFAULT_COLORS, ...colors }
    const uid = useId()
    const fid = (n: number) => `${uid}-f${n}`

    const floatCls = animate ? "sat-float" : ""
    const sheenCls = animate ? "sat-sheen" : ""
    const ledA = animate ? "sat-led sat-led-a" : ""
    const ledB = animate ? "sat-led sat-led-b" : ""
    const ledC = animate ? "sat-led sat-led-c" : ""
    const sig1 = animate ? "sat-sig sat-sig-1" : ""
    const sig2 = animate ? "sat-sig sat-sig-2" : ""

    return (
        <motion.div
            initial={entranceAnimation ? { opacity: 0, scale: 0.78 } : false}
            whileInView={entranceAnimation ? { opacity: 1, scale: 1 } : {}}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
        >
            <svg
                className={className}
                viewBox="0 0 500 400"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
            >
                <style>{`

@keyframes satFloat {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-14px); }
}

@keyframes satSignal {
    0%   { transform: scale(1);  opacity: .85; }
    100% { transform: scale(9);  opacity: 0;   }
}

@keyframes satLed {
    0%, 100% { opacity: .18; }
    50%      { opacity: 1;   }
}

@keyframes satSheen {
    0%, 100% { opacity: 0;   }
    50%      { opacity: .14; }
}

.sat-float {
    animation: satFloat 4.5s ease-in-out infinite;
    transform-box: fill-box;
    transform-origin: center;
}

.sat-sig {
    transform-box: fill-box;
    transform-origin: center;
    animation: satSignal 2.2s ease-out infinite;
}
.sat-sig-1 { animation-delay: 0s;    }
.sat-sig-2 { animation-delay: 1.1s;  }

.sat-led   { animation: satLed 1.7s ease-in-out infinite; }
.sat-led-a { animation-delay: 0s;   }
.sat-led-b { animation-delay: .57s; }
.sat-led-c { animation-delay: 1.14s;}

.sat-sheen { animation: satSheen 3s ease-in-out infinite; }

                `}</style>

                <defs>
                    <filter id={fid(0)} x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="4" />
                    </filter>
                    <filter id={fid(1)} x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="3" />
                    </filter>
                </defs>

                <ellipse
                    cx="250" cy="310"
                    rx="160" ry="28"
                    fill={c.glow}
                    opacity=".22"
                />

                <g className={floatCls}>

                    <line
                        x1="148" y1="200"
                        x2="96" y2="200"
                        stroke={c.primary}
                        strokeWidth="2.5"
                        strokeLinecap="square"
                    />

                    <rect
                        x="24" y="120"
                        width="72" height="160"
                        rx="1"
                        fill={c.secondary}
                        stroke={c.primary}
                        strokeWidth="1.8"
                    />

                    {[26, 50, 74].map(x =>
                        [122, 154, 186, 218, 250].map(y => (
                            <rect
                                key={`${x}-${y}`}
                                x={x} y={y}
                                width="20" height="28"
                                rx="0.5"
                                fill={c.cell}
                                stroke={c.stroke}
                                strokeWidth=".6"
                            />
                        ))
                    )}

                    <rect
                        className={sheenCls}
                        x="24" y="120"
                        width="22" height="160"
                        rx="1"
                        fill="#4EB3FF"
                        opacity="0"
                    />

                    <rect
                        x="24" y="120"
                        width="72" height="4"
                        fill={c.primary}
                        opacity=".7"
                    />

                    <polygon
                        points="148,148 292,148 308,164 308,252 148,252"
                        fill={c.body}
                        stroke={c.primary}
                        strokeWidth="1.8"
                    />

                    <line
                        x1="292" y1="148"
                        x2="308" y2="164"
                        stroke={c.signal}
                        strokeWidth="1"
                    />

                    <rect
                        x="158" y="163"
                        width="90" height="68"
                        rx="1"
                        fill={c.bodyInner}
                        stroke={c.grid}
                        strokeWidth=".8"
                    />

                    <line x1="158" y1="185" x2="248" y2="185" stroke={c.grid} strokeWidth=".6" />
                    <line x1="158" y1="210" x2="248" y2="210" stroke={c.grid} strokeWidth=".6" />
                    <line x1="180" y1="163" x2="180" y2="231" stroke={c.grid} strokeWidth=".6" />
                    <line x1="216" y1="163" x2="216" y2="231" stroke={c.grid} strokeWidth=".6" />

                    <g stroke={c.primary} strokeWidth="1" strokeLinecap="round">
                        <path d="M158,163 L158,171 M158,163 L166,163" />
                        <path d="M248,163 L248,171 M248,163 L240,163" />
                        <path d="M158,231 L158,223 M158,231 L166,231" />
                        <path d="M248,231 L248,223 M248,231 L240,231" />
                    </g>

                    <circle className={ledA} cx="293" cy="180" r="3" fill={c.led} />
                    <circle className={ledB} cx="293" cy="200" r="3" fill={c.led} />
                    <circle className={ledC} cx="293" cy="220" r="3" fill={c.led} />

                    <rect
                        x="148" y="148"
                        width="160" height="6"
                        fill="none"
                        stroke={c.primary}
                        strokeWidth=".6"
                    />
                    {[168, 188, 208, 228, 248, 268, 288].map(x => (
                        <line
                            key={x}
                            x1={x} y1="148"
                            x2={x} y2="154"
                            stroke={c.primary}
                            strokeWidth=".6"
                        />
                    ))}

                    <line
                        x1="282" y1="148"
                        x2="318" y2="106"
                        stroke={c.stroke}
                        strokeWidth="1.5"
                    />

                    <ellipse
                        cx="318" cy="100"
                        rx="22" ry="7"
                        fill={c.body}
                        stroke={c.primary}
                        strokeWidth="1.5"
                        transform="rotate(-20, 318, 100)"
                    />

                    <ellipse
                        cx="318" cy="100"
                        rx="13" ry="4.5"
                        fill="none"
                        stroke={c.signal}
                        strokeWidth=".8"
                        opacity=".7"
                        transform="rotate(-20, 318, 100)"
                    />

                    <circle cx="318" cy="94" r="2.5" fill={c.signal} />

                    <g filter={`url(#${fid(0)})`}>
                        <circle cx="318" cy="94" r="8" fill={c.signal} opacity=".25" />
                    </g>

                    <circle
                        className={sig1}
                        cx="318" cy="88"
                        r="3"
                        fill="none"
                        stroke={c.signal}
                        strokeWidth="1.2"
                    />
                    <circle
                        className={sig2}
                        cx="318" cy="88"
                        r="3"
                        fill="none"
                        stroke={c.signal}
                        strokeWidth="1.2"
                    />

                    <rect
                        x="182" y="252"
                        width="30" height="10"
                        rx="1"
                        fill={c.body}
                        stroke={c.stroke}
                        strokeWidth="1.2"
                    />
                    <ellipse cx="197" cy="268" rx="10" ry="4" fill="#0A2550" stroke={c.thruster} strokeWidth="1" />
                    <ellipse cx="197" cy="270" rx="6" ry="7" fill="#05143A" opacity=".7" />
                    <g filter={`url(#${fid(1)})`}>
                        <ellipse className={ledA} cx="197" cy="275" rx="4" ry="6" fill={c.thruster} opacity=".45" />
                    </g>

                    <rect
                        x="226" y="252"
                        width="30" height="10"
                        rx="1"
                        fill={c.body}
                        stroke={c.stroke}
                        strokeWidth="1.2"
                    />
                    <ellipse cx="241" cy="268" rx="10" ry="4" fill="#0A2550" stroke={c.thruster} strokeWidth="1" />
                    <ellipse cx="241" cy="270" rx="6" ry="7" fill="#05143A" opacity=".7" />
                    <g filter={`url(#${fid(1)})`}>
                        <ellipse className={ledB} cx="241" cy="275" rx="4" ry="6" fill={c.thruster} opacity=".45" />
                    </g>

                </g>

            </svg>
        </motion.div>
    )
}