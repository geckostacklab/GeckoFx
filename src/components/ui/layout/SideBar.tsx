import { Link, useLocation } from "@tanstack/react-router";
import { cn, toKebab, toLabel } from "../../../lib/utils";
import { componentMap } from "../../../component.map";

export default function SideBar() {

  const activePathName = useLocation({
    select: (location) => location.pathname,
  })

  const isActive = (path: string) => {
    return activePathName === path;
  }

  const grouped = new Map<string, typeof componentMap>();
  for (const component of componentMap) {
    for (const cat of component.category) {
      if (!grouped.has(cat)) grouped.set(cat, []);
      grouped.get(cat)!.push(component);
    }
  }

  return (
    <aside className="h-fit flex flex-col gap-8 pb-16">

      {Array.from(grouped.entries()).map(([category, items]) => (
        <div key={category} className="pt-8">
          <div className="flex gap-1 items-center">
            <h3 className="text-md font-semibold capitalize">{category}</h3>
            <span className="text-neutral-500 text-sm">({items.length})</span>
          </div>
          <div className="pt-2 flex flex-col gap-1">
            {items.map((component) => {
              const path = `/docs/${toKebab(component.name)}`;
              return (
                <Link
                  key={component.name}
                  to={path}
                  className={cn(
                    "text-sm",
                    {
                      "text-gray-400": !isActive(path),
                      "text-primary": isActive(path),
                    }
                  )}
                >
                  {toLabel(component.name)}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  )
}