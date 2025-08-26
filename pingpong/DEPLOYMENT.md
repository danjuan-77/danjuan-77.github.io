# 🚀 GitHub Pages 部署指南

## 快速部署步骤

### 1. 准备GitHub仓库

```bash
# 初始化git仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "🎉 feat: 初始化乒乓球积分榜项目

- ✨ 实现ELO评分算法
- 🎨 现代化响应式UI设计  
- 📱 支持移动端和桌面端
- 💾 本地数据存储
- 🏓 完整的比赛记录和排名功能"

# 创建GitHub仓库并推送
# (在GitHub上创建名为 Project05-PingPong 的仓库)
git remote add origin https://github.com/YOUR_USERNAME/Project05-PingPong.git
git branch -M main
git push -u origin main
```

### 2. 启用GitHub Pages

1. 打开你的GitHub仓库页面
2. 点击 **Settings** 标签
3. 滚动到 **Pages** 部分
4. 在 **Source** 下选择 **Deploy from a branch**
5. 选择 **main** 分支
6. 选择 **/ (root)** 文件夹
7. 点击 **Save**

### 3. 访问你的网站

等待1-2分钟后，你的网站将在以下地址可用：
```
https://YOUR_USERNAME.github.io/Project05-PingPong
```

## 🔧 自定义配置

### 更新网站标题和描述

编辑 `_config.yml` 文件：

```yaml
title: "你的乒乓球俱乐部积分榜"
description: "俱乐部内部积分榜系统"
url: "https://YOUR_USERNAME.github.io"
baseurl: "/Project05-PingPong"
```

### 自定义域名（可选）

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入你的域名，例如：`pingpong.yourdomain.com`
3. 在你的域名提供商处设置CNAME记录指向 `YOUR_USERNAME.github.io`

## 📱 使用说明

### 初始数据

网站包含示例数据，你可以：
1. 清空浏览器localStorage开始全新记录
2. 或者直接在现有数据基础上添加新比赛

### 数据管理

所有数据存储在浏览器的localStorage中：
- 数据不会丢失（除非手动清除浏览器数据）
- 每个设备/浏览器的数据是独立的
- 可以通过开发者工具导出/导入数据

### 备份数据

为了防止数据丢失，建议定期备份：

```javascript
// 在浏览器控制台运行以下代码导出数据
const data = localStorage.getItem('pingpong-matches');
console.log(data);
// 复制输出的JSON字符串保存到文件
```

```javascript
// 导入数据
const data = '你的JSON数据字符串';
localStorage.setItem('pingpong-matches', data);
location.reload();
```

## 🎨 个性化定制

### 修改主题色

编辑 `styles.css` 中的渐变色：

```css
/* 主渐变色 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 按钮渐变色 */
background: linear-gradient(135deg, #667eea, #764ba2);
```

### 添加新功能

主要文件说明：
- `index.html`: 页面结构
- `styles.css`: 样式和主题
- `script.js`: 所有功能逻辑
- `README.md`: 项目说明

## 🐛 常见问题

### Q: 网站无法访问
A: 检查GitHub Pages设置，确保选择了正确的分支和文件夹

### Q: 样式显示异常
A: 检查浏览器是否缓存了旧版本，尝试强制刷新（Ctrl+F5）

### Q: 数据丢失了
A: 检查是否清理了浏览器数据，数据存储在localStorage中

### Q: 移动端显示问题
A: 网站已优化响应式设计，如有问题请检查viewport设置

## 📞 技术支持

如有问题，请在GitHub仓库中创建Issue，我们会及时回复！

---

祝你使用愉快！🏓
