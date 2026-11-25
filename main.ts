const JOKE_LINE =
  "I told my son his report card must be under water — every grade was below C.";

function render(line: string): Buffer {
  return Buffer.from(`${line}\n`, "utf8");
}

function main(): void {
  process.stdout.write(render(JOKE_LINE));
}

main();
