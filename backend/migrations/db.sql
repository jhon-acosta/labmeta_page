create database labmeta;

use labmeta;

create table persona_tipos(
    id int auto_increment not null primary key,
    pers_tip_des varchar(150)
);

create table persona_tipo_identificaciones(
    id int auto_increment not null primary key,
    pers_tip_ide_des varchar(150)
);

create table persona_generos(
    id int auto_increment not null primary key,
    pers_gen_des varchar(150)
);

create table personas(
    id int auto_increment not null primary key, 
    pers_nom varchar(150), 
    pers_tip_ide_id int, foreign key (pers_tip_ide_id) references persona_tipo_identificaciones(id),
    pers_ide varchar(10),
    pers_dir varchar(150),
    pers_gen_id int, foreign key (pers_gen_id) references persona_generos(id),
    pers_cor_ele varchar(150), 
    pers_cla varchar(150),
    pers_tip_id int, foreign key (pers_tip_id) references persona_tipos(id)
);





insert into persona_tipos values(1,'Administrador');
insert into persona_tipos values(2,'Paciente');
insert into persona_tipos values(3,'Doctor');

insert into persona_tipo_identificaciones values(1,'Cédula');
insert into persona_tipo_identificaciones values(2,'R.U.C.');
insert into persona_tipo_identificaciones values(3,'Pasaporte');

insert into persona_generos values(1,'Masculino');
insert into persona_generos values(2,'Femenino');

insert into personas values(1,'Johao Perlaza',1,'1718842642','Quito',1,'admin@gmail.com','1234',1);





-- FUNCIONES


DELIMITER $$ 
CREATE FUNCTION F_PELICULA(P_ID INTEGER)
RETURNS VARCHAR(150)
DETERMINISTIC
BEGIN
    DECLARE V_PELICULA VARCHAR(150);
 
    SELECT titulo INTO V_PELICULA
    FROM peliculas
    WHERE id = P_ID;
    RETURN V_PELICULA;
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION F_SALA(P_ID INTEGER)
RETURNS VARCHAR(150)
DETERMINISTIC
BEGIN
    DECLARE V_SALA VARCHAR(150);
 
    SELECT nombre INTO V_SALA
    FROM salas
    WHERE id = P_ID;
    RETURN V_SALA;
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION F_HORARIO(P_ID INTEGER)
RETURNS VARCHAR(150)
DETERMINISTIC
BEGIN
    DECLARE V_HORA VARCHAR(150);
 
    SELECT hora INTO V_HORA
    FROM horarios
    WHERE id = P_ID;
    RETURN V_HORA;
END$$
DELIMITER ;