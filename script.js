/**
 * My Personal GenAI Roadmap Tracker
 * Pure Vanilla JavaScript Implementation
 * Preserves the full 5-Month (20-Week) curriculum extracted from the uploaded PDF.
 */

// Embedded curriculum data to ensure 100% reliable offline/local file:// execution
const EMBEDDED_CURRICULUM = [
  {
    monthNumber: 1,
    monthTitle: "Month 1 — Python Mastery & Applied Foundations",
    weekRange: "Weeks 1–4",
    weeks: [
      {
        weekNumber: 1,
        weekTitle: "Python Foundations & Core Syntax",
        phase: "Month 1",
        keyOutcome: "Gain fluency in Python setup, core syntax, string manipulation, and environment debugging. Build a Student Info System using f-strings.",
        project: "Build a Student Info System using f-strings",
        topics: [
          {
            id: "w1_t1",
            title: "Development setup (Python, VS Code), execution basics, debugging",
            subtopics: [
              { id: "w1_t1_s1", title: "Development setup (Python, VS Code)" },
              { id: "w1_t1_s2", title: "Execution basics, debugging" }
            ]
          },
          {
            id: "w1_t2",
            title: "Data types, variables, operators, strings, f-strings, docstrings",
            subtopics: [
              { id: "w1_t2_s1", title: "Data types, variables, operators" },
              { id: "w1_t2_s2", title: "Strings, f-strings, docstrings" }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        weekTitle: "Control Flow & Data Structures",
        phase: "Month 1",
        keyOutcome: "Master data structures and functional design patterns. Build a Student Record Management System with dictionaries and functions.",
        project: "Build a Student Record Management System with dictionaries and functions",
        topics: [
          {
            id: "w2_t1",
            title: "Data collections (Lists, Tuples, Dictionaries, Sets)",
            subtopics: [
              { id: "w2_t1_s1", title: "Lists, Tuples, Dictionaries, Sets" },
              { id: "w2_t1_s2", title: "Data collection operations & methods" }
            ]
          },
          {
            id: "w2_t2",
            title: "Control flow (Loops, Conditionals), functions, recursion, lambda, enumerate",
            subtopics: [
              { id: "w2_t2_s1", title: "Control flow (Loops, Conditionals)" },
              { id: "w2_t2_s2", title: "Functions, recursion, lambda, enumerate" }
            ]
          }
        ]
      },
      {
        weekNumber: 3,
        weekTitle: "Production Python & Modular Project Structure",
        phase: "Month 1",
        keyOutcome: "Develop production-grade error handling and clean code structure. Build a modular File-Based Expense Tracker.",
        project: "Build a modular File-Based Expense Tracker",
        topics: [
          {
            id: "w3_t1",
            title: "Exception handling, custom errors, file I/O operations",
            subtopics: [
              { id: "w3_t1_s1", title: "Exception handling & custom errors" },
              { id: "w3_t1_s2", title: "File I/O operations" }
            ]
          },
          {
            id: "w3_t2",
            title: "Virtual environments (venv), pip, modules, multithreading, modular code organization",
            subtopics: [
              { id: "w3_t2_s1", title: "Virtual environments (venv), pip & modules" },
              { id: "w3_t2_s2", title: "Multithreading & modular code organization" }
            ]
          }
        ]
      },
      {
        weekNumber: 4,
        weekTitle: "OOP & Applied Python for AI",
        phase: "Month 1",
        keyOutcome: "Understand OOP principles and data handling tools for AI apps. Build an interactive AI Utility Dashboard with Streamlit, Pandas, & NumPy.",
        project: "Build an interactive AI Utility Dashboard with Streamlit, Pandas, & NumPy",
        topics: [
          {
            id: "w4_t1",
            title: "Object-Oriented Programming (Classes, OOP methods, Encapsulation, Inheritance)",
            subtopics: [
              { id: "w4_t1_s1", title: "Classes & OOP methods" },
              { id: "w4_t1_s2", title: "Encapsulation & Inheritance" }
            ]
          },
          {
            id: "w4_t2",
            title: "Applied AI Libraries: Streamlit, Pandas, NumPy crash courses",
            subtopics: [
              { id: "w4_t2_s1", title: "Pandas & NumPy crash course" },
              { id: "w4_t2_s2", title: "Streamlit crash course for AI apps" }
            ]
          }
        ]
      }
    ]
  },
  {
    monthNumber: 2,
    monthTitle: "Month 2 — AI & LLM Foundations to LangChain",
    weekRange: "Weeks 5–8",
    weeks: [
      {
        weekNumber: 5,
        weekTitle: "Phase 1: AI & LLM Foundations",
        phase: "Phase 1",
        keyOutcome: "Understand the LLM technology stack, tokenization mechanics, and repo setup for AI development.",
        project: "Repository setup & LLM technology stack experimentation",
        topics: [
          {
            id: "w5_t1",
            title: "AI vs ML vs DL vs GenAI, LLM evolution, AI Engineer roadmap",
            subtopics: [
              { id: "w5_t1_s1", title: "AI vs ML vs DL vs GenAI differences" },
              { id: "w5_t1_s2", title: "LLM evolution & AI Engineer roadmap" }
            ]
          },
          {
            id: "w5_t2",
            title: "Tokenization, context windows, embeddings, popular LLMs, Git/GitHub setup",
            subtopics: [
              { id: "w5_t2_s1", title: "Tokenization, context windows, embeddings" },
              { id: "w5_t2_s2", title: "Popular LLMs overview & Git/GitHub setup" }
            ]
          }
        ]
      },
      {
        weekNumber: 6,
        weekTitle: "Phase 1: Transformer Architecture & Responsible AI",
        phase: "Phase 1",
        keyOutcome: "Grasp deep intuition of Attention mechanism and construct safety/eval frameworks for hallucinations and prompt injections.",
        project: "Safety/eval frameworks for hallucinations and prompt injections",
        topics: [
          {
            id: "w6_t1",
            title: "Transformer architecture intuition, Attention mechanism, Inference vs Training",
            subtopics: [
              { id: "w6_t1_s1", title: "Transformer architecture intuition & Attention mechanism" },
              { id: "w6_t1_s2", title: "Inference vs Training" }
            ]
          },
          {
            id: "w6_t2",
            title: "Responsible AI, LLM safety, prompt injection, guardrails, hallucinations, privacy",
            subtopics: [
              { id: "w6_t2_s1", title: "Responsible AI, LLM safety & prompt injection" },
              { id: "w6_t2_s2", title: "Guardrails, hallucinations & privacy" }
            ]
          }
        ]
      },
      {
        weekNumber: 7,
        weekTitle: "Phase 2: Working with LLMs & Multi-Model APIs",
        phase: "Phase 2",
        keyOutcome: "Master cloud & local LLM integration via APIs. Build a Multi-Model AI Playground supporting OpenAI, Gemini, and Ollama.",
        project: "Build a Multi-Model AI Playground supporting OpenAI, Gemini, and Ollama",
        topics: [
          {
            id: "w7_t1",
            title: "SDKs: OpenAI, Gemini API, Hugging Face, local Ollama setup",
            subtopics: [
              { id: "w7_t1_s1", title: "Cloud SDKs: OpenAI, Gemini API, Hugging Face" },
              { id: "w7_t1_s2", title: "Local Ollama setup & model execution" }
            ]
          },
          {
            id: "w7_t2",
            title: "Model parameters (Temperature, Top P), streaming, structured outputs, function calling",
            subtopics: [
              { id: "w7_t2_s1", title: "Model parameters (Temperature, Top P) & streaming" },
              { id: "w7_t2_s2", title: "Structured outputs & function calling" }
            ]
          }
        ]
      },
      {
        weekNumber: 8,
        weekTitle: "Phase 3: AI Application Development with LangChain (Part 1)",
        phase: "Phase 3",
        keyOutcome: "Build structured, chainable LLM workflows using LCEL. Construct an automated AI Resume Reviewer.",
        project: "Construct an automated AI Resume Reviewer",
        topics: [
          {
            id: "w8_t1",
            title: "LangChain core architecture, Chat Models, Prompt Engineering & Templates",
            subtopics: [
              { id: "w8_t1_s1", title: "LangChain core architecture & Chat Models" },
              { id: "w8_t1_s2", title: "Prompt Engineering & Templates" }
            ]
          },
          {
            id: "w8_t2",
            title: "Output Parsers, LCEL (LangChain Expression Language), Runnables, Chains",
            subtopics: [
              { id: "w8_t2_s1", title: "Output Parsers" },
              { id: "w8_t2_s2", title: "LCEL (LangChain Expression Language), Runnables, Chains" }
            ]
          }
        ]
      }
    ]
  },
  {
    monthNumber: 3,
    monthTitle: "Month 3 — LangChain Stateful Systems, RAG & LangGraph",
    weekRange: "Weeks 9–12",
    weeks: [
      {
        weekNumber: 9,
        weekTitle: "Phase 3: AI Application Development with LangChain (Part 2)",
        phase: "Phase 3",
        keyOutcome: "Manage stateful multi-turn conversational agents and document ingestion. Build a Multi-Session AI Chatbot with Memory.",
        project: "Build a Multi-Session AI Chatbot with Memory",
        topics: [
          {
            id: "w9_t1",
            title: "Memory management, Chat History, session handling",
            subtopics: [
              { id: "w9_t1_s1", title: "Memory management & Chat History" },
              { id: "w9_t1_s2", title: "Session handling" }
            ]
          },
          {
            id: "w9_t2",
            title: "Document Loaders, Text Splitters, Embeddings, introduction to Vector DBs",
            subtopics: [
              { id: "w9_t2_s1", title: "Document Loaders & Text Splitters" },
              { id: "w9_t2_s2", title: "Embeddings & introduction to Vector DBs" }
            ]
          }
        ]
      },
      {
        weekNumber: 10,
        weekTitle: "Phase 4: Retrieval Augmented Generation (RAG) Foundations",
        phase: "Phase 4",
        keyOutcome: "Implement end-to-end vector retrieval pipelines over custom documents. Build a PDF Question Answering Chatbot.",
        project: "Build a PDF Question Answering Chatbot",
        topics: [
          {
            id: "w10_t1",
            title: "RAG Architecture: Indexing & Retrieval pipelines, chunking strategies",
            subtopics: [
              { id: "w10_t1_s1", title: "RAG Architecture: Indexing & Retrieval pipelines" },
              { id: "w10_t1_s2", title: "Chunking strategies" }
            ]
          },
          {
            id: "w10_t2",
            title: "Embedding models, FAISS, ChromaDB, metadata filtering, similarity search",
            subtopics: [
              { id: "w10_t2_s1", title: "Embedding models, FAISS & ChromaDB" },
              { id: "w10_t2_s2", title: "Metadata filtering & similarity search" }
            ]
          }
        ]
      },
      {
        weekNumber: 11,
        weekTitle: "Phase 4: Advanced RAG Techniques",
        phase: "Phase 4",
        keyOutcome: "Optimize RAG accuracy, context efficiency, and search relevance. Upgrade QA chatbot with advanced retrieval strategies.",
        project: "Upgrade QA chatbot with advanced retrieval strategies",
        topics: [
          {
            id: "w11_t1",
            title: "Hybrid Search, Multi-Query Retrieval, Query Transformation",
            subtopics: [
              { id: "w11_t1_s1", title: "Hybrid Search" },
              { id: "w11_t1_s2", title: "Multi-Query Retrieval & Query Transformation" }
            ]
          },
          {
            id: "w11_t2",
            title: "Parent Document Retrieval, Re-ranking, Context Compression, Vectorless Retrieval",
            subtopics: [
              { id: "w11_t2_s1", title: "Parent Document Retrieval & Re-ranking" },
              { id: "w11_t2_s2", title: "Context Compression & Vectorless Retrieval" }
            ]
          }
        ]
      },
      {
        weekNumber: 12,
        weekTitle: "Phase 5: Agentic AI with LangGraph (Part 1)",
        phase: "Phase 5",
        keyOutcome: "Design graph-based stateful AI agent workflows. Build an autonomous Research Assistant with LangGraph.",
        project: "Build an autonomous Research Assistant with LangGraph",
        topics: [
          {
            id: "w12_t1",
            title: "Introduction to AI Agents, Agent architectures, LangGraph fundamentals (Nodes, Edges, State)",
            subtopics: [
              { id: "w12_t1_s1", title: "Introduction to AI Agents & Agent architectures" },
              { id: "w12_t1_s2", title: "LangGraph fundamentals (Nodes, Edges, State)" }
            ]
          },
          {
            id: "w12_t2",
            title: "Workflow patterns: Sequential, Conditional, Parallel, and Iterative workflows",
            subtopics: [
              { id: "w12_t2_s1", title: "Sequential & Conditional workflow patterns" },
              { id: "w12_t2_s2", title: "Parallel & Iterative workflow patterns" }
            ]
          }
        ]
      }
    ]
  },
  {
    monthNumber: 4,
    monthTitle: "Month 4 — Advanced Agents, Model Context Protocol & LLMOps",
    weekRange: "Weeks 13–16",
    weeks: [
      {
        weekNumber: 13,
        weekTitle: "Phase 5: Advanced Agentic AI & Multi-Agent Collaboration",
        phase: "Phase 5",
        keyOutcome: "Develop sophisticated multi-agent systems with human oversight and tool interaction. Build a Multi-Agent Research Assistant.",
        project: "Build a Multi-Agent Research Assistant",
        topics: [
          {
            id: "w13_t1",
            title: "Tool calling, Human-in-the-loop, agent memory",
            subtopics: [
              { id: "w13_t1_s1", title: "Tool calling & Human-in-the-loop" },
              { id: "w13_t1_s2", title: "Agent memory" }
            ]
          },
          {
            id: "w13_t2",
            title: "Multi-agent architecture, collaboration patterns, planning agents, reflection loops",
            subtopics: [
              { id: "w13_t2_s1", title: "Multi-agent architecture & collaboration patterns" },
              { id: "w13_t2_s2", title: "Planning agents & reflection loops" }
            ]
          }
        ]
      },
      {
        weekNumber: 14,
        weekTitle: "Phase 6: Model Context Protocol (MCP) Foundations",
        phase: "Phase 6",
        keyOutcome: "Standardize tool and context integration across LLMs. Build a custom MCP Server exposing internal business APIs.",
        project: "Build a custom MCP Server exposing internal business APIs",
        topics: [
          {
            id: "w14_t1",
            title: "MCP Architecture & Lifecycle (Clients, Servers, Resources)",
            subtopics: [
              { id: "w14_t1_s1", title: "MCP Architecture & Lifecycle" },
              { id: "w14_t1_s2", title: "MCP Clients, Servers & Resources" }
            ]
          },
          {
            id: "w14_t2",
            title: "Building custom MCP servers, MCP tools, AI tool integration, local MCP development",
            subtopics: [
              { id: "w14_t2_s1", title: "Building custom MCP servers & MCP tools" },
              { id: "w14_t2_s2", title: "AI tool integration & local MCP development" }
            ]
          }
        ]
      },
      {
        weekNumber: 15,
        weekTitle: "Phase 6: MCP Integration with LangGraph",
        phase: "Phase 6",
        keyOutcome: "Orchestrate complex agent workflows powered by standardized MCP tools. Build an Enterprise Agent using multi-MCP tools.",
        project: "Build an Enterprise Agent using multi-MCP tools",
        topics: [
          {
            id: "w15_t1",
            title: "LangGraph + MCP integration, dynamic tool orchestration",
            subtopics: [
              { id: "w15_t1_s1", title: "LangGraph + MCP integration" },
              { id: "w15_t1_s2", title: "Dynamic tool orchestration" }
            ]
          },
          {
            id: "w15_t2",
            title: "End-to-end Agent + MCP applications, security best practices, access control",
            subtopics: [
              { id: "w15_t2_s1", title: "End-to-end Agent + MCP applications" },
              { id: "w15_t2_s2", title: "Security best practices & access control" }
            ]
          }
        ]
      },
      {
        weekNumber: 16,
        weekTitle: "Phase 7: LLMOps, Tracing & Evaluation",
        phase: "Phase 7",
        keyOutcome: "Implement production observability, automated metrics evaluation, and cost/latency benchmarking for AI applications.",
        project: "Implement production observability and automated evaluation",
        topics: [
          {
            id: "w16_t1",
            title: "Prompt versioning, logging, tracing with LangSmith & LangFuse",
            subtopics: [
              { id: "w16_t1_s1", title: "Prompt versioning & logging" },
              { id: "w16_t1_s2", title: "Tracing with LangSmith & LangFuse" }
            ]
          },
          {
            id: "w16_t2",
            title: "LLM & RAG evaluation (DeepEval, RAGAS), latency/cost optimization, caching",
            subtopics: [
              { id: "w16_t2_s1", title: "LLM & RAG evaluation (DeepEval, RAGAS)" },
              { id: "w16_t2_s2", title: "Latency/cost optimization & caching" }
            ]
          }
        ]
      }
    ]
  },
  {
    monthNumber: 5,
    monthTitle: "Month 5 — Cloud Deployment, Production Portfolio & Career Readiness",
    weekRange: "Weeks 17–20",
    weeks: [
      {
        weekNumber: 17,
        weekTitle: "Phase 7: Microservices & Cloud Deployment",
        phase: "Phase 7",
        keyOutcome: "Containerize and deploy scalable AI microservices to cloud infrastructure (AWS EC2) with automated pipelines.",
        project: "Containerize and deploy scalable AI microservices to cloud infrastructure (AWS EC2)",
        topics: [
          {
            id: "w17_t1",
            title: "REST APIs with FastAPI, Docker containerization, Docker Compose",
            subtopics: [
              { id: "w17_t1_s1", title: "REST APIs with FastAPI" },
              { id: "w17_t1_s2", title: "Docker containerization & Docker Compose" }
            ]
          },
          {
            id: "w17_t2",
            title: "AWS EC2 deployment, production environments, CI/CD fundamentals",
            subtopics: [
              { id: "w17_t2_s1", title: "AWS EC2 deployment" },
              { id: "w17_t2_s2", title: "Production environments & CI/CD fundamentals" }
            ]
          }
        ]
      },
      {
        weekNumber: 18,
        weekTitle: "Phase 8: Production Portfolio Project - Architecture & Core Sprint",
        phase: "Phase 8",
        keyOutcome: "Formulate system design and implement the foundation of a production-grade Capstone AI project.",
        project: "Implement foundation of a production-grade Capstone AI project",
        topics: [
          {
            id: "w18_t1",
            title: "Project planning, system design, requirements analysis",
            subtopics: [
              { id: "w18_t1_s1", title: "Project planning & system design" },
              { id: "w18_t1_s2", title: "Requirements analysis" }
            ]
          },
          {
            id: "w18_t2",
            title: "Core architecture implementation, mentor code reviews, milestone evaluation",
            subtopics: [
              { id: "w18_t2_s1", title: "Core architecture implementation" },
              { id: "w18_t2_s2", title: "Mentor code reviews & milestone evaluation" }
            ]
          }
        ]
      },
      {
        weekNumber: 19,
        weekTitle: "Phase 8: Production Portfolio Project - Refinement & Cloud Deployment",
        phase: "Phase 8",
        keyOutcome: "Deploy the fully functional, monitored end-to-end production AI application to live cloud servers.",
        project: "Deploy the fully functional, monitored end-to-end production AI application to live cloud servers",
        topics: [
          {
            id: "w19_t1",
            title: "Advanced feature implementation, integration testing, system debugging",
            subtopics: [
              { id: "w19_t1_s1", title: "Advanced feature implementation" },
              { id: "w19_t1_s2", title: "Integration testing & system debugging" }
            ]
          },
          {
            id: "w19_t2",
            title: "Production deployment, cloud observability, technical documentation",
            subtopics: [
              { id: "w19_t2_s1", title: "Production deployment" },
              { id: "w19_t2_s2", title: "Cloud observability & technical documentation" }
            ]
          }
        ]
      },
      {
        weekNumber: 20,
        weekTitle: "Phase 8: Program Wrap-Up, Portfolio & Career Readiness",
        phase: "Phase 8",
        keyOutcome: "Complete live project portfolio (GitHub, Live Demo, Docs), refine AI resume, and master technical interview readiness.",
        project: "Complete live project portfolio (GitHub, Live Demo, Docs), refine AI resume, and master technical interview readiness",
        topics: [
          {
            id: "w20_t1",
            title: "Capstone presentations, peer code reviews, technical feedback",
            subtopics: [
              { id: "w20_t1_s1", title: "Capstone presentations & peer code reviews" },
              { id: "w20_t1_s2", title: "Technical feedback implementation" }
            ]
          },
          {
            id: "w20_t2",
            title: "Portfolio polishing (GitHub, Live Demos), Resume building, AI interview prep & mock interviews",
            subtopics: [
              { id: "w20_t2_s1", title: "Portfolio polishing (GitHub, Live Demos) & Resume building" },
              { id: "w20_t2_s2", title: "AI interview prep & mock interviews" }
            ]
          }
        ]
      }
    ]
  }
];

// Storage Keys
const STORAGE_KEY_CHECKS = 'genai_roadmap_subtopics_v1';
const STORAGE_KEY_NOTES = 'genai_roadmap_notes_v1';
const STORAGE_KEY_UI = 'genai_roadmap_ui_state_v1';

// Application State
const state = {
  curriculum: EMBEDDED_CURRICULUM,
  checkedSubtopics: {}, // { [subtopicId]: boolean }
  notes: {},            // { [weekNumber]: string }
  ui: {
    collapsedMonths: {}, // { [monthNumber]: boolean }
    collapsedWeeks: {},  // { [weekNumber]: boolean }
    currentFilter: 'all', // 'all' | 'completed' | 'incomplete'
    searchQuery: ''
  }
};

/**
 * Initialize Application
 */
document.addEventListener('DOMContentLoaded', async () => {
  loadStoredData();
  await tryFetchExternalCurriculum();
  renderRoadmap();
  renderMonthOverviewStrip();
  updateAllCalculations();
  setupEventListeners();
});

/**
 * Load persistent state from localStorage
 */
function loadStoredData() {
  try {
    const savedChecks = localStorage.getItem(STORAGE_KEY_CHECKS);
    if (savedChecks) {
      state.checkedSubtopics = JSON.parse(savedChecks);
    }
  } catch (e) {
    console.warn('Failed to parse saved checks:', e);
    state.checkedSubtopics = {};
  }

  try {
    const savedNotes = localStorage.getItem(STORAGE_KEY_NOTES);
    if (savedNotes) {
      state.notes = JSON.parse(savedNotes);
    }
  } catch (e) {
    console.warn('Failed to parse saved notes:', e);
    state.notes = {};
  }

  try {
    const savedUI = localStorage.getItem(STORAGE_KEY_UI);
    if (savedUI) {
      const parsedUI = JSON.parse(savedUI);
      state.ui.collapsedMonths = parsedUI.collapsedMonths || {};
      state.ui.collapsedWeeks = parsedUI.collapsedWeeks || {};
    }
  } catch (e) {
    console.warn('Failed to parse saved UI state:', e);
  }
}

/**
 * Save check states
 */
function saveChecks() {
  try {
    localStorage.setItem(STORAGE_KEY_CHECKS, JSON.stringify(state.checkedSubtopics));
  } catch (e) {
    console.error('Failed to save checks to localStorage:', e);
  }
}

/**
 * Save notes
 */
function saveNotes() {
  try {
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(state.notes));
  } catch (e) {
    console.error('Failed to save notes to localStorage:', e);
  }
}

/**
 * Save UI collapse states
 */
function saveUIState() {
  try {
    localStorage.setItem(STORAGE_KEY_UI, JSON.stringify({
      collapsedMonths: state.ui.collapsedMonths,
      collapsedWeeks: state.ui.collapsedWeeks
    }));
  } catch (e) {
    console.error('Failed to save UI state:', e);
  }
}

/**
 * Attempt to load curriculum data from roadmap.json if running via HTTP server
 */
async function tryFetchExternalCurriculum() {
  try {
    const response = await fetch('roadmap.json');
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        state.curriculum = data;
      }
    }
  } catch (e) {
    // Expected when running directly through file:// protocol
  }
}

/**
 * Render the entire Roadmap Tree
 */
function renderRoadmap() {
  const container = document.getElementById('roadmap-tree');
  if (!container) return;
  container.innerHTML = '';

  state.curriculum.forEach(month => {
    const monthEl = document.createElement('section');
    monthEl.className = 'month-accordion';
    monthEl.id = `month-section-${month.monthNumber}`;
    monthEl.dataset.monthNumber = month.monthNumber;

    // By default, if not set, keep Month 1 open, others collapsed on first visit
    const isMonthCollapsed = state.ui.collapsedMonths[month.monthNumber] === true;
    if (isMonthCollapsed) {
      monthEl.classList.add('collapsed');
    }

    // Month Header
    const monthHeader = document.createElement('div');
    monthHeader.className = 'month-header';
    monthHeader.setAttribute('role', 'button');
    monthHeader.setAttribute('tabindex', '0');
    monthHeader.setAttribute('aria-expanded', !isMonthCollapsed);
    monthHeader.innerHTML = `
      <div class="month-header-left">
        <span class="month-badge">Month ${month.monthNumber}</span>
        <div class="month-title-wrap">
          <h2 class="month-title">${escapeHTML(month.monthTitle)}</h2>
          <div class="month-subtitle">${escapeHTML(month.weekRange || `Weeks ${(month.monthNumber-1)*4 + 1}–${month.monthNumber*4}`)}</div>
        </div>
      </div>
      <div class="month-header-right">
        <div class="month-progress-stat">
          <span class="month-pct-text" id="month-pct-${month.monthNumber}">0%</span>
          <div class="month-mini-track">
            <div class="month-mini-fill" id="month-fill-${month.monthNumber}"></div>
          </div>
        </div>
        <div class="accordion-chevron" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    `;

    monthHeader.addEventListener('click', () => {
      toggleMonth(month.monthNumber);
    });

    monthHeader.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMonth(month.monthNumber);
      }
    });

    // Month Body
    const monthBody = document.createElement('div');
    monthBody.className = 'month-body';

    // Weeks
    month.weeks.forEach(week => {
      const weekCard = createWeekCard(week, month.monthNumber);
      monthBody.appendChild(weekCard);
    });

    monthEl.appendChild(monthHeader);
    monthEl.appendChild(monthBody);
    container.appendChild(monthEl);
  });
}

/**
 * Create a single Week Card element
 */
function createWeekCard(week, monthNumber) {
  const weekCard = document.createElement('article');
  weekCard.className = 'week-card';
  weekCard.id = `week-card-${week.weekNumber}`;
  weekCard.dataset.weekNumber = week.weekNumber;
  weekCard.dataset.monthNumber = monthNumber;

  // By default, if not set, keep Week 1 open, others collapsed
  const isWeekCollapsed = state.ui.collapsedWeeks[week.weekNumber] === true;
  if (isWeekCollapsed) {
    weekCard.classList.add('collapsed');
  }

  // Week Header
  const weekHeader = document.createElement('div');
  weekHeader.className = 'week-header';
  weekHeader.setAttribute('role', 'button');
  weekHeader.setAttribute('tabindex', '0');
  weekHeader.setAttribute('aria-expanded', !isWeekCollapsed);

  const formattedWeekNum = week.weekNumber < 10 ? `0${week.weekNumber}` : `${week.weekNumber}`;

  weekHeader.innerHTML = `
    <div class="week-header-left">
      <span class="week-num-badge">W${formattedWeekNum}</span>
      <h3 class="week-title">${escapeHTML(week.weekTitle)}</h3>
    </div>
    <div class="week-header-right">
      <span class="status-tag not-started" id="week-status-badge-${week.weekNumber}">Not Started</span>
      <span class="week-prog-text" id="week-prog-text-${week.weekNumber}">0 / 2 topics</span>
      <div class="week-chevron" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  `;

  weekHeader.addEventListener('click', (e) => {
    // Avoid triggering toggle when clicking header elements
    toggleWeek(week.weekNumber);
  });

  weekHeader.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleWeek(week.weekNumber);
    }
  });

  // Week Content
  const weekContent = document.createElement('div');
  weekContent.className = 'week-content';

  // Key Outcome Box
  const outcomeBox = document.createElement('div');
  outcomeBox.className = 'outcome-box';
  outcomeBox.innerHTML = `
    <div class="outcome-header">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      <span>Key Outcome & Technical Takeaway</span>
    </div>
    <p>${escapeHTML(week.keyOutcome)}</p>
    ${week.project ? `
      <div class="outcome-project">
        <strong>Hands-on Project:</strong>
        <span>${escapeHTML(week.project)}</span>
      </div>
    ` : ''}
  `;
  weekContent.appendChild(outcomeBox);

  // Topics Checklist
  const topicList = document.createElement('div');
  topicList.className = 'topic-list';

  week.topics.forEach(topic => {
    const topicItem = createTopicItem(topic, week.weekNumber);
    topicList.appendChild(topicItem);
  });
  weekContent.appendChild(topicList);

  // Weekly Personal Notes Area
  const notesSection = document.createElement('div');
  notesSection.className = 'week-notes-section';
  const savedNoteText = state.notes[week.weekNumber] || '';

  notesSection.innerHTML = `
    <div class="notes-header">
      <label class="notes-label" for="notes-input-${week.weekNumber}">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
        <span>Weekly Notes & Resources</span>
      </label>
      <span class="notes-saved-status" id="notes-saved-${week.weekNumber}">Saved</span>
    </div>
    <textarea 
      class="notes-textarea" 
      id="notes-input-${week.weekNumber}" 
      placeholder="Capture key insights, GitHub repo links, code snippets, or notes for Week ${week.weekNumber}..."
      rows="2"
    >${escapeHTML(savedNoteText)}</textarea>
  `;

  const textarea = notesSection.querySelector('textarea');
  const savedIndicator = notesSection.querySelector('.notes-saved-status');
  let noteTimeout;

  textarea.addEventListener('input', (e) => {
    state.notes[week.weekNumber] = e.target.value;
    clearTimeout(noteTimeout);
    noteTimeout = setTimeout(() => {
      saveNotes();
      savedIndicator.classList.add('visible');
      setTimeout(() => {
        savedIndicator.classList.remove('visible');
      }, 1500);
    }, 400);
  });

  weekContent.appendChild(notesSection);

  weekCard.appendChild(weekHeader);
  weekCard.appendChild(weekContent);

  return weekCard;
}

/**
 * Create a single Topic Item with parent checkbox and subtopics
 */
function createTopicItem(topic, weekNumber) {
  const topicItem = document.createElement('div');
  topicItem.className = 'topic-item';
  topicItem.id = `topic-${topic.id}`;
  topicItem.dataset.topicId = topic.id;
  topicItem.dataset.weekNumber = weekNumber;

  // Topic Main Row
  const mainRow = document.createElement('div');
  mainRow.className = 'topic-main-row';

  const checkboxWrapper = document.createElement('label');
  checkboxWrapper.className = 'custom-checkbox-wrapper';
  checkboxWrapper.setAttribute('title', 'Mark entire topic completed');

  const topicInput = document.createElement('input');
  topicInput.type = 'checkbox';
  topicInput.id = `checkbox-${topic.id}`;
  topicInput.dataset.topicId = topic.id;

  const checkboxBox = document.createElement('span');
  checkboxBox.className = 'checkbox-box';
  checkboxBox.innerHTML = `
    <svg class="check-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <svg class="minus-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `;

  checkboxWrapper.appendChild(topicInput);
  checkboxWrapper.appendChild(checkboxBox);

  const topicTextWrapper = document.createElement('div');
  topicTextWrapper.className = 'topic-header-text';

  const topicTitle = document.createElement('label');
  topicTitle.className = 'topic-title-label';
  topicTitle.setAttribute('for', `checkbox-${topic.id}`);
  topicTitle.textContent = topic.title;

  const topicMeta = document.createElement('div');
  topicMeta.className = 'topic-meta-badge';
  topicMeta.id = `topic-meta-${topic.id}`;
  topicMeta.textContent = `${topic.subtopics ? topic.subtopics.length : 1} subtopics`;

  topicTextWrapper.appendChild(topicTitle);
  topicTextWrapper.appendChild(topicMeta);

  mainRow.appendChild(checkboxWrapper);
  mainRow.appendChild(topicTextWrapper);
  topicItem.appendChild(mainRow);

  // Subtopics list
  if (topic.subtopics && topic.subtopics.length > 0) {
    const subtopicList = document.createElement('div');
    subtopicList.className = 'subtopic-list';

    topic.subtopics.forEach(sub => {
      const subItem = document.createElement('div');
      subItem.className = 'subtopic-item';
      subItem.id = `subtopic-row-${sub.id}`;
      subItem.dataset.subtopicId = sub.id;

      const subCheckboxWrapper = document.createElement('label');
      subCheckboxWrapper.className = 'custom-checkbox-wrapper';

      const subInput = document.createElement('input');
      subInput.type = 'checkbox';
      subInput.id = `checkbox-${sub.id}`;
      subInput.dataset.subtopicId = sub.id;
      subInput.dataset.parentTopicId = topic.id;
      subInput.checked = !!state.checkedSubtopics[sub.id];

      const subCheckboxBox = document.createElement('span');
      subCheckboxBox.className = 'checkbox-box';
      subCheckboxBox.innerHTML = `
        <svg class="check-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;

      subCheckboxWrapper.appendChild(subInput);
      subCheckboxWrapper.appendChild(subCheckboxBox);

      const subLabel = document.createElement('label');
      subLabel.className = 'subtopic-label';
      subLabel.setAttribute('for', `checkbox-${sub.id}`);
      subLabel.textContent = sub.title;

      if (subInput.checked) {
        subItem.classList.add('subtopic-completed');
      }

      subInput.addEventListener('change', () => {
        state.checkedSubtopics[sub.id] = subInput.checked;
        if (subInput.checked) {
          subItem.classList.add('subtopic-completed');
        } else {
          subItem.classList.remove('subtopic-completed');
        }
        saveChecks();
        syncTopicCheckbox(topic);
        updateAllCalculations();
        applyFilterAndSearch();
      });

      subItem.appendChild(subCheckboxWrapper);
      subItem.appendChild(subLabel);
      subtopicList.appendChild(subItem);
    });

    topicItem.appendChild(subtopicList);
  }

  // Parent Topic checkbox toggle handler:
  // Checking parent topic toggles ALL its subtopics
  topicInput.addEventListener('change', () => {
    const targetChecked = topicInput.checked;
    if (topic.subtopics && topic.subtopics.length > 0) {
      topic.subtopics.forEach(sub => {
        state.checkedSubtopics[sub.id] = targetChecked;
        const subInput = document.getElementById(`checkbox-${sub.id}`);
        const subRow = document.getElementById(`subtopic-row-${sub.id}`);
        if (subInput) subInput.checked = targetChecked;
        if (subRow) {
          if (targetChecked) subRow.classList.add('subtopic-completed');
          else subRow.classList.remove('subtopic-completed');
        }
      });
    } else {
      state.checkedSubtopics[topic.id] = targetChecked;
    }
    saveChecks();
    syncTopicCheckbox(topic);
    updateAllCalculations();
    applyFilterAndSearch();
  });

  // Initial synchronization of topic checkbox based on subtopics
  syncTopicCheckbox(topic);

  return topicItem;
}

/**
 * Synchronize the visual state of a topic's checkbox based on its subtopics
 */
function syncTopicCheckbox(topic) {
  const topicInput = document.getElementById(`checkbox-${topic.id}`);
  const topicItem = document.getElementById(`topic-${topic.id}`);
  const metaBadge = document.getElementById(`topic-meta-${topic.id}`);
  if (!topicInput || !topicItem) return;

  if (topic.subtopics && topic.subtopics.length > 0) {
    const total = topic.subtopics.length;
    let completed = 0;
    topic.subtopics.forEach(sub => {
      if (state.checkedSubtopics[sub.id]) completed++;
    });

    if (completed === total) {
      topicInput.checked = true;
      topicInput.indeterminate = false;
      topicItem.classList.add('topic-completed');
      if (metaBadge) metaBadge.textContent = `${completed}/${total} completed • Done`;
    } else if (completed > 0) {
      topicInput.checked = false;
      topicInput.indeterminate = true;
      topicItem.classList.remove('topic-completed');
      if (metaBadge) metaBadge.textContent = `${completed}/${total} completed • In progress`;
    } else {
      topicInput.checked = false;
      topicInput.indeterminate = false;
      topicItem.classList.remove('topic-completed');
      if (metaBadge) metaBadge.textContent = `${total} subtopics`;
    }
  } else {
    const isChecked = !!state.checkedSubtopics[topic.id];
    topicInput.checked = isChecked;
    topicInput.indeterminate = false;
    if (isChecked) {
      topicItem.classList.add('topic-completed');
    } else {
      topicItem.classList.remove('topic-completed');
    }
  }
}

/**
 * Toggle Month expansion
 */
function toggleMonth(monthNum) {
  const monthEl = document.getElementById(`month-section-${monthNum}`);
  if (!monthEl) return;
  const isCollapsed = monthEl.classList.toggle('collapsed');
  state.ui.collapsedMonths[monthNum] = isCollapsed;
  const header = monthEl.querySelector('.month-header');
  if (header) {
    header.setAttribute('aria-expanded', !isCollapsed);
  }
  saveUIState();
}

/**
 * Toggle Week expansion
 */
function toggleWeek(weekNum) {
  const weekEl = document.getElementById(`week-card-${weekNum}`);
  if (!weekEl) return;
  const isCollapsed = weekEl.classList.toggle('collapsed');
  state.ui.collapsedWeeks[weekNum] = isCollapsed;
  const header = weekEl.querySelector('.week-header');
  if (header) {
    header.setAttribute('aria-expanded', !isCollapsed);
  }
  saveUIState();
}

/**
 * Render the top 5-Month Overview Strip
 */
function renderMonthOverviewStrip() {
  const strip = document.getElementById('month-strip-container');
  if (!strip) return;
  strip.innerHTML = '';

  state.curriculum.forEach(month => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'month-pill-card';
    card.id = `month-pill-${month.monthNumber}`;
    card.innerHTML = `
      <div>
        <div class="pill-num">Month 0${month.monthNumber}</div>
        <div class="pill-name" title="${escapeHTML(month.monthTitle)}">${escapeHTML(month.monthTitle.replace(/^Month \d+ — /, ''))}</div>
      </div>
      <div class="pill-progress">
        <div class="pill-bar-track">
          <div class="pill-bar-fill" id="pill-fill-${month.monthNumber}"></div>
        </div>
        <span class="pill-pct" id="pill-pct-${month.monthNumber}">0%</span>
      </div>
    `;

    card.addEventListener('click', () => {
      // Expand month if collapsed
      const monthSection = document.getElementById(`month-section-${month.monthNumber}`);
      if (monthSection) {
        if (monthSection.classList.contains('collapsed')) {
          toggleMonth(month.monthNumber);
        }
        monthSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    strip.appendChild(card);
  });
}

/**
 * Core calculation of progress across Weeks, Months, and Total Curriculum.
 * Strictly prevents double-counting parent topics and subtopics.
 */
function updateAllCalculations() {
  let totalTopics = 0;
  let fullyCompletedTopics = 0;
  let totalFractionalProgress = 0;

  let activeWeekFound = null;
  let nextIncompleteTopicFound = null;

  state.curriculum.forEach(month => {
    let monthTotalTopics = 0;
    let monthCompletedTopics = 0;
    let monthFractionalSum = 0;

    month.weeks.forEach(week => {
      const weekTotalTopics = week.topics.length;
      let weekCompletedTopics = 0;
      let weekFractionalSum = 0;

      week.topics.forEach(topic => {
        totalTopics++;
        monthTotalTopics++;

        let topicFraction = 0;
        let isTopicFullyComplete = false;

        if (topic.subtopics && topic.subtopics.length > 0) {
          const subTotal = topic.subtopics.length;
          let subDone = 0;
          topic.subtopics.forEach(sub => {
            if (state.checkedSubtopics[sub.id]) subDone++;
          });
          topicFraction = subDone / subTotal;
          isTopicFullyComplete = (subDone === subTotal);
        } else {
          isTopicFullyComplete = !!state.checkedSubtopics[topic.id];
          topicFraction = isTopicFullyComplete ? 1 : 0;
        }

        if (isTopicFullyComplete) {
          fullyCompletedTopics++;
          weekCompletedTopics++;
          monthCompletedTopics++;
        } else if (!nextIncompleteTopicFound) {
          nextIncompleteTopicFound = {
            weekNumber: week.weekNumber,
            weekTitle: week.weekTitle,
            topicId: topic.id,
            topicTitle: topic.title,
            keyOutcome: week.keyOutcome
          };
        }

        weekFractionalSum += topicFraction;
        monthFractionalSum += topicFraction;
        totalFractionalProgress += topicFraction;
      });

      // Calculate Week Percentage & Status
      const weekPct = Math.round((weekFractionalSum / weekTotalTopics) * 100);
      const weekBadge = document.getElementById(`week-status-badge-${week.weekNumber}`);
      const weekProgText = document.getElementById(`week-prog-text-${week.weekNumber}`);

      if (weekProgText) {
        weekProgText.textContent = `${weekCompletedTopics} / ${weekTotalTopics} topics (${weekPct}%)`;
      }

      if (weekBadge) {
        weekBadge.className = 'status-tag';
        if (weekCompletedTopics === weekTotalTopics) {
          weekBadge.classList.add('completed');
          weekBadge.textContent = 'Completed';
        } else if (weekFractionalSum > 0) {
          weekBadge.classList.add('in-progress');
          weekBadge.textContent = 'In Progress';
        } else {
          weekBadge.classList.add('not-started');
          weekBadge.textContent = 'Not Started';
        }
      }

      // Identify Current Active Week: first week that is not 100% complete
      if (weekCompletedTopics < weekTotalTopics && !activeWeekFound) {
        activeWeekFound = week;
      }
    });

    // Update Month Stats
    const monthPct = Math.round((monthFractionalSum / monthTotalTopics) * 100);
    const monthPctEl = document.getElementById(`month-pct-${month.monthNumber}`);
    const monthFillEl = document.getElementById(`month-fill-${month.monthNumber}`);
    const pillPctEl = document.getElementById(`pill-pct-${month.monthNumber}`);
    const pillFillEl = document.getElementById(`pill-fill-${month.monthNumber}`);

    if (monthPctEl) monthPctEl.textContent = `${monthPct}%`;
    if (monthFillEl) monthFillEl.style.width = `${monthPct}%`;
    if (pillPctEl) pillPctEl.textContent = `${monthPct}%`;
    if (pillFillEl) pillFillEl.style.width = `${monthPct}%`;
  });

  // Fallback if all completed
  if (!activeWeekFound) {
    const lastMonth = state.curriculum[state.curriculum.length - 1];
    activeWeekFound = lastMonth.weeks[lastMonth.weeks.length - 1];
  }

  // Overall calculations
  const overallPct = totalTopics > 0 ? Math.round((totalFractionalProgress / totalTopics) * 100) : 0;
  const remainingTopics = totalTopics - fullyCompletedTopics;

  // Update Summary Cards
  const statOverallPct = document.getElementById('stat-overall-pct');
  const statOverallSubtext = document.getElementById('stat-overall-subtext');
  const statCompletedCount = document.getElementById('stat-completed-count');
  const statCompletedSubtext = document.getElementById('stat-completed-subtext');
  const statRemainingCount = document.getElementById('stat-remaining-count');
  const statActiveWeek = document.getElementById('stat-active-week');
  const statActiveWeekTitle = document.getElementById('stat-active-week-title');

  if (statOverallPct) statOverallPct.textContent = `${overallPct}%`;
  if (statOverallSubtext) statOverallSubtext.textContent = `${fullyCompletedTopics} of ${totalTopics} topics`;
  if (statCompletedCount) statCompletedCount.textContent = fullyCompletedTopics;
  if (statCompletedSubtext) statCompletedSubtext.textContent = `Across 20 weeks`;
  if (statRemainingCount) statRemainingCount.textContent = remainingTopics;

  if (statActiveWeek && activeWeekFound) {
    if (fullyCompletedTopics === totalTopics) {
      statActiveWeek.textContent = 'Complete! 🎉';
      if (statActiveWeekTitle) statActiveWeekTitle.textContent = 'All 20 Weeks Finished';
    } else {
      statActiveWeek.textContent = `Week ${activeWeekFound.weekNumber}`;
      if (statActiveWeekTitle) statActiveWeekTitle.textContent = activeWeekFound.weekTitle.replace(/^Phase \d+: /, '');
    }
  }

  // Update Main Progress Bar
  const mainProgressBar = document.getElementById('main-progress-bar');
  const barPctText = document.getElementById('bar-pct-text');
  const barDetailText = document.getElementById('bar-detail-text');

  if (mainProgressBar) {
    mainProgressBar.style.width = `${overallPct}%`;
    mainProgressBar.parentElement.setAttribute('aria-valuenow', overallPct);
  }
  if (barPctText) barPctText.textContent = `${overallPct}%`;
  if (barDetailText) barDetailText.textContent = `(${fullyCompletedTopics} / ${totalTopics} completed)`;

  // Update Focus Card / Continue Learning Banner
  updateFocusCard(activeWeekFound, nextIncompleteTopicFound, fullyCompletedTopics === totalTopics);
}

/**
 * Update Current Week Focus Card
 */
function updateFocusCard(activeWeek, nextTopic, isAllComplete) {
  const focusBadge = document.getElementById('focus-badge');
  const focusTitle = document.getElementById('focus-week-title');
  const focusNext = document.getElementById('focus-next-topic');
  const continueBtn = document.getElementById('continue-learning-btn');

  if (isAllComplete) {
    if (focusBadge) focusBadge.textContent = 'Roadmap Completed';
    if (focusTitle) focusTitle.textContent = 'Congratulations! 🎓';
    if (focusNext) focusNext.innerHTML = 'You have completed all 20 weeks of the GenAI Engineering curriculum.';
    if (continueBtn) {
      continueBtn.innerHTML = `
        <span>Review Week 1</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      `;
    }
    return;
  }

  if (activeWeek) {
    if (focusBadge) focusBadge.textContent = `Current Target • Week ${activeWeek.weekNumber}`;
    if (focusTitle) focusTitle.textContent = activeWeek.weekTitle;
  }

  if (nextTopic) {
    if (focusNext) {
      focusNext.innerHTML = `Next topic: <strong>${escapeHTML(nextTopic.topicTitle)}</strong>`;
    }
  } else if (activeWeek) {
    if (focusNext) {
      focusNext.innerHTML = `Key Outcome: <strong>${escapeHTML(activeWeek.keyOutcome)}</strong>`;
    }
  }

  if (continueBtn) {
    continueBtn.innerHTML = `
      <span>Continue Learning</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    `;
  }
}

/**
 * Handle "Continue Learning" button click
 * Smoothly scrolls to the next incomplete topic, expands its parent week and month, and highlights it.
 */
function handleContinueLearning() {
  // Find first incomplete topic element
  let targetTopicId = null;
  let targetWeekNum = null;
  let targetMonthNum = null;

  for (const month of state.curriculum) {
    for (const week of month.weeks) {
      for (const topic of week.topics) {
        let isComplete = false;
        if (topic.subtopics && topic.subtopics.length > 0) {
          isComplete = topic.subtopics.every(s => !!state.checkedSubtopics[s.id]);
        } else {
          isComplete = !!state.checkedSubtopics[topic.id];
        }

        if (!isComplete) {
          targetTopicId = topic.id;
          targetWeekNum = week.weekNumber;
          targetMonthNum = month.monthNumber;
          break;
        }
      }
      if (targetTopicId) break;
    }
    if (targetTopicId) break;
  }

  // Fallback to first topic if all complete
  if (!targetTopicId) {
    targetTopicId = state.curriculum[0].weeks[0].topics[0].id;
    targetWeekNum = 1;
    targetMonthNum = 1;
  }

  // Expand Month
  const monthEl = document.getElementById(`month-section-${targetMonthNum}`);
  if (monthEl && monthEl.classList.contains('collapsed')) {
    toggleMonth(targetMonthNum);
  }

  // Expand Week
  const weekEl = document.getElementById(`week-card-${targetWeekNum}`);
  if (weekEl && weekEl.classList.contains('collapsed')) {
    toggleWeek(targetWeekNum);
  }

  // Scroll to topic
  const topicEl = document.getElementById(`topic-${targetTopicId}`);
  if (topicEl) {
    topicEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (weekEl) {
      weekEl.classList.add('highlight-target');
      setTimeout(() => {
        weekEl.classList.remove('highlight-target');
      }, 2000);
    }
  }
}

/**
 * Setup Event Listeners
 */
function setupEventListeners() {
  // Continue Learning Button
  const continueBtn = document.getElementById('continue-learning-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', handleContinueLearning);
  }

  // Toggle All Months / Weeks
  const toggleAllBtn = document.getElementById('toggle-all-btn');
  const toggleAllText = document.getElementById('toggle-all-text');
  let areAllExpanded = true;

  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
      areAllExpanded = !areAllExpanded;
      toggleAllText.textContent = areAllExpanded ? 'Collapse All' : 'Expand All';

      state.curriculum.forEach(month => {
        const monthEl = document.getElementById(`month-section-${month.monthNumber}`);
        if (monthEl) {
          if (areAllExpanded) monthEl.classList.remove('collapsed');
          else monthEl.classList.add('collapsed');
          state.ui.collapsedMonths[month.monthNumber] = !areAllExpanded;
        }

        month.weeks.forEach(week => {
          const weekEl = document.getElementById(`week-card-${week.weekNumber}`);
          if (weekEl) {
            if (areAllExpanded) weekEl.classList.remove('collapsed');
            else weekEl.classList.add('collapsed');
            state.ui.collapsedWeeks[week.weekNumber] = !areAllExpanded;
          }
        });
      });

      saveUIState();
    });
  }

  // Reset Progress Modal Handlers
  const resetBtn = document.getElementById('reset-btn');
  const modal = document.getElementById('reset-modal');
  const cancelResetBtn = document.getElementById('cancel-reset-btn');
  const confirmResetBtn = document.getElementById('confirm-reset-btn');
  const clearNotesCheckbox = document.getElementById('modal-clear-notes');

  if (resetBtn && modal) {
    resetBtn.addEventListener('click', () => {
      modal.classList.add('open');
    });

    cancelResetBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });

    confirmResetBtn.addEventListener('click', () => {
      // Clear checks
      state.checkedSubtopics = {};
      saveChecks();

      // Clear notes if requested
      if (clearNotesCheckbox && clearNotesCheckbox.checked) {
        state.notes = {};
        saveNotes();
        // Clear textareas
        document.querySelectorAll('.notes-textarea').forEach(ta => {
          ta.value = '';
        });
      }

      modal.classList.remove('open');

      // Re-render and calculate
      renderRoadmap();
      updateAllCalculations();
      applyFilterAndSearch();
    });
  }

  // Filter Buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');
      state.ui.currentFilter = btn.dataset.filter;
      applyFilterAndSearch();
    });
  });

  // Search Input
  const searchInput = document.getElementById('search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.ui.searchQuery = e.target.value.trim().toLowerCase();
      if (searchClearBtn) {
        searchClearBtn.style.display = state.ui.searchQuery ? 'flex' : 'none';
      }
      applyFilterAndSearch();
    });
  }

  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.ui.searchQuery = '';
      searchClearBtn.style.display = 'none';
      searchInput.focus();
      applyFilterAndSearch();
    });
  }

  // Reset Filters Bar
  const resetFilterBtn = document.getElementById('reset-filter-btn');
  const emptyResetBtn = document.getElementById('empty-reset-btn');

  const clearAllFilters = () => {
    state.ui.searchQuery = '';
    state.ui.currentFilter = 'all';
    if (searchInput) searchInput.value = '';
    if (searchClearBtn) searchClearBtn.style.display = 'none';
    filterButtons.forEach(btn => {
      if (btn.dataset.filter === 'all') {
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-checked', 'false');
      }
    });
    applyFilterAndSearch();
  };

  if (resetFilterBtn) resetFilterBtn.addEventListener('click', clearAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', clearAllFilters);
}

/**
 * Filter and Search logic
 */
function applyFilterAndSearch() {
  const query = state.ui.searchQuery;
  const filter = state.ui.currentFilter;
  let totalMatchingTopics = 0;
  let visibleWeeksCount = 0;

  state.curriculum.forEach(month => {
    let monthHasVisibleWeeks = false;
    const monthEl = document.getElementById(`month-section-${month.monthNumber}`);

    month.weeks.forEach(week => {
      const weekCard = document.getElementById(`week-card-${week.weekNumber}`);
      if (!weekCard) return;

      let weekHasMatchingTopics = false;

      week.topics.forEach(topic => {
        const topicEl = document.getElementById(`topic-${topic.id}`);
        if (!topicEl) return;

        // Check completion state
        let isTopicDone = false;
        if (topic.subtopics && topic.subtopics.length > 0) {
          isTopicDone = topic.subtopics.every(s => !!state.checkedSubtopics[s.id]);
        } else {
          isTopicDone = !!state.checkedSubtopics[topic.id];
        }

        // Apply completion filter
        let matchesFilter = true;
        if (filter === 'completed' && !isTopicDone) matchesFilter = false;
        if (filter === 'incomplete' && isTopicDone) matchesFilter = false;

        // Apply search query
        let matchesQuery = true;
        if (query) {
          const inTopicTitle = topic.title.toLowerCase().includes(query);
          const inSubtopics = topic.subtopics ? topic.subtopics.some(s => s.title.toLowerCase().includes(query)) : false;
          const inWeekTitle = week.weekTitle.toLowerCase().includes(query);
          const inKeyOutcome = week.keyOutcome.toLowerCase().includes(query);
          const inProject = week.project ? week.project.toLowerCase().includes(query) : false;

          matchesQuery = inTopicTitle || inSubtopics || inWeekTitle || inKeyOutcome || inProject;
        }

        const isVisible = matchesFilter && matchesQuery;
        topicEl.style.display = isVisible ? 'block' : 'none';

        if (isVisible) {
          weekHasMatchingTopics = true;
          totalMatchingTopics++;
        }
      });

      // Show/hide week
      if (weekHasMatchingTopics) {
        weekCard.style.display = 'block';
        monthHasVisibleWeeks = true;
        visibleWeeksCount++;

        // If searching or filtering, automatically expand matching week so user can see it!
        if (query || filter !== 'all') {
          weekCard.classList.remove('collapsed');
        }
      } else {
        weekCard.style.display = 'none';
      }
    });

    // Show/hide month
    if (monthEl) {
      if (monthHasVisibleWeeks) {
        monthEl.style.display = 'block';
        if (query || filter !== 'all') {
          monthEl.classList.remove('collapsed');
        }
      } else {
        monthEl.style.display = 'none';
      }
    }
  });

  // Results info bar
  const infoBar = document.getElementById('results-info-bar');
  const countText = document.getElementById('results-count-text');
  const emptyState = document.getElementById('empty-state');
  const roadmapTree = document.getElementById('roadmap-tree');

  if (query || filter !== 'all') {
    if (infoBar) infoBar.style.display = 'flex';
    if (countText) {
      countText.textContent = `Showing ${totalMatchingTopics} matching topic${totalMatchingTopics === 1 ? '' : 's'}${query ? ` for "${query}"` : ''} (${filter})`;
    }
  } else {
    if (infoBar) infoBar.style.display = 'none';
  }

  // Empty state handling
  if (totalMatchingTopics === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (roadmapTree) roadmapTree.style.display = 'none';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (roadmapTree) roadmapTree.style.display = 'flex';
  }
}

/**
 * Basic HTML escaping utility
 */
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
