import axios from 'axios';

let helper = require('sendgrid').mail;
let fromEmail = new helper.Email('kho1995@gmail.com');
let toEmail = new helper.Email('kho1995@gmail.com');
let subject = 'Contact from Probable.co.kr';

export async function handler(event, context, callback) {
    let sg = require('sendgrid')(process.env.REACT_APP_SENDGRID_API_KEY);

    let content = new helper.Content('text/plain', 'Name:' + event.fullName + ' Email:' + event.email + ' Phone:' + event.phoneNumber + 'Message: ' + event.message);
    new helper.Email('kho1995@gmail.com');

    let mail = new helper.Mail(fromEmail, subject, toEmail, content);

    // const response = await axios({
    //     method: 'post',
    //     url: 'https://www.google.com/recaptcha/api/siteverify',
    //     data: {
    //         secret: process.env.REACT_APP_CAPTCHA_SECRET_KEY,
    //         response: event.captchaResponse,
    //     },
    // });

    // const jsonData = await parser.parse(response.data);

    if (true) {
        let request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });

        await sg.API(request, function (error, response) {
            if (error) {
                console.log('Error response received');
                return false;
            }
            console.log(response.statusCode);
            console.log(response.body);

            return true;
        });
    } else {
        return false;
    }
}