import * as fs from 'fs';
export default function handler(req, res) {
    console.log(req.query.slug)
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
    // console.log(data) 
    if(err){
        res.status(500).json({error:"no such blog found"})
    
    }
    else{
        console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
    }
 
  })
}
