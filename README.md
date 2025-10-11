# 🕌 Duaa - Find Peace Through Prayer

A modern, responsive web application that provides personalized Islamic prayers (Duaa) based on your current emotional state. Find spiritual comfort and guidance through authentic prayers tailored to your feelings and circumstances.

![Duaa App](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC)

## ✨ Features

### 🎯 **Emotional State Selection**

Choose from 10 carefully curated emotional states to receive the most relevant prayers:

- **Happy** - Express gratitude and joy
- **Grateful** - Show appreciation and thankfulness
- **Sad** - Seek comfort during difficult times
- **Anxious** - Find peace and reassurance
- **Stressed** - Relieve overwhelming feelings
- **Hopeful** - Strengthen optimism and faith
- **Angry** - Channel emotions constructively
- **Lonely** - Connect with spiritual community
- **Peaceful** - Maintain serenity and calm
- **Seeking Guidance** - Find direction and wisdom

### 🕌 **Authentic Prayer Database**

- Curated collection of authentic Islamic prayers and duas
- Arabic text with transliteration and English translation
- Proper sourcing and references for each prayer
- Random prayer selection for variety and discovery

### 🎨 **Modern User Experience**

- Beautiful, responsive design that works on all devices
- Intuitive navigation and user-friendly interface
- Smooth animations and transitions
- Accessible design following modern web standards

### 🔧 **Technical Excellence**

- Fast, modern React application with TypeScript
- Real-time database integration with Supabase
- Optimized performance with Vite build system
- Component-based architecture for maintainability

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rahmaabdelrazeq-dev/serene-dua.git
   cd serene-dua
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080` to see the application.

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **TanStack Query** - Server state management

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Modern icon library
- **Custom CSS** - Tailored styling for Islamic aesthetic

### Backend & Database

- **Supabase** - Backend-as-a-Service platform
- **PostgreSQL** - Relational database for prayers
- **Real-time subscriptions** - Live data updates

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Git** - Version control

## 📱 Usage

1. **Home Page** - Learn about the app and its purpose
2. **Emotion Selection** - Choose your current emotional state
3. **Prayer Display** - Receive a relevant prayer with Arabic text, transliteration, and translation
4. **Navigation** - Use "Get Another Prayer" to explore more options

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── emotions/       # Emotion selection components
│   ├── home/          # Homepage sections (Hero, About, How It Works)
│   ├── layout/        # Header, Footer components
│   ├── prayers/       # Prayer display components
│   └── ui/            # shadcn/ui base components
├── pages/             # Main application pages
├── types/             # TypeScript type definitions
├── constants/         # App constants and data
├── lib/               # Utility functions and Supabase client
├── hooks/             # Custom React hooks
└── integrations/      # External service integrations
```

## 🌟 Key Components

- **EmotionGrid** - Interactive emotion selection interface
- **PrayerCard** - Beautiful prayer display with Arabic typography
- **Hero Section** - Engaging landing page introduction
- **Navigation** - Seamless routing between pages

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy Options

- **Vercel** - Recommended for React applications
- **Netlify** - Easy static site deployment
- **GitHub Pages** - Free hosting for public repositories
- **Any static hosting service** - Upload the `dist` folder

## 🤝 Contributing

We welcome contributions to improve the Duaa application:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Authentic Islamic prayers and their sources
- The React and TypeScript communities
- Contributors and users who provide feedback

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**May Allah bless this project and help it serve the Muslim community in finding peace and guidance through prayer. Ameen.** 🤲
