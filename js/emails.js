import { Resend } from 'resend';

const resend = new Resend("re_W7NvgncK_Q6WPCaGcnGLqRhNo5YAHrHF8");

await resend.emails.send({
    from: "Email usuario",
    to: 'alejandrocarmonarodero@gmail.com',
    subject: 'Hola mundo',
    html: '<strong>¡Funciona!</strong>'
});