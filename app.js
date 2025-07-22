import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarEPopularTabelaUsuario(nome, sobrenome){
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    })

    db.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT)'); /* 
    --> Tentei colocar apenas com varchar. Mas pelo o que eu li, o sqlite3 interpreta o varchar da mesma forma de um text.
    --> INTEGER funciona como um INT, mas pelo o que eu vi, com ele dá para fazer auto_increment sem precisar declarar o mesmo*/

    db.run('INSERT INTO usuarios (nome, sobrenome) VALUES(?,?)', [
    nome, 
    sobrenome,
    ]);

}

criarEPopularTabelaUsuario('Caio', 'Garcia')