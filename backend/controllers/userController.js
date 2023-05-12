const User = require('../models/User');
const csv = require('csvtojson');
'use strict';
const excelToJson = require('convert-excel-to-json');



const importUser = async(req,res)=>{
    try{
        
       var userData = [];
      var result=excelToJson({
            sourceFile:req.file.path ,
            header:{
                rows: 1 
            },
            columnToKey: {
                B: 'Name',
                I: 'Email',
                J: 'Mobile'
            }
        })
       
       result = result.Sheet1;
            for(var x=0;x<result.length;x++){
                userData.push({
                 name: result[x].Name,
                 email:result[x].Email,
                 mobile: result[x].Mobile
                }
                )
            }
          
            await User.insertMany(userData);
 
       
 /*        console.log(result);
       

        for(var x=0;x<result.length;x++){
            userData.push({
             name: result[x].Name,
             email:result[x].MailId,
             mobile: result[x].MobileNo
            }
            )
        }

        await User.insertMany(userData);
     res.send({status:200, success:true,msg:'csv imported'})

      var userData = [];

        csv()
        .fromFile(req.file.path)
        .then(async (response)=>{
           for(var x=0;x<response.length;x++){
               userData.push({
                name: response[x].Name,
                email:response[x].MailId,
                mobile: response[x].MobileNo
               }
               )
           }

           await User.insertMany(userData);

        })
         */
        res.send({status:200, success:true,msg:'csv imported'})
       
    }catch(error){
        res.send({status:400, success:false,msg:error.message})
    }
}

module.exports = {
    importUser
}