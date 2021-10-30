# TezzBites

TezzBites provides a suite of tools to manage a restaurant's day to day operations.

---

# Folder Structure

| Codebase       |    Description     |
| :------------- | :----------------: |
| [api](api)     |    Backend API     |
| [admin](admin) | Next.js Admin Dash |

## Branches

- main -> pr this branch for everything
- prod -> don't touch, this is what's running in production

trigger changes

## API Deployment
| Env       |    Stack           |
| :-------: | :----------------: |
|  PROD     |   ECS on Fargate   |
|  DEV      |   Railway          |

## Database
| Env       |    Stack           |
| :-------: | :----------------: |
|  PROD     |   PlanetScale      |
|  DEV      |   PlanetScale      |
