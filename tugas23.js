function arr(deret){
 let arr = []
for(let i=0; i<deret.length; i++){
    if(deret[i]>15){
        arr.push(deret[i])
    }
}return arr
}console.log(arr([ '32','33','16','40','9','7','11','2','44','1','66']))