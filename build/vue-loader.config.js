// const docsLoader = require.resolve('./doc-loader');

module.exports = (isDev) => {
	console.log('当前的环境为Develop: ' + isDev);
	return {
		preserveWhitepace: true, // template 内空格删除（开启）
		extractCSS: !isDev, // vue 内样式提取（开启）
		// 可以进行css命名混淆 可见header.vue
		cssModules: {
			localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hasj:base:5]',
			// a-b = aB
			camelCase: true
		},
		// hotReload: false // 根据环境变量
		// loaders: {
		// 	'docs': docsLoader // 自定义loader
		// }
	}
}