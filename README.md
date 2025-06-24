🗂️ **Aplicativo Web de Gerenciamento de Tarefas**:

Uma aplicação web intuitiva e responsiva para organização de tarefas diárias, desenvolvida com foco em usabilidade e performance. O sistema oferece funcionalidades essenciais para o controle de tarefas, com um backend robusto em Node.js, persistência de dados em MySQL via Sequelize ORM, e uma interface limpa construída com HTML e CSS puro.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔧 **Funcionalidades Principais**:

✅ Criação Rápida de Tarefas
Permite ao usuário adicionar novas tarefas com agilidade, através de uma interface direta e objetiva.

📋 Listagem de Tarefas
Exibe todas as tarefas cadastradas, com filtros para status (pendente ou concluída).

🔄 Atualização de Status
Possibilita a alteração do estado da tarefa (de "pendente" para "concluída" e vice-versa), com atualização instantânea na interface.

🗑️ Exclusão de Tarefas
Remoção de tarefas concluídas ou desnecessárias, mantendo a organização da lista.

💾 Armazenamento em Banco de Dados Relacional
Utiliza MySQL como mecanismo de persistência, garantindo integridade e confiabilidade dos dados.

📱 Design Responsivo
A interface se adapta automaticamente a diferentes tamanhos de tela, oferecendo uma boa experiência tanto em desktop quanto em dispositivos móveis.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧰 **Tecnologias Utilizadas**:

Camada	Tecnologia
Backend	Node.js, Express.js
Banco de Dados	MySQL, Sequelize ORM
Frontend	HTML5, CSS3

🖼️ **Interface do Usuário**:

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![tela](./screenshot.png)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🚀 **Como Executar o Projeto Localmente**:

Siga os passos abaixo para executar o projeto em sua máquina:

1️⃣ Clonar o Repositório:

🖥️ Acesse o terminal.

📥 Clone o repositório com o comando git clone.

📂 Entre na pasta do projeto com cd.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2️⃣ Instalar as Dependências:

📦 Execute o comando npm install para instalar todos os pacotes necessários.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3️⃣ Configurar o Banco de Dados:

🐬 Crie um banco de dados no MySQL (ex: tarefas_db).

🛠️ Atualize as configurações de acesso no arquivo backend/config/config.json (ou .env).

🔃 Rode as migrations com o comando npx sequelize db:migrate.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4️⃣ Iniciar o Servidor:

▶️ No terminal, execute o arquivo backend/server.js com Node.js.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5️⃣ Acessar no Navegador:

🌐 Abra seu navegador preferido.

🔗 Vá até o endereço: http://localhost:3000.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📘 **Aprendizados Durante o Projeto**:

Durante o desenvolvimento, foi realizado um processo completo de transição entre bancos de dados:

🔄 Substituição do SQLite por MySQL para maior escalabilidade e compatibilidade com produção.

🧩 Adaptação de models, migrations e conexões utilizando o Sequelize ORM.

🧠 Aprofundamento em conceitos fundamentais como:

- ORM (Mapeamento Objeto-Relacional)

- Migrations

- Seeders

- Relacionamentos entre entidades (associações)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔍 **Conceitos Explorados**:

🏗️ Arquitetura MVC simples e organizada.

🔁 Integração entre frontend e backend via requisições HTTP RESTful.

🔗 Uso do Sequelize para abstração das operações com SQL.

🚦 Criação e tratamento de rotas e middlewares no Express.

💾 Persistência de dados com um banco relacional estruturado.

🛡️ Validação de entradas e tratamento de erros no servidor de forma controlada.

