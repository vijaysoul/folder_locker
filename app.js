const sqlite = require('sqlite3').verbose();
const cmd=require('node-cmd');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#add').addEventListener('click', add)
 
  })
  
  const add = () =>{
    let db = new sqlite.Database('/db/locker.db');
    var x = document.getElementById("myFile").files[0].path
    
    console.log(x);
    
db.run('INSERT INTO path(name) VALUES ' +x, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Rows inserted ${this.changes}`);
});
 
// close the database connection
db.close();

    cmd.get(
        `attrib +s +h `+x+`
       `,
        function(err, data, stderr){
            console.log('the current dir contains these files :\n\n',data)
        
        }
    );
  }
