"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { villa } from "@/lib/types/villa";

import Input from "../ui/input";
import SkeletonVillaCard from "../ui/skeleton-villa-card";
import VillaCard from "./villaCard";

type findAVillaProps = {
  villas: villa[];
};

const FindAVilla = (props: findAVillaProps) => {
  const { villas } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    const query = searchParams.get("query") ?? "";
    setSearch(query);

    setIsLoading(false);
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      router.push(`?query=${search}`, { scroll: false });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search, router]);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-mourich font-bold text-[40px] lg:text-[80px] text-toby-forest-ash">
          Find A Villa
        </h1>
        <div className="flex max-w-32 lg:max-w-56 items-center rounded-full border-2 border-toby-forest-ash/50 px-3 py-2">
          <Input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent border-transparent text-base font-bold text-toby-forest-ash placeholder:text-toby-forest-ash/50 focus:outline-none focus-visible:border-transparent focus-visible:ring-transparent"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="text-toby-forest-ash/50" size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonVillaCard key={`skeleton-${index}`} />
            ))
          : villas?.map((villa) => <VillaCard key={villa.id} {...villa} />)}
      </div>
    </div>
  );
};

export default FindAVilla;
