# Todo App (Angular + Rails API + Postgres)

## 概要
- フロントエンド: `frontend/` にある Angular アプリ
- バックエンド: `backend/` にある Rails API
- データベース: Postgres

## Docker で起動
```bash
docker compose up --build
```

アクセス先:
- フロントエンド: http://localhost:4200
- バックエンド API: http://localhost:3000/todos

## ローカル起動 (Docker なし)
バックエンド:
```bash
cd backend
bundle install
rails db:create db:migrate
rails s -p 3000
```

フロントエンド:
```bash
cd frontend
npm install
npm start
```

## 環境別 API の切り替え
Angular は以下の環境ファイルを使います:
- `frontend/src/environments/environment.development.ts` (ローカル)
- `frontend/src/environments/environment.staging.ts` (stg)
- `frontend/src/environments/environment.ts` (本番)

ビルド例:
```bash
cd frontend
ng build --configuration=staging
ng build --configuration=production
```

## バックエンド環境変数
- `POSTGRES_HOST`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`
- `CORS_ORIGINS` (カンマ区切り。既定は `http://localhost:4200`)
