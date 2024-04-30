// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	{
		files: ["pages/*.vue", "components/*.vue", "*.vue"],
		rules: {
			semi: "error",
			"vue/multi-word-component-names": "off"
		},
		linterOptions: {
			reportUnusedDisableDirectives: "error"
		}
	}
)
