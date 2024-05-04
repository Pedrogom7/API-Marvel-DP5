import { Schema, model } from 'mongoose';

const personagemSchema = new Schema(
    {
        name: String,
        description: String,
        resourceURI: String,
        urls: [
            {
                type: [Object],
                url: [Object]
            }
        ],
    }, {
    timestamps: true
});

export default model('Personagem', personagemSchema, 'personagem');


