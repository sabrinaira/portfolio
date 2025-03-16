import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `defineConfig` is the main function where Vite configuration is defined.
export default defineConfig({
  plugins: [react()],
  // base: './',
  // The `resolve` object allows you to configure how Vite resolves modules.
  resolve: {
    // The `alias` property lets you map custom path aliases (like `@`) to real file paths.
    // This step allows you to use shorthand like '@' instead of writing relative paths.
    alias: {
      // The `@` symbol is commonly used as a shortcut for the `src` directory.
      // For example, instead of using long relative imports like '../../../components/ui/provider',
      // you can simply use '@/components/ui/provider' for cleaner and shorter imports.
      '@': '/src',
    },
  },
});
