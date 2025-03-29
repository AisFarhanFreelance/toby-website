"use client";

// import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "iconsax-react";

import { cn } from "@/lib/utility/tailwindUtils";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { FormControl } from "./form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface DatePickerProps {
  value?: Date;
  // eslint-disable-next-line no-unused-vars
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  buttonClassName?: string;
  iconColor?: string;
  minDate?: Date;
  disabled?: boolean;
}

export const DatePicker = ({
  value,
  onChange,
  placeholder = "Select date",
  buttonClassName = "",
  iconColor = "#f7f4e8",
  minDate,
  disabled = false,
}: DatePickerProps) => {
  const handleDateChange = (date: Date) => {
    if (date) {
      const utcDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
      );
      onChange?.(utcDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            disabled={disabled}
            className={cn(
              "border-toby-frosted-pearl text-toby-white border-2",
              "text-left font-normal rounded-xl flex h-8",
              "justify-between w-full p-1.5 hover:bg-transparent",
              !value && "text-toby-frosted-pearl/80",
              disabled && "opacity-50 cursor-not-allowed",
              buttonClassName,
            )}
          >
            <div className="flex w-full items-center justify-between p-1.5">
              {value ? (
                <span className="text-left flex-1">
                  {format(value, "dd MM yyyy")}
                </span>
              ) : (
                <span className="font-bold text-xs sm:text-base flex-1 text-left">
                  {placeholder}
                </span>
              )}
              <CalendarIcon
                size="24"
                color={disabled ? "#f7f4e880" : iconColor}
                className="ml-2"
              />
            </div>
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="single"
          required={true}
          selected={value}
          // onSelect={onChange}
          onSelect={handleDateChange}
          disabled={(date) => {
            if (minDate && date < minDate) return true;
            return false;
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
