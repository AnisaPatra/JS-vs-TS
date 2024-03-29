const quickSort = (arr) => {
    if(arr.length < 2){ return arr}
    else{
        let pivot = arr[0]
        let leftArr =[], rightArr = []
        
        for(let i = 1; i < arr.length; i++){
            if(pivot > arr[i]){
                leftArr.push(arr[i])
            } else{
                rightArr.push(arr[i])
            }
        }
        
        return[...quickSort(leftArr),pivot, ...quickSort(rightArr)]
    }
}

console.log(quickSort([5,6,7,0,2]))
