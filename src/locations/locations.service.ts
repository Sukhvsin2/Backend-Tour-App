import { Injectable } from '@nestjs/common';
import { Location } from './model/location.model';

@Injectable()
export class LocationsService {
    postLocation(dto: Location){
        
        return "this is post location";
    }

    getLocations(){
        return "This is get locations";
    }
}
