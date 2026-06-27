const categories = {
  hardware: "hardware",
  ai: "ai",
  web3: "web3",
  infrastructure: "infrastructure",
}

type ComponentMapEntry = {
  name: string
  description: string
  props: Record<string, string | string[]>
  tags: string[]
  category: string[]
}

export const componentMap : ComponentMapEntry[] = [
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
  }
]