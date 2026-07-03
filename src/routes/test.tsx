import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <p className='font-mono'>
        add component to test in <code>src/routes/test.tsx</code>
      </p>
    </div>
  )
}
