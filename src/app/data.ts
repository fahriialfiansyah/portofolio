import { StaticImageData } from "next/image";
import { cache } from "react";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  HIDDEN: boolean;
}

export const DATA = {
  HEADER: {
    NAME: "Fahri Alfiansyah",
    AGE: "22",
    PRONOUN: "he/him",
    HEADLINE:
      "Fresh graduate in Informatics from Telkom University, passionate about AI, NLP, and LLM-based solutions.",
    RESUME:
      "https://docs.google.com/document/d/1flP3Hd4MsRVrQuI1mjl2hVM_R6vvVPwh3_8aAx6Wj6s/edit?usp=sharing",
    EMAIL: "mailto:fahrialfiansyah121@gmail.com",
    GITHUB: "https://github.com/fahriialfiansyah",
    LINKEDIN: "https://www.linkedin.com/in/fahri-alfiansyah",
  },

  ABOUT_ME: {
    INTRO:
      "Hi! I'm an AI enthusiast and fresh graduate from Telkom University who loves building intelligent systems using Natural Language Processing and Large Language Models. I enjoy solving real-world problems with applied machine learning and contributing to impactful AI solutions.",
    EXPERTISE:
      "My expertise lies in NLP, LLM fine-tuning, semantic search, and data-centric AI development. I've worked with HuggingFace Transformers, LangChain, and PyTorch to build educational, research, and industrial AI projects.",
  },

  EXPERIENCE: {
    "Telkom University": {
      WEBSITE: "https://telkomuniversity.ac.id/en/",
      POSITION: "Assistant Practicum - Applied Artificial Intelligence",
      LOCATION: "Remote",
      DURATION: "Mar, 2025 - Jun, 2025",
      DESCRIPTION: [
        "Managed 2 scheduled classes with a total of over +50 students.",
        "Provided guidance to students and addressed module-related inquiries.",
        "Contributed to grading student assignments (modules and assignments).",
        "Assisted lecturers in preparing course materials and managing classes.",
      ],
      TECH_STACK: [
        "Python",
        "Jupyter / Google Colab",
        "University Learning Management System",
        "Markdown / Documentation",
        "Microsoft Excel (grade tracking)",
      ],
    },
    "PuTI Telkom University":
      {
        WEBSITE: "https://it.telkomuniversity.ac.id/en/",
        POSITION: "Machine Learning Engineer Intern",
        LOCATION: "Hybrid - Bandung, Indonesia",
        DURATION: "Nov, 2023 - Jun, 2025",
        DESCRIPTION: [
          "Researched and implemented best practices to find similar papers to be recommended when the keyword relationship that has same meaning has not been found, moreover from multi discipline topics.", 
          "Created algorithms for generate keywords that semantically have the same or related meaning from other multidisciplinary or general ontology that was not previously detected in Computer Science Ontology (CSO).",
          "Developed ML algorithms to analyze huge volumes of WordNet data to build recommender systems.",
        ],
        TECH_STACK: [
          "Python",
          "Jupyter Notebook",
          "WordNet (NLTK)",
          "CSO Classifier",
          "Semantic Similarity",
          "Ontology Engineering",
          "NLTK",
          "Gensim",
          "Doc2Vec / FastText",
          "Git & GitHub",
        ],
      },
    "BPH Migas": {
      WEBSITE: "https://www.bphmigas.go.id/",
      POSITION: "Data Scientist Intern",
      LOCATION: "Remote",
      DURATION: "Oct, 2021 - May, 2022",
      DESCRIPTION: [
        "Created a comprehensive data dashboard utilizing Tableau software, featuring a diverse range of charts and tables that showcase essential insights derived from BPH Migas data.",
        "Designed projected quotas for diesel fuel and kerosene for the upcoming year. Employed various time series models including Linear Regression, Simple Exponential Smoothing, Double Exponential Smoothing, and Triple Exponential Smoothing (Holt-Winters Method) to determine the most accurate forecasting method. The Prophet model emerged as the most accurate choice after thorough model comparison.",
      ],
      TECH_STACK: [
        "Python",
        "Pandas",
        "Prophet",
        "Time Series Modeling",
        "Tableau",
        "SQL",
        "Jupyter / Notebook",
        "Git & GitHub",
      ],
    },
  },

  PROJECTS: {
    "Assistant for Multimodal Data Analysis and Anxiety Prediction using EEG and Transcribed Interviews": {
      SLUG: "eeg-anxiety",
      LIVE_PREVIEW: "",
      DESCRIPTION: [
        "Preprocessed raw EEG and questionnaire data by automating file extraction, merging participant responses, and generating structured Excel outputs for anxiety-level analysis.",
        "Transcribed audio interviews using OpenAI Whisper and linked transcripts to corresponding questionnaire data for multi-modal analysis.",
        "Applied NLP techniques including text cleaning, stopword removal, LDA topic modeling, and TF-IDF to extract meaningful features from student speech transcripts.",
        "Conducted feature correlation analysis and built a Random Forest classifier to predict student anxiety levels based on textual features and speech content."
      ],
      TECH_STACK: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "NLTK",
        "Gensim",
        "OpenAI Whisper",
        "Jupyter Notebook",
        "TF-IDF",
        "LDA Topic Modeling",
        "Random Forest",
        "Descriptive Statistics"
      ],
      IMAGE: "",
      HIDDEN: false,
    },

    "Assistant for Exploratory Data Analysis & Failure Prediction for Industrial Power Systems with PT PLN Indonesia Power": {
      SLUG: "eda-pln",
      LIVE_PREVIEW: "",
      DESCRIPTION: [
        "Developed a data exploration and prediction pipeline using historical temperature spread data from 14 nozzle-sensor units to monitor thermal anomalies in industrial power systems.",
        "Implemented linear regression forecasting over resampled and interpolated sensor signals to predict critical thermal spread thresholds up to one week in advance.",
        "Designed and visualized failure sequence frequency distributions to identify patterns in consecutive over-threshold sensor events, improving understanding of early failure signals.",
        "Engineered features such as mean and standard deviation of multivariate sensor data, and combined with historical slope analysis for condition-based maintenance insight."
      ],
      TECH_STACK: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Time Series Analysis",
        "Jupyter Notebook",
      ],
      IMAGE: "",
      HIDDEN: false,
    },

    "Assistant for Development of Summarization Chatbot and FAQ Dataset Generation Using LLMs with Ministry of Communication and Digital": {
      SLUG: "chatbot-komdigi",
      LIVE_PREVIEW: "",
      GITHUB: "",
      DESCRIPTION: [
        "Designed and developed a chatbot system that automatically extracts key problems, solutions, and response templates from helpdesk conversation data using OpenAI LLMs (GPT-4o-mini and fine-tuned models).",
        "Implemented a complete NLP pipeline covering: data preprocessing, summarization, response generation, FAQ refinement, and topic modeling using BERTopic to create a structured FAQ dataset from unstructured helpdesk tickets.",
        "Developed a full-stack application integrating Python (Flask API), OpenAI API, and HTML/JavaScript frontend to simulate user-chatbot interaction.",
        "Contributed to improving service efficiency of the Ministry's digital helpdesk system through automation of summarization and knowledge base generation.",
      ],
      NOTE: "",
      TECH_STACK: [
        "Python",
        "Flask",
        "OpenAI API",
        "LLM (GPT-4o, GPT-3.5, Llama 3)",
        "LangChain",
        "BERTopic",
        "HTML/CSS",
        "JavaScript",
        "Jupyter Notebook",
      ],
      IMAGE: "",
      HIDDEN: false,
    },
  },

  ALL_PROJECTS: "https://github.com/fahriialfiansyah?tab=repositories",

  CERTIFICATIONS: {
    "Machine Learning Engineer (DataCamp)": {
      DATE: "July 2025",
      TIME: "",
      LINK: "https://www.datacamp.com/completed/statement-of-accomplishment/track/7108f8f2acf5b1096c3f8af28a6430362734fb71",
      DESCRIPTION:
        "I learned to build and deploy machine learning models using Python. The track covered supervised learning with scikit-learn, MLOps concepts, model monitoring, and data versioning. I also gained hands-on experience with tools like MLflow, DVC, Docker, and CI/CD workflows to manage the full ML lifecycle from development to production.",
    },
    "ChatGPT Fundamentals (DataCamp)": {
      DATE: "June 2025",
      TIME: "",
      LINK: "https://www.datacamp.com/completed/statement-of-accomplishment/track/230f313566d0e30d2bcc75efb3c5767adc6a0cb7",
      DESCRIPTION:
        "I learned how to effectively use ChatGPT, including best practices for prompt writing and prompt engineering. The track covered the architecture of GPT models, advanced prompt crafting techniques, and practical applications in business workflows. I also explored combining ChatGPT's natural language capabilities with Python for advanced data analysis, and gained insights into creating custom ChatGPT models for personalized AI solutions.",
    },
    "Data Scientist in Python (DataCamp)": {
      DATE: "March 2025",
      TIME: "",
      LINK: "https://www.datacamp.com/completed/statement-of-accomplishment/track/40180542d810d0eb30f8d7593f21ab6a2b5dac29",
      DESCRIPTION:
        "I enhanced my skills in data importing, preprocessing, and machine learning with Python. The track included learning to build reusable Python packages and applying machine learning fundamentals in business contexts. I gained proficiency in SQL for querying, joining, and analyzing relational databases, complemented by practical projects like exploring student mental health data and analyzing video game trends. Additionally, I developed version control skills using Git to manage collaborative data and software projects effectively.",
    },
    "Power BI Fundamentals (DataCamp)": {
      DATE: "September 2024",
      TIME: "",
      LINK: "https://www.datacamp.com/completed/statement-of-accomplishment/track/dff856a41bacfdd9ee5d661e1ee3ca85f2a947c9",
      DESCRIPTION:
        "I learned to build impactful data visualizations and reports using Power BI. The track covered the basics of Power BI, including data preparation with Power Query Editor, data modeling, and mastering Data Analysis Expressions (DAX) for creating calculated columns, tables, and measures. I also gained hands-on experience through a case study analyzing customer churn, applying data transformation and visualization techniques to extract actionable insights.",
    },
  },

  SKILLS: {
    Languages: [
      "Python",
      "Java",
      "Kotlin",
      "C++",
      "C",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SQL"
    ],

    Frameworks: [
      "Flask",
      "FastAPI",
      "Streamlit",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Flutter"
    ],

    "Machine Learning and AI": [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face Transformers",
      "OpenAI API",
      "NLTK",
      "SpaCy",
      "Gensim",
      "XAI (SHAP, LIME, PDP)",
      "YOLOv4/v5/v7",
      "Whisper",
      "BERTopic",
      "LangChain",
      "LlamaIndex",
      "SFTTrainer",
      "PEFT (LoRA/QLoRA)",
      "tiktoken",
      "BigML",
      "Prophet"
    ],

    "Natural Language Processing": [
      "Text Preprocessing",
      "Topic Modeling",
      "Summarization",
      "Text Classification",
      "FAQ Generation",
      "Sentiment Analysis",
      "NER",
      "TF-IDF",
      "LDA"
    ],

    "Computer Vision": [
      "OpenCV",
      "Pillow",
      "YOLO Object Detection",
      "Image Preprocessing",
      "Thermal Image Analysis",
    ],

    "Database & Backend": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase Firestore",
      "Firebase Storage",
      "Firebase Authentication",
      "REST API",
      "GraphQL",
      "NoSQL"
    ],

    "Cloud & Deployment": [
      "Google Cloud Platform (GCP)",
      "Vercel",
      "Netlify"
    ],

    "Tools & Platforms": [
      "Jupyter Notebook",
      "Google Colab",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "Figma",
      "Overleaf",
    ],

    "Data Analytics and Visualization": [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Tableau",
      "Descriptive Statistics",
      "Time Series Analysis",
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering",
      "Correlation Analysis"
    ],

    "Package Managers and Build Tools": [
      "Pip",
      "Conda",
      "NPM",
      "Yarn",
    ]
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);
