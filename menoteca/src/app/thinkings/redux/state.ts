import { ThinkingModel } from './../../models/thinking.model';
export interface ThinkingState {
  thinkings: ThinkingModel[],
  thinking: ThinkingModel | null,
  numberPage: number,
  error: string,
  edit: boolean,
  loading: boolean
}

export const initialState: ThinkingState = {
  thinkings: [],
  thinking: null,
  numberPage: 0,
  error: '',
  edit: false,
  loading: false
}
