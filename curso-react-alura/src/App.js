import React, { Component } from 'react';
import './App.css';
import Tabela from './tabela';
import Form from './formulario'
import 'materialize-css/dist/css/materialize.min.css'
import Header from './header'


class App extends Component {

  state = {

    autores:  [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],

  }

  removeAutor = () => {

    const { autores } = this.state

    this.setState(
      {
        autores : autores.filter((autor, posAtual) => {
          console.log(autor, posAtual)
          return posAtual 
        }),
      }
    )
  }

    escutadorDeSubmit = autor => {
      this.setState({ autores: [...this.state.autores, autor]})
    }

  

  

    render() {
      return (
        <fragment>
          <Header />
          <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
          </fragment>
      );

    }
  
  
   
  }
  
  export default App;