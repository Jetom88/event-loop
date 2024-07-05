console.log('Hello'); //1

setTimeout(() => {
    console.log('setTimeout');
}, 1000); //4(1초후)

console.log('Hi'); //2

fetch('api요청~~~')
    .then(res=> res.json())
    .then(data => {
        console.log('fetch:', data);
    }); //5(API응답 후)

console.log('Jetom'); //3