## 概要
* webpackのテスト
* `assets/app.js`をビルドして`static/js/app.min.js`に圧縮したファイルを生成
* `assets`内のjsファイルをバンドル、scssファイルをcssにコンパイルしてjsと一緒にバンドルする

## コマンド
### webpack
* ビルドする
* 該当ファイルに変更があれば自動でビルドされる
* 本番用にビルドされる

### npm run start
* webpack-dev-server --hot --watch-content-baseを実行する
* ブラウザが自動で開き、該当ファイルに変更があればブラウザに反映される
* ビルドはされないので後でwebpackコマンドを叩く必要がある
