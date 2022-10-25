echo building...

for folder in $(ls src); do
  esbuild src/$folder/index.ts --bundle --minify --target=node14 --outdir=build/$folder --platform=node
done
