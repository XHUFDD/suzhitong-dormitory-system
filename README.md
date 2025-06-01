# 智宿通 - 新生宿舍智能分配系统

一个现代化的新生宿舍智能分配系统，帮助高校自动化管理新生宿舍分配流程。

## 项目概述

智宿通是一个全栈Web应用程序，包含管理员端和学生端功能：

- **管理员端**: 宿舍管理、学生管理、分配规则设置、自动分配、统计分析等
- **学生端**: 偏好设置、分配结果查询等

## 技术栈

### 前端
- React 18.x
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

### 后端
- Node.js
- Express.js
- SQLite3
- JWT认证
- bcrypt密码加密

## 项目结构

```
your_project/
├── frontend/suzhitong/     # React前端应用
│   ├── src/
│   │   ├── components/     # 可复用组件
│   │   ├── pages/         # 页面组件
│   │   ├── api/           # API服务
│   │   ├── types/         # TypeScript类型定义
│   │   └── utils/         # 工具函数
│   ├── public/            # 静态资源
│   └── package.json
├── backend/               # Node.js后端API
│   ├── src/
│   │   ├── controllers/   # 控制器
│   │   ├── models/        # 数据模型
│   │   ├── routes/        # 路由定义
│   │   ├── middlewares/   # 中间件
│   │   ├── services/      # 业务逻辑服务
│   │   └── utils/         # 工具函数
│   └── package.json
├── design/                # 设计原型和规范
├── docs/                  # 项目文档
└── README.md
```

## 快速开始

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn

### 安装和运行

1. **克隆项目**
   ```bash
   git clone https://github.com/XHUFDD/suzhitong-dormitory-system.git
   cd suzhitong-dormitory-system
   ```

2. **安装后端依赖并启动**
   ```bash
   cd backend
   npm install
   cp .env.example .env  # 复制并配置环境变量
   npm run dev
   ```
   后端服务将在 http://localhost:5001 启动

3. **安装前端依赖并启动**
   ```bash
   cd frontend/suzhitong
   npm install
   npm run dev
   ```
   前端应用将在 http://localhost:5174 启动

### 默认账户

**管理员账户:**
- 用户名: `admin`
- 密码: `admin123`

## 主要功能

### 管理员功能
- 🏠 宿舍管理：宿舍楼、房间信息管理
- 👥 学生管理：学生信息导入、编辑、删除
- ⚙️ 分配规则：设置自动分配的规则和权重
- 🤖 自动分配：基于规则的智能宿舍分配
- 📊 统计分析：分配结果统计和数据分析
- 🔐 权限管理：管理员权限控制
- 📝 系统日志：操作记录和审计

### 学生功能
- 📝 偏好设置：设置宿舍偏好和室友偏好
- 🔍 结果查询：查看分配结果

## API文档

后端API遵循RESTful设计原则，主要端点包括：

- `POST /api/auth/admin/login` - 管理员登录
- `GET /api/students` - 获取学生列表
- `POST /api/students` - 创建学生
- `GET /api/dormitories` - 获取宿舍列表
- `POST /api/allocation/auto` - 执行自动分配

详细API文档请参考后端代码中的路由定义。

## 开发指南

### 代码规范
- 使用TypeScript进行类型安全开发
- 遵循ESLint配置的代码规范
- 组件采用函数式组件 + Hooks模式
- API调用统一使用axios服务

### 数据库
项目使用SQLite3作为数据库，数据库文件位于 `backend/database.sqlite`

### 环境配置
后端环境变量配置（.env文件）：
```
PORT=5001
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:5174
DB_PATH=./database.sqlite
```

## 部署

### 生产环境构建

1. **构建前端**
   ```bash
   cd frontend/suzhitong
   npm run build
   ```

2. **配置后端生产环境**
   - 更新.env文件中的生产环境配置
   - 确保数据库路径正确
   - 配置CORS_ORIGIN为生产域名

### Docker部署（可选）

项目支持Docker容器化部署，可以创建Dockerfile和docker-compose.yml进行容器化部署。

## 贡献

欢迎提交Issue和Pull Request来改进项目。

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过Issue联系我们。