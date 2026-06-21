import { createLazyFileRoute } from '@tanstack/react-router';
import ServerStack from '../../components/svg/ServerStack';
import ServerStackCode from '../../components/svg/ServerStack?raw';
import Button from '../../components/ui/layout/Button';
import DocsTab from '../../components/ui/layout/DocsTab';
import { useState } from 'react';
import CodeTab from '../../components/ui/layout/CodeTab';

export const Route = createLazyFileRoute('/docs/server-stack')({
  component: RouteComponent,
})

function RouteComponent() {

  const tabs = [
    (
      <DocsTab>
        <div className='flex flex-col gap-20 h-full w-full items-center justify-center'>
          <ServerStack />
        </div>
      </DocsTab>
    ),
    (
      <CodeTab source={ServerStackCode} />
    )
  ]

  const [tab, setTab] = useState(tabs[0]);

  return <div className='p-4'>
    <div className='h-fit w-full p-8 flex flex-col gap-8'>
      <div className="flex justify-between">
        <div className='flex items-center'>
          <h1 className='text-xl font-bold'>{"<"}</h1>
          <h1 className='text-xl font-bold text-primary'>{ServerStack.name}</h1>
          <h1 className='text-xl font-bold ml-2'>{"/>"}</h1>
        </div>
        <div className="flex gap-4">
          <Button
            edgeColor="var(--color-primary)"
            edgeOpacity={100}
            edgeWidth={7}
            onClick = {() => setTab(tabs[0])}
          >
            docs
          </Button>
          <Button
            edgeColor="white"
            edgeOpacity={50}
            edgeWidth={7}
            className='bg-white/5 border-white/10  text-neutral-400 hover:bg-white/10'
            onClick = {() => setTab(tabs[1])}
          >
            code
          </Button>
        </div>
      </div>
      {tab}
    </div>
  </div>
}
