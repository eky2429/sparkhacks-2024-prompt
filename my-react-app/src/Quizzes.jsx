import './App.css';

export const quiz1 = {
    topic: 'money management',
    level: '1',
    totalQuestions: 5,
    perQuestionScore: 5,
    questions: [
      {
        question: 'People who do not understand the difference between ______________ usually struggle with financial problems.',
        choices: ['taxes and insurance', 'needs and wants', 'buying and retiring', 'food and shelter'],
        type: 'MCQs',
        correctAnswer: 'needs and wants',
      },
      {
        question: 'One major problem with using credit cards is that people...',
        choices: ['Lose them a lot', 'Buy things they cannot afford.', 'Have to pay to use them', 'Forget to use them.'],
        type: 'MCQs',
        correctAnswer: 'Buy things they cannot afford.',
      },
      {
        question: 'Which of the following records is NOT typically recommended to be kept safe in your home or personal computer?',
        choices: ['Tax records', 'Housing records', 'Shopping receipts', 'Investment records'],
        type: 'MCQs',
        correctAnswer: 'Shopping reciepts',
      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
      {
        question: 'What is the primary purpose of maintaining a system for personal financial records?',
        choices: ['Simplifying daily spending decisions', 'Planning and measuring financial progress', 
        'Completing required tax reports', 'Tracking daily business affairs'],
        type: 'MCQs',
        correctAnswer: 'Planning and measuring financial progress',
      },
    ],
  }

export const quiz2 = {}
export const quiz3 = {}
export const quiz4 = {}
export const quiz5 = {}
export const quiz6 = {}
export const quiz7 = {}


// QUIZ LAYOUT //
const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1)
  }

  const { questions } = quiz
  const { question, choices } = questions[activeQuestion]

  return (
    <div>
      <h1>Quiz</h1>
      <h2>{question}</h2>
      <ul>
        {choices.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={onClickNext}>Next</button>
    </div>
  )
}