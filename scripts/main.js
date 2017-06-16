var React = require('react');
var ReactDOM = require('react-dom');

/* 
  StorePicker
  um componente tem a variavel que cria uma nova classe, 
  é legal observar que a letra maiuscula evidencia bem que isso
  é uma classe

  são boas praticas colocar parenteses no return
*/

var StorePicker = React.createClass({

  render: function () {
    // Variaveis são escritas normalmente, sendo colocadas entre {}, comentarios dentro de return são complicados e é melhor evitar
    var name = "Gabriel";
    return ( 
      <form action="" className="store-selector">
        <h2>Please enter a store {name}</h2>
        <input type="text" ref="storeID" />
        <input type="submit"/>
      </form>
    ) 
  }

});


ReactDOM.render(<StorePicker />, document.querySelector('#main')); 