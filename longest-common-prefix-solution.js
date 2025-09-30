/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (strs.length === 0){
    return ""}

    let base = strs[0];

    for (let i = 1; i < strs.length; i++) {

       while (strs[i].indexOf(base) !== 0){
        base = base.slice(0,-1);
        if (base === "")
        return "";
       }
    }
    return base;
};
