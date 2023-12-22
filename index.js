// Your code here
function moveDodgerLeft() {
    let left = dodger.style.left;
    left = parseInt(left);
  
    dodger.style.left = `${left - 5}px`;
  }
  
  function moveDodgerRight() {
    let left = dodger.style.left;
    left = parseInt(left);
  
    dodger.style.left = `${left + 5}px`;
  }