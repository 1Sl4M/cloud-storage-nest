import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'shopalovis@gmail.com',
  })
  email: string;

  @ApiProperty({
    default: 'Shopalov Islam',
  })
  fullName: string;

  @ApiProperty({
    default: '12345',
  })
  password: string;
}
