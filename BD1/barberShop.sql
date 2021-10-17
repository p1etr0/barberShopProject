--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-1.pgdg110+1)
-- Dumped by pg_dump version 13.3

-- Started on 2021-10-17 20:02:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 100088)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 3051 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 204 (class 1259 OID 100234)
-- Name: barbeiro; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.barbeiro (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    nome character varying(150) NOT NULL,
    email character varying(150) NOT NULL,
    dtnasc character varying(10) NOT NULL,
    senha character varying NOT NULL
);


ALTER TABLE public.barbeiro OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 100240)
-- Name: clientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clientes (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    nome character varying(150) NOT NULL,
    cpf character varying(150) NOT NULL,
    dtnasc character varying(10) NOT NULL,
    idbarbeiro uuid NOT NULL
);


ALTER TABLE public.clientes OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 116471)
-- Name: entrada; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entrada (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    descricao character varying(150) NOT NULL,
    valor character varying(10) NOT NULL,
    idbarber uuid NOT NULL
);


ALTER TABLE public.entrada OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 100267)
-- Name: eventos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventos (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    idcliente uuid NOT NULL,
    idbarbeiro uuid NOT NULL,
    idprocedimento uuid NOT NULL
);


ALTER TABLE public.eventos OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 100101)
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 100099)
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO postgres;

--
-- TOC entry 3052 (class 0 OID 0)
-- Dependencies: 201
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- TOC entry 203 (class 1259 OID 100228)
-- Name: procedimentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.procedimentos (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    nome character varying(150) NOT NULL,
    duracao character varying(10) NOT NULL,
    valor character varying(10) NOT NULL
);


ALTER TABLE public.procedimentos OWNER TO postgres;

--
-- TOC entry 2886 (class 2604 OID 100104)
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- TOC entry 3042 (class 0 OID 100234)
-- Dependencies: 204
-- Data for Name: barbeiro; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.barbeiro (id, nome, email, dtnasc, senha) FROM stdin;
8fba9759-8dac-49dd-99b3-b9a648a0b442	Pietro	pietro_goncalves@hotmail.com	13-09-2000	$2a$08$vyNt5tmL/qYC1EVu6lAfMuJDyRYhhCWZjH0Dw26vOBTmAxwxMHrPu
e19bff54-7a12-4375-94ab-3b0255b9fb80	Lucas 	lucas@hotmail.com	13-05-1990	$2a$08$TpB63ywLAyokARj9h6ZlROtup46Jwxz9VH8KxB6SuNrVzBmnyrmCq
a24303c5-38ff-4261-be76-2375ccab1dee	Marcelo	marcelo@hotmail.com	26-04-1998	$2a$08$fRSglxF8x0KaKId79sCMj.6pAgS4hlsjwT0H7bgTjUlW2XNqYqeaK
7fd0ec4e-6b27-4830-93c0-e4972c3af73c	Joao	joao@hotmail.com	20-04-1992	$2a$08$aEDWKpgJV5FplqWvZc7nouPhSiu7sU6h494Z3m5eUGsl9LNTXhKdG
87dfd50e-e56a-4e70-93e0-9dffdd7bd09b	José Toledo	jose@hotmail.com	31-02-2020	$2a$08$vnRPnkzwsQUZVRbrFZyKWeFm.gmZigaF15fbYWUElR88lyLo1WHUW
afa5a580-952d-4c78-b959-02b10e8053d4	Jurema Gonçalves	jurema@gmail.com	04-03-1991	$2a$08$rlxhws/o/pjyVM3OKZxFze1swJ7wcuPCn3ZKgUNugffP.8WjfZIPm
be24b459-4288-497a-85ed-b706def90954	Rodrigo das Neves	rodrigo@gmail.com	24-05-2000	$2a$08$YEG6Nej5b65LDkIuz.bnRumJmAaz8Fw7Um07vhD7QjzcyFlfLJdwG
d2f4dd34-98a2-4221-a477-d4c97c29ac49	Lucas Alcindo	lucasalcindo@gmail.com	14-06-1985	$2a$08$RXDiodKqNmqYR503Ve5jY.64K103mIFpG.7L1trCHIp.bzBinB1sm
3d656e8b-f7e5-45e9-a44e-cee0a4e2f032	Silvana de Souza	syla@hotmail.com	26-05-1980	$2a$08$adZXBLGSgQ9DXeZMj2.pxOfCMGJQ1mxtE1zO556Guq0V0rmcjwwE6
4a7add44-d32f-4bbc-ac2d-ae2d3ae991a3	Pietro de Souza Gonçalves	pietro_goncalves2@hotmail.com	13-09-2000	$2a$08$kOeJqtzkYxHS3wSUBRUqzezyO534i6vmWPRMieZbCZGVwfO880p1u
bad7edc5-fd14-4677-a2ae-48c2a56bf1ed	Camilo Vargas	camilov@gmail.com	01-07-1994	$2a$08$haJqj88oXdjI7/sKHJ96FObTP5OKpdXpL0txz4zXcpwwTmwnm1yn.
\.


--
-- TOC entry 3043 (class 0 OID 100240)
-- Dependencies: 205
-- Data for Name: clientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clientes (id, nome, cpf, dtnasc, idbarbeiro) FROM stdin;
5816549a-2aba-43a9-8d41-499544040c8f	Mario Quintana	12345678912	13-09-2000	8fba9759-8dac-49dd-99b3-b9a648a0b442
b9b0050a-7195-42a1-9dde-44da2c174d97	Teodoro Sampaio	12345678911	26-09-2021	8fba9759-8dac-49dd-99b3-b9a648a0b442
31652750-403e-467c-a24c-f595bb1e17b2	Lucas Pereira	0123456789	05-05-1980	8fba9759-8dac-49dd-99b3-b9a648a0b442
43672bb9-b146-4ce0-b4b3-4da4be4c18fd	Isabel Moreira	3214567411	15-11-1900	8fba9759-8dac-49dd-99b3-b9a648a0b442
22ba1c60-3abf-4188-a0e8-3e05c50a0b59	Paulo Rogerio	258741369	30-11-1985	8fba9759-8dac-49dd-99b3-b9a648a0b442
cff92c7e-5f6d-4877-ba89-ed3e6b3b5c28	Izaque Filipe	95175364	65-12-1974	8fba9759-8dac-49dd-99b3-b9a648a0b442
2d900617-3f6d-415e-91ad-4634dc7ee7d4	Claudio da Silva	654789123	25-07-1952	8fba9759-8dac-49dd-99b3-b9a648a0b442
d5963e98-d625-4776-9c18-b912822a069a	Edmundo Soares	35795185	32-11-1999	8fba9759-8dac-49dd-99b3-b9a648a0b442
c28e94e0-f003-4b43-940b-287ddc26eec4	Matheus Olivo	0123456321	26-11-2000	8fba9759-8dac-49dd-99b3-b9a648a0b442
a5c64d4a-f6b1-4feb-b489-002510f5a1ef	Guilherme Junges	159456741	21-02-1996	8fba9759-8dac-49dd-99b3-b9a648a0b442
cafa47fe-e4bf-403b-9949-bc8413ec8a28	Murilo Pruciano	357198745	12-03-1997	8fba9759-8dac-49dd-99b3-b9a648a0b442
\.


--
-- TOC entry 3045 (class 0 OID 116471)
-- Dependencies: 207
-- Data for Name: entrada; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entrada (id, descricao, valor, idbarber) FROM stdin;
7c1fbc2c-21a5-4d00-a413-84e4d0a7ad8a	Cabelo e Barba	60	8fba9759-8dac-49dd-99b3-b9a648a0b442
04ec4e69-106c-4da1-9917-c03b1c8a6c8f	Cabelo	40	8fba9759-8dac-49dd-99b3-b9a648a0b442
68a740d3-fe77-4fb2-af7f-6eda47e0ece6	Barba	20	8fba9759-8dac-49dd-99b3-b9a648a0b442
1a269829-8331-4d3f-8c12-9dbc9dc1cac4	Corte Navalhado	40	d2f4dd34-98a2-4221-a477-d4c97c29ac49
a901d23c-873a-4236-b46f-1ccb8805a140	Degrade	30	87dfd50e-e56a-4e70-93e0-9dffdd7bd09b
d53d094e-3ac7-40a6-9009-660a70ed44d3	Cavanhaque	15	be24b459-4288-497a-85ed-b706def90954
06849cc4-759f-4eed-a289-a5325800e2ea	Cabelo e Barba	60	afa5a580-952d-4c78-b959-02b10e8053d4
4c3c14aa-6854-4c75-9fb6-b72f35237eeb	Pintura	25	3d656e8b-f7e5-45e9-a44e-cee0a4e2f032
4b97438b-1fa8-4746-9772-ef0be09fd37f	Cabelo	40	a24303c5-38ff-4261-be76-2375ccab1dee
5fe5e0f7-1672-468c-ac3c-1825fa4dd712	Bigode	10	a24303c5-38ff-4261-be76-2375ccab1dee
\.


--
-- TOC entry 3044 (class 0 OID 100267)
-- Dependencies: 206
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.eventos (id, idcliente, idbarbeiro, idprocedimento) FROM stdin;
21321369-472f-4855-a7fd-2ca6e7bde241	5816549a-2aba-43a9-8d41-499544040c8f	8fba9759-8dac-49dd-99b3-b9a648a0b442	99b7b3a4-3524-465f-9846-0cec88b40d81
c4c3d110-4272-416b-a9d6-5188b91e0ab7	b9b0050a-7195-42a1-9dde-44da2c174d97	8fba9759-8dac-49dd-99b3-b9a648a0b442	99b7b3a4-3524-465f-9846-0cec88b40d81
76161253-2a82-49b2-85c8-c0a09916ee51	b9b0050a-7195-42a1-9dde-44da2c174d97	8fba9759-8dac-49dd-99b3-b9a648a0b442	6443a52d-bc40-4355-8a34-56b7b361c677
81531911-5a69-4c8e-af98-d9f5b25c17bc	b9b0050a-7195-42a1-9dde-44da2c174d97	a24303c5-38ff-4261-be76-2375ccab1dee	d9d6a00c-e97d-4561-b97a-79f68c3c849d
8d6414c3-bd57-4eb9-96dd-1ddd732d0bf1	5816549a-2aba-43a9-8d41-499544040c8f	e19bff54-7a12-4375-94ab-3b0255b9fb80	78843d89-bce2-454d-abdb-f3afcbfd3848
de556fb9-8cc0-4cf3-922b-2085fdd77d62	d5963e98-d625-4776-9c18-b912822a069a	afa5a580-952d-4c78-b959-02b10e8053d4	d9d6a00c-e97d-4561-b97a-79f68c3c849d
b8dea600-9b94-4214-8fea-67bc18d70850	22ba1c60-3abf-4188-a0e8-3e05c50a0b59	d2f4dd34-98a2-4221-a477-d4c97c29ac49	78843d89-bce2-454d-abdb-f3afcbfd3848
4ce29658-c1d0-4ed1-93e6-75b6aa565c17	cafa47fe-e4bf-403b-9949-bc8413ec8a28	be24b459-4288-497a-85ed-b706def90954	f53f9039-1a35-4340-a726-c511005c7bfb
30b3d3e8-a6e5-429f-aef5-9af8a51c84d5	d5963e98-d625-4776-9c18-b912822a069a	8fba9759-8dac-49dd-99b3-b9a648a0b442	3ebc6397-eaf3-41c6-9043-238bf95c130f
16aee3e1-9e50-4e6b-9eff-34ae10516d26	c28e94e0-f003-4b43-940b-287ddc26eec4	87dfd50e-e56a-4e70-93e0-9dffdd7bd09b	f53f9039-1a35-4340-a726-c511005c7bfb
\.


--
-- TOC entry 3040 (class 0 OID 100101)
-- Dependencies: 202
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
10	1633473414874	CreateProcedimentos1633473414874
11	1633474979282	CreateBarbeiro1633474979282
12	1633476472224	CreateCliente1633476472224
13	1633475594508	CreateEventos1633475594508
14	1633623326347	InserindoColunaSenha1633623326347
15	1634156063126	CreateEntrada1634156063126
\.


--
-- TOC entry 3041 (class 0 OID 100228)
-- Dependencies: 203
-- Data for Name: procedimentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.procedimentos (id, nome, duracao, valor) FROM stdin;
33d37c06-f25f-4267-9069-1aba93d8202d	Cabelo	20	40
99b7b3a4-3524-465f-9846-0cec88b40d81	Barba	15	20
6443a52d-bc40-4355-8a34-56b7b361c677	Cabelo e Barba	35	60
d9d6a00c-e97d-4561-b97a-79f68c3c849d	Pintura	30	25
78843d89-bce2-454d-abdb-f3afcbfd3848	Corte Navalhado	25	40
f53f9039-1a35-4340-a726-c511005c7bfb	Bigode	10	10
3ebc6397-eaf3-41c6-9043-238bf95c130f	Cavanhaque	20	15
f1a24891-db03-4d4e-929d-bc6a4cb4658b	Degrade	20	30
\.


--
-- TOC entry 3053 (class 0 OID 0)
-- Dependencies: 201
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 15, true);


--
-- TOC entry 2901 (class 2606 OID 100272)
-- Name: eventos PK_40d4a3c6a4bfd24280cb97a509e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT "PK_40d4a3c6a4bfd24280cb97a509e" PRIMARY KEY (id);


--
-- TOC entry 2895 (class 2606 OID 100233)
-- Name: procedimentos PK_5a080ccebecc126c0c62a6b2e19; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimentos
    ADD CONSTRAINT "PK_5a080ccebecc126c0c62a6b2e19" PRIMARY KEY (id);


--
-- TOC entry 2893 (class 2606 OID 100109)
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- TOC entry 2897 (class 2606 OID 100239)
-- Name: barbeiro PK_aaf9aea0eaac3cdaa87918ae763; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barbeiro
    ADD CONSTRAINT "PK_aaf9aea0eaac3cdaa87918ae763" PRIMARY KEY (id);


--
-- TOC entry 2899 (class 2606 OID 100245)
-- Name: clientes PK_d76bf3571d906e4e86470482c08; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY (id);


--
-- TOC entry 2903 (class 2606 OID 116476)
-- Name: entrada PK_e7a5c037c8d52f966bc70325e5b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada
    ADD CONSTRAINT "PK_e7a5c037c8d52f966bc70325e5b" PRIMARY KEY (id);


--
-- TOC entry 2908 (class 2606 OID 116477)
-- Name: entrada FK_2387019fad09891892716dfc0ab; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrada
    ADD CONSTRAINT "FK_2387019fad09891892716dfc0ab" FOREIGN KEY (idbarber) REFERENCES public.barbeiro(id) ON DELETE CASCADE;


--
-- TOC entry 2904 (class 2606 OID 100246)
-- Name: clientes FK_c5f549f75d6a666ea7626e84c64; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT "FK_c5f549f75d6a666ea7626e84c64" FOREIGN KEY (idbarbeiro) REFERENCES public.barbeiro(id) ON DELETE CASCADE;


--
-- TOC entry 2906 (class 2606 OID 100278)
-- Name: eventos FK_ca558fcf02e522ea9773e891ba5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT "FK_ca558fcf02e522ea9773e891ba5" FOREIGN KEY (idbarbeiro) REFERENCES public.barbeiro(id) ON DELETE CASCADE;


--
-- TOC entry 2907 (class 2606 OID 100283)
-- Name: eventos FK_d42d6bf90e0826a5c2593e9b389; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT "FK_d42d6bf90e0826a5c2593e9b389" FOREIGN KEY (idcliente) REFERENCES public.clientes(id) ON DELETE CASCADE;


--
-- TOC entry 2905 (class 2606 OID 100273)
-- Name: eventos FK_ec995cff4c8013a458703111203; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT "FK_ec995cff4c8013a458703111203" FOREIGN KEY (idprocedimento) REFERENCES public.procedimentos(id) ON DELETE CASCADE;


-- Completed on 2021-10-17 20:02:12

--
-- PostgreSQL database dump complete
--

