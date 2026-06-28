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
- *2026.06*: &nbsp;🎉🎉 2 papers have been accepted by INTERSPEECH 2026!
- *2026.05*: &nbsp;🎉🎉 1 paper has been accepted by ICML 2026!
- *2026.02*: &nbsp;🎉🎉 We won 🥈 (2nd place) in the Agent Track of the Interspeech 2026 Audio Reasoning Challenge. See the [Leaderboard](https://audio-reasoning-challenge.github.io/leaderboard/); the official report is on [Challenge Report](https://arxiv.org/abs/2602.14224).
- *2025.09*: &nbsp;🎉🎉 1 paper has been accepted by NeurIPS 2025!
- *2025.05*: &nbsp;🎉🎉 1 paper has been accepted by ACL 2025!
- *2025.01*: &nbsp;🎉🎉 1 paper has been accepted by EuroSys 2025!


# 📝 Publications 
> (*represents co-first authors, #represents corresponding authors)

## 2026 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge arxiv">arXiv 2026 · Preprint</div><img src='images/publications/2026-mmae.png' alt="MMAE" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[MMAE: A Massive Multitask Audio Editing Benchmark](https://arxiv.org/abs/2606.07229).<br>
Ziyang Ma\*, Ruiqi Yan\*, Ruiyang Xu\*, Jie Fang\*, Zhikang Niu\*, Yi-Wen Chao\*, **Wenming Tu\***, Tianrui Wang\*, Auden, Qi Chen, Wenxi Chen, Jiaying Chi, Yanru Huo, Zixuan Jiang, Xiquan Li, Yalin Li, Junxi Liu, Minghao Liu, Binghao Qiang, Yijia Shan, Zheshu Song, Tian Tan, Zixiang Wang, Zeyu Xie, Zhifei Xie, Xiaoyu Xing, Qixiang Xu, Chen Yang, Guanrou Yang, Shan Yang, Yifan Yang, Steve Yves, Haotian Zhang, Haina Zhu, Kai Yu, Liefeng Bo, Eng-Siong Chng, Xie Chen\#. (As a **Core Contributor**)<br>
[![paper](https://img.shields.io/badge/arXiv%202026-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.07229)
[![code](https://img.shields.io/badge/Code-181717?style=flat&logo=github&logoColor=white)](https://github.com/ddlBoJack/MMAE)
[![dataset](https://img.shields.io/badge/%F0%9F%A4%97%20Dataset-FFD21E?style=flat)](https://huggingface.co/datasets/BoJack/MMAE)
[![demo](https://img.shields.io/badge/Demo-FF0000?style=flat&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=6At5nTWhlXI)
<p style="margin:.6em 0 0;font-size:.85em;color:#555"><b>TL;DR:</b> The first comprehensive benchmark for instruction-based audio editing, spanning 7 audio modalities with a taxonomy of 6 complexity levels, 2 granularities, and 8 operation types. Its 2,000 samples are scored against 17,741 rubric-based criteria, revealing that even leading models score below 5% Exact Match—dropping to 0% on complex mixed-modality tasks.</p>
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge interspeech">INTERSPEECH 2026</div><img src='images/publications/2026-visa.png' alt="VISA" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[VISA: A Visual Information Strengthened Audio-Reasoning System for the Interspeech 2026 ARC Agent Track](https://arxiv.org/abs/2606.07264).<br>
**Wenming Tu\***, Jian Gao\*, Yanru Huo, Yixuan Wang, Jing Peng, Bohan Li, Ziyang Ma, Tao Liu, Shuai Fan\#, Kai Yu, Xie Chen, Zilong Zheng\#.<br>
[![paper](https://img.shields.io/badge/INTERSPEECH%202026-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.07264)
[![code](https://img.shields.io/badge/Code-181717?style=flat&logo=github&logoColor=white)](https://github.com/DELTA-DoubleWise/Audio-Mind)
<p style="margin:.6em 0 0;font-size:.85em;color:#555"><b>TL;DR:</b> VISA is our 2nd-place submission to the Interspeech 2026 Audio Reasoning Challenge (Agent Track), built on a "LALM-as-a-Tool" paradigm. It combines multi-modal feature extraction, model-voting inference with consistency checking, and rubric-aligned category-aware routing, reaching a 66.23% Rubrics score and the highest accuracy (77.40%) on the official leaderboard.</p>
</div></div>

<div class='pub-item' markdown="1">
[![paper](https://img.shields.io/badge/INTERSPEECH%202026-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30899) [A Unified and Reproducible Experimentation Framework for Speech Understanding](https://arxiv.org/abs/2605.30899). Jing Peng\*, Junhao Du\*, Chenghao Wang\*, Hanqi Li\*, Yi Yang\*, Yixuan Wang, Xiaoyu Gu, Guanyu Chen, Yucheng Wang, Jiang Li, Zhangjie Zhao, Haoran Wang, **Wenming Tu**, Haoyu Li, Duo Ma, Lirong Qian, Yu Xi, Wen Wen, Jiaqi Guo, Hui Zhang, Shuai Fan, Wenbin Jiang, Shuai Wang, Kai Yu\#.
</div>

<div class='pub-item' markdown="1">
[![paper](https://img.shields.io/badge/arXiv%202026-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.28480) [![code](https://img.shields.io/badge/Code-181717?style=flat&logo=github&logoColor=white)](https://github.com/DELTA-DoubleWise/Audio-Mind) [Audio-Mind: An Auditable Agentic Framework for Audio Understanding](https://arxiv.org/abs/2605.28480). Yucheng Wang\*, Jing Peng\*, Hanqi Li, Chenghao Wang, **Wenming Tu**, Yu Xi, Zhaokai Sun, Kai Yu, Shuai Wang\#.
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge icml">ICML 2026</div><img src='images/publications/2026-avi-bench.png' alt="AVI-Bench" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[AVI-Bench: Toward Human-like Audio-Visual Intelligence of Omni-MLLMs](https://arxiv.org/abs/2606.07643).<br>
Yaoting Wang, Ziyi Zhang, **Wenming Tu**, Shaoxuan Xu, Wenjie Du, Cheng Liang, Weijun Wang, Yuanchao Li, Guangyao Li, Hao Fei, Yuanchun Li, Henghui Ding\#, Yunxin Liu.<br>
[![paper](https://img.shields.io/badge/ICML%202026-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.07643)
[![project](https://img.shields.io/badge/%F0%9F%8C%90%20Project%20Page-1f6feb?style=flat)](https://fudancvl.github.io/AVI-Bench/)
[![code](https://img.shields.io/badge/Code-181717?style=flat&logo=github&logoColor=white)](https://github.com/FudanCVL/AVI-Bench)
[![dataset](https://img.shields.io/badge/%F0%9F%A4%97%20Dataset-FFD21E?style=flat)](https://huggingface.co/datasets/FudanCVL/AVIBench)
<p style="margin:.6em 0 0;font-size:.85em;color:#555"><b>TL;DR:</b> A cognitively-inspired benchmark evaluating Omni-MLLMs across perception, understanding, and reasoning through cross-modal audio-visual tasks. An extension, AVI-Bench-PriSe, probes primitive audio-visual sensation with low-semantic stimuli; experiments expose substantial limitations and yield a four-level AVI taxonomy.</p>
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge arxiv">arXiv 2026 · Preprint</div><img src='images/publications/2026-mova.png' alt="MOVA" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[MOVA: Towards Scalable and Synchronized Video-Audio Generation](https://arxiv.org/abs/2602.08794).<br>
As a **core contributor** cooperate with SII-OpenMOSS Team.<br>
[![paper](https://img.shields.io/badge/arXiv%202026-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08794)
[![project](https://img.shields.io/badge/%F0%9F%8C%90%20Project%20Page-1f6feb?style=flat)](https://mosi.cn/models/mova)
[![code](https://img.shields.io/badge/Code-181717?style=flat&logo=github&logoColor=white)](https://github.com/OpenMOSS/MOVA)
[![model](https://img.shields.io/badge/%F0%9F%A4%97%20Model-FFD21E?style=flat)](https://huggingface.co/collections/OpenMOSS-Team/mova)
<p style="margin:.6em 0 0;font-size:.85em;color:#555"><b>TL;DR:</b> MOVA (MOSS Video and Audio) is an open-source model for jointly generating high-quality, synchronized audio-visual content—lip-synced speech, environment-aware sound effects, and content-aligned music. It uses a 32B-parameter Mixture-of-Experts architecture (18B active) supporting Image-Text→Video-Audio generation, released with full weights, code, LoRA fine-tuning, and inference tooling.</p>
</div></div>

## 2025
<div class='paper-box'><div class='paper-box-image'><div><div class="badge arxiv">arXiv 2025 · Preprint</div><img src='images/publications/2025-ultravoice.png' alt="UltraVoice" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[UltraVoice: Scaling Fine-Grained Style-Controlled Speech Conversations for Spoken Dialogue Models](https://arxiv.org/abs/2510.22588).<br>
**Wenming Tu**, Guanrou Yang, Ruiqi Yan, Wenxi Chen, Ziyang Ma, Yipeng Kang, Kai Yu, Xie Chen#, Zilong Zheng#.<br>
[![paper](https://img.shields.io/badge/arXiv%202025-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.22588)
[![project](https://img.shields.io/badge/%F0%9F%8C%90%20Project%20Page-1f6feb?style=flat)](https://bigai-nlco.github.io/UltraVoice/)
[![code](https://img.shields.io/badge/Code-181717?style=flat&logo=github&logoColor=white)](https://github.com/bigai-nlco/UltraVoice)
[![model](https://img.shields.io/badge/%F0%9F%A4%97%20Model-FFD21E?style=flat)](https://huggingface.co/tutu0604/UltraVoice-SFT)
[![dataset](https://img.shields.io/badge/%F0%9F%A4%97%20Dataset-FFD21E?style=flat)](https://huggingface.co/datasets/tutu0604/UltraVoice)
<p style="margin:.6em 0 0;font-size:.85em;color:#555"><b>TL;DR:</b> UltraVoice is a 830+ hour speech-dialogue dataset with instructions controlling six style dimensions—emotion, speed, volume, accent, language, and composite styles. Fine-tuning SLAM-Omni and VocalNet on it lifts Mean Opinion Score by 29–42% and Instruction-Following Rate by up to 40 points, while preserving conversational ability.</p>
</div></div>

<div class='pub-item' markdown="1">
[![paper](https://img.shields.io/badge/NeurIPS%20D%26B%202025-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://neurips.cc/virtual/2025/loc/san-diego/poster/121382) [Evaluating Generalization Capabilities of LLM-Based Agents in Mixed-Motive Scenarios Using Concordia](https://neurips.cc/virtual/2025/loc/san-diego/poster/121382). Cooperate with the DeepMind Concordia Team.
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge acl">ACL Findings 2025</div><img src='images/publications/2025-llm-values.png' alt="LLM Values" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Are the Values of LLMs Structurally Aligned with Humans? A Causal Perspective](https://aclanthology.org/2025.findings-acl.1188/).<br>
Yipeng Kang, Junqi Wang, Yexin Li, Mengmeng Wang, **Wenming Tu**, Quansen Wang, Hengli Li, Tingjun Wu, Xue Feng, Fangwei Zhong, Zilong Zheng#.<br>
[![paper](https://img.shields.io/badge/ACL%20Findings%202025-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.00581)
<p style="margin:.6em 0 0;font-size:.85em;color:#555"><b>TL;DR:</b> A causal-perspective study showing that the underlying value graph of LLMs differs significantly from human value systems even after alignment training. It proposes two lightweight steering methods—role-based prompting and sparse-autoencoder steering—shown to be effective and controllable on Gemma-2B-IT and Llama3-8B-IT.</p>
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge eurosys">EuroSys 2025</div><img src='images/publications/2025-lora-lmm.png' alt="LoRA LMM" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Empower Vision Applications with LoRA LMM](https://dl.acm.org/doi/10.1145/3689031.3717472).<br>
Liang Mi\*, Weijun Wang\*#, **Wenming Tu**, Qingfeng He, Rui Kong, Xinyu Fang, Yazhu Dong, Yikang Zhang, Yuanchun Li, Meng Li, Haipeng Dai, Guihai Chen, Yunxin Liu.<br>
[![paper](https://img.shields.io/badge/EuroSys%202025-b31b1b?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.00915)
[![code](https://img.shields.io/badge/Code-181717?style=flat&logo=github&logoColor=white)](https://github.com/mi150/VaLoRA)
<p style="margin:.6em 0 0;font-size:.85em;color:#555"><b>TL;DR:</b> VaLoRA is an end-to-end system for serving LoRA-adapted Large Multimodal Models, combining accuracy-aware adapter generation, adaptive-tiling batched operators for heterogeneous adapters, and flexible request/adapter orchestration. Across five vision tasks on three models it improves accuracy by 24–62% while cutting latency by 20–89% versus state-of-the-art serving.</p>
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
