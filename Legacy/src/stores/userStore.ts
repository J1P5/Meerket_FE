import { create, type StoreApi, type UseBoundStore } from "zustand";
import { persist } from "zustand/middleware";
import { produce } from "immer";
import type { IUser } from "types";
import { LOGO_PATH } from "constants/imgPath";

const localStorageKey = "meerket--login" as const;

interface UserState {
  user: IUser | null; // @rushstack/ no-new-null
  setUser: (user: IUser | null) => void;
}

export const useUserStore: UseBoundStore<StoreApi<UserState>> = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => {
        set(
          produce((state: UserState) => {
            if (state.user) {
              Object.assign(state.user, user);
            } else {
              if (user && !user.profile) {
                user.profile = LOGO_PATH;
              }
              state.user = user;
            }
          })
        );
      },
    }),
    {
      name: localStorageKey,
    }
  )
);
