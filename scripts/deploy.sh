#!/bin/sh
# Build the site and publish dist/ to the gh-pages branch, which GitHub Pages serves.
# Usage: npm run deploy
set -e
cd "$(dirname "$0")/.."

remote=$(git remote get-url origin)
repo=$(basename -s .git "$remote")
source_commit=$(git rev-parse --short HEAD)

# Project sites live at https://<user>.github.io/<repo>/, so assets and routes need that prefix.
# Override BASE_PATH (e.g. BASE_PATH=/) when deploying to a custom domain.
BASE_PATH="${BASE_PATH:-/$repo/}" npm run build

cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "${DEPLOY_MESSAGE:-Deploy $source_commit}"
git push -f -q "$remote" gh-pages
rm -rf .git

echo "Deployed $source_commit to gh-pages. It can take a minute to go live."
