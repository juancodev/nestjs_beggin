import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsDate
} from 'class-validator';

export class CreateUserDto {
  id?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  //@IsDate()
  createAt?: Date;
  //@IsDate()
  updateAt?: Date;
}