# Employee Task Management Web Application

Full Stack Development – Node.js Lab Examination project using Node.js HTTP, FS, and Express.js modules.

## Project Structure

```
MT1-LABEXAM/
└── EmployeeTaskManagement/
    ├── public/
    │   └── index.html
    ├── screenshots/
    ├── httpServer.js
    ├── expressApp.js
    ├── package.json
    └── package-lock.json
```

## Part A – Node.js HTTP Server

Run from `EmployeeTaskManagement`:

```bash
npm run start:http
```

Server: `http://localhost:3000`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | / | Welcome message |
| GET | /tasks | List tasks as JSON |
| GET | /about | Application information |
| GET | /home | Serve `public/index.html` using FS |
| POST | /add-task | Add a task using JSON |

### POST /add-task body

```json
{
  "id": 3,
  "taskName": "Create Website",
  "assignedTo": "Anurag",
  "status": "Pending"
}
```

## Part B – Express.js CRUD API

Run in a separate terminal:

```bash
npm run start:express
```

Server: `http://localhost:4000`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /tasks | Get all tasks |
| GET | /tasks/:id | Get one task |
| POST | /tasks | Add a task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

POST/PUT requests use JSON bodies. The API returns appropriate success and error status codes, including 201 for successful creation and 404 when a task is not found.

## Testing

Use Thunder Client in VS Code to test the API endpoints. Keep the corresponding server running while testing.

## Screenshots

The `EmployeeTaskManagement/screenshots` directory is reserved for the required lab-exam screenshots, including HTTP server output, FS file serving, and Thunder Client CRUD responses.
