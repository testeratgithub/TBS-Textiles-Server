const pg = require('pg')

const client  = new pg.Client({
    port:5432,
    password:"8ECk8h0Ag5Ru8bjVmz9JJs3eGDCLzaW8",
    database:"test",
    host:"dpg-cm66soa1hbls73anfdag-a.singapore-postgres.render.com",
    user:"test",
    ssl:true
  })
  
  client.connect((err,db,done)=>{
    if (err){
      return console.log(err);
    }
    else{
      db.query('select * from cars',(err,table)=>{
        if (err){
          return console.log(err)
        }
        else{
          console.table(table.rows)
        }
      })
    }
  })