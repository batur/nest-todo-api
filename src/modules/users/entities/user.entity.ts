import { ObjectType, Field } from '@nestjs/graphql';

import { User as UserType } from '@prisma/client';

@ObjectType()
export class User implements UserType {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
