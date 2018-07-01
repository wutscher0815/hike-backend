import { Hiker } from './hiker';
import { validate } from "class-validator";

const hikers: Map<string, Hiker> = new Map<string, Hiker>();
const removecallbacks: Map<number, Function> = new Map<number, Function>();
let callbacks = 0;

export function addHiker(hiker: Hiker): Promise<any> {
    return validate(hiker).then(errors => { // errors is an array of validation errors
        if (errors.length > 0) {
            console.log('validation error');
            throw new Error('validation error');
        } else {
            console.log("validation succeed");
            hikers.set(hiker.id, hiker);
            const expiresIn = hiker.expires && (hiker.expires.getTime() - (new Date()).getTime()) || 6 * 60 * 60 * 1000;
            setTimeout(() => hikers.delete(hiker.id), expiresIn)
        }
    });

}

export function getAll(): Hiker[] {
    [...hikers.values()]
        .filter(hiker => hiker.expires < new Date())
        .forEach(hiker => this.removehiker(hiker));
    return [...hikers.values()];
}

export function nextId(): string {
    return 'hiker_' + hikers.size;
}

export function removehiker(hikerId: string): boolean {
    return hikers.delete(hikerId);
}


export function registerRemoveCallback(callback: Function) {
    this.removecallbacks.set(callbacks++, callback);
}