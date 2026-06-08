import api from "./api.js";
import axios from "axios";

export const produtoRep = {


    async findAll() {
        try {
            const response = await api.get('/produtos');


            return response.data.resultado;

        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            throw error;
        }
    },

  

    async update(produto) {
        try {
            const response = await api.put( //recebe o objeto categoria com nome e id
                '/produtos',
                {
                    nome: produto.nome,
                    valor: produto.valor,
                    caminhoImagem 

                },
                {
                    params: {
                        id: produto.id
                    }
                }
            ); 

            return response.data;
        
        } catch (error) {
            console.error('Erro ao atualizar categoria:', error);
            throw error;
        }
    },

    async delete(idProduto) {
        try {
            const response = await api.delete(`/produtos/${idProduto}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            throw error;
        }
    }
}