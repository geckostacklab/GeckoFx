import { createFileRoute } from '@tanstack/react-router'
import RoboBrain from '../components/svg/RoboBrain'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <RoboBrain />
    </div>
  )
}
