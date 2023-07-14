export default function InInput() {
  return (
    <div className="w-72 m-auto mt-2">
      <div
        className="relative
      h-10 
      w-full 
      min-w-[200px]
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
        absolute 
        left-0 
        -top-3.5
        flex 
        h-full 
        w-full 
        select-none 
        text-[11px] 
        font-normal 
        transition-all 
        before:w-2
        peer-placeholder-shown:text-sm 
        peer-placeholder-shown:leading-[4.6] 
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
