
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

const timeFromDate  = (date)=> date.toTimeString().slice(0,8)
console.log(timeFromDate(new Date()))





