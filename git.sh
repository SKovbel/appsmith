#!/bin/sh

cd webpack
npx webpack --mode production
cd ..


tag=`git describe --tags $(git rev-list --tags --max-count=1)`
if [ -z "$1" ]
then
    tag=`git describe --tags $(git rev-list --tags --max-count=1)`
    echo $tag
    exit
fi

git add .
git commit -m 'save'
git push origin main
git tag $1
git push origin --tags
