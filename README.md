# 郑子杰 / JESKO-23 — Personal Resume Website

面向 AI 产品经理岗位的个人履历与项目网站。当前身份为黑豆人工智能 AI 架构工程师，网站重点呈现 AI 工作流与自动化、运营能力、业务驱动的系统实现，以及两个脱敏公司项目。

## Sections

- Hero：当前职位、目标职位与个人定位
- Capabilities：AI 工作流、运营与业务驱动的系统实现
- 黑豆跨境集群：跨境业务流程、API 自动化与工作台结构
- HeidouAI Quant Infrastructure：量化研究与交易基础设施脱敏架构
- Timeline & Contact：教育、历史认证、项目成长与联系方式

## Local preview

项目没有 Node/npm 依赖，使用任意静态文件服务器即可运行。

```powershell
python -m http.server 4173
```

然后访问 `http://127.0.0.1:4173/`。

## Files

- `index.html`：语义结构与全部内容
- `styles.css`：响应式设计、深浅章节、时间线与交互动效
- `script.js`：移动导航、滚动状态、内容揭示与架构图弹窗
- `assets/source/portrait-jesko.jpg`：用户提供的职业照
- `assets/source/heidouai-quant-architecture.png`：可公开展示的脱敏架构图
- `references/locked/v1/`：已确认且不可覆盖的视觉参考

## Evidence boundary

- Microsoft Azure AI Engineer Associate 仅作为 2024 年取得、2025 年过期的历史认证文字呈现；原始证书截图被 `.gitignore` 排除，避免公开 Credential ID。
- 量化项目标明公司项目、脱敏展示，并明确“不代表实盘收益”。
- 黑豆跨境集群尚未提供真实脱敏截图，因此产品界面使用明确标记的 `ILLUSTRATIVE / REPLACE-LATER` 骨架占位。

## Deployment

这是一个纯静态站点。`.github/workflows/pages.yml` 会在 `main` 分支更新后，将仓库根目录发布到 GitHub Pages。

## Quality assurance

桌面端、手机端、移动菜单和架构图弹窗均已完成浏览器回归检查；详细结果见 `docs/qa/report.md`。
