import * as fs from 'fs';
export default  async function handler(req, res) {
    if (req.method === 'POST') {
        let data= await fs.promises.readdir('contactdata')
        console.log(data)

        fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body))
        // res.status(200).json("data added sucessfully")
      // Process a POST request
      console.log(req.body)
      res.status(200).json(["post request data"])

    } else {
      // Handle any other HTTP method
      res.status(200).json("post contact data")
    }
  }