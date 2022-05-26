clang \
--target=wasm32 \
-nostdlib \
-Wl,--no-entry \
-Wl,--export-all \
-O3 \
-o add.wasm \
add.c