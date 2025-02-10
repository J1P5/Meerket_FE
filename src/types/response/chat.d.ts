import { IResponse } from "types";

export interface IChatMsg {
  /** 채팅 ObjectId 문자열 / 추후 안읽은 메시지 개수 관리를 위해 */
  id: string;
  senderId: number;
  content: string;
  createdAt: string;
}

export interface IChatRoomPageResponse extends IResponse {
  result: {
    chatRoomBasicInfo: IChatRoomBasic;
    messages: IChatMsg[];
  };
}

export interface IChatRoomNewMsgResponse extends IResponse {
  result: IChatMsg[];
}
