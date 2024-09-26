#deoloy to staging
echo "Deploying to staging..."

# down docker-compose
docker compose down

# pull latest code
git pull

# build docker images
docker compose up -d --build

echo "Deployed to staging!"
