//array.forEach()
Array.prototype.forEach2= function (callback){
    let length = this.length; 
    for (let i =0;i<length; ++i){
            callback(this[i]);     
    }
  }
  let alphabet = ['a','b','c'];
  alphabet.forEach2((element)=>{
    console.log(element);
  })
  
  
  //array.reduce()
  Array.prototype.reduce2= function (callback,total){
       let length= this.length;
       for (let i=0;i<length;++i)
         {
           callback(total,this[i]);
           if (total==="undefined"){
             total = this[0];
             i++;
           }
           total +=this[i];
         }
    return total;
  }
  let numbers=[1,2,3,4,5];
  let result =numbers.reduce2((total,curVal)=>{
        return total+curVal;
  },0)
  console.log(result)
  
  
  //array.find
  Array.prototype.find2= function (callback){
      let length= this.length;
      for (let i=0;i<length;i++)
        {
          let result =  callback(this[i]);
          if (result) 
          {
            return this[i];
          }
        }
  }
  let numbers1  = [1,2,3,4];
  let result1 = numbers1.find2((item)=>{
    return item>2
  })
  console.log(result1)
  
  
  //array.filter2
  Array.prototype.filter2= function (callback){
    let length = this.length;
    let res = [];
    for (let i = 0;i<length;++i)
      {
        let result= callback(this[i]);
        if (result){
          res.push(this[i]);
        }
      }
    return res;
  }
  let numbers3= [1,2,3,4,5];
  let arr = numbers3.filter2((item)=>{
    return item>3
  })
  console.log(arr)