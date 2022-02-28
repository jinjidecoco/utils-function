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

    // 判断调用对象是否为函数
    if (typeof this !== "function") {
      throw new TypeError("Error");
    }
    //获取参数
    let args = [...arguments].slice(1)

    let result = null;


    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;

    //首先要获取调用call的函数，用this可以获取
    context.fn = this //将调用函数设为对象的方法
    //执行函数
    result=context.fn(...args)
    //删除属性
    delete context.fn
    return result //保存结果
  }

```
#### 3.实现apply
```javascript
  function myApply(context){

    let result = null

    context  = context|| window
    context.fn = this

    if(arguments[1]){
      result = context.fn(...arguments[1])
    }else{
      result = context.fn()
    }
    //将属性删除
    delete context.fn
    return result
  }

```

#### 4.实现bind


#### 5.数组扁平化

```javascript

function flatten(arr){
  var result =[];
  for(var i = 0,len = arr.length; i<len; i++){
    if(Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  return result
}
flatten([1,2,[2,3,[4,5]],6]); //[1, 2, 2, 3, 4,5, 6]
```

<!-- es6  -->
```javascript
function flatt(arr){
  while(arr.some(item =>Array.isArray(item))){
    arr = [].concat(..arr) //concat可以将值连接到数组
  }
  return arr
}
```

#### 6.深浅拷贝

##### 6.1 浅拷贝(只考虑对象)
```javascript
function shallowCopy(obj) {
    if(typeof obj !=='object') return
    let newObj = obj instanceof Array? []:{}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key]
        }
    }
    return newObj
}
shallowCopy({a:1,b:3,c:4}) //{a:1,b:3,c:4}
```

##### 6.2浅拷贝(考虑多层对象)

```javascript
function shadowClone(obj){
  let newObj = obj instanceof Array ?[]:{}
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
     newObj[key] = typeof(obj[key])==='object'? shadowClone(obj[key]):obj[key]
    }
  }
  return newObj
}

```
##### 6.3(部分复杂拷贝)
(1) JSON.parse(JSON.stringify(obj)) //乞丐版(不考虑引用类型、拷贝函数、循环引用)

```javascript
function deepCopy(obj){
  if(typeof obj === 'function'){
    throw new TypeError('请传入正确的数据类型格式')
  }
  try {
    let data = JSON.stringify(obj)
    let newData = JSON.parse(data)
    return newData
  }catch(e) {
    console.log(e)
  }
}
```



#### 7.类数组转真数组

```javascript
var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
一：Array.prototype.slice.call(arrayLike)
二：[...arrayLike]
三：Array.from(arrayLike)
四：Array.prototype.concat.apply([],arrayLike)
五：[].slice.call(arguments)

```


