# Project: Password Validation

## Student Information
- **Name: Justine Ivanne U. Antonio**
- **Student Number: 2023-08901**

## Project Description
This project implements a password validation and storage system using JavaScript. The program consists of three main functions:

1. **validatePassword(string1, string2)**
   - Checks if the provided passwords match and meet security requirements:
     - Must be at least 8 characters long
     - Must contain at least one uppercase letter
     - Must contain at least one lowercase letter
     - Must contain at least one numeric character
   - Returns `true` if valid, otherwise `false`.

2. **reversePassword(password)**
   - Reverses the input password and returns the reversed string.

3. **storePassword(name, password1, password2)**
   - Validates the password using `validatePassword`.
   - If the password is valid, it stores the reversed version.
   - If the password is invalid, it stores the original password.
   - Returns an object containing the user’s name and stored password.

## Example Usage
```javascript
console.log(storePassword("John", "Pass1234", "Pass1234"));
// Output: { name: "John", newpassword: "4321ssaP" }
```


