import Button from "../button";
import InInput from "../input";
import { AiOutlineRight } from "react-icons/ai";

export const Assine = () => {
  return (
    <>
      <h3 className="mb-3 text-[1.3vw]
       max-lg:text-[1.9vw]
       max-md:text-[2.3vw]
       max-sm:text-[2.9vw]">
        Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
      </h3>
      <div
        className="flex 
    flex-row 
    items-center 
    justify-center
    max-sm:flex-col
    "
      >
        <div className="max-sm:w-[100%]">
          <InInput />
        </div>
        <div
          className="ml-2 
        w-[172px] 
        h-[56px]
        max-sm:mt-3
        "
        >
          <Button iconright={<AiOutlineRight />}>
            <p className="text-[1.5rem]
            
            "> Vamos lá</p>
          </Button>
        </div>
      </div>
    </>
  );
};
