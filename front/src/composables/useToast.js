import { reactive } from 'vue';

const state = reactive({
  toasts: []
});

let id = 0;

export function useToast() {
  const addToast = ({ message, type = 'info', duration = 3000, ariaLive = 'polite' }) => {
    state.toasts.push({
      id: id++,
      message,
      type,
      duration,
      ariaLive
    });
  };

  const removeToast = (id) => {
    const index = state.toasts.findIndex(toast => toast.id === id);
    if (index !== -1) {
      state.toasts.splice(index, 1);
    }
  };

  return {
    toasts: state.toasts,
    addToast,
    removeToast
  };
}
