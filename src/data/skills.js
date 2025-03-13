import { v4 as uuidv4 } from "uuid"
import BiomeIcon from "../assets/icons/biome.svg"
import BootstrapIcon from "../assets/icons/bootstrap.png"
import CSSIcon from "../assets/icons/css.png"
import DockerIcon from "../assets/icons/docker.png"
import ExpressIcon from "../assets/icons/express.png"
import GitIcon from "../assets/icons/git.png"
import GitHubIcon from "../assets/icons/github.png"
import HTMLIcon from "../assets/icons/html.png"
import JSIcon from "../assets/icons/js.png"
import MongoDBIcon from "../assets/icons/mongodb.png"
import MUIIcon from "../assets/icons/mui.png"
import NodeIcon from "../assets/icons/node.png"
import NPMIcon from "../assets/icons/npm.png"
import PostgreSQLIcon from "../assets/icons/postgresql.png"
import PrismaIcon from "../assets/icons/prismaorm.png"
import ReactIcon from "../assets/icons/react.png"
import SequelizeIcon from "../assets/icons/sequelize.png"
import StyledComponentsIcon from "../assets/icons/styled-components.png"
import TSIcon from "../assets/icons/ts.png"
import YarnIcon from "../assets/icons/yarn.png"

export const skills = [
	{
		id: uuidv4(),
		name: "HTML",
		description: `HTML, ou HyperText Markup Language, é a linguagem padrão usada
         para criar e estruturar páginas da web. Ele define os elementos que compõem um site,
         como títulos, parágrafos, links e imagens, por meio de tags.`,
		icon: HTMLIcon
	},
	{
		id: uuidv4(),
		name: "CSS",
		description: `CSS, ou Cascading Style Sheets, é uma linguagem de estilo usada
         para definir a apresentação visual de páginas da web. Ele permite controlar cores,
         fontes, layouts e espaçamentos de forma flexível.`,
		icon: CSSIcon
	},
	{
		id: uuidv4(),
		name: "JavaScript",
		description: `JavaScript é uma linguagem de programação que adiciona interatividade
         e dinamismo às páginas da web. Ele permite manipular elementos HTML e CSS, criando
         uma experiência de usuário mais envolvente.`,
		icon: JSIcon
	},
	{
		id: uuidv4(),
		name: "TypeScript",
		description: `TypeScript é uma linguagem de programação desenvolvida pela Microsoft
         que estende o JavaScript adicionando tipos estáticos. Facilita a detecção de erros
         durante o desenvolvimento e melhora a produtividade do código.`,
		icon: TSIcon
	},
	{
		id: uuidv4(),
		name: "React",
		description: `React é uma biblioteca JavaScript criada pelo Facebook para a
         construção de interfaces de usuário. Ela facilita a criação de componentes
         reutilizáveis e utiliza o "DOM virtual" para melhorar a
         performance das atualizações da interface.`,
		icon: ReactIcon
	},
	{
		id: uuidv4(),
		name: "Biome",
		description: `Biome é uma ferramenta focada na formatação e otimização
         de código. Ele combina recursos como linting, formatação e compilação
         para melhorar a produtividade dos desenvolvedores, oferecendo um
         desempenho rápido e suporte para múltiplas linguagens e padrões
         de codificação`,
		icon: BiomeIcon
	},
	{
		id: uuidv4(),
		name: "Styled-Components",
		description: `Styled-Components é uma biblioteca para React e React Native que permite
         escrever estilos CSS diretamente dentro dos componentes JavaScript, promovendo a criação
         de componentes estilizados de forma mais intuitiva e modular.`,
		icon: StyledComponentsIcon
	},
	{
		id: uuidv4(),
		name: "Bootstrap",
		description: `Bootstrap é uma popular biblioteca de front-end que facilita
         a criação de sites responsivos e modernos com estilos pré-construídos e
         componentes JavaScript.`,
		icon: BootstrapIcon
	},
	{
		id: uuidv4(),
		name: "Material UI",
		description: `Material UI é uma biblioteca de componentes React que implementa os
         princípios de design do Material Design do Google, facilitando a criação de
         interfaces de usuário elegantes e consistentes.`,
		icon: MUIIcon
	},
	{
		id: uuidv4(),
		name: "Node.js",
		description: `Node.js é um ambiente de execução JavaScript server-side que permite
         construir aplicações escaláveis com alta performance utilizando
         JavaScript no backend.`,
		icon: NodeIcon
	},
	{
		id: uuidv4(),
		name: "npm",
		description: `O npm (Node Package Manager) é um gerenciador de pacotes para
         JavaScript que facilita a instalação, atualização e gerenciamento de
         dependências para projetos Node.js.`,
		icon: NPMIcon
	},
	{
		id: uuidv4(),
		name: "yarn",
		description: `O yarn é um gerenciador de pacotes para JavaScript que facilita
         a instalação, atualização e gerenciamento de dependências, oferecendo maior
         velocidade e segurança em comparação ao npm.`,
		icon: YarnIcon
	},
	{
		id: uuidv4(),
		name: "express",
		description: `Express é um framework para Node.js que facilita a criação de
         aplicações web e APIs robustas e eficientes, proporcionando uma interface
         simples e flexível para o desenvolvimento.`,
		icon: ExpressIcon
	},
	{
		id: uuidv4(),
		name: "Sequelize",
		description: `Sequelize é um ORM (Object-Relational Mapping) para Node.js que
         facilita a interação com bancos de dados SQL, oferecendo uma interface simples
         para definir modelos e realizar operações CRUD.`,
		icon: SequelizeIcon
	},
	{
		id: uuidv4(),
		name: "Prisma",
		description: `Prisma é uma ferramenta de mapeamento objeto-relacional (ORM)
         que simplifica a interação com bancos de dados, fornecendo uma API
         intuitiva para operações CRUD e consultas complexas.`,
		icon: PrismaIcon
	},
	{
		id: uuidv4(),
		name: "MongoDB",
		description: `MongoDB é um banco de dados NoSQL orientado a documentos, conhecido
         por sua alta flexibilidade e escalabilidade, ideal para o armazenamento de
         grandes volumes de dados não estruturados.`,
		icon: MongoDBIcon
	},
	{
		id: uuidv4(),
		name: "PostgreSQL",
		description: `PostgreSQL é um sistema de banco de dados relacional de código
         aberto, conhecido por sua robustez, extensibilidade e suporte avançado a
         consultas SQL complexas.`,
		icon: PostgreSQLIcon
	},
	{
		id: uuidv4(),
		name: "Docker",
		description: `Docker é uma plataforma de containers que permite criar,
         testar e implantar aplicações de forma isolada e consistente,
         facilitando a portabilidade e escalabilidade em diferentes ambientes.`,
		icon: DockerIcon
	},
	{
		id: uuidv4(),
		name: "Git",
		description: `Git é um sistema de controle de versão distribuído que permite
         rastrear alterações no código-fonte, colaborar com outros desenvolvedores e
         gerenciar projetos de maneira eficiente e segura.`,
		icon: GitIcon
	},
	{
		id: uuidv4(),
		name: "GitHub",
		description: `GitHub é uma plataforma de hospedagem de código-fonte que usa
         Git para controle de versão, permitindo colaboração em projetos, gerenciamento
         de repositórios e integração contínua.`,
		icon: GitHubIcon
	}
]
