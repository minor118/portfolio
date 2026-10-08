export const profile = {
  name: "河田 実",
  nameEn: "MINORU KAWATA",
  title: "Webエンジニア(フロントエンド〜CMS構築)",
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
      "「折箱（使い捨て弁当容器）」メーカーにて、営業担当として従事。四国・九州全域、一部中国地方の包装資材専門商社を担当に商品提案・開発を行う。",
    tasks: [
      "既存商社に対する営業（商品提案・開発、見積作成）",
      "製造工程管理",
      "製造補助",
    ],
  },
  {
    period: "2020年6月〜現在",
    company: "株式会社357",
    role: "コーダー",
    description:
      "CMやPV等の映像・広告等のグラフィック、ホームページやWEBシステムの制作会社にて、フロントエンドコーダーとして従事。業務は、LP制作から数百ページ規模のサイト作成・改修、お客様のサイト運用保守・サポート。",
    tasks: [
      "サイト保守（現在担当 5社）",
      "LP制作",
      "新規サイト作成",
      "CMS構築",
    ],
  },
]

/**
 * image: サムネイル画像のパス（任意）。public/works/ に画像を置き、"/works/xxx.png" のように指定してください。
 * 16:9 の画像を推奨します。未指定の場合は仮置きのサムネイルを表示します。
 * skills: その実績で新しく得たスキル（任意）。1要素が箇条書きの1行になります。未指定の場合は欄ごと非表示です。
 */
export type Work = {
  title: string
  date: string
  summary: string
  tech: string[]
  url: string
  image?: string
  skills?: string[]
}

export const works: Work[] = [
  {
    title: "大学法学部様 オウンドメディアサイト",
    date: "2021-08-01",
    summary:
      "入社後約1年後の作業。初めてタブの切り替え等を行いました。",
    tech: ["HTML・CSS", "JavaScript","PHP"],
    url: "",
    skills: [
      "JavaScriptによるタブ切り替えUIの実装",
    ],
  },
  {
    title: "日本料理屋様Webサイト",
    date: "2021-07-01",
    summary:
      "大学案件が多い、社内では珍しい案件でした。和風の表現のため、縦書きやフォントにこだり作成を行いました",
    tech: ["HTML・CSS", "JavaScript","PHP","CMS"],
    url: "",
    skills: [
      "CSSによる縦書きレイアウト",
      "和風の表現に合わせたフォント選定・調整",
    ],
  },
  {
    title: "大学様 高校生向けLP",
    date: "2021-08-23",
    summary:
      "受験を考える学生さん向けLP。作成当時は別のイラストでしたが、変わっています。5年間継続して毎年更新いただいています。",
    tech: ["HTML・CSS", "JavaScript","PHP",],
    url: "",
    skills: [
      "毎年の更新を見据えたLPの制作・運用",
    ],
  },
  {
    title: "大学付属中学校・高校様 WEBサイトリニューアル",
    date: "2021-08-24",
    summary:
      "大学付属中学校・高校様のWEBサイト。中学校・高校・定時制、3サイトを同一のデザインで作成。自社製CMSを埋め込んだため、リニューアル前サイトの保守時は、月1～2回ほどあった修正やり取りが完全に0になったことが印象的でした。",
    tech: ["HTML・CSS", "JavaScript","PHP","自社製CMS"],
    url: "",
    skills: [
      "3サイトを同一デザインで作る共通化設計",
      "自社製CMSの組み込みによる、お客様自身で更新できる運用体制づくり",
    ],
  },
  {
    title: "大学様 学術研究機関サイト",
    date: "2021-10-01",
    summary:
      "大学様 学術研究機関サイトです。感染リスクに対する研究を行っており、コロナ下らしい案件でした。本案件ではCMS実装のみ行いました。複数の投稿タイプを作成し、サイト上の様々な箇所に表示を行っています。",
    tech: ["JavaScript","PHP","CMS"],
    url: "",
    skills: [
      "CMSでの複数投稿タイプの設計・作成",
      "投稿データをサイト内の複数箇所に表示する実装",
    ],
  },
  {
    title: "大学様 情報サイト",
    date: "2022-02-01",
    summary:
      "大学様 情報サイト。大学に関するあらゆる情報が総括された情報量の多いサイトになるため、説明書のようなサイトになることを目指して制作しました。メニューの階層がかなり深く、サイドメニューのコードをどれだけ階層が深くなっても耐えれるように記載しました",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      "大量の情報を整理して見せる情報設計",
      "階層の深さに依存しないサイドメニューの実装",
    ],
  },
  {
    title: "大学様 履修言語紹介サイト",
    date: "2022-02-01",
    summary:
      "大学で履修できる言語の紹介や、設備、資格、留学制度などをまとめたサイト。メインビジュアルには、ポコポコと吹き出しで各国の「こんにちは」がランダムに表示されます。ループするアニメーションのため、邪魔にならないかつ意味のあるラインを考えCSSアニメーションの試行錯誤を行いました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      "ループするCSSアニメーションの演出設計",
      "ランダム表示を組み合わせたメインビジュアルの実装",
    ],
  },
  {
    title: "大学様 ダイバーシティ推進ページ",
    date: "2022-03-01",
    summary:
      "「多様性」について、大学としての取り組みをまとめたページ。スライダーと",
    tech: ["HTML・CSS","JavaScript","PHP","自社製CMS"],
    url: "",
  },
  {
    title: "予備校様 短期講習LP",
    date: "2022-03-01",
    summary:
      "予備校様の短期講習用のLP。各シーズンもの（新学期・夏・秋・冬講習）であることと、依頼から公開までの期間が2週間程度と短く、共通パーツを利用しコーディングスピードを求められる案件でした。3回目ごろに、作業が体系化し大体1日でコーディングが完了するようになりました。",
    tech: ["HTML・CSS","JavaScript","PHP","自社製CMS"],
    url: "",
    skills: [
      "共通パーツを活用したコーディングの高速化",
      "短納期案件に向けた作業の体系化（約1日でコーディング完了）",
    ],
  },
  {
    title: "私立大学様 法学部公式サイトリニューアル",
    date: "2022-04-01",
    summary:
      "私立大学様 法学部公式サイト。初めてのサイト全体のフルWP化。全てのページの全ての文字をWPで更新可能にすることが条件でした。また、大学様所有サーバーが古く、PHPのバージョンの都合で利用できるプラグインが少なく、投稿タイプ・カスタムフィールド・メニュー（Walker Nav Menu）を全て手書きで実装しました。本案件から、WPに対してどういう要望でも具体的な実装を提案できるという意識が芽生え始めました。",
    tech: ["HTML・CSS","JavaScript","PHP","WordPress"],
    url: "",
    skills: [
      "WordPressによるサイト全体のフルCMS化",
      "プラグインに頼らないカスタム投稿タイプ・カスタムフィールドの実装",
      "Walker_Nav_Menuを使ったメニューのカスタマイズ",
      "古いPHPバージョンのサーバー環境への対応",
    ],
  },
  {
    title: "私立大学様 研究所検索サイト",
    date: "2022-04-01",
    summary:
      "私立大学様のゼミポータルサイト。自社CMSでデータをSQLite3に出力し、AJax+PHPで表示を行う機能がありました。ゼミ絞り込み条件が、学部、学科、教授名、本文、研究キーワードなどかなり条件が多く、ボタンに応じたSQLを記載することに挑戦しました。",
    tech: ["HTML・CSS","JavaScript","PHP","自社CMS","SQL"],
    url: "",
    skills: [
      "SQLite3を使ったデータの出力・検索",
      "Ajax + PHPによる非同期表示",
      "多数の絞り込み条件に応じたSQLの作成",
    ],
  },
  {
    title: "私立大学様 広告LP",
    date: "2022-07-01",
    summary:
      "私立大学様のSNS広告から流入されるLP。IEのサポートが2022年6月に終了しクリッピング等の対応が楽に実装できるようになりました。以前までは画像化や大量のベンダープレフィックスを記載していました",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      "IEサポート終了後のモダンCSS（clip-pathなど）の活用",
    ],
  },
  {
    title: "私立大学様 図書館サイトリニューアル",
    date: "2025-04-01",
    summary:
      "私立大学様の図書館サイトです。CMS構築、図書館向けAPIとの連携を担当しました。APIは開館時間の管理と、新着図書の管理を行っております。利用したことのないAPIでしたが、公式のマニュアルから仕様を読み解き、求められている要件を実装することができました。",
    tech: ["HTML・CSS","JavaScript","PHP","CMS"],
    url: "https://www.lib.seijo.ac.jp/",
    image: "/works/20250401_library.jpg",
    skills: [
      "図書館向けAPIとの連携（開館時間・新着図書の管理）",
      "公式マニュアルから未経験APIの仕様を読み解く力",
      "CMS構築",
    ],
  },
  {
    title: "私立大学様 入試併願プラン診断LP",
    date: "2026-01-30",
    summary:
      "私立大学様の入試プラン診断を行えるLPです。\nコーディング業務を担当しました。JSONで結果データを所持し、JSで動的に取得しております。スマートフォン向けのレイアウトやドット絵の楽しそうな雰囲気など、学生の利用を強く意識したサイトになっています。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "https://www.daito.ac.jp/cross/admissions/multi_application/",
    image: "/works/20260130_lp.jpg",
    skills: [
      "JSONで持たせたデータをJavaScriptで動的に表示する実装",
      "学生の利用を意識したスマートフォン向けレイアウト",
    ],
  },
]
