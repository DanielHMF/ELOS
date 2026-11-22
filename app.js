// let ambiente_processo = 'producao';
let ambiente_processo = 'desenvolvimento';

let caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

let express = require("express");
let cors = require("cors");
let path = require("path");
let PORTA_APP = process.env.APP_PORT;
let HOST_APP = process.env.APP_HOST;

let app = express();

let usuarioRouter = require("./src/routes/usuarios");
let pessoaRouter = require("./src/routes/pessoas");
let grupoRouter = require("./src/routes/grupos");
let dashRouter = require("./src/routes/dash")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/pessoas", pessoaRouter);
app.use("/grupos", grupoRouter);
app.use("/dash", dashRouter)

app.listen(PORTA_APP, function () {
    console.log(`
            ######   ##        #####     ###### 
            ##       ##       ##   ##   ##    ##
            ##       ##       ##   ##   ##         
     #####  ####     ##       ##   ##    ######   #####      
            ##       ##       ##   ##         ##    
            ##       ##       ##   ##   ##    ##      
            ######   ######    #####     ######                      
    \n                                                                                                 
    Servidor do seu site já está rodando: http://${HOST_APP}:${PORTA_APP}
    \n
    Você está rodando sua aplicação no ambiente: ${process.env.AMBIENTE_PROCESSO}`);
});