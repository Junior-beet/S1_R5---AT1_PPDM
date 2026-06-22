import api from "./api.js";
import axios from "axios";

export const categoriaRep = {

    async findAll() {
        try {
            const response = await api.get('/categorias');

            console.log('Resposta da API:', response.data);

            return response.data.result;

        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
            throw error;
        }
    },

    async create(Nome) {
        try {
            
            const response = await api.post('/categorias', { nome: Nome, descricao: 'teste padrao para todos ' });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async update(categoria) {
        try {

            const response = await api.put( //recebe o objeto categoria com nome e id
                '/categorias',
                {
                    nome: categoria.Nome,
                    descricao: 'teste padrao'
                },
                {
                    params: {
                        id: categoria.Id
                    }
                }
            );

            return response.data;

        } catch (error) {
            console.error('Erro ao atualizar categoria:', error);
            throw error;
        }
    },

    async delete(categoria) {
        try {
            const response = await api.delete(`/categorias/:${categoria.id}`);

            return response.data;
        } catch (error) {
            console.error('Erro ao deletar categoria:', error);
            throw error;
        }
    }


};