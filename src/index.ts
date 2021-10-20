import { work } from "./template";

export { work } from "./template";

export const Template: ITemplate = {
    work,
};

interface ITemplate {
    work: (value: string) => string;
}
