var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;

var h = require('./helpers');

// Faz o browser precisar de browser state
var createBrowserHistory = require('history/lib/createBrowserHistory')

/* Router precisa de

  Router
  Route
  Navigation

*/

/* 
  App
*/

var App = React.createClass({

  render: function () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }

})

/*
  Header
  <Header />
*/

var Header = React.createClass({
  render: function () {
    return (
      <header className="top">
        <h1>
          Catch
        <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          day
        </h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
})

/*
  Order
  <Order />
*/

var Order = React.createClass({
  render: function () {
    return (
      <p>Order</p>
    )
  }
})

/*
  Inventory
  <Inventory />
*/

var Inventory = React.createClass({
  render: function () {
    return (
      <p>Inventory</p>
    )
  }
})


/* 
  StorePicker
  um componente tem a variavel que cria uma nova classe, 
  é legal observar que a letra maiuscula evidencia bem que isso
  é uma classe

  são boas praticas colocar parenteses no return
*/

var StorePicker = React.createClass({

  mixins: [History],
  goToStore: function (event) {
    event.preventDefault();
    // pegar os dados do input
    var storeId = this.refs.storeId.value;
    // mudar de storePicker para app
    this.history.pushState(null, '/store/' + storeId);
  },

  render: function () {
    // Variaveis são escritas normalmente, sendo colocadas entre {}, comentarios dentro de return são complicados e é melhor evitar
    // Ex: var name = "Gabriel"
    // <h2>Seu nome é {name}</h2>
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="submit" />
      </form>
    )
  }

});

var NotFound = React.createClass({
  render: function () {
    return <h1>Not found</h1>
  }
})

/*
  Rotas
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path='*' component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
