import { getVillaList } from "@/actions/villa-list";

import FindAVilla from "@/components/list/findAVilla";

import { villa } from "@/lib/types/villa";

interface VillasProps {
  searchParams: Promise<{ query: string }>;
}

const Villas = async ({ searchParams }: VillasProps) => {
  const { query } = await searchParams;

  const data = await getVillaList(query);

  return (
    <div>
      <FindAVilla villas={data as villa[]} />
    </div>
  );
};

export default Villas;
