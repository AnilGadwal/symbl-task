# Anil Gadwal's Assignment

## cURL API Call
Make sure you have `cURL` and `jq` installed on your system before executing the curl command.

examples:

```bash
brew install curl jq
```

or

```bash
npm install curl jq
```

or

```bash
yarn install curl jq
```

<br><hr>

## JavaScript API Call

To open `index.html` in your browser double-click the file. 

[Main File](./javascript_api_call/index.html)

<br><hr>

## NodeJS API Call

[Main File](./nodejs_api_call/api_call.js)

### Command

```bash
        node api_call.js
```

<br><hr>

## React App

The web application is also mobile responsive. 

- [Code File](ReactJS_api_call)
- [Hosted Site](https://symbl-task.web.app)

<br>

### Commands

If Node is installed

```bash
        npm i
```

```bash
        npm run start
```

Docker Commands

```bash
        cd reactjs_api_call
```

```bash
        docker image build -t frontend .
```

```bash
        docker container run -p 3000:3000 --name client frontend
```

