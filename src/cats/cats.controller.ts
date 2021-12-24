import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(201)
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get('ab*cd')
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  // @Get(':id')
  // findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} cat`;
  // }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
