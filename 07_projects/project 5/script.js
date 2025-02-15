
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const changeColor = function(){
    // const random = parseInt(Math.random() * 1000000);
    // document.body.style.backgroundColor = `#${random}`
    
    document.body.style.backgroundColor = randomColor();
  }
  
  document.querySelector('#start').addEventListener('click', function () {
    if (!intervalId) { // 2. so from last line add this condition 
      // - done this for clean code it was working fine without this also
      intervalId = setInterval(changeColor, 1000);
    }
  })
  
  document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(intervalId);
    console.log('STOPPED');
    intervalId = null; // 1. if this is null it will keep running
  });
  