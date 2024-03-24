const Counter = () => {
  return (
    <div className="grid grid-flow-col gap-1 lg:gap-12 text-center auto-cols-max not-prose items-center">
      <div className="flex flex-col">
        <span className="text-white text-5xl md:text-4xl xl:text-8xl font-bold">170</span>
        <p className="text-sm md:text-lg text-green-400">days</p>
      </div>
      <div className="divider divider-horizontal before:bg-green-600 after:bg-green-600 my-2 lg:my-7 mx-1 md:mx-auto"></div>
      <div className="flex flex-col">
        <span className="text-white text-5xl md:text-4xl xl:text-8xl font-bold">13</span>
        <p className="text-sm md:text-lg text-green-400">hours</p>
      </div>
      <div className="divider divider-horizontal before:bg-green-600 after:bg-green-600 my-2 lg:my-7 mx-1 md:mx-auto"></div>
      <div className="flex flex-col">
        <span className="text-white text-5xl md:text-4xl xl:text-8xl font-bold">39</span>
        <p className="text-sm md:text-lg text-green-400">minutes</p>
      </div>
      <div className="divider divider-horizontal before:bg-green-600 after:bg-green-600 my-2 lg:my-7 mx-1 md:mx-auto"></div>
      <div className="flex flex-col">
        <span className="text-white text-5xl md:text-4xl xl:text-8xl font-bold">29</span>
        <p className="text-sm md:text-lg text-green-400">seconds</p>
      </div>
    </div>
  );
};

export default Counter;
