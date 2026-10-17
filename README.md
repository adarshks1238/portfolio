# Adarsh K Sundaresan: Portfolio

Plain HTML, CSS and JavaScript. No build step, no installs.

## Run it in VS Code
1. Open this folder in VS Code (File > Open Folder).
2. Install the **Live Server** extension, then right-click `index.html` > **Open with Live Server**.
   (Or just double-click `index.html`. Everything works except nothing needs a server.)

## Things you edit (all in `js/config.js`)
- `repos.smartWays` and `repos.cybot`: paste your GitHub repo links. Until then the buttons open your GitHub profile.
- `web3formsKey`: your contact-form key (below).

## Contact form: messages arrive in your email (free)
The portfolio includes automatic email delivery to **adarshksundaresan12381698@gmail.com**!
- **Option A (Instant zero-setup via FormSubmit):** Ready out-of-the-box. When the first message is sent, check your email inbox once and click "Activate Form". All submissions will then be sent directly to your email!
- **Option B (Web3Forms):** Go to https://web3forms.com, enter `adarshksundaresan12381698@gmail.com`, get your free **Access Key**, and paste it into `web3formsKey` in `js/config.js`.

## Push to GitHub
```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/adarshks1238/portfolio.git
git push -u origin main
```
(Create an empty repo named `portfolio` on GitHub first.)

## Host it free
- **Netlify / Vercel:** "Add new site" > import the GitHub repo > deploy (no build command, publish directory is the root).
- **GitHub Pages:** repo Settings > Pages > Deploy from branch `main`, folder `/ (root)`.

## Files
`index.html`, `css/styles.css`, `js/main.js` (animations, form), `js/toolkit.js` (3D toolkit), `js/icons.js` (logos), `assets/` (photos, resume PDF).
To update your resume, replace `assets/Adarsh_K_Sundaresan_Resume.pdf` (keep the same name).
