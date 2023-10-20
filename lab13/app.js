const express = require("express");
const studentRouter = require("./router/StudentRouter");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/students', studentRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Something broke! ' + err.message });
});

app.listen(port, () => {
    console.log('Running at Port ' + port);
});