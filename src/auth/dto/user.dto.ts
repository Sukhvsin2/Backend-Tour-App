import { IsEmail, IsEnum, IsNotEmpty, IsString} from "class-validator";
import { userType } from "src/auth/models/auth.model";

export class SignupDto{
    @IsNotEmpty()
    @IsEnum(userType)
    user_type: userType;

    @IsNotEmpty()
    @IsString()
    fName: string;

    @IsNotEmpty()
    @IsString()
    lName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export class LoginDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}