# 偽天気予報 | Fake Weather

ランダムな偽の天気予報を表示するジョークPWAアプリです。

🔗 **Demo**: [https://kwrkb.github.io/fake-weather/](https://kwrkb.github.io/fake-weather/)

![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa)

## 特徴

- 🎲 タップするたびにランダムな天気を表示
- 📍 位置情報を取得して現在地を表示（許可時のみ）
- 📱 PWA対応 - ホーム画面に追加してアプリとして使用可能
- 🌐 オフライン対応
- 🎨 天気に応じた美しいグラデーション背景
- ✨ フルスクリーン没入型エフェクト（雨・雪・雷・霧など）
- 🖼️ Lucideアイコンによるモダンなデザイン

## 天気パターン

| 天気 | Lucideアイコン | 気温範囲 | エフェクト |
|------|---------------|----------|-----------|
| 快晴 | sun | 25〜38°C | 太陽光線回転 |
| 晴れ | cloud-sun | 20〜30°C | 太陽光線 + 雲 |
| 曇り | cloud | 10〜25°C | 浮遊する雲 |
| 雨 | cloud-rain | 10〜22°C | 雨粒アニメーション |
| 雪 | snowflake | -10〜5°C | 雪降りエフェクト |
| 雷雨 | cloud-lightning | 15〜28°C | 雨 + 雷フラッシュ |
| 霧 | cloud-fog | 5〜18°C | 霧の浮遊エフェクト |
| 猛暑 | thermometer-sun | 35〜45°C | 陽炎パーティクル |
| 極寒 | thermometer-snowflake | -30〜-10°C | ダイヤモンドダスト |

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
- Lucide Icons（SVGアイコン）
- Noto Sans JP（Google Fonts）
- Canvas API（天気エフェクト描画）
- Web Animations API（CSSアニメーション）
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
