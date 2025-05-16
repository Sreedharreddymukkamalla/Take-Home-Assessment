import { IsIn, IsOptional, IsString, IsDateString } from 'class-validator';

export class QueryClientDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsDateString()
  birthday?: string;

  @IsOptional()
  @IsIn(['Checking', 'Savings'])
  accountType?: string;
}
