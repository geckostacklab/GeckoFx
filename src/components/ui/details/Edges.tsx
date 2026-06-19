import CrossAir from "./CrossAir";

export default function Edges({
  opacity = 50,
  color = "white",
}: {
  opacity?: number,
  color?: string
}) {

  return (
    <>
      <CrossAir
        className={`opacity-${opacity} absolute -top-[7px] -left-[7px] z-100 w-[14px]`}
        color={color}
      />
      <CrossAir
        className={`opacity-${opacity} absolute -top-[7px] -right-[7px] z-100 w-[14px]`}
        color={color}
      />
      <CrossAir
        className={`opacity-${opacity} absolute -bottom-[7px] -left-[7px] z-100 w-[14px]`}
        color={color}
      />
      <CrossAir
        className={`opacity-${opacity} absolute -bottom-[7px] -right-[7px] z-100 w-[14px]`}
        color={color}
      />
    </>
  );
};