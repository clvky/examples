/**
 * default dev mode
 * fis3 release dev
 * fis3-postpackager-loader #可对页面散列文件进行合并
 * fis-spriter-csssprites #对css文件,以及html文件css片段进行csssprites处理
 * fis-optimizer-uglify-js 插件进行压缩，已内置
 * fis-optimizer-clean-css 插件进行压缩，已内置
 * fis-optimizer-png-compressor 插件进行压缩，已内置
 */
fis.match('::package', { //在package阶段所有文件分配某些属性
		postpackager: fis.plugin('loader'),	//文件合并
		spriter: fis.plugin('csssprites')	//启用 fis-spriter-csssprites 插件
	})
	.match('*.{js,css,png,jpg}', {//加md5
		useHash: true
	})
	.match('*.less', {	//合并图片
		useSprite: true
	})
	.match('*.less', {	//less转换为css
		// fis-parser-less 插件进行解析
		parser: fis.plugin('less'),
		// .less 文件后缀构建后被改成 .css 文件
		rExt: '.css'
	})
	.match('*.less', {	//将转换的less压缩
		// 压缩css
		optimizer: fis.plugin('clean-css')
	})
	.match('*.less', {	//将转换的less合并
		packTo: './css/task.css'
	})
	.match('*.js', {	//压缩js
		optimizer: fis.plugin('uglify-js')
	})
	.match('*.js', {	//合并js
		packTo: './js/task.js'
	})
	.match('*.png', {//压缩png图片
		optimizer: fis.plugin('png-compressor')
	})
	.match('*.{png,gif,jpg}', {//设置图片路径
	    release: '/images$0',
	    url : '/images$0'
	});


fis.media('debug').match('*.{js,less,png}', {
	useHash: false,
	useSprite: false,
	optimizer: null,
	packTo:null
})
