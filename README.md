# Local History Explorer

## Mục lục
- [Giới thiệu](#giới-thiệu)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Cài đặt & Chạy dự án](#cài-đặt--chạy-dự-án)
- [Cấu hình MongoDB Atlas](#cấu-hình-mongodb-atlas)
- [Scripts](#scripts)
- [Liên hệ](#liên-hệ)

---

## Giới thiệu
Local History Explorer là dự án fullstack gồm:
- **Frontend:** Next.js + Tailwind CSS
- **Backend:** NestJS (Node.js) + MongoDB Atlas

## Cấu trúc dự án
```
Local_History_Explorer/
├── frontend/   # Next.js + Tailwind CSS
├── backend/    # NestJS + MongoDB
└── README.md
```

## Cài đặt & Chạy dự án
### 1. Clone repo
```bash
git clone <repo-url>
cd Local_History_Explorer
```

### 2. Cài đặt dependencies
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Cấu hình MongoDB Atlas
- Đăng ký tài khoản tại https://www.mongodb.com/cloud/atlas
- Tạo cluster, user, database
- Lấy connection string và cập nhật vào `backend/src/app.module.ts`:
	```ts
	MongooseModule.forRoot('mongodb+srv://<user>:<pass>@<cluster-url>/<dbName>?retryWrites=true&w=majority')
	```

### 4. Chạy dự án
#### Backend
```bash
cd backend
npm run start
```
#### Frontend (dev)
```bash
cd frontend
npm run dev
```
#### Frontend (production)
```bash
cd frontend
npm run build
npm run start
```

## Scripts
### Backend
- `npm run start` — Chạy NestJS
- `npm run start:dev` — Chạy NestJS chế độ dev

### Frontend
- `npm run dev` — Chạy Next.js chế độ dev
- `npm run build` — Build production
- `npm run start` — Chạy production

## Liên hệ
- Tác giả: Nhannn277
- Email: nhannt2.21it@vku.udn.vn>
# Local_History_Explorer
