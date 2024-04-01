import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const quizzesDirectory = path.join(process.cwd(), 'data');
  const filenames = fs.readdirSync(quizzesDirectory);
  const quizzes = filenames.map((filename) => ({
    id: filename.replace('.json', ''),
    title: filename.replace('.json', '').replace(/-/g, ' '),
  }));

  return {
    props: {
      quizzes,
    },
  };
}

export default function Quizzes({ quizzes }) {
  return (
    <div>
      <h1>Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link href={`/quizzes/${quiz.id}`}>
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
