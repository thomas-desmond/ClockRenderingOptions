export interface IssData  {
    iss_position: IssPosition;
    timestamp: number;
    message: string;
}
 
interface IssPosition {
    latitude: string;
    longitude: string;
}