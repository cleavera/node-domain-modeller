import {IRoutingError} from '../interfaces/IRoutingError';
import {ServerError} from './ServerError.node';

export class DatabaseError extends ServerError implements IRoutingError {
    name: string = 'DatabaseError';

    message: string;

    table: string;

    statusCode: number = 500;

    underlyingError: any;

    constructor(table: string, message: string, underlyingError: any) {
        super();
        this.table = table;
        this.message = message;
        this.underlyingError = underlyingError;
    }
}
