import { HeartIcon } from "@phosphor-icons/react";
import Button from "./layout/Button";

export default function SponsorButton() {
  return (
    <Button
      className="flex gap-2 text-secondary w-full items-center justify-center hover:bg-secondary/10"
      edgeWidth={9}
      edgeColor="pink"
    >
      <HeartIcon size={16} weight="fill" />
      sponsor
    </Button>
  )
}