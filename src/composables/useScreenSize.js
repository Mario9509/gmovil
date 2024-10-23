// src/composables/useScreenSize.js
import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScreenSize() {
  const isMobile = ref(window.innerWidth <= 600);

  const updateScreenSize = () => {
    isMobile.value = window.innerWidth <= 600;
  };

  onMounted(() => window.addEventListener('resize', updateScreenSize));
  onBeforeUnmount(() => window.removeEventListener('resize', updateScreenSize));

  return { isMobile };
}
