const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json);
app.use(express.static('public'));

const professionalData = {
    professionalName: "Ami Halsey",
    primaryDescription: "Ami and Jacob Halsey in their last year of College at BYU-Idaho",
    workDescription1:"Web Design and Development Major at BYU-Idaho",
    workDescription2:"I work as a TA for the class Web Fundamentals at BYU-Idaho",
    linkTitleText:"Connect with me!",
    linkedInLink:"http://linkedin.com/in/ami-cross-halsey/",
    gitHubLink:"https://github.com/ameliarose003",
    contactText:"Tel: (425) 563 - 4206"
};

app.get('/professional', (req, res) => {
    res.json(professionalData);
})

app.listen(port, () => {
    console.log(`Listening from http://localhost:${port}`);
})