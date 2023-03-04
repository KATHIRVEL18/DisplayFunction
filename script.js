document.querySelector('#myButton').onclick = function(){
    const h1 = document.querySelector('#myHead');

   const div1 = document.querySelector(".myDiv")
   
   





    h1.style.color = "red";

    div1.style.display = "none";

}



document.querySelector("#myButton2").onclick = function(){
    const div2 = document.querySelector(".myDiv2")

    const h1 = document.querySelector('#myHead');

    h1.style.color = 'blue'

    div2.style.visibility = 'hidden'

}


document.querySelector("#myButton3").onclick = function(){
   location.reload()

}