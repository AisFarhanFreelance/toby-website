import { createClient } from "@/lib/utility/supabase/server";

export async function getVillaList(searchQuery: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("villas")
    .select(
      `
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
  `,
    )
    .ilike("name", `%${searchQuery}%`);

  if (error) return [];
  return data;
}
