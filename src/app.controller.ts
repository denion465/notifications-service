import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notifications-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body;
    // await this.prisma.notification.create({
    //   data: {
    //     id: randomUUID(),
    //     content: 'Você tem mais uma solicitação de amizade.',
    //     category: 'social',
    //     recipientId: randomUUID(),
    //   },
    // });
  }
}
