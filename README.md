# Seletor de Status (PCF)

Um componente personalizado (Power Apps Component Framework) que substitui campos de texto ou menus suspensos por botões interativos usando o Fluent UI. 

O componente lê uma lista de texto separada por vírgulas e gera um botão para cada opção. O botão correspondente ao status atual recebe destaque visual.

## Propriedades

- **Status Atual (`statusAtual` | Bound):** Propriedade de mão dupla. Recebe o valor atual do banco de dados e devolve o novo valor quando o usuário clica em um botão.
- **Opções de Status (`opcoes` | Input):** Lista de opções separada por vírgulas que o componente usará para renderizar os botões. (Exemplo: `Pendente, Em Andamento, Concluído`).

## Tecnologias Utilizadas

- Power Apps Component Framework (PCF)
- React (Functional Components & Hooks)
- Fluent UI (@fluentui/react v8)

## Comandos de Desenvolvimento

Certifique-se de ter o Node.js e a Power Platform CLI instalados antes de executar os comandos.

```bash
# Instalar dependências do projeto
npm install

# Iniciar o ambiente de teste local (Sandbox)
npm start

# Compilar o código para produção
npm run build

# Publicar o componente no ambiente do Power Apps
pac pcf push --publisher-prefix dev
