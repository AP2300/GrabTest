import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<{days:string, minutes:string, hours: string, seconds: string} | null>(null);

  const countdown = (finalDate: Date) => {
    if (finalDate === null) return;
    var now = new Date();

    var timeleft = finalDate.getTime() - now.getTime();

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24)).toString();
    var hours = `${Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )}`;
    var minutes = `${Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))}`;
    var seconds = `${Math.floor((timeleft % (1000 * 60)) / 1000)}`;

    setCount({ days, hours, minutes, seconds });

    // Display the message when countdown is over
    if (timeleft < 0) {
      setCount({days: "0", hours: "0", minutes: "0", seconds: "0"});
    }
  };

  useEffect(() => {
    countdown(new Date("2024-09-11T11:33:00+00:00"))
    const interval = setInterval(() => countdown(new Date("2024-09-11T11:33:00+00:00")), 1000)
    return () => clearInterval(interval)
}, [])

  return (
    <div className="grid grid-flow-col gap-1 lg:gap-12 text-center auto-cols-max not-prose items-center">
      <div className="flex flex-col">
        <span className="text-white text-5xl md:text-4xl xl:text-8xl font-bold">
         {count?.days ?? 170}
        </span>
        <p className="text-sm md:text-lg text-green-400">days</p>
      </div>
      <div className="divider divider-horizontal before:bg-green-600 after:bg-green-600 my-2 lg:my-7 mx-1 md:mx-auto"></div>
      <div className="flex flex-col">
        <span className="text-white text-5xl md:text-4xl xl:text-8xl font-bold">
          {count?.hours ?? 13}
        </span>
        <p className="text-sm md:text-lg text-green-400">hours</p>
      </div>
      <div className="divider divider-horizontal before:bg-green-600 after:bg-green-600 my-2 lg:my-7 mx-1 md:mx-auto"></div>
      <div className="flex flex-col">
        <span className="text-white text-5xl md:text-4xl xl:text-8xl font-bold">
          {count?.minutes ??39}
        </span>
        <p className="text-sm md:text-lg text-green-400">minutes</p>
      </div>
      <div className="divider divider-horizontal before:bg-green-600 after:bg-green-600 my-2 lg:my-7 mx-1 md:mx-auto"></div>
      <div className="flex flex-col">
        <span className="text-white text-5xl md:text-4xl xl:text-8xl font-bold">
          {count?.seconds ?? 29}
        </span>
        <p className="text-sm md:text-lg text-green-400">seconds</p>
      </div>
    </div>
  );
};

export default Counter;
