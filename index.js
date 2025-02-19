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
        if(character >= '0' && character <= '9'){
            // console.log("has Number")
            hasNumeric = true;
            continue;
        }
        if(string1.charAt(a) === string1.charAt(a).toLowerCase()){
                hasLower = true;
                // console.log("has lower")
                continue;
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

function reversePassword(password){
    let reversedPassword = "";
    for(let a = password.length-1; a>=0; a--){
        reversedPassword = reversedPassword.concat(password[a]);
    }
    return reversedPassword;
}   


console.log(reversePassword("ivanne"))
console.log('ennavi' === reversePassword("ivanne"))