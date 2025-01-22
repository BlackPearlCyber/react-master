export const questions = {
  questions: [
    // react Basics - Syntax
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In React, every application starts with the __ method.",
      blanks: ["render"],
      note: "Syntax"
    },
    // React Basics - Data Types
    {
      id: 2,
      type: "multiple-choice",
      question: "Which data type is used to manage component state in React?",
      options: ["string", "number", "object", "boolean"],
      correctAnswers: ["object"],
      multipleAnswers: false,
      note: "Data Types"
    },
    // React Basics - Variables
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "To declare a constant in React, use the __ keyword.",
      blanks: ["const"],
      note: "Variables"
    },
    // React Basics - Loops
    {
      id: 4,
      type: "fill-in-the-blanks",
      question: "A __ loop is commonly used to render lists in React.",
      blanks: ["map"],
      note: "Loops"
    },
    // React Basics - Conditionals
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ operator is used in React for conditional rendering.",
      blanks: ["ternary"],
      note: "Conditionals"
    },
    // React Basics - Arrays
    {
      id: 6,
      type: "multiple-choice",
      question: "Which method is used to add elements to an array in React?",
      options: ["push", "pop", "add", "insert"],
      correctAnswers: ["push"],
      multipleAnswers: false,
      note: "Arrays"
    },
    // React Basics - Components
    {
      id: 7,
      type: "multiple-choice",
      question: "Which of these is NOT a valid type of React component?",
      options: ["Class Component", "Function Component", "Pure Component", "Virtual Component"],
      correctAnswers: ["Virtual Component"],
      multipleAnswers: false,
      note: "Components"
    },
    // React Basics - Props
    {
      id: 8,
      type: "fill-in-the-blanks",
      question: "Props in React are __ by default.",
      blanks: ["read-only"],
      note: "Props"
    },
    // React Basics - Lifecycle Methods
    {
      id: 9,
      type: "multiple-choice",
      question: "Which lifecycle method is invoked immediately after a component is mounted?",
      options: ["componentWillMount", "componentDidMount", "render", "componentWillUpdate"],
      correctAnswers: ["componentDidMount"],
      multipleAnswers: false,
      note: "Lifecycle Methods"
    },
    // React Basics - State
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "In React, state is managed within a __.",
      blanks: ["component"],
      note: "State"
    },
    // React Basics - Hooks
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "To use state in a functional component, use the __ hook.",
      blanks: ["useState"],
      note: "Hooks"
    },
    // React Basics - Keywords
    {
      id: 12,
      type: "multiple-choice",
      question: "Which of the following is a valid React keyword?",
      options: ["useEffect", "include", "virtual", "define"],
      correctAnswers: ["useEffect"],
      multipleAnswers: false,
      note: "Keywords"
    },
    // React Basics - JSX
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "JSX in React stands for __ JavaScript Syntax.",
      blanks: ["XML"],
      note: "JSX"
    },
    // React Basics - Virtual DOM
    {
      id: 14,
      type: "fill-in-the-blanks",
      question: "React uses a __ DOM for efficient UI updates.",
      blanks: ["virtual"],
      note: "Virtual DOM"
    },
    // React Basics - Keys
    {
      id: 15,
      type: "matching",
      question: "Match the React concepts with their characteristics",
      leftItems: ["Keys", "Refs", "Props"],
      rightItems: ["Unique identifiers", "Direct DOM access", "Data passed to components"],
      correctMatches: {
        Keys: "Unique identifiers",
        Refs: "Direct DOM access",
        Props: "Data passed to components"
      },
      note: "Keys"
    }
  ]
};
