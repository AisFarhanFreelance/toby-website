import VillaOverview from "@/components/detail/villaOverview";
import { villaDetail } from "@/lib/types/villa";
import { createClient } from "@/lib/utility/supabase/server";

const VillaDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("villas")
    .select(
      `
    id,
    name,
    long_address,
    price,
    rating,
    capacity,
    bedroom,
    bathroom,
    area,
    description,
    gmap_url,
    review_count,
    images (url),
    tags (tag),
    amenities (name, image)
  `,
    )
    .eq("id", slug)
    .single();

  if (!data || error) {
    return (
      <div className="items-center justify-center">
        <div>Villa Not Found</div>
      </div>
    );
  }

  return (
    <div className="items-center justify-center">
      <VillaOverview villa={data as unknown as villaDetail} />
    </div>
  );
};

export default VillaDetail;
