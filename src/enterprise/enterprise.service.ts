import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enterprise } from './enterprise.entity';

@Injectable()
export class EnterpriseService {
  constructor(
    @InjectRepository(Enterprise)
    private enterpriseRepository: Repository<Enterprise>,
  ) {}

  async create(enterprise: Enterprise): Promise<Enterprise> {
    return this.enterpriseRepository.save(enterprise);
  }

  async findAll(): Promise<Enterprise[]> {
    return this.enterpriseRepository.find();
  }

  async findOne(id: string): Promise<Enterprise> {
    return this.enterpriseRepository.findOneBy({ enterprise_id: id });
  }
}
