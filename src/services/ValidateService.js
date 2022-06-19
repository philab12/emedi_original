export default class ValidateService {
    static isEmpty(value){

        if(value == "") return true 
        else return false;   

    }


    static isString(value){

        if (value.match(/^$|^[a-zA-Z]([a-zA-Z0-9./? ])+$/)) return true 
        else return false;   
    }



    static isNum(value){
        if(value.match(/^[0-9+]+$/)) return true;
        else return false;
    }


    static isValidEmail(value){

     //let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) return true 
        else return false;   
    }

    static isMax(value,num){
        if(value.length > num) return true
        else return false;
    }



    static reqPassword(value){
        if(value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)) return true
        else return false
    }
}