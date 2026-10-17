# Adarsh K Sundaresan — Portfolio

Personal portfolio website built with HTML5, CSS3, and JavaScript, optimized for fast and free hosting on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🚀 Environment Variables (`.env`) for Vercel Hosting

When hosting on Vercel, upload or configure these environment variables in your Vercel Project Settings:

### Available Environment Variables
| Variable | Description | Default / Example Value |
|---|---|---|
| `WEB3FORMS_ACCESS_KEY` | Free access key for contact form delivery | *(Leave empty for automatic FormSubmit fallback)* |
| `CONTACT_EMAIL` | Email where contact messages and inquiries go | `adarshksundaresan12381698@gmail.com` |
| `CONTACT_PHONE` | Contact phone number | `+91 8921096579` |
| `LINKEDIN_URL` | LinkedIn profile URL | `https://linkedin.com/in/adarshksundaresan` |
| `GITHUB_PROFILE_URL` | GitHub profile URL | `https://github.com/adarshks1238` |
| `GITHUB_REPO_SMARTWAYS` | GitHub repository for Smart Ways project | `https://github.com/adarshks1238/SmartWays` |
| `GITHUB_REPO_CYBOT` | GitHub repository for Cybot Intelligence | *(Leave empty to link to GitHub profile)* |

---

## 📤 How to Upload `.env` in Vercel

### Method 1: Via Vercel Web Dashboard (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New..."** > **"Project"**.
3. Import your `portfolio` repository.
4. Expand the **"Environment Variables"** section.
5. Open your local `.env` file, copy its contents, and paste them directly into the first key field on Vercel (Vercel will automatically populate all keys and values).
6. Click **Deploy**.

> **Note:** If your project is already hosted on Vercel:
> 1. Open your project on Vercel.
> 2. Go to **Settings** > **Environment Variables**.
> 3. Paste or enter your variables and click **Save**.
> 4. Go to **Deployments** and click **Redeploy** to apply changes.

### Method 2: Via Vercel CLI
```bash
# Link project
vercel link

# Pull or push environment variables
vercel env pull .env
```

---

## 📬 Contact Form Setup (Free Email Notifications)

The contact form is configured to work out-of-the-box:
- **Option A (Web3Forms - Recommended):**
  1. Visit [web3forms.com](https://web3forms.com) and enter `adarshksundaresan12381698@gmail.com`.
  2. Copy the free Access Key sent to your inbox.
  3. Paste it into `WEB3FORMS_ACCESS_KEY=` in `.env` (or Vercel Environment Variables).
- **Option B (FormSubmit - Zero setup):**
  - If `WEB3FORMS_ACCESS_KEY` is left blank, messages are sent via FormSubmit.co. On the very first test message, check your email inbox and click the one-time "Activate Form" link.

---

## 💻 Local Development

1. Open this folder in VS Code.
2. Start Live Server (or open `index.html` in your browser).
3. To test your environment configuration locally, run:
   ```bash
   node build.js
   ```
