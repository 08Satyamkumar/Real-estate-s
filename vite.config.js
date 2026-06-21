import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Real_Estate/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        corridor: resolve(__dirname, 'corridor.html'),
        listings: resolve(__dirname, 'listings.html'),
        calculator: resolve(__dirname, 'calculator.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogPost: resolve(__dirname, 'blog-post.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
