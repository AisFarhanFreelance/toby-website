import Image from "next/image";

export function Feature() {
  return (
    <>
      <div className="font-libre-baskerville text-toby-forest-ash text-center text-2xl md:text-4xl mt-10">
        <h1 className="italic">“Toby Villas was everything</h1>
        <h1 className="">I didn’t know I needed.”</h1>
      </div>
      <div className="grid gap-5 pt-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <Image
            src="/assets/images/Bedroom.png"
            className="rounded-3xl h-80 w-96 lg:h-96 lg:w-80 object-cover"
            alt="Sophie Bedroom"
            width={800}
            height={600}
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/images/DiningRoom.png"
            className="rounded-3xl h-80 w-96 lg:h-96 lg:w-80 object-cover"
            alt="Sophie Bedroom"
            width={800}
            height={600}
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/images/Rooftop.png"
            className="rounded-3xl h-80 w-96 lg:h-96 lg:w-80 object-cover"
            alt="Sophie Bedroom"
            width={800}
            height={600}
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/images/Bathroom.png"
            className="rounded-3xl h-80 w-96 lg:h-96 lg:w-80 object-cover"
            alt="Sophie Bedroom"
            width={800}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
