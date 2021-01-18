import { User } from "../models/user";
import { IUser } from "../../interfaces";

export const userDBInteractions = {
    create: (user: IUser) => {
        return User.create(user);
    },

    all: () => {
        return User.findAll();
    },

    find: (id: string) => {
        return User.findOne({
            where: {
                id: id
            }
        });
    }
};
