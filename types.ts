export type Temperament = 'S' | 'K' | 'M' | 'P';

export interface QuestionOptions {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface QuestionMapping {
  A: Temperament;
  B: Temperament;
  C: Temperament;
  D: Temperament;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOptions;
  mapping: QuestionMapping;
  category?: string;
  level?: string;
}

export interface ResultProfile {
  title: string;
  summary: string;
  
  // Section B: Thinking & Decision
  decisionStyle: string[];
  decisionGuide?: string[]; // "Gaya keputusan terbaik"
  
  // Section C: Emotional Dynamics
  emotionalDynamics: string[];
  stressSigns?: string[]; // "Tanda overload"
  
  // Section D: Interaction
  interactionStyle: string[];
  interactionTips?: string[]; // "Kalimat yang cocok"
  
  // Section E: Challenges
  challenges: string[];
  
  // Section F: Conflict
  conflictTrigger: string; // "Pemicu"
  conflictStress?: string; // "Saat stres"
  conflictSolution?: string[]; // "Cara meredakan"
  
  // Section G: Recommendations
  recommendations: string[];
  
  // Section H: Direction (Output)
  direction?: string;
  
  // Section I: Careers
  suitableCareers: string[];
  
  // Section J: Checklist
  checklist?: string[];
}

export interface TestResult {
  primary: Temperament;
  secondary: Temperament;
  scores: Record<Temperament, number>;
}
