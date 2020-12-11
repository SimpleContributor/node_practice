const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'calebcoe0@gmail.com',
        subject: 'Welcome to the task managing app!',
        text: `Welcome to the app ${name}`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'calebcoe0@gmail.com',
        subject: 'We would hate to see you go',
        text: `We see that you have closed your account. We are sorry for any dissatisfaction. If you would take a moment to give us feedback, 
        we will do all that we can to make the app a better experience for all. Thank you for using our app ${name}!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
