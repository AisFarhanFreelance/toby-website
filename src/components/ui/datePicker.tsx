"use client";

// import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "iconsax-react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utility/tailwindUtils";
import { Calendar } from "./calendar";
import { FormControl } from "./form";

// interface DatePickerProps {
//   placeholder?: string;
//   buttonClassName?: string;
//   iconColor?: string;
//   // eslint-disable-next-line no-unused-vars
//   onDateChange?: (date: Date | undefined) => void;
// }

// const DatePicker: React.FC<DatePickerProps> = ({
//   placeholder = "Enter Date",
//   buttonClassName = "",
//   iconColor = "#f7f4e8",
//   onDateChange,
// }) => {
//   const [date, setDate] = useState<Date | undefined>();

//   const handleSelect = (selectedDate: Date | undefined) => {
//     setDate(selectedDate);
//     if (onDateChange) {
//       onDateChange(selectedDate);
//     }
//   };

//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           className={cn(
//             "border-toby-frosted-pearl text-toby-white border-2 text-left font-normal rounded-xl flex h-8 justify-between w-full p-1.5",
//             !date && "text-toby-frosted-pearl/80",
//             buttonClassName,
//           )}
//         >
//           <div className="flex w-full items-center justify-between p-1.5">
//             {date ? (
//               <span className="text-left flex-1">
//                 {format(date, "dd MMMM yyyy")}
//               </span>
//             ) : (
//               <span className="font-bold text-base flex-1 text-left">
//                 {placeholder}
//               </span>
//             )}
//             <CalendarIcon size="24" color={iconColor} className="ml-2" />
//           </div>
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0" align="end">
//         <Calendar mode="single" selected={date} onSelect={handleSelect} />
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default DatePicker;

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
                  {format(value, "dd MMMM yyyy")}
                </span>
              ) : (
                <span className="font-bold text-base flex-1 text-left">
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
          selected={value}
          onSelect={onChange}
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
