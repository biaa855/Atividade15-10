//let listraFiltrada =
//compre.tolowerCase().incloud
//

let users = ["pedro","Ana","Joana","Diego","Davi","Messias","critiano","pedro Renan","pedro Rocha","paula","Zacarias"];

let searchUser = prompt("Digiter o numero do usuario que deseja buscar");

//lembrando que, meu usuario adm nao pode mandar em branco a busca. chamamos isso de tratativa de erros.

if(searchUser === ""){
     console.log("não pode enviar em branco");
}
else{
    //Retorna o usuário que for encontrado
    let user = users.filter(user =>
        user.toLowerCase().includes(searchUser.toLowerCase().trim())
    );
    //Devemos tratar tabem caso a busca nao retorne nehum resultado

    if(user.length === 0){
        //Usuario nao encontrado
        console.log("user not found");
        users.push(searchUser)
        console.log(users);
    }
    else{
        console.log("Usuario encotrado: ".concat(user));
        //busca indice do usuario
        let index = users.indexOf(user)
        console.log(index)
        //altera o elemento
        //users[index] = "Ana Gabriele";
        //users.splice(3,1)
        users[index] = "novo valor"
        console.log(users)


        users.forEach(user => {
            //read
          console.log(user)
        });
    }
}