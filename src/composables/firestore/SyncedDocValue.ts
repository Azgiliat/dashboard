import {
  type DocumentReference,
  type Unsubscribe,
  getDoc,
  onSnapshot,
} from 'firebase/firestore';
import type { Ref } from 'vue';
import { onScopeDispose } from 'vue';
import { ref } from 'vue';

import { useSharedComposable } from '@/composables/SharedComposable';

export function useSyncedDocValue<T>(doc: DocumentReference<T> | null) {
  let docState = doc;
  let unsub: Unsubscribe | null = null;
  const isInitialLoading = ref(true);
  const docValue: Ref<T | null> = ref(null);
  const error: Ref<Error | null> = ref(null);

  async function updateDocValue() {
    if (docState === null) {
      reset();
      return;
    }

    const docSnapshot = await getDoc(docState);

    if (docSnapshot.exists()) {
      docValue.value = docSnapshot.data();
      error.value = null;
    } else {
      docValue.value = null;
      error.value = new Error('failed to read user');
    }
  }

  function reset() {
    unsub?.();
    docValue.value = null;
    error.value = null;
  }

  function stop() {
    unsub?.();
  }

  function subscribeToSnapshot() {
    if (docState === null) {
      reset();
      return;
    }

    unsub = onSnapshot(
      docState,
      (snapshot) => {
        if (snapshot.exists()) {
          docValue.value = snapshot.data();
          error.value = null;
        } else {
          docValue.value = null;
          error.value = new Error('failed to read user');
        }

        if (isInitialLoading.value) {
          isInitialLoading.value = false;
        }
      },
      () => {
        error.value = new Error('failed to read user');
        if (isInitialLoading.value) {
          isInitialLoading.value = false;
        }
      },
    );
  }

  function init(document = doc) {
    if (document === null) {
      reset();
      return;
    }

    isInitialLoading.value = true;
    setDoc(document);
    subscribeToSnapshot();
  }

  function setDoc(doc: DocumentReference<T>) {
    docState = doc;
  }

  onScopeDispose(reset);
  init(doc);

  return {
    isInitialLoading,
    updateDocValue,
    docValue,
    error,
    reset,
    stop,
    init,
  };
}

export const useSharedDocValue = useSharedComposable(useSyncedDocValue);
