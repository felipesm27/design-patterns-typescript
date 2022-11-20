# ENG2 - Padrões

#### Vídeo sobre a parte Teorica

 <a href="https://www.youtube.com/watch?v=5GQm9bB5Qh4">Assistir Vídeo: Clique aqui</a> &nbsp;

# Estudo sobre o padrão estrututal Adapter

 Projeto criado para fins academicos.

 ## ��� Pré requisitos

 Node 
 Typescript
 Validator

 <a href="https://nodejs.dev/">Node</a> &nbsp;
 <br>
 <a href="https://www.typescriptlang.org/">Typescript</a> &nbsp;

 ## Instalação do Projeto

Crie o packege.json
<br>
<br>
npm init
<br>
<br>
Instalar TypeScript
<br>
<br>
npm install typescript
<br>
<br>
Iniciar configurações do typescript 
<br>
<br>
npx tsc --init
<br>
<br>
Desta forma ira criar o tsconfig.json que é responsavel pelas configurações typescript.
<br>
<br>
Instalando o validator
<br>
<br>
npm i validator
<br>
<br>
npm i -D @types/validator

 ## Exemplo
 #### Vamos ao código
 Vamos supor que em algum lugar eu precise de um validador de e-mail, vamos supor que eu receba um e-mail em algum lugar.. posso fazer mais ou menos assim

 <img width="730" alt="image" src="v1">
 <img width="730" alt="image" src="v2">

Aqui eu "tenho" um codigo perfeitamente funcional... no caso ele vai validar se meu e-mail é válido ou inválido.
Esse é um código perfeitamente natural, e agente tende a utilizar isso nos nossos por exemplo mvp's criamos varios programas aonde fizemos isso diretamente sem se preocupar se o validator vai algum dia parar ou não de funcionar, mas oque acontece em um software sério e grande podemos ter varios locais aonde eu precise checar e-mail's mas o problema é que se algum dia eu precisar trocar o validator por outra biblioteca que faz validação de e-mail vamos supor que a outra biblioteca é mais rapida que o validator por exemplo parou de ser atualizado então em todos os locais aonde eu ultilizei o validator ou testei algum código que ultiliza o validator vamos ter problemas então o adapter vai solucionar esse problema.

 ## Executando a aplicação

 ```bash
 # development
 $ ts-node client
 ```

 ## ��� Simples Trabalho sobre Padrões

 <a href="https://github.com/felipesm27"><img src="https://github.com/felipesm27.png" width="45" height="45"></a> &nbsp;
