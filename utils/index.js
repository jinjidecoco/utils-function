// 一：日期处理
// 1.生成指定范围随机数

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 2.数字千分位分割

const format = (n) => {
    let num = n.toString();
    let len = num.length;
    if (len <= 3) {
        return num;
    } else {
        let temp = '';
        let remainder = len % 3;
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp;
        } else { // 3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp;
        }
    }
}

// 3.移除数组的某一项

// (1)
const remove = (arr,el) => {
  const i = arr.indexOf(el)
  if(i > -1){
    arr.splice(i,1)
  }
}

// (2) Ts写法

// export const removes = <T>(arr: T[], el: T)   => {
//   const i = arr.indexOf(el)
//   if(i > -1){
//     arr.splice(i,1)
//   }
// }

{/* 4.查找日期位于一年中的第几天 */}

const dayOfYear = (date) => {
  let start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start)/1000/60/60/24)
}
// console.log(dayOfYear(new Date()))

// 5.时间格式化

const timeFromDate  = date => date.toTimeString().slice(0,8)
// console.log(timeFromDate(new Date())) //10:06:43


// 二：字符串处理

// 1.字符串首字母大写 slice(start,end) end没有默认截取到最后一位
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

// 2.字符串翻转
const reverse = str => str.split('').reverse().join('')
// reverse('hello')  ['h', 'e', 'l', 'l', 'o']=> ['o', 'l', 'l', 'e', 'h'] => 'olleh'

// 3.随机字符串

const randomStr = str => Math.random().toString(36).slice(2)
randomStr() // '0.x3kez4oz2n' => x3kez4oz2n



// 三、数组处理

// 1.数组中去重

//第一次出现的位置等于当前索引
let findUnique = arr => arr.filter((item,index) => arr.indexOf(item) === index) //方法一
let findUnique = arr => arr.reduce((prev,cur)   => prev.includes(cur) ? prev:[...prev,cur],[]) //方法二

const removeRepeatArr = arr => [...new Set(arr)]

// 2.数组是否为空

const  isEmptyArr = arr  => Array.isArray(arr) && arr.length === 0  //true 空

// 3.合并数组

const mergeArr = (a,b) => a.concat(b)

const mergeArr2 = (a,b) => [...a,...b]

// 四、数字操作

// 1.获得1组数的平均数

//先求和再平均
const average =(...args) => args.reduce( (prev,cur) => prev + cur )/args.length

// 2.判断是否为偶数

const isEven = num => num % 2 === 0

// 3.获取两个整数间的随机数

const getRandom = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min


// 浏览器操作

// 1.获取选中的文本
const getSelectedText = () => window.getSelection().toString()

// 2.滚动到页面顶部
const scrollToTop = () => window.scrollTo(0,0)

// 3.是否滚动到页面底部


const scrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight


// 其它
// 1.获取变量类型
const getType  = obj => Object.prototype.toString.call(obj).slice(8,-1)
const getType2 = obj => Object.prototype.toString.call(obj).slice(8,-1).toLowerCase() //转为小写

getType(0) // 'number'
getType('') // 'string'
getType(null) // 'null'
getType(undefined) // 'undefined'
getType(Symbol()) // 'symbol'
getType(() => {}) // 'function'
getType([]) // 'array'




















