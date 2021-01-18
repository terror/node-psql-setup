import { Request, Response } from "express";
import { userDBInteractions } from "../database/interactions/user";

export const userController = {
    index: async (_: Request, res: Response) => {
        try {
            const users = await userDBInteractions.all();
            res.status(200).send(JSON.stringify(users, null, 2));
        } catch (err) {
            res.status(500).send(err);
        }
    },

    findById: async (req: Request, res: Response) => {
        const id: string = req.params.id;
        try {
            const user = await userDBInteractions.find(id);
            res.status(200).send(JSON.stringify(user, null, 2));
        } catch (err) {
            res.status(500).send(err);
        }
    },

    create: async (req: Request, res: Response) => {
        const { firstName, lastName } = req.body;
        try {
            const user = await userDBInteractions.create({
                firstName: firstName,
                lastName: lastName
            });
            res.status(200).send(JSON.stringify(user, null, 2));
        } catch (err) {
            res.status(500).send(err);
        }
    }
};
