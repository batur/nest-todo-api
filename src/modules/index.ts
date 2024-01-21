import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { SentryModule } from '@ntegral/nestjs-sentry';

import { PrismaModule } from './prisma';
import { TodoModule } from './todo';
import { UsersModule } from './users';
import packageJson from '../../package.json';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    SentryModule.forRoot({
      dsn: process.env.SENTRY_DSN,
      debug: process.env.NODE_ENV !== 'production',
      environment: process.env.NODE_ENV,
      release: packageJson.version,
      logLevels: ['debug'],
    }),
    PrismaModule,
    TodoModule,
    UsersModule,
  ],
})
export default class ApplicationModule {}
