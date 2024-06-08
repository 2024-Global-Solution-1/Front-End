
function spanValor(valor, idMedida, number){


    let valorSpan = document.querySelector("#rangeValor"+ number);
    
    if (idMedida == "kWh"){

        valorSpan.textContent = valor + " kWh";
    } else if (idMedida == "Km"){
        valorSpan.textContent = valor + " Km";

    }
}

/////////////////////


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