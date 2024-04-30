// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	{
		files: ["pages/*.vue", "components/*.vue", "*.vue"],
		rules: {
			semi: "error"
		},
		linterOptions: {
			reportUnusedDisableDirectives: "error"
		}
	}
)
