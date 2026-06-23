export type ProfileLink = {
  label: string
  href: string
}

export type RichTextPart = string | ProfileLink

export type QuickFact = {
  label: string
  value: string
}

export type Publication = {
  id: string
  title: string
  venue: string
  year: string
  category: string
  href: string
  summary: string
  links?: ProfileLink[]
  imageUrl?: string
  imageAlt?: string
  featured?: boolean
}

export type WorkArea = {
  slug: string
  title: string
  shortTitle: string
  eyebrow: string
  description: string
  homepageSummary: string
  question: string
  keywords: string[]
  publications: Publication[]
}

export type NewsItem = {
  date: string
  text: string
}

export const profileLinks: ProfileLink[] = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.se/citations?user=g4MrE6QAAAAJ&hl=en',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0000-0002-3089-0345',
  },
  {
    label: 'MSR DKI group',
    href: 'https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/',
  },
  {
    label: 'ESAL lab',
    href: 'http://www.csc.kth.se/~chpeters/ESAL/',
  },
]

export const biographyParagraphs: RichTextPart[][] = [
  [
    'I am a researcher at ',
    {
      label: 'Microsoft Research Asia, Data, Knowledge, and Intelligence group',
      href: 'https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/',
    },
    '. My current work studies agentic AI systems: computer-using agents, GUI grounding, repository-level code intelligence, retrieval-augmented reasoning, and learning methods that make agents more reliable in real workflows.',
  ],
  [
    'Before joining Microsoft, I received my bachelor degree from Zhejiang University and my master and PhD degrees from KTH Royal Institute of Technology, where I worked in the ',
    {
      label: 'Embodied Social Agents Lab',
      href: 'http://www.csc.kth.se/~chpeters/ESAL/',
    },
    ' under the supervision of ',
    {
      label: 'Christopher Peters',
      href: 'https://www.kth.se/profile/chpeters',
    },
    '. That earlier line of work focused on social navigation, group behavior, mixed reality, and human-agent interaction.',
  ],
  [
    'A recurring thread across these projects is decision making under structure: interfaces, repositories, knowledge graphs, cloud systems, and social spaces all impose constraints that useful agents need to understand and act within.',
  ],
]

export const quickFacts: QuickFact[] = [
  {
    label: 'Current group',
    value: 'Microsoft Research Asia, Data, Knowledge, and Intelligence',
  },
  {
    label: 'Education',
    value: 'BSc, Zhejiang University; MSc and PhD, KTH Royal Institute of Technology',
  },
  {
    label: 'PhD supervisor',
    value: 'Christopher Peters, Embodied Social Agents Lab',
  },
  {
    label: 'Research focus',
    value: 'Agentic AI, code intelligence, RAG, cloud intelligence, and human-aware robotics',
  },
]

export const workAreas: WorkArea[] = [
  {
    slug: 'computer-use',
    title: 'Computer-Using Agents and GUI Intelligence',
    shortTitle: 'Computer-use and GUI agents',
    eyebrow: 'Agents that operate software',
    description:
      'This line brings together desktop AgentOS work, GUI grounding, computer-use world models, API-first interaction, and reliability tools for multi-agent workflows.',
    homepageSummary:
      'My recent agent work studies how language models can operate real software: grounding visual interfaces, using native APIs, learning from simulated UI transitions, and debugging long multi-agent trajectories.',
    question:
      'How can agents understand interfaces, choose actions, and recover from failures while working inside real software systems?',
    keywords: ['desktop AgentOS', 'GUI grounding', 'API-first agents', 'world models', 'agent debugging'],
    publications: [
      {
        id: 'tree-seeker',
        title: 'TreeSeeker: Tree-Structured Trial, Error, and Return in Deep Search',
        venue: 'arXiv',
        year: '2026',
        category: 'Deep search agents',
        href: 'https://arxiv.org/abs/2606.11662',
        summary:
          'Uses tree-structured trials and returns to help deep-search agents explore, diagnose errors, and recover across long problem-solving trajectories.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2606.11662' }],
        imageUrl: '/paper-images/tree-seeker-overview.png',
        imageAlt: 'TreeSeeker tree-structured deep search overview',
        featured: true,
      },
      {
        id: 'ufo2',
        title: 'UFO2: The Desktop AgentOS',
        venue: 'TMLR',
        year: '2026',
        category: 'Desktop agents',
        href: 'https://openreview.net/forum?id=iAuZVWCduc',
        summary:
          'A Windows desktop AgentOS that combines a host agent, application-specialized agents, native APIs, UI automation, and vision parsing to make computer-using agents more robust and less disruptive.',
        links: [
          { label: 'Paper', href: 'https://openreview.net/forum?id=iAuZVWCduc' },
          { label: 'arXiv', href: 'https://arxiv.org/abs/2504.14603' },
          { label: 'Project', href: 'https://microsoft.github.io/UFO/' },
          { label: 'Code', href: 'https://github.com/microsoft/UFO' },
        ],
        imageUrl: '/paper-images/ufo2-framework.png',
        imageAlt: 'UFO2 desktop AgentOS framework overview',
        featured: true,
      },
      {
        id: 'vem',
        title: 'VEM: Environment-Free Exploration for Training GUI Agent with Value Environment Model',
        venue: 'TMLR',
        year: '2026',
        category: 'GUI agent training',
        href: 'https://openreview.net/forum?id=q1wLUxaBPn',
        summary:
          'An environment-free reinforcement learning framework for GUI agents where a pretrained value environment model guides exploration without costly live UI interaction.',
        links: [
          { label: 'Paper', href: 'https://openreview.net/forum?id=q1wLUxaBPn' },
          { label: 'arXiv', href: 'https://arxiv.org/abs/2502.18906' },
          { label: 'Project', href: 'https://microsoft.github.io/GUI-Agent-RL/' },
          { label: 'Code', href: 'https://github.com/microsoft/GUI-Agent-RL' },
        ],
        imageUrl: '/paper-images/vem-structure.png',
        imageAlt: 'VEM training framework overview',
        featured: true,
      },
      {
        id: 'gui-cursor',
        title: 'Learning GUI Grounding with Spatial Reasoning from Visual Feedback',
        venue: 'ICML',
        year: '2026',
        category: 'GUI grounding',
        href: 'https://arxiv.org/abs/2509.21552',
        summary:
          'Recasts GUI grounding as an interactive spatial reasoning problem, using visual feedback to refine cursor and element localization decisions.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2509.21552' }],
        imageUrl: '/paper-images/gui-cursor-overview.png',
        imageAlt: 'GUI grounding with spatial reasoning overview',
        featured: true,
      },
      {
        id: 'behavior-consistency',
        title: 'Beyond State Consistency: Behavior Consistency in Text-Based World Models',
        venue: 'arXiv',
        year: '2026',
        category: 'World models',
        href: 'https://arxiv.org/abs/2604.13824',
        summary:
          'Argues that text-based world models should preserve behavior-level consequences, not only state descriptions, when agents plan in simulated environments.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2604.13824' }],
        imageUrl: '/paper-images/behavior-consistency-overview.png',
        imageAlt: 'Behavior consistency world model overview',
      },
      {
        id: 'computer-world-model',
        title: 'Computer-Using World Model',
        venue: 'arXiv',
        year: '2026',
        category: 'World models',
        href: 'https://arxiv.org/abs/2602.17365',
        summary:
          'Models visual UI transitions so a computer-using agent can imagine and evaluate candidate action outcomes before acting in the live environment.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2602.17365' }],
        imageUrl: '/paper-images/computer-world-model-overview.png',
        imageAlt: 'Computer-using world model overview',
      },
      {
        id: 'dover',
        title: 'DoVer: Intervention-Driven Auto Debugging for LLM Multi-Agent Systems',
        venue: 'ICLR',
        year: '2026',
        category: 'Agent reliability',
        href: 'https://arxiv.org/abs/2512.06749',
        summary:
          'Moves multi-agent debugging from log-only attribution to active intervention, testing whether edited messages or plans actually repair failed agent trajectories.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2512.06749' },
          { label: 'Project', href: 'https://mbjinx.github.io/DoVer_Web/' },
          { label: 'Code', href: 'https://github.com/microsoft/ACV/tree/main/misc/DoVer' },
        ],
        imageUrl: '/paper-images/dover-pipeline.png',
        imageAlt: 'DoVer intervention-driven debugging pipeline',
        featured: true,
      },
      {
        id: 'axis',
        title: 'AXIS: Efficient Human-Agent-Computer Interaction with API-First LLM-Based Agents',
        venue: 'ACL',
        year: '2025',
        category: 'Human-agent-computer interaction',
        href: 'https://aclanthology.org/2025.acl-long.381/',
        summary:
          'Prioritizes API actions over step-by-step UI actions, reducing Word task completion time by 65-70% while maintaining high accuracy in human-agent-computer workflows.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2025.acl-long.381/' },
          { label: 'PDF', href: 'https://aclanthology.org/2025.acl-long.381.pdf' },
          { label: 'Project', href: 'https://aka.ms/haci_axis' },
        ],
      },
      {
        id: 'large-action-models',
        title: 'Large Action Models: From Inception to Implementation',
        venue: 'arXiv',
        year: '2024',
        category: 'Agent survey',
        href: 'https://arxiv.org/abs/2412.10047',
        summary:
          'A survey-style synthesis of the transition from language-only models toward systems that generate, verify, and execute actions in digital environments.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2412.10047' }],
        imageUrl: '/paper-images/large-action-models-pipeline.png',
        imageAlt: 'Large action models pipeline overview',
      },
      {
        id: 'taskweaver',
        title: 'TaskWeaver: A Code-First Agent Framework',
        venue: 'arXiv',
        year: '2023',
        category: 'Agent framework',
        href: 'https://arxiv.org/abs/2311.17541',
        summary:
          'A code-first framework that lets LLM agents solve data analytics and domain tasks through executable programs, plugins, and stateful planning.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2311.17541' },
          { label: 'Code', href: 'https://github.com/microsoft/TaskWeaver' },
        ],
      },
    ],
  },
  {
    slug: 'code-intelligence',
    title: 'Repository and Code Intelligence',
    shortTitle: 'Repository and code intelligence',
    eyebrow: 'From functions to repositories',
    description:
      'This program studies code models beyond isolated snippets: repository generation, project translation, executable representations, and training data generated through model competition.',
    homepageSummary:
      'This thread moves code intelligence from isolated functions to full repositories: generating microservices, representing project structure, translating codebases, and building executable supervision for code models.',
    question:
      'How can language models represent, generate, translate, and evaluate code at repository scale?',
    keywords: ['repository generation', 'code translation', 'executability', 'training data', 'benchmarks'],
    publications: [
      {
        id: 'repogenesis',
        title: 'RepoGenesis: Benchmarking End-to-End Microservice Generation from Readme to Repository',
        venue: 'ACL',
        year: '2026',
        category: 'Repository generation',
        href: 'https://arxiv.org/abs/2601.13943',
        summary:
          'A benchmark for generating deployable microservice repositories from natural-language requirements, with API coverage, pass rate, and deployment success metrics.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2601.13943' },
          { label: 'Project', href: 'https://microsoft.github.io/DKI_LLM/RepoGenesis/RepoGenesis_index.html' },
          { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/RepoGenesis' },
        ],
        imageUrl: '/paper-images/repogenesis-overview.png',
        imageAlt: 'RepoGenesis benchmark overview',
        featured: true,
      },
      {
        id: 'rpg-encoder',
        title: 'Closing the Loop: Universal Repository Representation with RPG-Encoder',
        venue: 'ICML',
        year: '2026',
        category: 'Repository representation',
        href: 'https://arxiv.org/abs/2602.02084',
        summary:
          'Generalizes Repository Planning Graphs into a representation for repository comprehension and generation, closing the loop between structure and produced code.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2602.02084' },
          { label: 'Code', href: 'https://github.com/microsoft/RPG-ZeroRepo/tree/main/zerorepo/rpg_encoder' },
        ],
        imageUrl: '/paper-images/rpg-encoder-pipeline.png',
        imageAlt: 'RPG-Encoder repository representation pipeline',
        featured: true,
      },
      {
        id: 'warriorcoder',
        title: 'WarriorCoder: Learning from Expert Battles to Augment Code Large Language Models',
        venue: 'ACL',
        year: '2025',
        category: 'Code model training',
        href: 'https://aclanthology.org/2025.acl-long.246/',
        summary:
          'Creates training data through battles among expert code LLMs, using competitive problem solving to diversify and strengthen code-model supervision.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2025.acl-long.246/' },
          { label: 'PDF', href: 'https://aclanthology.org/2025.acl-long.246.pdf' },
        ],
      },
      {
        id: 'execoder',
        title: 'ExeCoder: Empowering Large Language Models with Executability Representation for Code Translation',
        venue: 'EMNLP',
        year: '2025',
        category: 'Code translation',
        href: 'https://aclanthology.org/2025.emnlp-main.362/',
        summary:
          'Adds functional semantics, syntax structure, and variable-dependency signals to improve code translation executability and reliability.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2025.emnlp-main.362/' },
          { label: 'PDF', href: 'https://aclanthology.org/2025.emnlp-main.362.pdf' },
          { label: 'Code', href: 'https://aka.ms/execoder' },
        ],
      },
      {
        id: 'skeleton-guided-translation',
        title: 'Skeleton-Guided-Translation: A Benchmarking Framework for Code Repository Translation with Fine-Grained Quality Evaluation',
        venue: 'EMNLP Findings',
        year: '2025',
        category: 'Repository translation',
        href: 'https://arxiv.org/abs/2501.16050',
        summary:
          'Evaluates repository-level Java-to-C# translation with skeleton guidance and fine-grained quality measures for maintainability and correctness.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2501.16050' }],
      },
    ],
  },
  {
    slug: 'reasoning-rag',
    title: 'Reasoning, RAG, and Model Learning',
    shortTitle: 'Reasoning, RAG, and model learning',
    eyebrow: 'Structured knowledge and self-improvement',
    description:
      'This work studies deep research, procedural RAG, multi-hop retrieval, self-refinement, value learning, recommendation, and trustworthy generation.',
    homepageSummary:
      'Across deep research, RAG, recommendation, and preference learning, these papers ask how models should organize evidence, decide when to retrieve or call tools, and improve from feedback.',
    question:
      'How can models organize knowledge, decide when to retrieve or call tools, and improve themselves from feedback?',
    keywords: ['deep research', 'RAG', 'self-refinement', 'RLHF', 'recommendation', 'trustworthy LLMs'],
    publications: [
      {
        id: 'dualgraph',
        title: 'A Tale of Two Graphs: Separating Knowledge Exploration from Outline Structure for Open-Ended Deep Research',
        venue: 'ICML',
        year: '2026',
        category: 'Deep research agents',
        href: 'https://arxiv.org/abs/2602.13830',
        summary:
          'Separates knowledge exploration from report-outline structure so deep-research agents can gather evidence and organize long-form answers in parallel.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2602.13830' },
          { label: 'Project', href: 'https://microsoft.github.io/DKI_LLM/dualgraph/dualgraph_index.html' },
          { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/DualGraph' },
        ],
        imageUrl: '/paper-images/dualgraph-overview.png',
        imageAlt: 'DualGraph framework overview',
        featured: true,
      },
      {
        id: 'adnanny',
        title: 'AdNanny: One Reasoning LLM for All Offline Ads Recommendation Tasks',
        venue: 'arXiv',
        year: '2026',
        category: 'Ads recommendation',
        href: 'https://arxiv.org/abs/2602.01563',
        summary:
          'Unifies offline ads recommendation workflows under a single reasoning LLM, covering task framing, data preparation, and evaluation-oriented decision support.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2602.01563' }],
        imageUrl: '/paper-images/adnanny-pipeline.png',
        imageAlt: 'AdNanny offline ads recommendation pipeline',
      },
      {
        id: 'reprompt',
        title: 'RePrompt: Reasoning-Augmented Reprompting for Text-to-Image Generation via Reinforcement Learning',
        venue: 'ICLR',
        year: '2026',
        category: 'Reasoning for generation',
        href: 'https://arxiv.org/abs/2505.17540',
        summary:
          'Trains a reasoning-based prompt rewriter with reinforcement learning so text-to-image systems better follow spatial and compositional intent.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2505.17540' },
          { label: 'Project', href: 'https://microsoft.github.io/DKI_LLM/reprompt/reprompt_index.html' },
          { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/RePrompt' },
        ],
        imageUrl: '/paper-images/reprompt-overview.png',
        imageAlt: 'RePrompt framework overview',
        featured: true,
      },
      {
        id: 'dvpo',
        title: 'Pretrain Value, Not Reward: Decoupled Value Policy Optimization',
        venue: 'ICLR',
        year: '2026',
        category: 'Value learning',
        href: 'https://arxiv.org/abs/2502.16944',
        summary:
          'Decouples value pretraining from policy optimization, using a global value model as a stable critic for reinforcement learning from preferences.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2502.16944' },
          { label: 'Code', href: 'https://github.com/microsoft/DKI_LLM/tree/main/dvpo' },
        ],
        imageUrl: '/paper-images/dvpo-method.png',
        imageAlt: 'Decoupled value policy optimization method overview',
        featured: true,
      },
      {
        id: 'learning-to-refine',
        title: 'Learning to Refine: Self-Refinement of Parallel Reasoning in LLMs',
        venue: 'ACL Findings',
        year: '2026',
        category: 'Self-refinement',
        href: 'https://arxiv.org/abs/2509.00084',
        summary:
          'Trains LLMs to refine parallel reasoning traces, improving mathematical reasoning by detecting and closing gaps in candidate solutions.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2509.00084' }],
        imageUrl: '/paper-images/self-refine-pipeline.png',
        imageAlt: 'Learning to Refine training pipeline',
      },
      {
        id: 'duet',
        title: 'DUET: Joint Exploration of User-Item Profiles in Recommendation System',
        venue: 'ACL Findings',
        year: '2026',
        category: 'Recommendation',
        href: 'https://arxiv.org/abs/2604.13801',
        summary:
          'Jointly explores user and item profiles so recommendation systems can improve personalization by modeling both sides of the interaction.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2604.13801' }],
        imageUrl: '/paper-images/duet-overview.png',
        imageAlt: 'DUET user-item profile exploration overview',
      },
      {
        id: 'icl-bandit',
        title: 'ICL-Bandit: Relevance Labeling in Advertisement Recommendation Systems via LLM',
        venue: 'EMNLP Findings',
        year: '2025',
        category: 'Ads recommendation',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:HoB7MX3m0LUC',
        summary:
          'Uses in-context learning with a bandit-style selection strategy to improve relevance labeling for advertisement recommendation systems.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:HoB7MX3m0LUC',
          },
        ],
      },
      {
        id: 'token-level-ppo',
        title: 'Token-Level Proximal Policy Optimization for Query Generation',
        venue: 'EMNLP',
        year: '2025',
        category: 'Query generation',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:bEWYMUwI8FkC',
        summary:
          'Applies token-level policy optimization to query generation, giving retrieval and search systems finer-grained learning signals than sequence-level rewards.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:bEWYMUwI8FkC',
          },
        ],
      },
      {
        id: 'adaptflow',
        title: 'AdaptFlow: Adaptive Workflow Optimization via Meta-Learning',
        venue: 'EMNLP Findings',
        year: '2025',
        category: 'Workflow optimization',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:SeFeTyx0c_EC',
        summary:
          'Uses meta-learning to adapt workflow choices across tasks, connecting agentic planning with workflow-level optimization.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:SeFeTyx0c_EC',
          },
        ],
      },
      {
        id: 'lettingo',
        title: 'Lettingo: Explore User Profile Generation for Recommendation System',
        venue: 'KDD',
        year: '2025',
        category: 'Recommendation',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:RGFaLdJalmkC',
        summary:
          'Explores user-profile generation as a way to improve recommendation systems, complementing DUET-style profile exploration from the user side.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:RGFaLdJalmkC',
          },
        ],
      },
      {
        id: 'warriormath',
        title: 'WarriorMath: Enhancing the Mathematical Ability of Large Language Models with a Defect-Aware Framework',
        venue: 'arXiv',
        year: '2025',
        category: 'Mathematical reasoning',
        href: 'https://arxiv.org/abs/2508.01245',
        summary:
          'Targets mathematical reasoning failures with defect-aware data and training procedures, turning error patterns into stronger supervision for LLMs.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2508.01245' }],
        imageUrl: '/paper-images/warriormath-teaser.png',
        imageAlt: 'WarriorMath defect-aware mathematical reasoning framework',
      },
      {
        id: 'genception',
        title: 'GenCeption: Evaluate Vision LLMs with Unlabeled Unimodal Data',
        venue: 'Computer Speech & Language',
        year: '2025',
        category: 'Vision-language evaluation',
        href: 'https://arxiv.org/abs/2402.14973',
        summary:
          'Evaluates multimodal LLMs without manually labeled multimodal data by deriving checks from unlabeled unimodal examples.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2402.14973' }],
        imageUrl: '/paper-images/genception-overview.png',
        imageAlt: 'GenCeption multimodal evaluation overview',
      },
      {
        id: 'introducing-genception',
        title: 'Introducing GenCeption for Multimodal LLM Benchmarking: You May Bypass Annotations',
        venue: 'TrustNLP Workshop',
        year: '2024',
        category: 'Vision-language evaluation',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:hFOr9nPyWt4C',
        summary:
          'Workshop version introducing GenCeption as an annotation-light approach to multimodal LLM benchmarking.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:hFOr9nPyWt4C',
          },
        ],
      },
      {
        id: 'self-evolved-reward-learning',
        title: 'Self-Evolved Reward Learning for LLMs',
        venue: 'ICLR',
        year: '2025',
        category: 'Reward learning',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:iH-uZ7U-co4C',
        summary:
          'Studies how LLMs can improve their reward-learning signals through self-evolution, reducing dependence on static external supervision.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:iH-uZ7U-co4C',
          },
        ],
      },
      {
        id: 'ai-delegates',
        title: 'AI Delegates with a Dual Focus: Ensuring Privacy and Strategic Self-Disclosure',
        venue: 'arXiv',
        year: '2024',
        category: 'AI delegation',
        href: 'https://arxiv.org/abs/2409.17642',
        summary:
          'Studies delegated AI agents that must balance privacy protection with strategic self-disclosure in interaction settings.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2409.17642' }],
      },
      {
        id: 'thread',
        title: 'Thread: A Logic-Based Data Organization Paradigm for How-To Question Answering with Retrieval Augmented Generation',
        venue: 'EMNLP',
        year: '2025',
        category: 'Procedural RAG',
        href: 'https://aclanthology.org/2025.emnlp-main.923/',
        summary:
          'Introduces logic units as a more structured data granularity for how-to RAG, improving procedural QA success while reducing retrieved information.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2025.emnlp-main.923/' },
          { label: 'PDF', href: 'https://aclanthology.org/2025.emnlp-main.923.pdf' },
        ],
      },
      {
        id: 'efficientrag',
        title: 'EfficientRAG: Efficient Retriever for Multi-Hop Question Answering',
        venue: 'EMNLP',
        year: '2024',
        category: 'Multi-hop RAG',
        href: 'https://aclanthology.org/2024.emnlp-main.199/',
        summary:
          'An iterative retriever for multi-hop QA that generates follow-up queries and filters irrelevant information without repeatedly calling an LLM.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2024.emnlp-main.199/' },
          { label: 'PDF', href: 'https://aclanthology.org/2024.emnlp-main.199.pdf' },
          { label: 'Code', href: 'https://github.com/NIL-zhuang/EfficientRAG-official' },
        ],
      },
      {
        id: 'autorag-hp',
        title: 'AutoRAG-HP: Automatic Online Hyper-Parameter Tuning for Retrieval-Augmented Generation',
        venue: 'EMNLP Findings',
        year: '2024',
        category: 'RAG optimization',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:TFP_iSt0sucC',
        summary:
          'Automatically tunes online RAG hyperparameters so retrieval behavior can adapt to the task and data distribution without manual search.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:TFP_iSt0sucC',
          },
        ],
      },
      {
        id: 'self-guard',
        title: 'SELF-GUARD: Empower the LLM to Safeguard Itself',
        venue: 'NAACL-HLT',
        year: '2024',
        category: 'Trustworthy LLMs',
        href: 'https://aclanthology.org/2024.naacl-long.92/',
        summary:
          'Studies self-safeguarding behavior in language models, enabling the model to detect and regulate unsafe responses during generation.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2024.naacl-long.92/' },
          { label: 'PDF', href: 'https://aclanthology.org/2024.naacl-long.92.pdf' },
        ],
      },
      {
        id: 'call-me-when-necessary',
        title: 'Call Me When Necessary: LLMs can Efficiently and Faithfully Reason over Structured Environments',
        venue: 'ACL Findings',
        year: '2024',
        category: 'Tool use and reasoning',
        href: 'https://aclanthology.org/2024.findings-acl.254/',
        summary:
          'Examines when LLMs should query structured environments, balancing faithful reasoning with efficient tool calls.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2024.findings-acl.254/' },
          { label: 'PDF', href: 'https://aclanthology.org/2024.findings-acl.254.pdf' },
        ],
      },
      {
        id: 'industrial-qa',
        title: 'Empower Large Language Model to Perform Better on Industrial Domain-Specific Question Answering',
        venue: 'EMNLP',
        year: '2023',
        category: 'Domain QA',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:M3ejUd6NZC8C',
        summary:
          'Adapts LLM question answering to industrial domains, emphasizing task-specific knowledge and practical answer quality.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:M3ejUd6NZC8C',
          },
        ],
      },
      {
        id: 'introspective-tips',
        title: 'Introspective Tips: Large Language Model for In-Context Decision Making',
        venue: 'arXiv',
        year: '2023',
        category: 'In-context decision making',
        href: 'https://arxiv.org/abs/2305.11598',
        summary:
          'Uses introspective guidance to improve in-context decision making, helping language models reason over choices with lightweight self-feedback.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2305.11598' }],
      },
    ],
  },
  {
    slug: 'cloud-intelligence',
    title: 'Cloud Intelligence and Autonomic Systems',
    shortTitle: 'Cloud intelligence',
    eyebrow: 'Learning for production systems',
    description:
      'This work develops learning-based automation for cloud reliability, safe resource oversubscription, storage management, incident mitigation, and operational decision support.',
    homepageSummary:
      'This systems line brings learning into production cloud operations: safe oversubscription, incident mitigation, storage optimization, scheduling, and failure prediction under operational risk.',
    question:
      'How can large-scale services use data and learning to make operational decisions safely under uncertainty?',
    keywords: ['Microsoft 365', 'resource oversubscription', 'failure mitigation', 'cloud storage', 'temporal prediction'],
    publications: [
      {
        id: 'dynamic-vm-adjustment-patent-application',
        title: 'System and Method of Dynamically Adjusting Virtual Machines for a Workload',
        venue: 'US Patent App. 19/316,549',
        year: '2026',
        category: 'Patent application',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:cFHS6HbyZ2cC',
        summary:
          'Patent application on dynamically adjusting virtual machines for workload needs in cloud environments.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:cFHS6HbyZ2cC',
          },
        ],
      },
      {
        id: 'oversubscription-learner-patent-application',
        title: 'Oversubscription Reinforcement Learner',
        venue: 'US Patent App. 18/993,509',
        year: '2026',
        category: 'Patent application',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:M05iB0D1s5AC',
        summary:
          'Patent application covering reinforcement-learning methods for cloud resource oversubscription.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:M05iB0D1s5AC',
          },
        ],
      },
      {
        id: 'dynamic-vm-adjustment-patent',
        title: 'System and Method of Dynamically Adjusting Virtual Machines for a Workload',
        venue: 'US Patent 12,423,160',
        year: '2025',
        category: 'Patent',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:QIV2ME_5wuYC',
        summary:
          'Issued patent on dynamically adjusting virtual machines for a workload.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:QIV2ME_5wuYC',
          },
        ],
      },
      {
        id: 'protorail',
        title: 'ProtoRAIL: A Risk-Cognizant Imitation Agent for Adaptive vCPU Oversubscription In the Cloud',
        venue: 'MLSys',
        year: '2025',
        category: 'Cloud resource management',
        href: 'https://openreview.net/forum?id=Dt8s7CIsEu',
        summary:
          'A risk-aware imitation-learning agent for adaptive vCPU oversubscription, designed around operational constraints in cloud resource management.',
        links: [{ label: 'Paper', href: 'https://openreview.net/forum?id=Dt8s7CIsEu' }],
        imageUrl: '/paper-images/protorail-overview.png',
        imageAlt: 'ProtoRAIL adaptive vCPU oversubscription overview',
        featured: true,
      },
      {
        id: 'self-learning-microservices',
        title: 'Enabling Autonomic Microservice Management Through Self-Learning Agents',
        venue: 'arXiv',
        year: '2025',
        category: 'Autonomic management',
        href: 'https://arxiv.org/abs/2501.19056',
        summary:
          'Explores self-learning agents for microservice management, framing cloud operations as an adaptive decision-making problem.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2501.19056' }],
      },
      {
        id: 'autonomic-computing-vision',
        title: 'The Vision of Autonomic Computing: Can LLMs Make It a Reality?',
        venue: 'arXiv',
        year: '2024',
        category: 'Autonomic computing',
        href: 'https://arxiv.org/abs/2407.14402',
        summary:
          'Frames how LLM agents could support self-configuring, self-healing, self-optimizing, and self-protecting cloud systems.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2407.14402' }],
        imageUrl: '/paper-images/autonomic-vision-architecture.png',
        imageAlt: 'Autonomic computing vision architecture',
      },
      {
        id: 'te-pid',
        title: 'Te-PID: An Adaptive Erasure Coding Temperature Management System for Optimized Cloud Storage',
        venue: 'FSE',
        year: '2025',
        category: 'Cloud storage',
        href: 'https://dl.acm.org/doi/10.1145/3691620.3695536',
        summary:
          'Optimizes cloud storage erasure-coding behavior through adaptive temperature management for production storage workloads.',
        links: [{ label: 'Paper', href: 'https://dl.acm.org/doi/10.1145/3691620.3695536' }],
      },
      {
        id: 'coin',
        title: 'COIN: Chance-Constrained Imitation Learning for Safe and Adaptive Resource Oversubscription under Uncertainty',
        venue: 'CIKM',
        year: '2024',
        category: 'Safe resource allocation',
        href: 'https://doi.org/10.1145/3627673.3680060',
        summary:
          'Uses chance-constrained imitation learning so cloud resource oversubscription can adapt under uncertainty while bounding operational risk.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3627673.3680060' }],
      },
      {
        id: 'advanced-rl-scheduling',
        title: 'An Advanced Reinforcement Learning Framework for Online Scheduling of Deferrable Workloads in Cloud Computing',
        venue: 'arXiv',
        year: '2024',
        category: 'Cloud scheduling',
        href: 'https://arxiv.org/abs/2406.01047',
        summary:
          'Applies reinforcement learning to online scheduling decisions for deferrable cloud workloads, balancing efficiency and service constraints.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2406.01047' }],
      },
      {
        id: 'oversubscription-learner-patent-wo',
        title: 'Oversubscription Reinforcement Learner',
        venue: 'US Patent WO2024050824A1',
        year: '2024',
        category: 'Patent',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:j3f4tGmQtD8C',
        summary:
          'Patent record covering reinforcement-learning techniques for cloud resource oversubscription.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:j3f4tGmQtD8C',
          },
        ],
      },
      {
        id: 'nissist',
        title: 'Nissist: An Incident Mitigation Copilot Based on Troubleshooting Guides',
        venue: 'ECAI',
        year: '2024',
        category: 'Incident mitigation',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:ZeXyd9-uunAC',
        summary:
          'Builds an incident-mitigation copilot around troubleshooting guides, connecting operational knowledge with guided remediation steps.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:ZeXyd9-uunAC',
          },
        ],
      },
      {
        id: 'soil',
        title: 'SOIL: Score Conditioned Diffusion Model for Imbalanced Cloud Failure Prediction',
        venue: 'WWW Companion',
        year: '2024',
        category: 'Cloud failure prediction',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:qUcmZB5y_30C',
        summary:
          'Uses score-conditioned diffusion modeling to improve failure prediction when cloud telemetry is highly imbalanced.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:qUcmZB5y_30C',
          },
        ],
      },
      {
        id: 'diffusion-failure-prediction',
        title: 'Diffusion-Based Time Series Data Imputation for Cloud Failure Prediction at Microsoft 365',
        venue: 'ESEC/FSE',
        year: '2023',
        category: 'Cloud reliability',
        href: 'https://doi.org/10.1145/3611643.3613866',
        summary:
          'Applies diffusion-based imputation to incomplete telemetry so failure prediction models can operate more reliably in Microsoft 365 settings.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3611643.3613866' }],
      },
      {
        id: 'decommissioning-prediction',
        title: 'Contextual Self-Attentive Temporal Point Process for Physical Decommissioning Prediction of Cloud Assets',
        venue: 'KDD',
        year: '2023',
        category: 'Cloud asset management',
        href: 'https://doi.org/10.1145/3580305.3599794',
        summary:
          'Models physical decommissioning events with contextual temporal point processes for cloud asset lifecycle planning.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3580305.3599794' }],
      },
      {
        id: 'nenya',
        title: 'NENYA: Cascade Reinforcement Learning for Cost-Aware Failure Mitigation at Microsoft 365',
        venue: 'KDD',
        year: '2022',
        category: 'Failure mitigation',
        href: 'https://doi.org/10.1145/3534678.3539127',
        summary:
          'A cascade reinforcement-learning approach for mitigating failures while accounting for operational cost in Microsoft 365.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3534678.3539127' }],
      },
      {
        id: 'container-reallocation',
        title: 'Intelligent Container Reallocation at Microsoft 365',
        venue: 'ESEC/FSE',
        year: '2021',
        category: 'Cloud operations',
        href: 'https://doi.org/10.1145/3468264.3473936',
        summary:
          'A production-oriented system for reallocating containers in large cloud services to improve operational efficiency and reliability.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3468264.3473936' }],
      },
      {
        id: 'cooperative-oversubscription',
        title: 'Learning Cooperative Oversubscription for Cloud by Chance-Constrained Multi-Agent Reinforcement Learning',
        venue: 'WWW',
        year: '2023',
        category: 'Cloud resource management',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:ULOm3_A8WrAC',
        summary:
          'Learns cooperative oversubscription policies for cloud resources with chance constraints that account for reliability risk.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:ULOm3_A8WrAC',
          },
        ],
      },
      {
        id: 'snape',
        title: 'SNAPE: Reliable and Low-Cost Computing with Mixture of Spot and On-Demand VMs',
        venue: 'ASPLOS',
        year: '2023',
        category: 'Spot and on-demand VMs',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:YOwf2qJgpHMC',
        summary:
          'Combines spot and on-demand virtual machines to reduce cost while preserving reliability for cloud workloads.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:YOwf2qJgpHMC',
          },
        ],
      },
      {
        id: 'spot-vm-eviction',
        title: 'Spot Virtual Machine Eviction Prediction in Microsoft Cloud',
        venue: 'WWW Companion',
        year: '2022',
        category: 'Spot VM prediction',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:3fE2CSJIrl8C',
        summary:
          'Predicts spot VM evictions in Microsoft Cloud, supporting safer use of cheaper but interruptible compute capacity.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:3fE2CSJIrl8C',
          },
        ],
      },
      {
        id: 'auto-scaling-spot-on-demand',
        title: 'Auto-Scaling for Spot and On-Demand VM Mixture',
        venue: 'Scholar record',
        year: 'In progress',
        category: 'Spot and on-demand VMs',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:kNdYIx-mwKoC',
        summary:
          'Scholar-listed work on autoscaling mixtures of spot and on-demand VMs for cloud workloads.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:kNdYIx-mwKoC',
          },
        ],
      },
    ],
  },
  {
    slug: 'embodied-agents',
    title: 'Human-Aware Robotics and Embodied Agents',
    shortTitle: 'Robotics and embodied agents',
    eyebrow: 'Agents in social space',
    description:
      'This earlier ESAL-centered work studies how robots and virtual agents approach people, navigate groups, interpret social behavior, and adapt across embodiments.',
    homepageSummary:
      'My PhD and ESAL-era work focused on agents in shared physical and virtual spaces: robot approach behavior, social distance, crowd/group perception, and mixed-reality human-agent interaction.',
    question:
      'How can embodied agents move, approach, and adapt in ways that respect human social structure?',
    keywords: ['social navigation', 'human-agent interaction', 'group behavior', 'mixed reality', 'robot adaptation'],
    publications: [
      {
        id: 'science-robotics-intention',
        title: 'Cross-Robot Behavior Adaptation Through Intention Alignment',
        venue: 'Science Robotics',
        year: '2026',
        category: 'Robot behavior adaptation',
        href: 'https://doi.org/10.1126/scirobotics.adv2250',
        summary:
          'Studies intention alignment as a mechanism for adapting social behavior across robots, linking perceived intention with cross-robot transfer.',
        links: [
          { label: 'Paper', href: 'https://doi.org/10.1126/scirobotics.adv2250' },
          {
            label: 'Science ePrint',
            href: 'https://www.science.org/eprint/VRHKZNXGPTPVY7TYDUIT/full?activationRedirect=/doi/full/10.1126/scirobotics.adv2250',
          },
        ],
        featured: true,
      },
      {
        id: 'acoustic-agents',
        title: 'Measuring Acoustics with Collaborative Multiple Agents',
        venue: 'IJCAI',
        year: '2023',
        category: 'Multi-agent sensing',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&citation_for_view=g4MrE6QAAAAJ:4DMP91E08xMC',
        summary:
          'Uses collaborative embodied agents to measure acoustics, extending multi-agent coordination into physical sensing environments.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&citation_for_view=g4MrE6QAAAAJ:4DMP91E08xMC',
          },
        ],
      },
      {
        id: 'multiparty-interaction',
        title: 'Multiparty Interaction Between Humans and Socially Interactive Agents',
        venue: 'Handbook on Socially Interactive Agents',
        year: '2022',
        category: 'Virtual agents',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:Zph67rFs4hoC',
        summary:
          'Surveys and organizes multiparty interaction between people and socially interactive agents, connecting embodiment, turn-taking, and group dynamics.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:Zph67rFs4hoC',
          },
        ],
      },
      {
        id: 'approach-behavior-dataset',
        title: 'A Dataset of Human and Robot Approach Behaviors into Small Free-Standing Conversational Groups',
        venue: 'PLOS ONE',
        year: '2021',
        category: 'Social navigation dataset',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:5nxA0vEk-isC',
        summary:
          'Releases human and robot approach-behavior data for small conversational groups, supporting learning-based social navigation research.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:5nxA0vEk-isC',
          },
        ],
      },
      {
        id: 'phd-thesis',
        title: 'Simulating Group Interactions Through Machine Learning and Human Perception',
        venue: 'KTH Royal Institute of Technology',
        year: '2020',
        category: 'PhD thesis',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:hqOjcs7Dif8C',
        summary:
          'PhD thesis on simulating group interactions through machine learning and human perception, tying together crowd perception and agent approach behavior.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:hqOjcs7Dif8C',
          },
        ],
      },
      {
        id: 'trajectory-generation-perception',
        title: 'Impact of Trajectory Generation Methods on Viewer Perception of Robot Approaching Group Behaviors',
        venue: 'RO-MAN',
        year: '2020',
        category: 'Robot approach behavior',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:UebtZRa9Y70C',
        summary:
          'Compares how trajectory generation methods change viewer perception of robot approaches toward small groups.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:UebtZRa9Y70C',
          },
        ],
      },
      {
        id: 'group-behavior-recognition',
        title: 'Group Behavior Recognition Using Attention- and Graph-Based Neural Networks',
        venue: 'ECAI',
        year: '2020',
        category: 'Group behavior',
        href: 'https://doi.org/10.3233/FAIA200258',
        summary:
          'Uses attention and graph neural network structures to recognize group behavior from socially situated observations.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.3233/FAIA200258' }],
      },
      {
        id: 'appgan',
        title: 'AppGAN: Generative Adversarial Networks for Generating Robot Approach Behaviors into Small Groups of People',
        venue: 'RO-MAN',
        year: '2019',
        category: 'Social approach behavior',
        href: 'https://doi.org/10.1109/RO-MAN46459.2019.8956425',
        summary:
          'Generates robot approach behaviors for entering small groups, using adversarial learning to model socially acceptable trajectories.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1109/RO-MAN46459.2019.8956425' }],
      },
      {
        id: 'socially-appropriate-approach-rl',
        title: 'Learning Socially Appropriate Robot Approaching Behavior Toward Groups Using Deep Reinforcement Learning',
        venue: 'RO-MAN',
        year: '2019',
        category: 'Social approach behavior',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:WF5omc3nYNoC',
        summary:
          'Learns robot approach behavior toward human groups using deep reinforcement learning, with social acceptability as a central criterion.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:WF5omc3nYNoC',
          },
        ],
      },
      {
        id: 'app-lstm',
        title: 'App-LSTM: Data-Driven Generation of Socially Acceptable Trajectories for Approaching Small Groups of Agents',
        venue: 'HAI',
        year: '2019',
        category: 'Social navigation',
        href: 'https://doi.org/10.1145/3349537.3351895',
        summary:
          'Learns approach trajectories for agents joining small groups, emphasizing social acceptability and group spatial structure.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3349537.3351895' }],
      },
      {
        id: 'social-aware-navigation',
        title: 'Social-Aware Navigation in Crowds with Static and Dynamic Groups',
        venue: 'VS-GAMES',
        year: '2019',
        category: 'Crowd navigation',
        href: 'https://doi.org/10.1109/VS-Games.2019.8864512',
        summary:
          'Studies crowd navigation strategies that account for both static and dynamic social groups.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1109/VS-Games.2019.8864512' }],
      },
      {
        id: 'criticality-collision-avoidance',
        title: 'Criticality-Based Collision Avoidance Prioritization for Crowd Navigation',
        venue: 'HAI',
        year: '2019',
        category: 'Crowd navigation',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:roLk4NBRz8UC',
        summary:
          'Prioritizes collision avoidance decisions in crowds based on criticality, supporting safer local navigation choices.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:roLk4NBRz8UC',
          },
        ],
      },
      {
        id: 'priority-local-optimization',
        title: 'Priority Driven Local Optimization for Crowd Simulation',
        venue: 'AAMAS',
        year: '2019',
        category: 'Crowd simulation',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:eQOLeE2rZwMC',
        summary:
          'Uses priority-driven local optimization to improve crowd simulation behavior in interaction-heavy scenarios.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:eQOLeE2rZwMC',
          },
        ],
      },
      {
        id: 'group-joining-vr',
        title: 'Effect of Group Size on User Perception of Embodied Conversational Agents While Joining a Group in Immersive Virtual Reality',
        venue: 'IVA',
        year: '2019',
        category: 'Immersive interaction',
        href: 'https://dl.acm.org/doi/10.1145/3308532.3329421',
        summary:
          'Examines how group size changes human perception of embodied conversational agents joining groups in immersive virtual reality.',
        links: [{ label: 'Paper', href: 'https://dl.acm.org/doi/10.1145/3308532.3329421' }],
      },
      {
        id: 'mixed-reality-social-distance',
        title: 'Investigating Social Distances Between Humans, Virtual Humans and Virtual Robots in Mixed Reality',
        venue: 'AAMAS',
        year: '2018',
        category: 'Mixed reality interaction',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:IjCSPb-OGe4C',
        summary:
          'Studies social distance judgments among humans, virtual humans, and virtual robots in mixed reality.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:IjCSPb-OGe4C',
          },
        ],
      },
      {
        id: 'posture-embodiment-social-distance',
        title: 'Effects of Posture and Embodiment on Social Distance in Human-Agent Interaction in Mixed Reality',
        venue: 'IVA',
        year: '2018',
        category: 'Mixed reality interaction',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:zYLM7Y9cAGgC',
        summary:
          'Examines how posture and embodiment influence social distance in human-agent mixed-reality interaction.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:zYLM7Y9cAGgC',
          },
        ],
      },
      {
        id: 'crowd-density-group-perception',
        title: 'Do You See Groups? The Impact of Crowd Density and Viewpoint on the Perception of Groups',
        venue: 'IVA',
        year: '2018',
        category: 'Group perception',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:9yKSN-GCB0IC',
        summary:
          'Studies how crowd density and viewpoint affect whether observers perceive people as social groups.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:9yKSN-GCB0IC',
          },
        ],
      },
      {
        id: 'neighbor-perception-model',
        title: 'Who Are My Neighbors? A Perception Model for Selecting Neighbors of Pedestrians in Crowds',
        venue: 'IVA',
        year: '2018',
        category: 'Crowd perception',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:d1gkVwhDpl0C',
        summary:
          'Models which neighbors pedestrians attend to in crowds, informing simulation and navigation behavior.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:d1gkVwhDpl0C',
          },
        ],
      },
      {
        id: 'pedestrian-simulation-morl',
        title: 'Pedestrian Simulation as Multi-Objective Reinforcement Learning',
        venue: 'IVA',
        year: '2018',
        category: 'Crowd simulation',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:u-x6o8ySG0sC',
        summary:
          'Frames pedestrian simulation as a multi-objective reinforcement-learning problem balancing multiple behavioral constraints.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:u-x6o8ySG0sC',
          },
        ],
      },
      {
        id: 'mixed-reality-hri-design',
        title: 'Towards the Use of Mixed Reality for HRI Design via Virtual Robots',
        venue: 'VAM-HRI Workshop',
        year: '2018',
        category: 'Mixed reality HRI',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:W7OEmFMy1HYC',
        summary:
          'Explores mixed reality and virtual robots as a design method for human-robot interaction research.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:W7OEmFMy1HYC',
          },
        ],
      },
      {
        id: 'expressive-virtual-characters',
        title: 'Expressive Virtual Characters for Social Demonstration Games',
        venue: 'VS-GAMES',
        year: '2017',
        category: 'Virtual characters',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:Y0pCki6q_DkC',
        summary:
          'Develops expressive virtual characters for social demonstration games, an early line connecting virtual agents and interactive learning.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:Y0pCki6q_DkC',
          },
        ],
      },
      {
        id: 'virtual-poster-presenter',
        title: 'A Virtual Poster Presenter Using Mixed Reality',
        venue: 'IVA',
        year: '2017',
        category: 'Mixed reality agents',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:UeHWp8X0CEIC',
        summary:
          'Demonstrates a mixed-reality virtual poster presenter, exploring situated presentation and interaction with virtual agents.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:UeHWp8X0CEIC',
          },
        ],
      },
      {
        id: 'd4-8-expressive-virtual-characters',
        title: 'D4.8 2nd Expressive Virtual Characters',
        venue: 'Project deliverable',
        year: '2017',
        category: 'Virtual characters',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:qjMakFHDy7sC',
        summary:
          'Scholar-listed project deliverable on expressive virtual characters, connected to early virtual-agent demonstration work.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:qjMakFHDy7sC',
          },
        ],
      },
      {
        id: 'd4-7-expressive-virtual-characters',
        title: 'D4.7 1st Expressive Virtual Characters',
        venue: 'Project deliverable',
        year: '2016',
        category: 'Virtual characters',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:2osOgNQ5qMEC',
        summary:
          'Scholar-listed project deliverable on expressive virtual characters from the early ESAL virtual-agent line.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:2osOgNQ5qMEC',
          },
        ],
      },
      {
        id: 'collision-detection-displacement-surfaces',
        title: 'Collision Detection Between Dynamic Rigid Objects and Static Displacement Mapped Surfaces in Computer Games',
        venue: 'Scholar record',
        year: '2015',
        category: 'Computer graphics',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:YsMSGLbcyi4C',
        summary:
          'Early Scholar-listed work on collision detection between dynamic rigid objects and displacement-mapped surfaces in games.',
        links: [
          {
            label: 'Scholar',
            href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g4MrE6QAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=g4MrE6QAAAAJ:YsMSGLbcyi4C',
          },
        ],
      },
    ],
  },
]

export const selectedPublications = workAreas
  .flatMap((area) => area.publications.map((publication) => ({ ...publication, areaSlug: area.slug })))
  .filter((publication) => publication.featured)

export const allPublications = workAreas.flatMap((area) => area.publications)

export const newsItems: NewsItem[] = [
  {
    date: '2026',
    text: 'Recent selected papers span TMLR, ACL, ICML, ICLR, MLSys, and Science Robotics across agents, code intelligence, model learning, cloud systems, and robotics.',
  },
  {
    date: '2025',
    text: 'AXIS, WarriorCoder, ExeCoder, Thread, and related work advanced human-agent-computer interaction, code models, and procedural RAG.',
  },
  {
    date: '2024',
    text: 'EfficientRAG, SELF-GUARD, and cloud intelligence work continued the thread of efficient reasoning and reliable production decision making.',
  },
]
