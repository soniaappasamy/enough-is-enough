import { IEmail } from "./types";
import { justiceForGeorgeFloyd } from "./templates/justiceForGeorgeFloyd";
import { justiceForTonyMcDade } from "./templates/justiceForTonyMcDade";
import { justiceForRegisKorchinskiPaquet } from "./templates/justiceForRegisKorchinskiPaquet";

export const NEW_LINE = "%0d%0a";

export const allEmails: IEmail[] = [
    justiceForGeorgeFloyd,
    justiceForRegisKorchinskiPaquet,
    justiceForTonyMcDade
];