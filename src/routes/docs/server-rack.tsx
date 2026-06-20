import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/server-rack')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/docs/server-rack"!</div>
}
