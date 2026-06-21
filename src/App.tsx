import { useRouter } from "@tanstack/react-router"
import ServerStack from "./components/svg/ServerStack"
import Edges from "./components/ui/details/Edges"
import Logo from "./components/ui/details/Logo"
import Margin from "./components/ui/details/Margin"

function App() {

  const router = useRouter();

  return (
    <div className="bg-black h-screen w-screen overflow-y-auto px-30 overflow-x-hidden">
      <div className="border border-y-0 border-line w-full max-w-[1300px] mx-auto h-full">
        <div className="flex items-center h-screen">
          <div className="w-full">
            <Margin />
            <div className="flex gap-15 text-white pl-15 py-20">
              {/* hero left */}
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-4xl">Make the Internet Less Slop</h1>
                  <p className="text-lg mt-7 max-w-[500px] text-neutral-400">
                    Stop shipping the same gradient, the same hero section, and the same lifeless landing pages
                  </p>
                  <button
                    onClick={() => {
                      router.navigate({ to: "/docs/server-stack" })
                    }}
                    className="mt-15 border border-dashed border-primary/40 px-10 py-5 relative bg-primary/15 text-[#FF86AC] text-lg cursor-pointer hover:bg-primary/20 transition-all duration-300"
                  >
                    Premium SVG Components
                    <Edges color="#FF4C85" opacity={100} />
                  </button>
                </div>
                <div className="mt-20">
                  <Logo />
                </div>
              </div>
              {/* hero right */}
              <div className="pl-15">
                <ServerStack />
              </div>
            </div>
            <Margin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App