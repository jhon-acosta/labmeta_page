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

create table servicios(
    id int auto_increment not null primary key,
    serv_nom varchar(150),
    serv_des varchar(150)
);

create table cita_estados(
    id int auto_increment not null primary key,
    cita_est_des varchar(150)
);

create table cita_horarios(
    id int auto_increment not null primary key,
    cita_hor_des varchar(150)
);

create table personas(
    id int auto_increment not null primary key, 
    pers_nom varchar(150), 
    pers_tip_ide_id int, foreign key (pers_tip_ide_id) references persona_tipo_identificaciones(id),
    pers_ide varchar(10),
    pers_tel varchar(10),
    pers_fec_nac date,
    pers_dir varchar(150),
    pers_gen_id int, foreign key (pers_gen_id) references persona_generos(id),
    pers_cor_ele varchar(150), 
    pers_cla varchar(150),
    pers_tip_id int, foreign key (pers_tip_id) references persona_tipos(id),
    pers_fot longtext
);

create table citas(
    id int auto_increment not null primary key, 
    cita_est_id int, foreign key (cita_est_id) references cita_estados(id),
    pers_id_pac int, foreign key (pers_id_pac) references personas(id),
    cita_hor_cre timestamp
);

create table cita_detalles(
    id int auto_increment not null primary key, 
    cita_id int, foreign key (cita_id) references citas(id),
    pers_id_doc int, foreign key (pers_id_doc) references personas(id),
    serv_id int, foreign key (serv_id) references servicios(id),
    cita_hor_id int, foreign key (cita_hor_id) references cita_horarios(id),
    cita_det_hor_res timestamp
);

insert into persona_tipos values(1,'Administrador');
insert into persona_tipos values(2,'Paciente');
insert into persona_tipos values(3,'Doctor');

insert into persona_tipo_identificaciones values(1,'Cédula');
insert into persona_tipo_identificaciones values(2,'R.U.C.');
insert into persona_tipo_identificaciones values(3,'Pasaporte');

insert into persona_generos values(1,'Masculino');
insert into persona_generos values(2,'Femenino');

insert into servicios(id, serv_nom) values(1,'Cardiología');
insert into servicios(id, serv_nom) values(2,'Rayos X');
insert into servicios(id, serv_nom) values(3,'Ginecología');
insert into servicios(id, serv_nom) values(4,'Ecografía');
insert into servicios(id, serv_nom) values(5,'Hermatología');

insert into cita_estados values(1,'Activo');
insert into cita_estados values(2,'En proceso');
insert into cita_estados values(3,'Cancelado');

insert into cita_horarios values(1,'10-12');
insert into cita_horarios values(2,'12-14');

insert into personas values(1,'Johao Perlaza',1,'1718842642','0978970998','1999-04-13','Quito',1,'admin@gmail.com','1234',1,'imagen.jpg');





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
