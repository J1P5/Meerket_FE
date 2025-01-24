import { http } from "services/api";
import { IChatRoomResponse, IChatRoomType, chatRoomTabMapValue } from "types";
import { CHAT_URL } from "constants/Chat";

/** userId 와 현재 category 정보를 parameter 로 하여 해당 유저의 채팅방 목록을 가져오는 함수
   * @param userId : string
   * @param type : "ALL" | "SALE" | "PURCHASE"
   * @returns void
   */
export const getMessages = async (currentTabValue: chatRoomTabMapValue) => {
  return http.get<IChatRoomResponse, IChatRoomType>(CHAT_URL, {
    type: currentTabValue,
  });
};
