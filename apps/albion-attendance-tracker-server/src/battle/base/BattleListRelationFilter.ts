/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BattleWhereInput } from "./BattleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BattleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BattleWhereInput,
  })
  @ValidateNested()
  @Type(() => BattleWhereInput)
  @IsOptional()
  @Field(() => BattleWhereInput, {
    nullable: true,
  })
  every?: BattleWhereInput;

  @ApiProperty({
    required: false,
    type: () => BattleWhereInput,
  })
  @ValidateNested()
  @Type(() => BattleWhereInput)
  @IsOptional()
  @Field(() => BattleWhereInput, {
    nullable: true,
  })
  some?: BattleWhereInput;

  @ApiProperty({
    required: false,
    type: () => BattleWhereInput,
  })
  @ValidateNested()
  @Type(() => BattleWhereInput)
  @IsOptional()
  @Field(() => BattleWhereInput, {
    nullable: true,
  })
  none?: BattleWhereInput;
}
export { BattleListRelationFilter as BattleListRelationFilter };