# Hexo-WordCount

[![npm](https://img.shields.io/npm/v/hexo-wordcount.svg?style=plastic)](https://npmjs.org/package/hexo-wordcount) [![npm](https://img.shields.io/npm/dm/hexo-wordcount.svg?style=plastic)](https://npmjs.org/package/hexo-wordcount) [![npm](https://img.shields.io/npm/dt/hexo-wordcount.svg?style=plastic)](https://npmjs.org/package/hexo-wordcount)

## Installation

```bash
yarn add hexo-wordcount
# or
npm i --save hexo-wordcount
```

```bash
# Node 版本7.6.0之前,请安装 2.x 版本 (Node.js v7.6.0 and previous)
npm install hexo-wordcount@2 --save
```

## Usage

### 字数统计 WordCount


```js
wordcount(post.content)
```

### 阅读时长预计 Min2Read

```js
min2read(post.content)
```

设置阅读速度 Set Reading Speed:

```js
min2read(post.content, {cn: 300, en: 160})
// p.s. (v3.0.0 added)
```

### 总字数统计 TotalCount

```js
totalcount(site, '0,0.0a')
```

第二个参数为可选参数，表示字数显示的 `format`，文档参考：<http://numeraljs.com/>

## Demo

### Swig

Post Count:

```swig
   <span class="post-count">{{ wordcount(post.content) }}</span>
```

Post Minutes to Read:

```swig
   <span class="post-count">{{ min2read(post.content) }}</span>
```

Total Count:

```swig
   <span class="post-count">{{ totalcount(site, '0,0.0a') }}</span>
```

Second param `format` optional.

### Ejs

Post Count:

```ejs
   <span class="post-count"><%= wordcount(post.content) %></span>
```

Post Minutes to Read:

```ejs
   <span class="post-count"><%= min2read(post.content) %></span>
```

Total Count:

```ejs
   <span class="post-count"><%= totalcount(site) %></span>
```

### Jade

Post Count:

```jade
   span.post-count= wordcount(post.content)
```

Post Minutes to Read:

```jade
    span.post-count= min2read(post.content)
```


Total Count:

```swig
   span.post-count= totalcount(site)
```


## Contributors

```
 project  : hexo-wordcount
 repo age : 12 months
 active   : 5 days
 commits  : 8
 files    : 5
 authors  :
     8  Willin Wang  100.0%
```

## LICENSE

MIT

Alipay Donation(通过支付宝捐赠)：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
