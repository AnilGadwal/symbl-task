curl 'https://random-data-api.com/api/name/random_name/?size=5' | jq '.[].id, .[].name'