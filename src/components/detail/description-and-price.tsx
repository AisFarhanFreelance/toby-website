import BookingPrice from "@/components/detail/booking-price";

import { cn } from "@/lib/utility/tailwindUtils";

import { descriptionAndPrice } from "@/lib/types/villa";

const DescriptionAndPrice = ({
  descriptionAndPrice,
}: {
  descriptionAndPrice: descriptionAndPrice;
}) => {
  return (
    <div className="text-toby-forest-ash space-y-6 lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="font-mourich text-2xl lg:text-[40px] font-bold">
          <h1>Description</h1>
        </div>

        <div className="space-y-6 lg:col-span-2">
          {descriptionAndPrice.description
            .split("\\n")
            .map((paragraph, index) => {
              const isTitle =
                paragraph.length > 0 &&
                !paragraph.endsWith(".") &&
                paragraph.split(" ").length <= 5;

              return (
                <div
                  key={index}
                  className={cn(
                    "font-roca-one text-toby-forest-ash text-base lg:text-lg not-italic text-justify",
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
        <BookingPrice
          price={descriptionAndPrice.price}
          long_address={descriptionAndPrice.long_address}
          villaName={descriptionAndPrice.villaName}
        />
      </div>
    </div>
  );
};

export default DescriptionAndPrice;
