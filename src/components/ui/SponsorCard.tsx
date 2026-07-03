export default function SponsorCard() {
  return (
    <div className="text-xs font-mono flex items-center">
      by
      <a href="https://x.com/geckostack/" target="_blank" rel="noopener noreferrer" className="ml-1 text-secondary hover:text-secondary/80 transition-all duration-300">
        @geckostack
      </a>
    </div>
  )
}