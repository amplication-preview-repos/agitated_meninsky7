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
import { EnumAttendanceAttendanceStatus } from "./EnumAttendanceAttendanceStatus";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { BattleWhereUniqueInput } from "../../battle/base/BattleWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class AttendanceCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumAttendanceAttendanceStatus,
  })
  @IsEnum(EnumAttendanceAttendanceStatus)
  @IsOptional()
  @Field(() => EnumAttendanceAttendanceStatus, {
    nullable: true,
  })
  attendanceStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => BattleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BattleWhereUniqueInput)
  @IsOptional()
  @Field(() => BattleWhereUniqueInput, {
    nullable: true,
  })
  battle?: BattleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { AttendanceCreateInput as AttendanceCreateInput };
