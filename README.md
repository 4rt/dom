# Dragons of Big Bank

![alt text][logo]

[logo]: preview.png "Dragons game preview"

---

## Description

* Allows the user to start a game
* Fetches and displays the list of ads
* Allows user to pick which ones to solve
* Allows user to purchase items from the shop
* Displays player's score, gold and lives

---

## Project setup


### Run in Docker

```
docker-compose up -d --build
```

### Manual Run

```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Run your end-to-end tests
```
npm run test:e2e
```

---

### Settings
Settings can be made in _.env_ file that is located in the root of the project

```
VUE_APP_API_BASE_URL=https://dragonsofmugloar.com/api/v2
```
