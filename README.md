# 偽天気予報 | Fake Weather

ランダムな偽の天気予報を表示するジョークPWAアプリです。

🔗 **Demo**: [https://kwrkb.github.io/fake-weather/](https://kwrkb.github.io/fake-weather/)

![偽天気予報スクリーンショット](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa)

## 特徴

- 🎲 タップするたびにランダムな天気を表示
- 📍 位置情報を取得して現在地を表示（許可時のみ）
- 📱 PWA対応 - ホーム画面に追加してアプリとして使用可能
- 🌐 オフライン対応
- 🎨 天気に応じた美しいグラデーション背景

## 天気パターン

| 天気 | アイコン | 気温範囲 |
|------|---------|----------|
| 快晴 | ☀️ | 25〜38°C |
| 晴れ | 🌤️ | 20〜30°C |
| 曇り | ☁️ | 10〜25°C |
| 雨 | 🌧️ | 10〜22°C |
| 雪 | ❄️ | -10〜5°C |
| 雷雨 | ⛈️ | 15〜28°C |
| 霧 | 🌫️ | 5〜18°C |
| 猛暑 | 🥵 | 35〜45°C |
| 極寒 | 🥶 | -30〜-10°C |

## インストール方法

### Android
1. Chromeで[デモサイト](https://kwrkb.github.io/fake-weather/)を開く
2. メニュー（︙）→「ホーム画面に追加」または「アプリをインストール」

### iOS
1. Safariで[デモサイト](https://kwrkb.github.io/fake-weather/)を開く
2. 共有ボタン → 「ホーム画面に追加」

## 技術スタック

- HTML / CSS / JavaScript
- Tailwind CSS（CDN）
- Noto Sans JP（Google Fonts）
- Service Worker（オフライン対応）
- OpenStreetMap Nominatim API（逆ジオコーディング）

## ファイル構成

```
fake-weather/
├── index.html      # メインページ
├── manifest.json   # PWAマニフェスト
├── sw.js           # Service Worker
├── icon-192.png    # アプリアイコン (192x192)
├── icon-512.png    # アプリアイコン (512x512)
└── README.md
```

## ライセンス

MIT

---

⚠️ **注意**: これはジョークアプリです。表示される天気情報は完全にランダムであり、実際の天気とは一切関係ありません。
