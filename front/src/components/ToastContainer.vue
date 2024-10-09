<template>
    <div :class="['toast-container', position]">
      <TransitionGroup name="toast" tag="div">
        <ToastComp
          v-for="toast in toasts"
          :key="toast.id"
          :id="toast.id"
          :type="toast.type"
          :duration="toast.duration"
          :ariaLive="toast.ariaLive"
          @close="removeToast"
        >
          <slot name="toast" :toast="toast">
            {{ toast.message }}
          </slot>
        </ToastComp>
      </TransitionGroup>
    </div>
  </template>
  
  <script>
  //import { ref } from 'vue';
  import ToastComp from './Shared/ToastComp.vue';
  import { useToast } from '@/composables/useToast';  
  export default {
    name: 'ToastContainer',
    components: { ToastComp },
    props: {
      position: {
        type: String,
        default: 'top-right' // Positions: 'top-right', 'top-left', 'bottom-right', 'bottom-left'
      }
    },
    setup() {
      const { toasts, removeToast } = useToast();
  
      return { toasts, removeToast };
    }
  };
  </script>
  
  <style scoped>
  .toast-container {
    position: fixed;
    z-index: 9999;
    padding: 1rem;
  }
  
  .top-right {
    top: 0;
    right: 0;
  }
  
  .top-left {
    top: 0;
    left: 0;
  }
  
  .bottom-right {
    bottom: 0;
    right: 0;
  }
  
  .bottom-left {
    bottom: 0;
    left: 0;
  }
  
  /* Transition styles */
  .toast-enter-active, .toast-leave-active {
    transition: all 0.3s ease;
  }
  .toast-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }
  .toast-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  .toast-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  </style>
  