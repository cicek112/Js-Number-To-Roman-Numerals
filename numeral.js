function convertToRoman(num) {


    let rakam={
      "M":1000,
      "CM":	900,
       "D"	:500,
       "CD":	400,
       "C" :	100,
       "XC"	:90,
       "L"	:50,
     " XL":	40,
     "X"	:10,
     "IX"	:9,
     "V"	:5,
     "IV"	:4,
     "I"	:1
    };
   
     let res="";
     while (num>0){
   
       let x=rakam;
       let arr = Object.values(x);
       let max = Math.max(...arr);
   
       if (max>num){
         let y=Object.keys(rakam);
         
         let s=y[0];
   
         delete rakam[s];
         
         
       }
       else {
         num=num-max;
   
         let liste = (rakam);
         
   
         function getKeyByValue(object, value) {
           return x= Object.keys(object).find(key => object[key]   === value);
       }
   
         getKeyByValue(rakam,max);
         
         res=res+x;
        
       
       }
      
   
   
     
   
      
     }
   res=res.trim();
   res=res.replace(" ","");
   return res;
   
   
   }
   
   convertToRoman(44);