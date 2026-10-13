import { portfolioPrompt } from "./portfolio-prompt"

export const profile = {
  name: "河田 実",
  nameEn: "MINORU KAWATA",
  title: "Webエンジニア(フロントエンド、CMS構築)",
  intro: [
    "Webフロントエンドを中心に、設計から実装、運用までを一貫して担当するWebエンジニアです。",
    "WordPress、MovableTypeなどのCMS実装が得意で、PHPなどのバックエンド開発にも対応できます。",
    "度重なる修正や運用方法の変更にも耐えれるサイト作成を大切に考え、ユーザーにも心地よい体験を与えれるようなサイト作成を行っています。",
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
      "「折箱（使い捨て弁当容器）」メーカーにて、営業担当として従事。四国・九州全域、一部中国地方の包装資材専門商社を担当し、商品提案・開発を行う。",
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
 * image: サムネイル画像のパス（任意）。public/works/ に画像を置き、"/works/xxx.png" のように指定。16:9 
 * skills: その実績で新しく得たスキル（任意）。
 * pickup: true にすると PICKUPに表示（任意）。
 */
export type Work = {
  title: string
  date: string
  summary: string
  tech: string[]
  url: string
  image?: string
  skills?: string[]
  pickup?: boolean
}

export const works: Work[] = [
  {
    title: "大学法学部様 オウンドメディアサイト",
    date: "2021-08-01",
    summary:
      "入社約1年後の作業。初めてタブの切り替え等を行いました。",
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
      "大学案件が多い、社内では珍しい案件でした。和風の表現のため、縦書きやフォントにこだわり作成を行いました。",
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
    skills: [],
  },
  {
    title: "大学附属中学校・高校様 WEBサイトリニューアル",
    date: "2021-08-24",
    summary:
      "大学附属中学校・高校様のWEBサイト。中学校・高校・定時制、3サイトを同一のデザインで作成。自社製CMSを埋め込んだため、リニューアル前サイトの保守時は、月1～2回ほどあった修正やり取りが完全に0になったことが印象的でした。",
    tech: ["HTML・CSS", "JavaScript","PHP","自社製CMS"],
    url: "",
    skills: [
      "3サイトを同一デザインで作る共通化設計",
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
    ],
  },
  {
    title: "大学様 情報サイト",
    date: "2022-02-01",
    summary:
      "大学様 情報サイト。大学に関するあらゆる情報が総括された情報量の多いサイトになるため、説明書のようなサイトになることを目指して制作しました。メニューの階層がかなり深く、サイドメニューのコードをどれだけ階層が深くなっても耐えられるように記載しました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
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
      "「多様性」について、大学としての取り組みをまとめたページ。自社製CMSの埋め込みを行いました。",
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
      "継続依頼案件作業の体系化",
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
      "私立大学様のゼミポータルサイト。自社製CMSでデータをSQLite3に出力し、Ajax+PHPで表示を行う機能がありました。ゼミ絞り込み条件が、学部、学科、教授名、本文、研究キーワードなどかなり条件が多く、ボタンに応じたSQLを記載することに挑戦しました。",
    tech: ["HTML・CSS","JavaScript","PHP","自社製CMS","SQL"],
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
      "私立大学様のSNS広告から流入されるLP。IEのサポートが2022年6月に終了しクリッピング等の対応が楽に実装できるようになりました。以前までは画像化や大量のベンダープレフィックスを記載していました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      "IEサポート終了後のモダンCSS（clip-pathなど）の活用",
    ],
  },
  {
    title: "学校法人様 コーポレートサイト",
    date: "2022-11-01",
    summary:
      "学校法人様のコーポレートサイト。コーポレートサイトでしたが、1ページだけの構成でしたので、アニメーションを重視し作成しました。手書き文字が書かれているように出てくるアニメーションを初めて実装し、以降案件にもよく使うようになりました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      "手書き文字が書かれていくように見せるアニメーションの実装",
    ],
  },
  {
    title: "フィットネス企業様 キッズスクールサイトリニューアル",
    date: "2022-12-01",
    summary:
      "フィットネス企業様 キッズスクールサイトリニューアル。13店舗×3種類のスクール（水泳・体操・ダンス）で、計39ページ作成しました。各店舗の部分と独自の部分があり、共通パーツをPHPで管理し作成を行いました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      "店舗×スクール種別で展開する多数ページ（計39ページ）の効率的な制作",
    ],
  },
  {
    title: "感染症対策企業 法人サイト",
    date: "2023-02-01",
    summary:
      "感染症対策に特化した建築、空間づくりを提案するサービスを展開している法人様のサイトです。WordPressで初めて会員登録機能を実装したサイトになりました。",
    tech: ["HTML・CSS","JavaScript","PHP","WordPress"],
    url: "",
    skills: [
      "WordPressでの会員登録機能の実装",
    ],
  },
  {
    title: "県立大学様 カリキュラム特設サイト",
    date: "2023-04-04",
    summary:
      "県立大学様のカリキュラムの説明特設サイトです。プロモ部分の背景が動画になっており「読み込めないときは画像を表示」「見えてないときは動かさない」などの、裏側の処理に注意して作成しました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      "背景動画の実装（読み込み失敗時の画像表示・負荷を抑えた制御など）",
    ],
  },
  {
    title: "私立大学様 奨学金試験LP",
    date: "2023-05-09",
    summary:
      "私立大学様独自の奨学金制度のLPです。繰り返し使うコンポーネントパーツが多く、短期間（1日程度）で作成完了しました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [],
  },
  {
    title: "私立大学様 防災の取り組みページ制作",
    date: "2023-05-09",
    summary:
      "私立大学様、地域防災のブランディングサイトの新規ページです。写真枚数が多く、写真同士が重なっている箇所が多かったのですが、メンテナンス性を考えそれぞれの写真を独立させて作成しました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [],
  },
  {
    title: "私立大学様 入試制度LP",
    date: "2023-06-05",
    summary:
      "私立大学様 入試制度LPです。ターゲットは高校生なので、スマホに特化したデザインになりました。スマホ特化のデザインはPC時に生じる余白への対応を考えさせられます。今回は、ページ内のアンカーを設置しました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      "スマホ特化デザインのPC表示時の余白への対応検討",
    ],
  },
  {
    title: "私立大学様 広報誌WEBサイト",
    date: "2023-07-05",
    summary:
      "私立大学様の広報誌のWeb展開サイトです。自社製CMSを利用した表示関係を担当しました（記事一覧、ランキング等）。ランキング箇所は、アナリティクスからCSV作成し、ページのビュー数順で並び替えを行うことで実装しています。",
    tech: ["HTML・CSS","JavaScript","PHP","自社製CMS"],
    url: "",
    skills: [
      "アナリティクスのCSVをもとにした閲覧数順ランキングの実装",
    ],
  },
  {
    title: "私立大学様 TOPページリニューアル",
    date: "2023-09-04",
    summary:
      "私立大学様のTOPページのリニューアルです。下層ページはそのままでTOPページのみイメージの刷新を行いました。自社製CMSを利用した表示を担当しましたが、現行のよく使っている自社製CMSとバージョンが異なり、このバージョン独自の機能を調べなおしました。",
    tech: ["HTML・CSS","JavaScript","PHP","自社製CMS"],
    url: "",
    skills: [
      "バージョンの異なる自社製CMSの仕様調査と対応",
    ],
  },
  {
    title: "医療系専門学校様 ブログサイトリニューアル",
    date: "2023-09-04",
    summary:
      "医療系専門学校様 公式サイト内のブログページのリニューアルです。MovableTypeで静的な表示を行っておりましたが、タブの切り替えなど動的表示をできるようにしました。",
    tech: ["HTML・CSS","JavaScript","PHP","MovableType"],
    url: "",
    skills: [
      "MovableTypeで構築された静的ページへの動的表示（タブ切り替えなど）の追加",
    ],
  },
  {
    title: "私立大学様 情報センターサイト",
    date: "2023-11-06",
    summary:
      "私立大学様 情報センターサイトのリニューアル案件です。自社製CMSのカレンダー機能を利用し、施設のオープンアワーなどをサイト上に表示できるようにしました。",
    tech: ["HTML・CSS","JavaScript","PHP","自社製CMS"],
    url: "",
    skills: [
      "自社製CMSのカレンダー機能を使った開館時間などの表示",
    ],
  },
  {
    title: "医療系私立大学様 トップページリニューアル",
    date: "2024-04-11",
    summary:
      "大学側からWebアクセシビリティの対応強化が求められ、トップページのリニューアルを行いました。コントラスト比やalt画像属性など、チェッカーツールで「問題あり」がゼロになるよう、制作を進めました。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      "Webアクセシビリティ対応（コントラスト比・alt属性など）",
      "チェッカーツールを利用したアクセシビリティ改善",
    ],
  },
  {
    title: "私立大学様 大学独自プログラムLP",
    date: "2024-04-15",
    summary:
      "高校生が大学のゼミに参加できるという大学独自のプログラムのLPです。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [],
  },
  {
    title: "私立大学附属高等学校様 公式サイトリニューアル（＋新規LP制作）",
    date: "2024-05-15",
    summary:
      "私立大学附属高等学校様の公式サイトです。スマホレイアウトのみのサイトで、完全CMS化しており、ほぼすべてのテキストをお客様側で修正可能になっています。背景動画の再生・停止の状態をセッションに持たせたり、画像の圧縮に気を付けたり、アクセス時の処理時間を落とすように工夫をしています。",
    tech: ["HTML・CSS","JavaScript","PHP","自社製CMS"],
    url: "",
    skills: [
      "背景動画の再生・停止状態のセッション管理",
    ],
  },
  {
    title: "私立大学様 理系学部研究室サイト",
    date: "2024-08-09",
    summary:
      "私立大学様 理系学部研究室サイトです。大学の先生がFTPを触るという条件もあり、他の先生の研究室を触れないようにするなど、運用のために.ftpaccessが入っています。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "",
    skills: [
      ".ftpaccessによるFTPのアクセス制限設定",
      "複数の担当者がFTPで更新する運用を見据えた設計",
    ],
  },
  {
    title: "私立大学様 100周年サイト",
    date: "2024-08-09",
    summary:
      "私立大学様100周年サイトのページです。大学様案件は、周年でサイトを作ることが多いです。他のメンバーが作成したサイトにMovableTypeの実装を行いました。",
    tech: ["HTML・CSS","MovableType"],
    url: "",
    skills: [],
  },
  {
    title: "予備校様 新校舎 LP制作",
    date: "2024-09-02",
    summary:
      "予備校様の新校舎の紹介LPです。WordPressにてお知らせの更新を行えます。",
    tech: ["HTML・CSS","JavaScript","PHP","WordPress"],
    url: "",
    skills: [],
  },
  {
    title: "短期大学様 サイトリニューアル",
    date: "2024-12-01",
    summary:
      "トップのみのリニューアルから始まり、その後全ページ新しくしたいと動き出した案件でした。想像以上に長期での制作となってしまいました。CMSはもともと組み込まれていたものを活かし、表示項目の拡張など細かな修正のみを行いました。",
    tech: ["HTML・CSS","JavaScript","PHP","自社製CMS"],
    url: "",
    skills: [
      "既存CMSを活かした表示項目の拡張・改修",
      "トップから全ページへ段階的に進める長期リニューアルへの対応",
    ],
  },
  {
    title: "建築系企業様 採用サイト",
    date: "2025-03-11",
    summary:
      "コーポレートサイト配下にあった採用情報でしたが、採用サイトとして独立した形になりました。初めて他メンバーにCMSの仕様を考えてもらい、その仕様に沿って自分が構築する形を取りました。自分より入社歴が浅く、WordPressの知識がない中、声をかけあい先方の希望を実装できたと思います。",
    tech: ["HTML・CSS","JavaScript","PHP","WordPress"],
    url: "",
    skills: [
      "他メンバーが設計したCMS仕様に沿ったWordPress構築",
      "後輩メンバーと連携して進める制作進行",
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
    pickup: true,
    skills: [
      "図書館向けAPIとの連携（開館時間・新着図書の管理）",
      "公式マニュアルから未経験APIの仕様を読み解く力",
      "CMS構築",
    ],
  },
  {
    title: "大学発組織 公式サイト制作",
    date: "2025-12-01",
    summary:
      "「大学の研究で得たノウハウを社会実装する機関」の公式サイトです。お知らせ箇所のみ対応を行いました。",
    tech: ["PHP","WordPress"],
    url: "",
    skills: [],
  },
  {
    title: "私立大学様 入試併願プラン診断LP",
    date: "2026-01-30",
    summary:
      "私立大学様の入試プラン診断を行えるLPです。\nコーディング業務を担当しました。JSONで結果データを所持し、JSで動的に取得しております。スマートフォン向けのレイアウトやドット絵の楽しそうな雰囲気など、学生の利用を強く意識したサイトになっています。",
    tech: ["HTML・CSS","JavaScript","PHP"],
    url: "https://www.daito.ac.jp/cross/admissions/multi_application/",
    image: "/works/20260130_lp.jpg",
    pickup: true,
    skills: [
      "JSONで持たせたデータをJavaScriptで動的に表示する実装",
      "学生の利用を意識したスマートフォン向けレイアウト",
    ],
  },
]

/**
 * 個人開発の実績。カードは WORKS の PERSONAL に、詳細は /works/[slug] に表示
 * slug: 詳細ページの URL（/works/xxx）。半角英数字とハイフンで指定。
 * repo: GitHub リポジトリの URL（任意）。
 * sections: 詳細ページの本文。heading が見出し、body は 1 要素 = 1 段落。いくつでも追加できます。
 * sections[].prompt: 本文の下に、スクロールできる枠で表示する長文（プロンプトなど）（任意）。
 */
export type WorkDetailSection = {
  heading: string
  body: string[]
  prompt?: { label: string; text: string }
}

export type PersonalWork = Work & {
  slug: string
  repo?: string
  sections: WorkDetailSection[]
}

export const personalWorks: PersonalWork[] = [
  {
    slug: "portfolio",
    title: "ポートフォリオサイト（本サイト）",
    date: "2026-10-04",
    summary:
      "いまご覧いただいているポートフォリオサイトです。業務ではまだ経験の少ない React / Next.js / TypeScript を、実際に使って学ぶことも目的に制作しました。",
    tech: ["Next.js", "React", "TypeScript", "CSS Modules", "Vercel"],
    url: "https://portfolio-chi-umber-mf0ed3vy0q.vercel.app/",
    image: "/works/portfolio.jpg",
    repo: "https://github.com/minor118/portfolio",
    sections: [
      {
        heading: "制作の背景",
        body: [
          "普段の業務では HTML / CSS / JavaScript / PHP / WordPress を中心に、サイト制作・CMS構築・保守を行っています。",
          "自己紹介・スキル・経歴・制作実績をまとめる場所を作るにあたり、業務ではまだ経験の少ない React / Next.js / TypeScript を実際に使って学ぶことも目的にしました。",
        ],
      },
      {
        heading: "工夫した点",
        body: [
          "経歴・スキル・制作実績などのテキストはすべて1つのデータファイルにまとめ、型定義を付けています。実績を追加するときはデータを1件足すだけで画面に反映されます。",
          "ブラウン管テレビをモチーフに、初回アクセス時だけテレビの電源を入れたような起動演出を再生しています。ページ移動では再生されないように制御しています。",
          "スクロールに合わせた表示アニメーションは IntersectionObserver で要素が画面に入ったタイミングを検知し再生しています。",
        ],
      },
      {
        heading: "AIツールの活用",
        body: [
          "v0 でサイトの土台（Next.js プロジェクトの雛形・初期デザイン）を生成し、Claude Code を併用しながら、ページ構成・デザイン・アニメーション・コンテンツを自分で調整しました。",
          "AIが出力したコードはそのまま使うのではなく、内容を読んで理解したうえで修正・取捨選択しています。AIを使いこなしながら新しい技術をキャッチアップすることも、今回の目的の一つです。",
          "下記が最初に v0 に入力したプロンプトです。生成された土台をもとに、構成やスタイルの書き方などを調整して現在の形にしています。",
          "具体的なゲーム名をプロンプトに含んだのは、自身のUIへの関心のルーツとなったゲームだからです。",
        ],
        prompt: { label: "v0 に入力したプロンプト", text: portfolioPrompt },
      },
    ],
  },
  {
    slug: "kpop-cross",
    title: "CROSS - K-POP Schedule",
    date: "2026-05-01",
    image: "/works/kpop_cross.jpg",
    summary:
      "K-POPファン向けのスケジュール管理サイト。お気に入りのアーティストのコンサート・放送・リリース・イベント・誕生日を、タイムラインとカレンダーでまとめて確認できます。",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel","Claude Code","GitHub Actions"],
    url: "https://www.kpop-cross.net/",
    sections: [
      {
        heading: "制作の背景",
        body: [
          "K-POPアーティストのスケジュールは、公式サイト・SNS・ファンコミュニティなど情報源が分かれており、複数のグループを追っていると予定を把握しづらいと感じていました。",
          "お気に入りのアーティストの予定だけを一か所でまとめて確認できるサイトを、企画から公開まで個人で制作しました。",
          "最終目標はユーザーが毎日アクセスし、推し活の日常に溶け込むようなサイトになることです。",
        ],
      },
      {
        heading: "主な機能",
        body: [
          "コンサート・放送・リリース・イベント・誕生日の5カテゴリのスケジュールを掲載し、カテゴリボタンで絞り込みができます。現在は11組のグループに対応しています。",
          "アーティストをお気に入り登録すると、そのアーティストのスケジュールだけが表示されます。表示はタイムライン形式とカレンダー形式を切り替えられます。",
          "スケジュールをタップすると会場・時間・関連リンクなどの詳細を確認でき、リリース情報からは収録曲・MV・などのディスコグラフィー、メンバーのプロフィールにも進めます。お気に入りのアーティストの新曲リリースやメンバーの誕生日はお知らせとして通知されます。",
        ],
      },
      {
        heading: "工夫した点",
        body: [
          "Claude CodeとGitHub Actionsを組み合わせ、毎日自動でスケジュールデータを取得します。ただし正確性を担保したいため、承認は手作業で行っています。",
          "同様のサービスは国外に多数あります。本サイトでは「日本人向け」「ビジュアル重視」で差別化を狙っています。「ビジュアル」を重視したい理由は今後ネット検索はAIに置き換わる可能性があり、ただ文字情報をまとめるだけではわざわざアクセスする理由にならないと考えているためです。",
        ],
      },
      {
        heading: "苦労した点",
        body: [
          "正確な情報を提供するため、自身ですべての情報を確認しています（スケジュール、プロフィール、MVなど）。早急なリリースを行い、ユーザーの反応を見たいのですが、MVの設定など自身が情報として満足できる状態にするまでに労力がかかっている点です。",
        ],
      },
      {
        heading: "今後の課題",
        body: [
          "対応グループの追加",
          "情報取得の正確性の担保",
          "UI改善（プロフィールページのタブ切り替え、スケジュールの詳細ページをモーダルに変更などを検討中）",
          "ユーザーの流入経路の確保（まずはnoteからを検討中）",          
        ],
      },
    ],
  },
]
