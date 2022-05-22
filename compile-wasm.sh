clang \
--target=wasm32 \
-nostdlib \
-Wl,--no-entry \
-Wl,--export-all \
-03 \
-o add.wasm \
add.c