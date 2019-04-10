/**
 * Define Middle Ware Here
 * import bodyParser from 'body-parser'
 */

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
    })
/**
 * Use Middleware in Express Apps
 * app.use(bodyParser.json())
 */
