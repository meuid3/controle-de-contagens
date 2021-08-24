CREATE TABLE public.tabela (
	id serial NOT NULL,
	nome varchar(500) NULL,
	"schema" varchar(500) NULL,
	CONSTRAINT tabela_pkey PRIMARY KEY (id)
);

CREATE TABLE public.modulo (
  id serial NOT NULL,
  nome varchar(255) NOT null,
  CONSTRAINT modulo_pkey PRIMARY KEY (id)
);

CREATE TABLE public.funcionalidade (
  id serial NOT NULL,
  nome varchar(500),
  modulo_id int NOT NULL,
  tables varchar(1000),
  CONSTRAINT fucnionalidade_pkey PRIMARY KEY (id),
  CONSTRAINT fk_modulo
    FOREIGN KEY(modulo_id) 
	  REFERENCES public.modulo(id)
);

CREATE TABLE public.funcionalidade_tabela (
  id serial NOT NULL,
  tabela_id int,
  funcionalidade_id int,
  CONSTRAINT funcionalidade_tabela_pkey PRIMARY KEY(id),
  CONSTRAINT fk_tabela FOREIGN KEY(tabela_id) REFERENCES public.tabela(id),
  CONSTRAINT fk_modulo FOREIGN KEY(funcionalidade_id) REFERENCES public.funcionalidade(id)
);

