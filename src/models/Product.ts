import { Sequelize, DataTypes, Model } from 'sequelize';

interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    description?: string;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: number;
    public name!: string;
    public price!: number;
    public description?: string;
}

export const initProduct = (sequelize: Sequelize): void => {
    Product.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'Product',
            tableName: 'products',
        }
    );
};

export default Product;