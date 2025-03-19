# Image Search AI 助手

![Image Search Banner](https://img.shields.io/badge/Image%20Search-AI%20Assistant-blue?style=for-the-badge)

## 概述

Image Search 是一个基于 AI 的 Web 应用程序，允许用户使用自然语言上传、存储和搜索图像。系统使用先进的 AI 模型分析和理解图像内容，为每张上传的照片生成描述性文本。用户可以通过聊天界面与 AI 助手交互，根据图像的内容、上下文或其他属性查找特定图像。

## 功能特点

- **图像上传**：轻松上传并在系统中存储您的照片
- **AI 图像分析**：先进的 AI 模型自动分析和理解图像内容
- **自然语言描述**：为所有上传的图像生成人类可读的描述
- **对话式搜索**：通过与 AI 助手聊天，使用自然语言查找图像
- **多标准搜索**：按物体、人物、场景、颜色、情感等进行搜索
- **实时结果**：在您改进查询时获得即时搜索结果

## 工作原理

1. **上传图像**：用户通过直观的 Web 界面上传照片
2. **AI 处理**：系统使用 AI 视觉模型处理每张图像
3. **自动索引**：图像以详细描述和元数据进行索引
4. **对话式搜索**：用户提问或描述他们正在寻找的内容
5. **智能检索**：AI 助手找到并显示最相关的图像

## 应用场景

- **个人照片集合**：无需手动标记即可找到特定时刻
- **数字资产管理**：在大型收藏中快速定位特定图像
- **电子商务产品搜索**：根据视觉属性查找产品
- **内容创作**：根据上下文找到完美的图像
- **研究与分析**：定位包含特定元素或主题的图像

## 技术架构

Image Search 系统基于现代技术栈构建：

- **前端**：采用响应式设计的 React.js，适配所有设备
- **后端**：Node.js/Express.js API 服务器
- **数据库**：MongoDB 用于元数据和 PostgreSQL 用于用户数据
- **存储**：图像云存储（AWS S3 或类似服务）
- **AI 模型**：
  - 用于图像理解的视觉模型
  - 用于处理搜索查询的 NLP 模型
  - 用于语义搜索的嵌入模型

## 路线图

- [x] 初始存储库设置
- [x] 基本 Web 界面实现
- [ ] 图像上传和存储功能
- [ ] 与 AI 视觉模型集成
- [ ] 自然语言描述生成
- [ ] 对话式搜索界面
- [ ] 搜索算法优化
- [ ] 用户认证和个人收藏
- [ ] 移动响应式设计
- [ ] 性能优化
- [ ] 高级搜索过滤器

## 快速开始

### 前提条件

- Node.js（推荐 v14+，已测试 v22+）
- npm（推荐 v6+，已测试 v10+）或 yarn

### 安装和本地运行

#### Windows

```powershell
# 克隆存储库
git clone https://github.com/Tarzansz/image-search.git
cd image-search

# 安装依赖
npm install
# 或者如果使用 yarn
yarn install

# 启动开发服务器
npm start
# 或者
yarn start
```

#### macOS

```bash
# 克隆存储库
git clone https://github.com/Tarzansz/image-search.git
cd image-search

# 安装依赖
npm install
# 或者如果使用 yarn
yarn install

# 启动开发服务器
npm start
# 或者
yarn start
```

#### Ubuntu/Linux

```bash
# 克隆存储库
git clone https://github.com/Tarzansz/image-search.git
cd image-search

# 安装依赖
npm install
# 或者如果使用 yarn
yarn install

# 启动开发服务器
npm start
# 或者
yarn start
```

运行上述命令后，应用程序将在您的 Web 浏览器中的 `http://localhost:3000` 可用。大多数现代浏览器在服务器启动时会自动启动。

### 操作系统特定启动命令

如果浏览器没有自动打开，您可以使用以下命令：

- **Windows**：在 PowerShell 或命令提示符中使用 `start http://localhost:3000`
- **macOS**：在终端中使用 `open http://localhost:3000`
- **Ubuntu/Linux**：在终端中使用 `xdg-open http://localhost:3000`

### 验证 Web 界面

要验证 Web 界面是否正常工作，请按照以下步骤操作：

1. **启动应用程序**：
   - 运行 `npm start` 后，您的浏览器应自动打开至 `http://localhost:3000`
   - 如果没有，请手动打开浏览器并导航到该 URL

2. **检查 UI 组件**：
   - 您应该在顶部看到带有"Image Search AI"标志的标题
   - 左侧部分应显示图像上传界面
   - 右侧部分应显示带有欢迎消息的聊天界面

3. **测试图像上传**：
   - 将任何图像拖放到上传区域，或点击选择文件
   - 您应该看到上传的图像出现在上传器下方的画廊中
   - 在此演示中，AI 分析是模拟的，因此描述为占位符文本

4. **测试聊天界面**：
   - 在聊天输入框中输入消息（例如，"显示自然图像"）
   - 按回车键或单击发送按钮
   - 应用程序应该响应并在画廊中突出显示任何相关图像
   - 尝试各种查询来测试搜索功能

5. **验证响应式布局**：
   - 调整浏览器窗口大小，检查 UI 如何适应不同的屏幕尺寸
   - 在较小的屏幕上，各部分应垂直堆叠

## 故障排除指南

### 所有平台的常见问题

1. **Node.js 版本兼容性**：
   - 此应用程序需要 Node.js v14 或更高版本
   - 使用 `node -v` 验证您的版本
   - 如有需要，从 [nodejs.org](https://nodejs.org/) 更新 Node.js

2. **依赖安装失败**：
   - 尝试清除 npm 缓存：`npm cache clean --force`
   - 确保您有正常的互联网连接
   - 检查是否有任何代理或防火墙问题

3. **权限问题**：
   - 确保您有安装软件包的适当权限
   - 在基于 Unix 的系统上，除非必要，否则避免使用 `sudo npm install`

### Windows 特定问题

1. **应用程序无法启动**：
   - 确保您有正确的 Node.js 版本（使用 `node -v` 检查）
   - 检查终端中是否有任何错误消息
   - 确保没有其他服务使用端口 3000
   - 尝试以管理员身份运行 PowerShell

2. **端口已被使用**：
   - 运行 `netstat -ano | findstr :3000` 查找使用端口 3000 的进程
   - 使用 `taskkill /PID <PID> /F` 终止进程

3. **长路径问题**：
   - Windows 可能在 node_modules 中遇到长文件路径问题
   - 在 Windows 10+ 中启用长路径支持或使用更短的安装路径

### macOS 特定问题

1. **应用程序无法启动**：
   - 确保您有正确的 Node.js 版本（使用 `node -v` 检查）
   - 检查终端中是否有任何错误消息
   - 确保没有其他服务使用端口 3000

2. **端口已被使用**：
   - 运行 `lsof -i :3000` 查找使用端口 3000 的进程
   - 使用 `kill -9 <PID>` 终止进程

3. **权限问题**：
   - 如果看到 EACCES 错误，请修复 npm 权限：[npm 文档](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

### Ubuntu/Linux 特定问题

1. **应用程序无法启动**：
   - 确保您有正确的 Node.js 版本（使用 `node -v` 检查）
   - 检查终端中是否有任何错误消息
   - 确保没有其他服务使用端口 3000

2. **端口已被使用**：
   - 运行 `sudo netstat -tulpn | grep :3000` 查找使用端口 3000 的进程
   - 使用 `kill -9 <PID>` 终止进程

3. **浏览器不自动打开**：
   - 手动打开浏览器并导航到 `http://localhost:3000`
   - 或在终端中使用 `xdg-open http://localhost:3000`

4. **Node.js 安装问题**：
   - 考虑使用 NVM（Node 版本管理器）以便更轻松地管理 Node.js
   - 使用以下命令安装：`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`

### 应用程序特定问题

1. **图像无法上传**：
   - 检查浏览器控制台是否有任何 JavaScript 错误（F12 或右键单击 > 检查 > 控制台）
   - 确保您的图像符合要求（小于 5MB，常见图像格式）
   - 尝试使用不同的浏览器（Chrome、Firefox、Safari）

2. **聊天无响应**：
   - 这是一个前端演示，带有模拟 AI 响应
   - 确保您输入了文本并单击了发送按钮或按了回车键
   - 检查浏览器控制台是否有任何错误

3. **UI 渲染问题**：
   - 清除浏览器缓存并重新加载
   - 尝试禁用可能干扰的浏览器扩展
   - 将浏览器更新到最新版本

## 当前限制

此版本是带有模拟 AI 功能的前端原型：

- 图像分析实际上并未执行 - 描述是预定义的
- 图像仅存储在浏览器内存中，刷新后将消失
- 暂无后端存储或 API 集成
- 搜索结果基于简单文本匹配，而非实际 AI 理解

## 贡献

欢迎贡献！如果您想贡献：

1. Fork 存储库
2. 创建您的功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 创建 Pull Request

请确保您的代码遵循项目的编码标准并包含适当的测试。

## 许可证

此项目根据 MIT 许可证授权 - 有关详情，请参阅 [LICENSE](LICENSE) 文件。

## 致谢

- 为图像识别技术提供支持的 AI 模型提供商
- 为各种库和工具提供支持的开源社区
- 所有帮助改进此项目的贡献者和测试人员

---

*此项目正在积极开发中。功能和文档将定期更新。*