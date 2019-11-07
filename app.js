const path = require("path"),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    sequelize = require('sequelize'),
    methodOverride = require('method-override'),
    handlebars = require('express-handlebars')
    .create({
        defaultLayout: "main",
    });

const app = express();
const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname + '/public');
app.use(express.static(publicDirPath));
app.use(methodOverride("_method"));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', './server/views');
app.use(bodyParser.urlencoded({
    extended: false
}));

require("./server/routes/routes")(app);

app.listen(port, () => {
    console.log(`Server starter on port ${port}`);
});