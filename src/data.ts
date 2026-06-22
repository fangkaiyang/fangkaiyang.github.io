export type ProfileLink = {
  label: string
  href: string
}

export type ResearchArea = {
  title: string
  summary: string
  keywords: string[]
}

export type Publication = {
  title: string
  venue: string
  year: string
  category: string
  href: string
  summary: string
  links?: ProfileLink[]
  imageUrl?: string
  imageAlt?: string
}

export type PublicationGroup = {
  title: string
  description: string
  publications: Publication[]
}

export type NewsItem = {
  date: string
  text: string
}

export const profileLinks: ProfileLink[] = [
  {
    label: 'KTH profile',
    href: 'https://www.kth.se/profile/fangkai',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.se/citations?user=g4MrE6QAAAAJ&hl=en',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0000-0002-3089-0345',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/keanudicap',
  },
]

export const quickFacts = [
  {
    label: 'Current affiliations',
    value: 'Microsoft Research Asia and KTH Royal Institute of Technology',
  },
  {
    label: 'Research focus',
    value: 'Agentic AI, RAG, code intelligence, cloud intelligence, and human-aware robotics',
  },
  {
    label: 'Canonical scholarly ID',
    value: 'ORCID 0000-0002-3089-0345',
  },
]

export const researchAreas: ResearchArea[] = [
  {
    title: 'LLM agents and program intelligence',
    summary:
      'Building computer-using agents, workflow agents, code models, RAG systems, and evaluation methods for structured tasks.',
    keywords: ['desktop agents', 'GUI grounding', 'RAG', 'code translation', 'reward learning'],
  },
  {
    title: 'Autonomic cloud systems',
    summary:
      'Learning-based automation for cloud reliability, capacity management, incident mitigation, and resource optimization.',
    keywords: ['Microsoft cloud', 'failure prediction', 'oversubscription', 'self-learning agents'],
  },
  {
    title: 'Human-aware robotics and social agents',
    summary:
      'Earlier KTH-facing work on socially aware navigation, human-agent interaction, and robot behavior in groups and crowds.',
    keywords: ['social navigation', 'human-agent interaction', 'crowd navigation', 'robot behavior'],
  },
]

export const featuredPublications: Publication[] = [
  {
    title: 'UFO2: The Desktop AgentOS',
    venue: 'TMLR',
    year: '2026',
    category: 'LLM agents',
    href: 'https://openreview.net/forum?id=iAuZVWCduc',
    summary:
      'A desktop agent operating-system direction for coordinating agent actions across applications and user tasks.',
    links: [
      { label: 'Paper', href: 'https://openreview.net/forum?id=iAuZVWCduc' },
      { label: 'Code', href: 'https://github.com/microsoft/UFO' },
      { label: 'Project', href: 'https://microsoft.github.io/UFO/' },
    ],
    imageUrl: 'https://microsoft.github.io/UFO/img/framework2.png',
    imageAlt: 'UFO2 architecture overview',
  },
  {
    title: 'VEM: Environment-Free Exploration for Training GUI Agent with Value Environment Model',
    venue: 'TMLR',
    year: '2026',
    category: 'LLM agents',
    href: 'https://openreview.net/forum?id=q1wLUxaBPn',
    summary:
      'A training approach for GUI agents that reduces dependence on live interactive environments.',
    links: [
      { label: 'Paper', href: 'https://openreview.net/forum?id=q1wLUxaBPn' },
      { label: 'Code', href: 'https://github.com/microsoft/GUI-Agent-RL' },
      { label: 'Project', href: 'https://microsoft.github.io/GUI-Agent-RL/' },
    ],
    imageUrl: 'https://microsoft.github.io/GUI-Agent-RL/structure.jpg',
    imageAlt: 'VEM training framework overview',
  },
  {
    title: 'RepoGenesis: Benchmarking End-to-End Microservice Generation from Readme to Repository',
    venue: 'ACL',
    year: '2026',
    category: 'Code intelligence',
    href: 'https://arxiv.org/abs/2601.13943',
    summary:
      'A multilingual benchmark for repository-level microservice generation from requirements to runnable code.',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2601.13943' },
      { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/RepoGenesis' },
      { label: 'Project', href: 'https://microsoft.github.io/DKI_LLM/RepoGenesis/RepoGenesis_index.html' },
    ],
    imageUrl: 'https://microsoft.github.io/DKI_LLM/RepoGenesis/static/images/overview.png',
    imageAlt: 'RepoGenesis benchmark overview',
  },
  {
    title: 'A Tale of Two Graphs: Separating Knowledge Exploration from Outline Structure for Open-Ended Deep Research',
    venue: 'ICML',
    year: '2026',
    category: 'Deep research agents',
    href: 'https://arxiv.org/abs/2602.13830',
    summary:
      'DualGraph separates knowledge exploration from report structure for long-horizon open-ended deep research.',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2602.13830' },
      { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/DualGraph' },
      { label: 'Project', href: 'https://microsoft.github.io/DKI_LLM/dualgraph/dualgraph_index.html' },
    ],
    imageUrl: 'https://microsoft.github.io/DKI_LLM/dualgraph/static/images/overview.png',
    imageAlt: 'DualGraph framework overview',
  },
  {
    title: 'DoVer: Intervention-Driven Auto Debugging for LLM Multi-Agent Systems',
    venue: 'ICLR',
    year: '2026',
    category: 'LLM agents',
    href: 'https://arxiv.org/abs/2512.06749',
    summary:
      'An intervention-driven debugging framework that validates and repairs failures in LLM multi-agent traces.',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2512.06749' },
      { label: 'Code', href: 'https://github.com/microsoft/ACV/tree/main/misc/DoVer' },
      { label: 'Project', href: 'https://mbjinx.github.io/DoVer_Web/' },
    ],
  },
  {
    title: 'ProtoRAIL: A Risk-cognizant Imitation Agent for Adaptive vCPU Oversubscription In the Cloud',
    venue: 'MLSys',
    year: '2025',
    category: 'Cloud systems',
    href: 'https://openreview.net/forum?id=Dt8s7CIsEu',
    summary:
      'Risk-aware imitation learning for cloud resource oversubscription under practical operational constraints.',
  },
  {
    title: 'Cross-Robot Behavior Adaptation Through Intention Alignment',
    venue: 'Science Robotics',
    year: '2026',
    category: 'Robotics',
    href: 'https://doi.org/10.1126/scirobotics.adv2250',
    summary:
      'Studies intention alignment as a mechanism for adapting behavior across robots in social interaction settings.',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1126/scirobotics.adv2250' },
      {
        label: 'Science ePrint',
        href: 'https://www.science.org/eprint/VRHKZNXGPTPVY7TYDUIT/full?activationRedirect=/doi/full/10.1126/scirobotics.adv2250',
      },
    ],
  },
]

export const publicationGroups: PublicationGroup[] = [
  {
    title: 'LLM agents and computer use',
    description:
      'Recent work on desktop and GUI agents, multi-agent debugging, world models, and human-agent-computer interaction.',
    publications: [
      {
        title: 'Computer-Using World Model',
        venue: 'arXiv',
        year: '2026',
        category: 'Computer-using agents',
        href: 'https://arxiv.org/abs/2602.17365',
        summary: 'Models UI state transitions so agents can search over candidate actions before executing them.',
      },
      {
        title: 'DoVer: Intervention-Driven Auto Debugging for LLM Multi-Agent Systems',
        venue: 'ICLR',
        year: '2026',
        category: 'Multi-agent debugging',
        href: 'https://arxiv.org/abs/2512.06749',
        summary: 'Verifies failure hypotheses through targeted interventions in agent traces.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2512.06749' },
          { label: 'Code', href: 'https://github.com/microsoft/ACV/tree/main/misc/DoVer' },
          { label: 'Project', href: 'https://mbjinx.github.io/DoVer_Web/' },
        ],
      },
      {
        title: 'Learning GUI Grounding with Spatial Reasoning from Visual Feedback',
        venue: 'ICML',
        year: '2026',
        category: 'GUI grounding',
        href: 'https://arxiv.org/abs/2509.21552',
        summary: 'Reframes GUI grounding as an interactive visual-feedback search problem.',
      },
      {
        title: 'AXIS: Efficient Human-Agent-Computer Interaction with API-First LLM-Based Agents',
        venue: 'ACL',
        year: '2025',
        category: 'Human-agent-computer interaction',
        href: 'https://doi.org/10.18653/v1/2025.acl-long.381',
        summary: 'An API-first agent interaction framework for making human-agent-computer workflows more efficient.',
      },
      {
        title: 'TaskWeaver: A Code-First Agent Framework',
        venue: 'arXiv',
        year: '2023',
        category: 'Agent framework',
        href: 'https://arxiv.org/abs/2311.17541',
        summary: 'A code-first framework for building LLM agents that solve data analytics and domain tasks through executable code.',
      },
    ],
  },
  {
    title: 'Code intelligence and repository agents',
    description:
      'Benchmarks, representations, and learning methods for repository-scale generation, translation, and code reasoning.',
    publications: [
      {
        title: 'RepoGenesis: Benchmarking End-to-End Microservice Generation from Readme to Repository',
        venue: 'ACL',
        year: '2026',
        category: 'Repository generation',
        href: 'https://arxiv.org/abs/2601.13943',
        summary: 'Benchmarks full microservice repository generation across languages, frameworks, and deployment requirements.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2601.13943' },
          { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/RepoGenesis' },
          { label: 'Project', href: 'https://microsoft.github.io/DKI_LLM/RepoGenesis/RepoGenesis_index.html' },
        ],
        imageUrl: 'https://microsoft.github.io/DKI_LLM/RepoGenesis/static/images/overview.png',
        imageAlt: 'RepoGenesis benchmark overview',
      },
      {
        title: 'Closing the Loop: Universal Repository Representation with RPG-Encoder',
        venue: 'ICML',
        year: '2026',
        category: 'Repository representation',
        href: 'https://arxiv.org/abs/2602.02084',
        summary: 'Generalizes Repository Planning Graphs into a unified representation for repository comprehension and generation.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2602.02084' },
          { label: 'Code', href: 'https://github.com/microsoft/RPG-ZeroRepo/tree/main/zerorepo/rpg_encoder' },
        ],
      },
      {
        title: 'WarriorCoder: Learning from Expert Battles to Augment Code Large Language Models',
        venue: 'ACL',
        year: '2025',
        category: 'Code intelligence',
        href: 'https://doi.org/10.18653/v1/2025.acl-long.246',
        summary: 'Improves code LLMs by learning from expert problem-solving battles.',
      },
      {
        title: 'ExeCoder: Empowering Large Language Models with Executability Representation for Code Translation',
        venue: 'EMNLP',
        year: '2025',
        category: 'Code intelligence',
        href: 'https://doi.org/10.18653/v1/2025.emnlp-main.362',
        summary: 'Uses executability-aware representations to improve code translation.',
      },
      {
        title: 'Skeleton-Guided-Translation: A Benchmarking Framework for Code Repository Translation with Fine-Grained Quality Evaluation',
        venue: 'EMNLP Findings',
        year: '2025',
        category: 'Code translation',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&citation_for_view=g4MrE6QAAAAJ:JV2RwH3_ST0C',
        summary: 'Evaluates repository translation with skeleton guidance and fine-grained quality signals.',
      },
    ],
  },
  {
    title: 'RAG, reasoning, and model learning',
    description:
      'Methods for deep research, retrieval-augmented reasoning, reward/value learning, self-refinement, and recommendation.',
    publications: [
      {
        title: 'A Tale of Two Graphs: Separating Knowledge Exploration from Outline Structure for Open-Ended Deep Research',
        venue: 'ICML',
        year: '2026',
        category: 'Deep research agents',
        href: 'https://arxiv.org/abs/2602.13830',
        summary: 'Uses co-evolving knowledge and outline graphs to guide long-horizon research report generation.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2602.13830' },
          { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/DualGraph' },
          { label: 'Project', href: 'https://microsoft.github.io/DKI_LLM/dualgraph/dualgraph_index.html' },
        ],
        imageUrl: 'https://microsoft.github.io/DKI_LLM/dualgraph/static/images/overview.png',
        imageAlt: 'DualGraph framework overview',
      },
      {
        title: 'RePrompt: Reasoning-Augmented Reprompting for Text-to-Image Generation via Reinforcement Learning',
        venue: 'ICLR',
        year: '2026',
        category: 'Reasoning and generation',
        href: 'https://arxiv.org/abs/2505.17540',
        summary: 'Trains reasoning-based prompt rewriting for stronger compositional text-to-image generation.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2505.17540' },
          { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/RePrompt' },
          { label: 'Project', href: 'https://microsoft.github.io/DKI_LLM/reprompt/reprompt_index.html' },
        ],
        imageUrl: 'https://microsoft.github.io/DKI_LLM/reprompt/static/images/overreview.png',
        imageAlt: 'RePrompt framework overview',
      },
      {
        title: 'Pretrain Value, Not Reward: Decoupled Value Policy Optimization',
        venue: 'ICLR',
        year: '2026',
        category: 'Reinforcement learning',
        href: 'https://arxiv.org/abs/2502.16944',
        summary: 'Pretrains a global value model as a stable critic for policy-only RLHF optimization.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2502.16944' },
          { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/dvpo' },
        ],
      },
      {
        title: 'Learning to Refine: Self-Refinement of Parallel Reasoning in LLMs',
        venue: 'ACL Findings',
        year: '2026',
        category: 'Self-refinement',
        href: 'https://arxiv.org/abs/2509.00084',
        summary: 'Studies self-refinement for improving parallel reasoning in large language models.',
      },
      {
        title: 'DUET: Joint Exploration of User-Item Profiles in Recommendation System',
        venue: 'ACL Findings',
        year: '2026',
        category: 'Recommendation',
        href: 'https://arxiv.org/abs/2604.13801',
        summary: 'Jointly explores user and item profiles for recommendation tasks.',
      },
      {
        title: 'Thread: A Logic-Based Data Organization Paradigm for How-To Question Answering with Retrieval Augmented Generation',
        venue: 'EMNLP',
        year: '2025',
        category: 'RAG',
        href: 'https://doi.org/10.18653/v1/2025.emnlp-main.923',
        summary: 'Organizes procedural knowledge for more structured RAG over how-to questions.',
      },
      {
        title: 'EfficientRAG: Efficient Retriever for Multi-Hop Question Answering',
        venue: 'EMNLP',
        year: '2024',
        category: 'RAG',
        href: 'https://doi.org/10.18653/v1/2024.emnlp-main.199',
        summary: 'A retriever design for efficient multi-hop question answering.',
      },
      {
        title: 'SELF-GUARD: Empower the LLM to Safeguard Itself',
        venue: 'NAACL-HLT',
        year: '2024',
        category: 'Trustworthy LLMs',
        href: 'https://doi.org/10.18653/v1/2024.naacl-long.92',
        summary: 'Teaches LLMs to perform self-safeguarding during generation.',
      },
      {
        title: 'Call Me When Necessary: LLMs can Efficiently and Faithfully Reason over Structured Environments',
        venue: 'ACL Findings',
        year: '2024',
        category: 'Structured reasoning',
        href: 'https://doi.org/10.18653/v1/2024.findings-acl.254',
        summary: 'Studies when LLMs should call tools or structured environments during reasoning.',
      },
    ],
  },
  {
    title: 'Autonomic cloud systems',
    description:
      'Machine learning and agentic automation for cloud reliability, capacity management, scheduling, and operations.',
    publications: [
      {
        title: 'Enabling Autonomic Microservice Management Through Self-Learning Agents',
        venue: 'arXiv',
        year: '2025',
        category: 'Autonomic systems',
        href: 'https://arxiv.org/abs/2501.19056',
        summary: 'Explores self-learning agents for autonomic management of microservice systems.',
      },
      {
        title: 'Te-PID: An Adaptive Erasure Coding Temperature Management System for Optimized Cloud Storage',
        venue: 'FSE',
        year: '2025',
        category: 'Cloud storage',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&citation_for_view=g4MrE6QAAAAJ:J_g5lzvAfSwC',
        summary: 'Optimizes cloud storage erasure coding through adaptive temperature management.',
      },
      {
        title: 'COIN: Chance-Constrained Imitation Learning for Safe and Adaptive Resource Oversubscription under Uncertainty',
        venue: 'CIKM',
        year: '2024',
        category: 'Cloud optimization',
        href: 'https://doi.org/10.1145/3627673.3680060',
        summary: 'Applies chance-constrained imitation learning to adaptive cloud oversubscription.',
      },
      {
        title: 'Diffusion-Based Time Series Data Imputation for Cloud Failure Prediction at Microsoft 365',
        venue: 'ESEC/FSE',
        year: '2023',
        category: 'Cloud reliability',
        href: 'https://doi.org/10.1145/3611643.3613866',
        summary: 'Uses diffusion-based imputation to improve failure prediction for Microsoft 365.',
      },
      {
        title: 'Contextual Self-attentive Temporal Point Process for Physical Decommissioning Prediction of Cloud Assets',
        venue: 'KDD',
        year: '2023',
        category: 'Cloud assets',
        href: 'https://doi.org/10.1145/3580305.3599794',
        summary: 'Models physical decommissioning events for cloud asset management.',
      },
      {
        title: 'NENYA: Cascade Reinforcement Learning for Cost-Aware Failure Mitigation at Microsoft 365',
        venue: 'KDD',
        year: '2022',
        category: 'Cloud reliability',
        href: 'https://doi.org/10.1145/3534678.3539127',
        summary: 'Reinforcement learning for cost-aware mitigation of cloud failures.',
      },
      {
        title: 'Intelligent container reallocation at Microsoft 365',
        venue: 'ESEC/FSE',
        year: '2021',
        category: 'Cloud operations',
        href: 'https://doi.org/10.1145/3468264.3473936',
        summary: 'Production-oriented container reallocation for large-scale cloud services.',
      },
    ],
  },
  {
    title: 'Robotics and social agents',
    description:
      'Selected work on socially aware robot behavior, crowd navigation, and human-agent interaction.',
    publications: [
      {
        title: 'Cross-Robot Behavior Adaptation Through Intention Alignment',
        venue: 'Science Robotics',
        year: '2026',
        category: 'Robot behavior adaptation',
        href: 'https://doi.org/10.1126/scirobotics.adv2250',
        summary: 'Studies how intention alignment supports behavior adaptation across robots.',
        links: [
          { label: 'Paper', href: 'https://doi.org/10.1126/scirobotics.adv2250' },
          {
            label: 'Science ePrint',
            href: 'https://www.science.org/eprint/VRHKZNXGPTPVY7TYDUIT/full?activationRedirect=/doi/full/10.1126/scirobotics.adv2250',
          },
        ],
      },
      {
        title: 'Measuring Acoustics with Collaborative Multiple Agents',
        venue: 'IJCAI',
        year: '2023',
        category: 'Multi-agent sensing',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&citation_for_view=g4MrE6QAAAAJ:4DMP91E08xMC',
        summary: 'Uses collaborative agents for acoustic measurement in physical environments.',
      },
      {
        title: 'AppGAN: Generative Adversarial Networks for Generating Robot Approach Behaviors into Small Groups of People',
        venue: 'RO-MAN',
        year: '2019',
        category: 'Social robotics',
        href: 'https://doi.org/10.1109/RO-MAN46459.2019.8956425',
        summary: 'Generates socially appropriate approach behaviors for robots entering small groups.',
      },
      {
        title: 'Social-aware navigation in crowds with static and dynamic groups',
        venue: 'VS-GAMES',
        year: '2019',
        category: 'Crowd navigation',
        href: 'https://doi.org/10.1109/VS-Games.2019.8864512',
        summary: 'Studies navigation strategies that account for static and dynamic social groups.',
      },
      {
        title: 'Group Behavior Recognition Using Attention- and Graph-Based Neural Networks',
        venue: 'ECAI',
        year: '2020',
        category: 'Group behavior',
        href: 'https://doi.org/10.3233/FAIA200258',
        summary: 'Recognizes group behavior using attention and graph neural network structures.',
      },
      {
        title: 'App-LSTM: Data-Driven Generation of Socially Acceptable Trajectories for Approaching Small Groups of Agents',
        venue: 'HAI',
        year: '2019',
        category: 'Social navigation',
        href: 'https://doi.org/10.1145/3349537.3351895',
        summary: 'Generates socially acceptable approach trajectories for agents entering small groups.',
      },
    ],
  },
]

export const newsItems: NewsItem[] = [
  {
    date: '2026',
    text: 'Papers accepted to ACL, ICML, ICLR, and TMLR cover repository generation, deep research agents, GUI agents, and model learning.',
  },
  {
    date: '2026',
    text: 'Science Robotics paper studies cross-robot behavior adaptation through intention alignment.',
  },
  {
    date: '2025',
    text: 'Agent, RAG, code intelligence, and cloud systems work appeared at ACL, EMNLP, ICLR, KDD, MLSys, and FSE.',
  },
]