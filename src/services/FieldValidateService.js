import ValidateService from "./ValidateService";
export default class FieldValidateService {

    static reqVal(value,field){
       if(ValidateService.isEmpty(value)){
            return `${field} Is Required`;
        }else{
            return false;
        }
    }




    static reqValSearch(value, field){
        if(ValidateService.isEmpty(value)){
            return `${field} Is Required`;
        }
        else if(!ValidateService.isValidEmail(value) &&
        !ValidateService.isNum(value)){

           return `${field} Requires A Number / Enter The Email In A Correct Format`;

        }else {
            return false;
        }
    }




   

     static onlyMaxVal(value,field,max){
     if(ValidateService.isMax(value,max)){
         return `${field} Has Exceeded required number of characters`;
     }else{
         return false;
     }
    }


    static onlyMaxStringVal(value,field,max){
        if(ValidateService.isMax(value,max)){
            return `${field} Has Exceeded required number of characters`;
        }

            
    else if(!ValidateService.isString(value)){
        return `${field} Should Be A String`;
    }
        
        else{
            return false;
        }
       }





     static reqMaxVal(value,field,max){
        if(ValidateService.isEmpty(value)){
            return `${field} Is Required`;
        } 
        else if(ValidateService.isMax(value,max)){
            return `${field} Has Exceeded required number of characters`;
        }else{
            return false;
        }
    }




    static reqMaxStringVal(value,field,max){
        if(ValidateService.isEmpty(value)){
            return `${field} Is Required`;
        } 
        else if(ValidateService.isMax(value,max)){
            return `${field} Has Exceeded required number of characters`;
        }

        else if(!ValidateService.isString(value)){
            return `${field} Should Be A String`;
        }
        
        
        else{
            return false;
        }
    }


    static onlyNum(value, field){

        if(!ValidateService.isNum(value)){
            return `${field} Should Contain Only Numbers`;
        }else{
            return false;
        }

    }


    static reqValNum(value,field){

        if(ValidateService.isEmpty(value)){
            return `${field} Is Required`;
        } 

        else if(!ValidateService.isNum(value)){
            return `${field} Should Contain Only Numbers`;
        }else{
            return false;
        }

    }




    static reqMaxNumVal(value,field,max){
        if(ValidateService.isEmpty(value)){
            return `${field} Is Required`;
        } 
        else if(ValidateService.isMax(value,max)){
            return `${field} Has Exceeded required number of characters`;
        }

        else if(!ValidateService.isNum(value)){
            return `${field} Should Contain Only Numbers`;
        }
        
        
        else{
            return false;
        }
    }



    
    static onlyString(value, field){

        if(!ValidateService.isString(value)){
            return `${field} Should Be A String`;
        }else{
            return false;
        }

    }




    static reqValString(value,field){

        if(ValidateService.isEmpty(value)){
            return `${field} Is Required`;
        } 

        else if(!ValidateService.isString(value)){
            return `${field} Should Be A String`;
        }else{
            return false;
        }

    }


   static onlyEmail(value,field){

    if(!ValidateService.isValidEmail(value)){
        return `${field} Should Be In Correct Format`;
    } 

  else{
        return false;
    }

   } 



   static reqValEmail(value,field){

    if(ValidateService.isEmpty(value)){
        return `${field} Is Required`;
    } 

    else if(!ValidateService.isValidEmail(value)){
        return `${field} Should Be In Correct Format`;
    } 

  else{
        return false;
    }

   } 
    
      
   static reqValPassword(value, field){

    if(ValidateService.isEmpty(value)){
        return `${field} Is Required`;
    } 

    else if(!ValidateService.reqPassword(value)){
        return `${field} Should Be  In Correct Format ( SHOULD CONTAIN MORE SIX(6) CHARACTERS AND ABOVE, SHOULD HAVE ATLEAST A CAPITAL LETTER, SHOULD HAVE AT LEAST A SPECIAL CHARACTER, SHOULD HAVE AT LEAST A NUMBER, SHOULD HAVE AT LEAST A LETTER )`
    }else{
        return false;
    }

   }


   static valPasswordConfirm(conf_pass,pass){

    if (conf_pass != pass) {
        return `This Password Confirmation Should Match Password `;
      } else {
          return false;
      }

   }

}