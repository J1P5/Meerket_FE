import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerProduct, editProduct } from "services/apis/product";
import { ToastInstance as Toast } from "components/atoms/Toast";
import { IProductPost, IProductResponse } from "types";
import { queries } from "constants/queryKeys";

interface ProductMutationOptions {
  type: "register" | "edit";
  productId?: string;
  onSuccess?: () => void;
}

export const useProductMutation = (options: ProductMutationOptions) => {
  const { type, productId = "", onSuccess } = options;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSuccess = (redirectPath: string, message: string) => {
    Toast.show(message);
    // TODO: finally 실행 안되는 이슈 해결
    queryClient
      .invalidateQueries({ queryKey: queries.product.DEFAULT })
      .then(() => {
        navigate(redirectPath);
      })
      .catch(error => {
        console.error("Failed to invalidateQueries of homePosts: ", error);
        navigate(redirectPath);
      });
  };

  return useMutation<IProductResponse, Error, IProductPost>({
    mutationFn: (data: IProductPost) =>
      type === "register"
        ? registerProduct(data)
        : editProduct(productId, data),
    onSuccess: () => {
      if (type === "register") {
        handleSuccess("/", "물품이 등록되었어요!");
      } else {
        handleSuccess(`/product/${productId}`, "물품이 수정되었어요!");
      }
      if (onSuccess) onSuccess();
    },
    onError: (error: Error) => {
      Toast.show("처리 중 오류가 발생했습니다. 다시 시도해 주세요.");
      console.error(`제품 ${type === "register" ? "등록" : "수정"} 실패:`, error);
    },
  });
};
