import { motion } from "motion/react";
import { useEffect, useState } from "react";

const COLORS = {
  bodyOuter: "#050505",
  bodyInner: "#0E0E0E",
  stroke: "#363636",
  ledFill: "#FF4C85",
  ledStroke: "#FF4C85",
  ledText: "white",
  accent: "white",
  dot: "#D9D9D9",
} as const;

export type ServerStackColors = {
  bodyOuter: string;
  bodyInner: string;
  stroke: string;
  ledFill: string;
  ledStroke: string;
  ledText: string;
  accent: string;
  dot: string;
};

const STACK_COUNT = 3;

type FlickerState = {
  activeStack: number;
  glowOpacity: number;
  stripOpacity: number;
  textOpacity: number;
};

const IDLE_STATE: FlickerState = {
  activeStack: -1,
  glowOpacity: 0.01,
  stripOpacity: 0.14,
  textOpacity: 0.7,
};

function useLedFlicker(stackCount: number, enabled: boolean): FlickerState {
  const [state, setState] = useState<FlickerState>(IDLE_STATE);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const runCycle = () => {
      if (cancelled) return;
      const idx = Math.floor(Math.random() * stackCount);

      // Phase 1: LED turns on solidly for 2-3 seconds
      setState({
        activeStack: idx,
        glowOpacity: 1,
        stripOpacity: 1,
        textOpacity: 1,
      });

      timer = setTimeout(() => {
        if (cancelled) return;

        // Phase 2: Flicker off (rapid on/off pulses)
        const pulses = 4 + Math.floor(Math.random() * 4);
        let pulse = 0;

        const tick = () => {
          if (cancelled) return;
          const on = pulse % 2 === 0;
          setState({
            activeStack: idx,
            glowOpacity: on ? 0.6 + Math.random() * 0.4 : 0.02 + Math.random() * 0.06,
            stripOpacity: on ? 0.85 + Math.random() * 0.15 : 0.08 + Math.random() * 0.08,
            textOpacity: on ? 0.95 : 0.25 + Math.random() * 0.15,
          });
          pulse += 1;
          if (pulse >= pulses * 2) {
            // Phase 3: Turn off completely
            setState(IDLE_STATE);
            timer = setTimeout(runCycle, 500 + Math.random() * 1500);
            return;
          }
          timer = setTimeout(tick, 30 + Math.random() * 80);
        };
        tick();
      }, 2000 + Math.random() * 1000);
    };

    const start = setTimeout(runCycle, 1500);
    return () => {
      cancelled = true;
      clearTimeout(start);
      if (timer) clearTimeout(timer);
    };
  }, [stackCount, enabled]);

  return state;
}

const stackVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + i * 0.2,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const LED_TEXT_PATH = `M258.272 388.039L257.276 388.525L260.156 378.393L261.136 377.914L264.017 385.237L263.021 385.723L260.677 379.519L260.616 379.549L258.272 388.039ZM258.639 384.451L262.653 382.493V383.43L258.639 385.388V384.451ZM265.239 375.914L266.372 375.361L269.038 381.305L269.13 381.26L271.796 372.716L272.929 372.163V380.89L272.041 381.323V374.693L271.964 374.73L269.513 382.556L268.655 382.975L266.204 377.54L266.127 377.577V384.208L265.239 384.641V375.914ZM274.405 372.38V371.443L280.288 368.574V369.511L277.821 370.714V378.504L276.871 378.967V371.177L274.405 372.38ZM288.035 368.69V369.627L284.603 371.301V370.364L288.035 368.69ZM299.002 359.446V368.174L298.082 368.622L293.808 363.854L293.732 363.892V370.744L292.782 371.207V362.48L293.701 362.032L297.991 366.809L298.067 366.771V359.902L299.002 359.446ZM307.521 359.655C307.521 360.575 307.371 361.444 307.073 362.26C306.774 363.076 306.364 363.793 305.843 364.411C305.322 365.028 304.727 365.5 304.058 365.827C303.389 366.153 302.794 366.261 302.274 366.152C301.753 366.042 301.343 365.725 301.044 365.2C300.745 364.675 300.596 363.953 300.596 363.032C300.596 362.112 300.745 361.244 301.044 360.427C301.343 359.611 301.753 358.894 302.274 358.277C302.794 357.659 303.389 357.187 304.058 356.861C304.727 356.534 305.322 356.426 305.843 356.536C306.364 356.645 306.774 356.962 307.073 357.487C307.371 358.012 307.521 358.734 307.521 359.655ZM306.602 360.103C306.602 359.348 306.488 358.765 306.261 358.356C306.036 357.946 305.731 357.701 305.345 357.622C304.962 357.542 304.533 357.618 304.058 357.849C303.583 358.081 303.153 358.424 302.768 358.879C302.385 359.333 302.08 359.876 301.852 360.506C301.628 361.136 301.515 361.828 301.515 362.584C301.515 363.34 301.628 363.923 301.852 364.333C302.08 364.742 302.385 364.987 302.768 365.067C303.153 365.146 303.583 365.07 304.058 364.838C304.533 364.606 304.962 364.264 305.345 363.81C305.731 363.355 306.036 362.812 306.261 362.183C306.488 361.552 306.602 360.859 306.602 360.103ZM313.408 354.602C313.362 354.192 313.175 353.948 312.848 353.869C312.522 353.79 312.121 353.866 311.646 354.098C311.299 354.267 310.995 354.478 310.734 354.73C310.476 354.98 310.275 355.251 310.129 355.54C309.986 355.829 309.915 356.112 309.915 356.391C309.915 356.624 309.964 356.8 310.064 356.919C310.166 357.034 310.296 357.108 310.455 357.142C310.613 357.172 310.779 357.181 310.953 357.167C311.126 357.151 311.286 357.128 311.431 357.1L312.228 356.95C312.432 356.91 312.659 356.882 312.91 356.865C313.162 356.846 313.404 356.872 313.634 356.942C313.866 357.008 314.057 357.144 314.208 357.352C314.359 357.56 314.434 357.868 314.434 358.277C314.434 358.749 314.323 359.229 314.101 359.718C313.881 360.206 313.56 360.666 313.136 361.097C312.714 361.527 312.202 361.889 311.6 362.182C311.038 362.456 310.552 362.593 310.141 362.592C309.732 362.589 309.41 362.465 309.175 362.219C308.943 361.971 308.812 361.616 308.781 361.154L309.761 360.676C309.787 360.993 309.886 361.217 310.06 361.348C310.236 361.475 310.458 361.526 310.727 361.5C310.997 361.471 311.288 361.38 311.6 361.228C311.962 361.051 312.288 360.827 312.576 360.556C312.865 360.281 313.094 359.985 313.262 359.667C313.431 359.346 313.515 359.027 313.515 358.709C313.515 358.419 313.442 358.219 313.297 358.108C313.151 357.997 312.96 357.943 312.722 357.945C312.485 357.947 312.228 357.973 311.952 358.022L310.987 358.186C310.374 358.289 309.889 358.246 309.532 358.056C309.174 357.867 308.995 357.478 308.995 356.89C308.995 356.402 309.114 355.918 309.352 355.438C309.592 354.955 309.913 354.514 310.317 354.115C310.723 353.713 311.176 353.389 311.676 353.145C312.182 352.899 312.631 352.78 313.025 352.79C313.418 352.797 313.729 352.918 313.959 353.152C314.192 353.386 314.314 353.719 314.327 354.154L313.408 354.602ZM319.565 357.027C319.376 357.12 319.214 357.123 319.079 357.039C318.944 356.954 318.876 356.807 318.876 356.597C318.876 356.386 318.944 356.173 319.079 355.956C319.214 355.74 319.376 355.586 319.565 355.493C319.754 355.401 319.917 355.397 320.052 355.482C320.187 355.567 320.255 355.714 320.255 355.924C320.255 356.063 320.223 356.207 320.159 356.354C320.098 356.501 320.015 356.635 319.91 356.757C319.808 356.875 319.693 356.965 319.565 357.027ZM319.565 352.613C319.376 352.705 319.214 352.709 319.079 352.624C318.944 352.54 318.876 352.392 318.876 352.182C318.876 351.972 318.944 351.758 319.079 351.542C319.214 351.325 319.376 351.171 319.565 351.079C319.754 350.986 319.917 350.983 320.052 351.067C320.187 351.152 320.255 351.299 320.255 351.509C320.255 351.649 320.223 351.792 320.159 351.94C320.098 352.086 320.015 352.22 319.91 352.342C319.808 352.46 319.693 352.55 319.565 352.613ZM325.569 354.099C325.38 354.191 325.218 354.195 325.083 354.111C324.947 354.026 324.88 353.879 324.88 353.669C324.88 353.458 324.947 353.245 325.083 353.028C325.218 352.812 325.38 352.657 325.569 352.565C325.758 352.473 325.92 352.469 326.056 352.554C326.191 352.638 326.259 352.786 326.259 352.996C326.259 353.135 326.227 353.279 326.163 353.426C326.101 353.573 326.019 353.707 325.914 353.829C325.812 353.947 325.697 354.037 325.569 354.099ZM325.569 349.685C325.38 349.777 325.218 349.78 325.083 349.696C324.947 349.611 324.88 349.464 324.88 349.254C324.88 349.044 324.947 348.83 325.083 348.614C325.218 348.397 325.38 348.243 325.569 348.15C325.758 348.058 325.92 348.054 326.056 348.139C326.191 348.224 326.259 348.371 326.259 348.581C326.259 348.72 326.227 348.864 326.163 349.011C326.101 349.158 326.019 349.292 325.914 349.414C325.812 349.532 325.697 349.622 325.569 349.685ZM330.899 352.616V351.849L333.488 347.433C333.792 346.916 334.042 346.473 334.239 346.104C334.435 345.732 334.581 345.403 334.675 345.115C334.772 344.824 334.821 344.544 334.821 344.277C334.821 343.971 334.754 343.737 334.622 343.578C334.491 343.417 334.313 343.331 334.085 343.319C333.858 343.308 333.603 343.371 333.319 343.51C333.018 343.657 332.755 343.854 332.53 344.103C332.308 344.348 332.136 344.624 332.013 344.931C331.893 345.236 331.833 345.555 331.833 345.888L330.929 346.329C330.929 345.817 331.035 345.317 331.247 344.827C331.459 344.337 331.748 343.895 332.113 343.501C332.481 343.106 332.893 342.797 333.35 342.574C333.81 342.35 334.217 342.259 334.572 342.302C334.927 342.345 335.205 342.5 335.407 342.769C335.608 343.037 335.709 343.395 335.709 343.844C335.709 344.165 335.657 344.504 335.552 344.862C335.45 345.216 335.271 345.643 335.016 346.142C334.763 346.638 334.412 347.264 333.963 348.02L332.201 350.976V351.044L335.847 349.265V350.203L330.899 352.616ZM339.987 348.303C339.41 348.584 338.919 348.649 338.513 348.498C338.107 348.344 337.797 347.985 337.582 347.422C337.368 346.856 337.26 346.099 337.26 345.15C337.26 344.207 337.368 343.349 337.582 342.577C337.799 341.8 338.111 341.137 338.517 340.587C338.925 340.033 339.416 339.616 339.987 339.337C340.559 339.058 341.048 338.997 341.454 339.154C341.863 339.307 342.174 339.667 342.389 340.232C342.606 340.794 342.715 341.547 342.715 342.49C342.715 343.439 342.607 344.301 342.393 345.076C342.178 345.848 341.868 346.509 341.462 347.059C341.056 347.607 340.565 348.021 339.987 348.303ZM339.987 347.365C340.559 347.086 341.004 346.563 341.32 345.795C341.637 345.027 341.795 344.074 341.795 342.938C341.795 342.182 341.723 341.574 341.577 341.114C341.434 340.653 341.227 340.349 340.956 340.202C340.688 340.055 340.365 340.073 339.987 340.257C339.421 340.534 338.978 341.061 338.658 341.839C338.339 342.614 338.18 343.568 338.18 344.702C338.18 345.457 338.251 346.064 338.394 346.523C338.537 346.982 338.743 347.283 339.011 347.428C339.281 347.572 339.607 347.551 339.987 347.365ZM344.17 346.144V345.377L346.759 340.96C347.063 340.443 347.313 340 347.51 339.631C347.706 339.26 347.852 338.93 347.946 338.643C348.043 338.351 348.092 338.072 348.092 337.805C348.092 337.498 348.026 337.264 347.893 337.105C347.763 336.944 347.584 336.858 347.357 336.846C347.129 336.835 346.874 336.899 346.591 337.037C346.289 337.184 346.026 337.382 345.802 337.63C345.579 337.875 345.407 338.151 345.284 338.458C345.164 338.764 345.104 339.083 345.104 339.415L344.201 339.856C344.201 339.345 344.307 338.844 344.518 338.354C344.73 337.865 345.019 337.423 345.384 337.029C345.752 336.633 346.164 336.324 346.621 336.101C347.081 335.877 347.488 335.787 347.843 335.829C348.198 335.872 348.476 336.028 348.678 336.296C348.88 336.564 348.981 336.922 348.981 337.371C348.981 337.692 348.928 338.032 348.823 338.389C348.721 338.743 348.543 339.17 348.287 339.669C348.034 340.165 347.683 340.791 347.234 341.547L345.472 344.503V344.571L349.118 342.793V343.73L344.17 346.144ZM353.305 341.808C352.983 341.959 352.661 342.048 352.34 342.074C352.018 342.1 351.724 342.023 351.459 341.843C351.193 341.66 350.98 341.342 350.819 340.889C350.658 340.434 350.578 339.802 350.578 338.996C350.578 338.223 350.643 337.506 350.773 336.846C350.903 336.183 351.092 335.587 351.34 335.057C351.588 334.524 351.886 334.066 352.236 333.682C352.588 333.298 352.986 332.997 353.427 332.782C353.866 332.568 354.257 332.475 354.599 332.504C354.944 332.529 355.225 332.662 355.442 332.903C355.659 333.144 355.799 333.474 355.863 333.895L354.929 334.351C354.842 334.001 354.673 333.758 354.423 333.621C354.173 333.485 353.841 333.518 353.427 333.719C352.82 334.016 352.341 334.543 351.991 335.302C351.644 336.059 351.469 336.97 351.466 338.034L351.528 338.004C351.671 337.693 351.84 337.404 352.037 337.138C352.236 336.867 352.456 336.626 352.696 336.416C352.936 336.205 353.19 336.034 353.458 335.903C353.907 335.684 354.318 335.609 354.691 335.677C355.064 335.742 355.363 335.939 355.587 336.267C355.812 336.592 355.924 337.035 355.924 337.598C355.924 338.138 355.816 338.685 355.599 339.24C355.382 339.792 355.077 340.296 354.684 340.752C354.293 341.203 353.833 341.555 353.305 341.808ZM353.305 340.87C353.626 340.713 353.915 340.483 354.17 340.179C354.428 339.875 354.631 339.536 354.779 339.162C354.93 338.788 355.005 338.416 355.005 338.046C355.005 337.686 354.932 337.393 354.787 337.168C354.644 336.94 354.446 336.799 354.193 336.746C353.943 336.692 353.657 336.744 353.335 336.901C353.093 337.019 352.867 337.183 352.657 337.393C352.448 337.6 352.264 337.835 352.106 338.097C351.95 338.357 351.828 338.629 351.738 338.911C351.649 339.19 351.604 339.461 351.604 339.722C351.604 340.069 351.677 340.357 351.822 340.587C351.971 340.816 352.172 340.961 352.428 341.021C352.686 341.08 352.978 341.029 353.305 340.87Z`;

function LedText({
  translateY = 0,
  opacity,
  color,
}: {
  translateY?: number;
  opacity: number;
  color: string;
}) {
  const path = (
    <motion.path
      animate={{ opacity }}
      d={LED_TEXT_PATH}
      fill={color}
    />
  );
  if (translateY === 0) return path;
  return <g transform={`translate(0, ${translateY})`}>{path}</g>;
}

export default function ServerStack({
  className = "h-100",
  colors,
  flicker: flickerEnabled = true,
}: {
  className?: string;
  colors?: Partial<ServerStackColors>;
  flicker?: boolean;
}) {
  const c: ServerStackColors = { ...COLORS, ...colors };
  const flicker = useLedFlicker(STACK_COUNT, flickerEnabled);

  const ledOpacity = (i: number) => (flicker.activeStack === i ? flicker.glowOpacity : IDLE_STATE.glowOpacity);
  const stripOpacity = (i: number) => (flicker.activeStack === i ? flicker.stripOpacity : IDLE_STATE.stripOpacity);
  const textOpacity = (i: number) => (flicker.activeStack === i ? flicker.textOpacity : IDLE_STATE.textOpacity);

  return (
    <div className="relative">
      {/* 30 X 30 logo */}
      <div className="absolute top-20 left-45 rotate-x-40 w-32 h-32">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <svg
        className={className}
        viewBox="0 0 406 418"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Stack 1 (bottom) */}
        <motion.g custom={2} variants={stackVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <path
            d="M25.7236 308.434L174.224 381.434H231.224L379.224 308.434L380.224 341.934L231.224 415.934H174.224L25.7236 341.934V308.434Z"
            fill={c.bodyOuter}
            stroke={c.stroke}
          />
          <path d="M174.224 415.934V381.934H231.224V415.934H174.224Z" stroke={c.stroke} />
          <path
            d="M379.724 307.934L231.724 381.434H173.724L24.7236 307.934V277.434L173.724 202.434H231.724L379.724 277.434V307.934Z"
            fill={c.bodyInner}
            stroke={c.stroke}
          />
          <g opacity="0.3">
            <path d="M153.223 318.434L100.223 344.934" stroke={c.stroke} />
            <path d="M101.723 237.934L151.723 263.934" stroke={c.stroke} />
            <path d="M306.723 239.934L256.723 265.934" stroke={c.stroke} />
            <path d="M253.724 320.934L303.724 346.934" stroke={c.stroke} />
            <rect
              x="0.882813"
              y="0.0154096"
              width="115.848"
              height="117.022"
              transform="matrix(0.891007 -0.45399 0.87462 0.48481 99.8055 290.391)"
              stroke={c.stroke}
            />
            <path d="M187.134 343.208L197.588 349.004L208.539 343.424" stroke={c.accent} />
            <path d="M294.821 288.339L305.276 294.134L295.237 299.249" stroke={c.accent} />
            <path d="M191.52 242.728L202.471 237.148L212.054 242.461" stroke={c.accent} />
            <path d="M104.822 286.903L94.7836 292.018L101.753 295.881L104.367 297.33" stroke={c.accent} />
            <rect
              width="2.04848"
              height="1.99224"
              transform="matrix(0.891007 -0.45399 0.87462 0.48481 252.96 266.106)"
              fill={c.dot}
            />
            <rect
              width="2.04848"
              height="1.99224"
              transform="matrix(0.891007 -0.45399 0.87462 0.48481 145.274 320.976)"
              fill={c.dot}
            />
            <rect
              width="2.04848"
              height="1.99224"
              transform="matrix(0.891007 -0.45399 0.87462 0.48481 248.736 322.016)"
              fill={c.dot}
            />
            <rect
              width="2.04848"
              height="1.99224"
              transform="matrix(0.891007 -0.45399 0.87462 0.48481 145.931 265.03)"
              fill={c.dot}
            />
          </g>
          <motion.g
            animate={{ opacity: ledOpacity(0) }}
            filter="url(#filter0_f_2068_56)"
          >
            <path d="M36.2236 333.434V325.434L162.224 388.434V396.434L36.2236 333.434Z" fill={c.ledFill} />
            <path d="M36.2236 333.434V325.434L162.224 388.434V396.434L36.2236 333.434Z" stroke={c.ledStroke} />
          </motion.g>
          <motion.path
            animate={{ opacity: stripOpacity(0) }}
            d="M36.2236 333.434V325.434L162.224 388.434V396.434L36.2236 333.434Z"
            fill={c.ledFill}
            stroke={c.ledStroke}
          />
          <LedText opacity={textOpacity(0)} color={c.ledText} />
        </motion.g>

        {/* Stack 2 (middle) */}
        <motion.g custom={1} variants={stackVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <g filter="url(#filter1_d_2068_56)">
            <path
              d="M25.7236 213.434L174.224 286.434H231.224L379.224 213.434L380.224 246.934L231.224 320.934H174.224L25.7236 246.934V213.434Z"
              fill={c.bodyOuter}
              stroke={c.stroke}
            />
            <path d="M174.224 320.934V286.934H231.224V320.934H174.224Z" stroke={c.stroke} />
            <path
              d="M379.724 212.934L231.724 286.434H173.724L24.7236 212.934V182.434L173.724 107.434H231.724L379.724 182.434V212.934Z"
              fill={c.bodyInner}
              stroke={c.stroke}
            />
            <g opacity="0.3">
              <path d="M153.223 223.434L100.223 249.934" stroke={c.stroke} />
              <path d="M101.723 142.934L151.723 168.934" stroke={c.stroke} />
              <path d="M306.723 144.934L256.723 170.934" stroke={c.stroke} />
              <path d="M253.724 225.934L303.724 251.934" stroke={c.stroke} />
              <rect
                x="0.882813"
                y="0.0154096"
                width="115.848"
                height="117.022"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 99.8055 195.391)"
                stroke={c.stroke}
              />
              <path d="M183.722 249.616L194.464 255.57L205.728 249.831" stroke={c.accent} />
              <path d="M294.484 193.18L305.226 199.134L294.9 204.395" stroke={c.accent} />
              <path d="M188.331 146.321L199.595 140.582L209.442 146.04" stroke={c.accent} />
              <path d="M99.1588 191.757L88.8336 197.018L95.9949 200.988L98.6805 202.476" stroke={c.accent} />
              <rect
                width="2.10696"
                height="2.047"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 251.471 170.336)"
                fill={c.dot}
              />
              <rect
                width="2.10696"
                height="2.047"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 140.71 226.772)"
                fill={c.dot}
              />
              <rect
                width="2.10696"
                height="2.047"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 247.072 227.812)"
                fill={c.dot}
              />
              <rect
                width="2.10696"
                height="2.047"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 141.442 169.26)"
                fill={c.dot}
              />
            </g>
            <motion.g
              animate={{ opacity: ledOpacity(1) }}
              filter="url(#filter2_f_2068_56)"
            >
              <path d="M36.2236 238.434V230.434L162.224 293.434V301.434L36.2236 238.434Z" fill={c.ledFill} />
              <path d="M36.2236 238.434V230.434L162.224 293.434V301.434L36.2236 238.434Z" stroke={c.ledStroke} />
            </motion.g>
            <motion.path
              animate={{ opacity: stripOpacity(1) }}
              d="M36.2236 238.434V230.434L162.224 293.434V301.434L36.2236 238.434Z"
              fill={c.ledFill}
              stroke={c.ledStroke}
            />
            <LedText translateY={-92} opacity={textOpacity(1)} color={c.ledText} />
          </g>
        </motion.g>

        {/* Stack 3 (top) */}
        <motion.g custom={0} variants={stackVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <g filter="url(#filter3_d_2068_56)">
            <path
              d="M25.3618 123.967L173.862 196.967H230.862L378.862 123.967L379.862 157.467L230.862 231.467H173.862L25.3618 157.467V123.967Z"
              fill={c.bodyOuter}
              stroke={c.stroke}
            />
            <path d="M173.862 231.467V197.467H230.862V231.467H173.862Z" stroke={c.stroke} />
            <path
              d="M379.362 123.467L231.362 196.967H173.362L24.3618 123.467V92.9669L173.362 17.9669H231.362L379.362 92.9669V123.467Z"
              fill={c.bodyInner}
              stroke={c.stroke}
            />
            <g opacity="0.52">
              <path d="M152.861 133.967L99.861 160.467" stroke={c.stroke} />
              <path d="M101.361 53.4671L151.361 79.4671" stroke={c.stroke} />
              <path d="M306.361 55.4669L256.361 81.4669" stroke={c.stroke} />
              <path d="M253.362 136.467L303.362 162.467" stroke={c.stroke} />
              <rect
                x="0.882813"
                y="0.0154096"
                width="115.848"
                height="117.022"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 99.4437 105.924)"
                stroke={c.stroke}
              />
              <path d="M192.27 156.092L202.592 161.814L213.004 156.509" stroke={c.accent} />
              <path d="M294.647 103.929L304.97 109.651L295.426 114.513" stroke={c.accent} />
              <path d="M193.055 58.6907L203.466 53.3859L212.928 58.6309" stroke={c.accent} />
              <path d="M110.632 100.687L101.089 105.55L107.97 109.364L110.551 110.795" stroke={c.accent} />
              <rect
                width="1.94747"
                height="1.96703"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 253.35 81.9603)"
                fill={c.dot}
              />
              <rect
                width="1.94747"
                height="1.96703"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 150.973 134.124)"
                fill={c.dot}
              />
              <rect
                width="1.94747"
                height="1.96703"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 251.186 136.139)"
                fill={c.dot}
              />
              <rect
                width="1.94747"
                height="1.96703"
                transform="matrix(0.891007 -0.45399 0.87462 0.48481 149.682 79.8752)"
                fill={c.dot}
              />
            </g>
            <motion.g
              animate={{ opacity: ledOpacity(2) }}
              filter="url(#filter4_f_2068_56)"
            >
              <path d="M35.8618 148.967V140.967L161.862 203.967V211.967L35.8618 148.967Z" fill={c.ledFill} />
              <path d="M35.8618 148.967V140.967L161.862 203.967V211.967L35.8618 148.967Z" stroke={c.ledStroke} />
            </motion.g>
            <motion.path
              animate={{ opacity: stripOpacity(2) }}
              d="M35.8618 148.967V140.967L161.862 203.967V211.967L35.8618 148.967Z"
              fill={c.ledFill}
              stroke={c.ledStroke}
            />
            <LedText translateY={-181} opacity={textOpacity(2)} color={c.ledText} />
          </g>
        </motion.g>

        <defs>
          <filter
            id="filter0_f_2068_56"
            x="15.7236"
            y="304.625"
            width="167"
            height="112.618"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2068_56" />
          </filter>
          <filter
            id="filter1_d_2068_56"
            x="24.2236"
            y="106.934"
            width="356.509"
            height="251.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="37" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2068_56" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2068_56" result="shape" />
          </filter>
          <filter
            id="filter2_f_2068_56"
            x="15.7236"
            y="209.625"
            width="167"
            height="112.618"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2068_56" />
          </filter>
          <filter
            id="filter3_d_2068_56"
            x="23.8618"
            y="17.4669"
            width="356.509"
            height="251.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="37" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2068_56" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2068_56" result="shape" />
          </filter>
          <filter
            id="filter4_f_2068_56"
            x="15.3618"
            y="120.158"
            width="167"
            height="112.618"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2068_56" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
