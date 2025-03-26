import { Search } from "lucide-react";

import Input from "../ui/input";
import VillaCard from "./villaCard";

const FindAVilla = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-mourich font-bold text-[40px] text-toby-forest-ash">
          Find A Villa
        </h1>
        <div className="flex max-w-32 items-center rounded-full border-2 border-toby-forest-ash/50 px-3 py-2">
          <Input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent border-transparent text-base font-bold text-toby-forest-ash placeholder:text-toby-forest-ash/50 focus:outline-none focus-visible:border-transparent focus-visible:ring-transparent"
          />
          <Search className="text-toby-forest-ash/50" size={20} />
        </div>
      </div>

      <div>
        <VillaCard />
      </div>
    </div>
  );
};

export default FindAVilla;
