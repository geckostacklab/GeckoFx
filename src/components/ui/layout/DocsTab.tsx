import { Children, isValidElement, type ReactNode } from "react";
import { cn } from "../../../lib/utils";
import { componentMap } from "../../../component.map";

type DocsTabProps = {
  children: ReactNode,
}

function getComponentName(children: ReactNode): string | null {
  let name: string | null = null;
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    const type = child.type;
    if (typeof type === "function" && type.name) {
      const match = componentMap.find(c => c.name === type.name);
      if (match) { name = match.name; return; }
    }
    const childProps = child.props as { children?: ReactNode };
    if (childProps?.children) {
      const found = getComponentName(childProps.children);
      if (found) name = found;
    }
  });
  return name;
}

export default function DocsTab({
  children
}: DocsTabProps) {

  const componentName = getComponentName(children);
  const component = componentMap.find(c => c.name === componentName);

  return (
    <div>
      <div className='flex items-center justify-center'>
        {children}
      </div>

      <div className="flex gap-16 mt-16">
        {component?.tags && (
          <div className="border border-line border-dashed p-4 w-1/2">
            <h3 className="text-sm font-medium text-neutral-400 mb-2">tags</h3>
            <div className="flex flex-wrap gap-2">
              {component.tags.map((tag) => (
                <span key={tag} className="text-xs text-neutral-300 px-2 py-1 bg-white/5 border border-white/10 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex-1 h-fit border border-line border-dashed">
          {componentName && <DocsTable componentName={componentName} />}
        </div>
      </div>
    </div>
  )
}

function DocsTable({
  componentName
}: {
  componentName: string,
}) {

  const component = componentMap.find(c => c.name === componentName);
  if (!component?.props) return null;

  const entries = Object.entries(component.props);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left text-sm text-neutral-400 py-2 px-4 border-r border-r-line border-dashed">props</th>
          <th className="text-left text-sm text-neutral-400 py-2 px-4">types</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(([prop, type]) => (
          <tr key={prop}>
            <td className={cn(
              "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed border-r border-r-line"
            )}>{prop}</td>
            <td className={cn(
              "text-sm text-neutral-300 py-2 px-4 border-t border-t-line border-dashed"
            )}>{Array.isArray(type) ? type.join(" | ") : type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}