import {
  IsString,
  IsBoolean,
  MinLength,
  IsNotEmpty
} from 'class-validator'

export class createTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  title: string;

  @IsBoolean()
  @IsNotEmpty()
  @MinLength(1)
  status: boolean;
}