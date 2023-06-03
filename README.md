# The Web Team ESLint Config

## Installation
```bash
pnpm i https://github.com/the-web-team/eslint-config
```

## Install Updates
This should install updates for the package after cache TTL runs out.
```bash
pnpm i
```
If you have issues getting the latest version try:
```bash
pnpm i https://github.com/the-web-team/eslint-config --force
```

## How can I force it to stay on a specific version
You can set a specific commit hash in your `package.json`.
```json
{
  "devDependencies": {
    "@the-web-team/eslint-config": "github:the-web-team/eslint-config#{COMMIT_HASH}"
  }
}
```

## Contributing Guidelines
- Always bump the version by 1 major version each time you make _any_ changes.
