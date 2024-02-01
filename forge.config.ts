import type { ForgeConfig } from "@electron-forge/shared-types";
import { MakerSquirrel } from "@electron-forge/maker-squirrel";
import { MakerZIP } from "@electron-forge/maker-zip";
import { MakerDeb } from "@electron-forge/maker-deb";
import { MakerRpm } from "@electron-forge/maker-rpm";
import { VitePlugin } from "@electron-forge/plugin-vite";

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({}),
    new MakerZIP({}, ["darwin"]),
    new MakerRpm({}),
    new MakerDeb({}),
  ],
  plugins: [
    new VitePlugin({
      build: [
        {
          entry: "src/main.tsx",
          config: "vite.main.config.ts",
        },
        {
          entry: "src/preload.tsx",
          config: "vite.preload.config.ts",
        },
      ],
      renderer: [
        {
          name: "scr/renderer.tsx",
          config: "vite.renderer.config.ts",
        },
      ],
    }),
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "usersuyashpandey",
          name: "electron",
          draft: true,
        },
      },
    },
  ],
};

export default config;
