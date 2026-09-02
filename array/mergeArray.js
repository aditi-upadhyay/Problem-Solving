function test(num1, num2) {
    console.log("test",num1,num2);
 
    let newArr =[]
 
    let size1 = num1.length;
    let size2 = num2.length;
   
    let arr = num1.length > num2.length ? num1 : num2;
    let anotherArr = num1.length > num2.length ? num2 : num1;
    let counter = 0
    // console.log("arr",arr);
    for(let i = 0; i < arr.length; i++) {
        console.log("arr[i]",arr[i]);
        if(arr[i] > anotherArr[counter]){
            console.log("anotherArr[counter]",anotherArr[counter]);
            newArr.push(anotherArr[counter]);
            newArr.push(arr[i]);
            counter++;
        }else{
            newArr.push(arr[i]);
        }
    }
    console.log("newArr",newArr);  
}
 
test([-5, -2, 4, 5, 0, 0, 0], [-3, 1, 8]);
 
 