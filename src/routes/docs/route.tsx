import { createFileRoute, Outlet } from '@tanstack/react-router'
import Logo from '../../components/ui/details/Logo'
import Edges from '../../components/ui/details/Edges'
import Margin from '../../components/ui/details/Margin'
import { useLayoutEffect, useRef, useState } from 'react'
import SideBar from '../../components/ui/layout/SideBar'

export const Route = createFileRoute('/docs')({
  component: DocsLayoutComponent,
})

function DocsLayoutComponent() {

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (elementRef.current) {
      // clientHeight includes padding but excludes borders and margins
      console.log('Element height:', elementRef.current.clientHeight);
      setHeight(elementRef.current.clientHeight);
    }
  }, []);

  return (
    <div className='bg-black w-screen h-screen flex flex-col text-white overflow-hidden'>

      {/* top bar */}
      <div className='grid grid-cols-[20%_60%_20%]'>
        <div className='p-4'>
          <Logo />
        </div>
        <div className='grid grid-cols-[--spacing(10)_1fr_--spacing(10)]'>

        </div>
        <div className='p-4'>
          <button>sponsor</button>
        </div>
      </div>

      {/* margin */}
      <div className='grid grid-cols-[20%_60%_20%]'>
        <div></div>
        <div className='grid grid-cols-[--spacing(10)_1fr_--spacing(10)]'>
          <div></div>
          <div>
            <Margin className='h-6' edges={false} />
          </div>
          <div></div>
        </div>
        <div></div>
      </div>

      {/* content */}
      <div className='grid grid-cols-[20%_60%_20%] h-full'>
        <div className='px-4 pt-4'>
          <SideBar />
        </div>
        <div className='grid grid-cols-[--spacing(10)_1fr_--spacing(10)]'>
          <Margin className='h-full w-full' vertical edgesWidth={7} />
          <div ref={elementRef} className='relative h-full w-full '>
            {/* <Edges /> */}
            <div className='w-full overflow-y-auto' style={{ height: `${height}px` }}>
              <Outlet />
            </div>
          </div>
          <Margin className='h-full w-full' vertical edgesWidth={7} />
        </div>
        <div className='px-4 pt-4'>

        </div>
      </div>

      {/* margin */}
      <div className='grid grid-cols-[20%_60%_20%]'>
        <div></div>
        <div className='grid grid-cols-[--spacing(10)_1fr_--spacing(10)]'>
          <div></div>
          <div>
            <Margin className='h-6' edges={false} />
          </div>
          <div></div>
        </div>
        <div></div>
      </div>

      {/* footer */}
      <div className='grid grid-cols-[20%_60%_20%] h-10'>
        <div className='p-4' />
        <div className='p-4' />
      </div>

    </div>
  )
}
