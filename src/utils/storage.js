// 存储数据
// function setItem(key,value){
//     if(typeof value=='object'){
//       value=JSON.stringify(value)
//     }
//     localStorage.setItem(key,value)
// }


// 获取数据
// function getItem(key){
//     let data=localStorage.getItem(key)
//     try{
//       return JSON.parse(data)
//     }catch(e){
//       return data
//     }
// }


// 删除数据
// function removeItem(key){
//     localStorage.removeItem(key)
// }


// 清除数据
// function removeAllItem(key){
//   localStorage.clear(key)
// }


// export default{setItem,getItem,removeItem,removeAllItem}


// 存储数据
export const setItem=(key,value)=>{
    if(typeof value=='object'){
      value=JSON.stringify(value)
    }
    localStorage.setItem(key,value)
}


// 获取数据
export const getItem=(key)=>{
    let data=localStorage.getItem(key)
    try{
      return JSON.parse(data)
    }catch(e){
      return data
    }
}


// 删除数据
export const removeItem=(key)=>{
    localStorage.removeItem(key)
}


// 清除数据
export const removeAllItem=(key)=>{
  localStorage.clear(key)
}