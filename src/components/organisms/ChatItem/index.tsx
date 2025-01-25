//import { OverlappingImage } from "components/molecules";
import { ChatItemWrapper } from "./styled";
import { Badge, Image, Text } from "components/atoms";
import { getRelativeTime } from "utils";

export interface IChatItemProps {
  profileImgUrl: string;
  itemImgUrl: string;
  name: string;
  lastMsg: string;
  lastMsgTime: string;
  lastMsgCnt: number;
  onClick: () => void;
}

export const ChatItem = ({
  //profileImgUrl,
  itemImgUrl,
  name,
  lastMsg,
  lastMsgTime,
  lastMsgCnt,
  onClick,
}: IChatItemProps) => {
  const lastMsgTimeStr = getRelativeTime(lastMsgTime);

  return (
    <ChatItemWrapper onClick={onClick}>
      <div className="img-msg-con">
        <Image url={itemImgUrl} type="square" />
        {/* <OverlappingImage
          frontImgUrl={itemImgUrl}
          backImgUrl={profileImgUrl}
          type="square"
        ></OverlappingImage> */}
        <div className="msg-con">
          <Text variant="title_bold">
            {name}
          </Text>
          <Text variant="explan_regular">
            {lastMsg}
          </Text>
        </div>
      </div>
      <div className="time-cnt-con">
        <div className="time">
          <Text variant="tag_regular">
            {lastMsgTimeStr}
          </Text>
        </div>
        {lastMsgCnt > 0 && <Badge type="chat" text={lastMsgCnt.toString()} />}
      </div>
    </ChatItemWrapper>
  );
};
