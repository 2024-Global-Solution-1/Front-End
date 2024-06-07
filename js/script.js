/*Partes de acesso do Login */
const btnLogin = document.querySelector("#logar");
const btnFecharLogin = document.querySelector("#btnFechar1");
const modalLogin = document.querySelector("#login");

btnLogin.addEventListener('click', ()=>{
    modalLogin.showModal();
});
btnFecharLogin.addEventListener('click', ()=>{
    modalLogin.close();
});


/*Parte de acesso do tipo de cadastro */
const btnTipos = document.querySelector("#cadastrar");
const btnFecharTipos = document.querySelector("#btnFechar2");
const modalTipos = document.querySelector("#tipoCadastro");

btnTipos.addEventListener('click', ()=>{
    modalTipos.showModal();
});
btnFecharTipos.addEventListener('click', ()=>{
    modalTipos.close();
});


/* Parte de acesso do cadastro do user*/
const btnUser = document.querySelector("#btn3");
const modalUser = document.querySelector("#cadastroUser");
const btnFecharUser = document.querySelector("#btnFechar3");

btnUser.addEventListener('click', ()=>{
    modalUser.showModal();
    modalTipos.close();
});
btnFecharUser.addEventListener('click', ()=>{
    modalUser.close();
});


/*Parte de acesso do cadastro de Empresa*/
const btnEmpresa = document.querySelector("#btn1");
const modalEmpresa = document.querySelector("#cadastroEmpresa");
const btnFecharEmpresa = document.querySelector("#btnFechar4");

btnEmpresa.addEventListener('click', ()=>{
    modalEmpresa.showModal();
    modalTipos.close();
});
btnFecharEmpresa.addEventListener('click', ()=>{
    modalEmpresa.close();
});


/*Parte de acesso do cadastro de Ong*/
const btnOng = document.querySelector("#btn2");
const modalOng = document.querySelector("#cadastroOng");
const btnFecharOng = document.querySelector("#btnFechar5");

btnOng.addEventListener('click', ()=>{
    modalOng.showModal();
    modalTipos.close();
});
btnFecharOng.addEventListener('click', ()=>{
    modalOng.close();
});

/*let modalCadastroRealizado = document.querySelector("#CadastroRealizado")

function cadastroRealizado(idTipo){
    if(idTipo == "pessoa"){
        let min = 1001;
        let max = 1999;
        IdPessoa = Math.floor(Math.random() * (max - min + 1));
        let modalFechar = modalUser;
    }
    else if(idTipo == "ong"){
        let min = 2001;
        let max = 2999;
        Idong = Math.floor(Math.random() * (max - min + 1));
        let modalFechar = modalOng;
    }
    else if(idTipo == "empresa"){
        let min = 3001;
        let max = 3999;
        IdEmpresa = Math.floor(Math.random() * (max - min + 1));
        let modalFechar = modalEmpresa;
    }

    modalCadastroRealizado.showModal();
    console.log("Não ta indo")
    return true
}

const btnFecharCadastroRealizado = document.querySelector("#btnFechar6");

btnFecharCadastroRealizado.addEventListener('click', ()=>{
    modalCadastroRealizado.close();
});

 // JavaScript para controlar o modal
 const modal = document.getElementById("meuModal");
 const span = document.getElementsByClassName("close")[0];
 const form = document.getElementById("meuForm");

 // Quando o usuário submete o formulário
 form.onsubmit = function(event) {
     event.preventDefault(); // Impede o envio padrão do formulário
     modal.style.display = "block"; // Mostra o modal
 }

 // Quando o usuário clica no X para fechar o modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Quando o usuário clica fora do modal para fechar
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }*/


