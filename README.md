# First Steps

- Make sure to install the packages using:

```sh
npm i
```

- After that, you can import the thunder-client collections (`thunder-collections.json`) or the postman collections (`postman-collections.json`), both located in the root of this project

# Running this program

Run this command and make sure to provide the json file:

```sh
npm run dev -- --file=./file.json
```

Here ./file.json can be any json file path relative to current directory

In this case, there already exist a file `file.json` in the root of this directory as a sample demo.

# Notes

- The base url for the APIs will always be `http://localhost:5000/yak-shop`
- Status codes have their usual meaning:
  - `200` - success
  - `405` - no such route
  - `400` - data validation failed
  - `500` - server error