# Parlons MVP — Vercel-ready

Responsive Next.js prototype for the Parlons language immersion MVP.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Create a GitHub repository named `parlons-mvp`.
2. Upload/push the contents of this folder to the repository root.
3. In Vercel, choose **Add New → Project**, import `parlons-mvp` from GitHub.
4. Keep the detected Next.js settings and click **Deploy**. No environment variables are required for this prototype.

## Prototype limitations

- Audio playback is a UI simulation; no audio files are connected yet.
- State is held in React memory and resets on refresh.
- Authentication, database persistence, content management and analytics are not connected.
- Lesson assessments are sample content and should be reviewed/expanded before a user test.
