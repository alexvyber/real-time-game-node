import { http } from "./server"
import { config } from "dotenv"
import { onListen } from "./lib"

config()

const port = process.env.PORT || 3000
http.listen(port, () => onListen(port))
