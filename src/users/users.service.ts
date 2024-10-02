import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}
  getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(user: any) {
    return this.prisma.user.create({ data: user });
  }
}
