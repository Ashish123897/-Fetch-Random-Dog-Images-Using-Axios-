import express from "express";
import bodyparser from "body-parser"; 
import axios from "axios";
const app=express();
app.get("/",
    (req,res)=>
    {
    res.render("index.ejs");
}
)
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.post("/sumbit",async (req,res)=>
{
    try
    {
        const result= await axios.get(`https://random.dog/woof.json`);
        const rex=result.data.url;
        res.render("index.ejs",
            {
                data:rex,
            }
    );   
}
    catch(error)
    {
        console.log(error);
    }
});
app.listen(3000,()=>
{
    console.log("server running");
})