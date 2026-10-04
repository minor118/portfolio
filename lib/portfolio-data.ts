export const profile = {
  name: "河田 実",
  nameEn: "MINORU KAWATA",
  title: "Webエンジニア(フロントエンド〜CMS構築)",
  catchphrase: "見た目も中身も、まるごと作る。",
  intro: [
    "Webフロントエンドを中心に、設計から実装、運用までを一貫して担当するWebエンジニアです。",
    "React / Next.js を使った UI 開発が得意で、PHP などのバックエンド開発にも対応できます。",
    "「使っていて気持ちいい」体験を、見た目と仕組みの両面から作ることを大切にしています。",
  ],
}

export type NavItem = { id: string; en: string; ja: string; href: string }

export const navItems: NavItem[] = [
  { id: "top", en: "TOP", ja: "トップ", href: "/#top" },
  { id: "career", en: "CAREER", ja: "自己紹介・経歴", href: "/career" },
  { id: "works", en: "WORKS", ja: "作品・実績", href: "/works" },
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
      { name: "HTML", level: 6 },
      { name: "CSS", level: 6 },
      { name: "JavaScript", level: 6 },
      { name: "TypeScript", level: 1 },
      { name: "React", level: 1 },
      { name: "Next.js", level: 1 },
    ],
  },
  {
    id: "backend",
    en: "BACKEND",
    ja: "バックエンド",
    tone: "secondary",
    skills: [
      { name: "PHP", level: 5 },
      { name: "MySQL", level: 3 },
      { name: "Perl", level: 2 },
    ],
  },
  {
    id: "design",
    en: "DESIGN",
    ja: "デザイン",
    tone: "card",
    skills: [
      { name: "Photoshop", level: 6 },
      { name: "Figma", level: 1 },
    ],
  },
  {
    id: "other",
    en: "OTHER",
    ja: "その他",
    tone: "accent",
    skills: [
      { name: "Git", level: 1 },
      { name: "Docker", level: 2 },
      { name: "Claude Code", level: 1 },
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
    period: "2018年4月〜2020年3月",
    company: "新井産業株式会社",
    role: "営業",
    description:
      "「折箱（使い捨て弁当容器）」メーカーにて、営業担当として従事。担当は四国・九州全域、一部中国地方の包装資材専門商社",
    tasks: [
      "既存商社に対する営業（商品提案・開発、見積作成）",
      "製造工程管理",
      "製造補助",
    ],
  },
  {
    period: "2020年6月〜現在",
    company: "株式会社357",
    role: "Webエンジニア",
    description:
      "受託案件を中心に、コーポレートサイトやECサイトの設計・実装を担当。",
    tasks: [
      "サイト保守",
      "LP制作",
      "CMS構築",
      "新規サイト作成",

    ],
  },
]

/**
 * image: サムネイル画像のパス（任意）。public/works/ に画像を置き、"/works/xxx.png" のように指定してください。
 * 16:9 の画像を推奨します。未指定の場合は仮置きのサムネイルを表示します。
 */
export type Work = {
  title: string
  summary: string
  tech: string[]
  url: string
  image?: string
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
