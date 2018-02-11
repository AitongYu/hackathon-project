function sendToPage(){
    var string1 = document.getElementById('SearchBox').value;
    var string=string1.toLowerCase();
    //separate into different catagories
    var catagory1=["plastic", "bottle", "jug", "container"];
    var catagory2=["paper", "book", "board", "mail", "poster","magazine"];
    var catagory3=["aluminum", "steel", "can", "metal"];
    var catagory4=["glass"];
      
      if (catagory1.find(catagory => string.includes(catagory))){
          location.href = "ay-index.html";
          alert('IT\'S RECYCLABLE!')
      }
      else if(catagory2.find(catagory => string.includes(catagory))){
          location.href = "paper.html";
          alert('IT\'S RECYCLABLE!')
      }
      else if(catagory3.find(catagory => string.includes(catagory))){
           location.href = "metal.html";
           alert('IT\'S RECYCLABLE!')
      }
      else if(catagory4.find(catagory => string.includes(catagory))){
            location.href = "glass.html";
            alert('Only clear, blue, or green glass is recyclable.')
      }
      else if(!(string.length===0)){
            alert('The item you typed is not recognized as recyclable.  Try Again!')
      }


     

      
     

      
   
      
              
}