exports.verifyJson = function(input){
   try {
      JSON.parse(input);
   } catch(ex){
      // invalid 
      return ex.message;
   }
   // valid 
   return false;
}