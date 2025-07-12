import { response } from 'express';
import https from 'https'
import {mongoose} from 'mongoose'
import * as index from '../index.js'
const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.ACCESS_TOKEN}`
import axios from 'axios'

mongoose.connect('mongodb://localhost:27017/dbconnect')
.then(()=>{
    console.log("mongodb connected")
})
.catch ((error)=> console.log(error))


//schema
const API = new mongoose.Schema ({
        name: {
            type: String
        },
        urls: {
            type: String
        },
        description: {
            type: String
        }
});

const user = new mongoose.model("User", API)

 //need this side by side to the model in order to create the collection specifically.


/*async function getData() {
    const res = await fetch(endpoint);
    const data = await res.json();

    try{
        //const insert = await newUser.save(response.data);
        //console.log(insert);
        //process.exit(0);
        //const res = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.ACCESS_TOKEN}`);
        //const data = await res.data;
        //process.exit(0);

        
            /*newUser = new user({
                /*name: {
                    firstname: `${res.random.name.first}`,
                    lastname: `${res.random.name.last}`,
                    username: `${res.random.login.username}`,
                },
                urls: {
                    raw: `${res.urls}`
                },
                description: {
                    description: `${res.description}`
                }
                
            })
            console.log(newUser);
            await newUser.save();
        
    } catch(e){
        console.log("some error");
        console.log(e);
        process.exit(0);
    }
}

getData();

*/
/*newUser.save()
.then (()=>{
    console.log('document saved')
})
.catch((err) => {
    console.log("Document Saved Unsuccessfully")
})*/

export {user} 


/**  */