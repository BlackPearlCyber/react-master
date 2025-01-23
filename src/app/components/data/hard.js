export const questions = {
  questions: [
    // React Hard - Context API
    {
      id: 1,
      type: "multiple-choice",
      question: "What is the purpose of React's Context API?",
      options: [
        "To manage global state",
        "To style components",
        "To handle HTTP requests",
        "To optimize rendering"
      ],
      correctAnswers: ["To manage global state"],
      multipleAnswers: false,
      note: "Context API"
    },
    // React Hard - Custom Hooks
    {
      id: 2,
      type: "fill-in-the-blanks",
      question: "A custom hook's name in React must start with the __ prefix.",
      blanks: ["use"],
      note: "Custom Hooks"
    },
    // React Hard - Error Boundaries
    {
      id: 3,
      type: "multiple-choice",
      question: "Which lifecycle method is used in class components to handle errors in React?",
      options: [
        "componentDidCatch",
        "componentDidMount",
        "render",
        "getDerivedStateFromError"
      ],
      correctAnswers: ["componentDidCatch"],
      multipleAnswers: false,
      note: "Error Boundaries"
    },
    // React Hard - Portals
    {
      id: 4,
      type: "matching",
      question: "Match the React Portal concepts with their characteristics",
      leftItems: ["Portals", "Root DOM", "Event Bubbling"],
      rightItems: [
        "Render outside root",
        "Main React container",
        "Behaves normally"
      ],
      correctMatches: {
        Portals: "Render outside root",
        RootDOM: "Main React container",
        EventBubbling: "Behaves normally"
      },
      note: "Portals"
    },
    // React Hard - Concurrent Features
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "React's __ feature allows interruption of rendering for higher priority updates.",
      blanks: ["Concurrent Mode"],
      note: "Concurrent Features"
    },
    // React Hard - Suspense
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of these is NOT a valid use case for React Suspense?",
      options: [
        "Code Splitting",
        "Lazy Loading",
        "Error Handling",
        "Data Fetching"
      ],
      correctAnswers: ["Error Handling"],
      multipleAnswers: false,
      note: "Suspense"
    },
    // React Hard - Reconciliation
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "React's reconciliation algorithm uses the __ key to identify elements.",
      blanks: ["unique"],
      note: "Reconciliation"
    },
    // React Hard - Server-Side Rendering (SSR)
    {
      id: 8,
      type: "multiple-choice",
      question: "Which library is commonly used for server-side rendering in React?",
      options: ["Redux", "Next.js", "Webpack", "React Router"],
      correctAnswers: ["Next.js"],
      multipleAnswers: false,
      note: "SSR"
    },
    // React Hard - Hydration
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "React's __ process attaches event listeners to a pre-rendered DOM.",
      blanks: ["hydration"],
      note: "Hydration"
    },
    // React Hard - Performance Optimization
    {
      id: 10,
      type: "multiple-choice",
      question: "Which of these is used in React to prevent unnecessary re-renders?",
      options: ["useMemo", "useEffect", "useReducer", "useRef"],
      correctAnswers: ["useMemo"],
      multipleAnswers: false,
      note: "Performance Optimization"
    },
    // React Hard - Strict Mode
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "React's __ mode helps identify potential issues in an application.",
      blanks: ["Strict"],
      note: "Strict Mode"
    },
    // React Hard - Code Splitting
    {
      id: 12,
      type: "multiple-choice",
      question: "Which method is commonly used for code splitting in React?",
      options: ["React.lazy", "useEffect", "useReducer", "useContext"],
      correctAnswers: ["React.lazy"],
      multipleAnswers: false,
      note: "Code Splitting"
    },
    // React Hard - Fiber Architecture
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "React Fiber splits rendering work into __ to improve performance.",
      blanks: ["chunks"],
      note: "Fiber Architecture"
    },
    // React Hard - Higher-Order Components (HOC)
    {
      id: 14,
      type: "multiple-choice",
      question: "Which of these describes a Higher-Order Component in React?",
      options: [
        "A component that fetches data",
        "A component that manages state",
        "A function that returns a component",
        "A component that handles errors"
      ],
      correctAnswers: ["A function that returns a component"],
      multipleAnswers: false,
      note: "HOC"
    },
    // React Hard - Immutable State
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "In React, state is considered immutable to ensure predictable __ updates.",
      blanks: ["UI"],
      note: "Immutable State"
    }
  ]
};
