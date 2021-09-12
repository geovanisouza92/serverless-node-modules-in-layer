#!/bin/bash

mkdir layer
cat package.json | jq '{ dependencies: .dependencies }' > layer/package.json
npm --prefix layer install
