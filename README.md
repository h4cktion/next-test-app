# Nextjs with monogodb connection

Trello like create in Nextjs with Tailwind and a mongo database.

## Show in live

[Trello Like](https://next-test-app-taupe.vercel.app/)

## Installation

Use the package manager to install the app.

```bash
npm i
```

## Requirement

Create an .env.local file and define you mongo database access like so:

```bash
MONGODB_URI=mongodb+srv://<USER_NAME>:<PASSWORD>@freecluste.63vgx.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority
```
Don't forget to replace <USER_NAME>, <PASSWORD> and <DATABASE_NAME> with your values.

## Usage

To run localy:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
  
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
  
## License
[MIT](https://choosealicense.com/licenses/mit/)
