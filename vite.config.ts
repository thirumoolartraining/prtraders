import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './', // Using relative path for better compatibility
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // Add any other aliases here
    },
  },
  define: {
    'process.env.NODE_ENV': `"${mode}"`,
    'import.meta.env.BASE_URL': JSON.stringify(mode === 'production' ? '/' : '/'),
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode !== 'production',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1] || '';
          
          // Handle different asset types
          if (['png', 'jpe?g', 'svg', 'gif', 'webp', 'avif'].includes(ext)) {
            return 'assets/images/[name].[hash][extname]';
          }
          if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
            return 'assets/fonts/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
}));
