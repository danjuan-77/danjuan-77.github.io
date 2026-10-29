# 原子工作检查点

## 2026-10-29 — 推送主页更新

- 用户明确授权 Push 后，将 `bec4816` 和 `6640d4b` 推送至 `origin/main`。
- 远程分支从 `3180536` 前进至 `6640d4b`，Git 返回推送成功；同步任务完成记录。

## 2026-10-29 — Audio-ReaPer 论文展示（`bec4816`）

- 新增 Audio-ReaPer 论文卡片，补齐正式标题、作者、ACL Anthology 页面、PDF 链接及 TL;DR。
- 使用论文第 5 页的完整 Figure 3 作为 1900 × 755 PNG teaser，沿用 UltraVoice 的 EMNLP 2026 Findings 样式。
- 将 UltraVoice 从 2025 分组移至 2026 分组，与新论文相邻展示，使分组与发表年份一致。
- 验证：修改前 dry-run、Jekyll 构建、生成 HTML 的顺序/作者/链接/图片检查、桌面和手机预览、`git diff --check` 均通过。
- 本地 Ruby 4 与旧 Bundler/Liquid 不兼容；验证时跳过 Bundler，并仅在构建进程内补充旧 Liquid 所需的兼容方法，未修改项目依赖或运行代码。构建和 Sass 缓存置于 `/tmp/`。
- 状态：已创建本地提交，尚未推送远程。
