To set up your npm configuration, generate a `.npmrc` file based on the provided `.npmrc.example`:

```sh
cp .npmrc.example .npmrc
```

Replace `NPMRC_NODE_AUTH_TOKEN` value in `.npmrc` with your authentication tokens:

- 1 Visit [Github tokens page](https://github.com/settings/tokens)
- 2 Create a clasic toke
- 3 Create your 'read:packages' token

 <p align="center">
  <img src="./assets/npmrc-token-create.png" alt='monorepo diagram' width="300" />
</p>
  <p align="center">
  <img src="./assets/npmrc-token-sopes.png" alt='monorepo diagram' width="550" />
</p>
