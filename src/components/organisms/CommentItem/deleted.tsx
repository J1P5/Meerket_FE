import { CommentItemWrapper } from "./styled";
import { Text } from "components/atoms";

export const DeletedComment = () => {
  return (
    <CommentItemWrapper className="deleted">
      <Text variant="desc_regular">삭제된 댓글입니다.</Text>
    </CommentItemWrapper>
  );
};
