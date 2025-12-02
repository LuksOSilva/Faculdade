--altera nome do aluno
UPDATE ALUNO
SET NOME = 'Novo Nome do Aluno'
WHERE CODALUNO = :codaluno;

--altera mensalidade do cursp
UPDATE CURSO
SET MENSALIDADE = 700.00
WHERE CODCURSO = :codcurso;

--altera contato de email de professor
UPDATE PROFESSORES_CONTATOS
SET CONTATO = 'novo.email@exemplo.com'
WHERE CODPROFESSOR = :codprofessor AND TIPO_CONTATO = 'email'


--delete aluno
DELETE FROM ALUNO
WHERE CODALUNO = :codaluno;

--deleta professor
DELETE FROM PROFESSOR
WHERE CODPROFESSOR = :codprofessor;

--deleta curso
DELETE FROM CURSO
WHERE CODCURSO = :codcurso;