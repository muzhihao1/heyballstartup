export type ProcessStep = {
  title: string;
  description: string;
};

export type CooperationFlow = {
  name: string;
  steps: ProcessStep[];
};

export const cooperationFlows: CooperationFlow[] = [
  {
    name: "赞助商合作",
    steps: [
      {
        title: "需求沟通",
        description: "了解品牌定位、预算与目标人群，确认赛事资源匹配度。",
      },
      {
        title: "方案定制",
        description: "输出权益组合、创意玩法与曝光计划，快速确认合作模式。",
      },
      {
        title: "现场执行",
        description: "专业赛事团队落地执行，保障品牌露出与观众体验。",
      },
      {
        title: "复盘延展",
        description: "赛后提供数据复盘、素材包及二次传播建议。",
      },
    ],
  },
  {
    name: "球房合作",
    steps: [
      {
        title: "门店评估",
        description: "评估门店条件与客群，确定赛事主题与时间档期。",
      },
      {
        title: "赛事导入",
        description: "提供全套赛事物料、宣传模板与参赛机制，快速启动。",
      },
      {
        title: "运营赋能",
        description: "耶氏团队驻场指导，协助会员招募与赛事执行。",
      },
      {
        title: "持续运营",
        description: "建立积分与会员体系，形成品牌联动的常态赛事。",
      },
    ],
  },
];
