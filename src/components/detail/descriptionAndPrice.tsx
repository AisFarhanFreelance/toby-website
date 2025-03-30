import BookingPrice from "@/components/detail/booking-price";

import { cn } from "@/lib/utility/tailwindUtils";

interface DescriptionAndPriceProps {
  description: string;
  price: number;
  long_address: string;
}

const DescriptionAndPrice = (props: DescriptionAndPriceProps) => {
  const { description, price, long_address } = props;

  return (
    <div className="text-toby-forest-ash space-y-6 lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="lg:col-span-2 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="font-mourich text-2xl lg:text-[40px] font-bold mb-4 lg:col-span-1">
          <h1>Description</h1>
        </div>

        <div className="space-y-6 lg:col-span-2">
          {description.split("\\n").map((paragraph, index) => {
            const isTitle =
              paragraph.length > 0 &&
              !paragraph.endsWith(".") &&
              paragraph.split(" ").length <= 5;

            return (
              <div
                key={index}
                className={cn(
                  "font-roca-one text-toby-forest-ash text-base lg:text-lg not-italic",
                  isTitle ? "font-semibold lg:text-xl mt-4" : "font-light",
                )}
              >
                <div className="mb-2">{paragraph}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <BookingPrice price={price} long_address={long_address} />
      </div>
    </div>
  );
};

export default DescriptionAndPrice;
