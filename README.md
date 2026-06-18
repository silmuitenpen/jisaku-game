# Science Olympiad Scenario Learning Game

教材PDFから、ローカルで動く科学オリンピック青春シナリオゲームを生成するプロジェクトです。

主目的は、普通のクイズアプリを作ることではありません。

プレイヤーが「続きの物語を読みたい」と思い、そのためにPDF由来の問題を解き、結果として学習時間が増えることを狙います。

## Setup

Place the source PDF at:

```
source/textbook.pdf
```

Then ask Codex to read:

```
spec.md
docs/workflow.md
```

Recommended mode:

```
review_mode: true
spoiler_mode: safe
```

Generated game will appear under:

```
generated/
```

Open:

```
generated/index.html
```

## Spoiler Policy

Spoiler-safe reports are under:

```
generated/data/public-review/
```

Spoiler-heavy artifacts are under:

```
generated/data/sealed/
```

Do not open `generated/data/sealed/` unless you want story spoilers.

`generated/data/sealed/` is intentionally tracked by Git.
