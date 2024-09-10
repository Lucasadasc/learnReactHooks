import React from "react";

/* 
Usando o Context API, podemos passar propriedades de um componente pai para um componente filho sem precisar passar por todos os componentes intermediários. 
Para isso, criamos um contexto com createContext() e exportamos o Provider e o Consumer. O Provider é usado para passar as propriedades e o Consumer é usado 
para acessá-las. Veja o exemplo abaixo: 
*/

// Achei parecido com o service do Angular, onde você cria um service e pode injetar ele em qualquer componente.

const UserContext = React.createContext(); // Caso queira passar um valor padrão, basta passar como argumento para o createContext()
const UserTeam = React.createContext();

export { UserContext, UserTeam };
