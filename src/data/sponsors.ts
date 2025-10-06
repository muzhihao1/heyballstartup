export type SponsorTier = "冠名品牌" | "赞助商" | "协办单位";

export interface Sponsor {
  name: string;
  tier: SponsorTier;
  logoUrl?: string;
  websiteUrl?: string;
  description?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "湘潭铺子枸杞槟榔",
    tier: "冠名品牌",
    description: "冠名赞助商",
  },
  {
    name: "则万皮头",
    tier: "赞助商",
    logoUrl: "/sponsors/zewan.jpg",
    description: "专业级皮头",
  },
  {
    name: "元尘球杆",
    tier: "赞助商",
    description: "专业台球器材",
  },
  {
    name: "FKT球杆",
    tier: "赞助商",
    description: "高端球杆品牌",
  },
  {
    name: "云南煌巢酒业有限公司",
    tier: "赞助商",
    description: "酒业合作伙伴",
  },
  {
    name: "呈贡区青少年体育文化协会",
    tier: "协办单位",
    description: "赛事协办支持",
  },
];

export function getSponsorsByTier(tier: SponsorTier): Sponsor[] {
  return sponsors.filter((sponsor) => sponsor.tier === tier);
}

export const titleSponsor = sponsors.find((s) => s.tier === "冠名品牌");
export const mainSponsors = sponsors.filter((s) => s.tier === "赞助商");
export const coOrganizers = sponsors.filter((s) => s.tier === "协办单位");
