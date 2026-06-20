const categories = {
  hardware: "hardware",
  ai: "ai",
  web3: "web3",
  infrastructure: "infrastructure",
}

export const componentMap = [
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
  }
]