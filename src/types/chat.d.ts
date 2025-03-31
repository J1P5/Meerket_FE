import { IResponse } from "types";

export interface IChat {
  /** 채팅 메시지 내용 */
  msg: string;
  /** 해당 채팅이 그룹에서 마지막 메시지인지 구분,(시간 표시 유무 구분)*/
  isLastMsg: boolean;
  /** 해당 채팅을 읽었는지 구분 */
  isRead: boolean;
  /** 해당 메시지 보낸 시간 */
  createdAt: string;
}

/** 백엔드 타입 */
export interface IChatRoom {
  userId: string;
  roomId: string;
  productId: number;

  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;

  productImage: string | undefined;
  otherNickname: string;
  otherProfileImage: string | undefined;
}

export interface IChatRoomResponse extends IResponse {
  result: IChatRoom[];
}

export interface IChatRoomType {
  type: chatRoomTabMapValue;
}

export type chatRoomTabMapKey = "전체" | "판매" | "구매" | "안 읽은 채팅방";
export type chatRoomTabMapValue = "ALL" | "SALE" | "PURCHASE";
