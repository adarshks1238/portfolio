const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'js', 'config.js');

// Default fallback configuration
const defaultConfig = {
  email: "adarshksundaresan12381698@gmail.com",
  phone: "+91 8921096579",
  linkedin: "https://linkedin.com/in/adarshksundaresan",
  githubProfile: "https://github.com/adarshks1238",
  repos: {
    smartWays: "https://github.com/adarshks1238/SmartWays",
    cybot: ""
  },
  web3formsKey: ""
};

let currentConfig = { ...defaultConfig };

if (fs.existsSync(configPath)) {
  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    const match = raw.match(/window\.CONFIG\s*=\s*(\{[\s\S]*?\});/);
    if (match) {
      const parsed = new Function(`return ${match[1]}`)();
      currentConfig = { ...currentConfig, ...parsed, repos: { ...currentConfig.repos, ...(parsed.repos || {}) } };
    }
  } catch (err) {
    console.warn('[build] Note: Could not parse existing config.js, using defaults.');
  }
}

// Read from process.env (injected by Vercel from .env / Dashboard)
const email = process.env.CONTACT_EMAIL || currentConfig.email;
const phone = process.env.CONTACT_PHONE || currentConfig.phone;
const linkedin = process.env.LINKEDIN_URL || currentConfig.linkedin;
const githubProfile = process.env.GITHUB_PROFILE_URL || currentConfig.githubProfile;
const repoSmartWays = process.env.GITHUB_REPO_SMARTWAYS || currentConfig.repos.smartWays;
const repoCybot = process.env.GITHUB_REPO_CYBOT !== undefined ? process.env.GITHUB_REPO_CYBOT : currentConfig.repos.cybot;
const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_KEY || currentConfig.web3formsKey;

const outputContent = `// ============================================================
// Auto-generated during Vercel build from environment variables
// Local development: edit directly or run 'npm run build'
// ============================================================
window.CONFIG = {
  email: ${JSON.stringify(email)},
  phone: ${JSON.stringify(phone)},
  linkedin: ${JSON.stringify(linkedin)},
  githubProfile: ${JSON.stringify(githubProfile)},
  repos: {
    smartWays: ${JSON.stringify(repoSmartWays)},
    cybot: ${JSON.stringify(repoCybot)}
  },
  web3formsKey: ${JSON.stringify(web3formsKey)}
};
`;

fs.writeFileSync(configPath, outputContent, 'utf8');
console.log('✓ [build.js] js/config.js successfully updated with environment settings.');
