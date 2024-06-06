const btnLogin = document.querySelector("#logar")
const btnFecharLogin = document.querySelector("#btnFechar1")
const modalLogin = document.querySelector("#login")


btnLogin.addEventListener('click', ()=>{
    modalLogin.showModal();
})
btnFecharLogin.addEventListener('click', ()=>{
    modalLogin.close();
})

const btnTipos = document.querySelector("#cadastrar")
const btnFecharTipos = document.querySelector("#btnFechar2")
const modalTipos = document.querySelector("#tipoCadastro")

btnTipos.addEventListener('click', ()=>{
    modalTipos.showModal();
})
btnFecharTipos.addEventListener('click', ()=>{
    modalTipos.close();
})