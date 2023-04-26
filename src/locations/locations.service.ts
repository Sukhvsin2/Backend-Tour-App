import { Injectable } from '@nestjs/common';
import { Location } from './model/location.model';
import { UploadController } from 'src/upload/upload.controller';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class LocationsService {
    constructor(private uploadService: UploadService){}

    postLocation(dto: Location){
        // this.uploadService.saveImg()
        return dto
    }

    getLocations(){
        return "This is get locations";
    }
}
