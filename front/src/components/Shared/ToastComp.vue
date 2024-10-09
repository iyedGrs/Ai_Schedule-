<template>
    <div
      :class="['toast', type]"
      @click="close"
      role="alert"
      :aria-live="ariaLive"
      :aria-atomic="true"
    >
      <div class="toast-content">
        <slot></slot>
      </div>
      <button class="toast-close" @click="close" aria-label="Close">&times;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'toast-comp',
    props: {
      id: {
        type: Number,
        required: true
      },
      type: {
        type: String,
        default: 'info' // Types: 'info', 'success', 'warning', 'error'
      },
      duration: {
        type: Number,
        default: 3000 // Duration in milliseconds
      },
      ariaLive: {
        type: String,
        default: 'polite' // 'polite' or 'assertive'
      }
    },
    emits: ['close'],
    mounted() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    beforeUnmount() {
      clearTimeout(this.timer);
    },
    methods: {
      close() {
        this.$emit('close', this.id);
      }
    }
  };
  </script>
  
  <style scoped>
  .toast {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin-bottom: 1rem;
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .toast.info {
    border-left: 5px solid #3498db;
  }
  
  .toast.success {
    border-left: 5px solid #2ecc71;
  }
  
  .toast.warning {
    border-left: 5px solid #f1c40f;
  }
  
  .toast.error {
    border-left: 5px solid #e74c3c;
  }
  
  .toast-content {
    flex: 1;
  }
  
  .toast-close {
    background: transparent;
    border: none;
    font-size: 1.2rem;
    line-height: 1;
    cursor: pointer;
  }
  </style>
  