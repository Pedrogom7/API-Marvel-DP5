import { Schema, model } from 'mongoose';

const quadrinhoSchema = new Schema(
    {
        title: String,
        description: String,
        dates: [
            {
                type: String,
                date: Date
            }
        ],
        thumbnail: {
            path: String,
            extension: String
        },
    }, {
    timestamps: true
});

export default model('Quadrinho', quadrinhoSchema, 'quadrinho');
