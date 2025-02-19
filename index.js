const account = {
    name: '',
    newpassword: '',
}


function validatePassword(string1,string2){

    let hasUpper = false;
    let hasNumeric = false;
    let hasLower = false;
    let character = '';
    if((string1.length != string2.length)){
        if(string1.length < 8){
            return false;
        }
    }

    if(string1 != string2){
        return false;
    }

    for(let a = 0; a < string1.length; a++){
        character = string1[a]
        // console.log(character);
        // console.log(typeof(character));
        

        if(!Number.isNaN(character)){
            // console.log("has Number")
            hasNumeric = true;
         
        }
        
        if(string1.charAt(a) === string1.charAt(a).toLowerCase()){
                hasLower = true;
                // console.log("has lower")
          
        }
        if(string1.charAt(a) === string1.charAt(a).toUpperCase()){
                hasUpper = true;
                // console.log("has Upper")
           
        }
    }

    if(hasUpper && hasLower && hasNumeric){
        return true
    }

}



if(validatePassword("helloworld","hello")){
    console.log("true")
}else{
    console.log("false")
}

if(validatePassword("hello","hello")){
    console.log("true")
}else{
    console.log("false")
}


if(validatePassword("hello1234","hello1234")){
    console.log("true")
}else{
    console.log("false")
}

if(validatePassword("Hello1234","Hello1234")){
    console.log("true")
}else{
    console.log("false")
}

if(validatePassword("HELLO1234","HELLO1234")){
    console.log("true")
}else{
    console.log("false")
}
