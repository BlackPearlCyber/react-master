export const questions = {
  questions: [
    // React Medium - JSX
    {
      id: 1,
      type: "multiple-choice",
      question: "What does JSX stand for in React?",
      options: [
        "JavaScript Extension",
        "JavaScript XML",
        "JavaScript Syntax",
        "Java Syntax Extension"
      ],
      correctAnswers: ["JavaScript XML"],
      multipleAnswers: false,
      note: "JSX"
    },
    // React Medium - Props
    {
      id: 2,
      type: "fill-in-the-blanks",
      question: "React components use __ to pass data from a parent to a child component.",
      blanks: ["props"],
      note: "Props"
    },
    // React Medium - State
    {
      id: 3,
      type: "multiple-choice",
      question: "Which hook is used to manage state in a functional React component?",
      options: ["useState", "useEffect", "useReducer", "useMemo"],
      correctAnswers: ["useState"],
      multipleAnswers: false,
      note: "State"
    },
    // React Medium - Component Lifecycle
    {
      id: 4,
      type: "matching",
      question: "Match the React lifecycle methods with their purpose",
      leftItems: ["componentDidMount", "componentWillUnmount", "render"],
      rightItems: [
        "Called after the component mounts",
        "Called before the component unmounts",
        "Used to define UI"
      ],
      correctMatches: {
        componentDidMount: "Called after the component mounts",
        componentWillUnmount: "Called before the component unmounts",
        render: "Used to define UI"
      },
      note: "Lifecycle"
    },
    // React Medium - Event Handling
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "In React, events are handled using the __ attribute.",
      blanks: ["onClick"],
      note: "Event Handling"
    },
    // React Medium - Conditional Rendering
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of these techniques can be used for conditional rendering in React?",
      options: [
        "Ternary operators",
        "Logical AND operators",
        "if statements",
        "All of the above"
      ],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "Conditional Rendering"
    },
    // React Medium - Lists and Keys
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "React uses the __ prop to uniquely identify list items.",
      blanks: ["key"],
      note: "Lists and Keys"
    },
    // React Medium - Controlled Components
    {
      id: 8,
      type: "multiple-choice",
      question: "What defines a controlled component in React?",
      options: [
        "It is controlled by the parent component",
        "It is controlled by its own state",
        "It is controlled by React's state",
        "Its value is controlled by React via props"
      ],
      correctAnswers: ["Its value is controlled by React via props"],
      multipleAnswers: false,
      note: "Controlled Components"
    },
    // React Medium - React Router
    {
      id: 9,
      type: "multiple-choice",
      question: "Which component is used to define a route in React Router?",
      options: ["Route", "Link", "Switch", "BrowserRouter"],
      correctAnswers: ["Route"],
      multipleAnswers: false,
      note: "React Router"
    },
    // React Medium - Forms
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "To handle form submission in React, you use the __ event.",
      blanks: ["onSubmit"],
      note: "Forms"
    },
    // React Medium - Fragment
    {
      id: 11,
      type: "multiple-choice",
      question: "What is the purpose of React.Fragment?",
      options: [
        "To group multiple elements without adding extra DOM nodes",
        "To handle fragments of state",
        "To optimize React components",
        "To enable code splitting"
      ],
      correctAnswers: [
        "To group multiple elements without adding extra DOM nodes"
      ],
      multipleAnswers: false,
      note: "Fragment"
    },
    // React Medium - Lazy Loading
    {
      id: 12,
      type: "fill-in-the-blanks",
      question: "React.lazy is used to __ load components.",
      blanks: ["lazy"],
      note: "Lazy Loading"
    },
    // React Medium - Context API
    {
      id: 13,
      type: "multiple-choice",
      question: "Which React method is used to provide context to components?",
      options: ["Context.Provider", "useContext", "createContext", "Context.Consumer"],
      correctAnswers: ["Context.Provider"],
      multipleAnswers: false,
      note: "Context API"
    },
    // React Medium - Refs
    {
      id: 14,
      type: "fill-in-the-blanks",
      question: "The React __ feature is used to directly access DOM nodes.",
      blanks: ["refs"],
      note: "Refs"
    },
    // React Medium - Optimization
    {
      id: 15,
      type: "multiple-choice",
      question: "Which of these React tools can be used for performance optimization?",
      options: [
        "React.memo",
        "useCallback",
        "useMemo",
        "All of the above"
      ],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "Optimization"
    }
  ]
};
