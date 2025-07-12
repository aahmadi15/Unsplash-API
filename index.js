import * as express from 'express'
import {config} from 'dotenv'
import http from 'http';
import fsp from 'fs/promises'
import url from 'url';
//built in modules
import path from "path";
import fetch from "node-fetch"
import {createApi} from "unsplash-js"
import {user} from './middleware/db.js';

//import { json } from 'body-parser';
//import { mongoose } from 'mongoose';

//const app = express();
// directly reassign router variable or else you will get a very interesting stack error on the backend
//always remember - imports and exports that are of type module require single quotes not double
// also remember that you need to encapsulate everything in a container as seen above

config({path: ".env"});

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatePath = path.join(__dirname, '../middleware/templates')
const port = createApi({port: process.env.PORT});
const mongourl = process.env.MONGO_URL;
global.fetch = fetch

//const unsplash = createApi({baseURL: 'https://api.unsplash.com', headers: {Authorization: `Client-ID ${process.env.ACCESS_TOKEN}`}});
const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.ACCESS_TOKEN}`
//let getRandom = unsplash.photos.getRandom().response?.results[0].urls.raw;


//mongoose.model(Tenant, schema, 'tenant');
//console.log(unsplash);

//const photos = await unsplash.search.getPhotos({query: "tiger"});
//const outputFile = path.join(process.cwd(), "photos.json") //this is to create a photos.json file
//console.log(JSON.stringify(photos, null, 2));
//fs.writeFileSync(outputFile, JSON.stringify(photos, null, 2));

//const rawURL = photos.response?.results[0].urls.raw;
//const squareUrl = `${rawURL}&fit=crop&w=800&h=700`;

console.log(`your port is ${process.env.PORT}`);
console.log (__dirname);
//console.log(squareUrl);

/*console.log(getRandom);*/

//app.set("views", templatePath);

const server = http.createServer(async(req,res) => {
    try {
        if (req.method === 'GET'){
            let filePath;
            if (req.url === '/')
            {
                filePath = path.join(__dirname, 'public', 'index.html');
        const data = await fsp.readFile(filePath); /*We changed it from fs -> fsp as this was an asynchronous call back*/
        await fsp.writeFile("data.json", JSON.stringify(data)); /*This was needed for the fetch function specifically*/
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    }
}
else {
    throw new Error ('not found');
}
    } catch (error)
    {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        console.log(error)
        res.end('Server Error');
    }
});

    //let imageElement = document.querySelector('#unsplash-image');
    //let imageLink = document.querySelector('#imageLink');
    //console.log(document.getElementById(imageElement))

   /* async (req, res) =>{
        let data = new mongoose({
            api: jsonData.urls.data 
        })
        https.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.ACCESS_TOKEN}`, function (response){
        response.on('data', d => {
            data.push(d);
        }).on('error', e=>{
            console.log(e);
        });
        
        let output;
        response.on('end', ()=>{
            let fetchedData = jsonData//JSON.parse(Buffer.concat(data).toString());
            console.log(fetchedData);
            let result = new Data({
                API:fetchedData.urls.regular
            })
            result.save().then(()=>{
                    console.log('Entry Saved');
                })
                .catch(err=> {
                    console.log(err);
                });
                res.send(result);
        })
        
    })};*/
var x, y, z
        fetch(endpoint)
            .then((response) => response.json())
            .then((jsonData) => {x = jsonData.urls.regular, y = jsonData.description
                z = jsonData.user.name
                console.log(jsonData.urls.regular)
                console.log (jsonData.description)
                console.log(jsonData.user.name)
            })

            
                    .then (()=>{
                        console.log('document saved')
                        const newUser = new user({name: z, urls: x,
                            description: y})
                        newUser.save()
                    })
                    .catch((err) => {
                        console.log("Document Saved Unsuccessfully")
                        console.log(err)
                    })
               

    
    .catch(function (error) {
        console.error(error);
    });

    (async () =>{
        data = await newUser.save()}
    );
    
server.listen(`${process.env.PORT}`, ()=> {
    console.log(`Listening at http://localhost:${process.env.PORT}`)
})
 