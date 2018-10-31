# Github PR Dashboard

See your pull requests at a glance across multiple repositories.

# Installation

1. Clone repository
2. `npm install`
3. `npm run build` or `npm run dev-build`

# Configuration

1. `cp config/config.json.sample config/config.json`

**Enterprise Instance**

If you are accessing a GitHub Enterprise instance, you will need to set `apiBaseUrl` to the base URL of your GitHub Enterprise installation, e.g. `https://github.mycompany.com/api/v3`.  

**Access Token**

To use the GitHub Personal Access Token for accessing private repositories, `username` and `password` lines in `config/config.json` can be replaced with a single `"token": "MY_PERSONAL_TOKEN"` line. 

GitHub places a very strict rate limit on unauthenticated requests. If you run into this problem, you will need to add your GitHub username and password in `config.json`.

# Running the server

1. `npm start`

This will start the server, listening on port `8080`.

**Custom Port**

You can change the port number by setting a `PORT` environment variable, e.g. `export PORT=80`.

# Adding repositories

Once the server is running, visit it in your web browser and click the gear icon.
