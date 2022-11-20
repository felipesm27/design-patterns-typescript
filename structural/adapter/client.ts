import isEmail from "validator/lib/isEmail"
const email = 'teste@teste.com.br'

if (isEmail(email)){
    console.log('é válido')
}else{
    console.log('é inválido')
}
