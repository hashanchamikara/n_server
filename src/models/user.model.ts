import {DataTypes} from 'sequelize';
import sequelize from "../config/database";
import {BaseModel} from "../core/models/base.model";

class UserModel extends BaseModel {

}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        autoIncrementIdentity: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'users',
    freezeTableName: true,
});
export default UserModel;
