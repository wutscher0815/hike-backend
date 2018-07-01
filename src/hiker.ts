import * as hikerList from './hikerList';
import { IsNumber, IsDate, IsNotEmpty } from "class-validator";

export class Hiker {
    @IsNumber()
    lat: number;

    @IsNumber()
    lng: number;

    name: string = '';

    @IsNotEmpty()
    id: string

    @IsDate()
    expires: Date;

    @IsDate()
    timestamp: Date;

    constructor(hiker: HikerInput) {
        this.lat = hiker.lat;
        this.lng = hiker.lng;
        this.name = hiker.name;
        this.id = hiker.id || hikerList.nextId();
        this.timestamp = new Date();
        this.expires = new Date(this.timestamp.getTime() + 6 * 60 * 60 * 1000);
    }
}

export class HikerInput {
    @IsNumber()
    lat: number
    @IsNumber()
    lng: number
    name: string

    id?: string
}