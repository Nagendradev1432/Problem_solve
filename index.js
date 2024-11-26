// let num=+prompt("enter a number : ")
//   res=""
// if(num>1){
//     for(i=2;i<num;i++){
//     let c=0
   
//         for(j=2;j<i;j++){
//             if(i%j==0)
//             c++
            
//         }
//      if(c==0){
//             res=res+i+" "
//         }
        
//     }
//     console.log(res)
// }


// let num=+prompt("enter a number :")
// c=0
// if(num>1){
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             console.log("not a prime")
//             c++
//             break;
//         }
        
//     }
//     if(c==0){
//         console.log("prime number")
//     }
//     else{
//         console.log("must be enter a number greater th")
//     }
// }



// let num=+prompt("enter number :")
// while(num>1){
//     num=num-2
// }
// if(num==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// let num=+prompt("enter a  number : ")
// sum=0
// for(i=1;i<num;i++){
//     if(num%i==0){
//         sum=sum+i
//     }
// }
// if(num==sum){
//     console.log("Perfect number")
// }
// else{
//     console.log("not a perfect number :")
// }



// let num=+prompt("enter number : ")
// mul=""
// multi=1
// for(i=1;i<=num;i++){
//     if(num!=i){
//         mul=mul+i+"*"
//     }
//     else{
//         mul=mul+i
//     }
//     multi=multi*i
// }
// console.log(mul+"="+multi)


// let arr1=[1,2,3,4]
// let {2:a,3:b}=arr1
// console.log(a,b)


// let str1="kak"
// let str2=""
// for(i of str1){
//     str2=i+str2
// }
// if(str1==str2){
//     console.log("palindrome")
// }
// else{
//     console.log("not a palindrome")
// }

// let num=+prompt("enter a number : ")
// c=0
// if(num>1){
//    for(i=2;i<num;i++){
//        if(num%i==0){
//            console.log("not a prime")
//            c++
//           break;
           
//        }
//    } 
//    if(c==0){
//        console.log("prime number")
//    }
// }


// let num=+prompt("enter number number : ")
// sum=0
 
// if(num>1){
//     for(i=2;i<num;i++){
//        c=0
//         for(j=2;j<i;j++){
//             if(i%j==0){
//                 c++
//             }
//         }
//          if(c==0){
//         sum=sum+i
//     }
//     }
   
// }
// console.log(sum)


// let n =+prompt('Enter the Number : ')
// sum=0
// num = n
// while(num!=0)
// {
//     p=1
//     rem = num %10
//     for(i=1;i<=rem;i++)
//     {
//         p = p * i
//     }
//     sum = sum + p
//     num = Math.floor(num / 10)
// }
// if(n==sum)
// {
//     console.log(n,"is a Strong number")
// }
// else
// {
//     console.log(n,"is Not a Strong number")
// }


// let num=prompt("enter a number : ")
// sum=0
// for(i of num){
//     p=1
//     for(j=1;j<=i;j++){
//         p=p*j
//     }
//     sum=sum+p
// }
// if(num==sum){
//     console.log("strong number")
// }
// else{
//     console.log("not strong number")
// }


// let num=prompt("enter a number : ")
// let prod=num.length
// sum=0
// for(i of num){
//     sum=sum+i**prod
// }
// console.log(sum)
// if(num==sum){
//     console.log("arm strong number")
// }
// else{
//     console.log("not arms strong number")
// }


// let num=prompt("enter a numebr : ")
// sum=0
// for(i of num){
//     sum=sum+Number(i)
// }
// if(num%sum==0){
//     console.log("Harshadh number")
// }
// else{
//     console.log("not a harshadh number")
// }

// let num=prompt("enter a number : ")
// sum=0,primeSum=0
// for(i of num){
//     if(i>1){
//         c=0
//          for(j=2;j<i;j++){
//              if(i%j==0){
//                  sum=sum+Number(i)
//                  c++
//                   break;
//              }
//          }
//          if(c==0){
//             primeSum=primeSum+Number(i) 
//          }
//     }
// }
// console.log(primeSum,sum)


// let obj={a:1,b:3}
// let obj2=obj
// obj2.a=3
// console.log(obj.a)
