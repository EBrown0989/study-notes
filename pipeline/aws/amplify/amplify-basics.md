# Amplify Basics (React focused)

>- [Building Serverless Web Applications with React & AWS Amplify](https://egghead.io/courses/building-serverless-web-applications-with-react-aws-amplify)
- [Amplify Framework](https://aws-amplify.github.io)

### Install & Configure

```bash
yarn global add @aws-amplify/cli
amplify configure
```

Select your AWS region `us-east-2` and create a cli-user. This goes to the IAM dashboard
for your AWS account. Next Permissions > Next Review > Create User.

> You'll need the `Access key ID` and `Secret access key`.

### Configure a React App with AWS Amplify

```bash
npx create-react-app amp-app
cd $_
amplify init
```

Now you'll be prompted for options. Select a `javascript` app, `React` framework,
`src`, `build`, `yarn run build`, `yarn run start`. Pick the cli-user that was
create earlier. Now Amplify content will be in the project's directory.

> I tried using yarn run-script build, but this failed whenever it was time to publish.

Finally, setup the libraries for the app.

```bash
yarn add aws-amplify aws-amplify-react
```

## Automated Configuration with CLI

| API | Command | Import |
| --- | --- | --- |
| API (GraphQL) | `amplify add api` | `import Amplify, { API, graphqlOperation } from aws-amplify;` |
| API (REST) | `amplify add api` | `import Amplify, { API } from 'aws-amplify';` |
| Authentication | `amplify add auth` | `import Amplify, { Auth } from 'aws-amplify';` |
| *Auth in React* | *see above* | `import { withAuthenticator } from 'aws-amplify-react'; // or 'native'` |
| Storage | `amplify add storage` | `import Amplify, { Storage } from 'aws-amplify';` |

> After adding amplify features, use `amplify push` to push the new configuration
into your account, thus creating and provisioning the new resources.

> Use `amplify status` to view the enabled Amplify services.

> Use `amplify add` or `amplify remove` to add or remove features, and respectively
create or destroy associated resources on your account.

#### [Create & Interact with an AWS AppSync GraphQL API with AWS Amplify](https://aws-amplify.github.io/docs/js/api#using-aws-appsync)

Run `amplify add api` to create an AWS AppSync API. Choose `GraphQL` and then
name the API. Once finished with creating the GraphQL API, use `amplify push` to
create the resource on your account.

> I used `authorization: API key`, `annotated GraphQL schema: No`, `guided
schema create: Yes`, and then described the project as `Single object with fields`.
From there, you might want to edit `schema.graphql`.

Head to the AWS console and open `AWS AppSync` to look at the new API. Look under
`Schema` to see the schema that was auto-generated for you. Next, select `Queries`
to start executing queries and mutations against the API. You can then populate
the API with a bit of data manually and use it to test your App's ability to fetch
data using this API.

#### [Create & Interact with a Serverless REST API with AWS Lambda from React](https://aws-amplify.github.io/docs/js/api#using-rest)

Run `amplify add api` to add a `REST` API using an AWS Lambda function. You can
then create:

- REST endpoints that trigger Lambda functions.
- REST endpoints which enable CRUD operations on an Amazon DynamoDB table.

You can choose to use existing resources or create new ones during setup. Update
your backend with the `push` command.

Your Lambda function should be located in the amplify directory, and you can proceed
to edit the local function. `amplify/backend/function/{function_name}/source/app.js`.
You can hard-code some data into the get function to test the feature out, or add
`axios` and pass in the URL for an API from which you'd like to have the app fetch data.
I used `https://swapi.co/api/people/`. Don't forget to use `amplify push` once you've
finished making updates.

#### [React & React Native - Using withAuthenticator HOC](https://aws-amplify.github.io/docs/js/authentication#using-auth-components-in-react--react-native)
```javascript
export default withAuthenticator(App, {
                // Render a sign out button once logged in
                includeGreetings: true,
                // Show only certain components
                authenticatorComponents: [MyComponents],
                // display federation/social provider buttons
                federated: {myFederatedConfig},
                // customize the UI/styling
                theme: {myCustomTheme}});
```

#### [Store Data in Amazon S3 with React](https://aws-amplify.github.io/docs/js/storage)

To add storage using S3, run `amplify add storage`. I added `Content`, which is
for Images, audio, video, etc. The CLI will have you enable auth if you haven't
already done so. Once finished, use `amplify push` to create the service in your
account.

> Note: This feature was unable to function properly while I was testing it with
my app. I used solutions provided for those facing a similar issue, but they none
were able to fix my cloudformation error. In my case, I had to manually configure
storage for my app. [Manual Setup](https://aws-amplify.github.io/docs/js/storage#manual-setup)

#### [Deploy Your React Application to AWS](https://aws-amplify.github.io/docs/cli/hosting?sdk=js)

There are multiple ways to deploy and host the Amplify app:

- Amplify CLI
- AWS Amplify Console

For the CLI, simply enter `amplify add hosting` to add hosting to the app. Choose
`dev` environment for S3 with HTTP or `prod` for S3 with HTTPS with CloudFront
distribution. I simply used `index.html` for the index doc and error doc. Now,
you should be able to deploy the setup by running `amplify publish`.

##### Amplify Console

This is apparently the "preferred way" of deploying Amplify applications. It has
built-in CI/CD and atomic deployments.

> The concept of atomicity means a deployment that has either been executed completely
or not executed at all, leaving no trace to the working code on the server. This
means that a live website will only get updated once the deployment has finished
successfully.

- [AWS Amplify Console](https://aws.amazon.com/amplify/console/)
- [AWS Amplify Console User Guide - Get Started](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html)
