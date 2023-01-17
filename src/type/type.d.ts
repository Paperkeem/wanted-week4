export interface CommentState {
  id?: number;
  profile_url: string;
  author?: string;
  content?: string;
  createdAt?: string;
}

interface CProps {
  handleUpdate: (id: number) => void;
}

interface FProps {
  form: CommentState;
  setForm: (a: any) => any;
}
