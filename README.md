# Hexo-WordCount

[![npm](https://img.shields.io/npm/v/hexo-wordcount.svg?style=plastic)](https://npmjs.org/package/hexo-wordcount) [![npm](https://img.shields.io/npm/dm/hexo-wordcount.svg?style=plastic)](https://npmjs.org/package/hexo-wordcount)

## Installation

```
npm install hexo-wordcount --save
```


## Usage

### Swig

Post Count:

```swig
   <span class="post-count">{{ wordcount(post.content) }}</span>
```

Total Count:

```swig
   <span class="post-count">{{ totalcount(site) }}</span>
```

### Ejs

Post Count:

```ejs
   <span class="post-count"><%= wordcount(post.content) %></span>
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

Total Count:

```swig
   span.post-count= totalcount(site)
```


## Contributors

```
 project  : hexo-wordcount
 repo age : 7 months
 active   : 2 days
 commits  : 5
 files    : 5
 authors  :
     5  Willin Wang  100.0%
```

## LICENSE

MIT
