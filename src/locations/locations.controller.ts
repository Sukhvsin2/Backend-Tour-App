import { Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
    constructor(private locationService: LocationsService){}
    
    @UseGuards(JwtGuard)
    @Post('new_location')
    postLocation(){
        return this.locationService.postLocation();
    }
}
