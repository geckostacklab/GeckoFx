import { createFileRoute } from '@tanstack/react-router'
import MicRipple from '../components/svg/MicRipple'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <MicRipple />
    </div>
  )
}
