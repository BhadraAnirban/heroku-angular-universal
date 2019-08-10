# Deploy Angular universal in Heroku

## Steps:

### 1.	ng add @nguniversal/express-engine --clientProject {angular-project-name}
### 2.	Test: npm run build:ssr
### 3.	Under the project main folder add a file named- Procfile, without any extension. It will be at the same hierarchy of package.json.
### 4.	Inside Procfile, write - 
  ```
  web: npm run start:heroku  
  ```
### 5.	Inside package.json, under script object write –
```
"start:heroku": "node dist/server",
    "postinstall": "npm run build:ssr"
```
### 6.	Push to github
### 7.	Login th Heroku website and deploy using the github account.
