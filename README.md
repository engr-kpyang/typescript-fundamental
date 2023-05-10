# typescript-fundamental
This repository will document my notes on using and building with Typescript

## Commands to run
Run tsc <filename> to compile the file into Javascript
Run "tsc --init" to buid a full tsconfig.json file



##Base configuration
Configuring tsconfig file
Under Modules
- Set rootDir to "./src" as the source directory

Under Emit
- Set outDir to "./dist" as the location of the of the complied javscript file

Turn on "removeComments" and "noEmitOnError"

## After Configuration
**Command "tsc" can run compiling without specifying a file**

## Debugging Typescript in VS Code