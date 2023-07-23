import joi from 'joi';

const valid_actions = ['LEFT', 'RIGHT'];

export interface Description {
    name: string;
    alphabet: string[];
    blank: string;
    states: string[];
    initial: string;
    finals: string[];
    transitions: {
        [key: string]: {
            read: string;
            to_state: string;
            write: string;
            action: "LEFT" | "RIGHT";
        }[];
    };
}

export const DescriptionJoi = joi.object({
    name: joi.string().required(),
    alphabet: joi.array().items(joi.string().length(1)).required(),
    blank: joi.string().valid(joi.in('alphabet')).required(),
    states: joi.array().items(joi.string()).min(1).required(),
    initial: joi.string().valid(joi.in('states')).required(),
    finals: joi.array().items(joi.string()).required(),
    transitions: joi.object().pattern(
        joi.string(),
        joi.array().items(
            joi.object({
                read: joi.string().required(),
                to_state: joi.string().valid(joi.in('states', {
                    ancestor: 4,
                })).required(),
                write: joi.string().valid(joi.in('alphabet', {
                    ancestor: 4,
                })).required(),
                action: joi.string().valid(...valid_actions).required(),
            })
        )
    ),
});
