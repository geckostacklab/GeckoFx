import { GithubLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import SponsorCard from "../SponsorCard";

export default function RightSideBar() {
  return (
    <div className="flex h-full flex-col gap-12 justify-between pb-6">
      <div className='w-full flex flex-col gap-4 pt-8'>
        <div className='flex items-center gap-2 text-gray-400 text-sm hover:text-gray-50'>
          <GithubLogoIcon size={14} />
          <a href="https://github.com/geckostacklab/GeckoFX/" target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
        <div className='flex items-center gap-2 text-gray-400 text-sm hover:text-gray-50'>
          <XLogoIcon size={14} />
          <a href="https://x.com/geckostack/" target="_blank" rel="noopener noreferrer">
            twitter
          </a>
        </div>
      </div>
      <SponsorCard />
    </div>
  )
}