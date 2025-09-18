# シンプルなCRUDウェブアプリ

AWS課題

## ビルド
### セットアップ
WebとDBのインスタンスでこのレポジトリをclone
```
git clone https://github.com/shika-n/yosida-simple-crud
cd yosida-simple-crud
```

### Webビルド
Webのインスタンスでウェブアプリのコンテナーをビルド
```
docker compose build web
```

### データベースのセットアップ
`docker-compose.yml`に2つの環境関数があって`MYSQL_USER`と`MYSQL_PASSWORD`

その2つの環境を設定し[DB実行](#DB)のセクションに続いてください

## 実行
### Web
Webのインスタンスで
```
docker compose up web -d
```

### DB
ダミーデータが3つ入ってます。`dbSeed.sql`ファイルの中身を確認してください。

DBのインスタンスで
```
docker compose up mysql -d
```
