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


count = 0;
function dadi(){
    document.getElementById("dadi").style.visibility = "visible";
    var player = Math.floor(Math.random() * 6) + 1;
    var pc = Math.floor(Math.random() * 6) + 1;
    console.log(player , pc);
    var utente = document.querySelector('.dadoutente');
    var p1 = document.createElement('p');
    p1.id = ('remove1');
    var risutente = document.createTextNode(player);
    p1.appendChild(risutente);
    utente.appendChild(p1);
    var computer = document.querySelector('.dadopc');
    var p2 = document.createElement('p');
    p2.id = ('remove2');
    var rispc = document.createTextNode(pc);
    p2.appendChild(rispc);
    computer.appendChild(p2);
    count += 1;
    console.log("count",count);
    if (count > 1){
        var x = document.getElementById("remove1")
        var y = document.getElementById("remove2");
        y.remove();
        x.remove();
    }

    if (player>pc){
        document.getElementById("vincitore").innerHTML = "HAI VINTO!!!";      
    }
    else if(pc>player){
        document.getElementById("vincitore").innerHTML = "SEI STATO SFORTUNATO:HAI PERSO!!!";
    }
    else{
        document.getElementById("vincitore").innerHTML = "QUESTA VOLTA è FINITA IN PAREGGIO!!!";
    }
}


function rimuovi(){
    var x = document.getElementById("remove1")
        var y = document.getElementById("remove2");
        y.remove();
        x.remove();
        count = 0;
}

