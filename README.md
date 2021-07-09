# 说明
## 使用安装
```
!function (f, b, e, v, n, t, s) {
    if (f.csq) return;
    n = f.csq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._csq) f._csq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '1.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script', '//www.example.com/js/csevents.js');
```

## 引入JS库后立即执行：
```
csq('init', 'xxxxx');
csq('track', 'PageView');
```

## 例，AddToCart 的使用
```
try{
  var params={{remarketing params}};
  if(params){
    csq('track', 'AddToCart', {
      content_name: 'Shopping Cart',
      content_ids: params.ecomm_prodid,
      content_type: 'product',
      value: params.ecomm_totalvalue,
      currency: 'AUD'
    });
  }
}catch(e){
  console.log(e);
}
```

### 部分参数查看 facebook-pixel.html 文件.