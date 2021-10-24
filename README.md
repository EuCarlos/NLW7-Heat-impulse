### Stage 1 - NODE JS
In this class we will create the application backend using NodeJS. In this project we will use Typescript, which helps to increase productivity in development; we are going to use Prisma ORM, to work with database and Socket.IO to work with real-time communication.

### Installation
Clone repo:
```
git clone https://github.com/EuCarlos/NLW7-Heat-impulse.git && cd NLW7-Heat-impulse
```
**Install the packages:**
Install packages listed in the `package.json` file
```
yarn // or npm install
```
### Environment variables
create an `.env` file like the `.env.example` and fill in your github credentials
### Run migrations
```
yarn prisma migrate dev
```
### Run the project
Start a node server:
```
yarn dev // or npm run dev
```