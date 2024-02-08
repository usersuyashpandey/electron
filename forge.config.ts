import type { ForgeConfig } from "@electron-forge/shared-types";
import { MakerSquirrel } from "@electron-forge/maker-squirrel";
import { MakerZIP } from "@electron-forge/maker-zip";
import { MakerDeb } from "@electron-forge/maker-deb";
import { MakerDMG } from "@electron-forge/maker-dmg";
import { MakerRpm } from "@electron-forge/maker-rpm";
import { VitePlugin } from "@electron-forge/plugin-vite";
import publisherGitHub from "@electron-forge/publisher-github";

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
    prune: true,
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
      name: "Xecta.App",
      exe: "Xecta-App.exe",
      setupExe: "Xecta-App-Setup.exe",
      remoteReleases: "https://github.com/usersuyashpandey/electron/releases",
    }),
    new MakerZIP({}, ["darwin"]),
    new MakerRpm({}),
    new MakerDeb({}),
    new MakerDMG({}),
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "usersuyashpandey",
          name: "electron",
        },
        draft: true,
        token: process.env.GH_TOKEN,
      },
    },
  ],
  plugins: [
    new VitePlugin({
      build: [
        {
          entry: "src/main.ts",
          config: "vite.main.config.ts",
        },
        {
          entry: "src/preload.ts",
          config: "vite.preload.config.ts",
        },
      ],
      renderer: [
        {
          name: "main_window",
          config: "vite.renderer.config.ts",
        },
      ],
    }),
  ],
};

export default config;
