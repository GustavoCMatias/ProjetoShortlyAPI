--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    original_link text NOT NULL,
    short_link text NOT NULL,
    user_id integer NOT NULL,
    view_count integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (3, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'QqpUrJh_', 3, 0, '2023-02-27 20:55:38.695357');
INSERT INTO public.links VALUES (4, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'O4M7ob-z', 3, 0, '2023-02-28 11:36:06.728731');
INSERT INTO public.links VALUES (5, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'rpWWlvCz', 3, 0, '2023-02-28 11:38:38.01742');
INSERT INTO public.links VALUES (6, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', '2A4Ln1kE', 3, 0, '2023-02-28 11:39:31.453537');
INSERT INTO public.links VALUES (7, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'z1FQSyVv', 3, 0, '2023-02-28 11:39:49.977734');
INSERT INTO public.links VALUES (8, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'HpW_iDf1', 3, 0, '2023-02-28 11:40:04.120775');
INSERT INTO public.links VALUES (9, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'sclrbqbk', 3, 0, '2023-02-28 11:43:54.869515');
INSERT INTO public.links VALUES (2, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'n_PWZjYF', 3, 5, '2023-02-27 20:55:27.252756');
INSERT INTO public.links VALUES (1, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffb8e3', 'kkuis-PX', 3, 11, '2023-02-27 20:53:37.751357');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (4, 3, '6c858ffa-0893-4145-81c5-2437bd20e549', '2023-02-27 18:07:54.465258');
INSERT INTO public.sessions VALUES (5, 4, '4d4b1e34-2460-46c0-82f2-42c8b0ea88c1', '2023-02-28 19:26:34.797604');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (3, 'Luan', 'l@l.com', '$2b$10$b4a.q6um3ZLTSIT2gYFziuVEDvU9dbNVngtei1NXN6FW6ZFtw3sNK', '2023-02-27 18:07:41.824315');
INSERT INTO public.users VALUES (4, 'Jorge', 'j@j.com', '$2b$10$9Z9WPbPi48y9Yt.pTqImsuOnY97A3LAJemOeDY7f7mGwowTSk0XNy', '2023-02-28 19:26:09.002066');


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 11, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: links links_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

