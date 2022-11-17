/*criação da base de dados dbagenda*/
create database dbagenda;

/*mostra as bases de dados existentes*/
show databases;

/*selecionamos a base de dados dbagenda*/
use dbagenda;

/*criação da tabela contatos*/
create table contatos(
	idcon int primary key auto_increment,
    nome varchar(50) not null,
    fone varchar(15) not null,
    email varchar(50)
);
/* not null = campo não nulo*/

/*mostra as tabelas existentes*/
show tables;

/*mostra a estrutura da tabela contatos*/
desc contatos;

/*ou*/
describe contatos;