import { verificarPalavra } from "./script.js";

let falhas = 0;

function testar(palavra, esperado) {
    if (verificarPalavra(palavra) === esperado) {
        console.log(`passou ${palavra}`);
    }else{
        console.error(`não passou ${palavra}`);
        falhas++;
    }      
}

// casos de teste

testar("banana", true);
testar("abacaxi", false);
testar("uva", false);
testar("abacate", false);
testar("laranja", false);
testar("manga", false);
testar("kiwi", false);
testar("melancia", false);
testar("pera", false);
testar("pessego", false);

