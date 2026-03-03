// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	// Your custom configs here
	{
		rules: {
			'@typescript-eslint/no-unused-vars': ['warn', { 
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_'
			}],
			'@typescript-eslint/no-explicit-any': 'warn',
			'vue/multi-word-component-names': 'off',
			'vue/no-unused-components': 'warn'
		}
	}
);
