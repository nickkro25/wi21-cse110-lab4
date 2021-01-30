function f() { 
  let d =new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
             }
window.setInterval(f,1000);
