# graphql-playground-schema-issue

#### Prerequisites

These need to be installed first:
1. [Maven](https://maven.apache.org/install.html) - for running Java Projects
2. [Yarn](https://yarnpkg.com/lang/en/docs/install/) - for running React and HTML app

#### Environment
1. graphql-playground-react: 1.7.23
2. graphql-java-tools: 7.0.1

#### Steps to reproduce:
1. First clone the repo
2. In directory `graphql-playground-app` run command: `yarn install`
2. In directory `graphql-java-tools-example` run command: `mvn spring-boot:run` to start GraphQL Server on `http://127.0.0.1:9001/graphql`
3. In directory `graphql-playground-app` run command: `yarn start` to start GraphQL Playground on `http://localhost:3000`
4. Click on Schema tab, and the app will crash.
5. But following query can be executed successfully:
```
{
  post(id: 123) {
    id
    text
    comments {
      id
      description
    }
  }
}
```

##### GIF
![graphql-playground-schema-tab-issue](https://user-images.githubusercontent.com/29691117/83679988-ed041c80-a5fd-11ea-9a6c-e0ad8ea0dfb6.gif)


#### Working scenarios:
1. From the same GraphQL server, GraphiQL will be able to fetch the Schema which is running on `http://127.0.0.1:9001/graphiql`
2. graphql-playground-electron also fetches the schema successfully without crashing.
3. Another example built with [GraphQL Java](https://github.com/graphql-java/tutorials) only, also works with react and html page. To run that, in directory `graphql-java-example` run command: `mvn spring-boot:run` to start GraphQL Server on `http://127.0.0.1:9002/graphql` and try checking schema from react app.
