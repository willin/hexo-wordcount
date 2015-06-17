var numeral = require('numeral');

hexo.extend.helper.register('wordcount', function (content) {
	'use strict';
	content = content.replace(/(<!--[^-]*-->)/g, '');//去注释
	content = content.replace(/\s\s/g, '');//去多余空白字符
	content = content.replace(/\W\s/g, '');//符号后空白符
	return numeral(
		content.match(/[\u4E00-\u9FA5]/g).length + //中文
		content.match(/(\W*\w*\W)/g).length  //英文
	).format('0,0');
});

hexo.extend.helper.register('totalcount', function (site) {
	'use strict';
	var count = 0;
	var fs = require('fs');
	site.posts.forEach(function (post) {
		var content = post.content;
		content = content.replace(/(<!--[^-]*-->)/g, '');//去注释
		content = content.replace(/\s\s/g, '');//去多余空白字符
		content = content.replace(/\W\s/g, '');//符号后空白符
		count += content.match(/[\u4E00-\u9FA5]/g).length + //中文
			content.match(/(\W*\w*\W)/g).length;  //英文
	});
	return numeral(count).format('0,0.0a');
});
