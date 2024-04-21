import { Schema, model } from 'mongoose';

const personagemSchema = new Schema(
{
    name: String,
    description: String,
    resourceURI: String,
    urls: [
        {
        type: String,
        url: String
        }
    ],
}, {
    timestamps: true
});

export default model('Personagem', personagemSchema, 'personagem');
