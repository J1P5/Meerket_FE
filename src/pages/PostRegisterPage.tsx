import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormDataStore, useTopBarStore } from "stores";
import { registerProduct, editProduct } from "services/apis/product";
import { useFetchProduct } from "hooks";
import { ToastInstance as Toast } from "components/atoms/Toast";
import { PostRegisterTemplate } from "components/templates";
import { getExpiredDate, formatPrice } from "utils";
import type { Category, ExpiredTime, IProductForm, IProductPost } from "types";

/**
 * 임시 헬퍼 함수
 */
const transformFormData = (formData: IProductForm, isNewProduct: boolean) => {
  const transformed = { ...formData };

  if (
    transformed.category &&
    typeof transformed.category === "object" &&
    "value" in transformed.category
  ) {
    transformed.category = transformed.category.value;
  }

  if (
    isNewProduct &&
    transformed.expiredTime &&
    typeof transformed.expiredTime === "object" &&
    "value" in transformed.expiredTime
  ) {
    transformed.expiredTime = transformed.expiredTime.value;
  }

  return transformed;
};

const createProductData = (
  formData: IProductForm,
  coordinates: { lat: number; lng: number; address: string }
): IProductPost => ({
  title: formData.title!,
  content: formData.content!,
  minimumPrice: Number(formData.minimumPrice!.replace(/,/g, "")),
  category: formData.category!,
  latitude: coordinates.lat,
  longitude: coordinates.lng,
  address: coordinates.address,
  location: formData.location!,
  images: formData.imgUrls!.map((img) => img.file!),
  expiredTime: getExpiredDate(formData.expiredTime as string),
});


export const PostRegisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setTitle } = useTopBarStore();

  const queryParams = new URLSearchParams(location.search);
  const PRODUCT_ID = queryParams.get("productId") || "";
  const formData = useFormDataStore((state) => state.formData);
  const productId = useFormDataStore((state) => state.productId);
  const { latitude: lat, longitude: lng, address } = formData;
  const { setProductId, setFormData, clear } = useFormDataStore();
  const { product } = useFetchProduct(PRODUCT_ID && !productId ? PRODUCT_ID : "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    if (product && PRODUCT_ID && !productId) {
      setProductId(PRODUCT_ID);
      setFormData({
        title: product.title,
        content: product.content,
        minimumPrice: formatPrice(product.minimumPrice),
        category: product.category as Category,
        latitude: product.productLocation.latitube,
        longitude: product.productLocation.longitude,
        address: product.productLocation.address,
        location: product.productLocation.location,
        imgUrls: product.images.map((img) => ({ url: img, file: null })),
        expiredTime: product.expiredTime,
      });
    }
  }, [product, PRODUCT_ID, productId, setFormData, setProductId]);

  const handleSubmit = useCallback(
    async (formData: IProductForm) => {
      try {
        const transformedData = transformFormData(formData, !PRODUCT_ID);

        const productData = createProductData(transformedData, {
          lat: lat!,
          lng: lng!,
          address: address!,
        });

        if (!PRODUCT_ID) {
          await registerProduct(productData);
          navigate(`/`);
          Toast.show("물품이 등록되었어요!");
        } else {
          const updateData = { ...productData };
          delete updateData.images;
          delete updateData.expiredTime;

          await editProduct(PRODUCT_ID, updateData);
          navigate(`/product/${PRODUCT_ID}`);
          Toast.show("물품이 수정되었어요!");
        }
        clear();
      } catch (error) {
        Toast.show("처리 중 오류가 발생했습니다. 다시 시도해 주세요.");
        console.error("Product submission failed:", error);
      }
    },
    [lat, lng, address, clear, navigate, PRODUCT_ID]
  );

  const handleClick = useCallback(
    (formData: IProductForm) => {
      if (formData.category && typeof formData.category === "object") {
        formData.category = formData.category.value as Category;
      }
      if (formData.expiredTime && typeof formData.expiredTime === "object") {
        formData.expiredTime = formData.expiredTime.value as ExpiredTime;
      }

      setFormData(formData);
      navigate("/location-selection");
    },
    [navigate, setFormData]
  );

  useEffect(() => {
    setTitle("내 물건 판매하기");
  }, [setTitle]);

  return (
    <PostRegisterTemplate
      productId={PRODUCT_ID}
      postForm={formData}
      onClick={handleClick}
      onSubmit={handleSubmit}
    />
  );
};

export default PostRegisterPage;

/**
 * 이미지 업로드 시 응답 받는 타입 (고도화에서 사용)
 */
// interface IImageResponse extends IResponse {
//   result: {
//     url: string;
//   };
// }

/**
 * 파일을 업로드하고 URL을 반환하는 함수 (고도화에서 사용)
 * @param file
 * @returns
 */
// const uploadImage = async (file: File): Promise<string> => {
//   const imgFormData = new FormData();
//   imgFormData.append("imageFile", file);

//   try {
//     const response = await http.post<IImageResponse, FormData>(
//       "/products/image",
//       imgFormData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       }
//     );
//     if (response.success && response.code === "COMMON200") {
//       return response.result.url;
//     }
//   } catch (error) {
//     console.error("Failed to fetch messages:", error);
//   }
//   return "";
// };

/**
 * 이미지 업로드를 처리하는 함수 (수정할 때 사용 - 현재 이미지 수정 불가능)
 * @param imgInfos
 * @returns
 */
// const handleImageUpload = async (
//   imgInfos: IImageInfo[]
// ): Promise<IImgUrl[]> => {
//   const uploadPromises = imgInfos.map(async (imgInfo) => {
//     if (imgInfo.url) {
//       return { url: imgInfo.url } as IImgUrl;
//     } else if (imgInfo.file) {
//       const url = await uploadImage(imgInfo.file);
//       return { url } as IImgUrl;
//     } else {
//       throw new Error("이미지 정보가 유효하지 않습니다.");
//     }
//   });

//   const images = await Promise.all(uploadPromises);
//   return images;
// };

// // 기존 데이터를 가져오는 함수
// // TODO: 상세 조회는 내용이 너무 많아서 타입 따로 파야함
// const fetchProductData = async (productId: number): Promise<INewPostForm> => {
//   try {
//     const response = await http.get<IProductsResponse, INewPostForm>(
//       `/products/${productId}`
//     );
//     return response.result;
//   } catch (error) {
//     console.error("Failed to fetch product data:", error);
//     throw error;
//   }
// };
