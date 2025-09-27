export type EventStatus = "completed" | "upcoming";

export type EventPlayer = {
  rank: "冠军" | "亚军" | "季军" | "殿军";
  name: string;
};

export type EventItem = {
  id: string;
  name: string;
  location: string;
  dateRange: string;
  status: EventStatus;
  highlight: string;
  players: EventPlayer[];
  media?: {
    video?: string;
    poster?: string;
  };
};

export const events: EventItem[] = [
  {
    id: "sports-city",
    name: "体育城站",
    location: "昆明市官渡区·新亚洲体育城",
    dateRange: "2025年8月14日—17日",
    status: "completed",
    highlight: "耶氏体育城总店燃情开杆，见证顶级会员巅峰对决。",
    players: [
      { rank: "冠军", name: "朱周百尚" },
      { rank: "亚军", name: "李昊" },
      { rank: "季军", name: "凯龙" },
      { rank: "殿军", name: "费富星" },
    ],
    media: {
      video: "/videos/highlight-1.mp4",
    },
  },
  {
    id: "chenggong",
    name: "呈贡站",
    location: "昆明市呈贡区·古银路呈贡广场加盟店",
    dateRange: "2025年8月28日—31日",
    status: "completed",
    highlight: "黄金八赛制首度登陆呈贡，多所高校会员热血参战。",
    players: [
      { rank: "冠军", name: "乔峥洋" },
      { rank: "亚军", name: "陈俊伶" },
      { rank: "季军", name: "王金岩" },
      { rank: "殿军", name: "罗尧" },
    ],
  },
  {
    id: "yuhua",
    name: "雨花广场站",
    location: "昆明市五华区·雨花广场",
    dateRange: "2025年9月12日—14日",
    status: "completed",
    highlight: "城区主力会员齐聚雨花广场，以专业执行打造精品赛事体验。",
    players: [
      { rank: "冠军", name: "匡峥鸿" },
      { rank: "亚军", name: "于奥林" },
      { rank: "季军", name: "简从兰" },
      { rank: "殿军", name: "李煜曦" },
    ],
  },
  {
    id: "jiamei",
    name: "佳美大学城站",
    location: "昆明市呈贡区·佳美大学城",
    dateRange: "2025年9月18日—21日",
    status: "completed",
    highlight: "大学生客群专属赛场，打造校园赛事与品牌联动标杆。",
    players: [
      { rank: "冠军", name: "权品羲" },
      { rank: "亚军", name: "牟云锋" },
      { rank: "季军", name: "俞刚" },
      { rank: "殿军", name: "雷杭霖" },
    ],
    media: {
      video: "/videos/highlight-2.mp4",
    },
  },
  {
    id: "xinduhui",
    name: "新都会站",
    location: "昆明市呈贡区·昆百大新都会-1楼",
    dateRange: "2025年9月25日—28日",
    status: "upcoming",
    highlight: "全新站点即将亮相，诚邀品牌与球房共创下一个爆点。",
    players: [],
  },
];
