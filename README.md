# Feira Livre

![CircleCI](https://img.shields.io/circleci/build/github/CarolinaMoraes/feira-livre)

![Codecov](https://img.shields.io/codecov/c/github/CarolinaMoraes/feira-livre)

Projeto React aplicando o uso de Styled Components, Storybook e Jest.

Este projeto foi desenvolvido acompanhando o curso [React Profissional](https://nardiniacademy.com)

Resultado final:

- [Demonstração online da aplicação](https://feira-livre.vercel.app/)
- [Storybook](https://main--63605fdad07a6c7d5b4f9ecb.chromatic.com)

## Scripts do projeto

Na pasta do projeto (após instalar as dependências) você pode rodar

### `npm run start`

Roda a aplicação em modo de desenvolvimento

### `npm run storybook`

Roda o storybook do projeto, que será aberto em uma aba do navegador

### `npm run test`

Roda os testes do projeto

### `npm run cover`

Roda os testes do projeto + gera o relatório de cobertura

## Scripts de uso interno do projeto

### `npm run svg svg/<ilustracao-svg>.svg`

Transforma uma ilustração .svg que estiver na pasta `svg` em um componente React e o salva na pasta `src/drawings`

### `npm run create-fixtures --generatorName=<nome-do-arquivo-generator-sem-extensao> --outputFilename=<nome-do-arquivo-final-sem-extensao>[opcional]`

Cria uma fixture .json a partir do conteúdo de um arquivo generator .js. Para entender melhor o que é uma fixture e para que serve [veja esta resposta no stackoverflow](https://stackoverflow.com/a/14684400/10369024).
O arquivo generator será buscado na pasta `scripts/generators` e sua fixture será salva em `src/models/builders/fixtures`.
Caso o parâmetro `outputFilename` não seja passado o valor de `generatorName` será usado para o arquivo final também.
