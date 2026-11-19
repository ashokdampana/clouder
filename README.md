"# clouder" 

---- start server 
bun run start 
or 
bun run dev 

---- start client
npm run build
or
npm run dev

---- api ----
GET /api/health - returns the server status
POST /api/data - accepts JSON such as {"name":"Ashok"} and returns the input
