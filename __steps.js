/**
 * ------------------------------------
 *  Create a node server with five steps
 * -------------------------------------
 * 1. create folder
 * 2. npm init -y
 * 3. npm i express cors mongodb
 * 4. added "script-dev":"nodemon index.js" under "script" in package.json file
 * 5. create an index.js file in project folder
 * 6. use 5 to create a node server/  in index.js file
 * 6.1 require express
 * 6.2 call express
 * 6.3 create a port variblae
 * 4.4 app.get()
 * 4.5 app.lister
 * ----------------
 * Middleware
 * -----------------
 * 1. require cors
 * 2. app.use(cors())
 * 3. app.use(express.json())
 * 
 * -----------------------
 * Create Atlas Account
 * -----------------------
 * 1. sign up with google
 * 2. create cluster
 * 3. create user and password
 * 4. Network Access --> ip address: allow all
 * 5. database > connect > code copy
 * 
 * ------------------------
 * CRUD Operation
 * -----------------------
 * 1. node mongodb crud > fundamentals
 * 2. create async run function
 * 
 * ----------------------
 * Integrate sending data from clint to server
 * ----------------------
 * 1. Client side: ceate form
 * 2. on submit get form data and create user object.
 * 3. on server: Create user POST method to receive data on the backend
 * 4. on client side: set fetch with POST,headers,body
 * 5. make sure you return a json from the POST API
 * 
 * ------------------------
 * Load Data to the client side
 * ----------------------------
 * 1. create get Api on the server side
 * 2. create a qurey object 
 * 3. collection.find(query)
 * 4. cursor.toArray()
 * 5. return the result
 * 6. from client useEffect and display like you have done before
 * 
 * -----------------------
 * DELETE
 * -----------------------
 * 
 */