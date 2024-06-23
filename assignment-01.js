var numred=0;
function incrementRed( ) {
   numred++;
   checkRed(numred);
   document.getElementById("textred").value =numred;
  }

  function decrementRed() {
   if (numred>0) {
    numred--;
    checkRed(numred);
    document.getElementById("textred").value =numred;
   }

  }
  function checkRed(num)
  {
    if(num>0 )
    {
      document.getElementById("textred").style.background="red";
    }
    else{
      document.getElementById("textred").style.background="white";
    }
  }
  var numorange=0;
function incrementOrange( ) {
   numorange++;
   checkOrange(numorange);
   document.getElementById("textorange").value =numorange;
  }
  function decrementOrange() {
   if (numorange>0) {
    numorange--;
    checkOrange(numorange);
    document.getElementById("textorange").value =numorange;
   }

  }
  function checkOrange(num)
    {
      if(num>=1 )
      {
        document.getElementById("textorange").style.background="orange";
      }
      else{
        document.getElementById("textorange").style.background="white";
      }
    }
  var numyellow=0;
  function incrementYellow( ) {
    numyellow++;
    checkYellow(numyellow);
     document.getElementById("textyellow").value =numyellow;
    }
    function decrementYellow() {
     if (numyellow>0) {
        numyellow--;
        checkYellow(numyellow);
      document.getElementById("textyellow").value =numyellow;
     }
  
    }
    function checkYellow(num)
    {
      if(num==2 )
      {
        document.getElementById("textyellow").style.background="yellow";
      }
      else{
        document.getElementById("textyellow").style.background="white";
      }
    }
    var numblue=0;
    function incrementBlue( ) {
        numblue++;
        checkBlue(numblue);
       document.getElementById("textblue").value =numblue;
      }
      function decrementBlue() {
       if (numblue>0) {
        numblue--;
        checkBlue(numblue);
        document.getElementById("textblue").value =numblue;
       }
    
      }
      function checkBlue(num)
      {
        if(num==3 )
        {
          document.getElementById("textblue").style.background="blue";
        }
        else{
          document.getElementById("textblue").style.background="white";
        }
      }
      var numbrown=0;
      function incrementBrown( ) {
        numbrown++;
        checkBrown(numbrown);
         document.getElementById("textbrown").value =numbrown;
        }
        function decrementBrown() {
         if (numbrown>0) {
            numbrown--;
            checkBrown(numbrown)
          document.getElementById("textbrown").value =numbrown;
         }
      
        }
        function checkBrown(num)
        {
          if(num>=3 &&num<=5)
          {
            document.getElementById("textbrown").style.background="brown";
          }
          else{
            document.getElementById("textbrown").style.background="white";
          }
        }
        var numgreen=0;
        function incrementGreen( ) {
            numgreen++;
            checkGreen(numgreen);
           document.getElementById("textgreen").value =numgreen;
          }
          function decrementGreen() {
           if (numgreen>0) {
            numgreen--;
            checkGreen(numgreen);
            document.getElementById("textgreen").value =numgreen;
           }
        
          }
          function checkGreen(num)
          {
            if(num>=5 &&num<=7)
            {
              document.getElementById("textgreen").style.background="green";
            }
            else{
              document.getElementById("textgreen").style.background="white";
            }
          }
          function valDate(inputdate)
          {
            var dateReg = /^\d{2}([-])[A-Z]{3}([-])\d{4}$/

           if(inputdate.match(dateReg))  // matches
            {
                return true;
            }
            else{
               return false;
            }
          }
          function EnterDate(){
            
        //     const date = new Date(); 
        //     const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        //     "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        //   ];
          
        //     let year= date.getFullYear(); 
        //     let day= date.getDate(); 
        //     let month=  monthNames[date.getMonth()];
            
          
            let dateinput=document.getElementById("inputdate").value;
           if(valDate(dateinput))
           {
            document.getElementById("date").innerHTML ="["+dateinput+"]";
           } 
           else{
            document.getElementById("date").innerHTML ="[INVALID]";
           }
           
            //document.getElementById("date").innerHTML ="["+day+"-"+month+"-"+year+"]";
            
        }
      