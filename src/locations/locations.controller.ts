import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { LocationsService } from './locations.service';
import { Location } from './model/location.model';

@Controller('locations')
export class LocationsController {
    constructor(private locationService: LocationsService){}
    
    
    @UseGuards(JwtGuard)
    @Get('')
    getLocations(){
        return this.locationService.getLocations();
    }

    @UseGuards(JwtGuard)
    @Post('new_location')
    postLocation(@Body() dto: Location){
        console.log(dto);
        return this.locationService.postLocation(dto);
    }
}
