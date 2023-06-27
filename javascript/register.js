function bol_white(index) {
  var type_in = document.getElementsByClassName("type_in")[index];
  type_in.style.borderColor = "rgb(43, 43, 43)";
  type_in.style.border="2px"
  //type_in.style.backgroundColor = "white";
  
  type_in.addEventListener("mouseout", function() {
    type_in.style.borderColor = "";
    // type_in.style.backgroundColor='';
  
  });
 
  }

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
      btn.addEventListener("mousedown", function() {
          /*btn.style.fontSize = "";*/
          btn.style.borderColor = "";})
      }
    
  
      
  