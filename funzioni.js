(function() {
  

 
  let el = function(element) {
    if (element.charAt(0) === "#") { 
      return document.querySelector(element); 
    }

    return document.querySelectorAll(element); 
  };

 
  let partenza = el("#partenza"),
    equals = el("#equals"),
    nums = el(".num"), 
    ops = el(".ops"), 
    theNum = "", 
    oldNum = "",
    resultNum,
    operator; 


  let setNum = function() {
    if (resultNum) {
      resultNum = "";
    } else { 
      theNum += this.getAttribute("data-num");
    }

    partenza.innerHTML = theNum; 

  };

 
  let moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); 
  };

 
  let displayNum = function() {

   
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

  
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

       
      default:
        resultNum = theNum;
    }

    
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { 
        resultNum = "You broke it!";
      } else { 
        resultNum = "Look at what you've done";
        el('#calculator').classList.add("broken"); 
        el('#reset').classList.add("show"); 
      }
    }

    
    partenza.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    
    oldNum = 0;
    theNum = resultNum;

  };

 
  let clearAll = function() {
    oldNum = "";
    theNum = "";
    partenza.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };


  for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

 
  for (let i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  
  equals.onclick = displayNum;

  
  el("#clear").onclick = clearAll;

  
  el("#reset").onclick = function() {
    window.location = window.location;
  };
}());