const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { connectDB } = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');

// 加载环境变量
dotenv.config();

// 连接数据库
connectDB();

const app = express();

// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

// 日志中间件
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 路由
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/dormitories', require('./routes/dormitoryRoutes'));
app.use('/api/preferences', require('./routes/preferenceRoutes'));
app.use('/api/allocation', require('./routes/allocationRoutes'));
app.use('/api/rules', require('./routes/ruleRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// 静态文件服务
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../design/prototypes')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../design/prototypes', 'index.html'));
  });
}

// 错误处理中间件
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`服务器在${process.env.NODE_ENV}模式下运行，端口: ${PORT}`);
});

// 处理未捕获的异常
process.on('unhandledRejection', (err, promise) => {
  console.log(`错误: ${err.message}`);
  // 关闭服务器并退出进程
  // server.close(() => process.exit(1));
});