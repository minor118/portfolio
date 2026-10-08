# PORTFOLIO | 河田 実（MINORU KAWATA）

Webエンジニア（フロントエンド〜CMS構築）河田 実のポートフォリオサイトです。

**公開URL：** https://portfolio-chi-umber-mf0ed3vy0q.vercel.app/

> 応募・面接用のサイトのため、検索エンジンにはインデックスさせない設定（`robots: noindex`）にしています。

---

## 概要

自己紹介・スキル・経歴・制作実績をまとめたサイトです。

普段の業務では HTML / CSS / JavaScript / PHP / WordPress を中心にサイト制作・CMS構築・保守を行っています。
このサイトは、業務ではまだ経験の少ない **React / Next.js / TypeScript** を実際に使って学ぶことも目的に制作しました。

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | TOP。ブラウン管テレビをモチーフにしたメインビジュアルと、各ページへの導線 |
| `/career` | 自己紹介・スキル（習熟度をレベル表示）・職務経歴 |
| `/works` | 制作実績。サムネイル・使用技術・その案件で得たスキルを掲載 |

## 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| フレームワーク | Next.js 16（App Router） / React 19 |
| 言語 | TypeScript |
| スタイリング | CSS Modules（コンポーネント単位でスタイルを管理） |
| ライブラリ | clsx（クラス名の結合） / lucide-react（アイコン） |
| ホスティング | Vercel（`main` ブランチへのマージで自動デプロイ） / Vercel Analytics |
| 開発環境 | pnpm / Dev Container（Docker） / Git・GitHub |

## 工夫したポイント

- **コンテンツとUIの分離**
  経歴・スキル・制作実績などのテキストはすべて `lib/portfolio-data.ts` にまとめ、型定義（`Career` / `Work` / `SkillGroup` など）を付けています。
  実績を追加するときは、このファイルにデータを1件足すだけで画面に反映されます。CMS構築の経験から「更新しやすい作り」を意識しました。
- **テレビの電源を入れたような起動演出**（`components/boot-overlay.tsx`）
  初回アクセス時だけ再生し、2回目以降のページ移動では再生しないように `data-booted` 属性で制御しています。
- **スクロールに合わせた表示アニメーション**（`components/reveal.tsx`）
  `IntersectionObserver` で要素が画面に入ったタイミングを検知し、1回だけフェードインさせています。
- **ページ遷移時のフェード**（`app/template.tsx`）
- **アクセシビリティへの配慮**
  `prefers-reduced-motion`（OSの「動きを減らす」設定）のユーザーにはアニメーションを抑える指定や、装飾要素への `aria-hidden` を入れています。

## AIツールの活用について

開発には AI ツールを活用しています。

1. **v0** でサイトの土台（Next.js プロジェクトの雛形・初期デザイン）を生成
2. **Claude Code** を併用しながら、ページ構成・デザイン・アニメーション・コンテンツを自分で調整

AI が出力したコードはそのまま使うのではなく、内容を読んで理解したうえで修正・取捨選択しています。
AI を使いこなしながら、新しい技術（React / Next.js）をキャッチアップすることも今回の目的の一つです。

## ディレクトリ構成

```
.
├── app/                  # ページ（App Router）
│   ├── page.tsx          # TOP
│   ├── career/page.tsx   # 自己紹介・経歴
│   ├── works/page.tsx    # 制作実績
│   ├── layout.tsx        # 共通レイアウト・フォント・メタ情報
│   └── template.tsx      # ページ遷移アニメーション
├── components/           # 各セクションのコンポーネント（*.tsx + *.module.css）
├── lib/
│   ├── portfolio-data.ts # サイトに表示するデータ（経歴・スキル・実績）
│   └── utils.ts
└── public/works/         # 制作実績のサムネイル画像
```

## ローカルでの起動方法

```bash
pnpm install
pnpm dev
```

ブラウザで http://localhost:3000 を開くと確認できます。

## 作者

河田 実（MINORU KAWATA）
GitHub: [minor118](https://github.com/minor118)
