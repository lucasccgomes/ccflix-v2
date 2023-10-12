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
          className="text-[4vw]
          max-lg:text-[4.9vw]
          max-md:text-[4.3vw]
          max-sm:text-[4.9vw]
        font-extrabold
        "
        >
          Filmes, séries e muito mais, sem limites
        </h1>
        <p
          className="text-[2vw]
        max-lg:text-[1.9vw]
        max-md:text-[2.3vw]
        max-sm:text-[2.9vw]
        font-medium
        text-center
        "
        >
          Assista onde quiser. Cancele quando quiser.
        </p>
        <div>
          <Assine />
        </div>
      </div>
    </div>
  );
};
