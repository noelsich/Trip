function bold_white(index) {
  var btn = document.getElementsByClassName("btn")[index];
  btn.style.borderColor = "rgb(43, 43, 43)";
  //btn.style.backgroundColor = "white";
  btn.style.fontSize = "20px";

  btn.addEventListener("mouseout", function() {
    btn.style.borderColor = "";
    // btn.style.backgroundColor='';
    btn.style.fontSize = "";
  });
}

 


//experiment



  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }



  //bellow is the number of seats code


  var number = 0;

  function increase() {
    number++;
    if (number < 10) {
      document.getElementById("number").innerHTML = "0" + number;
    } else {
      document.getElementById("number").innerHTML = number;
    }
  }
  
  function decrease() {
    number--;
    if (number < 0) {
      number = 0;
    }
    if (number < 10) {
      document.getElementById("number").innerHTML = "0" + number;
    } else {
      document.getElementById("number").innerHTML = number;
    }
    
  
  }
  
//below is the change image logic

function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.match("../images/Checked_Icon.png")) {
    image.src = "../images/Unselected Box.png";
    image.width="24";
    image.height="22";
   
  } else {
    image.src = "../images/Checked_Icon.png";
    image.width="30";
    image.height="24";
    
  }
  

}

//bellow shoul handle the sroll box click




 

