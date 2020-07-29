import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <Link to="/cadastro/categoria">
                <h1>Cadastro de Categoria</h1>
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;