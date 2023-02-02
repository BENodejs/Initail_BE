import app from "../src/config/app"
const PORT=4444
app.listen(PORT, ()=> {
    console.log("server is running on the port "+PORT)
})