# Role Based Admin Panel
The Role-Based Access Control (RBAC) Admin Dashboard is a web-based application designed to enable administrators to efficiently manage users, roles, and permissions within an organization or a system. The application is built with React on the frontend, Axios for handling HTTP requests, and a mock JSON server that simulates CRUD operations for users and roles. This setup allows developers and administrators to experience a full-featured RBAC system without requiring a fully-fledged backend during development.

Key Features
User Management:

Add, view, edit, and delete users within the system.
Assign roles to each user and manage their permissions.
Fetch user details by ID, enabling precise control and easy updates for individual users.
Role Management:

Define roles with specific permissions such as read, write, and delete.
Edit or delete roles to accommodate organizational changes in responsibilities or access requirements.
Assign roles to multiple users, streamlining permission management across teams or departments.

Custom API Simulation:

Utilizes json-server to mock API endpoints for development and testing.
Supports CRUD operations on users and roles, enabling a realistic environment to test functionality.
Responsive and User-Friendly Design:

Designed for ease of use, allowing administrators to manage users and permissions seamlessly.
Built with scalability in mind, allowing additional roles, permissions, and user details as needed.
Tech Stack
Frontend: React, Axios
Backend (Mock): JSON Server for simulating REST API
Deployment: Suitable for deployment on platforms like Render, Heroku, or any cloud hosting service with support for static and API hosting.


Project Goals
This project is ideal for companies or applications that need a foundational Role-Based Access Control system. It can be extended and customized for various use cases where user permissions and role-based access are necessary, such as content management systems, SaaS platforms, or enterprise applications.


# Mock Backend Api Runing on LocalHost port 5000
    create json file
    install npm install -g json-server
    run script in terminal -> json-server --watch db.json --port 5000   


