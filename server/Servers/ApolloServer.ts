import { ExpressExtension } from './Express'
import { ApolloServer as Apollo, gql, makeExecutableSchema } from 'apollo-server-express'
import Database from '../Core/Database'

import resolvers from '../Api/resolvers'
import typeDefs from '../Api/typeDefs'
import context from '../Api/Context'

export default class ApolloServer implements ExpressExtension {

  public async bind(app: import('express').Application): Promise<any> {
    const server = new Apollo({
      schema: makeExecutableSchema({ typeDefs, resolvers }),
      context
    })
    server.applyMiddleware({ app })
  }

}
