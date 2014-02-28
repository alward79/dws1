
(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
		
		//An HTML form containing fields has been provided to you in the index.html file. 
		//The fields on the form are as follows:
        var firstName = document.getElementById("fname"); 
        var lastName = document.getElementById("lname");
        var email = document.getElementById("email");

        validateField(fname);  //id = is the form input field ID
        validateField(lname);
        validateField(email);

        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){   

        if (inputName.name === "fname"){  
            var pattern = /^([A-Z]+[a-zA-Z]*)(\s|\-)?([A-Z]+[a-zA-Z]*)?(\s|\-)?([A-Z]+[a-zA-Z]*)?$/;
           
        }else if(inputName.name === "lname"){    
          var pattern = /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/;;
		  
        }else if(inputName.name === "email"){  
           var pattern = /^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$/;
		}
		
		// regex test code
        var pass = pattern.test(inputName.value);   
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;  
		
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper