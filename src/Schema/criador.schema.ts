import { Schema, model } from 'mongoose';

const criadorSchema = new Schema(
    {
        name: String,
        funcao: String,
        resourceURI: String,
        contribuicao: { type: Schema.Types.ObjectId, ref: 'Quadrinho' }
      }, {
    timestamps: true
});

export default model('Criador', criadorSchema, 'criador');
