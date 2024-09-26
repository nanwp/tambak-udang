#deoloy to staging
echo "Deploying to staging..."

# down docker-compose
docker compose -f docker-compose-staging.yml down

# pull latest code
git pull

# build docker images
docker compose -f docker-compose-staging.yml up --build -d

echo "Deployed to staging!"
