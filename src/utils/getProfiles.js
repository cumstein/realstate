const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://realstate-cumstein.vercel.app";

export async function getProfiles() {
  try {
    const res = await fetch(API_URL + "/api/profile");
    if (!res.ok) throw new Error("failed to fetch profiles");
    return await res.json();
  } catch (error) {
    console.error("Error fetching profiles", error);
    return null;
  }
}
