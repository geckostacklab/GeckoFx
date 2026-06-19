import { motion } from "motion/react"

export default function GpuCluster({
  className = "w-200"
}: {
  className?: string
}) {
  return (
    <div className="relative">

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: "all" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center ">
        <img src="/favicon.svg" alt="icon" className="w-20" />
      </motion.div>

      <svg
        className={className}
        viewBox="0 0 1160 1161"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <style>{`
          @keyframes gpuSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes gpuBreathe { 0%, 100% { opacity: 0.55; } 50% { opacity: 1; } }
          @keyframes gpuPulse { 0%, 100% { opacity: 0.75; transform: scale(0.92); } 50% { opacity: 1; transform: scale(1.08); } }
          @keyframes gpuCorePulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
          .gpu-fan { transform-box: fill-box; transform-origin: center; animation: gpuSpin 9s linear infinite; will-change: transform; }
          .gpu-fan-slow { animation-duration: 13s; }
          .gpu-fan-fast { animation-duration: 6.5s; }
          .gpu-fan-rev { animation-direction: reverse; }
          .gpu-breathe { animation: gpuBreathe 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .gpu-pulse { animation: gpuPulse 3.2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .gpu-core { animation: gpuCorePulse 2.6s ease-in-out infinite; }
        `}</style>
        <g filter="url(#filter0_f_2011_441)" className="gpu-breathe">
          <ellipse cx="580" cy="580.5" rx="280" ry="280.5" fill="#5691FF" fill-opacity="0.76" />
        </g>
        <g filter="url(#filter1_f_2011_441)" className="gpu-pulse">
          <circle cx="573" cy="570" r="110" fill="#BCD1FF" />
        </g>
        <g filter="url(#filter2_f_2011_441)">
          <rect x="538" y="406" width="6" height="328" fill="#A9C7FF" />
          <rect x="570" y="406" width="6" height="328" fill="#A9C7FF" />
          <rect x="602" y="406" width="6" height="328" fill="#A9C7FF" />
        </g>
        <rect x="538" y="406" width="6" height="328" fill="#A9C7FF" />
        <rect x="570" y="406" width="6" height="328" fill="#A9C7FF" />
        <rect x="602" y="406" width="6" height="328" fill="#A9C7FF" />
        <g filter="url(#filter3_f_2011_441)">
          <rect x="737" y="535" width="6" height="328" transform="rotate(90 737 535)" fill="#A9C7FF" />
          <rect x="737" y="567" width="6" height="328" transform="rotate(90 737 567)" fill="#A9C7FF" />
          <rect x="737" y="599" width="6" height="328" transform="rotate(90 737 599)" fill="#A9C7FF" />
        </g>
        <rect x="737" y="535" width="6" height="328" transform="rotate(90 737 535)" fill="#A9C7FF" />
        <rect x="737" y="567" width="6" height="328" transform="rotate(90 737 567)" fill="#A9C7FF" />
        <rect x="737" y="599" width="6" height="328" transform="rotate(90 737 599)" fill="#A9C7FF" />
        <g filter="url(#filter4_f_2011_441)">
          <rect x="737" y="268" width="6" height="328" transform="rotate(90 737 268)" fill="#A9C7FF" />
          <rect x="737" y="300" width="6" height="328" transform="rotate(90 737 300)" fill="#A9C7FF" />
          <rect x="737" y="332" width="6" height="328" transform="rotate(90 737 332)" fill="#A9C7FF" />
        </g>
        <rect x="737" y="268" width="6" height="328" transform="rotate(90 737 268)" fill="#A9C7FF" />
        <rect x="737" y="300" width="6" height="328" transform="rotate(90 737 300)" fill="#A9C7FF" />
        <rect x="737" y="332" width="6" height="328" transform="rotate(90 737 332)" fill="#A9C7FF" />
        <g filter="url(#filter5_f_2011_441)">
          <rect x="737" y="804" width="6" height="328" transform="rotate(90 737 804)" fill="#A9C7FF" />
          <rect x="737" y="836" width="6" height="328" transform="rotate(90 737 836)" fill="#A9C7FF" />
          <rect x="737" y="868" width="6" height="328" transform="rotate(90 737 868)" fill="#A9C7FF" />
        </g>
        <rect x="737" y="804" width="6" height="328" transform="rotate(90 737 804)" fill="#A9C7FF" />
        <rect x="737" y="836" width="6" height="328" transform="rotate(90 737 836)" fill="#A9C7FF" />
        <rect x="737" y="868" width="6" height="328" transform="rotate(90 737 868)" fill="#A9C7FF" />
        <g filter="url(#filter6_f_2011_441)">
          <rect x="877" y="737" width="6" height="328" transform="rotate(180 877 737)" fill="#A9C7FF" />
          <rect x="845" y="737" width="6" height="328" transform="rotate(180 845 737)" fill="#A9C7FF" />
          <rect x="813" y="737" width="6" height="328" transform="rotate(180 813 737)" fill="#A9C7FF" />
        </g>
        <rect x="877" y="737" width="6" height="328" transform="rotate(180 877 737)" fill="#A9C7FF" />
        <rect x="845" y="737" width="6" height="328" transform="rotate(180 845 737)" fill="#A9C7FF" />
        <rect x="813" y="737" width="6" height="328" transform="rotate(180 813 737)" fill="#A9C7FF" />
        <g filter="url(#filter7_f_2011_441)">
          <rect x="338" y="737" width="6" height="328" transform="rotate(180 338 737)" fill="#A9C7FF" />
          <rect x="306" y="737" width="6" height="328" transform="rotate(180 306 737)" fill="#A9C7FF" />
          <rect x="274" y="737" width="6" height="328" transform="rotate(180 274 737)" fill="#A9C7FF" />
        </g>
        <rect x="338" y="737" width="6" height="328" transform="rotate(180 338 737)" fill="#A9C7FF" />
        <rect x="306" y="737" width="6" height="328" transform="rotate(180 306 737)" fill="#A9C7FF" />
        <rect x="274" y="737" width="6" height="328" transform="rotate(180 274 737)" fill="#A9C7FF" />
        <g filter="url(#filter8_f_2011_441)">
          <rect x="303" y="501" width="95" height="131" fill="#72A3FF" />
        </g>
        <foreignObject x="93" y="360" width="420" height="420">
          <div
            style={{
              backdropFilter: 'blur(50px)',
              clipPath: 'url(#bgblur_0_2011_441_clip_path)',
              height: '100%',
              width: '100%',
            }}
          >
          </div>
        </foreignObject><g data-figma-bg-blur-radius="100">
          <rect x="193" y="460" width="220" height="220" rx="21" fill="white" fill-opacity="0.06" />
          <rect x="194" y="461" width="218" height="218" rx="20" stroke="url(#paint0_linear_2011_441)" stroke-opacity="0.15" stroke-width="2" />
        </g>
        <rect x="208.5" y="475.5" width="189" height="189" rx="15.5" fill="#1B2434" fill-opacity="0.92" stroke="#2F374F" />
        <path d="M379 631.08V508.454L364.807 494H240.735L227 508.454V633.411L240.735 646H364.807L379 631.08Z" fill="#1E2638" fill-opacity="0.07" stroke="#2F374F" />
        <circle cx="303" cy="570" r="75.5" stroke="#404A67" stroke-opacity="0.35" />
        <circle cx="303" cy="570" r="69" fill="#131A2A" />
        <circle cx="303" cy="570" r="68" stroke="#404A67" stroke-opacity="0.55" stroke-width="2" />
        <path d="M302.5 515C333.16 515 358 539.633 358 570C358 600.367 333.16 625 302.5 625C271.84 625 247 600.367 247 570C247 539.633 271.84 515 302.5 515Z" stroke="#2F374F" stroke-opacity="0.34" stroke-width="2" />
        <g className="gpu-fan">
        <g filter="url(#filter10_d_2011_441)">
          <path d="M310.5 606.5L303 576.5L312.5 569L339.5 576.5C346 581.833 357.5 594.6 351.5 603C345.5 611.4 330 621.167 323 625C321.167 625.333 316.9 625.8 314.5 625C312.1 624.2 310.833 621 310.5 619.5V606.5Z" fill="url(#paint1_linear_2011_441)" />
          <path d="M310.5 606.5L303 576.5L312.5 569L339.5 576.5C346 581.833 357.5 594.6 351.5 603C345.5 611.4 330 621.167 323 625C321.167 625.333 316.9 625.8 314.5 625C312.1 624.2 310.833 621 310.5 619.5V606.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter11_d_2011_441)">
          <path d="M340.5 561.681L310.5 569.181L303 559.681L310.5 532.681C315.833 526.181 328.6 514.681 337 520.681C345.4 526.681 355.167 542.181 359 549.181C359.333 551.014 359.8 555.281 359 557.681C358.2 560.081 355 561.347 353.5 561.681H340.5Z" fill="url(#paint2_linear_2011_441)" />
          <path d="M340.5 561.681L310.5 569.181L303 559.681L310.5 532.681C315.833 526.181 328.6 514.681 337 520.681C345.4 526.681 355.167 542.181 359 549.181C359.333 551.014 359.8 555.281 359 557.681C358.2 560.081 355 561.347 353.5 561.681H340.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter12_d_2011_441)">
          <path d="M295.681 531.942L303.181 561.942L293.681 569.442L266.681 561.942C260.181 556.608 248.681 543.842 254.681 535.442C260.681 527.042 276.181 517.275 283.181 513.442C285.014 513.108 289.281 512.642 291.681 513.442C294.081 514.242 295.347 517.442 295.681 518.942V531.942Z" fill="url(#paint3_linear_2011_441)" />
          <path d="M295.681 531.942L303.181 561.942L293.681 569.442L266.681 561.942C260.181 556.608 248.681 543.842 254.681 535.442C260.681 527.042 276.181 517.275 283.181 513.442C285.014 513.108 289.281 512.642 291.681 513.442C294.081 514.242 295.347 517.442 295.681 518.942V531.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter13_d_2011_441)">
          <path d="M264.942 576.5L294.942 569L302.442 578.5L294.942 605.5C289.608 612 276.842 623.5 268.442 617.5C260.042 611.5 250.275 596 246.442 589C246.108 587.167 245.642 582.9 246.442 580.5C247.242 578.1 250.442 576.833 251.942 576.5H264.942Z" fill="url(#paint4_linear_2011_441)" />
          <path d="M264.942 576.5L294.942 569L302.442 578.5L294.942 605.5C289.608 612 276.842 623.5 268.442 617.5C260.042 611.5 250.275 596 246.442 589C246.108 587.167 245.642 582.9 246.442 580.5C247.242 578.1 250.442 576.833 251.942 576.5H264.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter14_d_2011_441)">
          <circle cx="303" cy="569" r="12" fill="#20293F" />
          <circle cx="303" cy="569" r="11.5" stroke="#2F374F" />
        </g>
        </g>
        <g filter="url(#filter15_f_2011_441)">
          <rect x="504" y="467" width="137" height="197" fill="#72A3FF" />
        </g>
        <foreignObject x="363" y="360" width="420" height="420">
          <div
            style={{
              backdropFilter: 'blur(50px)',
              clipPath: 'url(#bgblur_1_2011_441_clip_path)',
              height: '100%',
              width: '100%',
            }}
          >
          </div>
        </foreignObject><g data-figma-bg-blur-radius="100">
          <rect x="463" y="460" width="220" height="220" rx="21" fill="white" fill-opacity="0.06" />
          <rect x="464" y="461" width="218" height="218" rx="20" stroke="url(#paint5_linear_2011_441)" stroke-opacity="0.15" stroke-width="2" />
        </g>
        <rect x="478.5" y="475.5" width="189" height="189" rx="15.5" fill="#1B2434" fill-opacity="0.92" stroke="#2F374F" />
        <g filter="url(#filter17_f_2011_441)">
          <rect x="478" y="734" width="190" height="67" fill="#72A3FF" />
        </g>
        <foreignObject x="363" y="627" width="420" height="420">
          <div
            style={{
              backdropFilter: 'blur(50px)',
              clipPath: 'url(#bgblur_2_2011_441_clip_path)',
              height: '100%',
              width: '100%',
            }}
          >
          </div>
        </foreignObject><g data-figma-bg-blur-radius="100">
          <rect x="463" y="727" width="220" height="220" rx="21" fill="white" fill-opacity="0.06" />
          <rect x="464" y="728" width="218" height="218" rx="20" stroke="url(#paint6_linear_2011_441)" stroke-opacity="0.15" stroke-width="2" />
        </g>
        <rect x="478.5" y="742.5" width="189" height="189" rx="15.5" fill="#1B2434" fill-opacity="0.92" stroke="#2F374F" />
        <path d="M649 898.08V775.454L634.807 761H510.735L497 775.454V900.411L510.735 913H634.807L649 898.08Z" fill="#1E2638" fill-opacity="0.07" stroke="#2F374F" />
        <circle cx="573" cy="837" r="75.5" stroke="#404A67" stroke-opacity="0.35" />
        <circle cx="573" cy="837" r="69" fill="#131A2A" />
        <circle cx="573" cy="837" r="68" stroke="#404A67" stroke-opacity="0.55" stroke-width="2" />
        <path d="M572.5 782C603.16 782 628 806.633 628 837C628 867.367 603.16 892 572.5 892C541.84 892 517 867.367 517 837C517 806.633 541.84 782 572.5 782Z" stroke="#2F374F" stroke-opacity="0.34" stroke-width="2" />
        <g className="gpu-fan gpu-fan-rev">
        <g filter="url(#filter19_d_2011_441)">
          <path d="M580.5 873.5L573 843.5L582.5 836L609.5 843.5C616 848.833 627.5 861.6 621.5 870C615.5 878.4 600 888.167 593 892C591.167 892.333 586.9 892.8 584.5 892C582.1 891.2 580.833 888 580.5 886.5V873.5Z" fill="url(#paint7_linear_2011_441)" />
          <path d="M580.5 873.5L573 843.5L582.5 836L609.5 843.5C616 848.833 627.5 861.6 621.5 870C615.5 878.4 600 888.167 593 892C591.167 892.333 586.9 892.8 584.5 892C582.1 891.2 580.833 888 580.5 886.5V873.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter20_d_2011_441)">
          <path d="M610.5 828.681L580.5 836.181L573 826.681L580.5 799.681C585.833 793.181 598.6 781.681 607 787.681C615.4 793.681 625.167 809.181 629 816.181C629.333 818.014 629.8 822.281 629 824.681C628.2 827.081 625 828.347 623.5 828.681H610.5Z" fill="url(#paint8_linear_2011_441)" />
          <path d="M610.5 828.681L580.5 836.181L573 826.681L580.5 799.681C585.833 793.181 598.6 781.681 607 787.681C615.4 793.681 625.167 809.181 629 816.181C629.333 818.014 629.8 822.281 629 824.681C628.2 827.081 625 828.347 623.5 828.681H610.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter21_d_2011_441)">
          <path d="M565.681 798.942L573.181 828.942L563.681 836.442L536.681 828.942C530.181 823.608 518.681 810.842 524.681 802.442C530.681 794.042 546.181 784.275 553.181 780.442C555.014 780.108 559.281 779.642 561.681 780.442C564.081 781.242 565.347 784.442 565.681 785.942V798.942Z" fill="url(#paint9_linear_2011_441)" />
          <path d="M565.681 798.942L573.181 828.942L563.681 836.442L536.681 828.942C530.181 823.608 518.681 810.842 524.681 802.442C530.681 794.042 546.181 784.275 553.181 780.442C555.014 780.108 559.281 779.642 561.681 780.442C564.081 781.242 565.347 784.442 565.681 785.942V798.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter22_d_2011_441)">
          <path d="M534.942 843.5L564.942 836L572.442 845.5L564.942 872.5C559.608 879 546.842 890.5 538.442 884.5C530.042 878.5 520.275 863 516.442 856C516.108 854.167 515.642 849.9 516.442 847.5C517.242 845.1 520.442 843.833 521.942 843.5H534.942Z" fill="url(#paint10_linear_2011_441)" />
          <path d="M534.942 843.5L564.942 836L572.442 845.5L564.942 872.5C559.608 879 546.842 890.5 538.442 884.5C530.042 878.5 520.275 863 516.442 856C516.108 854.167 515.642 849.9 516.442 847.5C517.242 845.1 520.442 843.833 521.942 843.5H534.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter23_d_2011_441)">
          <circle cx="573" cy="836" r="12" fill="#20293F" />
          <circle cx="573" cy="836" r="11.5" stroke="#2F374F" />
        </g>
        </g>
        <g filter="url(#filter24_f_2011_441)">
          <rect width="190" height="67" transform="matrix(1 0 0 -1 478 406)" fill="#72A3FF" />
        </g>
        <foreignObject x="363" y="93" width="420" height="420">
          <div
            style={{
              backdropFilter: 'blur(50px)',
              clipPath: 'url(#bgblur_3_2011_441_clip_path)',
              height: '100%',
              width: '100%',
            }}
          >
          </div>
        </foreignObject><g data-figma-bg-blur-radius="100">
          <rect width="220" height="220" rx="21" transform="matrix(1 0 0 -1 463 413)" fill="white" fill-opacity="0.06" />
          <rect x="1" y="-1" width="218" height="218" rx="20" transform="matrix(1 0 0 -1 463 411)" stroke="url(#paint11_linear_2011_441)" stroke-opacity="0.15" stroke-width="2" />
        </g>
        <rect x="0.5" y="-0.5" width="189" height="189" rx="15.5" transform="matrix(1 0 0 -1 478 397)" fill="#1B2434" fill-opacity="0.92" stroke="#2F374F" />
        <path d="M649 241.92V364.546L634.807 379H510.735L497 364.546V239.589L510.735 227H634.807L649 241.92Z" fill="#1E2638" fill-opacity="0.07" stroke="#2F374F" />
        <circle cx="76" cy="76" r="75.5" transform="matrix(1 0 0 -1 497 379)" stroke="#404A67" stroke-opacity="0.35" />
        <circle cx="69" cy="69" r="69" transform="matrix(1 0 0 -1 504 372)" fill="#131A2A" />
        <circle cx="69" cy="69" r="68" transform="matrix(1 0 0 -1 504 372)" stroke="#404A67" stroke-opacity="0.55" stroke-width="2" />
        <path d="M572.5 358C603.16 358 628 333.367 628 303C628 272.633 603.16 248 572.5 248C541.84 248 517 272.633 517 303C517 333.367 541.84 358 572.5 358Z" stroke="#2F374F" stroke-opacity="0.34" stroke-width="2" />
        <g className="gpu-fan">
        <g filter="url(#filter26_d_2011_441)">
          <path d="M580.5 266.5L573 296.5L582.5 304L609.5 296.5C616 291.167 627.5 278.4 621.5 270C615.5 261.6 600 251.833 593 248C591.167 247.667 586.9 247.2 584.5 248C582.1 248.8 580.833 252 580.5 253.5V266.5Z" fill="url(#paint12_linear_2011_441)" />
          <path d="M580.5 266.5L573 296.5L582.5 304L609.5 296.5C616 291.167 627.5 278.4 621.5 270C615.5 261.6 600 251.833 593 248C591.167 247.667 586.9 247.2 584.5 248C582.1 248.8 580.833 252 580.5 253.5V266.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter27_d_2011_441)">
          <path d="M610.5 311.319L580.5 303.819L573 313.319L580.5 340.319C585.833 346.819 598.6 358.319 607 352.319C615.4 346.319 625.167 330.819 629 323.819C629.333 321.986 629.8 317.719 629 315.319C628.2 312.919 625 311.653 623.5 311.319H610.5Z" fill="url(#paint13_linear_2011_441)" />
          <path d="M610.5 311.319L580.5 303.819L573 313.319L580.5 340.319C585.833 346.819 598.6 358.319 607 352.319C615.4 346.319 625.167 330.819 629 323.819C629.333 321.986 629.8 317.719 629 315.319C628.2 312.919 625 311.653 623.5 311.319H610.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter28_d_2011_441)">
          <path d="M565.681 341.058L573.181 311.058L563.681 303.558L536.681 311.058C530.181 316.392 518.681 329.158 524.681 337.558C530.681 345.958 546.181 355.725 553.181 359.558C555.014 359.892 559.281 360.358 561.681 359.558C564.081 358.758 565.347 355.558 565.681 354.058V341.058Z" fill="url(#paint14_linear_2011_441)" />
          <path d="M565.681 341.058L573.181 311.058L563.681 303.558L536.681 311.058C530.181 316.392 518.681 329.158 524.681 337.558C530.681 345.958 546.181 355.725 553.181 359.558C555.014 359.892 559.281 360.358 561.681 359.558C564.081 358.758 565.347 355.558 565.681 354.058V341.058Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter29_d_2011_441)">
          <path d="M534.942 296.5L564.942 304L572.442 294.5L564.942 267.5C559.608 261 546.842 249.5 538.442 255.5C530.042 261.5 520.275 277 516.442 284C516.108 285.833 515.642 290.1 516.442 292.5C517.242 294.9 520.442 296.167 521.942 296.5H534.942Z" fill="url(#paint15_linear_2011_441)" />
          <path d="M534.942 296.5L564.942 304L572.442 294.5L564.942 267.5C559.608 261 546.842 249.5 538.442 255.5C530.042 261.5 520.275 277 516.442 284C516.108 285.833 515.642 290.1 516.442 292.5C517.242 294.9 520.442 296.167 521.942 296.5H534.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter30_d_2011_441)">
          <circle cx="12" cy="12" r="12" transform="matrix(1 0 0 -1 561 316)" fill="#20293F" />
          <circle cx="12" cy="12" r="11.5" transform="matrix(1 0 0 -1 561 316)" stroke="#2F374F" />
        </g>
        </g>
        <g filter="url(#filter31_f_2011_441)">
          <rect x="749" y="734" width="151" height="75" fill="#72A3FF" />
        </g>
        <foreignObject x="633" y="627" width="420" height="420">
          <div
            style={{
              backdropFilter: 'blur(50px)',
              clipPath: 'url(#bgblur_4_2011_441_clip_path)',
              height: '100%',
              width: '100%',
            }}
          >
          </div>
        </foreignObject><g data-figma-bg-blur-radius="100">
          <rect x="733" y="727" width="220" height="220" rx="21" fill="white" fill-opacity="0.06" />
          <rect x="734" y="728" width="218" height="218" rx="20" stroke="url(#paint16_linear_2011_441)" stroke-opacity="0.15" stroke-width="2" />
        </g>
        <rect x="748.5" y="742.5" width="189" height="189" rx="15.5" fill="#1B2434" fill-opacity="0.92" stroke="#2F374F" />
        <path d="M919 898.08V775.454L904.807 761H780.735L767 775.454V900.411L780.735 913H904.807L919 898.08Z" fill="#1E2638" fill-opacity="0.07" stroke="#2F374F" />
        <circle cx="843" cy="837" r="75.5" stroke="#404A67" stroke-opacity="0.35" />
        <circle cx="843" cy="837" r="69" fill="#131A2A" />
        <circle cx="843" cy="837" r="68" stroke="#404A67" stroke-opacity="0.55" stroke-width="2" />
        <path d="M842.5 782C873.16 782 898 806.633 898 837C898 867.367 873.16 892 842.5 892C811.84 892 787 867.367 787 837C787 806.633 811.84 782 842.5 782Z" stroke="#2F374F" stroke-opacity="0.34" stroke-width="2" />
        <g className="gpu-fan gpu-fan-slow">
        <g filter="url(#filter33_d_2011_441)">
          <path d="M850.5 873.5L843 843.5L852.5 836L879.5 843.5C886 848.833 897.5 861.6 891.5 870C885.5 878.4 870 888.167 863 892C861.167 892.333 856.9 892.8 854.5 892C852.1 891.2 850.833 888 850.5 886.5V873.5Z" fill="url(#paint17_linear_2011_441)" />
          <path d="M850.5 873.5L843 843.5L852.5 836L879.5 843.5C886 848.833 897.5 861.6 891.5 870C885.5 878.4 870 888.167 863 892C861.167 892.333 856.9 892.8 854.5 892C852.1 891.2 850.833 888 850.5 886.5V873.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter34_d_2011_441)">
          <path d="M880.5 828.681L850.5 836.181L843 826.681L850.5 799.681C855.833 793.181 868.6 781.681 877 787.681C885.4 793.681 895.167 809.181 899 816.181C899.333 818.014 899.8 822.281 899 824.681C898.2 827.081 895 828.347 893.5 828.681H880.5Z" fill="url(#paint18_linear_2011_441)" />
          <path d="M880.5 828.681L850.5 836.181L843 826.681L850.5 799.681C855.833 793.181 868.6 781.681 877 787.681C885.4 793.681 895.167 809.181 899 816.181C899.333 818.014 899.8 822.281 899 824.681C898.2 827.081 895 828.347 893.5 828.681H880.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter35_d_2011_441)">
          <path d="M835.681 798.942L843.181 828.942L833.681 836.442L806.681 828.942C800.181 823.608 788.681 810.842 794.681 802.442C800.681 794.042 816.181 784.275 823.181 780.442C825.014 780.108 829.281 779.642 831.681 780.442C834.081 781.242 835.347 784.442 835.681 785.942V798.942Z" fill="url(#paint19_linear_2011_441)" />
          <path d="M835.681 798.942L843.181 828.942L833.681 836.442L806.681 828.942C800.181 823.608 788.681 810.842 794.681 802.442C800.681 794.042 816.181 784.275 823.181 780.442C825.014 780.108 829.281 779.642 831.681 780.442C834.081 781.242 835.347 784.442 835.681 785.942V798.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter36_d_2011_441)">
          <path d="M804.942 843.5L834.942 836L842.442 845.5L834.942 872.5C829.608 879 816.842 890.5 808.442 884.5C800.042 878.5 790.275 863 786.442 856C786.108 854.167 785.642 849.9 786.442 847.5C787.242 845.1 790.442 843.833 791.942 843.5H804.942Z" fill="url(#paint20_linear_2011_441)" />
          <path d="M804.942 843.5L834.942 836L842.442 845.5L834.942 872.5C829.608 879 816.842 890.5 808.442 884.5C800.042 878.5 790.275 863 786.442 856C786.108 854.167 785.642 849.9 786.442 847.5C787.242 845.1 790.442 843.833 791.942 843.5H804.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter37_d_2011_441)">
          <circle cx="843" cy="836" r="12" fill="#20293F" />
          <circle cx="843" cy="836" r="11.5" stroke="#2F374F" />
        </g>
        </g>
        <g filter="url(#filter38_f_2011_441)">
          <rect width="151" height="75" transform="matrix(1 0 0 -1 749 406)" fill="#72A3FF" />
        </g>
        <foreignObject x="633" y="93" width="420" height="420">
          <div
            style={{
              backdropFilter: 'blur(50px)',
              clipPath: 'url(#bgblur_5_2011_441_clip_path)',
              height: '100%',
              width: '100%',
            }}
          >
          </div>
        </foreignObject><g data-figma-bg-blur-radius="100">
          <rect width="220" height="220" rx="21" transform="matrix(1 0 0 -1 733 413)" fill="white" fill-opacity="0.06" />
          <rect x="1" y="-1" width="218" height="218" rx="20" transform="matrix(1 0 0 -1 733 411)" stroke="url(#paint21_linear_2011_441)" stroke-opacity="0.15" stroke-width="2" />
        </g>
        <rect x="0.5" y="-0.5" width="189" height="189" rx="15.5" transform="matrix(1 0 0 -1 748 397)" fill="#1B2434" fill-opacity="0.92" stroke="#2F374F" />
        <path d="M919 241.92V364.546L904.807 379H780.735L767 364.546V239.589L780.735 227H904.807L919 241.92Z" fill="#1E2638" fill-opacity="0.07" stroke="#2F374F" />
        <circle cx="76" cy="76" r="75.5" transform="matrix(1 0 0 -1 767 379)" stroke="#404A67" stroke-opacity="0.35" />
        <circle cx="69" cy="69" r="69" transform="matrix(1 0 0 -1 774 372)" fill="#131A2A" />
        <circle cx="69" cy="69" r="68" transform="matrix(1 0 0 -1 774 372)" stroke="#404A67" stroke-opacity="0.55" stroke-width="2" />
        <path d="M842.5 358C873.16 358 898 333.367 898 303C898 272.633 873.16 248 842.5 248C811.84 248 787 272.633 787 303C787 333.367 811.84 358 842.5 358Z" stroke="#2F374F" stroke-opacity="0.34" stroke-width="2" />
        <g className="gpu-fan gpu-fan-rev">
        <g filter="url(#filter40_d_2011_441)">
          <path d="M850.5 266.5L843 296.5L852.5 304L879.5 296.5C886 291.167 897.5 278.4 891.5 270C885.5 261.6 870 251.833 863 248C861.167 247.667 856.9 247.2 854.5 248C852.1 248.8 850.833 252 850.5 253.5V266.5Z" fill="url(#paint22_linear_2011_441)" />
          <path d="M850.5 266.5L843 296.5L852.5 304L879.5 296.5C886 291.167 897.5 278.4 891.5 270C885.5 261.6 870 251.833 863 248C861.167 247.667 856.9 247.2 854.5 248C852.1 248.8 850.833 252 850.5 253.5V266.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter41_d_2011_441)">
          <path d="M880.5 311.319L850.5 303.819L843 313.319L850.5 340.319C855.833 346.819 868.6 358.319 877 352.319C885.4 346.319 895.167 330.819 899 323.819C899.333 321.986 899.8 317.719 899 315.319C898.2 312.919 895 311.653 893.5 311.319H880.5Z" fill="url(#paint23_linear_2011_441)" />
          <path d="M880.5 311.319L850.5 303.819L843 313.319L850.5 340.319C855.833 346.819 868.6 358.319 877 352.319C885.4 346.319 895.167 330.819 899 323.819C899.333 321.986 899.8 317.719 899 315.319C898.2 312.919 895 311.653 893.5 311.319H880.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter42_d_2011_441)">
          <path d="M835.681 341.058L843.181 311.058L833.681 303.558L806.681 311.058C800.181 316.392 788.681 329.158 794.681 337.558C800.681 345.958 816.181 355.725 823.181 359.558C825.014 359.892 829.281 360.358 831.681 359.558C834.081 358.758 835.347 355.558 835.681 354.058V341.058Z" fill="url(#paint24_linear_2011_441)" />
          <path d="M835.681 341.058L843.181 311.058L833.681 303.558L806.681 311.058C800.181 316.392 788.681 329.158 794.681 337.558C800.681 345.958 816.181 355.725 823.181 359.558C825.014 359.892 829.281 360.358 831.681 359.558C834.081 358.758 835.347 355.558 835.681 354.058V341.058Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter43_d_2011_441)">
          <path d="M804.942 296.5L834.942 304L842.442 294.5L834.942 267.5C829.608 261 816.842 249.5 808.442 255.5C800.042 261.5 790.275 277 786.442 284C786.108 285.833 785.642 290.1 786.442 292.5C787.242 294.9 790.442 296.167 791.942 296.5H804.942Z" fill="url(#paint25_linear_2011_441)" />
          <path d="M804.942 296.5L834.942 304L842.442 294.5L834.942 267.5C829.608 261 816.842 249.5 808.442 255.5C800.042 261.5 790.275 277 786.442 284C786.108 285.833 785.642 290.1 786.442 292.5C787.242 294.9 790.442 296.167 791.942 296.5H804.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter44_d_2011_441)">
          <circle cx="12" cy="12" r="12" transform="matrix(1 0 0 -1 831 316)" fill="#20293F" />
          <circle cx="12" cy="12" r="11.5" transform="matrix(1 0 0 -1 831 316)" stroke="#2F374F" />
        </g>
        </g>
        <g filter="url(#filter45_f_2011_441)">
          <rect x="816" y="496" width="126" height="76" transform="rotate(90 816 496)" fill="#72A3FF" />
        </g>
        <foreignObject x="633" y="360" width="420" height="420">
          <div
            style={{
              backdropFilter: 'blur(50px)',
              clipPath: 'url(#bgblur_6_2011_441_clip_path)',
              height: '100%',
              width: '100%',
            }}
          >
          </div>
        </foreignObject><g data-figma-bg-blur-radius="100">
          <rect x="733" y="460" width="220" height="220" rx="21" fill="white" fill-opacity="0.06" />
          <rect x="734" y="461" width="218" height="218" rx="20" stroke="url(#paint26_linear_2011_441)" stroke-opacity="0.15" stroke-width="2" />
        </g>
        <rect x="748.5" y="475.5" width="189" height="189" rx="15.5" fill="#1B2434" fill-opacity="0.92" stroke="#2F374F" />
        <path d="M919 631.08V508.454L904.807 494H780.735L767 508.454V633.411L780.735 646H904.807L919 631.08Z" fill="#1E2638" fill-opacity="0.07" stroke="#2F374F" />
        <circle cx="843" cy="570" r="75.5" stroke="#404A67" stroke-opacity="0.35" />
        <circle cx="843" cy="570" r="69" fill="#131A2A" />
        <circle cx="843" cy="570" r="68" stroke="#404A67" stroke-opacity="0.55" stroke-width="2" />
        <path d="M842.5 515C873.16 515 898 539.633 898 570C898 600.367 873.16 625 842.5 625C811.84 625 787 600.367 787 570C787 539.633 811.84 515 842.5 515Z" stroke="#2F374F" stroke-opacity="0.34" stroke-width="2" />
        <g className="gpu-fan gpu-fan-slow gpu-fan-rev">
        <g filter="url(#filter47_d_2011_441)">
          <path d="M850.5 606.5L843 576.5L852.5 569L879.5 576.5C886 581.833 897.5 594.6 891.5 603C885.5 611.4 870 621.167 863 625C861.167 625.333 856.9 625.8 854.5 625C852.1 624.2 850.833 621 850.5 619.5V606.5Z" fill="url(#paint27_linear_2011_441)" />
          <path d="M850.5 606.5L843 576.5L852.5 569L879.5 576.5C886 581.833 897.5 594.6 891.5 603C885.5 611.4 870 621.167 863 625C861.167 625.333 856.9 625.8 854.5 625C852.1 624.2 850.833 621 850.5 619.5V606.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter48_d_2011_441)">
          <path d="M880.5 561.681L850.5 569.181L843 559.681L850.5 532.681C855.833 526.181 868.6 514.681 877 520.681C885.4 526.681 895.167 542.181 899 549.181C899.333 551.014 899.8 555.281 899 557.681C898.2 560.081 895 561.347 893.5 561.681H880.5Z" fill="url(#paint28_linear_2011_441)" />
          <path d="M880.5 561.681L850.5 569.181L843 559.681L850.5 532.681C855.833 526.181 868.6 514.681 877 520.681C885.4 526.681 895.167 542.181 899 549.181C899.333 551.014 899.8 555.281 899 557.681C898.2 560.081 895 561.347 893.5 561.681H880.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter49_d_2011_441)">
          <path d="M835.681 531.942L843.181 561.942L833.681 569.442L806.681 561.942C800.181 556.608 788.681 543.842 794.681 535.442C800.681 527.042 816.181 517.275 823.181 513.442C825.014 513.108 829.281 512.642 831.681 513.442C834.081 514.242 835.347 517.442 835.681 518.942V531.942Z" fill="url(#paint29_linear_2011_441)" />
          <path d="M835.681 531.942L843.181 561.942L833.681 569.442L806.681 561.942C800.181 556.608 788.681 543.842 794.681 535.442C800.681 527.042 816.181 517.275 823.181 513.442C825.014 513.108 829.281 512.642 831.681 513.442C834.081 514.242 835.347 517.442 835.681 518.942V531.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter50_d_2011_441)">
          <path d="M804.942 576.5L834.942 569L842.442 578.5L834.942 605.5C829.608 612 816.842 623.5 808.442 617.5C800.042 611.5 790.275 596 786.442 589C786.108 587.167 785.642 582.9 786.442 580.5C787.242 578.1 790.442 576.833 791.942 576.5H804.942Z" fill="url(#paint30_linear_2011_441)" />
          <path d="M804.942 576.5L834.942 569L842.442 578.5L834.942 605.5C829.608 612 816.842 623.5 808.442 617.5C800.042 611.5 790.275 596 786.442 589C786.108 587.167 785.642 582.9 786.442 580.5C787.242 578.1 790.442 576.833 791.942 576.5H804.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter51_d_2011_441)">
          <circle cx="843" cy="569" r="12" fill="#20293F" />
          <circle cx="843" cy="569" r="11.5" stroke="#2F374F" />
        </g>
        </g>
        <g filter="url(#filter52_f_2011_441)">
          <rect x="253" y="734" width="151" height="83" fill="#72A3FF" />
        </g>
        <foreignObject x="93" y="627" width="420" height="420">
          <div
            style={{
              backdropFilter: 'blur(50px)',
              clipPath: 'url(#bgblur_7_2011_441_clip_path)',
              height: '100%',
              width: '100%',
            }}
          >
          </div>
        </foreignObject><g data-figma-bg-blur-radius="100">
          <rect x="193" y="727" width="220" height="220" rx="21" fill="white" fill-opacity="0.06" />
          <rect x="194" y="728" width="218" height="218" rx="20" stroke="url(#paint31_linear_2011_441)" stroke-opacity="0.15" stroke-width="2" />
        </g>
        <rect x="208.5" y="742.5" width="189" height="189" rx="15.5" fill="#1B2434" fill-opacity="0.92" stroke="#2F374F" />
        <path d="M379 898.08V775.454L364.807 761H240.735L227 775.454V900.411L240.735 913H364.807L379 898.08Z" fill="#1E2638" fill-opacity="0.07" stroke="#2F374F" />
        <circle cx="303" cy="837" r="75.5" stroke="#404A67" stroke-opacity="0.35" />
        <circle cx="303" cy="837" r="69" fill="#131A2A" />
        <circle cx="303" cy="837" r="68" stroke="#404A67" stroke-opacity="0.55" stroke-width="2" />
        <path d="M302.5 782C333.16 782 358 806.633 358 837C358 867.367 333.16 892 302.5 892C271.84 892 247 867.367 247 837C247 806.633 271.84 782 302.5 782Z" stroke="#2F374F" stroke-opacity="0.34" stroke-width="2" />
        <g className="gpu-fan gpu-fan-fast">
        <g filter="url(#filter54_d_2011_441)">
          <path d="M310.5 873.5L303 843.5L312.5 836L339.5 843.5C346 848.833 357.5 861.6 351.5 870C345.5 878.4 330 888.167 323 892C321.167 892.333 316.9 892.8 314.5 892C312.1 891.2 310.833 888 310.5 886.5V873.5Z" fill="url(#paint32_linear_2011_441)" />
          <path d="M310.5 873.5L303 843.5L312.5 836L339.5 843.5C346 848.833 357.5 861.6 351.5 870C345.5 878.4 330 888.167 323 892C321.167 892.333 316.9 892.8 314.5 892C312.1 891.2 310.833 888 310.5 886.5V873.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter55_d_2011_441)">
          <path d="M340.5 828.681L310.5 836.181L303 826.681L310.5 799.681C315.833 793.181 328.6 781.681 337 787.681C345.4 793.681 355.167 809.181 359 816.181C359.333 818.014 359.8 822.281 359 824.681C358.2 827.081 355 828.347 353.5 828.681H340.5Z" fill="url(#paint33_linear_2011_441)" />
          <path d="M340.5 828.681L310.5 836.181L303 826.681L310.5 799.681C315.833 793.181 328.6 781.681 337 787.681C345.4 793.681 355.167 809.181 359 816.181C359.333 818.014 359.8 822.281 359 824.681C358.2 827.081 355 828.347 353.5 828.681H340.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter56_d_2011_441)">
          <path d="M295.681 798.942L303.181 828.942L293.681 836.442L266.681 828.942C260.181 823.608 248.681 810.842 254.681 802.442C260.681 794.042 276.181 784.275 283.181 780.442C285.014 780.108 289.281 779.642 291.681 780.442C294.081 781.242 295.347 784.442 295.681 785.942V798.942Z" fill="url(#paint34_linear_2011_441)" />
          <path d="M295.681 798.942L303.181 828.942L293.681 836.442L266.681 828.942C260.181 823.608 248.681 810.842 254.681 802.442C260.681 794.042 276.181 784.275 283.181 780.442C285.014 780.108 289.281 779.642 291.681 780.442C294.081 781.242 295.347 784.442 295.681 785.942V798.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter57_d_2011_441)">
          <path d="M264.942 843.5L294.942 836L302.442 845.5L294.942 872.5C289.608 879 276.842 890.5 268.442 884.5C260.042 878.5 250.275 863 246.442 856C246.108 854.167 245.642 849.9 246.442 847.5C247.242 845.1 250.442 843.833 251.942 843.5H264.942Z" fill="url(#paint35_linear_2011_441)" />
          <path d="M264.942 843.5L294.942 836L302.442 845.5L294.942 872.5C289.608 879 276.842 890.5 268.442 884.5C260.042 878.5 250.275 863 246.442 856C246.108 854.167 245.642 849.9 246.442 847.5C247.242 845.1 250.442 843.833 251.942 843.5H264.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter58_d_2011_441)">
          <circle cx="303" cy="836" r="12" fill="#20293F" />
          <circle cx="303" cy="836" r="11.5" stroke="#2F374F" />
        </g>
        </g>
        <g filter="url(#filter59_f_2011_441)">
          <rect width="151" height="83" transform="matrix(1 0 0 -1 253 406)" fill="#72A3FF" />
        </g>
        <foreignObject x="93" y="93" width="420" height="420">
          <div
            style={{
              backdropFilter: 'blur(50px)',
              clipPath: 'url(#bgblur_8_2011_441_clip_path)',
              height: '100%',
              width: '100%',
            }}
          >
          </div>
        </foreignObject><g data-figma-bg-blur-radius="100">
          <rect width="220" height="220" rx="21" transform="matrix(1 0 0 -1 193 413)" fill="white" fill-opacity="0.06" />
          <rect x="1" y="-1" width="218" height="218" rx="20" transform="matrix(1 0 0 -1 193 411)" stroke="url(#paint36_linear_2011_441)" stroke-opacity="0.15" stroke-width="2" />
        </g>
        <rect x="0.5" y="-0.5" width="189" height="189" rx="15.5" transform="matrix(1 0 0 -1 208 397)" fill="#131A2A" stroke="#2F374F" />
        <path d="M379 241.92V364.546L364.807 379H240.735L227 364.546V239.589L240.735 227H364.807L379 241.92Z" fill="#1E2638" fill-opacity="0.07" stroke="#2F374F" />
        <circle cx="76" cy="76" r="75.5" transform="matrix(1 0 0 -1 227 379)" stroke="#404A67" stroke-opacity="0.35" />
        <circle cx="69" cy="69" r="69" transform="matrix(1 0 0 -1 234 372)" fill="#131A2A" />
        <circle cx="69" cy="69" r="68" transform="matrix(1 0 0 -1 234 372)" stroke="#404A67" stroke-opacity="0.55" stroke-width="2" />
        <path d="M302.5 358C333.16 358 358 333.367 358 303C358 272.633 333.16 248 302.5 248C271.84 248 247 272.633 247 303C247 333.367 271.84 358 302.5 358Z" stroke="#2F374F" stroke-opacity="0.34" stroke-width="2" />
        <g className="gpu-fan gpu-fan-slow">
        <g filter="url(#filter61_d_2011_441)">
          <path d="M310.5 266.5L303 296.5L312.5 304L339.5 296.5C346 291.167 357.5 278.4 351.5 270C345.5 261.6 330 251.833 323 248C321.167 247.667 316.9 247.2 314.5 248C312.1 248.8 310.833 252 310.5 253.5V266.5Z" fill="url(#paint37_linear_2011_441)" />
          <path d="M310.5 266.5L303 296.5L312.5 304L339.5 296.5C346 291.167 357.5 278.4 351.5 270C345.5 261.6 330 251.833 323 248C321.167 247.667 316.9 247.2 314.5 248C312.1 248.8 310.833 252 310.5 253.5V266.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter62_d_2011_441)">
          <path d="M340.5 311.319L310.5 303.819L303 313.319L310.5 340.319C315.833 346.819 328.6 358.319 337 352.319C345.4 346.319 355.167 330.819 359 323.819C359.333 321.986 359.8 317.719 359 315.319C358.2 312.919 355 311.653 353.5 311.319H340.5Z" fill="url(#paint38_linear_2011_441)" />
          <path d="M340.5 311.319L310.5 303.819L303 313.319L310.5 340.319C315.833 346.819 328.6 358.319 337 352.319C345.4 346.319 355.167 330.819 359 323.819C359.333 321.986 359.8 317.719 359 315.319C358.2 312.919 355 311.653 353.5 311.319H340.5Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter63_d_2011_441)">
          <path d="M295.681 341.058L303.181 311.058L293.681 303.558L266.681 311.058C260.181 316.392 248.681 329.158 254.681 337.558C260.681 345.958 276.181 355.725 283.181 359.558C285.014 359.892 289.281 360.358 291.681 359.558C294.081 358.758 295.347 355.558 295.681 354.058V341.058Z" fill="url(#paint39_linear_2011_441)" />
          <path d="M295.681 341.058L303.181 311.058L293.681 303.558L266.681 311.058C260.181 316.392 248.681 329.158 254.681 337.558C260.681 345.958 276.181 355.725 283.181 359.558C285.014 359.892 289.281 360.358 291.681 359.558C294.081 358.758 295.347 355.558 295.681 354.058V341.058Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter64_d_2011_441)">
          <path d="M264.942 296.5L294.942 304L302.442 294.5L294.942 267.5C289.608 261 276.842 249.5 268.442 255.5C260.042 261.5 250.275 277 246.442 284C246.108 285.833 245.642 290.1 246.442 292.5C247.242 294.9 250.442 296.167 251.942 296.5H264.942Z" fill="url(#paint40_linear_2011_441)" />
          <path d="M264.942 296.5L294.942 304L302.442 294.5L294.942 267.5C289.608 261 276.842 249.5 268.442 255.5C260.042 261.5 250.275 277 246.442 284C246.108 285.833 245.642 290.1 246.442 292.5C247.242 294.9 250.442 296.167 251.942 296.5H264.942Z" stroke="#404A67" />
        </g>
        <g filter="url(#filter65_d_2011_441)">
          <circle cx="12" cy="12" r="12" transform="matrix(1 0 0 -1 291 316)" fill="#20293F" />
          <circle cx="12" cy="12" r="11.5" transform="matrix(1 0 0 -1 291 316)" stroke="#2F374F" />
        </g>
        </g>
        <defs>
          <filter id="filter0_f_2011_441" x="0" y="0" width="1160" height="1161" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <filter id="filter1_f_2011_441" x="363" y="360" width="420" height="420" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <filter id="filter2_f_2011_441" x="533" y="401" width="80" height="338" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <filter id="filter3_f_2011_441" x="404" y="530" width="338" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <filter id="filter4_f_2011_441" x="404" y="263" width="338" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <filter id="filter5_f_2011_441" x="404" y="799" width="338" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <filter id="filter6_f_2011_441" x="802" y="404" width="80" height="338" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <filter id="filter7_f_2011_441" x="263" y="404" width="80" height="338" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <filter id="filter8_f_2011_441" x="296" y="494" width="109" height="145" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <clipPath id="bgblur_0_2011_441_clip_path" transform="translate(-93 -360)"><rect x="193" y="460" width="220" height="220" rx="21" />
          </clipPath><filter id="filter10_d_2011_441" x="302.437" y="568.45" width="51.245" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter11_d_2011_441" x="302.45" y="518.499" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter12_d_2011_441" x="252.499" y="512.5" width="51.245" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter13_d_2011_441" x="245.5" y="568.437" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter14_d_2011_441" x="291" y="557" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter15_f_2011_441" x="497" y="460" width="151" height="211" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <clipPath id="bgblur_1_2011_441_clip_path" transform="translate(-363 -360)"><rect x="463" y="460" width="220" height="220" rx="21" />
          </clipPath><filter id="filter17_f_2011_441" x="471" y="727" width="204" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <clipPath id="bgblur_2_2011_441_clip_path" transform="translate(-363 -627)"><rect x="463" y="727" width="220" height="220" rx="21" />
          </clipPath><filter id="filter19_d_2011_441" x="572.437" y="835.45" width="51.245" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter20_d_2011_441" x="572.45" y="785.499" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter21_d_2011_441" x="522.499" y="779.5" width="51.245" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter22_d_2011_441" x="515.5" y="835.437" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter23_d_2011_441" x="561" y="824" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter24_f_2011_441" x="471" y="332" width="204" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <clipPath id="bgblur_3_2011_441_clip_path" transform="translate(-363 -93)"><rect width="220" height="220" rx="21" transform="matrix(1 0 0 -1 463 413)" />
          </clipPath><filter id="filter26_d_2011_441" x="572.437" y="247.058" width="51.245" height="59.4914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter27_d_2011_441" x="572.45" y="303.256" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter28_d_2011_441" x="522.499" y="303.009" width="51.245" height="59.4914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter29_d_2011_441" x="515.5" y="253.318" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter30_d_2011_441" x="561" y="292" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter31_f_2011_441" x="742" y="727" width="165" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <clipPath id="bgblur_4_2011_441_clip_path" transform="translate(-633 -627)"><rect x="733" y="727" width="220" height="220" rx="21" />
          </clipPath><filter id="filter33_d_2011_441" x="842.437" y="835.45" width="51.2451" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter34_d_2011_441" x="842.45" y="785.499" width="57.4912" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter35_d_2011_441" x="792.499" y="779.5" width="51.2451" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter36_d_2011_441" x="785.5" y="835.437" width="57.4912" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter37_d_2011_441" x="831" y="824" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter38_f_2011_441" x="742" y="324" width="165" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <clipPath id="bgblur_5_2011_441_clip_path" transform="translate(-633 -93)"><rect width="220" height="220" rx="21" transform="matrix(1 0 0 -1 733 413)" />
          </clipPath><filter id="filter40_d_2011_441" x="842.437" y="247.058" width="51.2451" height="59.4914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter41_d_2011_441" x="842.45" y="303.256" width="57.4912" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter42_d_2011_441" x="792.499" y="303.009" width="51.2451" height="59.4914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter43_d_2011_441" x="785.5" y="253.318" width="57.4912" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter44_d_2011_441" x="831" y="292" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter45_f_2011_441" x="733" y="489" width="90" height="140" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <clipPath id="bgblur_6_2011_441_clip_path" transform="translate(-633 -360)"><rect x="733" y="460" width="220" height="220" rx="21" />
          </clipPath><filter id="filter47_d_2011_441" x="842.437" y="568.45" width="51.2451" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter48_d_2011_441" x="842.45" y="518.499" width="57.4912" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter49_d_2011_441" x="792.499" y="512.5" width="51.2451" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter50_d_2011_441" x="785.5" y="568.437" width="57.4912" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter51_d_2011_441" x="831" y="557" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter52_f_2011_441" x="246" y="727" width="165" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <clipPath id="bgblur_7_2011_441_clip_path" transform="translate(-93 -627)"><rect x="193" y="727" width="220" height="220" rx="21" />
          </clipPath><filter id="filter54_d_2011_441" x="302.437" y="835.45" width="51.245" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter55_d_2011_441" x="302.45" y="785.499" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter56_d_2011_441" x="252.499" y="779.5" width="51.245" height="59.4915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter57_d_2011_441" x="245.5" y="835.437" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter58_d_2011_441" x="291" y="824" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter59_f_2011_441" x="246" y="316" width="165" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_2011_441" />
          </filter>
          <clipPath id="bgblur_8_2011_441_clip_path" transform="translate(-93 -93)"><rect width="220" height="220" rx="21" transform="matrix(1 0 0 -1 193 413)" />
          </clipPath><filter id="filter61_d_2011_441" x="302.437" y="247.058" width="51.245" height="59.4914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter62_d_2011_441" x="302.45" y="303.256" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter63_d_2011_441" x="252.499" y="303.009" width="51.245" height="59.4914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter64_d_2011_441" x="245.5" y="253.318" width="57.4915" height="53.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.152941 0 0 0 0 0.25098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <filter id="filter65_d_2011_441" x="291" y="292" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.14902 0 0 0 0 0.219608 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_441" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_441" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_2011_441" x1="303" y1="460" x2="303" y2="680" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient id="paint1_linear_2011_441" x1="307.202" y1="583.306" x2="351.683" y2="593.996" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint2_linear_2011_441" x1="317.306" y1="564.978" x2="327.996" y2="520.498" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint3_linear_2011_441" x1="298.978" y1="555.136" x2="254.498" y2="544.446" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint4_linear_2011_441" x1="288.136" y1="573.202" x2="277.446" y2="617.683" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint5_linear_2011_441" x1="573" y1="460" x2="573" y2="680" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient id="paint6_linear_2011_441" x1="573" y1="727" x2="573" y2="947" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient id="paint7_linear_2011_441" x1="577.202" y1="850.306" x2="621.683" y2="860.996" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint8_linear_2011_441" x1="587.306" y1="831.978" x2="597.996" y2="787.498" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint9_linear_2011_441" x1="568.978" y1="822.136" x2="524.498" y2="811.446" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint10_linear_2011_441" x1="558.136" y1="840.202" x2="547.446" y2="884.683" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint11_linear_2011_441" x1="110" y1="0" x2="110" y2="220" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient id="paint12_linear_2011_441" x1="577.202" y1="289.694" x2="621.683" y2="279.004" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint13_linear_2011_441" x1="587.306" y1="308.022" x2="597.996" y2="352.502" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint14_linear_2011_441" x1="568.978" y1="317.864" x2="524.498" y2="328.554" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint15_linear_2011_441" x1="558.136" y1="299.798" x2="547.446" y2="255.317" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint16_linear_2011_441" x1="843" y1="727" x2="843" y2="947" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient id="paint17_linear_2011_441" x1="847.202" y1="850.306" x2="891.683" y2="860.996" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint18_linear_2011_441" x1="857.306" y1="831.978" x2="867.996" y2="787.498" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint19_linear_2011_441" x1="838.978" y1="822.136" x2="794.498" y2="811.446" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint20_linear_2011_441" x1="828.136" y1="840.202" x2="817.445" y2="884.683" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint21_linear_2011_441" x1="110" y1="0" x2="110" y2="220" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient id="paint22_linear_2011_441" x1="847.202" y1="289.694" x2="891.683" y2="279.004" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint23_linear_2011_441" x1="857.306" y1="308.022" x2="867.996" y2="352.502" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint24_linear_2011_441" x1="838.978" y1="317.864" x2="794.498" y2="328.554" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint25_linear_2011_441" x1="828.136" y1="299.798" x2="817.445" y2="255.317" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint26_linear_2011_441" x1="843" y1="460" x2="843" y2="680" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient id="paint27_linear_2011_441" x1="847.202" y1="583.306" x2="891.683" y2="593.996" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint28_linear_2011_441" x1="857.306" y1="564.978" x2="867.996" y2="520.498" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint29_linear_2011_441" x1="838.978" y1="555.136" x2="794.498" y2="544.446" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint30_linear_2011_441" x1="828.136" y1="573.202" x2="817.445" y2="617.683" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint31_linear_2011_441" x1="303" y1="727" x2="303" y2="947" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient id="paint32_linear_2011_441" x1="307.202" y1="850.306" x2="351.683" y2="860.996" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint33_linear_2011_441" x1="317.306" y1="831.978" x2="327.996" y2="787.498" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint34_linear_2011_441" x1="298.978" y1="822.136" x2="254.498" y2="811.446" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint35_linear_2011_441" x1="288.136" y1="840.202" x2="277.446" y2="884.683" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint36_linear_2011_441" x1="110" y1="0" x2="110" y2="220" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
          <linearGradient id="paint37_linear_2011_441" x1="307.202" y1="289.694" x2="351.683" y2="279.004" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint38_linear_2011_441" x1="317.306" y1="308.022" x2="327.996" y2="352.502" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint39_linear_2011_441" x1="298.978" y1="317.864" x2="254.498" y2="328.554" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
          <linearGradient id="paint40_linear_2011_441" x1="288.136" y1="299.798" x2="277.446" y2="255.317" gradientUnits="userSpaceOnUse">
            <stop offset="0.461538" stop-color="#20293F" />
            <stop offset="1" stop-color="#283751" />
          </linearGradient>
        </defs>
      </svg>

    </div>
  )
}