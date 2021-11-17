数字

1.生成指定范围随机数  

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

2.数字千分位分割

export const format = (n) => {
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

3.移除数组的某一项 

(1) 

export const remove = (arr,el) => {
  const i = arr.indexOf(el)
  if(i > -1){
    arr.splice(i,1)
  } 
}

(2) Ts写法

export const remove = <T>(arr: T[], el: T)   => {
  const i = arr.indexOf(el)
  if(i > -1){
    arr.splice(i,1)
  } 
}





