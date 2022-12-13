console.log("Hello from Service worker");

console.log(this); //ServiceWorkerGlobalScope

let time = 0;

setInterval(() => {
  time += 1;
  console.log(time);
}, 1000);
