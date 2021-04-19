import { Injectable } from "@angular/core";


@Injectable()
export class LoggingService {


    log (message : any) {
        console.log('INFO: ', message  );
    }
}