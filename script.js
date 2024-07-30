document.addEventListener('DOMContentLoaded', function() {
    const cAmountE = document.getElementById('cAmount');
    const increaseB = document.getElementById('plus');
    const decreaseB = document.getElementById('minus');
    const ordersE= document.getElementById('bruh');
    const emptyCart = document.getElementById('emptyCart');
    let cAmount = 0; //quantity on right
    updateCAmount();
        
    increaseB.addEventListener('click', function() {
      cAmount++;
      updateCAmount();
    });
  
    decreaseB.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        updateCAmount();
      }
    });
  
    function updateCAmount() {
      cAmountE.textContent = cAmount;
      if (cAmount > 0) {
        ordersE.style.display = 'block';
        emptyCart.style.display = 'none';
      } else {
        ordersE.style.display = 'none';
        emptyCart.style.display = 'block';
      }
    }
  });
  