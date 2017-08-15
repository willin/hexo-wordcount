/* global hexo */
const numeral = require('numeral');
const htmlToText = require('html-to-text');
const wordcount = require('wordcount');

function decode(string) {
  const output = [];
  let count = 0;
  const length = string.length;

  while (count < length) {
    const value = string.charCodeAt(count++);

    if (value >= 0xD800 && value <= 0xDBFF && count < length) {
      // It's a high surrogate, and there is a next character.

      const extra = string.charCodeAt(count++);

      if ((extra & 0xFC00) === 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.

        output.push(value);
        count--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
}

function counter(content) {
  content = htmlToText.fromString(content, {
    wordwrap: false,
    ignoreImage: true,
    ignoreHref: true
  });
  const cn = content.match(/[\u4E00-\u9FA5]/g) || [];
  const en = content.replace(/[\u4E00-\u9FA5]/g, '');
  return [cn.length, wordcount(en)];
}

hexo.extend.helper.register('min2read', (content, { cn = 300, en = 160 } = {}) => {
  const len = counter(content);
  const readingTime = len[0] / cn + len[1] / en;
  return readingTime < 1 ? '1' : numeral(readingTime).format('0');
});

hexo.extend.helper.register('wordcount', (content) => {
  const len = counter(content);
  return numeral(
    len[0] + len[1]
  ).format('0,0');
});

hexo.extend.helper.register('countwords', (content) => {
  content = htmlToText.fromString(content, {
    wordwrap: false,
    ignoreImage: true,
    ignoreHref: true
  });
  return (content.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || []).length;
});

hexo.extend.helper.register('countchars', (content) => {
  content = htmlToText.fromString(content, {
    wordwrap: false,
    ignoreImage: true,
    ignoreHref: true
  });
  return decode(content.replace(/\s/g, '')).length;
});

hexo.extend.helper.register('totalcount', (site, format) => {
  let count = 0;
  site.posts.forEach((post) => {
    const len = counter(post.content);
    count += len[0] + len[1];
  });
  if (count < 1024) {
    return numeral(count).format('0,0');
  }
  return numeral(count).format(format || '0,0.0a');
});
