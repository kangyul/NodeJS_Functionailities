require('./var'); // 다른 파일을 실행만 하고 싶을 때
console.log(require);
// require.cache에 previous moduel들을 store 해두고 후에 cache에서 읽어옴.