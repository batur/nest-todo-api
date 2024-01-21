import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => String, { description: 'Example field (placeholder)' })
  exampleField: string;
}
