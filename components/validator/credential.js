
export function EmailValidator(email){
    return email.length>=3 && email.includes('@')
}

export function PasswordValidator(password){
    return password.length>6;
}

export function SignUpValidation(name, email,confEmail, password, confPassword){
    if(name!=="" && EmailValidator(email) && confEmail===email && PasswordValidator(password) && password===confPassword )
        return true;
    return false;

}

export function SignInValidation(email, password){
    return EmailValidator(email) && PasswordValidator(password);
}