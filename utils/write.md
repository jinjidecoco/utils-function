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
<!-- 第一步模拟 -->
```javascript
var foo = {
  value: 1,
  bar: function() {
    console.log(this.value)
  }
};
foo.bar(); // 1
```
- 将函数设为对象的属性
- 执行该函数
- 删除该函数

```javascript
  Function.prototype.myCall = function(context){
    //获取参数
    let args = [...arguments].slice(1)

    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;

    //首先要获取调用call的函数，用this可以获取
    context.fn = this //函数设为对象属性
    //执行函数
    context.fn(...args)
  }


```