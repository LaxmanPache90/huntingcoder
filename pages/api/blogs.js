// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default async function handler(req, res) {

  const allBlogs=[]
  let data=await fs.promises.readdir("blogdata");
  // console.log(req.query.count)
  data=data.slice(0,parseInt(req.query.count))
  for (let index = 0; index < data.length; index++) {
    // console.log(data[index])
    const myfile=await fs.promises.readFile(('blogdata/'+data[index]),'utf-8')
    allBlogs.push(JSON.parse( myfile));
    
  }
  // console.log(allBlogs);
  res.status(200).json(allBlogs)
  // fs.readdir("blogdata",(err,data)=>{
  //   // console.log(data) 
  //   res.status(200).json(data)
  // })
 
}
