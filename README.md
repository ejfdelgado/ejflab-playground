# widesight-core

Code base
Install angular global:

```
npm install -g @angular/cli@18.0.7
```

## Add new application (only one time)

```
ng generate module views/assessment --route assessment --module app.module
```

## Add new view

```
ng generate component views/guides/views/n09-styles --standalone false --skip-tests
```

## Add new component

```
ng generate component views/guides/components/my-component --standalone false  --skip-tests
```

```
gcloud auth login
gcloud config set project ejfexperiments
gcloud auth configure-docker us-docker.pkg.dev
npm run front_back_publish

docker image ls
docker rmi --force 
```

Assesment jsons:
src/assets/nogales/assessment

Links:
http://localhost:4200/assessment/single?questions=mmpi3.en.json&l=en
http://localhost:4200/assessment/single?questions=mmpi3.es.json&l=es

http://localhost:4200/assessment/multiple?questions=mmpi3.en.json&l=en
http://localhost:4200/assessment/multiple?questions=mmpi3.es.json&l=es

