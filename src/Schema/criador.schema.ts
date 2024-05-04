import { Schema, model } from 'mongoose';

const criadorSchema = new Schema(
  {
    name: String,
    funcao: String,
    resourceURI: String,
    contribuicao: [{ type: Schema.Types.ObjectId, ref: 'Quadrinho' }] // Atualiza para aceitar um array de referências aos quadrinhos
  }, {
  timestamps: true
});

export default model('Criador', criadorSchema, 'criador');
