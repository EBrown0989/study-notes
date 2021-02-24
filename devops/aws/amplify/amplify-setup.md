# Configuring Amplify on WSL2 with Ubuntu

There's currently an issue with WSL2 and CORS that makes the Amplify Admin UI fail to post credentials for setting up the local amplify project.
I came across this when running the whole `amplify pull --appId [appId] --envName staging` command.

A helpful post in GitHub issues gave me a workaround for this problem. Basically you run the `amplify pull` command in one terminal and then run this in another:

```bash
curl -d '-------past in the payload from the failed fetch--------' -H "Content-Type: application/json" -X POST http://127.0.0.1:4242/amplifyadmin
```

Note: I could not get the fetch payload from firefox dev tools, so I had to try the setup through chrome instead.

[GitHub Issue Comment for Ref](https://github.com/aws-amplify/amplify-adminui/issues/84#issuecomment-772466619)
