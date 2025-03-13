import { Image, Text } from 'components/atoms';
import { DEFAULT_IMG_PATH } from 'constants/imgPath';

import { TextWithImageWrapper } from './styled';

export interface ITextWithImageProps {
  /** title */
  title: string;
  /** description */
  desc: string;
  /** 이미지 url  */
  imgUrl?: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
}

// TODO: Text variant 필요
export const TextWithImage = ({
  title,
  desc,
  imgUrl = DEFAULT_IMG_PATH,
  onClick,
}: ITextWithImageProps) => {
  return (
    <TextWithImageWrapper
      title={title}
      desc={desc}
      imgUrl={imgUrl}
      onClick={onClick}
    >
      <div className="text-con">
        <Text variant="title_bold">{title}</Text>
        <div className="text-desc">
          <Text variant="desc_regular">{desc}</Text>
        </div>
      </div>
      <Image type="square" url={imgUrl} />
    </TextWithImageWrapper>
  );
};
