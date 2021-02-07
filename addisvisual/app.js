
  const detailsArray=[];
const namm=document.querySelector(".name");
const imagee=document.querySelector(".image");
const description=document.querySelector(".desc");
const button=document.querySelector(".btn");
const bttn=document.querySelector("#bttn");
console.log(bttn)
const imglayer=document.querySelector("#imglayer");
bttn.addEventListener("click",(event)=>{
  window.location.href="menupage.html"
})
  


var checkOpenStatus = function () {
  var d = new Date();
  var date = d.getHours();
  var day = d.getDay();
  if ((date > 9) && (date < 20) && (day != 0)) {
      y = "<span style=\"color:#07ed11\">We're Open!</span>";
  } else {
      y = "<span style=\"color:#fc4b1c\">Sorry we're Closed.</span>";
  }
  document.getElementById("open-close").innerHTML = y;
  setTimeout(checkOpenStatus,15000);
};

checkOpenStatus();
/*function ifmatch(x,y){
  ale="";
  if(x===y && hour>12){
const ale=document.getElementById("status");
ale.innerHTML="closed";
return ale;
  }
  elseif(x===y && hour<12){
    const ale=document.getElementById("status");
ale.innerHTML="closed";
return ale;
console.log(ale);
  }
}*/

/*class Details{
    constructor(name,image,description){
        this.name=name;
        this.image=image;
        this.description=description;
    }
  }
class Localstorage{
  setStorage(){
  const alll=localStorage.setItem( "detailarray" ,JSON.stringify(detailsArray)); 

   }
   getStorage(){
  JSON.parse(localStorage.getItem("detailarray"));
  }
}
class Displayitem {
  displayit(){
    
    
   }
}*/
/*button.addEventListener("click", (e)=>{ 
e.preventDefault();

if(namm.value==="" ||imagee.value==="" || description.value===""){
    var newItem = document.createElement("LI");       // Create a <li> node
var textnode = document.createTextNode("Water");  // Create a text node
newItem.appendChild(textnode);                    // Append the text to <li>

var list = document.getElementById("myList"); 
list.insertBefore(newItem, list.childNodes[0]);  // Insert <li> before the first child of <ul>

}
else{
const loocal= new Localstorage();
const nam=namm.value;
const  imagge=imagee.value;
const descripton=description.value;
const details=new Details(nam,imagge, descripton);
detailsArray.push(details);
loocal.setStorage();
 document.querySelector(".name").value="";
document.querySelector(".image").value="";
document.querySelector(".desc").value="";
}
})*/
document.addEventListener("DOMContentLoaded",()=>{
  checkOpenStatus();
  /*let loccal=JSON.parse(localStorage.getItem("detailarray"));*/
 /* daysofWeek.forEach((daay)=>{
    lii="";
    lii=document.createComment("li");
    lii=`<p class="list" style="text-align :center ; font-size:25px">${daay}10AM-12PM</p><span class="status"></span> `;
    const hil=document.getElementById("dayys");
    hil.innerHTML+=lii;  
  })*/
var xttp=new XMLHttpRequest();
xttp.onreadystatechange=function(){
  if(this.readyState==4 && this.status==200){
    var data=JSON.parse(xttp.responseText);
    
    
    const mappe=Object.values(data);
    console.log(mappe);
    console.log(mappe[0]);
    mappe.forEach((datta) => {
      for(var i=0; i<=datta.length; i++){
       roww=""
      roww=`
            <div class="col-lg-3 col-md-4 col-sm-4 col-centered ">
            <img src="lambStew.jpg" />
            <p>${datta[i].description}</p>
          <p>this is ${datta[i].name}</p>
            </div>
            `
  const ali=document.querySelector(".row");
    ali.innerHTML+=roww;
      }     
  })
}
}
xttp.open("Get","agelgil.JSON" ,true);
xttp.send();
  
})
bttn.addEventListener("click",(event)=>{
  event.preventDefault();
  console.log(bttn)
  
  const menubtn=document.querySelector("#row");
  menu.forEach((deta) => {
        
         roww=""
        roww=`
              <div class="col-lg-3 col-md-4 col-sm-4  ">
              <img src="lambStew.jpg" />
              <p>${deta.description}</p>
              very delicious food <br>
              very delicious food<br>
            <p>this is ${deta.name}</p>
              </div>
              `
    const mnu=document.querySelector("#row");
      mnu.innerHTML+=roww;
            
    })
    window.location.href="menupage.html";
})

const x=document.querySelector(".img2");
function addremove(z,y){
z.classList.add(y);
setTimeout(()=>{
  z.classList.remove(y);
}, 5000);

}





