import { createLazyFileRoute } from '@tanstack/react-router';
import Clock from '../../components/svg/Clock';
import ClockCode from '../../components/svg/Clock?raw';
import Button from '../../components/ui/layout/Button';
import DocsTab from '../../components/ui/layout/DocsTab';
import { useState, useRef, useEffect } from 'react';
import CodeTab from '../../components/ui/layout/CodeTab';

export const Route = createLazyFileRoute('/docs/clock')({
  component: RouteComponent,
})

function RouteComponent() {
  const [tab, setTab] = useState<"docs" | "code">("docs");
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth - 100);
    }
  }, []);

  return <div className='p-2 lg:p-4'>
    <div ref={containerRef} className='h-fit w-full p-4 lg:p-8 flex flex-col gap-6 lg:gap-8'>
      <div className="flex flex-wrap justify-between gap-2">
        <div className='flex items-center'>
          <h1 className='text-xl font-bold'>{"<"}</h1>
          <h1 className='text-xl font-bold text-primary'>{"Clock"}</h1>
          <h1 className='text-xl font-bold ml-2'>{"/>"}</h1>
        </div>
        <div className="flex gap-2 lg:gap-4">
          <Button
            edgeOpacity={tab === "docs" ? 100 : 50}
            edgeWidth={7}
            className={tab !== "docs" ? 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10' : 'bg-primary text-white hover:bg-primary/90 border-white font-semibold'}
            onClick={() => setTab("docs")}
          >
            docs
          </Button>
          <Button
            edgeOpacity={tab === "code" ? 100 : 50}
            edgeWidth={7}
            className={tab !== "code" ? 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10' : 'bg-primary text-white hover:bg-primary/90 border-white font-semibold'}
            onClick={() => setTab("code")}
          >
            code
          </Button>
        </div>
      </div>
      {tab === "docs" ? (
        <DocsTab componentName={"Clock"}>
          <div className='flex flex-col gap-10 lg:gap-20 h-full w-full items-center justify-center'>
            {
              containerWidth && containerWidth < 800 ? (
                <Clock className='w-80'/>
              ) : (
                <Clock/>
              )
            }
          </div>
        </DocsTab>
      ) : (
        <CodeTab source={ClockCode} width={containerWidth} />
      )}
    </div>
  </div>
}

  