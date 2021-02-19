import {
  IsDateString,
  IsNotEmpty,
  IsString,
  // Matches
} from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  //  @Matches(
  //    /^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i,
  //    {
  //      message: '$field must be formatted as yyyy-mm-dd',
  //    },
  //  )
  birth: Date;
}
