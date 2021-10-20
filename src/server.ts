import { serverHttp } from './app'

const PORT = 8080

serverHttp.listen(PORT, () => {
    console.log(`🔥 Server is running on PORT: ${PORT}`)
})