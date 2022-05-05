#!/bin/bash
set -e
set -v

if [ ! -d tmp ]; then
  mkdir tmp -p
  pushd tmp
  git clone https://github.com/arso-project/sonar.git
  pushd sonar
else
  pushd tmp
  pushd sonar
  git pull
fi
yarn
yarn docs:client
popd
popd

rm -r static/apidocs-client || true
cp -r tmp/sonar/packages/client/docs static/apidocs-client
yarn build
