function mail(){
    const mail = [
        "ciao@123.com" ,
        "provamail@mail.com" ,
        "provamail2@mail.com" ,
    ]
    
    console.log(mail);
    var check = 0;
    const usermail = prompt("inserisci la tua mail");
    console.log(usermail);
    
    for (let i = 0; i < mail.length; i++){
        console.log(mail[i]);
        if (mail[i] == usermail){
            var check = 1;
        }
    }
    console.log(check);
    
    if (check == 1){
        document.write("La tua mail risulta essere associata al sito")
    }
    else if (check == 0){
        document.writeln("La tua mail non è associata")
    }   
}

function dadi(){
    var player = Math.floor(Math.random() * 6) + 1;
    var pc = Math.floor(Math.random() * 6) + 1;
    console.log(player , pc);
    var utente = document.querySelector('.dadoutente');
    utente.id = player;
}