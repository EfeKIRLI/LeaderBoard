let tabs  = document.querySelectorAll(".board1_tabs ul li");
let today  = document.querySelector(".today") ;
let month  = document.querySelector(".month") ;
let year  = document.querySelector(".year") ;
let items  = document.querySelectorAll(".board1_item") ;

tabs.forEach(function(tab){
    // console.log(tab)
    tab.addEventListener("click",function(){
        let currentDataLi = tab.getAttribute("data-li");
        // console.log(currentDataLi)
       
        tabs.forEach(function(tab){
            tab.classList.remove("active");
        })

        tab.classList.add("active");

        items.forEach(function(item){
            console.log(item)
            item.style.display = "none"
        })

        if(currentDataLi =="today"){
            today.style.display ="block";
        }
        else if(currentDataLi =="month"){
            month.style.display ="block";
        }
        else{
            year.style.display ="block";
        }
    })
})