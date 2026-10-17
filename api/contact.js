module.exports = async (req, res) => {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_KEY;
    const targetEmail = process.env.CONTACT_EMAIL || 'adarshksundaresan12381698@gmail.com';

    // 1. If Web3Forms access key is configured in Vercel environment variables
    if (accessKey && accessKey.trim()) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
          from_name: 'Portfolio Website'
        })
      });
      const data = await response.json();
      return res.status(response.status).json(data);
    }

    // 2. Direct zero-config delivery via FormSubmit.co
    const fsResponse = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio inquiry from ${name}`,
        _template: 'table',
        _captcha: 'false'
      })
    });
    const fsData = await fsResponse.json().catch(() => ({}));
    return res.status(200).json({ success: true, ...fsData });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Error processing message.' });
  }
};
