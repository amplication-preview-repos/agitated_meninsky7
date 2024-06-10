import * as graphql from "@nestjs/graphql";
import { BattleResolverBase } from "./base/battle.resolver.base";
import { Battle } from "./base/Battle";
import { BattleService } from "./battle.service";

@graphql.Resolver(() => Battle)
export class BattleResolver extends BattleResolverBase {
  constructor(protected readonly service: BattleService) {
    super(service);
  }
}
