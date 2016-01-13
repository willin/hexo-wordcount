var numeral = require('numeral');

var counter = function (content) {
  content = content.replace(/(<!--[^-]*-->)/g, ''); //去注释
  content = content.replace(/\s\s/g, ''); //去多余空白字符
  content = content.replace(/\W\s/g, ''); //符号后空白符
  var cn = content.match(/[\u4E00-\u9FA5]/g) || [];
  var en = content.match(/(\W*\w*\W)/g) || [];
  return cn.length + en.length;
};

hexo.extend.helper.register('wordcount', function (content) {
  'use strict';
  return numeral(
    counter(content)
  ).format('0,0');
});

hexo.extend.helper.register('totalcount', function (site) {
  'use strict';
  var count = 0;
  var fs = require('fs');
  site.posts.forEach(function (post) {
    var content = post.content;
    count += counter(content);
  });
  if (count < 1024) {
    return numeral(count).format('0,0');
  }
  return numeral(count).format('0,0.0a');
});
