
const express = require("express");
const db = require('./database/db');
const cors = require('cors');
const { userRoute } = require("./route/userRoute");
const { proRoute } = require("./route/productRoute");
const { adminRoutes } = require("./route/adminRoutes");

const app = express();
app.use(cors());

app.use(express.json());
app.use('/app/v1' , userRoute);
app.use('/app/v1/product',proRoute);
app.use('/app/v1/admin',adminRoutes);



app.listen(3000,
    console.log(`Server is running in 3000 `)
)
