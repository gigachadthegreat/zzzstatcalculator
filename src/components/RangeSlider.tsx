import React from "react";

type SliderProps = {
  maxValue: number;
  value: number;
  onChange: (val: number) => void;
  unavailableValue: number;
};

const RangeSlider: React.FC<SliderProps> = ({ maxValue, value, onChange, unavailableValue }) => {

    // Percentages for styling
  const filledPercent = (value / maxValue) * 100;
  const unavailablePercent = 100 - ((unavailableValue / (maxValue)) * 100  - (value / (maxValue)) * 100);

  return (
    <div className="relative  h-6">
      {/* Track background */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-2 rounded-full bg-gray-200 dark:bg-white" />

      {/* Greyed out unavailable section */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full bg-gray-700"
        style={{ left: `${unavailablePercent}%`, right: 0 }}
      />

      {/* Filled section up to value */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full bg-gray-500"
        style={{ width: `${filledPercent}%` }}
      />

      {/* Input range */}
      <input
        type="range"
        min={0}
        max={maxValue}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent z-10
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-gray-500
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:appearance-none
          [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-gray-500
          [&::-moz-range-thumb]:cursor-pointer"
      />
    </div>
  );
};

export default RangeSlider;


// function RangeSlider({ maxValue, value, onChange }: { maxValue: number; value: number; onChange: (value: number) => void }) {
//     return (
//         <div className=" ">
//             <input type="range" min="0" max={maxValue} value={value} onChange={(e) => onChange(parseInt(e.target.value) || 0)} className="w-60" />

//         </div>
//     );
// }

// export default RangeSlider;
