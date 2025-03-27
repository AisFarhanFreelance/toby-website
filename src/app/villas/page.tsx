import FindAVilla from "@/components/list/findAVilla";
import { villa } from "@/lib/types/villa";
import { createClient } from "@/lib/utility/supabase/server";

const Villas = async () => {
  const supabase = await createClient();

  const { data } = await supabase.from("villas").select(`
    id,
    name,
    short_address,
    price,
    rating,
    capacity,
    bedroom,
    bathroom,
    area,
    description,
    review_count,
    images (url),
    tags (tag)
  `);

  return (
    <div>
      <FindAVilla villas={data as villa[]} />
    </div>
  );
};

export default Villas;
