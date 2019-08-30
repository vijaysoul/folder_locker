
const cmd=require('node-cmd');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#add').addEventListener('click', add)
 
  })
  
  const add = () =>{
  
    var x = document.getElementById("myFile").files[0].path
    
    console.log(x);

 


    cmd.get(
        `attrib +s +h `+x+`
       `,
        function(err, data, stderr){
            console.log('the current dir contains these files :\n\n',data)
        
        }
    );
  }
