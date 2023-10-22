
const productsDiv = document.querySelector('.products-panel');
console.log(productsDiv);

productsDiv.addEventListener('click', (event) => {

if (event.target.className=="fa-solid fa-minus")
   {     
    if (event.target.parentElement.querySelector(".quantity").innerText > 1){

        event.target.parentElement.querySelector(".quantity").innerText --;

    // } else{
    //     if 
    // };

} 
   }
else if (event.target.classList.contains("fa-plus"))
// else if (event.target.className=="fa-solid fa-plus")
{ 
     //  event.target.parentElement.querySelector(".quantity").innerText ++;

     event.target.previousElementSibling.innerText ++;
 }
 else if(event.target.className=="remove-button"){

    event.target.parentElement.parentElement.parentElement.remove();

 }

})


const calculateProductPrice = function(
    console.log("hello world");
)
