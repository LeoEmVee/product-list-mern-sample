# Products List MERN Sample

Small products list, built with MongoDB, Express, React and Node.js, following the tutorial by [Developero](https://developero.io/) in YouTube: [Api fetch con Next.js](https://www.youtube.com/watch?v=p9RfYt6PGRc&list=PLkr7dGY4D2sOFts538pghxWaabulH2kMU&index=1).

# To run locally

- `npm i` (on both client and server side)
- `node index.js` (or `nodemon index.js`) on server && `npm start` on client.
- You will need a "storage" folder in server side for the images.
- You will need a ".env" file in each side:
  - Client: REACT_APP_BASE_URL (localhost).
  - Server: APP_PORT (port of your choice), APP_HOST (localhost), DB_NAME (I chose store), DB_PORT (your choice), DB_HOST (local)

# To do

- Complete CRUD functionality (currently only read CR)
- Refactor to TypeScript
- Any suggestions are welcome
