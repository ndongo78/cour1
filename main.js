
//string 

// let message ="c'est"

// let letter=`aujourd'hui
// ${message}
// `
// let letter2="hier ${message}"

// console.log(letter2)

// ? ecrire une variable username qui a la valeur de votre prenom et afficher dans la console

//Number
// let monNubmer=2;
// let negative=-12;
// let a=3.15;

 //undefined null
// let sms;

//? creer une variable age qui a la valeur de votre age et aussi creer une address qui revoir undefined 
//? afficher let resultat dans la console

//Boolean
let isLogin = false;
let login=true;

//array tableau

//let monTableau= new Array("orange","mangue",12,3,4);

let mangue="mangue";

let monTableau2=["orange","banana",120,90,12,true,false,undefined,null];
//console.log(monTableau2[2]);

//afficher la long
//console.log(monTableau2.length)
 //monTableau2[0]=mangue
//ajouter un item dans le tableau en 
//monTableau2.push(mangue) //en last item dans le tableau
//monTableau2.unshift(mangue) 

//sumprimer un item dans le tableau
//monTableau2.pop(); // dernier du tableau
//monTableau2.shift() debut du tableau

//? creer un tableau des fruits preferers max 5 items 
//? remplacer l'index 4 par viande 
//? sumprimer le premier item
//? assigner le tableau dans un nouveau variable tableauFinished

// let fruitPrefered=["mangue","banana","cerise","orange","apple"]

// fruitPrefered[4]="viande"

// fruitPrefered.shift()

//  let tableauFinished=fruitPrefered;

// console.log(tableauFinished)

// const food=["riz","pain"]

// const myArray=["chat","souri","chien","riz","pain","riz2","pain2"];

//concat 
//const newArray=[myArray,...food];
//const newArray=myArray.concat(food)

// recuperer un portion de tableau
// const newArray=myArray.slice(0,2)
// console.log(newArray)

//? assigner le tableau dans un nouveau variable tableauFinished
//?  creer un tableau legumes max 3 
//? ajouter le nouveau tableau dans tableauFinished
//? assigner les deux derniers items du tableauFinished dans un nouveau variable newTableau

// const legumes=["poivron","manioc","choux"]

// //const newTableau=[...tableauFinished,...legumes]
// const newTableau=tableauFinished.concat(legumes)
// console.log(newTableau)

// Object 

// const obj={
//     key: value
// }

// const person1={
//     nom: "john",
//     prenom:"Doe",
//     notes:[15,18,20],
//     isLogin: false,
// }

// console.log(person1.pays="fr")
// console.log(person1)



// //afficher d'objet
// console.log(person1.nom)
// console.log(person1.isLogin)
// console.log(person1["nom"])

//modifier propriety
// person1.nom="billy"

// console.log(person1)

// const person= new Object()
// const firstName="John"
// person.firstName=firstName;
// person.lastName="Doe"
// //? ajouter age et profession
// person.age=28;
// person.profession= "dev"
// //? modifier firstName et lastName 
// person.firstName="bob";
// person.lastName="boby"
// //delete
//  delete person.age

// console.log(person)

//? creer un object animal avec le mot cle new Object 
//? ajouter le name a comme valeur chien 
//? ajouter le vitesse a comme valeur 10
//? ajouter le taille a comme valeur 10cm
//? ajouter le age a comme valeur ce que vous souhaiter
//? sumprimer une property de l'objet
//? afficher chaque etage dans la console

//afficher type

//? Declarer 2 variable eleve1 et eleve2 assigner des valeurs comme prenom
//? creer un object  listDeCour de cours un tableau des cours de legumes
//? ajouter le prix assigner un valeur ce que vous voulez et le temps de cours avec ce que vous voulez
//? creer un tableau shopping avec  le mot cle new Array ou []
//? ajouter l'object listDeCour dans le tableau 
//? afficher l'object disponible dans le tableau

const eleve1="John";
const eleve2="Tom";

const listDeCour={
    legumes:["tomate","choux","pomme de terre"],
    prix:100,
    temps: "10mn"
}

// console.log(listDeCour)

const shopping= [];

shopping.push(listDeCour,eleve1,eleve2);

//recuper longeur du tableau
const longueur=shopping[0].legumes.length;

// console.log(shopping.pop());
// const notreObject=shopping[0]
// delete notreObject.temps
//  console.log(notreObject);

const nega=[-12,36,-55]
const arrayNumbers=[1,5,8,100,300,41];

// arrayNumbers.pop()
// arrayNumbers.shift()
//const newArray=arrayNumbers.slice(3,5)
const newArray=arrayNumbers.concat(nega)
const item=3;
// newArray.unshift(80)
// newArray.shift()
//suprimer item from array
newArray.splice(5,1)

console.log(newArray)
