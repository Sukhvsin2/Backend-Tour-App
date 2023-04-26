import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {

    saveImg(file: Express.Multer.File){
        return {
            fileName: file.filename,
            filePath: file.path
        }
    }
}
