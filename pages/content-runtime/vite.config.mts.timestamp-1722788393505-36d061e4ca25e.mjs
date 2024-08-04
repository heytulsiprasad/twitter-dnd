// vite.config.mts
import { resolve } from "path";
import { withPageConfig } from "file:///Users/heytulsiprasad/Desktop/projects/twitter-dnd/packages/vite-config/index.mjs";
var __vite_injected_original_dirname = "/Users/heytulsiprasad/Desktop/projects/twitter-dnd/pages/content-runtime";
var rootDir = resolve(__vite_injected_original_dirname);
var libDir = resolve(rootDir, "lib");
var vite_config_default = withPageConfig({
  resolve: {
    alias: {
      "@lib": libDir
    }
  },
  publicDir: resolve(rootDir, "public"),
  build: {
    lib: {
      formats: ["iife"],
      entry: resolve(__vite_injected_original_dirname, "lib/index.ts"),
      name: "ContentRuntimeScript",
      fileName: "index"
    },
    outDir: resolve(rootDir, "..", "..", "dist", "content-runtime")
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2hleXR1bHNpcHJhc2FkL0Rlc2t0b3AvcHJvamVjdHMvdHdpdHRlci1kbmQvcGFnZXMvY29udGVudC1ydW50aW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaGV5dHVsc2lwcmFzYWQvRGVza3RvcC9wcm9qZWN0cy90d2l0dGVyLWRuZC9wYWdlcy9jb250ZW50LXJ1bnRpbWUvdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9oZXl0dWxzaXByYXNhZC9EZXNrdG9wL3Byb2plY3RzL3R3aXR0ZXItZG5kL3BhZ2VzL2NvbnRlbnQtcnVudGltZS92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB3aXRoUGFnZUNvbmZpZyB9IGZyb20gJ0BleHRlbnNpb24vdml0ZS1jb25maWcnO1xuXG5jb25zdCByb290RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUpO1xuY29uc3QgbGliRGlyID0gcmVzb2x2ZShyb290RGlyLCAnbGliJyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYWdlQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQGxpYic6IGxpYkRpcixcbiAgICB9LFxuICB9LFxuICBwdWJsaWNEaXI6IHJlc29sdmUocm9vdERpciwgJ3B1YmxpYycpLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZm9ybWF0czogWydpaWZlJ10sXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdsaWIvaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdDb250ZW50UnVudGltZVNjcmlwdCcsXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICB9LFxuICAgIG91dERpcjogcmVzb2x2ZShyb290RGlyLCAnLi4nLCAnLi4nLCAnZGlzdCcsICdjb250ZW50LXJ1bnRpbWUnKSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0WSxTQUFTLGVBQWU7QUFDcGEsU0FBUyxzQkFBc0I7QUFEL0IsSUFBTSxtQ0FBbUM7QUFHekMsSUFBTSxVQUFVLFFBQVEsZ0NBQVM7QUFDakMsSUFBTSxTQUFTLFFBQVEsU0FBUyxLQUFLO0FBRXJDLElBQU8sc0JBQVEsZUFBZTtBQUFBLEVBQzVCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVyxRQUFRLFNBQVMsUUFBUTtBQUFBLEVBQ3BDLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILFNBQVMsQ0FBQyxNQUFNO0FBQUEsTUFDaEIsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsUUFBUSxRQUFRLFNBQVMsTUFBTSxNQUFNLFFBQVEsaUJBQWlCO0FBQUEsRUFDaEU7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
