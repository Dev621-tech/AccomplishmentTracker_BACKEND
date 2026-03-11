# 🏆 Accomplishment Tracker Backend 🏆
## [💾 Accomplishment Tracker FRONTEND](https://github.com/Dev621-tech/AccomplishmentTracker_FRONTEND.git)

## 🌟 EVERYTHING IS AN ACCOMPLISHMENT
## API Reference
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/user | Index of All Users |
POST | /api/user | Create A User|
GET | /api/user/:id | Index of A Single User (By ID) |
PUT | /api/user/:id | Update A Single User |
DELETE | /api/user/:id| Delete A Single User |
GET | /api/user/:id/accomplishments| Show All Of A User's Accomplishments |
POST | /api/user/:id/accomplishments| User Create An Accomplishment |
GET | /api/user/:id/posts| Show All Of A User's Posts |
POST | /api/user/:id/posts| User Create A Post |
POST | /api/user/login| Login A User |
GET | /api/accomplishment | Index of All Accomplishment |
POST | /api/accomplishment | Create An Accomplishment |
GET | /api/accomplishment/:id | Index of A Single Accomplishment (By ID) |
PUT | api/accomplishment/:id | Update A Single Accomplishment |
DELETE | /api/accomplishment/:id | Delete A Single Accomplishment |
GET | /api/post | Index of All Posts |
POST | /api/post | Create An Post |
GET | /api/post/:id | Index of A Single Post (By ID) |
PUT | api/post/:id | Update A Single Post |
DELETE | /api/post/:id | Delete A Single Post |


### [🗂️ Organized Using JIRA](https://www.atlassian.com/software/jira?referer=jira.com)

## ⚙️ Setups For User
-   `npm run seed` - to seed all three databases
-   `npm run dev` - to run server

### 🏁 Starter Steps (Building From Stratch)
-   `touch server.js`
-   `npm init -y`
-   `"dev": "nodemon server.js" & "type": "module"`
-   `npm i express dotenv mongoose`
-   `touch .gitignore .env`
-   `node_modules/` inside .gitignore
-   `.env` inside. .gitignore

### 📦 Dependencies
-   mongoose
-   express
-   dotenv
-   cors

