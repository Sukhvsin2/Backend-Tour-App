import { Controller, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    constructor(private uploadService: UploadService){}

    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './assets/locations',
            filename: (req, file, cb) => {
                const f = file.originalname.split(".")
                const fileName = f[0];
                const fileExtension = f[f.length-1];
                const newFileName = fileName.split(" ").join("_") + "_" + Date.now() + "." + fileExtension;
                
                cb(null, newFileName);
            },
        }), 
        fileFilter: (req, file, cb) => {
            if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
                cb(null, false);
            }
            cb(null, true);
        }
    }))
    postImage(@UploadedFile() file: Express.Multer.File){
        return this.uploadService.saveImg(file);
    }
}
