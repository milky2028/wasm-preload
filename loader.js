const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const output = document.querySelector("#output");

await sleep(2000);

const {
  instance: {
    exports: { add },
  },
} = await WebAssembly.instantiateStreaming(fetch("./add.wasm"));

output.textContent = `WASM Add Result: ${add(100, 200)}`;
