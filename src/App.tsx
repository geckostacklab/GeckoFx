import ConnectCube from "./components/ConnectCube"

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#0D1117]">
      <ConnectCube 
        float={true}
        floatDistance={20}
        beam={true}
      />
    </div>
  )
}

export default App
