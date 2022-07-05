let permutaion = (str, ans, index = 0) => {
    if (0 === str.length) {
      console.log(ans);
      return;
    }
  for (let i = 0; i < str.length; i++) {
    let curStr = str[i];
    let newStr = str.substring(0, i) + str.substring(i + 1);
    permutaion(newStr, ans + curStr, index + 1);
  }
};
let str = "abc"
permutaion(str, "", 0)