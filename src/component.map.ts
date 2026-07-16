const categories = {
  hardware: "hardware",
  ai: "ai",
  web3: "web3",
  infrastructure: "infrastructure",
  effects: "effects",
  icons: "icons",
}

type ComponentMapEntry = {
  name: string
  description: string
  props: Record<string, string | string[]>
  tags: string[]
  category: string[]
}

export const componentMap: ComponentMapEntry[] = [
  {
    name: "ServerStack",
    description: "a stack of three server units with animated LED indicators that flicker and pulse",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      flicker: "boolean",
    },
    tags: ["server", "stack", "led", "animation", "hardware", "infrastructure"],
    category: [categories.hardware, categories.infrastructure],
  },
  {
    name: "GpuCluster",
    description: "a cluster of GPU chips arranged in a grid pattern with animated cooling fans and glowing effects",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      fanAnimation: "boolean",
    },
    tags: ["gpu", "cluster", "chip", "fan", "animation", "hardware", "ai"],
    category: [categories.hardware, categories.ai],
  },
  {
    name: "GpuChip",
    description: "a single GPU chip with a grid of connection dots and animated stroke effects",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      float: "boolean",
    },
    tags: ["gpu", "chip", "processor", "hardware", "ai"],
    category: [categories.hardware, categories.ai],
  },
  {
    name: "ConnectCube",
    description: "a 3D isometric cube with connecting lines and animated beam effects",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      float: "boolean",
      floatDistance: "number",
      floatDelay: "number",
      beam: "boolean",
      magnetic: "boolean",
      ping: "boolean",
    },
    tags: ["cube", "connection", "network", "3d", "isometric", "infrastructure"],
    category: [categories.infrastructure, categories.web3],
  },
  {
    name: "ServerRack",
    description: "a rack containing multiple servers or routers. 2 cables like lines are beside the rack that indicate data or network flow",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      float: "boolean",
      beam: "boolean",
      beamStroke: ["number", "number"],
      magnetic: "boolean",
    },
    tags: ["data flow", "network", "rack", "server", "hardware", "infrastructure"],
    category: [categories.infrastructure],
  },
  {
    name: "Gpu",
    description: "a single GPU chip with animated cooling fans and glowing effects",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      rotationDuration: "number",
    },
    tags: ["gpu", "chip", "fan", "animation", "hardware", "ai"],
    category: [categories.hardware, categories.ai],
  },
  {
    name: "AudioChip",
    description: "a single audio chip with animated glow and floating effects",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      float: "boolean",
      animate: "boolean",
    },
    tags: ["audio", "chip", "hardware", "animation"],
    category: [categories.hardware, categories.ai],
  },
  {
    name: "MicRipple",
    description: "a microphone with animated ripple effects and floating animation",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      ripple: "boolean",
      bounce: "boolean",
      float: "boolean",
      animate: "boolean",
    },
    tags: ["microphone", "ripple", "animation", "hardware", "audio"],
    category: [categories.hardware],
  },
  {
    name: "RadarScan",
    description: "a radar scanning animation with animated dots and lines",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      animation: "boolean",
    },
    tags: ["radar", "scan", "animation", "hardware", "infrastructure"],
    category: [categories.infrastructure],
  },
  {
    name: "FastCompress",
    description: "a fast compression animation with animated lines and stars",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      animation: "boolean",
      speed: "number",
    },
    tags: ["compression", "animation", "hardware", "infrastructure"],
    category: [categories.effects],
  },
  {
    name: "FastZap",
    description: "a fast zap animation with animated lines and gradients",
    props: {
      className: "string",
      color: "string",
      animate: "boolean",
      pulseDuration: "number",
      speedLineDuration: "number",
    },
    tags: ["zap", "animation", "hardware", "infrastructure"],
    category: [categories.effects],
  },
  {
    name: "RoboBrain",
    description: "a robotic brain animation with animated radar and floating effects",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      rgb: "boolean",
      cycleColors: "string[]",
      cycleDuration: "number",
      floatDuration: "number",
      floatAmplitude: "number",
      radarDuration: "number",
    },
    tags: ["robotic", "brain", "animation", "hardware", "ai"],
    category: [categories.hardware, categories.ai],
  },
  {
    name: "Clock",
    description: "a clock animation with animated hands and rotation effects",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      animate: "boolean",
      rotationSpeed: "number",
    },
    tags: ["clock", "animation", "hardware", "effects"],
    category: [categories.hardware],
  },
  {
    name: "IsometricCamera",
    description: "an isometric camera with a blinking LED indicator for a live recording effect",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      animate: "boolean",
      blinkSpeed: "number",
    },
    tags: ["camera", "recording", "isometric", "led", "animation", "hardware"],
    category: [categories.hardware],
  },
  {
    name: "ArrowInCubicLattice",
    description: "an arrow inside a cubic lattice structure, representing direction and movement within a 3D space",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      float: "boolean",
      floatDistance: "number",
      floatDelay: "number",
      magnetic: "boolean",
    },
    tags: ["arrow", "cubic lattice", "3D", "animation", "effects"],
    category: [categories.effects],
  },
  {
    name: "Folder",
    description: "a folder with a frosted glass effect, representing file storage or organization",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      animate: "boolean",
    },
    tags: ["folder", "frosted glass", "file storage", "organization", "animation"],
    category: [categories.icons],
  },
  {
    name: "SolanaTokens",
    description: "two mirrored Solana coins with floating animation and twinkling sparkles",
    props: {
      className: "string",
      colors: "Partial<Colors>",
      animate: "boolean",
      floatSpeed: "number",
      sparkleSpeed: "number",
    },
    tags: ["solana", "tokens", "crypto", "coins", "animation", "web3"],
    category: [categories.web3],
  }
]