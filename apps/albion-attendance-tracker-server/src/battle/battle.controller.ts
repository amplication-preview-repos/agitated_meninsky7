import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BattleService } from "./battle.service";
import { BattleControllerBase } from "./base/battle.controller.base";

@swagger.ApiTags("battles")
@common.Controller("battles")
export class BattleController extends BattleControllerBase {
  constructor(protected readonly service: BattleService) {
    super(service);
  }
}
