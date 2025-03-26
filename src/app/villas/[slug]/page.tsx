import VillaOverview from "@/components/detail/villaOverview";

const VillaDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  return (
    <div className="items-center justify-center">
      <VillaOverview villaName={slug} />
    </div>
  );
};

export default VillaDetail;
