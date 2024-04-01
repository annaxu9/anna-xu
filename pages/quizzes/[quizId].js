import {useState } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  const quizzesDirectory = path.join(process.cwd(), 'data');
  const filenames = fs.readdirSync(quizzesDirectory);
  const paths = filenames.map((filename) => ({
    params: { quizId: filename.replace('.json', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const quizFilePath = path.join(process.cwd(), 'data', `${params.quizId}.json`);
  const quizData = JSON.parse(fs.readFileSync(quizFilePath, 'utf8'));

  return {
    props: {
      quiz: quizData,
    },
  };
}

export default function QuizPage({ quiz }) {
  const router = useRouter();
  const { quizId } = router.query;
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      if (formData.get(`question-${index}`) === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">{quiz.title}</h1>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
            <div className="flex flex-col space-y-2">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    className="mr-2"
                  />
                  <span className="text-lg">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          disabled={submitted}
        >
          Submit
        </button>
        {submitted && (
          <div className="mt-6 text-lg font-semibold">
            You got {score} out of {quiz.questions.length} questions correct!
          </div>
        )}
      </form>
    </div>
  );
}
