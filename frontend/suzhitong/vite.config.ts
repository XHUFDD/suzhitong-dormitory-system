import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      // Force esbuild to use the wasm version
      // This might require a custom build of esbuild-wasm or a specific entry point
      // This is a highly experimental approach to bypass the dyld error
      // The actual path to esbuild-wasm binary might vary
      // For now, we'll try to point to the main.js of esbuild-wasm
      // If this doesn't work, a custom Vite plugin might be needed
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx'
      },
      // This part is tricky as Vite's esbuild integration is deep.
      // A direct path override is not officially supported for esbuild's binary.
      // This is more of a placeholder to indicate the intent.
      // The real solution might involve patching esbuild or Vite's internals,
      // or using a custom esbuild plugin that swaps the native binary with wasm.
      // For now, let's try to ensure esbuild-wasm is the one being used.
      // This might not directly solve the dyld error if Vite still tries to load the native esbuild.
      // The previous step of moving esbuild to optionalDependencies was the more standard approach.
      // This is a last resort attempt to influence esbuild's behavior within Vite.
      // If this fails, the only remaining option is to run in a compatible environment (e.g., Docker).
    }
  }
})