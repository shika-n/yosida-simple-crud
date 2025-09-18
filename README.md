# シンプルなCRUDウェブアプリ

AWS課題

## インフラ図
![Infra](images/aws_rk_infra.png)

## セットアップ
WebとDBのインスタンスでこのレポジトリをclone
```
git clone https://github.com/shika-n/yosida-simple-crud
cd yosida-simple-crud
```

### Webのセットアップ
#### AWSのアクセスキー
AWSのSSM (Parameter Store)を使うので`~/.aws/credentials`のファイルが必要
関数は：
| 関数名 | 暗号化 |
| --- | :---: |
| /rk/prod/mysql/host | :x: |
| /rk/prod/mysql/dbuser | :x:  |
| /rk/prod/mysql/dbpass | :white_check_mark: |

> [!NOTE]
> `src/lib/db.ts`を確認してください。

### データベースのセットアップ
#### データベースのユーザー設定
`docker-compose.yml`に2つの環境関数があって`MYSQL_USER`と`MYSQL_PASSWORD`

> [!TIP]
> - 一回実行したら、その2つの関数の値を消しても大丈夫です。
> - 最初の実行後、データベースのデータは`dbdata`のフォルダーに保存されます。

#### データシード
ダミーデータが3つ入ってます。`dbSeed.sql`ファイルの中身を確認してください。
> [!NOTE]
> データのインポートは不要です

## ビルド
Webのインスタンスでウェブアプリのコンテナーをビルド
```
docker compose build web
```
DBサーバー上ではビルドの必要はないです。

## 実行
### Web
Webのインスタンスで
```
docker compose up web -d
```

### DB
DBのインスタンスで
```
docker compose up mysql -d
```
