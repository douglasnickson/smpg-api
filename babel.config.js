module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				}
			}
		],
		'@babel/preset-typescript'
	],
	plugins: [
		['module-resolver', {
			alias: {
				'@config': './src/config',
				'@models': './src/models/',
				'@controllers': './src/controllers',
				'@views': './src/views/',
        '@entities': './src/entities',
        '@services': './src/services',
        '@useCases': './src/useCases',
			}
		}]
	],
	ignore: [
		'**/*.spec.ts'
	]
}
