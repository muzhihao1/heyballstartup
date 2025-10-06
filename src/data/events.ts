export type EventStatus = "completed" | "upcoming";

export type TournamentCategory = "公开赛" | "会员赛" | "菜鸟杯" | "大学生联赛";

export type EventPlayer = {
  rank: "冠军" | "亚军" | "季军" | "殿军";
  name: string;
};

export type EventItem = {
  id: string;
  name: string;
  category: TournamentCategory;
  edition?: number; // 届数，例如：第一届、第二届
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
    id: "rookie-cup-1",
    name: "菜鸟杯第一届·体育城站",
    category: "菜鸟杯",
    edition: 1,
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
    id: "rookie-cup-2",
    name: "菜鸟杯第二届·呈贡文化广场站",
    category: "菜鸟杯",
    edition: 2,
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
    id: "rookie-cup-3",
    name: "菜鸟杯第三届·雨花广场站",
    category: "菜鸟杯",
    edition: 3,
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
    id: "rookie-cup-4",
    name: "菜鸟杯第四届·佳美大学城站",
    category: "菜鸟杯",
    edition: 4,
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
    id: "rookie-cup-5",
    name: "菜鸟杯第五届·昆百大新都会站",
    category: "菜鸟杯",
    edition: 5,
    location: "昆明市呈贡区·昆百大新都会-1楼",
    dateRange: "2025年9月25日—28日",
    status: "completed",
    highlight: "商圈核心地标赛场，见证新生代球手强势崛起。",
    players: [
      { rank: "冠军", name: "亚力坤" },
      { rank: "亚军", name: "李俊垚" },
      { rank: "季军", name: "刘哲语" },
      { rank: "殿军", name: "徐一晟" },
    ],
  },
  {
    id: "rookie-cup-6",
    name: "菜鸟杯第六届·体育城站",
    category: "菜鸟杯",
    edition: 6,
    location: "昆明市官渡区·新亚洲体育城",
    dateRange: "2025年10月9日—12日",
    status: "completed",
    highlight: "重返体育城，菜鸟杯第六届圆满收官，期待第七届再创辉煌。",
    players: [
      { rank: "冠军", name: "彭疆鑫" },
      { rank: "亚军", name: "李宗贵" },
      { rank: "季军", name: "刘迪" },
      { rank: "殿军", name: "王彧" },
    ],
  },
  {
    id: "rookie-cup-7",
    name: "菜鸟杯第七届",
    category: "菜鸟杯",
    edition: 7,
    location: "赛场待定",
    dateRange: "2025年10月16日—19日",
    status: "upcoming",
    highlight: "菜鸟杯第七届火热筹备中，全新站点即将揭晓，诚邀品牌与球房共创下一个爆点。",
    players: [],
  },
];

// 赛事分类筛选助手函数
export function getEventsByCategory(category: TournamentCategory): EventItem[] {
  return events.filter(event => event.category === category);
}

export function getCompletedEvents(): EventItem[] {
  return events.filter(event => event.status === "completed");
}

export function getUpcomingEvents(): EventItem[] {
  return events.filter(event => event.status === "upcoming");
}
