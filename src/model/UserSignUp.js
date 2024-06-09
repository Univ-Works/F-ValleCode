export class UserSignUp {
    constructor(
        codeAlumni, 
        email, 
        username, 
        names, 
        lastNames, 
        password, 
        role
        ) {
            this.codeAlumni = codeAlumni;
            this.email = email;
            this.username = username;
            this.names = names;
            this.lastNames = lastNames;
            this.password = password;
            this.role = role;
            this.status = "Habilitado"
    }
}