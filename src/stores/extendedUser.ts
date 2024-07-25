import { defineStore } from 'pinia';
import { toRef } from 'vue';

import { useUserQuery } from '@/queries/users/user';
import { useLoginStore } from '@/stores/login';

export const useExtendedUserStore = defineStore('extendedUser', () => {
  const loginsStore = useLoginStore();
  const { docValue: extendedUser } = useUserQuery(
    toRef(() => loginsStore.user?.uid || null),
  );

  const userModules = toRef(() => extendedUser.value?.modules || []);

  return {
    extendedUser,
    userModules,
  };
});
