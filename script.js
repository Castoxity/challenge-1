document.addEventListener('DOMContentLoaded', function() {
    const cAmountE = document.getElementById('cAmount');
    // const ordersE= document.getElementById('bruh');
    const emptyCart = document.getElementById('emptyCart');
    const qWaffle = document.getElementById('QWaffle');
    const qCreme = document.getElementById('QCreme');
    const qMacaron = document.getElementById('QMacaron');
    const qTiramisu = document.getElementById('QTiramisu');
    const qBaklava = document.getElementById('QBaklava');
    const qPie = document.getElementById('QPie');
    const qCake = document.getElementById('QCake');
    const qBrownie = document.getElementById('QBrownie');
    const qCotta = document.getElementById('QCotta');

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

    // carts
    const waffle = document.getElementById('CartWaffle');
    const brulee = document.getElementById('CartCreme');
    const macaron = document.getElementById('CartMacaron');
    const tiramisu = document.getElementById('CartTiramisu');
    const baklava = document.getElementById('CartBaklava');
    const pie = document.getElementById('CartPie');
    const cake = document.getElementById('CartCake');
    const brownie = document.getElementById('CartBrownie');
    const cotta = document.getElementById('CartCotta');
    const results = document.getElementById('results');

    // all the cancel order buttons
    const cancel1 = document.getElementById('cancel1');
    const cancel2 = document.getElementById('cancel2');
    const cancel3 = document.getElementById('cancel3');
    const cancel4 = document.getElementById('cancel4');
    const cancel5 = document.getElementById('cancel5');
    const cancel6 = document.getElementById('cancel6');
    const cancel7 = document.getElementById('cancel7');
    const cancel8 = document.getElementById('cancel8');
    const cancel9 = document.getElementById('cancel9');

    let cAmount = 0; 
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
    calculations();

        
    increase1.addEventListener('click', function() {
      quantityE1++;
      qWaffle.textContent = quantityE1;

      updateCAmount();
      calculations();
    });

    increase2.addEventListener('click', function() {
      quantityE2++;
      qCreme.textContent = quantityE2;
      
      updateCAmount();
      calculations();
    });
  
    increase3.addEventListener('click', function() {
      quantityE3++;
      qMacaron.textContent = quantityE3;
      
      updateCAmount();
      calculations();
    });
  
    increase4.addEventListener('click', function() {
      quantityE4++;
      qTiramisu.textContent = quantityE4;

      updateCAmount();
      calculations();
    });
  
    increase5.addEventListener('click', function() {
      quantityE5++;
      qBaklava.textContent = quantityE5;
      
      updateCAmount();
      calculations();
    });
  
    increase6.addEventListener('click', function() {
      quantityE6++;
      qPie.textContent=quantityE6;
      
      updateCAmount();
      calculations();
    });
  
    increase7.addEventListener('click', function() {
      quantityE7++;
      qCake.textContent = quantityE7;
      
      updateCAmount();
      calculations();
    });
  
    increase8.addEventListener('click', function() {
      quantityE8++;
      qBrownie.textContent = quantityE8;
      
      updateCAmount();
      calculations();
    });
  
    increase9.addEventListener('click', function() {
      quantityE9++;
      qCotta.textContent=quantityE9;
      
      updateCAmount();
      calculations();
    });
  
    decrease1.addEventListener('click', function() {
      if (quantityE1 > 0) {
        quantityE1--;
        qWaffle.textContent = quantityE1;
        updateCAmount();
        calculations();
      }
    });
    
    decrease2.addEventListener('click', function() {
      if (quantityE2 > 0) {
        quantityE2--;
        qCreme.textContent = quantityE2;

        updateCAmount();
        calculations();
      }
    });
    
    decrease3.addEventListener('click', function() {
      if (quantityE3 > 0) {
        quantityE3--;
        qMacaron.textContent = quantityE3;

        updateCAmount();
        calculations();
      }
    });
    
    decrease4.addEventListener('click', function() {
      if (quantityE4 > 0) {
        quantityE4--;
        qTiramisu.textContent = quantityE4;

        updateCAmount();
        calculations();
      }
    });
    
    decrease5.addEventListener('click', function() {
      if (quantityE5 > 0) {
        quantityE5--;
        qBaklava.textContent = quantityE5;

        updateCAmount();
        calculations();
      }
    });
    
    decrease6.addEventListener('click', function() {
      if (quantityE6 > 0) {
        quantityE6--;
        qPie.textContent=quantityE6;

        updateCAmount();
        calculations();
      }
    });
    
    decrease7.addEventListener('click', function() {
      if (quantityE7 > 0) {
        quantityE7--;
        qCake.textContent = quantityE7;

        updateCAmount();
        calculations();
      }
    });
    
    decrease8.addEventListener('click', function() {
      if (quantityE8 > 0) {
        quantityE8--;
        qBrownie.textContent = quantityE8;

        updateCAmount();
        calculations();
      }
    });
    
    decrease9.addEventListener('click', function() {
      if (quantityE9 > 0) {
        quantityE9--;
        qCotta.textContent=quantityE9;

        updateCAmount();
        calculations();
      }
    });
    
    cancel1.addEventListener('click', function() {
      quantityE1 = 0;
      qWaffle.textContent = quantityE1;

      updateCAmount();
      calculations();
    });
      
    cancel2.addEventListener('click', function() {
      quantityE2 = 0;
      qCreme.textContent = quantityE2;

      updateCAmount();
      calculations();
    });
      
    cancel3.addEventListener('click', function() {
      quantityE3 = 0;
      qMacaron.textContent = quantityE3;

      updateCAmount();
      calculations();
    });
      
    cancel4.addEventListener('click', function() {
      quantityE4 = 0;
      qTiramisu.textContent = quantityE4;

      updateCAmount();
      calculations();
    });
      
    cancel5.addEventListener('click', function() {
      quantityE5 = 0;
      qBaklava.textContent = quantityE5;

      updateCAmount();
      calculations();
    });
      
    cancel6.addEventListener('click', function() {
      quantityE6 = 0;
      qPie.textContent = quantityE6;

      updateCAmount();
      calculations();
    });
      
    cancel7.addEventListener('click', function() {
      quantityE7 = 0;
      qCake.textContent = quantityE7;

      updateCAmount();
      calculations();
    });
      
    cancel8.addEventListener('click', function() {
      quantityE8 = 0;
      qBrownie.textContent = quantityE8;

      updateCAmount();
      calculations();
    });
      
    cancel9.addEventListener('click', function() {
      quantityE9 = 0;
      qCotta.textContent = quantityE9;

      updateCAmount();
      calculations();
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
        emptyCart.style.display = 'none';
        results.style.display='block';
      } else {

        results.style.display = 'none';
        emptyCart.style.display = 'block';
      }

      if(quantityE1 > 0){
        waffle.style.cssText="display:block; display:flex; font-size:17px; align-items: center; width:90%; border-bottom:1px solid black; padding-bottom:15px; padding-top:12px;"      
      }
      else{
        waffle.style.display='none';
      }
      if(quantityE2 > 0){
        brulee.style.cssText="display:block; display:flex; font-size:17px; align-items: center; width:90%; border-bottom:1px solid black; padding-bottom:15px; padding-top:12px;"      
      }
      else{
        brulee.style.display='none';
      }
      if(quantityE3 > 0){
        macaron.style.cssText="display:block; display:flex; font-size:17px; align-items: center; width:90%; border-bottom:1px solid black; padding-bottom:15px; padding-top:12px;"      
      }
      else{
        macaron.style.display='none';
      }
      if(quantityE4 > 0){
        tiramisu.style.cssText="display:block; display:flex; font-size:17px; align-items: center; width:90%; border-bottom:1px solid black; padding-bottom:15px; padding-top:12px;"      
      }
      else{
        tiramisu.style.display='none';
      }
      if(quantityE5 > 0){
        baklava.style.cssText="display:block; display:flex; font-size:17px; align-items: center; width:90%; border-bottom:1px solid black; padding-bottom:15px; padding-top:12px;"      
      }
      else{
        baklava.style.display='none';
      }
      if(quantityE6 > 0){
        pie.style.cssText="display:block; display:flex; font-size:17px; align-items: center; width:90%; border-bottom:1px solid black; padding-bottom:15px; padding-top:12px;"      
      }
      else{
        pie.style.display='none';
      }
      if(quantityE7 > 0){
        cake.style.cssText="display:block; display:flex; font-size:17px; align-items: center; width:90%; border-bottom:1px solid black; padding-bottom:15px; padding-top:12px;"      
      }
      else{
        cake.style.display='none';
      }
      if(quantityE8 > 0){
        brownie.style.cssText="display:block; display:flex; font-size:17px; align-items: center; width:90%; border-bottom:1px solid black; padding-bottom:15px; padding-top:12px;"      
      }
      else{
        brownie.style.display='none';
      }
      if(quantityE9 > 0){
        cotta.style.cssText="display:block; display:flex; font-size:17px; align-items: center; width:90%; border-bottom:1px solid black; padding-bottom:15px; padding-top:12px;"      
      }
      else{
        cotta.style.display='none';
      }
      

    }

    function calculations(){
      const price1 = document.getElementById('price1');
      const price2 = document.getElementById('price2');
      const price3 = document.getElementById('price3');
      const price4 = document.getElementById('price4');
      const price5 = document.getElementById('price5');
      const price6 = document.getElementById('price6');
      const price7 = document.getElementById('price7');
      const price8 = document.getElementById('price8');
      const price9 = document.getElementById('price9');
      const total = document.getElementById('totalNumber');


      let cost1 = 6.50;
      let cost2 = 7.00;
      let cost3 = 8.00;
      let cost4 = 5.50;
      let cost5 = 4.00;
      let cost6 = 5.00;
      let cost7 = 4.50;
      let cost8 = 5.50;
      let cost9 = 6.50;
      
      let total1 = quantityE1 * cost1;
      price1.textContent = total1;
            
      let total2 = quantityE2 * cost2;
      price2.textContent = total2;
            
      let total3 = quantityE3 * cost3;
      price3.textContent = total3;
            
      let total4 = quantityE4 * cost4;
      price4.textContent = total4;
            
      let total5 = quantityE5 * cost5;
      price5.textContent = total5;
            
      let total6 = quantityE6 * cost6;
      price6.textContent = total6;
            
      let total7 = quantityE7 * cost7;
      price7.textContent = total7;
            
      let total8 = quantityE8 * cost8;
      price8.textContent = total8;
            
      let total9 = quantityE9 * cost9;
      price9.textContent = total9;
      
      let totalC = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9;
      total.textContent = totalC;
      
      cAmount = quantityE1 + quantityE2 + quantityE3 + quantityE4 + quantityE5 + quantityE6 + quantityE7 + quantityE8 + quantityE9;
      cAmountE.textContent = cAmount;

      updateCAmount();
    }
    
    //declaring variables first to pass data   
    const confirmQ1 = document.getElementById('confirmquantity1');
    const confirmP1 = document.getElementById('confirmPrice1');
    const confirmQ2 = document.getElementById('confirmquantity2');
    const confirmP2 = document.getElementById('confirmPrice2');
    const confirmQ3 = document.getElementById('confirmquantity3');
    const confirmP3 = document.getElementById('confirmPrice3');
    const confirmQ4 = document.getElementById('confirmquantity4');
    const confirmP4 = document.getElementById('confirmPrice4');
    const confirmQ5 = document.getElementById('confirmquantity5');
    const confirmP5 = document.getElementById('confirmPrice5');
    const confirmQ6 = document.getElementById('confirmquantity6');
    const confirmP6 = document.getElementById('confirmPrice6');
    const confirmQ7 = document.getElementById('confirmquantity7');
    const confirmP7 = document.getElementById('confirmPrice7');
    const confirmQ8 = document.getElementById('confirmquantity8');
    const confirmP8 = document.getElementById('confirmPrice8');
    const confirmQ9 = document.getElementById('confirmquantity9');
    const confirmP9 = document.getElementById('confirmPrice9');
    const bruv = document.getElementById('bruuh'); //total price in popup

    // passing data after hitting confirm and showing popup
    const popup = document.getElementById('overlapping');
    const confirmBtn = document.getElementById('confirm');
    confirmBtn.addEventListener('click', function(){
        popup.style.cssText = "position: fixed; z-index: 100;";
        confirmQ1.textContent = quantityE1;
        confirmP1.textContent = price1.textContent;
        confirmQ2.textContent = quantityE2;
        confirmP2.textContent = price2.textContent;
        confirmQ3.textContent = quantityE3;
        confirmP3.textContent = price3.textContent;
        confirmQ4.textContent = quantityE4;
        confirmP4.textContent = price4.textContent;
        confirmQ5.textContent = quantityE5;
        confirmP5.textContent = price5.textContent;
        confirmQ6.textContent = quantityE6;
        confirmP6.textContent = price6.textContent;
        confirmQ7.textContent = quantityE7;
        confirmP7.textContent = price7.textContent;
        confirmQ8.textContent = quantityE8;
        confirmP8.textContent = price8.textContent;
        confirmQ9.textContent = quantityE9;
        confirmP9.textContent = price9.textContent;
        bruv.textContent = total.textContent;
    });

    const refresh = document.getElementById('refresh');
    refresh.addEventListener('click', function(){
        window.parent.location = window.parent.location.href;
    })

  });
  