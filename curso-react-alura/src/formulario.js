import React, { Component } from 'react';


class Formulario extends Component {

    constructor(props) {
        super(props);
        this.stateInitial = {
            nome: "",
            livro: "",
            preco: "",

        }
        this.state = this.stateInitial
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value,
        })
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state)
        this.setState(this.stateInicial)
    }

    

    render() {

        const { nome, livro, preco } = this.state;
        return(
            <form>
            <div class="row">
                    
               
            <div className="col s4">
    <label  htmlFor="nome">Nome</label>
    <input
        id="nome"
        type="text"
        name="nome"
        value = {nome}
        onChange = {this.escutadorDeInput}
        />
        </div>
            <div className="col s4">
    <label htmlFor="livro">Livro</label>
    <input
        id="livro"
        type="text"
        name="livro"
        value = {livro}
        onChange = {this.escutadorDeInput}
        />
        </div>

            <div className="col s4">
    <label htmlFor="preco">Preço</label>
    <input
        id="preco"
        type="text"
        name="preco"
        value = {preco}
        onChange = {this.escutadorDeInput}
        />
        </div>

            <div className="row">
    <button className="col s12 center waves-effect waves-light indigo lighten-2 btn"  type="button" onClick={this.submitFormulario}>Salvar
    </button>
    </div>
    </div>
</form>
        )
    }

}

export default Formulario;