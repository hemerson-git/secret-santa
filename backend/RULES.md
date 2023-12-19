# Tables

- EVENTS
- FAMILIES/GROUPS
- PARTICIPANTS

## Events

- id STRING PK
- status BOOLEAN default=false
- title STRING
- description STRING
- groupable BOOLEAN default=false

## eventGroups

- id STRING PK
- id_event STRING (RELATED to events.id)
- name STRING

## eventParticipants

- id STRING PK
- id_event STRING (RELATED to events.id)
- id_group STRING (RELATED to eventsGroup.id)
- name STRING
- cpf STRING
- matched STRING default=""
