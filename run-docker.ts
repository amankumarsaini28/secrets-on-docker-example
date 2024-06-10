import { spawnSync } from "node:child_process";

const env: string[] = `
SECRET_A=A
SECRET_B=B
SECRET_C=C
`
  .split("\n")
  .filter((_) => !!_)
  .reduce((acc: string[], curr: string) => {
    return [...acc, "--env", curr];
  }, []);

const out = spawnSync("docker", [
  "run",
  "-d",
  "-p",
  "3000:3000",
  ...env,
  "fastify-example:latest",
]).stderr;

console.log(out.toString());
