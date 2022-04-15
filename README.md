# TezzBites

TezzBites provides a suite of tools to manage a restaurant's day to day operations.

---

# Folder Structure

|        Codebase        |    Description     |
| :--------------------: | :----------------: |
|       [api](api)       |    Backend API     |
|     [admin](admin)     | Next.js Admin Dash |
| [marketing](marketing) |   Marketing Site   |

## Branches

- main -> pr this branch for everything
- prod -> don't touch, this is what's running in production

trigger changes

## API Deployment

| Env  |          Stack          |
| :--: | :---------------------: |
| Prod | ECS on Fargate with ALB |
| Dev  |         Railway         |

## Frontend

| Env  | Stack  |
| :--: | :----: |
| Prod | Vercel |
| Dev  | Vercel |

## Database

| Env  |    Stack    |
| :--: | :---------: |
| Prod | PlanetScale |
| Dev  | PlanetScale |
