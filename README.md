# Title icon
Description project

Link to the github page https://github.com/sbuijs/



## SASS
https://dev.to/chrissiemhrk/how-to-setup-sass-in-your-project-2bo1  
In terminal:
- npm init
- npm install node-sass

In the package.json file
```
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
```

change to:
```
"scripts": {
"sass": "node-sass -w scss/ -o css/ --recursive"
},
```


```
npm run sass
```




## REST API (json server)

https://dev.to/rohithooda/create-a-full-fake-rest-api-with-zero-coding-in-less-than-30-seconds-seriously-2lfk  
https://github.com/typicode/json-server

npm install -g json-server

`json-server --watch db.json`  
`json-server --watch db.json --port 3004`

```
json-server --watch db.json
```

