import { InputType, Field } from '@nestjs/graphql';

import { User as UserType } from '@prisma/client';

@InputType()
export class CreateUserInput implements Partial<UserType> {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;
}
