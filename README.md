# chenwb47.github.io

这个仓库用于 **GitHub Pages** 托管的静态站点集合（纯前端、无需构建），根首页提供各子项目入口导航。

## 在线入口

- 根导航页：`/index.html`
- 小学数学知识可达矩阵分析：`/primary-school-math/index.html`
- 开源工具精选 Wiki：`/github-toprepo-index/open-source-wiki.html`
- Awesome Links（个人常用链接页）：`/shortcut/index.html`

## 子项目简介

### 1) 小学数学知识可达矩阵分析（`primary-school-math/`）

- **功能**：知识图谱可视化（D3）、传递闭包（Warshall）计算可达矩阵、可达性查询、多源关联分析、掌握状态模拟
- **形态**：纯前端单页应用（SPA），直接打开即可运行
- **更多说明**：见 `primary-school-math/AGENTS.md`

### 2) 开源工具精选 Wiki（`github-toprepo-index/`）

- **功能**：单页 Wiki（含侧边栏、搜索、分类标签、Mermaid 示例等）
- **形态**：纯静态 HTML（CDN 引入 Mermaid、字体等）

### 3) Awesome Links（`shortcut/`）

- **功能**：个人链接导航页
- **形态**：纯静态 HTML（Bootstrap/Vue CDN）

## 本地预览

由于页面包含 CDN 资源与脚本交互，建议用本地静态服务器预览（避免某些浏览器对 `file://` 的限制）。

```bash
cd /path/to/chenwb47.github.io
python3 -m http.server 8080
```

然后访问：

- `http://localhost:8080/`
- `http://localhost:8080/primary-school-math/`
- `http://localhost:8080/github-toprepo-index/open-source-wiki.html`
- `http://localhost:8080/shortcut/`

## 部署

推送到 GitHub 后，启用 GitHub Pages（通常选择 `main` 分支根目录）即可自动发布。

