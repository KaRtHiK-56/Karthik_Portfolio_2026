export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  problem: string;
  solution: string;
  metrics: { label: string; value: string; subLabel: string }[];
  tags: string[];
  category: string;
  tagId: string;
  flow?: { label: string; type: 'input' | 'process' | 'output' | 'system' }[];
  fullWidth?: boolean;
}

export interface TimelineEvent {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string[];
  skills?: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subModule: string;
  skills: { name: string; level: number }[];
  tags?: string[];
  icon: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    category: 'INTELLIGENT QUERY SYSTEM',
    tagId: '01',
    title: 'Natural Language → Structured Data, Instantly',
    subtitle: '',
    description: '',
    problem: "Non-technical stakeholders couldn't self-serve insights from enterprise CSV datasets without waiting on data analysts.",
    solution: "Agentic pipeline using LangChain + Gemini to interpret intent, translate to structured queries, and return conversational answers. Modular architecture supports multiple data sources.",
    metrics: [
      { label: 'NL→SQL', value: 'NL→SQL', subLabel: 'core_capability' },
      { label: '↓ 60%', value: '↓ 60%', subLabel: 'analyst_dependency' },
      { label: '↑ 5×', value: '↑ 5×', subLabel: 'data_accessibility' },
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'Gemini LLM'],
    flow: [
      { label: '"Show top revenue regions"', type: 'input' },
      { label: 'Gemini – Intent Parser', type: 'process' },
      { label: 'LangChain Agent', type: 'process' },
      { label: 'SELECT region, SUM(rev)...', type: 'system' },
      { label: 'Conversational Answer', type: 'output' },
    ],
  },
  {
    id: '2',
    category: 'MCP FRAMEWORK',
    tagId: '02',
    title: 'Enterprise APIs as Agent-Native Tools',
    subtitle: '',
    description: '',
    problem: "AI agents lacked structured, context-aware access to enterprise business logic — leading to hallucinations and poor decision quality.",
    solution: "Full-stack MCP implementation (server + client) that surfaces enterprise APIs as typed, context-rich tools. Orchestrated via LangChain and Google ADK for seamless multi-agent interactions.",
    metrics: [
      { label: 'MCP', value: 'MCP', subLabel: 'protocol' },
      { label: 'Multi', value: 'Multi', subLabel: 'agent_support' },
      { label: 'Real-time', value: 'Real-time', subLabel: 'decisioning' },
    ],
    tags: ['Python', 'MCP', 'LangChain', 'Google ADK'],
    flow: [
      { label: 'AI Agent Request', type: 'input' },
      { label: 'MCP Client Layer', type: 'process' },
      { label: 'MCP Server (Context Engine)', type: 'process' },
      { label: 'Enterprise APIs', type: 'system' },
      { label: 'Contextual Tool Response', type: 'output' },
    ],
  },
  {
    id: '3',
    category: 'DOCUMENT INTELLIGENCE PLATFORM',
    tagId: '03',
    title: 'Automated Document Understanding at Scale — No Console Required',
    subtitle: '',
    description: '',
    problem: "Teams relied on manual document review or expensive, console-locked cloud services. No programmatic control, no integration path.",
    solution: "Custom LLM-powered pipeline for parsing, extraction, and structured output — fully API-driven, integrated into the DOC-IQ ecosystem for unified document + data intelligence.",
    metrics: [
      { label: 'DOC-IQ', value: 'DOC-IQ', subLabel: 'platform' },
      { label: '↑ 80%', value: '↑ 80%', subLabel: 'extraction_accuracy' },
      { label: '↓ 70%', value: '↓ 70%', subLabel: 'manual_processing' },
      { label: 'REST', value: 'REST', subLabel: 'api_interface' },
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'Gemini LLM', 'REST APIs'],
    fullWidth: true,
  },
  {
    id: '4',
    category: 'TEXT-TO-SQL ENGINE',
    tagId: '04',
    title: 'Enterprise SQL Query Generation using Llama-3',
    subtitle: '',
    description: '',
    problem: "Business teams struggled to generate complex SQL queries for data analysis, creating bottlenecks and dependency on technical teams.",
    solution: "Implemented advanced Text-to-SQL engine using Llama-3 with sophisticated prompt engineering techniques. System handles 500+ complex queries with high accuracy, supporting joins, aggregations, and nested queries.",
    metrics: [
      { label: '500+', value: '500+', subLabel: 'complex_queries' },
      { label: 'Llama-3', value: 'Llama-3', subLabel: 'llm_powered' },
      { label: '↓ 85%', value: '↓ 85%', subLabel: 'query_time' },
    ],
    tags: ['Python', 'Llama-3', 'Prompt Engineering', 'SQL', 'FastAPI'],
    flow: [
      { label: '"Show revenue by region Q4"', type: 'input' },
      { label: 'Llama-3 Parser', type: 'process' },
      { label: 'Prompt Engine', type: 'process' },
      { label: 'Complex SQL Query', type: 'system' },
      { label: 'Results + Insights', type: 'output' },
    ],
  },
  {
    id: '5',
    category: 'TAX FAQ RAG PIPELINE',
    tagId: '05',
    title: 'Intelligent Tax FAQ Solutioning System',
    subtitle: '',
    description: '',
    problem: "Customer service teams struggled with tax-related inquiries, leading to inconsistent responses and poor customer experience.",
    solution: "Developed efficient TAX FAQ solutioning using RAG pipeline to address customer issues by enhancing experience with real-time and accurate responses. System processes tax documents and provides context-aware answers.",
    metrics: [
      { label: 'RAG', value: 'RAG', subLabel: 'pipeline' },
      { label: 'Real-time', value: 'Real-time', subLabel: 'responses' },
      { label: '↑ 90%', value: '↑ 90%', subLabel: 'accuracy' },
    ],
    tags: ['Python', 'RAG', 'Vector DB', 'LLM', 'FastAPI'],
    flow: [
      { label: 'Tax Question', type: 'input' },
      { label: 'RAG Retrieval', type: 'process' },
      { label: 'Context Builder', type: 'process' },
      { label: 'LLM Generation', type: 'system' },
      { label: 'Accurate Answer', type: 'output' },
    ],
  },
  {
    id: '6',
    category: 'CUSTOMER SERVICE CHATBOTS',
    tagId: '06',
    title: 'Multi-Chatbot Ecosystem with API Integration',
    subtitle: '',
    description: '',
    problem: "Customer service operations were fragmented across multiple channels with inconsistent responses and slow resolution times.",
    solution: "Developed and managed 3 production chatbots with NLU training and dialogue management for FAQ/Ticketing and API functionalities. Engineered comprehensive API streamlining communication across all client applications.",
    metrics: [
      { label: '3', value: '3', subLabel: 'chatbots' },
      { label: '10', value: '10', subLabel: 'api_integrations' },
      { label: '↑ 40%', value: '↑ 40%', subLabel: 'response_time' },
      { label: '↑ 25%', value: '↑ 25%', subLabel: 'satisfaction' },
    ],
    tags: ['Python', 'NLU', 'Dialogue Management', 'API Integration', 'Unit/Integration Tests'],
    fullWidth: true,
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: '1',
    period: 'MAR 2025 - PRESENT',
    company: 'MANHATTAN ASSOCIATES',
    role: 'SOFTWARE_ENGINEER',
    description: [
      'Architecting neural supply-chain models and optimizing large-scale logistics via generative predictive agents.',
      'Leading development of the Manhattan Agent suite and full-stack MCP frameworks for domain-specific AI orchestration.',
      'Designed modular FastAPI backends supporting low-latency, production-scale AI workloads.'
    ],
    skills: ['PYTHON', 'TENSORFLOW', 'LLM_OPS', 'MCP', 'FASTAPI'],
    isCurrent: true,
  },
  {
    id: '2',
    period: 'JUL 2023 - MAR 2025',
    company: 'TATA CONSULTANCY SERVICES',
    role: 'AI_DEVELOPER',
    description: [
      'Implemented Text-to-SQL engine using Llama-3 with prompt engineering — processed 500+ complex queries in production.',
      'Deployed RAG pipeline for Tax FAQ system, delivering real-time accurate answers and reducing resolution time.',
      'Built and deployed a customer service chatbot API across client applications — improved response times by 40% and satisfaction by 25%.',
      'Managed 3 production chatbots with NLU training, 10 API integrations, and full test suites.',
      'Led migration of 15 on-prem servers to AWS — achieved 99.9% uptime and reduced RTO.'
    ],
    skills: ['NLP', 'LANGCHAIN', 'FASTAPI', 'RAG', 'LLAMA-3'],
  },
  {
    id: '3',
    period: 'FEB 2022 - JUN 2023',
    company: 'TATA CONSULTANCY SERVICES',
    role: 'ANALYST',
    description: [
      'Managed project SLAs ensuring uninterrupted operations and zero business-impact incidents.',
      'Built Power BI dashboards for incident and SLA reporting — enabled actionable insights.',
      'Developed Splunk alert dashboards to improve real-time monitoring capabilities.'
    ],
    skills: ['SQL', 'ETL', 'POWER_BI', 'AWS', 'SPLUNK'],
  },
];
export const SKILLS: SkillCategory[] = [
  {
    id: '1',
    title: 'AI & Intelligence Engines',
    subModule: '01',
    icon: 'Brain',
    skills: [
      { name: 'LANGCHAIN_ORCHESTRATION', level: 95 },
      { name: 'GEMINI_MULTIMODAL', level: 88 },
      { name: 'RAG_ARCHITECTURE', level: 92 },
    ],
    tags: ['GOOGLE_ADK', 'MCP_PROTOCOLS', 'VECTOR_DB'],
  },
  {
    id: '2',
    title: 'Backend & Data',
    subModule: '02',
    icon: 'Database',
    skills: [
      { name: 'Python & FastAPI', level: 90 },
      { name: 'SQL Architecture', level: 85 },
      { name: 'Power BI', level: 80 },
    ],
  },
  {
    id: '3',
    title: 'Cloud & Infrastructure',
    subModule: '03',
    icon: 'Cloud',
    skills: [
      { name: 'AWS Migration', level: 85 },
      { name: 'Splunk Monitoring', level: 75 },
      { name: 'ETL Automation', level: 88 },
    ],
    tags: ['EC2', 'S3', 'RDS', 'LOG_ANALYSIS'],
  },
];
