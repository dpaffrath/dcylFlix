import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setvalues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setvalues({
            ...values,
            [chave]: valor
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
          infosDoEvento.target.getAttribute('name'),
          infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(evento) {
                evento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])

                setvalues(valoresIniciais)
            }}>
                <FormField 
                    lable='Nome: '
                    type='text'
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}  
                />
                <FormField 
                    lable='Descrição: '
                    type='????'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}  
                />
                <FormField 
                    lable='Cor: '
                    type='color'
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}  
                />
                <button>
                    Cadastrar
                </button>
            </form>
            
            {categorias.map((categoria, indice) => {
                return (
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                )
            })}

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;