import { ThinkingModel } from './../../models/thinking.model';
export interface ThinkingState {
  thinkings: ThinkingModel[],
  thinking: ThinkingModel | null,
  error: string

}

export const initialState: ThinkingState = {
  thinkings: [],
  thinking: null,
  error: ''
}
