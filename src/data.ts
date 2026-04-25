import { IResumeData } from "./types";

export const RESUME_DATA: IResumeData = {
  profile: {
    name: "张鑫龙",
    role: "游戏策划 / 开发者",
    tagline: "21岁 | 2027届本科 | 河北工程大学",
    location: "计算机科学与技术",
    email: "1337490125@qq.com",
    phone: "15033895942",
    avatar: "/images/myavatar.jpg",
    headerBackground: "/images/bg.jpg",
    summary: "具备在Unity中快速验证玩法的能力，能独立产出白盒关卡。熟悉日式叙事风格与用户痛点，持有日语N1证书。热衷于ACT战斗机制与TRPG规则设计，追求“好玩”与“美感”的极致平衡。",
  },
  skills: {
    tech: ["Unity3D（熟练）", "UE5（了解）", "C#(熟练)", "C++（熟练）", "Lua（掌握）", "有限状态机FSM", "行为树BT", "Timeline"],
    design: ["打击感", "关卡设计", "系统拆解", "数值平衡", "角色设计"],
    tools: ["Xmind", "Axure", "飞书", "UGit", "SVN", "office三件套", "Antigravity", "Gemini", "NanoBanana"],
    languages: ["日语 (N1)"]
  },
  // ==========================================
  // 【工作经历】
  // ==========================================
  workExperience: [
    {
      company: "英雄互娱危机曙光项目组",
      role: "关卡策划实习生",
      period: "2026.01 - 2026.04",
      description: "· 核心玩法落地：完成从方案对接→配置实现→测试上线的全流程落地，成功推出5个玩法：一步之遥（跑酷）、无首画廊（解密+战斗）、跳跃与射击（跑酷+射击）、污染源（BOOS战）、烈酒帮的挑战（限时击杀挑战）。\n· 基础执行工作： 负责 700+ 探索点（宝箱、灯塔）的坐标打点与 ID 校验，并基于材质表现对 200+ 建筑预制体进行可破坏属性标注，确保关卡底层数据的准确性。\n· 跨部门协作与反馈： 深度参与研发协同流程，负责地编修改需求的文档记录与评审同步，按规范提交美术资产变更申请，并针对自研工具 Bug 产出详细的图文复现文档，产出一篇打点型Timeline文档。",
      images: [
        "/images/yingxionghuyu.jpg",
        "/images/shixizhengming.png"
      ]
    }
  ],
  // ==========================================
  // 【校园/实习经历】
  // 要添加新经历，请在数组最上面添加一个新的对象{}
  // ==========================================
  experience: [
    {
      company: "喵头鹰独立游戏开发社",
      role: "程策副社长",
      period: "2024.09 - 至今",
      description: "作为河北省首个游戏开发社团联合创始人之一，管理策划与程序部门。制定教学大纲，帮助新生入门。策划“游戏红黑榜”活动，为社团带来千人次曝光。",
      images: [
        "/images/jx.jpg",
        "/images/game.jpg",
        "/images/hhb.jpg"
      ]
    },
    {
      company: "腾讯游戏学堂",
      role: "策划公开课学员",
      period: "2024.09 - 2025.02",
      description: "入选策划方向公开课，系统学习游戏策划与运营知识并顺利结业。",
      images: [
        "/images/txyxxt.jpg",
        "/images/txkjyk.jpg"
      ]
    }
    // ------ 你可以在这里继续添加经历 ------
    // {
    //   company: "公司或组织名称",
    //   role: "你的职位",
    //   period: "开始时间 - 结束时间",
    //   description: "描述你做了什么",
    //   images: ["图片路径1.jpg"] // 可选
    // }
  ],
  // ==========================================
  // 【项目经历】
  // 你可以在这里添加你的游戏项目、开发项目等
  // ==========================================
  projects: [
    // 示例：新项目可以放在这里
    // {
    //   id: "new-project",
    //   title: "新项目名称",
    //   role: "独立开发",
    //   period: "2026.01 - 至今",
    //   tags: ["Unity", "C#"],
    //   description: "一段简短的项目介绍",
    //   details: [
    //     "详细的系统实现点1",
    //     "详细的系统实现点2"
    //   ],
    //   link: "填写游戏演示视频或试玩链接",
    //   image: "/images/你的截图路径.jpg"
    // },
    {
      id: "act-demo",
      title: "ActDemo (Unity动作游戏)",
      role: "独立开发 & 策划",
      period: "2025.09 - 至今",
      tags: ["Unity", "3D ACT", "FSM"],
      description: "专注于打击感与操作反馈的3D动作游戏Demo。",
      details: [
        "使用FSM管理角色状态，实现连招(Combo)、防御闪避等核心机制。",
        "通过调整顿帧(Hit Stop)、屏幕震动与音效提升打击感。",
        "实现Jump/Dodge Cancel机制，提升操作上限。"
      ],
      link: "https://www.bilibili.com/video/BV1CBU5BYEPJ/",
      image: "/images/ActDemo.jpg"
    },
    {
      id: "library-night",
      title: "图书馆奇妙夜",
      role: "策划 & 程序",
      period: "2025.06 - 2025.10",
      tags: ["Unity", "3D Puzzle"],
      description: "与校图书馆合作开发的3D解密闯关游戏。",
      details: [
        "负责角色3C手感、动画机、变身技能、部分关卡设计。",
        "使用Timeline制作所有过场动画。",
        "编写踏板机关、旋转激光阵等核心关卡逻辑。"
      ],
      link: "https://ncnuj2teeteo.feishu.cn/wiki/XSibwQaztifFGpkEyKXcHkQVnqd?from=from_copylink",
      image: "/images/tsgxm.jpg"
    },
    {
      id: "trpg",
      title: "TRPG与SLG规则设计",
      role: "主策划",
      period: "2020.01 - 2023.01",
      tags: ["规则设计", "PVP"],
      description: "基于型月世界观的战棋类(SRPG)规则设计。",
      details: [
        "独立设计战斗规则、职介数值与技能体系。",
        "组织6次跑团测试，持续迭代平衡性。",
        "解决Caster职介压制问题，优化Assassin背刺收益。"
      ],
      link: "https://www.bilibili.com/opus/1137610590500421636",
      image: "/images/gz.png"
    }
  ],
  hobbies: {
    games: [
      { name: "英雄联盟", info: "3000h, 翡翠", type: "MOBA" },
      { name: "穿越火线", info: "2200h", type: "FPS" },
      { name: "CS:GO", info: "400h", type: "FPS" },
      { name: "APEX Legends", info: "300h", type: "FPS" },
      { name: "无主之地系列", info: "200h", type: "FPS" },
      { name: "彩虹六号: 围攻", info: "200h", type: "FPS" },
      { name: "战地 1 & 5", info: "200h", type: "FPS" },
      { name: "合金装备V: 幻痛", info: "100h", type: ["ACT", "潜入"] },
      { name: "只狼: 影逝二度", info: "全成就", type: ["ACT", "魂系"] },
      { name: "合金装备: 崛起复仇", info: "通关", type: "ACT" },
      { name: "神之亵渎", info: "通关", type: "ACT" },
      { name: "艾尔登法环", info: "白金", type: ["ARPG", "魂系", "开放世界"] },
      { name: "巫师 3: 狂猎", info: "通关", type: ["ARPG", "剧情"] },
      { name: "古墓丽影三部曲", info: "通关", type: "ARPG" },
      { name: "消逝的光芒 1", info: "通关", type: "ARPG" },
      { name: "双人成行", info: "通关", type: "Co-op" },
      { name: "明日方舟", info: "长线玩家", type: "二次元手游" },
      { name: "碧蓝航线", info: "长线玩家", type: "二次元手游" },
      { name: "蔚蓝档案", info: "长线玩家", type: "二次元手游" },
      { name: "赛马娘", info: "长线玩家", type: "二次元手游" },
      { name: "尘白禁区", info: "长线玩家", type: "二次元手游" },
      { name: "原神", info: "长线玩家", type: ["ARPG", "二次元手游", "开放世界"] },
    ],
    anime: [
      { name: "火影忍者", info: "热血 / 战斗 / 忍者" },
      { name: "死神", info: "热血 / 战斗 / 奇幻" },
      { name: "进击的巨人", info: "悬疑 / 战斗 / 科幻" },
      { name: "东京食尸鬼", info: "奇幻 / 战斗 / 暗黑" },
      { name: "一拳超人", info: "热血 / 战斗 / 搞笑" },
      { name: "鬼灭之刃", info: "热血 / 战斗 / 奇幻" },
      { name: "全职猎人", info: "冒险 / 战斗 / 奇幻" },
      { name: "钢之炼金术师", info: "冒险 / 战斗 / 哲理" },
      { name: "妖精的尾巴", info: "热血 / 魔法 / 公会" },
      { name: "排球少年", info: "运动 / 竞技 / 热血" },
      { name: "未闻花名", info: "治愈 / 青春 / 催泪" },
      { name: "四月是你的谎言", info: "恋爱 / 音乐 / 催泪" },
      { name: "堀与宫村", info: "恋爱 / 校园 / 日常" },
      { name: "辉夜大小姐想让我告白", info: "恋爱 / 搞笑 / 校园" },
      { name: "好想告诉你", info: "恋爱 / 校园 / 纯爱" },
      { name: "死亡笔记", info: "悬疑 / 智斗 / 暗黑" },
      { name: "命运石之门", info: "科幻 / 悬疑 / 穿越" },
      { name: "寄生兽", info: "科幻 / 战斗 / 人性" },
      { name: "心理测量者", info: "科幻 / 悬疑 / 反乌托邦" },
      { name: "攻壳机动队", info: "科幻 / 动作 / 哲学" },
      { name: "新世纪福音战士", info: "科幻 / 机战 / 人性" },
      { name: "机动战士高达", info: "机战 / 科幻 / 战争" },
      { name: "魔法少女小圆", info: "魔法 / 暗黑 / 致郁" },
      { name: "干物妹！小埋", info: "日常 / 搞笑 / 治愈" },
      { name: "齐木楠雄的灾难", info: "日常 / 搞笑 / 超能力" },
      { name: "男子高中生的日常", info: "日常 / 搞笑 / 校园" },
      { name: "灵能百分百", info: "超能力 / 热血 / 搞笑" },
      { name: "野良神", info: "奇幻 / 战斗 / 治愈" },
      { name: "境界的彼方", info: "奇幻 / 战斗 / 恋爱" },
      { name: "约定的梦幻岛", info: "悬疑 / 智斗 / 科幻" },
      { name: "化物语", info: "恋爱 / 奇幻 / 日常" },
      { name: "伪物语", info: "恋爱 / 喜剧 / 奇幻" },
      { name: "物语系列 第二季", info: "奇幻 / 恋爱 / 对话" },
      { name: "终物语", info: "悬疑 / 恋爱 / 奇幻" },
      { name: "轻音少女", info: "校园 / 音乐 / 日常" },
      { name: "凉宫春日的忧郁", info: "科幻 / 校园 / 喜剧" },
      { name: "龙与虎", info: "校园 / 恋爱 / 喜剧" },
      { name: "从零开始的异世界生活", info: "穿越 / 奇幻 / 战斗" },
      { name: "Re:CREATORS", info: "奇幻 / 战斗 / meta" },
      { name: "刀剑神域", info: "科幻 / 游戏 / 战斗" },
      { name: "加速世界", info: "科幻 / 游戏 / 战斗" },
      { name: "妖精的旋律", info: "暗黑 / 猎奇 / 致郁" },
      { name: "空之境界", info: "奇幻 / 悬疑 / 战斗" },
      { name: "Fate/Zero", info: "奇幻 / 战斗 / 智斗" },
      { name: "Fate/stay night UBW", info: "奇幻 / 魔法 / 战斗" },
      { name: "君主・埃尔梅罗二世事件簿", info: "推理 / 奇幻 / 魔法" },
      { name: "魔法禁书目录", info: "超能力 / 魔法 / 战斗" },
      { name: "某科学的超电磁炮", info: "超能力 / 校园 / 战斗" },
      { name: "某科学的一方通行", info: "超能力 / 战斗" },
      { name: "JOJO 的奇妙冒险", info: "热血 / 战斗 / 奇幻" },
      { name: "炎炎消防队", info: "热血 / 战斗 / 奇幻" },
      { name: "镇魂街", info: "热血 / 战斗 / 奇幻" },
      { name: "死亡游行", info: "人性 / 悬疑 / 奇幻" },
      { name: "只有我不存在的城市", info: "悬疑 / 穿越 / 推理" },
      { name: "赌博默示录", info: "智斗 / 人性 / 悬疑" },
      { name: "狂赌之渊", info: "智斗 / 校园 / 悬疑" },
      { name: "记录的地平线", info: "游戏 / 科幻 / 冒险" },
      { name: "灰与幻想的格林姆迦尔", info: "奇幻 / 冒险 / 致郁" },
      { name: "盾之勇者成名录", info: "穿越 / 奇幻 / 战斗" },
      { name: "关于我转生变成史莱姆这档事", info: "转生 / 奇幻 / 战斗" },
      { name: "转生成为了只有乙女游戏破灭 Flag 的邪恶大小姐", info: "转生 / 恋爱 / 喜剧" },
      { name: "为美好的世界献上祝福！", info: "穿越 / 搞笑 / 奇幻" },
      { name: "打工吧！魔王大人", info: "奇幻 / 日常 / 喜剧" },
      { name: "境界触发者", info: "科幻 / 战斗 / 智斗" },
      { name: "甲铁城的卡巴内瑞", info: "末世 / 战斗 / 奇幻" },
      { name: "声之形", info: "校园 / 恋爱 / 成长" },
      { name: "强风吹拂", info: "运动 / 青春 / 治愈" },
      { name: "赌博破戒录", info: "智斗 / 人性 / 悬疑" },
      { name: "赌博堕天录", info: "智斗 / 人性 / 生存" },
      { name: "冰菓", info: "推理 / 校园 / 日常" },
      { name: "Another", info: "悬疑 / 恐怖 / 校园" },
      { name: "寒蝉鸣泣之时", info: "悬疑 / 恐怖 / 轮回" },
      { name: "大剑", info: "战斗 / 暗黑 / 奇幻" },
      { name: "黑之契约者", info: "超能力 / 动作 / 悬疑" },
      { name: "黑礁", info: "黑帮 / 动作 / 冒险" },
      { name: "军火女王", info: "军火 / 动作 / 智斗" },
      { name: "食戟之灵", info: "美食 / 校园 / 热血" },
      { name: "迷糊餐厅", info: "日常 / 搞笑 / 职场" },
      { name: "阿松", info: "搞笑 / 日常 / 无厘头" },
      { name: "在下坂本，有何贵干？", info: "搞笑 / 校园 / 装 X" },
      { name: "碧蓝之海", info: "搞笑 / 校园 / 潜水" },
      { name: "无头骑士异闻录", info: "都市 / 群像 / 悬疑" },
      { name: "漆黑的子弹", info: "末世 / 战斗 / 奇幻" },
      { name: "星之梦", info: "科幻 / 治愈 / 短篇" },
      { name: "可塑性记忆", info: "科幻 / 恋爱 / 催泪" },
      { name: "天使的心跳", info: "奇幻 / 校园 / 催泪" },
      { name: "天元突破红莲螺岩", info: "机战 / 热血 / 科幻" },
      { name: "斩服少女", info: "战斗 / 搞笑 / 奇幻" },
      { name: "落第骑士英雄谭", info: "校园 / 战斗 / 恋爱" },
      { name: "学战都市 Asterisk", info: "校园 / 战斗 / 科幻" },
      { name: "绝对双刃", info: "校园 / 战斗 / 奇幻" },
      { name: "在地下城寻求邂逅是否搞错了什么", info: "奇幻 / 冒险 / 战斗" },
      { name: "地城邂逅 记忆憧憬", info: "奇幻 / 冒险 / 战斗" },
      { name: "慎重勇者", info: "穿越 / 搞笑 / 战斗" },
      { name: "谭雅战记", info: "战争 / 奇幻 / 智斗" },
      { name: "骑士 & 魔法", info: "机战 / 奇幻 / 穿越" },
      { name: "八男别闹了", info: "穿越 / 奇幻 / 日常" },
      { name: "带着智能手机闯荡异世界", info: "穿越 / 奇幻 / 后宫" },
      { name: "爆肝工程师的异世界狂想曲", info: "穿越 / 奇幻 / 冒险" },
      { name: "游戏人生", info: "智斗 / 奇幻 / 异世界" },
      { name: "游戏人生 ZERO", info: "科幻 / 奇幻 / 战斗" },
      { name: "精灵使的剑舞", info: "校园 / 奇幻 / 战斗" },
      { name: "当不成勇者的我只好认真工作了", info: "奇幻 / 搞笑 / 日常" },
      { name: "浪客剑心", info: "武士 / 动作 / 历史" },
      { name: "尸体派对", info: "恐怖 / 校园 / 猎奇" },
      { name: "摇曳百合", info: "日常 / 搞笑 / 百合" },
      { name: "请问您今天要来点兔子吗", info: "日常 / 治愈 / 萌系" },
      { name: "此花亭奇谭", info: "治愈 / 奇幻 / 妖怪" },
    ]
  },
  // ==========================================
  // 【拆解与分析】
  // 用于展示你的游戏分析文章
  // ==========================================
  analysis: [
    // { title: "文章标题", link: "飞书或知乎链接", image: "/images/你的缩略图.png" },
    { title: "只狼战斗系统拆解", link: "https://ncnuj2teeteo.feishu.cn/wiki/XTZBwZDrOiUKnYkFeOzciYEXnqc", image: "/images/sekiro.png" },
    { title: "打击感的思考", link: "https://ncnuj2teeteo.feishu.cn/wiki/P1Plwi4hOiBVTSkLfUBcVuXpnFc?from=from_copylink", image: "/images/djg.png" },
    { title: "角色设计作品集", link: "https://ncnuj2teeteo.feishu.cn/wiki/Wr6uwqVrMidtzIkq1mKcmLxInwe", image: "/images/sj.png" },
    { title: "角色设计思路（以英雄联盟为例）", link: "https://ncnuj2teeteo.feishu.cn/wiki/RWwzww0LZiqfftkisjPcXDmhntd?from=from_copylink", image: "/images/jssj.png" },
    { title: "巨剑蓄力攻击思考", link: "https://ncnuj2teeteo.feishu.cn/wiki/AJ9zwBmw8il81GkQkjdcbrALn1e", image: "/images/jj.png" }
  ]
};
