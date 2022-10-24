// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
    let data = await fs.promises.readdir(`blogdata`);
    let file;
    let allBlogs = [];


    for (file of data) {
        let blog = await fs.promises.readFile(`blogdata/${file}`,"utf-8");
        blog = JSON.parse(blog);
        blog["slug"] = file.split(".")[0];
        allBlogs.push(blog);
    }
        // file = await fs.promises.readFile("blogdata/" + item,"utf-8");
        // allBlogs.push(JSON.parse(file));

    allBlogs = allBlogs.sort((a,b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB - dateA;
    })
    
    res.status(200).json(allBlogs);
}
