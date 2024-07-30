document.addEventListener('DOMContentLoaded', function() {
    const cAmountE = document.getElementById('cAmount');
    const ordersE= document.getElementById('bruh');
    const emptyCart = document.getElementById('emptyCart');

    // getting all the plus and minus and quantity number for left add to cart
    const increase1 = document.getElementById('plus1');
    const increase2 = document.getElementById('plus2');
    const increase3 = document.getElementById('plus3');
    const increase4 = document.getElementById('plus4');
    const increase5 = document.getElementById('plus5');
    const increase6 = document.getElementById('plus6');
    const increase7 = document.getElementById('plus7');
    const increase8 = document.getElementById('plus8');
    const increase9 = document.getElementById('plus9');
    const decrease1 = document.getElementById('minus1');
    const decrease2 = document.getElementById('minus2');
    const decrease3 = document.getElementById('minus3');
    const decrease4 = document.getElementById('minus4');
    const decrease5 = document.getElementById('minus5');
    const decrease6 = document.getElementById('minus6');
    const decrease7 = document.getElementById('minus7');
    const decrease8 = document.getElementById('minus8');
    const decrease9 = document.getElementById('minus9');
    const quantity1 = document.getElementById('quantityno1');
    const quantity2 = document.getElementById('quantityno2');
    const quantity3 = document.getElementById('quantityno3');
    const quantity4 = document.getElementById('quantityno4');
    const quantity5 = document.getElementById('quantityno5');
    const quantity6 = document.getElementById('quantityno6');
    const quantity7 = document.getElementById('quantityno7');
    const quantity8 = document.getElementById('quantityno8');
    const quantity9 = document.getElementById('quantityno9');

    let cAmount = 0; //quantity on right
    let quantityE1 = 0;
    let quantityE2 = 0;
    let quantityE3 = 0;
    let quantityE4 = 0;
    let quantityE5 = 0;
    let quantityE6 = 0;
    let quantityE7 = 0;
    let quantityE8 = 0;
    let quantityE9 = 0;
    updateCAmount();
        
    increase1.addEventListener('click', function() {
      cAmount++;
      quantityE1++;
      
      updateCAmount();
    });

    increase2.addEventListener('click', function() {
      cAmount++;
      quantityE2++;
      
      updateCAmount();
    });
  
    increase3.addEventListener('click', function() {
      cAmount++;
      quantityE3++;
      
      updateCAmount();
    });
  
    increase4.addEventListener('click', function() {
      cAmount++;
      quantityE4++;
      
      updateCAmount();
    });
  
    increase5.addEventListener('click', function() {
      cAmount++;
      quantityE5++;
      
      updateCAmount();
    });
  
    increase6.addEventListener('click', function() {
      cAmount++;
      quantityE6++;
      
      updateCAmount();
    });
  
    increase7.addEventListener('click', function() {
      cAmount++;
      quantityE7++;
      
      updateCAmount();
    });
  
    increase8.addEventListener('click', function() {
      cAmount++;
      quantityE8++;
      
      updateCAmount();
    });
  
    increase9.addEventListener('click', function() {
      cAmount++;
      quantityE9++;
      
      updateCAmount();
    });
  
    decrease1.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        quantityE1--;
        updateCAmount();
      }
    });
    
    decrease2.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        quantityE2--;
        updateCAmount();
      }
    });
    
    decrease3.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        quantityE3--;
        updateCAmount();
      }
    });
    
    decrease4.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        quantityE4--;
        updateCAmount();
      }
    });
    
    decrease5.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        quantityE5--;
        updateCAmount();
      }
    });
    
    decrease6.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        quantityE6--;
        updateCAmount();
      }
    });
    
    decrease7.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        quantityE7--;
        updateCAmount();
      }
    });
    
    decrease8.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        quantityE8--;
        updateCAmount();
      }
    });
    
    decrease9.addEventListener('click', function() {
      if (cAmount > 0) {
        cAmount--;
        quantityE9--;
        updateCAmount();
      }
    });
  
    function updateCAmount() {
      cAmountE.textContent = cAmount;
      quantity1.textContent = quantityE1;
      quantity2.textContent = quantityE2;
      quantity3.textContent = quantityE3;
      quantity4.textContent = quantityE4;
      quantity5.textContent = quantityE5;
      quantity6.textContent = quantityE6;
      quantity7.textContent = quantityE7;
      quantity8.textContent = quantityE8;
      quantity9.textContent = quantityE9;
      if (cAmount > 0) {
        ordersE.style.display = 'block';
        emptyCart.style.display = 'none';
      } else {
        ordersE.style.display = 'none';
        emptyCart.style.display = 'block';
      }
    }


  });
  