const output = document.querySelector("#output");
output.textContent = `Initializing WASM...`;

const start = performance.now();
const {
  instance: {
    exports: { add },
  },
} = await WebAssembly.instantiateStreaming(fetch("./add.wasm"));
const end = performance.now();

output.textContent = `
WASM Loaded
WASM add result: ${add(100, 200)}
WASM download + parse + compile time: ${(end - start).toFixed(4)}ms
`;
