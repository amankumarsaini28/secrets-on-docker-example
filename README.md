# Secrets on Docker example

Example to demo that we can externalise secrets on any docker container using `docker run` command with `--env` flag. 

## How to run

### Using makefile to demo --env flag

```bash
# install dependencies and build container
make build-conatiner

# run docker container with secrets in Dockerfile
make run-container
```

### Using node.js to demo actual secrets

```bash
# install dependencies and build container
make build-conatiner

# install dependencies on local
npm i

# run container using node.js
npm run run:docker
```

### tesing 

```bash
curl http://localhost:3000/env?key=SECRET_A
curl http://localhost:3000/env?key=SECRET_B
curl http://localhost:3000/env?key=SECRET_C
```

