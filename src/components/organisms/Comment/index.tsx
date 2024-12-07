import { Text } from "components/atoms";
import { InputWithButton } from "components/molecules";
import { CommentItem } from "components/organisms";
import type { IComment } from "types";
import {
  CommentListWrapper,
  CommentWrapper,
  CommentWriteBoxWrapper,
} from "./styled";
import { useUserStore } from "stores";
import { useCommentWriter } from "hooks";

interface ICommentProps {
  /** 작성된 Comment 목록 */
  comments: IComment[];
}

export const Comment = ({ comments }: ICommentProps) => {
  const { user } = useUserStore();
  const { comment, setComment, handleWriteButtonClick } = useCommentWriter();

  return (
    <CommentWrapper>
      <Text variant="title_bold" content="문의사항" />
      <CommentWriteBoxWrapper>
        <InputWithButton
          value={comment}
          setValue={setComment}
          placeholder="댓글을 입력해주세요."
          buttonText="작성"
          onButtonClick={() => handleWriteButtonClick(null)}
          variant="explan_bold"
        />
      </CommentWriteBoxWrapper>
      <CommentListWrapper>
        {comments.map(
          (
            {
              commentId,
              commentMemeberDto: { profileImage, nickname },
              createdAt,
              content,
              replies,
              // isUpdatable,
              // isSeller,
            },
            idx,
          ) => (
            <CommentItem
              key={`comment_${idx}_${commentId}`}
              commentId={commentId}
              createdAt={createdAt}
              nickname={nickname}
              content={content}
              imgUrl={profileImage}
              isMyComment={nickname === user?.nickname}
              replies={replies}
              parentId={null}
            />
          ),
        )}
      </CommentListWrapper>
    </CommentWrapper>
  );
};
