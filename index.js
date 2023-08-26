function sort(...nums) {
    for(k=0; k<nums.length; k++){
        for(i=0; i<nums.length; i++){
        if(nums[i]>nums[i+1]){
           nums.splice(i, 2, nums[i+1], nums[i])
        }else{
            null
        }
        }
    }
    return nums
}
console.log(sort(20, 4, 1, 15, 22, 2, 3));
