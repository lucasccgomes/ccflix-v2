import TV from "../../assets/img/bg-tv.png";

export const Aptv = () => {
  return (
    <div
      className="flex
      justify-center
    m-auto
    max-w-[83%]
    max-lg:flex-col
    max-lg:items-center
  
    "
    >
      <div
        className=" text-white
        flex
        
        flex-col
        justify-center
      max-w-[521px]
      "
      >
        <h2
          className="text-[4vw]
        max-lg:text-[4.2vw]
        max-md:text-[4.3vw]
        max-sm:text-[4vw]
        max-lg:text-center
        font-black
        mb-5
        "
        >
          Aproveite na TV
        </h2>
        <p
          className="text-[2vw]
          max-lg:text-[2.3vw]
          max-md:text-[2.6vw]
          max-sm:text-[2.5vw]
          max-lg:text-center
        font-normal
        "
        >
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          aparelhos de Blu-ray e outros dispositivos.
        </p>
      </div>

      <div
        className="relative
      flex
      max-w-[533px]
      z-[2]
     
      "
      >
        <picture>
          <img src={TV} alt="" className="h-auto w-full" />
        </picture>
        <div
          className="max-w-[74.7%]
        h-auto
        ml-[12.3%]
        mt-[14.5%]
        absolute
        z-[-1]
        "
        >
          <video autoPlay loop muted>
            <source
              src="https://lucasccgomes.github.io/ccflix/video/lucasflix-video-tv.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};
