module.exports = (()=>{
    return{
        db: {
            ip: process.env.MONGODBIP,
            user: process.env.USERATLAS,
            password: process.env.PASSWORD,
            port: 10255,
            option: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            namedb: 'Examples',
            info: '?retryWrites=true&w=majority',
            MAXPOOL: process.env.MAXPOOL,
            MINPOOL: process.env.MINPOOL,
            MAXTIME: process.env.MAXTIME,
        }
    }
})();