export interface Parcel {
    id: number;
    name: string;
    createdBy: number;
    createdOn: string;
    isFrom: number;
    goingTo: number;
    dispatched: boolean;
    delivered:boolean;
}