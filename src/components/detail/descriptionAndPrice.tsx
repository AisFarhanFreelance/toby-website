import BookingPrice from "./bookingPrice";

interface VillaSection {
  subtitle: string;
  content: string | string[];
}

const DescriptionAndPrice = ({ sections }: { sections: VillaSection[] }) => {
  return (
    <div className="text-toby-forest-ash space-y-6">
      <div>
        <div className="font-mourich text-2xl font-bold mb-4">
          <h1>Description</h1>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => {
            const paragraphs =
              typeof section.content === "string"
                ? [section.content]
                : section.content;

            return (
              <div key={index} className="font-roca-one">
                <h2 className="text-lg font-semibold mb-2">
                  {section.subtitle}
                </h2>
                <div className="text-sm space-y-2">
                  {paragraphs.map((paragraph, paraIndex) => (
                    <p key={paraIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <BookingPrice />
      </div>
    </div>
  );
};

export default DescriptionAndPrice;
