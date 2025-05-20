import emailjs from '@emailjs/browser';

// Inicializar EmailJS con la clave pública
emailjs.init(import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY);

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
      import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams
    );
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 