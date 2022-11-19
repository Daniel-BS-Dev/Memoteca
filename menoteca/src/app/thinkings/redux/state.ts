import { ThinkingModel } from './../../models/thinking.model';
export interface ThinkingState {
  thinkings: ThinkingModel[],
  thinking: ThinkingModel | null,
  error: string,
  edit: boolean,
  loading: boolean
}

export const initialState: ThinkingState = {
  thinkings: [],
  thinking: null,
  error: '',
  edit: false,
  loading: false
}
