---
permalink: /
title: "About Me"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, I'm Wenming Tu (涂文明). I am currently a first-year Ph.D. student in Computer Science and Technology at Shanghai Jiao Tong University (SJTU). I am jointly supervised by Prof. [Xie Chen](https://chenxie95.github.io/) from the [X-LANCE Lab](https://x-lance.sjtu.edu.cn/) and Dr. [Zilong Zheng](https://zilongzheng.github.io/) from the [Beijing Institute for General Artificial Intelligence (BIGAI)](https://www.bigai.ai/), NLCo Group. I am passionate about advancing the frontiers of AI research and developing innovative solutions in this rapidly evolving field.

My research interests primarily focus on **speech and audio processing** and **multimodal large language models**. I aim to explore how these technologies can enhance human-computer interaction, improve speech synthesis and recognition systems, and advance AI capabilities in multimodal environments.

**Think bold! Work hard!**

# 🔥 News
- *2026.06*: &nbsp;🎉🎉 2 papers were accepted by INTERSPEECH 2026!
- *2026.05*: &nbsp;🎉🎉 1 paper was accepted by ICML 2026!
- *2026.02*: &nbsp;🎉🎉 We won 🥈 (2nd place) in the Agent Track of the Interspeech 2026 Audio Reasoning Challenge. See the [Leaderboard](https://audio-reasoning-challenge.github.io/leaderboard/); the official report is on [Challenge Report](https://arxiv.org/abs/2602.14224). Our method report is coming soon.
- *2025.09*: &nbsp;🎉🎉 1 paper was accepted by NeurIPS 2025!
- *2025.05*: &nbsp;🎉🎉 1 paper was accepted by ACL 2025!
- *2025.01*: &nbsp;🎉🎉 1 paper was accepted by EuroSys 2025!


# 📝 Publications 
> (*represents co-first authors, #represents corresponding authors)

## 2026 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/publications/2026-mmae.png' alt="MMAE" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[MMAE: A Massive Multitask Audio Editing Benchmark](https://arxiv.org/abs/2606.07229).&nbsp;Preprint.<br>
Ziyang Ma, Ruiqi Yan, Ruiyang Xu, Jie Fang, Zhikang Niu, Yi-Wen Chao, **Wenming Tu**, et al. (As a **Core Contributor**)
<br> [![paper](https://img.shields.io/badge/%F0%9F%93%84_arXiv_2026-b31b1b.svg?style=plastic)](https://arxiv.org/abs/2606.07229)
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">INTERSPEECH 2026</div><img src='images/publications/2026-visa.png' alt="VISA" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[VISA: A Visual Information Strengthened Audio-Reasoning System for the Interspeech 2026 ARC Agent Track](https://arxiv.org/abs/2606.07264).&nbsp;INTERSPEECH 2026.<br>
**Wenming Tu**, Jian Gao, Yanru Huo, Yixuan Wang, Jing Peng, Bohan Li, Ziyang Ma, Tao Liu, Shuai Fan, Kai Yu, Xie Chen, Zilong Zheng.
<br> [![paper](https://img.shields.io/badge/%F0%9F%93%84_INTERSPEECH_2026-b31b1b.svg?style=plastic)](https://arxiv.org/abs/2606.07264)
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">INTERSPEECH 2026</div><img src='images/publications/2026-sure.png' alt="SURE" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[A Unified and Reproducible Experimentation Framework for Speech Understanding](https://arxiv.org/abs/2605.30899).&nbsp;INTERSPEECH 2026.<br>
Jing Peng, Junhao Du, Chenghao Wang, Hanqi Li, Yi Yang, Yixuan Wang, Xiaoyu Gu, Guanyu Chen, Yucheng Wang, Jiang Li, Zhangjie Zhao, Haoran Wang, **Wenming Tu**, Haoyu Li, Duo Ma, Lirong Qian, Yu Xi, Wen Wen, Jiaqi Guo, Hui Zhang, Shuai Fan, Wenbin Jiang, Shuai Wang, Kai Yu.
<br> [![paper](https://img.shields.io/badge/%F0%9F%93%84_INTERSPEECH_2026-b31b1b.svg?style=plastic)](https://arxiv.org/abs/2605.30899)
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/publications/2026-audio-mind.png' alt="Audio-Mind" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Audio-Mind: An Auditable Agentic Framework for Audio Understanding](https://arxiv.org/abs/2605.28480).&nbsp;Preprint.<br>
Yucheng Wang, Jing Peng, Hanqi Li, Chenghao Wang, **Wenming Tu**, Yu Xi, Zhaokai Sun, Kai Yu, Shuai Wang.
<br> [![paper](https://img.shields.io/badge/%F0%9F%93%84_arXiv_2026-b31b1b.svg?style=plastic)](https://arxiv.org/abs/2605.28480)
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/publications/2026-avi-bench.png' alt="AVI-Bench" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[AVI-Bench: Toward Human-like Audio-Visual Intelligence of Omni-MLLMs](https://fudancvl.github.io/AVI-Bench/).&nbsp;ICML 2026 (<font color=red>CCF-A</font>).<br>
Yaoting Wang, Ziyi Zhang, **Wenming Tu**, Shaoxuan Xu, Wenjie Du, Cheng Liang, Weijun Wang, Yuanchao Li, Guangyao Li, Hao Fei, Yuanchun Li, Henghui Ding, Yunxin Liu.
<br> [![paper](https://img.shields.io/badge/%F0%9F%8C%90_ICML_2026-b31b1b.svg?style=plastic)](https://fudancvl.github.io/AVI-Bench/)
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/publications/2026-mova.png' alt="MOVA" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[MOVA: Towards Scalable and Synchronized Video-Audio Generation](https://arxiv.org/abs/2602.08794).&nbsp;Preprint.<br>
As a **core contributor** cooperate with SII-OpenMOSS Team.
<br> [![paper](https://img.shields.io/badge/%F0%9F%93%84_arXiv_2026-b31b1b.svg?style=plastic)](https://arxiv.org/abs/2602.08794)
</div></div>

## 2025
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/publications/2025-ultravoice.png' alt="UltraVoice" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[UltraVoice: Scaling Fine-Grained Style-Controlled Speech Conversations for Spoken Dialogue Models](https://arxiv.org/abs/2510.22588).&nbsp;Preprint.<br>
**Wenming Tu**, Guanrou Yang, Ruiqi Yan, Wenxi Chen, Ziyang Ma, Yipeng Kang, Kai Yu, Xie Chen#, Zilong Zheng#.
<br> [![paper](https://img.shields.io/badge/%F0%9F%93%84_arXiv_2025-b31b1b.svg?style=plastic)](https://arxiv.org/abs/2510.22588)
</div></div>

- [Evaluating Generalization Capabilities of LLM-Based Agents in Mixed-Motive Scenarios Using Concordia](https://neurips.cc/virtual/2025/loc/san-diego/poster/121382).&nbsp;NeurIPS DB Track 2025 (<font color=red>CCF-A</font>).<br>
Cooperate with the DeepMind Concordia Team.
<br> [![paper](https://img.shields.io/badge/%F0%9F%93%84_NeurIPS_2025-b31b1b.svg?style=plastic)](https://neurips.cc/virtual/2025/loc/san-diego/poster/121382)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2025</div><img src='images/publications/2025-llm-values.png' alt="LLM Values" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Are the Values of LLMs Structurally Aligned with Humans? A Causal Perspective](https://aclanthology.org/2025.findings-acl.1188/).&nbsp;ACL 2025 Findings (<font color=red>CCF-A</font>).<br>
Yipeng Kang, Junqi Wang, Yexin Li, Mengmeng Wang, **Wenming Tu**, Quansen Wang, Hengli Li, Tingjun Wu, Xue Feng, Fangwei Zhong, Zilong Zheng#.
<br> [![paper](https://img.shields.io/badge/%F0%9F%93%84_ACL_2025-b31b1b.svg?style=plastic)](https://arxiv.org/abs/2501.00581)
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EuroSys 2025</div><img src='images/publications/2025-lora-lmm.png' alt="LoRA LMM" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Empower Vision Applications with LoRA LMM](https://dl.acm.org/doi/10.1145/3689031.3717472).&nbsp;EuroSys 2025 (<font color=red>CCF-A, Fall round (30/367=8.17%)</font>).<br>
Liang Mi\*, Weijun Wang\*#, **Wenming Tu**, Qingfeng He, Rui Kong, Xinyu Fang, Yazhu Dong, Yikang Zhang, Yuanchun Li, Meng Li, Haipeng Dai, Guihai Chen, Yunxin Liu.
<br> [![paper](https://img.shields.io/badge/%F0%9F%93%84_EuroSys_2025-b31b1b.svg?style=plastic)](https://arxiv.org/abs/2411.00915)
</div></div>


# 🎖 Honors and Awards
- *2025.06* Outstanding Graduates of CUMTB. 🎓
- *2024.03* Merit Student Award of Beijing. 🏅
- *2023.10* Xiaomi Scholarship. 🎖

# 📖 Educations
- *2025.09 - 2030.06(expected)*: Computer science and technology. [School of Computer Science , Shanghai Jiao Tong University(SJTU)](https://www.cs.sjtu.edu.cn/)
- *2021.09 - 2025.06*: Computer science and technology. [School of Artificial Intelligence, China University of Mining and Technology-Beijing(CUMTB)](https://ai.cumtb.edu.cn/)


<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Internships
- *2026.04 - Present*, [Tencent Hunyuan](https://hunyuan.tencent.com/research?page=1), Shanghai, China.
- *2025.10 - 2026.03*, [Sii & OpenMOSS](https://openmoss.ai/), Shanghai, China.
- *2024.10 - 2025.09*, [Beijing Institute for General Artificial Intelligence (BIGAI)](https://www.bigai.ai/), NLCo Group, Beijing, China. Co-supervised by Dr. [Zilong Zheng](https://zilongzheng.github.io/) and Dr. [Yipeng Kang](https://fringsoo.github.io/).
- *2023.12 - 2024.09*, [Institute for AI Industry Research (AIR), Tsinghua University](https://air.tsinghua.edu.cn/index.htm), AIoT Group, Beijing, China. Co-supervised by Dr. [Weijun Wang](https://weijunalexwang.github.io/index.html) and Prof. [Yuanchun Li](https://yuanchun-li.github.io/).
