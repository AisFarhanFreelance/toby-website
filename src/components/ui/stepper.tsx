"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "./button";

interface StepperProps {
  min?: number;
  max?: number;
  value?: number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: number) => void;
}

const Stepper = ({ min, max, value, onChange }: StepperProps) => {
  const [count, setCount] = useState<number>(value ?? min ?? 0);

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (max !== undefined && count < max) {
      const newCount = count + 1;
      setCount(newCount);
      if (onChange) {
        onChange(newCount);
      }
    }
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (min !== undefined && count > min) {
      const newCount = count - 1;
      setCount(newCount);
      if (onChange) {
        onChange(newCount);
      }
    }
  };

  return (
    <div className="items-center justify-between font-mourich text-base font-bold text-toby-forest-ash/50 flex space-x-3.5 border-2 border-toby-forest-ash/50 rounded-full">
      <Button
        onClick={handleDecrement}
        className="flex p-0 items-center justify-center border-2 border-toby-forest-ash/50 h-6 w-6 rounded-full my-3 ml-3"
      >
        <Minus />
      </Button>
      <span>{count}</span>
      <Button
        onClick={handleIncrement}
        className="flex p-0 items-center justify-center border-2 border-toby-forest-ash/50 h-6 w-6 rounded-full my-3 mr-3"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default Stepper;
