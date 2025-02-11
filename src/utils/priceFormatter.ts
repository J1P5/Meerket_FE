/**
 * 가격을 포맷하는 함수
 * @param price 가격
 * @returns 포맷된 가격 문자열
 */
export const formatPrice = (price: number): string => {
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
