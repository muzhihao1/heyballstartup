export type PrizeItem = {
  rank: string;
  reward: string;
};

export const prizes: PrizeItem[] = [
  { rank: "冠军", reward: "2000元 + 奖杯 + 证书" },
  { rank: "亚军", reward: "1000元 + 奖杯 + 证书" },
  { rank: "季军", reward: "600元 + 奖杯 + 证书" },
  { rank: "殿军", reward: "400元 + 奖杯 + 证书" },
  { rank: "5-8名", reward: "300元/人" },
  { rank: "9-16名", reward: "200元/人" },
  { rank: "17-32名", reward: "100元/人" },
  { rank: "33-64名", reward: "50元/人" },
];
