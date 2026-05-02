CREATE DATABASE GymSafe;

USE GymSafe;

CREATE TABLE
	usuario (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(50),
		email VARCHAR(50) UNIQUE,
		senha VARCHAR(255)
	);

CREATE TABLE
	tema (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(50) UNIQUE
	);

CREATE TABLE
	pergunta (
		id INT PRIMARY KEY AUTO_INCREMENT,
		pergunta VARCHAR(255),
		fkTema INT,
		FOREIGN KEY (fkTema) REFERENCES tema (id)
	);

CREATE TABLE
	opcao (
		id INT PRIMARY KEY AUTO_INCREMENT,
		opcao VARCHAR(255),
		pontos INT,
		fkPergunta INT,
		FOREIGN KEY (fkPergunta) REFERENCES pergunta (id)
	);

CREATE TABLE
	pontos (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(50),
		valor INT,
		fkUsuario INT,
		FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
	);

CREATE TABLE
	card (
		id INT PRIMARY KEY AUTO_INCREMENT,
		status VARCHAR(50),
		imagem VARCHAR(255),
		titulo VARCHAR(255),
		descricao VARCHAR(255)
	);

CREATE TABLE
	beneficio (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(50),
		valor INT,
		fkCard INT,
		FOREIGN KEY (fkCard) REFERENCES card (id)
	);

CREATE TABLE
	custo (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(255),
		valor INT,
		fkCard INT,
		FOREIGN KEY (fkCard) REFERENCES card (id)
	);


INSERT INTO
	tema (nome)
VALUES
	('Atividade Física'),
	('Mobilidade'),
	('Saúde Mental'),
	('Qualidade do Sono'),
	('Alimentação'),
	('Conexão Familiar');

INSERT INTO
	pergunta (pergunta, fkTema)
VALUES
	(
		'Com que frequência você pratica exercícios físicos atualmente?',
		1
	),
	(
		'Qual é o seu nível de atividade física diária (fora dos treinos)?',
		1
	),
	(
		'Em média, quanto tempo dura cada sessão de exercício que você realiza?',
		1
	),
	(
		'Com que frequência você realiza exercícios de alongamento ou flexibilidade?',
		2
	),
	(
		'Com que facilidade você consegue alcançar os dedos dos pés com as pernas esticadas?',
		2
	),
	(
		'Você costuma sentir dores ou rigidez nas articulações ao acordar ou se movimentar?',
		2
	),
	(
		'Como você avalia o seu nível de estresse no dia a dia?',
		3
	),
	(
		'Com que frequência você dedica tempo para hobbies ou atividades que te dão prazer?',
		3
	),
	(
		'Como você costuma lidar com sentimentos de ansiedade ou frustração?',
		3
	),
	(
		'Quantas horas, em média, você dorme por noite?',
		4
	),
	('Como você se sente ao acordar pela manhã?', 4),
	(
		'Com que facilidade você consegue adormecer ao deitar na cama?',
		4
	),
	(
		'Quantos litros de água você costuma beber por dia?',
		5
	),
	(
		'Com que frequência você consome frutas e vegetais frescos?',
		5
	),
	(
		'Com que frequência você consome alimentos ultraprocessados (fast food, refrigerantes, salgadinhos)?',
		5
	),
	(
		'Com que frequência você realiza refeições junto com sua família ou pessoas que moram com você?',
		6
	),
	(
		'Quanto tempo de qualidade você dedica exclusivamente para interagir com sua família (sem telas)?',
		6
	),
	(
		'Como você avalia a comunicação e a expressão de sentimentos dentro da sua casa?',
		6
	);

INSERT INTO
	opcao (opcao, pontos, fkPergunta)
VALUES
	('Nunca', 10, 1),
	('1-2 vezes por semana', 20, 1),
	('3-4 vezes por semana', 30, 1),
	('5 ou mais vezes por semana', 40, 1),
	('Sedentário (passo o dia sentado)', 10, 2),
	(
		'Levemente ativo (algumas caminhadas curtas)',
		20,
		2
	),
	(
		'Moderadamente ativo (movimento constante)',
		30,
		2
	),
	(
		'Altamente ativo (trabalho físico ou movimento intenso)',
		40,
		2
	),
	('Não me exercito', 10, 3),
	('Menos de 30 minutos', 20, 3),
	('De 30 a 60 minutos', 30, 3),
	('Mais de 60 minutos', 40, 3),
	('Nunca', 10, 4),
	('Raramente (1-2 vezes por mês)', 20, 4),
	('Algumas vezes por semana', 30, 4),
	('Diariamente', 40, 4),
	('Não consigo passar dos joelhos', 10, 5),
	('Alcanço as canelas', 20, 5),
	('Toco a ponta dos dedos', 30, 5),
	(
		'Toco as mãos inteiras no chão com facilidade',
		40,
		5
	),
	('Frequentemente, limita meus movimentos', 10, 6),
	('Às vezes, mas passa rápido', 20, 6),
	('Raramente', 30, 6),
	('Nunca, sinto meu corpo solto e ágil', 40, 6),
	('Muito alto e constante', 10, 7),
	('Moderado, com picos frequentes', 20, 7),
	('Leve e controlável', 30, 7),
	('Baixo e tranquilo', 40, 7),
	('Nunca tenho tempo', 10, 8),
	('Raramente, apenas nos finais de semana', 20, 8),
	('Algumas horas durante a semana', 30, 8),
	('Diariamente', 40, 8),
	(
		'Guardo para mim ou desconto em maus hábitos',
		10,
		9
	),
	('Tenho dificuldade, mas tento me acalmar', 20, 9),
	('Costumo conversar com alguém sobre', 30, 9),
	(
		'Uso técnicas (respiração, meditação, etc) para gerenciar facilmente',
		40,
		9
	),
	('Menos de 5 horas', 10, 10),
	('Entre 5 e 6 horas', 20, 10),
	('Entre 6 e 7 horas', 30, 10),
	('Entre 7 e 8 horas ou mais', 40, 10),
	('Exausto, como se não tivesse dormido', 10, 11),
	('Cansado, demoro a engrenar', 20, 11),
	('Relativamente bem', 30, 11),
	('Totalmente revigorado e com energia', 40, 11),
	('Demoro mais de 1 hora rolando na cama', 10, 12),
	('Demoro cerca de 30 a 60 minutos', 20, 12),
	('Pego no sono em menos de 30 minutos', 30, 12),
	(
		'Adormeço em poucos minutos com facilidade',
		40,
		12
	),
	('Menos de 1 litro', 10, 13),
	('Entre 1 e 1,5 litros', 20, 13),
	('Entre 1,5 e 2,5 litros', 30, 13),
	('Mais de 2,5 litros', 40, 13),
	('Raramente ou nunca', 10, 14),
	('1 a 2 porções por dia', 20, 14),
	('3 a 4 porções por dia', 30, 14),
	('5 ou mais porções todos os dias', 40, 14),
	('Todos os dias', 10, 15),
	('Algumas vezes por semana', 20, 15),
	('Raramente (1 a 2 vezes no mês)', 30, 15),
	('Nunca ou quase nunca', 40, 15),
	('Nunca ou raramente', 10, 16),
	('Apenas nos finais de semana', 20, 16),
	('Algumas vezes na semana', 30, 16),
	('Quase todos os dias', 40, 16),
	('Não temos esse hábito', 10, 17),
	('Algumas horas por mês', 20, 17),
	('Algumas horas por semana', 30, 17),
	('Todos os dias temos um momento juntos', 40, 17),
	('Não conversamos sobre sentimentos', 10, 18),
	('É difícil e costuma gerar conflitos', 20, 18),
	('Conversamos superficialmente', 30, 18),
	(
		'Temos um diálogo aberto, fácil e acolhedor',
		40,
		18
	);

INSERT INTO
	card (status, imagem, titulo, descricao)
VALUES
	(
		'boa',
		'./assets/icon/zzz.svg',
		'Dormir 8 Horas',
		'Uma noite perfeita de sono reparador.'
	),
	(
		'boa',
		'./assets/icon/panela.svg',
		'Cozinhar em Casa',
		'Refeição nutritiva e balanceada.'
	),
	(
		'boa',
		'./assets/icon/agua.svg',
		'Beber Água e Alongar',
		'Pequenos hábitos salvam o seu corpo.'
	),
	(
		'boa',
		'./assets/icon/amigo.svg',
		'Sair com Amigos',
		'Boas risadas recarregam a mente.'
	),
	(
		'boa',
		'./assets/icon/vassoura.svg',
		'Arrumar o Quarto',
		'Ambiente limpo, mente organizada.'
	),
	(
		'ruim',
		'./assets/icon/jogar.svg',
		'Virar a Noite Jogando',
		'Foi muito épico, mas cadê a disposição?'
	),
	(
		'ruim',
		'./assets/icon/trabalho.svg',
		'Excesso de Trabalho',
		'Você ignorou o relógio e continuou trabalhando.'
	),
	(
		'ruim',
		'./assets/icon/lanche.svg',
		'Comer Fast Food',
		'Rápido, gostoso e péssimo a longo prazo.'
	),
	(
		'ruim',
		'./assets/icon/discutir.svg',
		'Discutir na Internet',
		'Você perdeu horas brigando nos comentários.'
	),
	(
		'ruim',
		'./assets/icon/sofa.svg',
		'Procrastinar',
		'Deixar tudo para amanhã gera ansiedade.'
	),
	(
		'boa',
		'./assets/icon/peso.svg',
		'Treinar',
		'Melhore sua força, saúde e resistência.'
	),
	(
		'ruim',
		'./assets/icon/tiktok.svg',
		'Tiktok',
		'Assistir vídeos curtos até de madrugada.'
	),
	(
		'boa',
		'./assets/icon/livro.svg',
		'Estudar',
		'Melhore seu conhecimento e habilidades'
	),
	(
		'ruim',
		'./assets/icon/pizza.svg',
		'Comer Pizza',
		'Delicioso, mas não muito saudável'
	),
	(
		'boa',
		'./assets/icon/cafe.svg',
		'Tomar Café',
		'Aumenta seu foco e energia'
	),
	(
		'ruim',
		'./assets/icon/tv.svg',
		'Ficar no sofá',
		'Relaxar é importante, mas cuidado com o excesso'
	),
	(
		'boa',
		'./assets/icon/meditacao.svg',
		'Meditar',
		'Acalma a mente, exigindo apenas um pouco de disciplina.'
	);

INSERT INTO
	beneficio (nome, valor, fkCard)
VALUES
	('vida', 15, 1),
	('energia', 30, 1),
	('xp', 5, 1),
	('vida', 20, 2),
	('foco', 10, 2),
	('xp', 12, 2),
	('vida', 10, 3),
	('energia', 15, 3),
	('foco', 5, 3),
	('xp', 5, 3),
	('foco', 30, 4),
	('xp', 15, 4),
	('foco', 20, 5),
	('xp', 10, 5),
	('foco', 15, 6),
	('xp', 30, 6),
	('xp', 25, 7),
	('energia', 25, 8),
	('xp', 10, 8),
	('xp', 5, 9),
	('energia', 10, 10),
	('xp', 5, 10),
	('vida', 20, 11),
	('foco', 15, 11),
	('xp', 15, 11),
	('xp', 25, 12),
	('vida', 10, 13),
	('foco', 25, 13),
	('xp', 12, 13),
	('energia', 15, 14),
	('xp', 10, 14),
	('energia', 10, 15),
	('foco', 15, 15),
	('vida', 5, 16),
	('energia', 10, 16),
	('foco', 25, 17),
	('energia', 10, 17),
	('xp', 10, 17);

INSERT INTO
	custo (nome, valor, fkCard)
VALUES
	('foco', 5, 1),
	('energia', 15, 2),
	('sem custo', 0, 3),
	('energia', 15, 4),
	('vida', 5, 4),
	('energia', 15, 5),
	('energia', 35, 6),
	('vida', 10, 6),
	('foco', 20, 7),
	('energia', 25, 7),
	('vida', 15, 8),
	('foco', 10, 8),
	('foco', 25, 9),
	('vida', 5, 9),
	('foco', 20, 10),
	('energia', 25, 11),
	('foco', 20, 12),
	('energia', 15, 12),
	('energia', 18, 13),
	('vida', 20, 14),
	('vida', 5, 15),
	('foco', 17, 16),
	('foco', 5, 17);