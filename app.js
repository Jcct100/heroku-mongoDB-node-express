const express = require("express");
const app = express();
const router = require("./routes/principles");

app.use(express.static(__dirname + "/client"));
app.use("/", router);

// Set up PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
