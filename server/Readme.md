Setting Up Project
=======

## 1. Before start
Make sure that you have NodeJS (_version 10.6.0_) installed on your machine.
After that, you have to install TypeScript, Typedoc and TypeScript Node.

`npm install -g typescript ts-node typedoc`

## 2. Install dependencies
`npm install`

## 3. Supported commands
* `npm run start` - run REST API application. Do not forget to set spotify clientSecret to NODE_ENV before
* `npm run doc` - run typedoc for documentation generation


## 4. Debug in Webstorm
1. Add New Configuration (Node.js)
2. Add Node Parameters `--inspect --require ts-node/register`
3. Select `src/server.ts` as JavaScript file