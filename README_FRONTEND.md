# Mystical Casino Rush - Frontend

A modern, mystical-themed casino gaming platform built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## 🎨 Features

- ✨ Modern mystical-themed UI with gradient backgrounds
- 🎮 Multiple game categories (Slots, Roulette, Blackjack, Dice)
- 🔐 Authentication system with JWT
- 💰 Player balance management
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js
- 🎯 Modular architecture
- 🔗 API integration ready

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── modules/            # Feature modules
│   ├── home/           # Home module
│   └── auth/           # Authentication module
├── components/         # Reusable components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── GameGrid.tsx
│   ├── GameCard.tsx
│   └── Footer.tsx
├── store/              # Zustand stores
│   ├── authStore.ts
│   └── gameStore.ts
├── utils/              # Utility functions & services
│   ├── apiClient.ts
│   ├── authService.ts
│   └── gameService.ts
└── styles/             # Global styles
    └── globals.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/brandymccoy940-ux/mystical-casino-rush.git
cd mystical-casino-rush

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Update .env.local with your API URL
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Build

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **HTTP Client:** Axios
- **Utilities:** clsx

## 📦 Key Dependencies

- `next` - React framework with SSR
- `react` & `react-dom` - UI library
- `zustand` - Lightweight state management
- `axios` - Promise-based HTTP client
- `tailwindcss` - Utility-first CSS framework
- `typescript` - Type safety

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking |

## 🔌 API Integration

The frontend connects to a backend API. Update `NEXT_PUBLIC_API_URL` in `.env.local`:

```
NEXT_PUBLIC_API_URL=http://your-api-url.com/api
```

### Available Services

- **Auth Service** (`src/utils/authService.ts`)
  - `login(email, password)`
  - `register(email, username, password)`
  - `logout()`
  - `getProfile()`

- **Game Service** (`src/utils/gameService.ts`)
  - `getGames()`
  - `getGameById(gameId)`
  - `spinSlots(gameId, bet)`
  - `getUserStats()`

## 🎨 Customization

### Colors

Modify the color scheme in `tailwind.config.ts`:

```typescript
mystical: {
  dark: '#0a0a0a',
  purple: '#6b21a8',
  gold: '#fbbf24',
  silver: '#e5e7eb',
}
```

### Games

Edit game data in `src/components/GameGrid.tsx` to add/modify games.

## 🔐 Security

- JWT-based authentication
- CORS-enabled API client
- Environment variables for sensitive data
- No sensitive data in client-side code

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please contact: [your-email@example.com](mailto:your-email@example.com)

---

**Happy Gaming! ✨🎰**
