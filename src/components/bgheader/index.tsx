import { ReactNode } from "react";
import ImgHeader from "../../assets/img/bg-header.jpg";

interface BgHeaderProps {
  children: ReactNode;
}

const BgHeader = ({ children }: BgHeaderProps) => {
  return (
    <div
      className="w-full 
    relative
    min-h-[560px]
    max-h-[686px]
    max-sm:min-h-[486px]
    overflow-hidden
    "
    >
      <img
        src={ImgHeader}
        alt="Background Netflix"
        className="z-0
        object-cover
        w-full
        scale-125
        translate-y-[10%]
        min-h-[560px]
        max-sm:w-auto
        max-sm:transform-none
        max-sm:h-full
        max-sm:object-cover
        max-sm:min-h-[486px]
        "
      />
      <div
        className="w-full
        absolute
        top-0
        right-0
        bottom-0
        left-0
        bg-img/efect
        bg-black/40
        "
      >
        <div
          className="flex
        justify-center
      "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default BgHeader;
