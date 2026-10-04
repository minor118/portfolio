export const profile = {
  name: "山田 太郎",
  nameEn: "TARO YAMADA",
  title: "フロントエンド寄りのフルスタックWebエンジニア",
  catchphrase: "見た目も中身も、まるごと作る。",
  intro: [
    "Webフロントエンドを中心に、設計から実装、運用までを一貫して担当するWebエンジニアです。",
    "React / Next.js を使った UI 開発が得意で、PHP などのバックエンド開発にも対応できます。",
    "「使っていて気持ちいい」体験を、見た目と仕組みの両面から作ることを大切にしています。",
  ],
}

export type NavItem = { id: string; en: string; ja: string }

export const navItems: NavItem[] = [
  { id: "top", en: "TOP", ja: "トップ" },
  { id: "about", en: "ABOUT", ja: "自己紹介・スキル" },
  { id: "career", en: "CAREER", ja: "経歴・職歴" },
  { id: "works", en: "WORKS", ja: "作品・実績" },
]

export type Skill = { name: string; level: number }
export type SkillGroup = {
  id: string
  en: string
  ja: string
  tone: "accent" | "secondary" | "card"
  skills: Skill[]
}

/** level は 1〜10 の範囲で指定してください */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    en: "FRONTEND",
    ja: "フロントエンド",
    tone: "accent",
    skills: [
      { name: "HTML", level: 10 },
      { name: "CSS", level: 9 },
      { name: "JavaScript", level: 9 },
      { name: "TypeScript", level: 8 },
      { name: "React", level: 8 },
      { name: "Next.js", level: 8 },
    ],
  },
  {
    id: "backend",
    en: "BACKEND",
    ja: "バックエンド",
    tone: "secondary",
    skills: [
      { name: "PHP", level: 7 },
      { name: "Perl", level: 5 },
    ],
  },
  {
    id: "design",
    en: "DESIGN",
    ja: "デザイン",
    tone: "card",
    skills: [
      { name: "Photoshop", level: 6 },
      { name: "Figma", level: 7 },
    ],
  },
  {
    id: "other",
    en: "OTHER",
    ja: "その他",
    tone: "accent",
    skills: [
      { name: "Git", level: 8 },
      { name: "Docker", level: 6 },
    ],
  },
]

export type Career = {
  period: string
  company: string
  role: string
  description: string
  tasks: string[]
}

export const careers: Career[] = [
  {
    period: "2022年〜現在",
    company: "株式会社サンプルテック",
    role: "フロントエンドエンジニア",
    description:
      "自社SaaSのフロントエンド開発をリード。デザインシステムの構築から新機能の実装まで担当。",
    tasks: [
      "Next.js / TypeScript による管理画面のリニューアル",
      "共通UIコンポーネントの設計と運用",
      "パフォーマンス改善（LCP 40% 短縮）",
    ],
  },
  {
    period: "2019年〜2022年",
    company: "株式会社ウェブサンプル",
    role: "Webエンジニア",
    description:
      "受託案件を中心に、コーポレートサイトやECサイトの設計・実装を担当。",
    tasks: [
      "PHP による CMS のカスタマイズ・API 開発",
      "jQuery から React への段階的な移行",
      "クライアントとの要件定義・進行管理",
    ],
  },
  {
    period: "2017年〜2019年",
    company: "デザインスタジオ サンプル",
    role: "マークアップエンジニア",
    description: "Webサイトのコーディングとデザインデータの作成を担当。",
    tasks: [
      "HTML / CSS によるレスポンシブ対応のコーディング",
      "Photoshop を使ったバナー・素材制作",
    ],
  },
]

export type Work = {
  title: string
  summary: string
  tech: string[]
  url: string
}

export const works: Work[] = [
  {
    title: "タスク管理アプリ",
    summary:
      "チームでの進捗共有を目的としたカンバン型のタスク管理ツール。ドラッグ操作に対応。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://example.com/works/1",
  },
  {
    title: "飲食店の予約サイト",
    summary:
      "予約フォームと管理画面を備えた店舗向けサイト。バックエンドは PHP で構築。",
    tech: ["PHP", "MySQL", "JavaScript"],
    url: "https://example.com/works/2",
  },
  {
    title: "デザインシステム",
    summary:
      "社内プロダクト向けの UI コンポーネント集。Figma のデザインと実装を同期。",
    tech: ["React", "Storybook", "Figma"],
    url: "https://example.com/works/3",
  },
]
