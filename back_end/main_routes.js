const {routeJWT}  =  require('./routes/r_jwt');
const {routeClient} = require("./routes/r_client")
module.exports.appRoutes = [
    ...routeJWT,
    ...routeClient
]