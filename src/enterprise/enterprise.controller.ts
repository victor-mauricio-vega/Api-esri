import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { Enterprise } from './enterprise.entity';

@Controller('enterprises')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Post()
  create(@Body() enterprise: Enterprise) {
    return this.enterpriseService.create(enterprise);
  }

  @Get()
  findAll() {
    return this.enterpriseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enterpriseService.findOne(id);
  }
}
