#### 1.实现一个new操作符
- 创建了一个空对象
- 继承了该函数的原型




#### 2.实现call
- call改变了this 的指向
- 函数执行了

```javascript
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}
bar.call(foo); // 1
```

