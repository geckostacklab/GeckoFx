import { motion } from "motion/react"
import { useId } from "react"

const DEFAULT_COLORS = {
    primary: "#378ADD",
    secondary: "#042C53",
    accent: "#185FA5",

    glow: "#5691FF",
    glowInner: "#BCD1FF",

    panelHighlight: "#5AA8FF",

    led: "#378ADD",

    signal: "#378ADD",

    stroke: "#185FA5",
} as const

type SatelliteColors = {
    [K in keyof typeof DEFAULT_COLORS]: string
}

type Props = {
    className?: string
    colors?: Partial<SatelliteColors>

    /** Enables all SVG animations */
    animate?: boolean

    /** Motion entrance animation */
    entranceAnimation?: boolean
}

export default function Satellite({
    className = "w-full",
    colors,
    animate = true,
    entranceAnimation = true,
}: Props) {
    const c = { ...DEFAULT_COLORS, ...colors }

    const uid = useId()

    const gradientId = (n: number) => `${uid}-gradient-${n}`
    const filterId = (n: number) => `${uid}-filter-${n}`

    const floatCls = animate ? "satellite-float" : ""

    const led1 = animate ? "led led-1" : ""
    const led2 = animate ? "led led-2" : ""
    const led3 = animate ? "led led-3" : ""

    const signal1 = animate ? "signal-ring signal-1" : ""
    const signal2 = animate ? "signal-ring signal-2" : ""
    const signal3 = animate ? "signal-ring signal-3" : ""

    const shimmer = animate ? "panel-shimmer" : ""

    return (
        <motion.div
            initial={
                entranceAnimation
                    ? { opacity: 0, scale: 0.75 }
                    : false
            }
            whileInView={
                entranceAnimation
                    ? { opacity: 1, scale: 1 }
                    : {}
            }
            viewport={{ once: true, amount: "all" }}
            transition={{
                duration: 0.45,
                ease: "easeInOut",
            }}
            className="relative flex items-center justify-center"
        >
            <svg
                className={className}
                viewBox="0 0 500 360"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
            >
                <style>{`

/* ===========================
      FLOAT
=========================== */

@keyframes satelliteFloat{
0%,100%{
transform:translateY(0px);
}
50%{
transform:translateY(-16px);
}
}

/* ===========================
      SIGNAL
=========================== */

@keyframes signalExpand{

0%{
transform:scale(1);
opacity:.85;
}

100%{
transform:scale(10);
opacity:0;
}

}

/* ===========================
      LED
=========================== */

@keyframes ledBlink{

0%,100%{
opacity:.2;
}

50%{
opacity:1;
}

}

/* ===========================
      SOLAR SHIMMER
=========================== */

@keyframes panelShimmer{

0%,100%{
opacity:.2;
}

50%{
opacity:.65;
}

}

.satellite-float{
animation:satelliteFloat 4.5s ease-in-out infinite;
transform-box:fill-box;
transform-origin:center;
}

/* ---------- */

.signal-ring{
transform-box:fill-box;
transform-origin:center;
animation:signalExpand 2.2s ease-out infinite;
}

.signal-1{
animation-delay:0s;
}

.signal-2{
animation-delay:.73s;
}

.signal-3{
animation-delay:1.46s;
}

/* ---------- */

.led{
animation:ledBlink 1.7s ease-in-out infinite;
}

.led-1{
animation-delay:0s;
}

.led-2{
animation-delay:.56s;
}

.led-3{
animation-delay:1.13s;
}

/* ---------- */

.panel-shimmer{
animation:panelShimmer 2.8s ease-in-out infinite;
}

        `}</style>

                {/* ==============================
                DEFINITIONS
        =============================== */}

                <defs>

                    {/* Main satellite glow */}

                    <filter
                        id={filterId(0)}
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                    >
                        <feGaussianBlur stdDeviation="18" />
                    </filter>

                    {/* Dish glow */}

                    <filter
                        id={filterId(1)}
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                    >
                        <feGaussianBlur stdDeviation="5" />
                    </filter>

                    {/* Main body gradient */}

                    <linearGradient
                        id={gradientId(0)}
                        x1="190"
                        y1="148"
                        x2="310"
                        y2="252"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0%"
                            stopColor={c.secondary}
                        />

                        <stop
                            offset="100%"
                            stopColor="#082849"
                        />
                    </linearGradient>

                    {/* Solar panel gradient */}

                    <linearGradient
                        id={gradientId(1)}
                        x1="0"
                        y1="140"
                        x2="0"
                        y2="260"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0%"
                            stopColor={c.primary}
                            stopOpacity=".18"
                        />

                        <stop
                            offset="100%"
                            stopColor={c.secondary}
                        />
                    </linearGradient>

                </defs>

                {/* ==============================
            SATELLITE ROOT
        =============================== */}

                <g className={floatCls}>

                    {/* =========================================================
                        LEFT SOLAR PANEL
========================================================= */}

                    <line
                        x1="190"
                        y1="200"
                        x2="88"
                        y2="200"
                        stroke={c.primary}
                        strokeWidth="2"
                    />

                    <g>

                        <rect
                            x="13"
                            y="140"
                            width="75"
                            height="120"
                            fill={`url(#${gradientId(1)})`}
                            stroke={c.stroke}
                            strokeWidth="1.5"
                            rx="2"
                        />

                        {/* Vertical grid */}

                        <line x1="38" y1="140" x2="38" y2="260" stroke={c.stroke} strokeWidth=".8" />
                        <line x1="63" y1="140" x2="63" y2="260" stroke={c.stroke} strokeWidth=".8" />

                        {/* Horizontal grid */}

                        {[164, 188, 212, 236].map(y => (
                            <line
                                key={y}
                                x1="13"
                                y1={y}
                                x2="88"
                                y2={y}
                                stroke={c.stroke}
                                strokeWidth=".8"
                            />
                        ))}

                        {/* Animated shimmer */}

                        <rect
                            className={shimmer}
                            x="13"
                            y="140"
                            width="22"
                            height="120"
                            fill={c.panelHighlight}
                            opacity=".08"
                        />

                        {/* Top highlight */}

                        <rect
                            x="13"
                            y="140"
                            width="75"
                            height="5"
                            fill={c.primary}
                            opacity=".35"
                        />

                    </g>

                    {/* =========================================================
                    RIGHT SOLAR PANEL
========================================================= */}

                    <line
                        x1="310"
                        y1="200"
                        x2="412"
                        y2="200"
                        stroke={c.primary}
                        strokeWidth="2"
                    />

                    <g>

                        <rect
                            x="412"
                            y="140"
                            width="75"
                            height="120"
                            fill={`url(#${gradientId(1)})`}
                            stroke={c.stroke}
                            strokeWidth="1.5"
                            rx="2"
                        />

                        {/* Vertical grid */}

                        <line x1="437" y1="140" x2="437" y2="260" stroke={c.stroke} strokeWidth=".8" />
                        <line x1="462" y1="140" x2="462" y2="260" stroke={c.stroke} strokeWidth=".8" />

                        {/* Horizontal grid */}

                        {[164, 188, 212, 236].map(y => (
                            <line
                                key={`r-${y}`}
                                x1="412"
                                y1={y}
                                x2="487"
                                y2={y}
                                stroke={c.stroke}
                                strokeWidth=".8"
                            />
                        ))}

                        {/* Animated shimmer */}

                        <rect
                            className={shimmer}
                            x="465"
                            y="140"
                            width="22"
                            height="120"
                            fill={c.panelHighlight}
                            opacity=".08"
                        />

                        {/* Top highlight */}

                        <rect
                            x="412"
                            y="140"
                            width="75"
                            height="5"
                            fill={c.primary}
                            opacity=".35"
                        />

                    </g>

                    {/* =========================================================
                    MAIN SATELLITE BODY
========================================================= */}

                    <g>

                        {/* Outer chassis */}

                        <rect
                            x="190"
                            y="148"
                            width="120"
                            height="104"
                            rx="2"
                            fill={`url(#${gradientId(0)})`}
                            stroke={c.stroke}
                            strokeWidth="1.5"
                        />

                        {/* Inner motherboard */}

                        <rect
                            x="199"
                            y="157"
                            width="102"
                            height="86"
                            rx="1"
                            fill="#06213E"
                            stroke={c.stroke}
                            strokeWidth=".75"
                        />

                        {/* Motherboard grid */}

                        {[178, 200, 222].map((y) => (
                            <line
                                key={`h-${y}`}
                                x1="199"
                                y1={y}
                                x2="301"
                                y2={y}
                                stroke={c.stroke}
                                strokeWidth=".5"
                            />
                        ))}

                        {[236, 264].map((x) => (
                            <line
                                key={`v-${x}`}
                                x1={x}
                                y1="157"
                                x2={x}
                                y2="243"
                                stroke={c.stroke}
                                strokeWidth=".5"
                            />
                        ))}

                    </g>

                    {/* =========================================================
                CORNER BRACKETS
========================================================= */}

                    <g stroke={c.primary} strokeWidth="1.5" strokeLinecap="round">

                        <path d="M190 148 L190 162 M190 148 L204 148" />

                        <path d="M310 148 L310 162 M310 148 L296 148" />

                        <path d="M190 252 L190 238 M190 252 L204 252" />

                        <path d="M310 252 L310 238 M310 252 L296 252" />

                    </g>

                    {/* =========================================================
                LEFT CIRCUIT TRACES
========================================================= */}

                    <g
                        stroke={c.primary}
                        strokeWidth=".5"
                        opacity=".55"
                    >

                        <path d="M213 168 L213 178" />

                        <path d="M223 168 L223 173 L233 173" />

                        <circle
                            cx="213"
                            cy="168"
                            r="1.5"
                            fill={c.primary}
                        />

                        <circle
                            cx="233"
                            cy="173"
                            r="1.5"
                            fill={c.primary}
                        />

                        <path d="M213 190 L223 190 L223 200" />

                        <circle
                            cx="213"
                            cy="190"
                            r="1.5"
                            fill={c.primary}
                        />

                    </g>

                    {/* =========================================================
                    STATUS LEDs
========================================================= */}

                    <g>

                        <circle
                            className={led1}
                            cx="289"
                            cy="169"
                            r="2.5"
                            fill={c.led}
                        />

                        <circle
                            className={led2}
                            cx="289"
                            cy="184"
                            r="2.5"
                            fill={c.led}
                        />

                        <circle
                            className={led3}
                            cx="289"
                            cy="199"
                            r="2.5"
                            fill={c.led}
                        />

                        <circle
                            className={led1}
                            cx="289"
                            cy="214"
                            r="2.5"
                            fill={c.led}
                        />

                        <circle
                            className={led2}
                            cx="289"
                            cy="229"
                            r="2.5"
                            fill={c.led}
                        />

                    </g>

                    {/* =========================================================
                LOWER STATUS BAR
========================================================= */}

                    <g>

                        <rect
                            className={led1}
                            x="199"
                            y="234"
                            width="102"
                            height="7"
                            fill={c.primary}
                            opacity=".10"
                        />

                        {[217, 234, 251, 268, 285].map((x, i) => {

                            const cls =
                                i === 0
                                    ? led1
                                    : i === 2
                                        ? led2
                                        : i === 4
                                            ? led3
                                            : ""

                            return (
                                <circle
                                    key={x}
                                    className={cls}
                                    cx={x}
                                    cy="237"
                                    r="1.8"
                                    fill={c.primary}
                                    opacity=".75"
                                />
                            )

                        })}

                    </g>

                    {/* =========================================================
                    ANTENNA MAST
========================================================= */}

                    <g>

                        <line
                            x1="250"
                            y1="148"
                            x2="250"
                            y2="90"
                            stroke={c.stroke}
                            strokeWidth="1.5"
                        />

                        <line
                            x1="238"
                            y1="118"
                            x2="250"
                            y2="103"
                            stroke={c.stroke}
                            strokeWidth="1"
                        />

                        <line
                            x1="262"
                            y1="118"
                            x2="250"
                            y2="103"
                            stroke={c.stroke}
                            strokeWidth="1"
                        />

                    </g>

                    {/* =========================================================
                    SATELLITE DISH
========================================================= */}

                    <g>

                        {/* Outer Dish */}

                        <ellipse
                            cx="250"
                            cy="90"
                            rx="26"
                            ry="9"
                            fill="#06213E"
                            stroke={c.stroke}
                            strokeWidth="1.5"
                        />

                        {/* Middle Ring */}

                        <ellipse
                            cx="250"
                            cy="90"
                            rx="17"
                            ry="6"
                            fill="none"
                            stroke={c.primary}
                            strokeWidth=".75"
                            opacity=".6"
                        />

                        {/* Inner Ring */}

                        <ellipse
                            cx="250"
                            cy="90"
                            rx="9"
                            ry="3.5"
                            fill="none"
                            stroke={c.primary}
                            strokeWidth=".75"
                            opacity=".85"
                        />

                    </g>

                    {/* =========================================================
                    CENTER BEACON
========================================================= */}

                    <circle
                        className={led1}
                        cx="250"
                        cy="90"
                        r="2.5"
                        fill={c.primary}
                    />

                    {/* =========================================================
                  RADIO SIGNAL RINGS
========================================================= */}

                    <g
                        fill="none"
                        stroke={c.signal}
                        strokeWidth="1.2"
                    >

                        <circle
                            className={signal1}
                            cx="250"
                            cy="73"
                            r="3"
                        />

                        <circle
                            className={signal2}
                            cx="250"
                            cy="73"
                            r="3"
                        />

                        <circle
                            className={signal3}
                            cx="250"
                            cy="73"
                            r="3"
                        />

                    </g>

                    {/* =========================================================
                OPTIONAL SOFT GLOW
========================================================= */}

                    <g filter={`url(#${filterId(1)})`}>

                        <circle
                            cx="250"
                            cy="90"
                            r="10"
                            fill={c.glow}
                            opacity=".18"
                        />

                    </g>

                    {/* =========================================================
                BOTTOM COMMUNICATION MODULE
========================================================= */}

                    <g>

                        {/* Main connector */}

                        <rect
                            x="235"
                            y="252"
                            width="30"
                            height="22"
                            rx="2"
                            fill="#06213E"
                            stroke={c.stroke}
                            strokeWidth="1.2"
                        />

                        {/* Neck */}

                        <rect
                            x="245"
                            y="246"
                            width="10"
                            height="8"
                            fill={c.secondary}
                        />

                        {/* Ports */}

                        {[240, 250, 260].map((x) => (
                            <circle
                                key={x}
                                cx={x}
                                cy="263"
                                r="1.8"
                                fill={c.primary}
                            />
                        ))}

                    </g>

                    {/* =========================================================
                    BODY HIGHLIGHT
========================================================= */}

                    <path
                        d="M198 160
     L300 160
     L300 168
     L198 168Z"
                        fill="white"
                        opacity=".05"
                    />

                    {/* =========================================================
                    MAIN BODY GLOW
========================================================= */}

                    <g filter={`url(#${filterId(0)})`}>

                        <ellipse
                            cx="250"
                            cy="200"
                            rx="92"
                            ry="65"
                            fill={c.glow}
                            opacity=".08"
                        />

                    </g>

                    {/* =========================================================
                SMALL DECORATIVE BOLTS
========================================================= */}

                    <g fill={c.primary} opacity=".65">

                        <circle cx="205" cy="163" r="1.2" />
                        <circle cx="295" cy="163" r="1.2" />

                        <circle cx="205" cy="237" r="1.2" />
                        <circle cx="295" cy="237" r="1.2" />

                    </g>

                    {/* =========================================================
                BODY CENTER CHIP
========================================================= */}

                    <rect
                        x="232"
                        y="184"
                        width="36"
                        height="28"
                        rx="2"
                        fill="#081B35"
                        stroke={c.primary}
                        strokeWidth=".8"
                    />

                    {[236, 244, 252, 260].map((x) => (
                        <line
                            key={x}
                            x1={x}
                            y1="184"
                            x2={x}
                            y2="212"
                            stroke={c.primary}
                            strokeWidth=".35"
                            opacity=".5"
                        />
                    ))}

                    {[189, 197, 205].map((y) => (
                        <line
                            key={y}
                            x1="232"
                            y1={y}
                            x2="268"
                            y2={y}
                            stroke={c.primary}
                            strokeWidth=".35"
                            opacity=".5"
                        />
                    ))}

                    {/* =========================================================
                CENTER INDICATOR
========================================================= */}

                    <circle
                        className={led2}
                        cx="250"
                        cy="198"
                        r="3"
                        fill={c.primary}
                    />

                    {/* =========================================================
                    END OF SATELLITE
========================================================= */}

                </g>

            </svg>
        </motion.div>
    )
}