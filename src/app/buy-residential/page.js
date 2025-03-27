import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import { getProfiles } from "@/utils/getProfiles";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://realstate-cumstein.vercel.app";

async function BuyResidentials({ searchParams}) {
  const profiles = await getProfiles();
  if (!profiles) {
    return { notFound: true };
  }

  let finalData = profiles.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidentials;
