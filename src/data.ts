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
  detailSummary?: string
  authors?: string[]
  links?: ProfileLink[]
  imageUrl?: string
  imageAlt?: string
  featured?: boolean
}

export type PatentRecord = Omit<Publication, 'imageUrl' | 'imageAlt' | 'featured'>

export type WorkArea = {
  slug: string
  title: string
  shortTitle: string
  eyebrow: string
  description: string
  homepageSummary: string
  question: string
  keywords: string[]
  homepagePublicationIds?: string[]
  publications: Publication[]
  patents?: PatentRecord[]
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
    label: 'DKI group',
    href: 'https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/',
  },
  {
    label: 'ESAL lab',
    href: 'http://www.csc.kth.se/~chpeters/ESAL/',
  },
]

export const contactEmail = 'fangkaiyang@microsoft.com'

export const recruitingNote =
  'I welcome internship candidates interested in agentic AI systems, especially computer-using agents, LLM agents, and reliable model learning, to get in touch about working with our group.'

export const biographyParagraphs: RichTextPart[][] = [
  [
    'I am a Senior Researcher in the ',
    {
      label: 'DKI group',
      href: 'https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/',
    },
    ' at Microsoft Research. My current work studies agentic AI systems: computer-using agents, GUI grounding, repository-level code intelligence, retrieval-augmented reasoning, and model-learning methods that make agents more reliable in real workflows.',
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
    ' and ',
    {
      label: 'Ginevra Castellano',
      href: 'https://www.uu.se/en/contact-and-organisation/staff?query=N14-947',
    },
    '. That earlier line of work focused on social navigation, group behavior, mixed reality, and human-agent interaction.',
  ],
  [
    'A recurring thread across these projects is decision making under structure: interfaces, repositories, knowledge graphs, cloud systems, and social spaces all impose constraints that useful agents need to understand and act within.',
  ],
]

export const quickFacts: QuickFact[] = [
  {
    label: 'Current affiliation',
    value: 'Microsoft Research, DKI group',
  },
  {
    label: 'Education',
    value: 'BSc, Zhejiang University; MSc and PhD, KTH Royal Institute of Technology',
  },
  {
    label: 'PhD supervisors',
    value: 'Christopher Peters and Ginevra Castellano, Embodied Social Agents Lab',
  },
  {
    label: 'Research focus',
    value: 'Agentic AI, code intelligence, RAG, cloud intelligence, and human-aware robotics',
  },
]

const workAreasSource: WorkArea[] = [
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
    homepagePublicationIds: ['ufo2', 'axis', 'vem', 'dover', 'gui-cursor'],
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
        href: 'https://arxiv.org/abs/2504.14603',
        summary:
          'A Windows desktop AgentOS that combines a host agent, application-specialized agents, native APIs, UI automation, and vision parsing to make computer-using agents more robust and less disruptive.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2504.14603' },
          { label: 'PDF', href: 'https://arxiv.org/pdf/2504.14603' },
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
        href: 'https://arxiv.org/abs/2502.18906',
        summary:
          'An environment-free reinforcement learning framework for GUI agents where a pretrained value environment model guides exploration without costly live UI interaction.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2502.18906' },
          { label: 'PDF', href: 'https://arxiv.org/pdf/2502.18906' },
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
        imageUrl: '/paper-images/axis-overview.png',
        imageAlt: 'AXIS interaction types and system architecture overview',
        featured: true,
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
        imageUrl: '/paper-images/taskweaver-framework.png',
        imageAlt: 'TaskWeaver code-first agent framework overview',
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
    homepagePublicationIds: ['repogenesis', 'rpg-encoder', 'warriorcoder', 'execoder'],
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
        imageUrl: '/paper-images/warriorcoder-framework.png',
        imageAlt: 'WarriorCoder expert battle training framework',
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
        imageUrl: '/paper-images/execoder-framework.png',
        imageAlt: 'ExeCoder executability representation learning overview',
      },
      {
        id: 'skeleton-guided-translation',
        title: 'Skeleton-Guided-Translation: A Benchmarking Framework for Code Repository Translation with Fine-Grained Quality Evaluation',
        venue: 'EMNLP',
        year: '2025',
        category: 'Repository translation',
        href: 'https://arxiv.org/abs/2501.16050',
        summary:
          'Evaluates repository-level Java-to-C# translation with skeleton guidance and fine-grained quality measures for maintainability and correctness.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2501.16050' }],
        imageUrl: '/paper-images/skeleton-guided-translation-framework.png',
        imageAlt: 'Skeleton-guided repository translation framework and benchmark overview',
      },
    ],
  },
  {
    slug: 'reasoning-rag',
    title: 'LLM Reasoning, RAG, and Applications',
    shortTitle: 'LLM reasoning and RAG',
    eyebrow: 'Structured knowledge and applied LLMs',
    description:
      'This work studies deep research, procedural RAG, multi-hop retrieval, trustworthy generation, and LLM applications in real information workflows.',
    homepageSummary:
      'These papers study how LLMs organize evidence, decide when to retrieve or call tools, reason over structured environments, and support QA, trustworthy generation, and multimodal evaluation tasks.',
    question:
      'How can LLMs use structured knowledge, retrieval, and task context to reason more faithfully in real applications?',
    keywords: ['deep research', 'RAG', 'procedural QA', 'trustworthy LLMs', 'LLM applications'],
    homepagePublicationIds: ['dualgraph', 'thread', 'efficientrag', 'autorag-hp', 'self-guard'],
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
        href: 'https://aclanthology.org/2024.trustnlp-1.16/',
        summary:
          'Workshop version introducing GenCeption as an annotation-light approach to multimodal LLM benchmarking.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2024.trustnlp-1.16/' },
          { label: 'PDF', href: 'https://aclanthology.org/2024.trustnlp-1.16.pdf' },
        ],
        imageUrl: '/paper-images/introducing-genception-examples.png',
        imageAlt: 'GenCeption multimodal benchmark examples',
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
        imageUrl: '/paper-images/ai-delegates-framework.png',
        imageAlt: 'AI delegates privacy and self-disclosure framework',
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
        imageUrl: '/paper-images/thread-framework.png',
        imageAlt: 'Thread procedural retrieval augmented generation framework',
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
        imageUrl: '/paper-images/efficientrag-framework.png',
        imageAlt: 'EfficientRAG iterative retrieval framework',
      },
      {
        id: 'autorag-hp',
        title: 'AutoRAG-HP: Automatic Online Hyper-Parameter Tuning for Retrieval-Augmented Generation',
        venue: 'EMNLP',
        year: '2024',
        category: 'RAG optimization',
        href: 'https://aclanthology.org/2024.findings-emnlp.223/',
        summary:
          'Automatically tunes online RAG hyperparameters so retrieval behavior can adapt to the task and data distribution without manual search.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2024.findings-emnlp.223/' },
          { label: 'PDF', href: 'https://aclanthology.org/2024.findings-emnlp.223.pdf' },
        ],
        imageUrl: '/paper-images/autorag-hp-framework.png',
        imageAlt: 'AutoRAG-HP online hyperparameter tuning framework',
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
        imageUrl: '/paper-images/self-guard-framework.png',
        imageAlt: 'SELF-GUARD self-safeguarding training and inference pipeline',
      },
      {
        id: 'call-me-when-necessary',
        title: 'Call Me When Necessary: LLMs can Efficiently and Faithfully Reason over Structured Environments',
        venue: 'ACL',
        year: '2024',
        category: 'Tool use and reasoning',
        href: 'https://aclanthology.org/2024.findings-acl.254/',
        summary:
          'Examines when LLMs should query structured environments, balancing faithful reasoning with efficient tool calls.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2024.findings-acl.254/' },
          { label: 'PDF', href: 'https://aclanthology.org/2024.findings-acl.254.pdf' },
        ],
        imageUrl: '/paper-images/call-me-when-necessary-framework.png',
        imageAlt: 'Call Me When Necessary structured reasoning framework',
      },
      {
        id: 'industrial-qa',
        title: 'Empower Large Language Model to Perform Better on Industrial Domain-Specific Question Answering',
        venue: 'EMNLP',
        year: '2023',
        category: 'Domain QA',
        href: 'https://aclanthology.org/2023.emnlp-industry.29/',
        summary:
          'Adapts LLM question answering to industrial domains, emphasizing task-specific knowledge and practical answer quality.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2023.emnlp-industry.29/' },
          { label: 'PDF', href: 'https://aclanthology.org/2023.emnlp-industry.29.pdf' },
        ],
        imageUrl: '/paper-images/industrial-qa-framework.png',
        imageAlt: 'Industrial question answering knowledge and answer generation framework',
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
        imageUrl: '/paper-images/introspective-tips-framework.png',
        imageAlt: 'Introspective Tips framework figure',
      },
    ],
  },
  {
    slug: 'ads-recommendation',
    title: 'Advertisement and Recommendation Intelligence',
    shortTitle: 'Ads and recommendation',
    eyebrow: 'Bing Ads and recommendation systems',
    description:
      'This work studies industrial ads and recommendation systems, including Bing Ads-style offline recommendation tasks, relevance labeling, user-item profile modeling, and query generation.',
    homepageSummary:
      'This thread gathers the advertisement and recommendation work: Bing Ads-style offline ads tasks, relevance labeling, user/item profile exploration, and query-generation optimization for retrieval and search systems.',
    question:
      'How can LLMs and reinforcement learning improve ads recommendation, relevance labeling, user profiling, and query generation?',
    keywords: ['Bing Ads', 'ads recommendation', 'relevance labeling', 'user profiles', 'query generation'],
    homepagePublicationIds: ['adnanny', 'duet', 'token-level-ppo', 'icl-bandit', 'lettingo'],
    publications: [
      {
        id: 'adnanny',
        title: 'AdNanny: One Reasoning LLM for All Offline Ads Recommendation Tasks',
        venue: 'arXiv',
        year: '2026',
        category: 'Ads recommendation',
        href: 'https://arxiv.org/abs/2602.01563',
        summary:
          'Unifies offline ads recommendation workflows, including Bing Ads-style task framing, data preparation, and evaluation-oriented decision support.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2602.01563' }],
        imageUrl: '/paper-images/adnanny-pipeline.png',
        imageAlt: 'AdNanny offline ads recommendation pipeline',
      },
      {
        id: 'duet',
        title: 'DUET: Joint Exploration of User-Item Profiles in Recommendation System',
        venue: 'ACL',
        year: '2026',
        category: 'Recommendation',
        href: 'https://arxiv.org/abs/2604.13801',
        summary:
          'Jointly explores user and item profiles so recommendation and ads systems can improve personalization by modeling both sides of the interaction.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2604.13801' }],
        imageUrl: '/paper-images/duet-overview.png',
        imageAlt: 'DUET user-item profile exploration overview',
      },
      {
        id: 'token-level-ppo',
        title: 'Token-Level Proximal Policy Optimization for Query Generation',
        venue: 'EMNLP',
        year: '2025',
        category: 'Query generation',
        href: 'https://aclanthology.org/2025.emnlp-main.1589/',
        summary:
          'Applies token-level policy optimization to query generation, giving search and ads systems finer-grained learning signals than sequence-level rewards.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2025.emnlp-main.1589/' },
          { label: 'PDF', href: 'https://aclanthology.org/2025.emnlp-main.1589.pdf' },
        ],
        imageUrl: '/paper-images/token-level-ppo-framework.png',
        imageAlt: 'Token-level PPO query generation training framework',
      },
      {
        id: 'icl-bandit',
        title: 'ICL-Bandit: Relevance Labeling in Advertisement Recommendation Systems via LLM',
        venue: 'EMNLP',
        year: '2025',
        category: 'Ads recommendation',
        href: 'https://aclanthology.org/2025.findings-emnlp.1273/',
        summary:
          'Uses in-context learning with a bandit-style selection strategy to improve relevance labeling for advertisement recommendation systems.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2025.findings-emnlp.1273/' },
          { label: 'PDF', href: 'https://aclanthology.org/2025.findings-emnlp.1273.pdf' },
        ],
        imageUrl: '/paper-images/icl-bandit-framework.png',
        imageAlt: 'ICL-Bandit advertisement relevance labeling framework',
      },
      {
        id: 'lettingo',
        title: 'Lettingo: Explore User Profile Generation for Recommendation System',
        venue: 'KDD',
        year: '2025',
        category: 'Recommendation',
        href: 'https://doi.org/10.1145/3711896.3737024',
        summary:
          'Explores user-profile generation as a way to improve recommendation systems, complementing DUET-style profile exploration from the user side.',
        links: [
          { label: 'Paper', href: 'https://doi.org/10.1145/3711896.3737024' },
          { label: 'arXiv', href: 'https://arxiv.org/abs/2506.18309' },
          { label: 'PDF', href: 'https://arxiv.org/pdf/2506.18309' },
        ],
        imageUrl: '/paper-images/lettingo-figure.png',
        imageAlt: 'Lettingo user profile generation preview',
      },
    ],
  },
  {
    slug: 'model-learning',
    title: 'Model Learning, Training, and Alignment',
    shortTitle: 'Model learning and training',
    eyebrow: 'Training models to improve themselves',
    description:
      'This category focuses on training and optimization methods for LLMs and agentic models: value learning, reinforcement learning, reward learning, self-refinement, workflow optimization, and defect-aware math reasoning.',
    homepageSummary:
      'These papers are about how models learn: pretraining value functions, optimizing policies, refining reasoning traces, building reward signals, and turning errors or workflow feedback into training data.',
    question:
      'How can model-training methods make LLMs and agents more reliable, capable, and aligned with task feedback?',
    keywords: ['reinforcement learning', 'reward learning', 'value learning', 'self-refinement', 'model training'],
    homepagePublicationIds: ['dvpo', 'reprompt', 'learning-to-refine', 'self-evolved-reward-learning', 'adaptflow'],
    publications: [
      {
        id: 'reprompt',
        title: 'RePrompt: Reasoning-Augmented Reprompting for Text-to-Image Generation via Reinforcement Learning',
        venue: 'ICLR',
        year: '2026',
        category: 'Reinforcement learning',
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
        venue: 'ACL',
        year: '2026',
        category: 'Self-refinement',
        href: 'https://arxiv.org/abs/2509.00084',
        summary:
          'Trains LLMs to refine parallel reasoning traces, improving mathematical reasoning by detecting and closing gaps in candidate solutions.',
        links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2509.00084' }],
        imageUrl: '/paper-images/self-refine-pipeline.png',
        imageAlt: 'Learning to Refine training pipeline',
        featured: true,
      },
      {
        id: 'adaptflow',
        title: 'AdaptFlow: Adaptive Workflow Optimization via Meta-Learning',
        venue: 'EMNLP',
        year: '2025',
        category: 'Meta-learning',
        href: 'https://aclanthology.org/2025.findings-emnlp.175/',
        summary:
          'Uses meta-learning to adapt workflow choices across tasks, connecting agentic planning with workflow-level optimization.',
        links: [
          { label: 'Paper', href: 'https://aclanthology.org/2025.findings-emnlp.175/' },
          { label: 'PDF', href: 'https://aclanthology.org/2025.findings-emnlp.175.pdf' },
        ],
        imageUrl: '/paper-images/adaptflow-framework.png',
        imageAlt: 'AdaptFlow adaptive workflow optimization and meta-learning framework',
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
        featured: true,
      },
      {
        id: 'self-evolved-reward-learning',
        title: 'Self-Evolved Reward Learning for LLMs',
        venue: 'ICLR',
        year: '2025',
        category: 'Reward learning',
        href: 'https://arxiv.org/abs/2411.00418',
        summary:
          'Studies how LLMs can improve their reward-learning signals through self-evolution, reducing dependence on static external supervision.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2411.00418' },
          { label: 'PDF', href: 'https://arxiv.org/pdf/2411.00418' },
        ],
        imageUrl: '/paper-images/self-evolved-reward-framework.png',
        imageAlt: 'Self-evolved reward learning method overview',
        featured: true,
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
    homepagePublicationIds: ['snape', 'te-pid', 'decommissioning-prediction', 'nenya', 'diffusion-failure-prediction'],
    patents: [
      {
        id: 'dynamic-vm-adjustment-patent',
        title: 'System and Method of Dynamically Adjusting Virtual Machines for a Workload',
        venue: 'US Patent 12,423,160; US Patent App. 19/316,549',
        year: '2025-2026',
        category: 'Patent',
        href: 'https://patents.google.com/patent/US12423160B2/en',
        summary:
          'Issued patent and related application on dynamically adjusting virtual machines for workload needs in cloud environments.',
        links: [
          { label: 'Patent', href: 'https://patents.google.com/patent/US12423160B2/en' },
          {
            label: 'Application search',
            href: 'https://patents.google.com/?q=%22System+and+method+of+dynamically+adjusting+virtual+machines+for+a+workload%22',
          },
        ],
      },
      {
        id: 'oversubscription-learner-patent',
        title: 'Oversubscription Reinforcement Learner',
        venue: 'WO2024050824A1; US Patent App. 18/993,509',
        year: '2024-2026',
        category: 'Patent and application',
        href: 'https://patents.google.com/patent/WO2024050824A1/en',
        summary:
          'Patent record and related US application covering reinforcement-learning methods for cloud resource oversubscription.',
        links: [
          { label: 'Patent', href: 'https://patents.google.com/patent/WO2024050824A1/en' },
          {
            label: 'Application search',
            href: 'https://patents.google.com/?q=%22Oversubscription+reinforcement+learner%22',
          },
        ],
      },
      {
        id: 'auto-scaling-spot-on-demand',
        title: 'Auto-Scaling for Spot and On-Demand VM Mixture',
        venue: 'Invention record',
        year: 'In progress',
        category: 'Spot and on-demand VMs',
        href: 'https://patents.google.com/?q=%22Auto-scaling+for+Spot+and+On-demand+VM+Mixture%22',
        summary: 'Invention record on autoscaling mixtures of spot and on-demand VMs for cloud workloads.',
        links: [
          {
            label: 'Patent search',
            href: 'https://patents.google.com/?q=%22Auto-scaling+for+Spot+and+On-demand+VM+Mixture%22',
          },
        ],
      },
    ],
    publications: [
      {
        id: 'protorail',
        title: 'ProtoRAIL: A Risk-Cognizant Imitation Agent for Adaptive vCPU Oversubscription In the Cloud',
        venue: 'MLSys',
        year: '2025',
        category: 'Cloud resource management',
        href: 'https://arxiv.org/abs/2401.07033',
        summary:
          'A risk-aware imitation-learning agent for adaptive vCPU oversubscription, designed around operational constraints in cloud resource management.',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2401.07033' },
          { label: 'PDF', href: 'https://arxiv.org/pdf/2401.07033' },
        ],
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
        imageUrl: '/paper-images/self-learning-microservices-framework.png',
        imageAlt: 'Self-learning microservice management agent framework',
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
        href: 'https://dl.acm.org/doi/10.1145/3696630.3728537',
        summary:
          'Optimizes cloud storage erasure-coding behavior through adaptive temperature management for production storage workloads.',
        links: [{ label: 'Paper', href: 'https://dl.acm.org/doi/10.1145/3696630.3728537' }],
        imageUrl: '/paper-images/te-pid-figure.png',
        imageAlt: 'Te-PID cloud storage preview',
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
        imageUrl: '/paper-images/coin-figure.png',
        imageAlt: 'COIN safe resource allocation preview',
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
        imageUrl: '/paper-images/advanced-rl-scheduling-framework.png',
        imageAlt: 'Advanced reinforcement learning scheduling framework figure',
      },
      {
        id: 'nissist',
        title: 'Nissist: An Incident Mitigation Copilot Based on Troubleshooting Guides',
        venue: 'ECAI',
        year: '2024',
        category: 'Incident mitigation',
        href: 'https://doi.org/10.3233/FAIA241032',
        summary:
          'Builds an incident-mitigation copilot around troubleshooting guides, connecting operational knowledge with guided remediation steps.',
        links: [
          { label: 'Paper', href: 'https://doi.org/10.3233/FAIA241032' },
          { label: 'arXiv', href: 'https://arxiv.org/abs/2402.17531' },
          { label: 'PDF', href: 'https://arxiv.org/pdf/2402.17531' },
        ],
        imageUrl: '/paper-images/nissist-figure.png',
        imageAlt: 'Nissist incident mitigation copilot preview',
      },
      {
        id: 'soil',
        title: 'SOIL: Score Conditioned Diffusion Model for Imbalanced Cloud Failure Prediction',
        venue: 'WWW Companion',
        year: '2024',
        category: 'Cloud failure prediction',
        href: 'https://doi.org/10.1145/3589335.3648303',
        summary:
          'Uses score-conditioned diffusion modeling to improve failure prediction when cloud telemetry is highly imbalanced.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3589335.3648303' }],
        imageUrl: '/paper-images/soil-figure.png',
        imageAlt: 'SOIL cloud failure prediction preview',
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
        links: [
          { label: 'Paper', href: 'https://doi.org/10.1145/3611643.3613866' },
          { label: 'arXiv', href: 'https://arxiv.org/abs/2309.02564' },
          { label: 'PDF', href: 'https://arxiv.org/pdf/2309.02564' },
        ],
        imageUrl: '/paper-images/diffusion-failure-prediction-figure.png',
        imageAlt: 'Diffusion-based failure prediction preview',
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
        imageUrl: '/paper-images/decommissioning-prediction-figure.png',
        imageAlt: 'Decommissioning prediction preview',
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
        imageUrl: '/paper-images/nenya-figure.png',
        imageAlt: 'NENYA failure mitigation preview',
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
        imageUrl: '/paper-images/container-reallocation-figure.png',
        imageAlt: 'Intelligent container reallocation preview',
      },
      {
        id: 'cooperative-oversubscription',
        title: 'Learning Cooperative Oversubscription for Cloud by Chance-Constrained Multi-Agent Reinforcement Learning',
        venue: 'WWW',
        year: '2023',
        category: 'Cloud resource management',
        href: 'https://doi.org/10.1145/3543507.3583298',
        summary:
          'Learns cooperative oversubscription policies for cloud resources with chance constraints that account for reliability risk.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3543507.3583298' }],
        imageUrl: '/paper-images/cooperative-oversubscription-figure.png',
        imageAlt: 'Cooperative oversubscription preview',
      },
      {
        id: 'snape',
        title: 'SNAPE: Reliable and Low-Cost Computing with Mixture of Spot and On-Demand VMs',
        venue: 'ASPLOS',
        year: '2023',
        category: 'Spot and on-demand VMs',
        href: 'https://doi.org/10.1145/3582016.3582028',
        summary:
          'Combines spot and on-demand virtual machines to reduce cost while preserving reliability for cloud workloads.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3582016.3582028' }],
        imageUrl: '/paper-images/snape-figure.png',
        imageAlt: 'SNAPE spot and on-demand VM preview',
      },
      {
        id: 'spot-vm-eviction',
        title: 'Spot Virtual Machine Eviction Prediction in Microsoft Cloud',
        venue: 'WWW Companion',
        year: '2022',
        category: 'Spot VM prediction',
        href: 'https://doi.org/10.1145/3487553.3524229',
        summary:
          'Predicts spot VM evictions in Microsoft Cloud, supporting safer use of cheaper but interruptible compute capacity.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3487553.3524229' }],
        imageUrl: '/paper-images/spot-vm-eviction-figure.png',
        imageAlt: 'Spot virtual machine eviction prediction preview',
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
    homepagePublicationIds: [
      'science-robotics-intention',
      'group-behavior-recognition',
      'approach-behavior-dataset',
      'trajectory-generation-perception',
      'appgan',
      'socially-appropriate-approach-rl',
    ],
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
        imageUrl: '/paper-images/science-robotics-intention-figure.png',
        imageAlt: 'Cross-robot behavior adaptation preview',
        featured: true,
      },
      {
        id: 'acoustic-agents',
        title: 'Measuring Acoustics with Collaborative Multiple Agents',
        venue: 'IJCAI',
        year: '2023',
        category: 'Multi-agent sensing',
        href: 'https://doi.org/10.24963/ijcai.2023/38',
        summary:
          'Uses collaborative embodied agents to measure acoustics, extending multi-agent coordination into physical sensing environments.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.24963/ijcai.2023/38' }],
        imageUrl: '/paper-images/acoustic-agents-framework.png',
        imageAlt: 'Measuring acoustics collaborative agents framework',
      },
      {
        id: 'multiparty-interaction',
        title: 'Multiparty Interaction Between Humans and Socially Interactive Agents',
        venue: 'Handbook on Socially Interactive Agents',
        year: '2022',
        category: 'Virtual agents',
        href: 'https://doi.org/10.1145/3563659.3563665',
        summary:
          'Surveys and organizes multiparty interaction between people and socially interactive agents, connecting embodiment, turn-taking, and group dynamics.',
        links: [{ label: 'Chapter', href: 'https://doi.org/10.1145/3563659.3563665' }],
        imageUrl: '/paper-images/multiparty-interaction-figure.png',
        imageAlt: 'Multiparty interaction between humans and social agents preview',
      },
      {
        id: 'approach-behavior-dataset',
        title: 'A Dataset of Human and Robot Approach Behaviors into Small Free-Standing Conversational Groups',
        venue: 'PLOS ONE',
        year: '2021',
        category: 'Social navigation dataset',
        href: 'https://doi.org/10.1371/journal.pone.0247364',
        summary:
          'Releases human and robot approach-behavior data for small conversational groups, supporting learning-based social navigation research.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1371/journal.pone.0247364' }],
        imageUrl: '/paper-images/approach-behavior-dataset-setup.png',
        imageAlt: 'Human and robot approach behavior dataset setup figure',
      },
      {
        id: 'trajectory-generation-perception',
        title: 'Impact of Trajectory Generation Methods on Viewer Perception of Robot Approaching Group Behaviors',
        venue: 'RO-MAN',
        year: '2020',
        category: 'Robot approach behavior',
        href: 'https://doi.org/10.1109/RO-MAN47096.2020.9223584',
        summary:
          'Compares how trajectory generation methods change viewer perception of robot approaches toward small groups.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1109/RO-MAN47096.2020.9223584' }],
        imageUrl: '/paper-images/trajectory-generation-perception-figure.png',
        imageAlt: 'Trajectory generation perception preview',
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
        imageUrl: '/paper-images/group-behavior-recognition-figure.png',
        imageAlt: 'Group behavior recognition preview',
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
        imageUrl: '/paper-images/appgan-figure.png',
        imageAlt: 'AppGAN robot approach behavior preview',
      },
      {
        id: 'socially-appropriate-approach-rl',
        title: 'Learning Socially Appropriate Robot Approaching Behavior Toward Groups Using Deep Reinforcement Learning',
        venue: 'RO-MAN',
        year: '2019',
        category: 'Social approach behavior',
        href: 'https://doi.org/10.1109/RO-MAN46459.2019.8956444',
        summary:
          'Learns robot approach behavior toward human groups using deep reinforcement learning, with social acceptability as a central criterion.',
        links: [
          { label: 'Paper', href: 'https://doi.org/10.1109/RO-MAN46459.2019.8956444' },
          { label: 'arXiv', href: 'https://arxiv.org/abs/1810.06979' },
          { label: 'PDF', href: 'https://arxiv.org/pdf/1810.06979' },
        ],
        imageUrl: '/paper-images/socially-appropriate-approach-rl-figure.png',
        imageAlt: 'Socially appropriate robot approach reinforcement learning preview',
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
        imageUrl: '/paper-images/app-lstm-figure.png',
        imageAlt: 'App-LSTM social trajectory generation preview',
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
        imageUrl: '/paper-images/social-aware-navigation-figure.png',
        imageAlt: 'Social-aware navigation preview',
      },
      {
        id: 'criticality-collision-avoidance',
        title: 'Criticality-Based Collision Avoidance Prioritization for Crowd Navigation',
        venue: 'HAI',
        year: '2019',
        category: 'Crowd navigation',
        href: 'https://doi.org/10.1145/3349537.3351887',
        summary:
          'Prioritizes collision avoidance decisions in crowds based on criticality, supporting safer local navigation choices.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3349537.3351887' }],
        imageUrl: '/paper-images/criticality-collision-avoidance-figure.png',
        imageAlt: 'Criticality-based collision avoidance preview',
      },
      {
        id: 'priority-local-optimization',
        title: 'Priority Driven Local Optimization for Crowd Simulation',
        venue: 'AAMAS',
        year: '2019',
        category: 'Crowd simulation',
        href: 'https://dl.acm.org/doi/10.5555/3306127.3332050',
        summary:
          'Uses priority-driven local optimization to improve crowd simulation behavior in interaction-heavy scenarios.',
        links: [{ label: 'Paper', href: 'https://dl.acm.org/doi/10.5555/3306127.3332050' }],
        imageUrl: '/paper-images/priority-local-optimization-figure.png',
        imageAlt: 'Priority driven local optimization preview',
      },
      {
        id: 'mixed-reality-social-distance',
        title: 'Investigating Social Distances Between Humans, Virtual Humans and Virtual Robots in Mixed Reality',
        venue: 'AAMAS',
        year: '2018',
        category: 'Mixed reality interaction',
        href: 'https://dl.acm.org/doi/10.5555/3237383.3238137',
        summary:
          'Studies social distance judgments among humans, virtual humans, and virtual robots in mixed reality.',
        links: [{ label: 'Paper', href: 'https://dl.acm.org/doi/10.5555/3237383.3238137' }],
        imageUrl: '/paper-images/mixed-reality-social-distance-figure.png',
        imageAlt: 'Mixed reality social distance preview',
      },
      {
        id: 'posture-embodiment-social-distance',
        title: 'Effects of Posture and Embodiment on Social Distance in Human-Agent Interaction in Mixed Reality',
        venue: 'IVA',
        year: '2018',
        category: 'Mixed reality interaction',
        href: 'https://doi.org/10.1145/3267851.3267870',
        summary:
          'Examines how posture and embodiment influence social distance in human-agent mixed-reality interaction.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3267851.3267870' }],
        imageUrl: '/paper-images/posture-embodiment-social-distance-figure.png',
        imageAlt: 'Posture and embodiment social distance preview',
      },
      {
        id: 'crowd-density-group-perception',
        title: 'Do You See Groups? The Impact of Crowd Density and Viewpoint on the Perception of Groups',
        venue: 'IVA',
        year: '2018',
        category: 'Group perception',
        href: 'https://doi.org/10.1145/3267851.3267877',
        summary:
          'Studies how crowd density and viewpoint affect whether observers perceive people as social groups.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3267851.3267877' }],
        imageUrl: '/paper-images/crowd-density-group-perception-figure.png',
        imageAlt: 'Crowd density and group perception preview',
      },
      {
        id: 'neighbor-perception-model',
        title: 'Who Are My Neighbors? A Perception Model for Selecting Neighbors of Pedestrians in Crowds',
        venue: 'IVA',
        year: '2018',
        category: 'Crowd perception',
        href: 'https://doi.org/10.1145/3267851.3267875',
        summary:
          'Models which neighbors pedestrians attend to in crowds, informing simulation and navigation behavior.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3267851.3267875' }],
        imageUrl: '/paper-images/neighbor-perception-model-figure.png',
        imageAlt: 'Pedestrian neighbor perception model preview',
      },
      {
        id: 'pedestrian-simulation-morl',
        title: 'Pedestrian Simulation as Multi-Objective Reinforcement Learning',
        venue: 'IVA',
        year: '2018',
        category: 'Crowd simulation',
        href: 'https://doi.org/10.1145/3267851.3267914',
        summary:
          'Frames pedestrian simulation as a multi-objective reinforcement-learning problem balancing multiple behavioral constraints.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1145/3267851.3267914' }],
        imageUrl: '/paper-images/pedestrian-simulation-morl-figure.png',
        imageAlt: 'Pedestrian simulation multi-objective reinforcement learning preview',
      },
      {
        id: 'mixed-reality-hri-design',
        title: 'Towards the Use of Mixed Reality for HRI Design via Virtual Robots',
        venue: 'VAM-HRI Workshop',
        year: '2018',
        category: 'Mixed reality HRI',
        href: 'https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-287336',
        summary:
          'Explores mixed reality and virtual robots as a design method for human-robot interaction research.',
        links: [{ label: 'Paper', href: 'https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-287336' }],
        imageUrl: '/paper-images/mixed-reality-hri-design-figure.png',
        imageAlt: 'Mixed reality HRI design preview',
      },
      {
        id: 'expressive-virtual-characters',
        title: 'Expressive Virtual Characters for Social Demonstration Games',
        venue: 'VS-GAMES',
        year: '2017',
        category: 'Virtual characters',
        href: 'https://doi.org/10.1109/VS-GAMES.2017.8056604',
        summary:
          'Develops expressive virtual characters for social demonstration games, an early line connecting virtual agents and interactive learning.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1109/VS-GAMES.2017.8056604' }],
        imageUrl: '/paper-images/expressive-virtual-characters-figure.png',
        imageAlt: 'Expressive virtual characters preview',
      },
      {
        id: 'virtual-poster-presenter',
        title: 'A Virtual Poster Presenter Using Mixed Reality',
        venue: 'IVA',
        year: '2017',
        category: 'Mixed reality agents',
        href: 'https://doi.org/10.1007/978-3-319-67401-8_3',
        summary:
          'Demonstrates a mixed-reality virtual poster presenter, exploring situated presentation and interaction with virtual agents.',
        links: [{ label: 'Paper', href: 'https://doi.org/10.1007/978-3-319-67401-8_3' }],
        imageUrl: '/paper-images/virtual-poster-presenter-figure.png',
        imageAlt: 'Virtual poster presenter preview',
      },
    ],
  },
]

const publicationDetailSummaries: Record<string, string> = {
  'tree-seeker':
    'TreeSeeker frames deep search as a tree of trials, errors, and returns rather than a single linear chain. The method emphasizes recovery: agents can branch, diagnose failed paths, and reuse successful partial reasoning across long searches.',
  ufo2:
    'UFO2 turns desktop automation into an AgentOS-style architecture with host-level coordination, application-specific agents, native APIs, UI automation, and visual parsing. The work is aimed at making computer-using agents less brittle in realistic Windows workflows where actions can span multiple applications.',
  vem:
    'VEM trains GUI agents without repeatedly interacting with a live environment by learning a value environment model. The model provides feedback for exploration, making GUI-agent reinforcement learning more scalable when real UI interaction is slow, costly, or unstable.',
  'gui-cursor':
    'This work treats GUI grounding as spatial reasoning with visual feedback rather than one-shot coordinate prediction. It focuses on how an agent can iteratively refine where to click or act by inspecting the screen and correcting localization mistakes.',
  'behavior-consistency':
    'The paper argues that text-based world models must preserve the behavioral consequences of actions, not just produce plausible next-state descriptions. This is important for planning agents because a simulated state is only useful if it supports the same downstream decisions as the real environment.',
  'computer-world-model':
    'Computer-Using World Model studies how agents can forecast visual UI transitions before committing to an action. By imagining candidate outcomes, the agent can compare alternatives and avoid expensive or disruptive mistakes in live software.',
  dover:
    'DoVer uses active interventions to debug multi-agent LLM systems, asking whether changing a message, plan, or intermediate decision actually repairs a failed trajectory. This moves debugging beyond passive log inspection toward causal testing of agent failures.',
  axis:
    'AXIS studies human-agent-computer interaction where agents prefer high-level APIs when available and fall back to UI actions when necessary. The result is a more efficient interaction pattern for office-style tasks, reducing long visual action sequences while preserving human oversight.',
  'large-action-models':
    'This survey organizes the emerging large action model landscape from model design to grounding, execution, evaluation, and deployment. It is useful as a conceptual map for understanding how language models become systems that choose and carry out actions.',
  taskweaver:
    'TaskWeaver is a code-first agent framework that represents task solving as executable programs connected to plugins and stateful planning. This design is especially suited to data analytics and domain tasks where intermediate computation needs to be inspected and reused.',
  repogenesis:
    'RepoGenesis benchmarks the end-to-end generation of deployable microservice repositories from natural-language README-style requirements. It evaluates not just code snippets, but API coverage, repository completeness, tests, and deployment-oriented success.',
  'rpg-encoder':
    'RPG-Encoder uses repository planning graphs as a universal representation for understanding and generating repositories. The central idea is to close the loop between structural plans and concrete code so repository-level generation can be evaluated and refined more systematically.',
  warriorcoder:
    'WarriorCoder builds code-model training data from battles among expert models, turning competitive problem solving into supervision. The approach targets stronger and more diverse code reasoning by mining expert disagreements and successful solution strategies.',
  execoder:
    'ExeCoder improves code translation by representing executability signals rather than relying only on surface syntax. It combines functional semantics, syntax structure, and variable dependencies so translated programs are more likely to run correctly.',
  'skeleton-guided-translation':
    'Skeleton-Guided-Translation evaluates repository-level translation with structural guidance and fine-grained quality checks. The benchmark highlights that translating a project requires preserving architecture, dependencies, and maintainability, not only converting individual files.',
  dualgraph:
    'DualGraph separates knowledge exploration from outline construction for open-ended deep research. This lets an agent gather evidence and organize a report structure in parallel, reducing the coupling between retrieval order and final answer organization.',
  genception:
    'GenCeption evaluates vision-language models using unlabeled unimodal data, reducing dependence on expensive multimodal annotations. The method synthesizes evaluation signals from existing image or text resources to stress-test multimodal understanding.',
  'introducing-genception':
    'This workshop paper introduces the GenCeption idea for annotation-light multimodal benchmarking. It shows how generated or transformed examples can help evaluate vision-language systems when fully labeled multimodal datasets are unavailable.',
  'ai-delegates':
    'AI Delegates studies agents that represent users while balancing privacy protection and strategic self-disclosure. The work is about making delegated AI behavior useful without exposing more private information than the task requires.',
  thread:
    'Thread proposes logic units as a structured data organization layer for how-to question answering with RAG. By retrieving procedural logic rather than large raw chunks, the method aims to improve faithfulness and reduce irrelevant context.',
  efficientrag:
    'EfficientRAG targets multi-hop question answering with an iterative retriever that can generate follow-up queries and filter irrelevant evidence. The system is designed to reduce repeated LLM calls while still collecting the facts needed for multi-step reasoning.',
  'autorag-hp':
    'AutoRAG-HP automatically tunes RAG hyperparameters online, including choices that affect retrieval breadth and evidence quality. This helps RAG systems adapt to changing task distributions without manual sweeps for every deployment setting.',
  'self-guard':
    'SELF-GUARD explores how a language model can participate in its own safety checking during generation. The work frames safeguarding as an internal capability, allowing the model to detect risky outputs and regulate responses more directly.',
  'call-me-when-necessary':
    'This paper studies when LLMs should call structured environments or tools while reasoning. The goal is to preserve faithfulness to external state while avoiding unnecessary calls that make reasoning slower or harder to audit.',
  'industrial-qa':
    'This work adapts large language models for industrial domain-specific question answering, where task context and specialized knowledge matter more than generic fluency. It focuses on practical answer quality in settings with enterprise or operational terminology.',
  'introspective-tips':
    'Introspective Tips uses lightweight self-feedback to improve in-context decision making. The method encourages a model to reason about its own choices before committing, which can improve decisions without full retraining.',
  adnanny:
    'AdNanny unifies multiple offline ads recommendation tasks under a single reasoning-LLM framework. It targets practical recommendation workflows such as relevance understanding, task framing, and evaluation support for ads systems.',
  duet:
    'DUET jointly explores user and item profiles for recommendation systems, modeling both sides of the interaction rather than treating either side as fixed. This supports richer personalization and more adaptive recommendation behavior.',
  'token-level-ppo':
    'Token-Level PPO applies reinforcement learning at the token level for query generation. Compared with sequence-level rewards, the method provides finer-grained credit assignment for search and ads query optimization.',
  'icl-bandit':
    'ICL-Bandit combines in-context learning with bandit-style selection for relevance labeling in advertisement recommendation. The method focuses on choosing useful demonstrations and labels so LLM-based relevance judgments improve efficiently.',
  lettingo:
    'Lettingo studies user profile generation for recommendation systems, exploring how generated profiles can make user interests more explicit. The work complements profile-exploration methods by focusing on the user-side representation used for recommendation.',
  reprompt:
    'RePrompt trains a reasoning-augmented prompt rewriter for text-to-image generation through reinforcement learning. The system targets compositional and spatial failures by rewriting prompts with explicit reasoning before image generation.',
  dvpo:
    'DVPO decouples value pretraining from policy optimization so a value model can provide a more stable learning signal. The paper argues that pretraining value rather than reward can improve reinforcement learning from preferences and related optimization workflows.',
  'learning-to-refine':
    'Learning to Refine teaches LLMs to improve parallel reasoning traces by identifying and correcting weak steps. The approach is motivated by math reasoning settings where several candidate paths may contain partial but repairable solutions.',
  adaptflow:
    'AdaptFlow uses meta-learning to optimize workflow choices across tasks. The work connects agent planning with workflow-level adaptation, aiming to select better tool or reasoning strategies as task conditions change.',
  warriormath:
    'WarriorMath targets mathematical reasoning by making model training defect-aware. It analyzes common failure patterns and turns those defects into supervision that helps models avoid repeated reasoning mistakes.',
  'self-evolved-reward-learning':
    'Self-Evolved Reward Learning studies how LLMs can improve reward signals through iterative self-evolution. The method reduces dependence on static reward supervision by letting the model refine what kinds of outputs should be preferred.',
  protorail:
    'ProtoRAIL is a risk-cognizant imitation agent for adaptive vCPU oversubscription in cloud systems. It focuses on learning operational policies that increase resource efficiency while respecting the risk constraints of production infrastructure.',
  'self-learning-microservices':
    'This paper frames microservice management as a self-learning agent problem, where the system adapts from operational feedback over time. It connects autonomic computing goals with modern agent architectures for cloud management.',
  'autonomic-computing-vision':
    'This vision paper revisits autonomic computing through the lens of LLM agents. It discusses how self-configuration, self-healing, self-optimization, and self-protection could become more practical with language-model-based operational assistants.',
  'te-pid':
    'Te-PID optimizes erasure-coding temperature management for cloud storage. The system adapts storage behavior to workload temperature so production services can balance cost, durability, and performance.',
  coin:
    'COIN uses chance-constrained imitation learning for safe adaptive resource oversubscription. The method is designed for uncertain cloud environments where aggressive resource sharing must still respect reliability risk.',
  'advanced-rl-scheduling':
    'This work applies reinforcement learning to online scheduling of deferrable cloud workloads. It focuses on deciding when and where to schedule jobs while balancing resource efficiency, delay tolerance, and operational constraints.',
  nissist:
    'Nissist builds an incident mitigation copilot around troubleshooting guides and operational procedures. The system turns written remediation knowledge into guided assistance for diagnosing and mitigating production incidents.',
  soil:
    'SOIL uses score-conditioned diffusion modeling for imbalanced cloud failure prediction. It addresses the common production challenge where failure cases are rare but operationally important.',
  'diffusion-failure-prediction':
    'This paper uses diffusion-based time-series imputation to recover missing telemetry before cloud failure prediction. The goal is to make Microsoft 365 reliability models more robust when production monitoring data is incomplete or irregular.',
  'decommissioning-prediction':
    'This work models cloud asset decommissioning with contextual self-attentive temporal point processes. It supports lifecycle planning by predicting physical decommissioning events from temporal and contextual signals.',
  nenya:
    'NENYA uses cascade reinforcement learning for cost-aware failure mitigation in Microsoft 365. The system models mitigation as a staged decision process, balancing reliability improvements against operational cost.',
  'container-reallocation':
    'This production-oriented work studies intelligent container reallocation in Microsoft 365. It focuses on moving containers to improve efficiency and reliability while respecting the constraints of large-scale service operations.',
  'cooperative-oversubscription':
    'This paper learns cooperative oversubscription policies with chance-constrained multi-agent reinforcement learning. The setting captures how multiple resource managers can coordinate under uncertainty while controlling reliability risk.',
  snape:
    'SNAPE combines spot and on-demand virtual machines to reduce computing cost without sacrificing reliability. The system studies how to use interruptible capacity safely by mixing it with more stable resources.',
  'spot-vm-eviction':
    'This work predicts spot virtual machine evictions in Microsoft Cloud. Better eviction forecasts help services use low-cost interruptible compute while planning around the risk of interruption.',
  'science-robotics-intention':
    'This Science Robotics work studies cross-robot behavior adaptation through intention alignment. It asks how perceived intention can transfer across embodiments so different robots exhibit socially legible behavior.',
  'acoustic-agents':
    'This paper uses collaborative multiple agents to measure acoustics in physical environments. It connects embodied sensing with multi-agent coordination, where agents must decide how to move and collect measurements together.',
  'multiparty-interaction':
    'This chapter organizes the challenges of multiparty interaction between humans and socially interactive agents. It covers issues such as turn-taking, group formation, attention, and embodiment in multi-person settings.',
  'approach-behavior-dataset':
    'This dataset paper collects human and robot approaches into small free-standing conversational groups. The data supports learning and evaluation for social navigation scenarios where group geometry and approach direction matter.',
  'trajectory-generation-perception':
    'This work compares trajectory generation methods for robots approaching conversational groups and studies how observers perceive those approaches. It links path planning choices with human judgments of social appropriateness.',
  'group-behavior-recognition':
    'This paper recognizes group behavior using attention and graph-based neural networks. The method models relations among people, which is essential for social robots and virtual agents operating around groups.',
  appgan:
    'AppGAN generates robot approach behaviors for entering small groups of people. The adversarial setup is used to learn socially plausible approach trajectories from examples rather than hand-coding all interaction rules.',
  'socially-appropriate-approach-rl':
    'This work uses deep reinforcement learning to learn socially appropriate robot approaches toward groups. The key challenge is optimizing movement not only for reaching a target but also for respecting social space.',
  'app-lstm':
    'App-LSTM learns data-driven trajectories for approaching small groups of agents. It uses sequence modeling to capture how socially acceptable approach paths unfold over time.',
  'social-aware-navigation':
    'This work studies navigation in crowds with both static and dynamic groups. It emphasizes that socially aware navigation must account for group membership and group motion, not just individual obstacle avoidance.',
  'criticality-collision-avoidance':
    'This paper prioritizes collision avoidance decisions by criticality in crowd navigation. The method helps an agent decide which nearby interactions need attention first when many potential conflicts exist.',
  'priority-local-optimization':
    'Priority Driven Local Optimization improves crowd simulation by assigning priorities during local interaction resolution. The approach helps simulated pedestrians coordinate in dense, interaction-heavy scenes.',
  'mixed-reality-social-distance':
    'This paper investigates social distance judgments between humans, virtual humans, and virtual robots in mixed reality. It explores how embodiment changes the interpersonal spacing people expect around agents.',
  'posture-embodiment-social-distance':
    'This work examines how posture and embodiment affect social distance in mixed-reality human-agent interaction. It shows that body configuration and agent form both influence how people position themselves around virtual agents.',
  'crowd-density-group-perception':
    'This paper studies how crowd density and viewpoint shape whether observers perceive people as belonging to groups. The findings are relevant for crowd simulation and social agents that need to infer group structure.',
  'neighbor-perception-model':
    'This work models which neighbors pedestrians attend to in crowds. Selecting perceptually relevant neighbors helps simulation and navigation systems focus on the interactions that most affect movement decisions.',
  'pedestrian-simulation-morl':
    'This paper frames pedestrian simulation as a multi-objective reinforcement-learning problem. It balances goals such as progress, collision avoidance, and social plausibility rather than optimizing a single reward.',
  'mixed-reality-hri-design':
    'This work explores mixed reality as a design medium for human-robot interaction using virtual robots. It allows researchers to prototype robot behavior and study user responses before deploying physical hardware.',
  'expressive-virtual-characters':
    'This paper develops expressive virtual characters for social demonstration games. It connects character animation, social signaling, and interactive learning in early virtual-agent work.',
  'virtual-poster-presenter':
    'This work demonstrates a virtual poster presenter in mixed reality. It explores how a situated virtual agent can guide presentation and interaction around shared visual content.',
}

const publicationAuthors: Record<string, string[]> = {
  'tree-seeker': ['Zhuofan Shi', 'Mingzhe Ma', 'Lu Wang', 'Fangkai Yang', 'Pu Zhao', 'Yiming Guan', 'Youling Huang', 'Wei Zhang', 'Qingwei Lin', 'Dongmei Zhang', 'Saravan Rajmohan'],
  'ufo2': ['Chaoyun Zhang', 'He Huang', 'Chiming Ni', 'Jian Mu', 'Si Qin', 'Shilin He', 'Lu Wang', 'Fangkai Yang', 'Pu Zhao', 'Chao Du', 'Liqun Li', 'Yu Kang', 'Zhao Jiang', 'Suzhen Zheng', 'Rujia Wang', 'Jiaxu Qian', 'Minghua Ma', 'Jian-Guang Lou', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  vem: ['Jiani Zheng', 'Lu Wang', 'Fangkai Yang', 'Chaoyun Zhang', 'Lingrui Mei', 'Wenjie Yin', 'Qingwei Lin', 'Dongmei Zhang', 'Saravan Rajmohan', 'Qi Zhang'],
  'gui-cursor': ['Yu Zhao', 'Wei-Ning Chen', 'Huseyin Atahan Inan', 'Samuel Kessler', 'Lu Wang', 'Lukas Wutschitz', 'Fangkai Yang', 'Chaoyun Zhang', 'Pasquale Minervini', 'Saravan Rajmohan', 'Robert Sim'],
  'behavior-consistency': ['Youling Huang', 'Guanqiao Chen', 'Junchi Yao', 'Lu Wang', 'Fangkai Yang', 'Chao Du', 'ChenZhuo Zhao', 'Pu Zhao', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  'computer-world-model': ['Yiming Guan', 'Rui Yu', 'John Zhang', 'Lu Wang', 'Chaoyun Zhang', 'Liqun Li', 'Bo Qiao', 'Si Qin', 'He Huang', 'Fangkai Yang', 'Pu Zhao', 'Lukas Wutschitz', 'Samuel Kessler', 'Huseyin A Inan', 'Robert Sim', 'Saravan Rajmohan', 'Qingwei Lin', 'Dongmei Zhang'],
  dover: ['Ming Ma', 'Jue Zhang', 'Fangkai Yang', 'Yu Kang', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  axis: ['Junting Lu', 'Zhiyang Zhang', 'Fangkai Yang', 'Jue Zhang', 'Lu Wang', 'Chao Du', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang', 'Qi Zhang'],
  'large-action-models': ['Lu Wang', 'Fangkai Yang', 'Chaoyun Zhang', 'Junting Lu', 'Jiaxu Qian', 'Shilin He', 'Pu Zhao', 'Bo Qiao', 'Ray Huang', 'Si Qin', 'Qisheng Su', 'Jiayi Ye', 'Yudi Zhang', 'Jian-Guang Lou', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang', 'Qi Zhang'],
  taskweaver: ['Bo Qiao', 'Liqun Li', 'Xu Zhang', 'Shilin He', 'Yu Kang', 'Chaoyun Zhang', 'Fangkai Yang', 'Hang Dong', 'Jue Zhang', 'Lu Wang', 'Minghua Ma', 'Pu Zhao', 'Si Qin', 'Xiaoting Qin', 'Chao Du', 'Yong Xu', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  repogenesis: ['Zhiyuan Peng', 'Xin Yin', 'Pu Zhao', 'Fangkai Yang', 'Lu Wang', 'Ran Jia', 'Xu Chen', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  'rpg-encoder': ['Jane Luo', 'Chengyu Yin', 'Xin Zhang', 'Qingtao Li', 'Steven Liu', 'Yiming Huang', 'Jie Wu', 'Hao Liu', 'Yangyu Huang', 'Yu Kang', 'Fangkai Yang', 'Ying Xin', 'Scarlett Li'],
  warriorcoder: ['Huawen Feng', 'Pu Zhao', 'Qingfeng Sun', 'Can Xu', 'Fangkai Yang', 'Lu Wang', 'Qianli Ma', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang', 'Qi Zhang'],
  execoder: ['Minghua He', 'Yue Chen', 'Fangkai Yang', 'Pu Zhao', 'Wenjie Yin', 'Yu Kang', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  'skeleton-guided-translation': ['Xing Zhang', 'Jiaheng Wen', 'Fangkai Yang', 'Pu Zhao', 'Yu Kang', 'Junhao Wang', 'Maoquan Wang', 'Yufan Huang', 'Elsie Nallipogu', 'Qingwei Lin', 'Yingnong Dang', 'Saravan Rajmohan', 'Dongmei Zhang', 'Qi Zhang'],
  dualgraph: ['Zhuofan Shi', 'Ming Ma', 'Zekun Yao', 'Fangkai Yang', 'Jue Zhang', 'Dongge Han', 'Victor Rühle', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  genception: ['Lele Cao', 'Valentin Buchner', 'Zineb Senane', 'Fangkai Yang'],
  'introducing-genception': ['Lele Cao', 'Valentin Buchner', 'Zineb Senane', 'Fangkai Yang'],
  'ai-delegates': ['Zhiyang Zhang', 'Xi Chen', 'Fangkai Yang', 'Xiaoting Qin', 'Chao Du', 'Xi Cheng', 'Hangxin Liu', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  thread: ['Kaikai An', 'Fangkai Yang', 'Liqun Li', 'Junting Lu', 'Sitao Cheng', 'Shuzheng Si', 'Lu Wang', 'Pu Zhao', 'Lele Cao', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang', 'Baobao Chang'],
  efficientrag: ['Ziyuan Zhuang', 'Zhiyang Zhang', 'Sitao Cheng', 'Fangkai Yang', 'Jia Liu', 'Shujian Huang', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang', 'Qi Zhang'],
  'autorag-hp': ['Jia Fu', 'Xiaoting Qin', 'Fangkai Yang', 'Lu Wang', 'Jue Zhang', 'Qingwei Lin', 'Yubo Chen', 'Dongmei Zhang', 'Saravan Rajmohan', 'Qi Zhang'],
  'self-guard': ['Zezhong Wang', 'Fangkai Yang', 'Lu Wang', 'Pu Zhao', 'Hongru Wang', 'Liang Chen', 'Qingwei Lin', 'Kam-Fai Wong'],
  'call-me-when-necessary': ['Sitao Cheng', 'Ziyuan Zhuang', 'Yong Xu', 'Fangkai Yang', 'Chaoyun Zhang', 'Xiaoting Qin', 'Xiang Huang', 'Ling Chen', 'Qingwei Lin', 'Dongmei Zhang', 'Saravan Rajmohan', 'Qi Zhang'],
  'industrial-qa': ['Fangkai Yang', 'Pu Zhao', 'Zezhong Wang', 'Lu Wang', 'Jue Zhang', 'Mohit Garg', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  'introspective-tips': ['Liting Chen', 'Lu Wang', 'Hang Dong', 'Yali Du', 'Jie Yan', 'Fangkai Yang', 'Shuang Li', 'Pu Zhao', 'Si Qin', 'Saravan Rajmohan', 'Qingwei Lin', 'Dongmei Zhang'],
  adnanny: ['Nan Hu', 'Han Li', 'Jimeng Sun', 'Lu Wang', 'Fangkai Yang', 'Bo Qiao', 'Pu Zhao', 'David Dai', 'Mengyu Liu', 'Yuefeng Zhan', 'Jianjin Zhang', 'Weihao Han', 'Allen Sun', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang', 'Denvy Deng', 'Feng Sun', 'Qi Zhang'],
  duet: ['Yue Chen', 'Yifei Sun', 'Lu Wang', 'Fangkai Yang', 'Pu Zhao', 'Minjie Hong', 'Yifei Dong', 'Minghua He', 'Nan Hu', 'Jianjin Zhang', 'Zhiwei Dai', 'Yuefeng Zhan', 'Weihao Han', 'Hao Sun', 'Qingwei Lin', 'Weiwei Deng', 'Feng Sun', 'Qi Zhang', 'Saravan Rajmohan', 'Dongmei Zhang'],
  'token-level-ppo': ['Yichen Ouyang', 'Lu Wang', 'Fangkai Yang', 'Pu Zhao', 'Chenghua Huang', 'Jianfeng Liu', 'Bochen Pang', 'Yaming Yang', 'Yuefeng Zhan', 'Hao Sun', 'Qingwei Lin', 'Saravan Rajmohan', 'Weiwei Deng', 'Dongmei Zhang', 'Feng Sun', 'Qi Zhang'],
  'icl-bandit': ['Lu Wang', 'Chiming Duan', 'Pu Zhao', 'Fangkai Yang', 'Yong Shi', 'Xuefeng Luo', 'Bingjing Xu', 'Weiwei Deng', 'Qingwei Lin', 'Dongmei Zhang'],
  lettingo: ['Lu Wang', 'Di Zhang', 'Fangkai Yang', 'Pu Zhao', 'Jianfeng Liu', 'Yuefeng Zhan', 'Hao Sun', 'Qingwei Lin', 'Weiwei Deng', 'Dongmei Zhang', 'Feng Sun', 'Qi Zhang'],
  reprompt: ['Mingrui Wu', 'Lu Wang', 'Pu Zhao', 'Fangkai Yang', 'Jianjin Zhang', 'Jianfeng Liu', 'Yuefeng Zhan', 'Weihao Han', 'Hao Sun', 'Jiayi Ji', 'Xiaoshuai Sun', 'Qingwei Lin', 'Weiwei Deng', 'Dongmei Zhang', 'Feng Sun', 'Qi Zhang', 'Rongrong Ji'],
  dvpo: ['Chenghua Huang', 'Lu Wang', 'Fangkai Yang', 'Pu Zhao', 'Zhixu Li', 'Qingwei Lin', 'Dongmei Zhang', 'Saravan Rajmohan', 'Qi Zhang'],
  'learning-to-refine': ['Qibin Wang', 'Pu Zhao', 'Shaohan Huang', 'Fangkai Yang', 'Lu Wang', 'Furu Wei', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  adaptflow: ['Runchuan Zhu', 'Bowen Jiang', 'Lingrui Mei', 'Fangkai Yang', 'Lu Wang', 'Haoxiang Gao', 'Fengshuo Bai', 'Pu Zhao', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  warriormath: ['Yue Chen', 'Minghua He', 'Fangkai Yang', 'Pu Zhao', 'Lu Wang', 'Yu Kang', 'Yifei Dong', 'Yuefeng Zhan', 'Hao Sun', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang'],
  'self-evolved-reward-learning': ['Chenghua Huang', 'Zhizhen Fan', 'Lu Wang', 'Fangkai Yang', 'Pu Zhao', 'Zeqi Lin', 'Qingwei Lin', 'Dongmei Zhang', 'Saravan Rajmohan', 'Qi Zhang'],
  protorail: ['Lu Wang', 'Mayukh Das', 'Fangkai Yang', 'Junjie Sheng', 'Bo Qiao', 'Hang Dong', 'Si Qin', 'Victor Rühle', 'Chetan Bansal', 'Eli Cortez', 'Íñigo Goiri', 'Saravan Rajmohan', 'Qingwei Lin', 'Dongmei Zhang'],
  'self-learning-microservices': ['Fenglin Yu', 'Fangkai Yang', 'Xiaoting Qin', 'Zhiyang Zhang', 'Jue Zhang', 'Qingwei Lin', 'Hongyu Zhang', 'Yingnong Dang', 'Saravan Rajmohan', 'Dongmei Zhang', 'Qi Zhang'],
  'autonomic-computing-vision': ['Zhiyang Zhang', 'Fangkai Yang', 'Xiaoting Qin', 'Jue Zhang', 'Qingwei Lin', 'Gong Cheng', 'Dongmei Zhang', 'Saravan Rajmohan', 'Qi Zhang'],
  'te-pid': ['Pei Xiao', 'Lu Wang', 'Fangkai Yang', 'Guoqing Geng', 'Haoran Li', 'Jeff Zhu', 'Yu Kang', 'Yifan Li', 'Terry Chen', 'Yue Chen', 'Saravan Rajmohan', 'Qi Zhang'],
  coin: ['Lu Wang', 'Mayukh Das', 'Fangkai Yang', 'Chao Du', 'Bo Qiao', 'Hang Dong', 'Chetan Bansal', 'Si Qin', 'Saravan Rajmohan', 'Qingwei Lin', 'Dongmei Zhang', 'Qi Zhang'],
  'advanced-rl-scheduling': ['Hang Dong', 'Liwen Zhu', 'Zhao Shan', 'Bo Qiao', 'Fangkai Yang', 'Si Qin', 'Chuan Luo', 'Qingwei Lin', 'Yuwen Yang', 'Gurpreet Virdi', 'Saravan Rajmohan', 'Dongmei Zhang', 'Thomas Moscibroda'],
  nissist: ['Kaikai An', 'Fangkai Yang', 'Junting Lu', 'Liqun Li', 'Zhixing Ren', 'Hao Huang', 'Lu Wang', 'Pu Zhao', 'Yu Kang', 'Hua Ding', 'Qingwei Lin', 'Saravan Rajmohan', 'Dongmei Zhang', 'Qi Zhang'],
  soil: ['Chiming Duan', 'Fangkai Yang', 'Pu Zhao', 'Lingling Zheng', 'Yash Dagli', 'Yudong Liu', 'Qingwei Lin', 'Dongmei Zhang'],
  'diffusion-failure-prediction': ['Fangkai Yang', 'Wenjie Yin', 'Lu Wang', 'Tianci Li', 'Pu Zhao', 'Bo Liu', 'Paul Wang', 'Bo Qiao', 'Yudong Liu', 'Mårten Björkman', 'Saravan Rajmohan', 'Qingwei Lin', 'Dongmei Zhang'],
  'decommissioning-prediction': ['Fangkai Yang', 'Jue Zhang', 'Lu Wang', 'Bo Qiao', 'Di Weng', 'Xiaoting Qin', 'Gregory Weber', 'Durgesh Nandini Das', 'Srinivasan Rakhunathan', 'Ranganathan Srikanth', 'Qingwei Lin', 'Dongmei Zhang'],
  nenya: ['Lu Wang', 'Pu Zhao', 'Chao Du', 'Chuan Luo', 'Mengna Su', 'Fangkai Yang', 'Yudong Liu', 'Qingwei Lin', 'Min Wang', 'Yingnong Dang', 'Hongyu Zhang', 'Saravan Rajmohan', 'Dongmei Zhang'],
  'container-reallocation': ['Bo Qiao', 'Fangkai Yang', 'Chuan Luo', 'Yanan Wang', 'Johnny Li', 'Qingwei Lin', 'Hongyu Zhang', 'Mohit Datta', 'Andrew Zhou', 'Thomas Moscibroda', 'Saravanakumar Rajmohan', 'Dongmei Zhang'],
  'cooperative-oversubscription': ['Junjie Sheng', 'Lu Wang', 'Fangkai Yang', 'Bo Qiao', 'Hang Dong', 'Xiangfeng Wang', 'Bo Jin', 'Jun Wang', 'Si Qin', 'Saravan Rajmohan', 'Qingwei Lin', 'Dongmei Zhang'],
  snape: ['Fangkai Yang', 'Lu Wang', 'Zhenyu Xu', 'Jue Zhang', 'Liqun Li', 'Bo Qiao', 'Camille Couturier', 'Chetan Bansal', 'Soumya Ram', 'Si Qin', 'Zhen Ma', 'Íñigo Goiri', 'Eli Cortez', 'Terry Yang', 'Victor Rühle', 'Saravan Rajmohan', 'Qingwei Lin', 'Dongmei Zhang'],
  'spot-vm-eviction': ['Fangkai Yang', 'Bowen Pang', 'Jue Zhang', 'Bo Qiao', 'Lu Wang', 'Camille Couturier', 'Chetan Bansal', 'Soumya Ram', 'Si Qin', 'Zhen Ma', 'Íñigo Goiri', 'Eli Cortez', 'Senthil Baladhandayutham', 'Victor Rühle', 'Saravan Rajmohan', 'Qingwei Lin', 'Dongmei Zhang'],
  'science-robotics-intention': ['Xi Chen', 'Yuan Gao', 'Hangxin Liu', 'Fangkai Yang', 'Ali Ghadirzadeh', 'Jun Yang', 'Bin Liang', 'Chongjie Zhang', 'Tin Lun Lam', 'Song-Chun Zhu'],
  'acoustic-agents': ['Yinfeng Yu', 'Changan Chen', 'Lele Cao', 'Fangkai Yang', 'Fuchun Sun'],
  'multiparty-interaction': ['Sarah Gillet', 'Marynel Vázquez', 'Christopher Peters', 'Fangkai Yang', 'Iolanda Leite'],
  'approach-behavior-dataset': ['Fangkai Yang', 'Yuan Gao', 'Ruiyang Ma', 'Sahba Zojaji', 'Ginevra Castellano', 'Christopher Peters'],
  'trajectory-generation-perception': ['Fangkai Yang', 'Wenjie Yin', 'Marten Bjorkman', 'Christopher Peters'],
  'group-behavior-recognition': ['Fangkai Yang', 'Wenjie Yin', 'Tetsunari Inamura', 'Marten Bjorkman', 'Christopher Peters'],
  appgan: ['Fangkai Yang', 'Christopher Peters'],
  'socially-appropriate-approach-rl': ['Yuan Gao', 'Fangkai Yang', 'Martin Frisk', 'Daniel Hernandez', 'Christopher Peters', 'Ginevra Castellano'],
  'app-lstm': ['Fangkai Yang', 'Christopher Peters'],
  'social-aware-navigation': ['Fangkai Yang', 'Christopher Peters'],
  'criticality-collision-avoidance': ['Himangshu Saikia', 'Fangkai Yang', 'Christopher Peters'],
  'priority-local-optimization': ['Himangshu Saikia', 'Fangkai Yang', 'Christopher Peters'],
  'mixed-reality-social-distance': ['Christopher Peters', 'Chengjie Li', 'Fangkai Yang', 'Vanya Avramova', 'Gabriel Skantze'],
  'posture-embodiment-social-distance': ['Chengjie Li', 'Theofronia Androulakaki', 'Alex Yuan Gao', 'Fangkai Yang', 'Himangshu Saikia', 'Christopher Peters', 'Gabriel Skantze'],
  'crowd-density-group-perception': ['Fangkai Yang', 'Jack Shabo', 'Adam Qureshi', 'Christopher Peters'],
  'neighbor-perception-model': ['Fangkai Yang', 'Himangshu Saikia', 'Christopher Peters'],
  'pedestrian-simulation-morl': ['Naresh Balaji Ravichandran', 'Fangkai Yang', 'Christopher Peters', 'Anders Lansner', 'Pawel Herman'],
  'mixed-reality-hri-design': ['Christopher Peters', 'Fangkai Yang', 'Himangshu Saikia', 'Chengjie Li', 'Gabriel Skantze'],
  'expressive-virtual-characters': ['Fangkai Yang', 'Chengjie Li', 'Robin Palmberg', 'Ewoud Van Der Heide', 'Christopher Peters'],
  'virtual-poster-presenter': ['Vanya Avramova', 'Fangkai Yang', 'Chengjie Li', 'Christopher Peters', 'Gabriel Skantze'],
}

const attachPublicationMetadata = (area: WorkArea): WorkArea => ({
  ...area,
  publications: area.publications.map((publication) => ({
    ...publication,
    detailSummary: publicationDetailSummaries[publication.id] ?? publication.summary,
    authors: publicationAuthors[publication.id],
  })),
})

const workAreaOrder = [
  'code-intelligence',
  'reasoning-rag',
  'ads-recommendation',
  'computer-use',
  'model-learning',
  'cloud-intelligence',
  'embodied-agents',
]

export const workAreas = [...workAreasSource]
  .map(attachPublicationMetadata)
  .sort((first, second) => workAreaOrder.indexOf(first.slug) - workAreaOrder.indexOf(second.slug))

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
