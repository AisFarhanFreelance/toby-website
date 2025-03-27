import Image from "next/image";

import FacilitiesAndAmenities from "./facilitiesAndAmenities";

import BedRoom from "/public/assets/images/BedRoom.png";
import KeyFeature from "./keyFeature";
import DescriptionAndPrice from "./descriptionAndPrice";

const sections = [
  {
    subtitle: "Location",
    content: [
      "Welcome to our stunning villa in the heart of Jimbaran, Bali, precisely in Kedonganan. This exceptional property seamlessly blends Scandinavian charm with modern contemporary design, creating a tranquil and luxurious retreat for your vacation.",
      "As you step into the villa, you'll be greeted by the soothing sounds of a small waterfall, setting the tone for a relaxing stay. The property spans two levels and features three beautifully appointed bedrooms, ensuring ample space and comfort for your entire party.",
      "Escape to our villa in Jimbaran, where every detail is thoughtfully designed to create an unforgettable vacation experience. Immerse yourself in the perfect blend of Scandinavian aesthetics and contemporary comfort for an unparalleled stay in Bali.",
    ],
  },
  {
    subtitle: "The Villa",
    content: [
      "Upon entering, you'll find yourself in the spacious living room that opens up to a pristine pool area. The open kitchen and dining area enhance the sense of space and connectivity, providing the perfect setting for entertaining or enjoying a cozy meal with your loved ones.",
      "Ascending to the second floor, you'll discover an open space serving as a sitting area and mini bar, perfect for unwinding and enjoying the breathtaking views of the surroundings. Whether you're sipping a cocktail or simply soaking in the ambiance, this space adds an extra layer of luxury to your experience.",
    ],
  },
  {
    subtitle: "The Bedroom",
    content: [
      "The master bedroom and the second bedroom are located on the first level, both designed with a touch of elegance and equipped with ensuite bathrooms featuring a bathtub, shower area, and a toilet area discreetly positioned behind the sink.",
      "The second bedroom has a similar design to the master bedroom, boasting twin beds, and also offers a comfortable couch for added convenience. The room is located at the left of the building layout.",
      "The third bedroom, located on the second level, provides a private and serene retreat, ensuring peace and tranquility during your stay. The consistency in bathroom design extends to this level, maintaining the theme of sophistication and functionality.",
    ],
  },
  {
    subtitle: "The Outdoor Area",
    content: [
      "The outdoor area is a true oasis, featuring a sparkling swimming pool, a charming gazebo for moments of relaxation, an inviting outdoor dining area, and a barbecue space for delightful al fresco meals.",
      "Whether you're taking a refreshing dip in the pool or enjoying a barbecue under the stars, the outdoor amenities complement the villa's allure.",
    ],
  },
];

interface VillaOverviewProps {
  villaName: string;
}

const VillaOverview = ({ villaName }: VillaOverviewProps) => {
  return (
    <div className="space-y-3 lg:space-y-7">
      <div className="space-y-3 lg:space-y-7 lg:flex lg:space-x-8 lg:h-[560px]">
        <FacilitiesAndAmenities villaName={villaName} />
        <div className="w-full h-[332px] lg:h-[560px] overflow-hidden relative rounded-xl">
          <Image src={BedRoom} alt="BedRoom" fill className="object-cover" />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-between lg:h-full">
          <KeyFeature />
        </div>
      </div>
      <DescriptionAndPrice sections={sections} />
    </div>
  );
};

export default VillaOverview;
