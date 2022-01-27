import requests

response_API = requests.get('https://random-data-api.com/api/name/random_name?size=20')

for user in response_API.json():
    print(f"ID: {user['id']} \t Name: {user['name']}")