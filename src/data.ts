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
  },
  {
    title: 'VEM: Environment-Free Exploration for Training GUI Agent with Value Environment Model',
    venue: 'TMLR',
    year: '2026',
    category: 'LLM agents',
    href: 'https://openreview.net/forum?id=q1wLUxaBPn',
    summary:
      'A training approach for GUI agents that reduces dependence on live interactive environments.',
  },
  {
    title: 'AXIS: Efficient Human-Agent-Computer Interaction with API-First LLM-Based Agents',
    venue: 'ACL',
    year: '2025',
    category: 'LLM agents',
    href: 'https://doi.org/10.18653/v1/2025.acl-long.381',
    summary:
      'An API-first agent interaction framework for making human-agent-computer workflows more efficient.',
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
]

export const publicationGroups: PublicationGroup[] = [
  {
    title: 'LLM agents, RAG, and code intelligence',
    description:
      'Recent work on computer-using agents, code generation and translation, RAG, reward learning, and structured reasoning.',
    publications: [
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
    ],
  },
]

export const newsItems: NewsItem[] = [
  {
    date: '2026',
    text: 'Recent TMLR papers explore desktop agents and environment-free GUI agent training.',
  },
  {
    date: '2026',
    text: 'Science Robotics paper on cross-robot behavior adaptation through intention alignment.',
  },
  {
    date: '2025',
    text: 'Agent, RAG, code intelligence, and cloud systems work appeared at ACL, EMNLP, ICLR, KDD, MLSys, and FSE.',
  },
]