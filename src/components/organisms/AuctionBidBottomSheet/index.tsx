import React, { useMemo } from "react";
import { Input, Text, TextButton } from "components/atoms";
import type { IModalBottomSheetProps } from "components/molecules/ModalBottomSheet";
import { formatPrice } from "utils";

import { AuctionBidBottomSheetWrapper } from "./styled";

interface IAuctionBidBottomSheetProps extends IModalBottomSheetProps {
  /** 입력할 입찰가 */
  price: string;
  /** 입찰가 설정 함수 */
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  /** 이전 입찰가 */
  beforePrice?: number;
  /** 최소 입찰가 */
  minPrice: number;
  /** 입찰하기 버튼 클릭 시 실행될 함수 */
  onBid: () => void;
}

export const AuctionBidBottomSheet = ({
  open,
  onClose,
  price,
  setPrice,
  beforePrice,
  minPrice,
  onBid,
}: IAuctionBidBottomSheetProps) => {
  const placeholder = beforePrice
    ? `내 입찰가 ${formatPrice(beforePrice)}`
    : `최소 ${formatPrice(minPrice)}`;
  const isInvalidPrice = useMemo(
    () => parseInt(price.replace(/,/g, "")) > 2000000000,
    [price],
  );

  return (
    <AuctionBidBottomSheetWrapper open={open} onClose={onClose}>
      <Text variant="title_bold">희망 입찰가</Text>
      <Input
        type="number"
        value={price}
        setValue={setPrice}
        placeholder={placeholder}
      />
      {isInvalidPrice && (
        <div style={{ color: "#FF2E4D" }}>
          <Text variant="explan_regular">20억 이하로 입력해주세요.</Text>
        </div>
      )}
      <Text variant="desc_regular">{`최소 입찰가 ${formatPrice(minPrice)}`}</Text>
      <TextButton text="입찰하기" onClick={onBid} disabled={isInvalidPrice} />
    </AuctionBidBottomSheetWrapper>
  );
};
