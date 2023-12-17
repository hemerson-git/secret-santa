# ROUTES

## ADMIN

-POST /admin/login

### Events

- GET /admin/events
- GET /admin/events/:id
- POST /admin/events
- PUT /admin/events/:id
- DELETE /admin/events/:id

### GROUPS

- GET /admin/events/:id_event/groups
- GET /admin/events/:id_event/groups/:id
- POST /admin/events/:id_event/groups
- PUT /admin/events/:id_event/groups/:id
- DELETE /admin/events/:id_event/groups/:id

### PARTICIPANTS

- GET /admin/events/:id_event/groups/:id_groups/people
- GET /admin/events/:id_event/groups/:id_groups/people/:id
- POST /admin/events/:id_event/groups/:id_groups/people
- PUT /admin/events/:id_event/groups/:id_groups/people/:id
- DELETE /admin/events/:id_events/groups/id_groups/people/:id

## API

### Events

- GET /events/:id
- GET /events/:id_event/person?cpf=1234
