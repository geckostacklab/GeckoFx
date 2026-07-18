import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import FileUpload from '../components/svg/FileUpload'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white gap-10">
      <p className='font-mono flex gap-4 '>
        <code className='font-semibold text-purple-500 text-lg'>{`<FileUpload />`}</code> available in
        <span className="flex gap-2">
          <a href="https://geckofx.geckostack.store" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">geckofx.geckostack.store</a>
          <ArrowUpRightIcon size={20} weight="bold" className="text-purple-500" />
        </span>
      </p>
      <div className="flex gap-20">
        <FileUpload />
      </div>
    </div>
  )
}
