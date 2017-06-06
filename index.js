var numeral = require('numeral');
var htmlToText = require('html-to-text');
var wordcount = require('wordcount');

var counter = function (content) {
  content  =  htmlToText.fromString(content,{
    wordwrap: false,
    ignoreImage: true,
    ignoreHref: true
  });
  var cn = content.match(/[\u4E00-\u9FA5]/g) || [];
  var en = content.replace(/[\u4E00-\u9FA5]/g,'');
  return [cn.length, wordcount(en)];
};

hexo.extend.helper.register('min2read', function (content, { cn = 300, en = 160 } = {}) {
  var len = counter(content);
  var readingTime = len[0] / cn + len[1] / en;
  return readingTime < 1 ? '1' : numeral(readingTime).format('0');
});

hexo.extend.helper.register('wordcount', function (content) {
  var len = counter(content);
  return numeral(
    len[0] + len[1]
  ).format('0,0');
});

hexo.extend.helper.register('totalcount', function (site, format) {
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
