const VillaDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <div>
      <h1>Villa Detail: {slug}</h1>
    </div>
  );
};

export default VillaDetail;
