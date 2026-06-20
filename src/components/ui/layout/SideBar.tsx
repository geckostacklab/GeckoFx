import { Link } from "@tanstack/react-router";
import { cn } from "../../../lib/utils";
import { IconArrowUpRight } from '@tabler/icons-react';

export default function SideBar() {

  const isActive = (path: string) => {
    return window.location.pathname === path;
  }

  return (
    <aside className="h-fit">

      <div className="pt-4">
        <div className="flex gap-1 items-center">
          <h3 className="text-md">Infrastructure</h3>
          <span className="text-neutral-500 text-sm">(10)</span>
        </div>
        <div className="pt-2 flex flex-col gap-1">
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex gap-1 items-center">
          <h3 className="text-md">Hardware</h3>
          <span className="text-neutral-500 text-sm">(10)</span>
        </div>
        <div className="pt-2 flex flex-col gap-1">
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
        </div>
      </div>

    </aside>
  )
}