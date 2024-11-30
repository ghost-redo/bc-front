import panda from "@pandacss/eslint-plugin";
import pluginNext from "@next/eslint-plugin-next";

export default [
  {
    ignores: [".next/**"],
  },
  {
    plugins: {
      "@pandacss": panda,
      "@next/next": fixupPluginRules(pluginNext),
    },
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      ...panda.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
    },
  },
];
