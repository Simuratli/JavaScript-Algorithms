/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left  = 0;
    let right  = 0;
    let max = 0;
    let set = new Set();


    while(right < s.length){
        let letter = s[right];

        if(!set.has(s[right])){
            set.add(s[right]);
            max = Math.max(max,set.size)
            right++
        }else{
            set.delete(s[left])
            left++
        }
    }
    

    return max
};