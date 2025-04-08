import { faker } from '@faker-js/faker';
import mysql from 'mysql2';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '1234'
});

try{
    connection.query("SHOW TABLES", (err,result) => {
        if(err) throw err;
        console.log(result);
    })
}catch (err){
    console.log(err);
}
connection.end();

let getRandomUser = ()=> {
    return {
      indexedDBd: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
}
