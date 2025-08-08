-- 使用test数据库
USE test;

-- 删除旧的user表
DROP TABLE IF EXISTS user;

-- 创建新的user表，使用随机字符串作为id
CREATE TABLE IF NOT EXISTS user (
  id VARCHAR(36) PRIMARY KEY COMMENT '用户ID (随机字符串)',
  username VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
  password VARCHAR(255) NOT NULL COMMENT '密码（加密存储）',
  email VARCHAR(100) UNIQUE COMMENT '电子邮箱',
  phone VARCHAR(20) COMMENT '电话号码',
  role ENUM('admin', 'editor', 'user') DEFAULT 'user' COMMENT '用户角色',
  status ENUM('active', 'inactive', 'deleted') DEFAULT 'active' COMMENT '账号状态',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  disabled BOOLEAN DEFAULT FALSE COMMENT '是否禁用',
  -- GitHub认证相关字段
  github_id INT UNIQUE COMMENT 'GitHub用户ID',
  github_login VARCHAR(50) UNIQUE COMMENT 'GitHub用户名',
  github_info JSON COMMENT 'GitHub用户信息'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- 创建触发器，自动生成UUID作为id
DELIMITER $$
CREATE TRIGGER before_user_insert
BEFORE INSERT ON user
FOR EACH ROW
BEGIN
  IF NEW.id IS NULL OR NEW.id = '' THEN
    SET NEW.id = UUID();
  END IF;
END$$
DELIMITER ;

-- 插入测试数据（不指定id，让触发器自动生成）
INSERT INTO user (username, password, email, phone, role, status) VALUES
(
  'admin',
  '$2a$10$EixZaYcWlSIIuKZs6N0fI.6Q6Q266cK.3kO6D4RQrP4wF5uM8X6K6', -- 密码: admin123
  'admin@example.com',
  '13800138000',
  'admin',
  'active'
),
(
  'editor',
  '$2a$10$EixZaYcWlSIIuKZs6N0fI.6Q6Q266cK.3kO6D4RQrP4wF5uM8X6K6', -- 密码: editor123
  'editor@example.com',
  '13900139000',
  'editor',
  'active'
),
(
  'user1',
  '$2a$10$EixZaYcWlSIIuKZs6N0fI.6Q6Q266cK.3kO6D4RQrP4wF5uM8X6K6', -- 密码: user123
  'user1@example.com',
  '13700137000',
  'user',
  'active'
);

-- 查询插入的用户数据
SELECT id, username, email, phone, role, status, created_at FROM user;