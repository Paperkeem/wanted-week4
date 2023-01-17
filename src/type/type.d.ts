export interface CommentState {
  id?: number;
  profile_url: string;
  author?: string;
  content?: string;
  createdAt?: string;
}

export interface PageProps {
  focusNum: number;
  maxPage: number;
  handleClick: (page: number, e?: any) => void;
}

export interface CProps extends PageProps {
  handleUpdate: (id: number) => void;
}

export interface FoProps extends PageProps {
  form: CommentState;
  setForm: (a: any) => any;
}