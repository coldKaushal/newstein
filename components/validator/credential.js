

export function SignUpValidation(email, confEmail, password, confPassword){
    if(email.length>=3 && email.includes('@') && password.length>6 && email===confEmail && password===confPassword )
        return true;
    return false;

}

export function SignInValidation(email, password){
    return email.length>=3 && email.includes('@') && password.length>6;
}