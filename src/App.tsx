import ConnectCube from "./components/ConnectCube"

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#0D1117]">
      <ConnectCube 
        width={431}
        height={443}
        float={true}
        floatDistance={20}
        beam={false}
        pulse={true}
      />
    </div>
  )
}

export default App
