// TO DO
document.addEventListener("DOMContentLoaded", function(){
  let to_do_list = document.querySelectorAll("li");

  // console.log (to_do_list)
  for (let to_do of to_do_list){
    // console.log (to_do_list[i])
    to_do.addEventListener("click", function(){
      to_do.classList.toggle('checked');
      // alert("hi")
    })
  }




  })

