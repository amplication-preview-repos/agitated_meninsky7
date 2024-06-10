import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BattleServiceBase } from "./base/battle.service.base";

@Injectable()
export class BattleService extends BattleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
