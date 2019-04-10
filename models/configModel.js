var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: 'kanchan.sawalkar@wohlig.com',
        // pass: 'GoldenFish'
        user: 'prajakta.kamble@wohlig.com',
        pass: 'wohlig@123'
    }

});
export default {
    
    sendMail: function (mailData, callback) {
        console.log(":::::::::::::::::",mailData)
        var mailOptions = {
            from: mailData.from,
            to: mailData.to,
            subject: mailData.subject,
            text: mailData.text
        };

        transporter.sendMail(mailOptions, function (error, info) {
            console.log(":::::::::::::errorerrorerrorerror::::",error)
            console.log(":::::::::::::infoinfoinfoinfoinfo::::",info)
            if (error) {
                // console.log(":mailOptionsmailOptions",error)
                callback(error, null);
            } else {
                console.log('Email sent: ' + info.response);
                callback(null, "true");
            }
        });
    },

}