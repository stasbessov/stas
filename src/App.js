import React from "react";

const App = () => {
  let piine = 3;
  let sir = 5;

  // var
  // const
  // let

  // string => 'Some text'  "Some text"  `Some text`
  // number => 23
  // boolean => true / false

  // ctrl+ / -> pentru comentare cod

  // console.log('My')
  // console.log('Name')
  // console.log('is')

  // console.log(1 + 1 ) <- adaugi numere
  // console.log('piine' + '1')  <- adaugi texte

  // ctrl + ` <- deschizi terminal
  // npm start <-pornesti proiect

  // console.log(piine + sir / 2  -3)

  //  + => plus
  //  - => minus
  //  / => inpartire
  // * => inmultire
  //  ** => putere
  //  > 
  //  >=
  //  <
  //  <=
  //  ===

  // daca password mai mic decit 5, console.log('password prea  mic')
  // daca password mai mare decit 10, console.log('password prea  mare')
  // daca narmalina , console log narmalina
  let stas = 1 
  // console.log(stas+1)
  // console.log(password.length);
  let pivas = 'sadfgg'

  let lungimeaPivas = pivas.length

  console.log(lungimeaPivas);
  
    // if ( 2 > 1 ){
  
    //   console.log('2 e mai mare ca 1')
  
    // } else if (2 < 1){
    //   console.log(' 2 e mai mic ca 1')
    // } else if (2 === 2 ) {
    //   console.log('2 este egal cu 2')
    // }

    // if (ceva){
    //   alteceva
    // } else{
    //   mai altceva
    // }
    
    
    // daca parola mai lunga decit 5 caracteere, console.log('e ok')


    // daca parola mai mica decit 5 caracteere, console.log('e prea mica')
  let password= 'abc'
  // .length
  // 


  let x  = 4
  let y = 3


if ( 'abc' === 'abc' ) {
  console.log(2234)
}








  // if (3 > 2){
  //   console.log( "That's true")
  // } else if(3 < 2){
  //   console.log( "That's something")
  // } else{
  //   console.log( "That's false")
  // }

  // Container pentru HTML/JSX
  return (
    <div>
      <h1>Stas invata programae</h1>

      <p>Text lung</p>

      <a href="https://www.google.com/" target="_blank">
        Youtube
      </a>

      <button> This is a button</button>
    </div>
  );
};

export default App;
