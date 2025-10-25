import axios from 'axios';

export const sendEmail = async (options) => {
  const response = await axios.post(
    process.env.MAILERSEND_API_URL,
    {
      from: {
        email: options.from || process.env.MAILERSEND_FROM,
        name: options.fromName || 'Your App',
      },
      to: Array.isArray(options.to)
        ? options.to.map((email) => ({ email }))
        : [{ email: options.to }],
      subject: options.subject,
      text: options.text || '',
      html: options.html || '',
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};
