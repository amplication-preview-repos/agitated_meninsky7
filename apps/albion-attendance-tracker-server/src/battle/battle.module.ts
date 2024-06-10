import { Module } from "@nestjs/common";
import { BattleModuleBase } from "./base/battle.module.base";
import { BattleService } from "./battle.service";
import { BattleController } from "./battle.controller";
import { BattleResolver } from "./battle.resolver";

@Module({
  imports: [BattleModuleBase],
  controllers: [BattleController],
  providers: [BattleService, BattleResolver],
  exports: [BattleService],
})
export class BattleModule {}
