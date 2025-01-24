/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import { Loading } from "components/molecules/Loading";
import { IChatItemProps } from "components/organisms/ChatItem";
import { ChatListTemplate } from "components/templates/ChatListTemplate";
import { CHAT_LIST_LOADING_MESSAGE } from "constants/Chat";
import { chatRoomTabMapKey } from "types";
import { useHeaderStore } from "stores";
import { useFetchChatItems } from "hooks";

const ChatListPage = () => {
  const { setTitle } = useHeaderStore();
  //헤더 세팅
  useEffect(() => {
    setTitle("채팅"); // 동네 이름 받아서 처리 필요
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentTab, setCurrentTab] = useState<chatRoomTabMapKey>("전체");
  const { chatItems, isLoading } = useFetchChatItems(currentTab);

  /** 현재 currentTab이 "안 읽은 채팅방인 경우 안 읽은 메시지가 존재하는 채팅방들만 필터링 하는 함수
   * @param chatItems : IChatItemProps[]
   * @returns IChatItemProps[]
   */
  const filterChatItems = (chatItems: IChatItemProps[]): IChatItemProps[] => {
    return currentTab === "안 읽은 채팅방"
      ? chatItems.filter(chatItem => chatItem.lastMsgCnt > 0)
      : chatItems;
  };

  //TODO : O(2N) 번 연산이 매번 들어가는 부분이기 때문에 이후 성능 개선 필요
  const allChatItems = filterChatItems(chatItems);

  const onHandleTab = (tab: chatRoomTabMapKey) => {
    setCurrentTab(tab);
  };

  if (!chatItems && isLoading) {
    return <Loading message={CHAT_LIST_LOADING_MESSAGE} />;
  }

  return (
    <ChatListTemplate
      allChatItems={allChatItems}
      sellingChatItems={allChatItems}
      buyingChatItems={allChatItems}
      unreadChatItems={allChatItems}
      onClick={onHandleTab}
    />
  );
};

export default ChatListPage;
