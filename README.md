
## Description



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deploy
We use docker to build the image of this project and deploy to GCP
```
gcloud builds submit --tag gcr.io/vanstock-server/nestjs-server
gcloud run deploy --image gcr.io/vanstock-server/nestjs-server --platform managed
```

## Google cloud 

### Install 
https://cloud.google.com/sdk/docs/downloads-interactive

### NestJS in gcloud
https://whatdafox.com/deploy-nest-js-on-google-cloud-run/
