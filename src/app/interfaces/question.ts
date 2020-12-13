import { QuestionTypeName } from '../shared/models/question';

export interface Question {
  id?: string;
  title: string;
  answer: string;
  state: number;
  type: QuestionTypeName;
}
