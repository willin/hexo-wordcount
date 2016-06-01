var numeral = require('numeral');

var counter = function (content) {
  content = content.replace(/(<!--[^-]*-->)/g, ''); //去注释
  content = content.replace(/\s\s/g, ''); //去多余空白字符
  content = content.replace(/\W\s/g, ''); //符号后空白符
  var cn = content.match(/[\u4E00-\u9FA5]/g) || [];
  var en = content.match(/(\W*\w*\W)/g) || [];
  return [cn.length, en.length];
};

hexo.extend.helper.register('min2read', function (content) {
  'use strict';
  var len = counter(content);
  return numeral(
    len[0] / 300 + len[1] / 160
  ).format('0');
});

hexo.extend.helper.register('wordcount', function (content) {
  'use strict';
  var len = counter(content);
  return numeral(
    len[0] + len[1]
  ).format('0,0');
});

hexo.extend.helper.register('totalcount', function (site, format) {
  'use strict';
  var count = 0;
  site.posts.forEach(function (post) {
    var len = counter(post.content);
    count += len[0] + len[1];
  });
  if (count < 1024) {
    return numeral(count).format('0,0');
  }
  return numeral(count).format(format || '0,0.0a');
});
