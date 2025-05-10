
export const PATHS = {
  icons: "./out/icons",
  variants: "./out/variants",
  tmpPathIcons: "./out/variants/.avalynndev-icons.tmp",
  pathIcons: "./out/variants/AvalynnDev-Icons.json",
  pathIconKey: (key: string): string =>
    `./out/variants/AvalynnDev-Icons-${key}.json`,
  src: "./src",
  srcPartials: "./src/icons/partials",
  srcSvgs: "./src/icons/svgs",
  srcIconsTheme: "./src/icons/icons-theme.mustache",
};
