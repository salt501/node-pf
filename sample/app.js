/**
 * /app.js
 */ 
// express モジュールのインスタンス作成
const express = require(`express`);
const app = express();
// パス指定用モジュール
const path = require(`path`);

// 8080番ポートで待ち受ける
app.listen(8080, () => {
  console.log(`Running at Port 8080...`);
});

// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, `public`)));

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});

// 第一引数→該当のサイトパス、第二引数→ミドルウェア　を渡す
app.use(`/fuga/piyo`, express.static(path.join(__dirname, `noi`)));