// 无法处理最大次数 存在多个元素的情况
function check(arr){
    let hash = {}
    let max = 1;
    let maxKey;
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = hash[arr[i]] ? hash[arr[i]] + 1 : 1;
        if (max < hash[arr[i]]) {
            max = hash[arr[i]];
            maxKey = arr[i]
        }
    }
};

function check1(arr) {
    let hash = {}
    let max = 1;
    let maxKey;
    arr.reduce((hash, k) => {
        hash[k] = hash[k] ? hash[k] + 1 : 1;
        if (max < hash[k]) {
            max = hash[k];
            maxKey = k
        }
        return p
    })
}
