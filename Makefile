build-container:
	docker build . -t fastify-example:latest

run-container:
	docker run -d -p 3000:3000 --env SECRET_A=A --env SECRET_B=B --env SECRET_C=C fastify-example:latest
