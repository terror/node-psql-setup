import { DataTypes } from "Sequelize";
import { db } from "../config";

export const User = db.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
});
