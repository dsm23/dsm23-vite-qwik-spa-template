/**
 *  @type {import("prettier").Options}
 */
const config = {
  plugins: [
    "prettier-plugin-css-order",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  cssDeclarationSorterOrder: "smacss",
  importOrder: [
    "^@builder.io$",
    "<TYPES>^(@builder.io)",
    "^vite$",
    "<TYPES>^(vite)",
    "^clsx$",
    "<TYPES>^(clsx)",
    "^@*vite",
    "<TYPES>^(@*vite)",
    "<BUILTIN_MODULES>",
    "<TYPES>^(node:)",
    "<THIRD_PARTY_MODULES>",
    "<TYPES>^([@a-z])",
    "^~/(.*)$",
    "<TYPES>^~/(.*)",
    "^[.]",
    "<TYPES>",
    "",
    "^(?!.*[.]css$)[./].*$",
    ".css$",
  ],
  // renovate: datasource=npm depName=typescript
  importOrderTypeScriptVersion: "5.9.3",
  tailwindFunctions: ["clsx", "cn", "cva", "cx"],
};

export default config;
