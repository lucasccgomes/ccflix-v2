export default function InInput() {
  return (
    <div className="m-0 
      flex 
      justify-center ">
      <div
        className="relative
        flex
      h-14 
      w-full
      max-sm:w-[90%]
      "
      >
        <input
          className="peer 
          h-full 
          w-full 
          rounded-[4px] 
          border
          bg-black/40
          px-3 
          py-2.5 
          font-sans 
          text-sm 
          font-normal 
          text-white 
          focus:border-2
          "
          placeholder=" "
        />
        <label
          className="
        pointer-events-none
        text-gray/100
        absolute 
        left-1
        top-1
        flex
        h-full 
        w-full 
        select-none 
        text-[11px] 
        font-normal 
        transition-all 
        before:w-2
        peer-placeholder-shown:text-sm
        peer-placeholder-shown:leading-[4.5] 
        peer-focus:text-[11px] 
        peer-focus:leading-tight         
        "
        >
          <p className="">Email</p>
        </label>
      </div>
    </div>
  );
}
