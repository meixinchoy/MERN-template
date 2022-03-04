// Import all dependencies & middleware here
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { userController } from './controller';
const dbConfig = require('./config/db')
const router= require("./routes/index")

// Init an Express App.
const app = express();

//connect to mdb atlas
// dbConfig.connectMDB()

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

// router.route("/getData").get(function (req, res) {
//     detail.find({}, function (err, result) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

// app.use('/', userController);
// app.get('/', (req, res) => {
//     res.status(200).json({
//         status: 'success'
//     });
// });


// Start Anything here
app.listen(3000, () => {
    console.log(`App listening on port 3000!`);
});

// app.listen(3000, () => {
//     console.log(`Started successfully server at port ${port}`);
//     mongoose.connect('mongodb://localhost/test').then(() => {
//         console.log(`Conneted to mongoDB at port ${port}`);
//     });
// });