import prettier from "eslint-config-prettier";
import vue from "eslint-plugin-vue";

import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";

export default defineConfigWithVueTs(
  vue.configs["flat/essential"],
  vueTsConfigs.recommended,
  {
    ignores: ["node_modules", "public"],
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-this-alias": "off",
    },
  },
  {
    settings: {
      "import/core-modules": ["vue-router/auto-routes"],
    },
    languageOptions: {
      globals: {
        definePage: "readonly",
      },
    },
  },
  prettier
);
