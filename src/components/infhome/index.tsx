import { Assine } from "../assine";

export const InfHome = () => {
  return (
    <div
      className="min-w-[112rem]
    max-lg:min-w-[20rem]
    mt-[14rem]
    flex
    flex-col
    text-white
    text-center  
    items-center
    "
    >
      <div
        className="basis-1/2
      p-0
      z-[1]
      w-full
      text-center
      "
      >
        <h1
          className="text-[3rem]
        max-lg:text-[2.5rem]
        max-md:text-[2rem]
        font-extrabold
        "
        >
          Filmes, séries e muito mais, sem limites
        </h1>
        <p
          className="text-[1.5rem]
        font-medium
        text-center
        "
        >
          Assista onde quiser. Cancele quando quiser.
        </p>
        <Assine />
      </div>
    </div>
  );
};
