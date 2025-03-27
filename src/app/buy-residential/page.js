import BuyResidentialsPage from "@/template/BuyResidentialsPage";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://realstate-cumstein.vercel.app";

async function BuyResidentials({ searchParams }) {
  const res = await fetch(API_URL + "/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log("fetched data", data);

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidentials;
