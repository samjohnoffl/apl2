# FanOS // The Future Operating System for Sports Fandom

FanOS is an AI-powered identity and progression system for sports fans. It transforms passive viewing into an immersive, cinematic, and addictive experience through AI-generated personas, emotional telemetry, and social rivalries.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS + Framer Motion
- **AI:** Gemini 1.5 Flash (via @google/generative-ai)
- **Backend:** Firebase (Firestore + Auth)
- **Visualization:** Recharts
- **Icons:** Lucide React
- **Deployment:** Docker + Google Cloud Run

## 🛠 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samjohnoffl/apl2.git
   cd apl2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file based on `.env.example` and fill in your Firebase and Gemini API credentials.

4. **Run locally:**
   ```bash
   npm run dev
   ```

## 🐳 Docker & Deployment

The project is optimized for Google Cloud Run.

### 1. Build the Docker Image
```bash
docker build -t gcr.io/[PROJECT_ID]/fanos .
```

### 2. Push to Google Container Registry
```bash
docker push gcr.io/[PROJECT_ID]/fanos
```

### 3. Deploy to Cloud Run
```bash
gcloud run deploy fanos --image gcr.io/[PROJECT_ID]/fanos --platform managed
```

## ✨ Core Features

- **AI Fan Identity:** Dynamic personas evolved by Gemini.
- **Emotional Pulse:** Live visualization of crowd sentiment.
- **Progression System:** XP, levels, and seasonal ranks.
- **Fan Wrapped:** Shareable cinematic season summaries.
- **Social Factions:** Align with Chaos, Tactical, or Underdog armies.

---

Built for the Google Hackathon 2026.
