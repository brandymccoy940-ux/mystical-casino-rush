# Mystical Casino Rush - Project Overview

## 🎰 Full-Stack Modular Architecture

This project is organized into a modular structure with separate frontend and backend components.

### Frontend (`/src`)
Built with Next.js 14, featuring:
- **App Directory** - Modern Next.js routing
- **Modules** - Feature-based architecture
- **Components** - Reusable UI components
- **Store** - Zustand state management
- **Utils** - Services and helpers

### Backend (to be created)
Will include:
- Express/Fastify API server
- Database integration (MongoDB/PostgreSQL)
- Authentication middleware
- Game logic and rules engine
- WebSocket support for real-time updates

## 📦 Modular Structure

### Current Frontend Modules
- **Home Module** - Landing page and game showcase
- **Auth Module** - Authentication logic and types

### Planned Modules
- **Game Module** - Game-specific logic
- **Player Module** - User profile and statistics
- **Transaction Module** - Wallet and transaction history
- **Admin Module** - Administrative dashboard

## 🔗 API Integration Points

The frontend communicates with backend via REST API:

```
Backend API (Port 3001)
├── /api/auth
│   ├── POST /login
│   ├── POST /register
│   └── GET /profile
├── /api/games
│   ├── GET / (list all games)
│   ├── GET /:id
│   ├── POST /:id/spin
│   └── GET /stats
└── /api/players
    ├── GET /profile
    ├── PUT /profile
    └── GET /transactions
```

## 🚀 Next Steps

1. **Setup backend API** - Create Express server with game logic
2. **Database** - Set up MongoDB/PostgreSQL
3. **WebSocket** - Add real-time game updates
4. **Testing** - Unit and integration tests
5. **Deployment** - Docker & cloud deployment

## 📖 Documentation

- **Frontend:** See `README_FRONTEND.md`
- **Backend:** Create `README_BACKEND.md` when backend is set up

---

**Project Status:** 🟡 Frontend skeleton complete, ready for backend development
