import { chatRoomTabMapKey, chatRoomTabMapValue } from "types";

export const chatRoomTabMap: Map<
  chatRoomTabMapKey,
  chatRoomTabMapValue
> = new Map<chatRoomTabMapKey, chatRoomTabMapValue>();
chatRoomTabMap.set("전체", "ALL");
chatRoomTabMap.set("판매", "SALE");
chatRoomTabMap.set("구매", "PURCHASE");
chatRoomTabMap.set("안 읽은 채팅방", "ALL");

export const CHAT_URL: string = `/chats`;
export const CHAT_LIST_LOADING_MESSAGE: string = "채팅 방 목록\n불러오는 중...";
