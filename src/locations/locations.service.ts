import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationsService {
    postLocation(){
        return "this is post location";
    }
}
