-- 创建test数据库
CREATE DATABASE IF NOT EXISTS test;

-- 使用test数据库
USE test;

-- 创建page表（低代码生成的页面）
CREATE TABLE IF NOT EXISTS page (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '页面ID',
  name VARCHAR(100) NOT NULL UNIQUE COMMENT '页面名称',
  title VARCHAR(200) NOT NULL COMMENT '页面标题',
  content JSON NOT NULL COMMENT '页面内容（低代码配置）',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft' COMMENT '页面状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='低代码生成的页面表';

-- 插入测试数据
INSERT INTO page (name, title, content, status) VALUES
(
  'home_page',
  '首页',
  '{"layout": "flex", "components": [{"type": "header", "props": {"title": "欢迎来到低代码平台"}}, {"type": "carousel", "props": {"images": ["img1.jpg", "img2.jpg"]}}, {"type": "footer", "props": {"copyright": "© 2023 低代码平台"}}]}',
  'published'
),
(
  'about_page',
  '关于我们',
  '{"layout": "grid", "components": [{"type": "heading", "props": {"text": "关于我们"}}, {"type": "paragraph", "props": {"text": "我们是一家专注于低代码开发平台的公司"}}, {"type": "team", "props": {"members": [{"name": "张三", "role": "创始人"}, {"name": "李四", "role": "技术总监"}]}}]}',
  'draft'
);

-- 查询插入的页面数据
SELECT * FROM page;