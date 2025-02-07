import { IImageInfo, ICoord, IImages } from "types";

export type Category =
  | "ELECTRONIC"
  | "FURNITURE"
  | "CLOTHING"
  | "FOOD"
  | "BEAUTY"
  | "SPORTS"
  | "TOYS"
  | "BOOKS"
  | "AUTOMOTIVE"
  | "JEWELRY"
  | "HOME_APPLIANCES"
  | "PET_SUPPLIES"
  | "OFFICE_SUPPLIES"
  | "GARDEN"
  | "MUSIC";

type ExpiredTime = "3일 후" | "2일 후" | "24시간 후" | "12시간 후" | "6시간 후";

export interface IProductForm {
  title?: string;
  content?: string;
  minimumPrice?: string;
  category?: { value: Category; label: Category } | Category;
  latitude?: number;
  longitude?: number;
  address?: string;
  location?: string;
  expiredTime?:
    | { value: ExpiredTime; label: ExpiredTime }
    | ExpiredTime
    | string;
  imgUrls?: ImageInfo[];
}

export interface IImgUrl {
  url: string;
}

export interface ILocation {
  coord?: ICoord;
  address?: string;
}

export interface IPost {
  /** 게시글 ID */
  productId: number;
  /** 게시글 썸네일 이미지 */
  imgUrl: string;
  /** 게시글 제목 */
  title: string;
  /** 게시글 가격 */
  price: number;
  /** 게시글 등록된 주소 */
  address: string;
  /** 게시글 등록된 시간 */
  uploadTime: string;
  /** 게시글 아이템 클릭 이벤트 */
  onClick: () => void;
  /** 남은 시간 */
  expiredTime: string;
  /** 판매자 : 최고 입찰가, 구매자 : 나의 입찰가  */
  maxPrice: number;
  /** 판매중 : 끌어올리기, 완료 : 받은 후기 보기  */
  onTextButtonClick: () => void;
  /** 아이콘 버튼 클릭 이벤트 */
  onIconButtonClick: () => void;
  /** 판매자 여부 */
  isSeller?: boolean;
  /** 게시글 상태 */
  status?: "BIDDING" | "IN_PROGRESS" | "COMPLETED";
}

export type PostItemType =
  | "completed"
  | "default"
  | "chat"
  | "selling"
  | "buying";
