import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/docs')({
  component: DocsLayoutComponent,
})

function DocsLayoutComponent() {
  return {

  }
}
