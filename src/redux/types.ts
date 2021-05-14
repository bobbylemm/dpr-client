export interface IPost {
  id?: number;
  title: string;
  createdAt: string;
}

export type PostState = {
  posts: IPost[];
};

export type PostAction = {
  type: string;
  post: IPost;
};

export type DispatchType = (args: PostAction) => PostAction;
