export interface QuestionType {
  id: number;
  name: QuestionTypeName;
}

export type QuestionTypeName = 'HTML' | 'CSS' | 'js' | 'Angular' | 'TypeScript';
