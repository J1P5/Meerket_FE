import { http } from "services/api";
import type {
  IProductDetailResponse,
  IProductPost,
  IProductResponse,
} from "types";

/**
 * 제품 상세 데이터를 가져오는 함수
 * @param productId 아이디
 */
export const getProduct = async (productId: string) => {
  return http.get<IProductDetailResponse>(`/products/${productId}`);
};

/**
 * 조기 마감
 */
export const earlyClose = async (productId: string) => {
  return http.post(`/products/${productId}/early-close`);
};

/**
 * 중고 제품 게시글 등록하기
 * @param newProduct 등록할 제품 데이터
 * @returns
 */
export const registerProduct = async (
  newProduct: IProductPost
): Promise<IProductResponse> => {
  const productFormData = new FormData();
  const jsonRequestData = JSON.stringify({
    title: newProduct.title,
    content: newProduct.content,
    minimumPrice: newProduct.minimumPrice,
    category: newProduct.category,
    latitude: newProduct.latitude,
    longitude: newProduct.longitude,
    address: newProduct.address,
    location: newProduct.location,
    expiredTime: newProduct.expiredTime,
  });

  const request = new Blob([jsonRequestData], { type: "application/json" });
  productFormData.append("request", request);
  newProduct.images!.forEach((img) => {
    productFormData.append("images", img);
  });

  return http.post<IProductResponse, typeof productFormData>(
    "/products",
    productFormData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
};

/**
 * 중고 제품 게시글 수정하기
 * @param productId 수정할 제품 id
 * @param updatedProduct 수정할 제품 데이터
 * @returns
 */
export const editProduct = async (
  productId: string,
  updatedProduct: Omit<IProductPost, "images" | "expiredTime">
) => {
  return http.patch<IProductResponse, typeof updatedProduct>(
    `/products/${productId}`,
    updatedProduct
  );
};

/**
 * 중고 제품 게시글 삭제하기
 * @param productId 삭제할 제품 id
 */
export const deleteProduct = async (productId: string) => {
  return http.delete<IProductResponse>(`/products/${productId}`);
};

/**
 * 중고 제품 게시글 거래 완료하기기
 * @param productId 거래 완료 제품 id
 */
export const completeProduct = async (productId: string) => {
  return http.patch<IProductResponse>(`/products/${productId}/complete`);
};
