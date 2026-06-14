import ConnectCube from "./components/ConnectCube"

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black bg-[radial-gradient(#ffffff34_1px,transparent_2px)] bg-size-[24px_24px]">
      <ConnectCube
        float={true}
        floatDistance={20}
        beam={true}
      />
      <ConnectCube colors={["#00D9FF", "#0A0E27", "#1A1F3A", "#2A3F5C", "#FFFFFF"]} floatDelay={3} />
    </div>
  )
}

export default App