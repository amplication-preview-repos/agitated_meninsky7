/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AttendanceWhereUniqueInput } from "../../attendance/base/AttendanceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AttendanceUpdateManyWithoutBattlesInput {
  @Field(() => [AttendanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttendanceWhereUniqueInput],
  })
  connect?: Array<AttendanceWhereUniqueInput>;

  @Field(() => [AttendanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttendanceWhereUniqueInput],
  })
  disconnect?: Array<AttendanceWhereUniqueInput>;

  @Field(() => [AttendanceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttendanceWhereUniqueInput],
  })
  set?: Array<AttendanceWhereUniqueInput>;
}

export { AttendanceUpdateManyWithoutBattlesInput as AttendanceUpdateManyWithoutBattlesInput };
