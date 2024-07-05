console.log('Hello');

setTimeout(() => {
    console.log('setTimeout');
}, 1000);

console.log('Hi');

fetch('api요청~~~')
    .then(res=> res.json())
    .then(data => {
        console.log('fetch:', data);
    });

console.log('Jetom');