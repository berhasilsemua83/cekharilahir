import { Question, Temperament, TestResult } from './types';

/**
 * Shuffles an array and returns a subset of defined size.
 */
export const getRandomQuestions = (allQuestions: Question[], count: number = 30): Question[] => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Calculates the score based on answers.
 * Returns the primary and secondary temperaments along with raw scores.
 */
export const calculateResult = (answers: Temperament[]): TestResult => {
  const scores: Record<Temperament, number> = {
    'S': 0,
    'K': 0,
    'M': 0,
    'P': 0
  };

  answers.forEach((ans) => {
    if (scores[ans] !== undefined) {
      scores[ans]++;
    }
  });

  // Sort scores descending
  const sortedScores = Object.entries(scores).sort(([, scoreA], [, scoreB]) => scoreB - scoreA);

  const primary = sortedScores[0][0] as Temperament;
  // Handle case where all scores might be 0 (unlikely with 30 q) or tied
  const secondary = sortedScores[1] ? (sortedScores[1][0] as Temperament) : (sortedScores[0][0] as Temperament);

  return {
    primary,
    secondary,
    scores
  };
};
