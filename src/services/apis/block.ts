
import { http } from "services/api";
import type {
    IBlockResponse,
    IBlockUser,
    IGetBlockedUsersResponse,
    IUnblockUser
} from "types";


export const getBlockedUsers = async ({
    pageParam,
  }: {
    pageParam: number | undefined;
  }) => {
    return http.get<IGetBlockedUsersResponse, { cursor: number | undefined; size: number }>("/blocks",{
        cursor: pageParam, size: 10
      });
};
  
export const blockUser = async (blockUserId: number) => {
    return  http.post<IBlockResponse, IBlockUser>(`/blocks`, {
        blockUserId
      });
    
};
    
export const unblockUser = async (unblockId: number) => {
    return http.delete<IBlockResponse, IUnblockUser>(`/blocks`, {
        unblockId
      });

};