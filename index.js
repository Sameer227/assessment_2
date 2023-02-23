const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");
const router = require("./routes");
app.use(fileupload());
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
const PORT = process.env.PORT || 3000




app.use('/api',router)



app.listen(3000,console.log(`server is runnong on PORT ${PORT}`))