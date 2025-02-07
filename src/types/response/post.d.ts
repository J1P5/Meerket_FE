
export interface ISearchPost {
  myLocation: string;
  productId: number;
  memberId: number;
  title: string;
  price: number;
  address: string;
  uploadTime: string;
  expiredTime: string;
  isEarly: boolean;
  image: string;
}

export interface ISearchPostResponse extends IResponse {
  result: {
    content: ISearchPost[];
    nextCursor: number;
  };
}
