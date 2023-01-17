export interface CommentState {
  id?: number;
  profile_url: string;
  author?: string;
  content?: string;
  createdAt?: string;
}

interface Props{
  form: CommentState;
  setForm: (a: any) => any;
  handleUpdate: (id: number) => void;
}
