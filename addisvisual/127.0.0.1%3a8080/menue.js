const menuItem=[
    {
      itemName:"salad",
      itemDescription:"Split lentils cooked with fresh garlic, ginger, and onions, with berbere sauce"
    },
    {
        itemName:"salad",
        itemDescription:"Split lentils cooked with fresh garlic, ginger, and onions, with berbere sauce"
      },
      {
        itemName:"salad",
        itemDescription:"Split lentils cooked with fresh garlic, ginger, and onions, with berbere sauce"
      },
      {
        itemName:"salad",
        itemDescription:"Split lentils cooked with fresh garlic, ginger, and onions, with berbere sauce"
      },
      {
        itemName:"salad",
        itemDescription:"Split lentils cooked with fresh garlic, ginger, and onions, with berbere sauce"
      },
      {
        itemName:"salad",
        itemDescription:"Split lentils cooked with fresh garlic, ginger, and onions, with berbere sauce"
      },
      {
        itemName:"salad",
        itemDescription:"Split lentils cooked with fresh garlic, ginger, and onions, with berbere sauce"
      },
      {
        itemName:"salad",
        itemDescription:"Split lentils cooked with fresh garlic, ginger, and onions, with berbere sauce"
      },
      {
        itemName:"salad",
        itemDescription:"Split lentils cooked with fresh garlic, ginger, and onions, with berbere sauce"
      }
    ]
    const buttton=document.querySelector("#bttn");
    buttton.addEventListener("click",(event)=>{
      menuItem.forEach((item)=>{

        roww=""
          roww=`
                <div class="col-lg-3 col-md-4 col-sm-4  ">
                <img src="lambStew.jpg" />
                <p>${item.itemDescription}</p>
                very delicious food <br>
                very delicious food<br>
              <p>this is ${item.itemName}</p>
                </div>
                `
      const meenu=document.querySelector(".rowwe");
        meenu.innerHTML+=roww;
        

    })
    window.location.href="menupage.html";
    })