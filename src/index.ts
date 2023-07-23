import { Options } from "prettier";

/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file.
 * These are explicitly defined here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const nonOverriddenDefaults: Options = {
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 100,
  useTabs: false
};

const config: Options = {
  ...nonOverriddenDefaults,
  arrowParens: "avoid",
  singleQuote: false,
  trailingComma: "none",
  bracketSameLine: true,
  plugins: ["prettier-plugin-organize-imports"]
};

export = config;
