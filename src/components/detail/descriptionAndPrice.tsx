import BookingPrice from "./bookingPrice";

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
            return (
              <div
                key={index}
                className="font-roca-one text-toby-forest-ash text-base lg:text-lg not-italic"
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
