import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";
import type { CSSProperties } from "react";

const DEFAULT_COLOR = "#B48DDF";

type Props = {
  className?: string;
  color?: string;
  animate?: boolean;
  pulseDuration?: number;
  speedLineDuration?: number;
};

type SpeedLine = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
  gradient: number;
};

const SPEED_LINES: SpeedLine[] = [
  { x1: 134.533, y1: 44.0368, x2: 102.251, y2: 75.3407, opacity: 0.52, gradient: 0 },
  { x1: 143.533, y1: 92.0368, x2: 111.251, y2: 123.341, opacity: 0.46, gradient: 1 },
  { x1: 179.533, y1: 83.0368, x2: 147.251, y2: 114.341, opacity: 0.83, gradient: 2 },
  { x1: 71.544, y1: 132.037, x2: 54.2511, y2: 149.33, opacity: 1, gradient: 3 },
  { x1: 117.544, y1: 138.037, x2: 100.251, y2: 155.33, opacity: 1, gradient: 4 },
  { x1: 155.544, y1: 129.037, x2: 138.251, y2: 146.33, opacity: 0.49, gradient: 5 },
  { x1: 159.544, y1: 60.0369, x2: 144.251, y2: 75.3298, opacity: 0.64, gradient: 6 },
  { x1: 96.5668, y1: 54.0365, x2: 67.2507, y2: 85.307, opacity: 0.9, gradient: 7 },
  { x1: 27.5283, y1: 105.037, x2: 5.25094, y2: 126.345, opacity: 0.6, gradient: 8 },
];

const SPEED_LINE_DELAYS = [0.0, 0.4, 0.9, 0.2, 1.1, 0.6, 0.3, 1.4, 0.8];
const SPEED_LINE_DURATIONS = [1.4, 1.0, 1.2, 0.8, 1.6, 1.1, 0.9, 1.3, 1.0];

const BOLT_PATH =
  "M41.3474 117.187L111.951 41.6C115.162 38.1623 120.912 40.6579 120.593 45.3512L117.772 86.9737C117.634 89.0029 118.739 90.9131 120.567 91.8052L153.136 107.702C156.252 109.223 156.912 113.377 154.42 115.788L67.2478 200.149C63.403 203.869 57.1891 199.766 59.1007 194.769L77.8459 145.769C78.7973 143.282 77.6325 140.485 75.1967 139.409L42.9805 125.174C39.8328 123.783 38.9984 119.702 41.3474 117.187Z";

const BOLT_PATH_DETAIL =
  "M42.0551 116.43L111.016 42.6014C114.324 39.0592 120.232 41.8249 119.631 46.6346L114.051 91.2759C113.756 93.6348 115.163 95.8752 117.416 96.6343L151.764 108.208C155.313 109.404 156.336 113.935 153.644 116.539L68.165 199.261C64.2753 203.025 58.0114 198.786 60.0597 193.776L81.4556 141.438C82.5742 138.702 81.0877 135.598 78.2548 134.754L44.2817 124.635C40.7233 123.575 39.5206 119.143 42.0551 116.43Z";

const GRADIENTS = [
  { x1: 101.196, y1: 74.9708, x2: 134.196, y2: 42.9708 },
  { x1: 110.196, y1: 122.971, x2: 143.196, y2: 90.9708 },
  { x1: 146.196, y1: 113.971, x2: 179.196, y2: 81.9708 },
  { x1: 53.1905, y1: 148.976, x2: 71.1905, y2: 130.976 },
  { x1: 99.1905, y1: 154.976, x2: 117.19, y2: 136.976 },
  { x1: 137.19, y1: 145.976, x2: 155.19, y2: 127.976 },
  { x1: 143.19, y1: 74.9762, x2: 159.19, y2: 58.9762 },
  { x1: 66.1792, y1: 84.9878, x2: 96.1792, y2: 52.9878 },
  { x1: 4.19839, y1: 125.968, x2: 27.1984, y2: 103.968 },
];

export default function FastZap({
  className = "w-100",
  color = DEFAULT_COLOR,
  animate = true,
  pulseDuration = 4,
  speedLineDuration = 1,
}: Props) {
  const uid = useId();
  const shouldReduceMotion = useReducedMotion();
  const canAnimate = animate && !shouldReduceMotion;

  const fId = (n: number) => `${uid}f${n}`;
  const gId = (n: number) => `${uid}g${n}`;

  const customStyle = {
    "--fz-color": color,
  } as CSSProperties;

  return (
    <div>
      {canAnimate && (
        <style>{`
          @keyframes fz-speedline {
            0%   { stroke-dashoffset: 1;  opacity: 0; }
            12%  { stroke-dashoffset: 1;  opacity: 0; }
            30%  { stroke-dashoffset: 0;  opacity: var(--fz-max-op, 1); }
            70%  { stroke-dashoffset: 0;  opacity: var(--fz-max-op, 1); }
            100% { stroke-dashoffset: -1; opacity: 0; }
          }
          .${uid}-speedline {
            stroke-dasharray: 1;
            animation-name: fz-speedline;
            animation-timing-function: ease-out;
            animation-iteration-count: infinite;
            animation-delay: var(--fz-delay, 0s);
          }
          @media (prefers-reduced-motion: reduce) {
            .${uid}-speedline {
              animation: none;
            }
          }
        `}</style>
      )}

      <svg
        className={className}
        viewBox="0 0 196 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={customStyle}
      >
        {SPEED_LINES.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={`url(#${gId(line.gradient)})`}
            strokeLinecap="round"
            pathLength="1"
            opacity={line.opacity}
            className={canAnimate ? `${uid}-speedline` : undefined}
            style={
              canAnimate
                ? ({
                    animationDuration: `${SPEED_LINE_DURATIONS[i] * speedLineDuration}s`,
                    "--fz-delay": `${SPEED_LINE_DELAYS[i]}s`,
                    "--fz-max-op": line.opacity,
                  } as CSSProperties)
                : undefined
            }
          />
        ))}

        <motion.g
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          animate={canAnimate ? { scale: [1, 0.9, 1] } : undefined}
          transition={
            canAnimate
              ? {
                  duration: pulseDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        >
          <g filter={`url(#${fId(0)})`}>
            <path d={BOLT_PATH} fill="#BEA2FF" />
          </g>
          <g filter={`url(#${fId(1)})`}>
            <path d={BOLT_PATH} fill="#8450FF" />
          </g>
          <path d={BOLT_PATH_DETAIL} fill="#FFFAFF" stroke={color} />
        </motion.g>

        <defs>
          <filter
            id={fId(0)}
            x="0"
            y="0"
            width="195.944"
            height="241.588"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur" />
          </filter>
          <filter
            id={fId(1)}
            x="36"
            y="36"
            width="123.944"
            height="169.588"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
          </filter>
          {GRADIENTS.map((g, i) => (
            <linearGradient
              key={i}
              id={gId(i)}
              x1={g.x1}
              y1={g.y1}
              x2={g.x2}
              y2={g.y2}
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color={color} />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
}
