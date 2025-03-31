import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { getMessages } from "services/apis";
import { queries } from "constants/queryKeys";
import { chatRoomTabMap } from "constants/Chat";
import { DEFAULT_IMG_PATH } from "constants/imgPath";

import { IChatItemProps } from "components/organisms/ChatItem";
import { IChatRoom, chatRoomTabMapKey } from "types";
import { encryptRoomId } from "utils/security";

export const useFetchChatItems = (type: chatRoomTabMapKey) => {
  const navigate = useNavigate();

  /** 백엔드 IChatRoom 타입을 프론트 IChatItemProps 으로 변환 함수
     * @param chatRoom : IChatRoom
     * @returns IChatItemProps
     */
  const createChatItem = useCallback(
    (chatRoom: IChatRoom): IChatItemProps => ({
      lastMsg: chatRoom.lastMessage,
      lastMsgTime: chatRoom.lastMessageAt,
      lastMsgCnt: chatRoom.unreadCount,
      profileImgUrl: chatRoom.otherProfileImage || DEFAULT_IMG_PATH,
      itemImgUrl: chatRoom.productImage || DEFAULT_IMG_PATH,
      name: chatRoom.otherNickname,
      onClick: () => {
        const encryptedRoomId = encryptRoomId(chatRoom.roomId);
        navigate(`/chatroom/${encryptedRoomId}/${chatRoom.userId}`);
      },
    }),
    [navigate]
  );

  const chatRoomValue = chatRoomTabMap.get(type) || "ALL";

  const { data, isLoading } = useQuery({
    queryKey: queries.chatItems[chatRoomValue],
    queryFn: () => getMessages(chatRoomValue),
    select: data => data.result.map(createChatItem),
    refetchInterval: 1000 * 10, // 10초에 한번 호출(현재 채팅방 목록을 갱신할 수 있는 백엔드적 방법X)
    staleTime: 0,
  });

  return { chatItems: data || [], isLoading };
};
