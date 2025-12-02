---------------------------------------------------------
-- ALUNOS
---------------------------------------------------------
INSERT INTO ALUNO (CODALUNO, NOME) VALUES
(1, 'Lucas Oliveira'),
(2, 'Mariana Souza'),
(3, 'Pedro Henrique'),
(4, 'Ana Clara'),
(5, 'João Victor');

---------------------------------------------------------
-- ALUNOS CONTATOS
---------------------------------------------------------
INSERT INTO ALUNOS_CONTATOS (CODALUNO, TIPO_CONTATO, CONTATO) VALUES
(1, 'email', 'lucas.oliveira@example.com'),
(1, 'telefone', '(11) 98888-1111'),
(2, 'email', 'mariana.souza@example.com'),
(3, 'email', 'pedro.henrique@example.com'),
(4, 'telefone', '(21) 97777-2222'),
(5, 'email', 'joao.victor@example.com');

---------------------------------------------------------
-- PROFESSORES
---------------------------------------------------------
INSERT INTO PROFESSOR (CODPROFESSOR, NOME) VALUES
(1, 'Carlos Almeida'),
(2, 'Fernanda Ribeiro'),
(3, 'Ricardo Matos'),
(4, 'Juliana Freitas'),
(5, 'Eduardo Lima');

---------------------------------------------------------
-- PROFESSORES CONTATOS
---------------------------------------------------------
INSERT INTO PROFESSORES_CONTATOS (CODPROFESSOR, TIPO_CONTATO, CONTATO) VALUES
(1, 'email', 'carlos.almeida@school.com'),
(2, 'email', 'fernanda.ribeiro@school.com'),
(3, 'email', 'ricardo.matos@school.com'),
(4, 'telefone', '(41) 91234-5678'),
(5, 'email', 'eduardo.lima@school.com');

---------------------------------------------------------
-- CURSOS
---------------------------------------------------------
INSERT INTO CURSO (CODCURSO, NOME, DESCRICAO, MENSALIDADE) VALUES
(1, 'Ciência da Computação', 'Curso completo de programação e sistemas', 650.00),
(2, 'Administração', 'Gestão empresarial e financeira', 550.00),
(3, 'Design Gráfico', 'Criação visual e comunicação', 480.00);

---------------------------------------------------------
-- MATERIAS
---------------------------------------------------------
INSERT INTO MATERIAS (CODMATERIA, NOME, DURACAO) VALUES
(1, 'Algoritmos', 60),
(2, 'Banco de Dados', 80),
(3, 'Redes de Computadores', 40),
(4, 'Marketing Digital', 50),
(5, 'Teoria das Organizações', 45),
(6, 'Design de Interfaces', 70);

---------------------------------------------------------
-- CURSO_ALUNOS
---------------------------------------------------------
INSERT INTO CURSO_ALUNOS (CODCURSO, CODALUNO) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(3, 1),
(3, 4);

---------------------------------------------------------
-- CURSO_MATERIAS
---------------------------------------------------------
INSERT INTO CURSO_MATERIAS (CODCURSO, CODMATERIA) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(3, 6);

---------------------------------------------------------
-- MATERIAS_PROFESSORES
---------------------------------------------------------
INSERT INTO MATERIAS_PROFESSORES (CODMATERIA, CODPROFESSOR) VALUES
(1, 1),
(2, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 4);

---------------------------------------------------------
-- USER
---------------------------------------------------------
INSERT INTO USER (CODUSUARIO, LOGIN, SENHA) VALUES
(1, 'lucas', '1234'),
(2, 'mariana', 'abcd'),
(3, 'pedro', 'qwerty'),
(4, 'ana', 'senha123'),
(5, 'joao', 'xyz789'),
(6, 'prof_carlos', 'pass1'),
(7, 'prof_fernanda', 'pass2'),
(8, 'prof_ricardo', 'pass3'),
(9, 'prof_juliana', 'pass4'),
(10, 'prof_eduardo', 'pass5');

---------------------------------------------------------
-- USER_ALUNO
---------------------------------------------------------
INSERT INTO USER_ALUNO (CODUSUARIO, CODALUNO) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

---------------------------------------------------------
-- USER_PROFESSOR
---------------------------------------------------------
INSERT INTO USER_PROFESSOR (CODUSUARIO, CODPROFESSOR) VALUES
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5);
