
const productsDiv = document.querySelector('.products-panel');

productsDiv.addEventListener('click', (event) => {

if (event.target.className=="fa-solid fa-minus")
{     
    if (event.target.parentElement.querySelector(".quantity").innerText > 1){

        event.target.parentElement.querySelector(".quantity").innerText --;
        calculateProductPriceWithoutTax(event.target);
    }
    else {
        (confirm(`${event.target.parentElement.parentElement.querySelector("h2").innerText} will be removed`)) && (event.target.parentElement.parentElement.parentElement.remove());
    }
   }
else if (event.target.classList.contains("fa-plus"))
// else if (event.target.className=="fa-solid fa-plus")
{ 
     //  event.target.parentElement.querySelector(".quantity").innerText ++;

     event.target.previousElementSibling.innerText ++;
     calculateProductPriceWithoutTax(event.target);
 }
 else if((event.target.className=="remove-button") && (confirm(`${event.target.parentElement.parentElement.querySelector("h2").innerText} will be removed`))){

    event.target.parentElement.parentElement.parentElement.remove();

 }

})


const calculateProductPriceWithoutTax = (target) =>{

    const productInfoDiv = target.parentElement.parentElement;
    const productPrice = productInfoDiv.querySelector(".product-price strong").innerText;
    const quantity = productInfoDiv.querySelector(".quantity").innerText;
    const productTotalDiv = productInfoDiv.querySelector(".total-price");
    productTotalDiv.innerText = `Product Total : ${ (productPrice * quantity).toFixed(2)}`

}





