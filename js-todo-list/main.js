// TO DO
document.addEventListener("DOMContentLoaded", function(){
  let to_do_list = document.querySelectorAll("li");
  let add_button = document.querySelector("#addBtn");
  let close_button = document.querySelectorAll(".close");
  
  // function Drop(event){
  //   event.preventDefault();
  //   var data=event.dataTransfer.getData("text");
  //   event.currentTarget.appendChild(document.getElementById(data));
  // }


  
  function add_list(){
    // 判斷如果是空陣列的話就不給加
    if(document.querySelector("#input").value != ''){
      let li = document.createElement("li")
      let text = document.querySelector("#input").value;
      let close_x = document.createElement("span")
      close_x.classList.add("close")
      close_x.textContent = 'x'
      li.textContent = text
      li.setAttribute("draggable", "true")
      
      li.insertAdjacentElement("beforeend", close_x)
      li.addEventListener("click", function(){
        li.classList.toggle('checked');
      })

      close_x.addEventListener("click", function(){
        close_x.parentNode.remove()
      })
      li.addEventListener('drag', function(){
        console.log("drag")
      })
      document.querySelector("#input").value = '';
      return li
    }
  }


  //  點擊移除class
  for (let to_do of to_do_list){
    to_do.setAttribute("draggable", "true")
    to_do.addEventListener("click", function(){
      to_do.classList.toggle('checked');
    })
    to_do.addEventListener('drag', function(){
      console.log("drag")
    })

  }
  // 點擊 x 刪除任務，點擊 span (後面那個 x) 可移除任務
  for (let x of close_button){
    x.addEventListener("click",function(){
      x.parentNode.remove()
    })
  } 

  //輸入新任務名稱，按下+新增任務，取得 input 輸入的文字，按下 + 可以新增任務（li），新增的任務也有標記移除功能
  
  add_button.addEventListener("click", function(){
    document.querySelector("ul").insertAdjacentElement("beforeend", add_list())
  })


  //拖拉li

})

