import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())

app.get("/api/recipe/search", async (req, res) => {
    res.json({message: 'success!'})
});

app.listen(5011, ()=> {
    console.log("server running on localhost:5005");
});