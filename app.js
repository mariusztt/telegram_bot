const { Telegraf } = require('telegraf');

//require('base')

const bot = new Telegraf('2003983199:AAEIp-7t3TnVHXXKZp3Jl-4CBbTaRTVbdCg');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, `Cześć ${ctx.from.first_name}!  Witaj w mojej grze matematycznej. Aby rozpocząć, wpisz /play`, {
    })
})
//bot.command('play',ctx => {
    bot.hears('/play', ctx => {
        console.log(ctx.from)
        let beforeGameMsg = `teraz zapoznaj się z instrukcją lub zacznij grę`;
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id, beforeGameMsg, {
            reply_markup: {
                inline_keyboard: [
                    [{
                            text: "Instrukcja",
                            callback_data: 'instrukcja'
                        },
                        {
                            text: "Graj",
                            callback_data: 'graj'
                        }
                    ],
    
                ]
            }
        })
    })
//})

bot.action('instrukcja', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, `Tu bedzie instrukcja kiedyś`, {
    })

})
var t1 = "+";
var a = Math.round(Math.random()*10);
var b = Math.round(Math.random()*10);
var resultInt = a+b;
var resultStr = `${a}+${b}`
bot.action('graj', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, `A Tu bedzie gierka kiedyś`, {
    })
    const requestanswerKeyboard = {
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [
                [
                    "randomInt/resultInt","randomInt/resultInt",
                    
                ],
                [
                    "randomInt/resultInt","randomInt/resultInt"
                ]
                

        ]
        }
    };
    bot.telegram.sendMessage(ctx.chat.id, 'tutaj bedzie resultStr', requestanswerKeyboard);

})
// bot.hears('phone', (ctx, next) => {
//     console.log(ctx.from)
//     bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);

// })

// //method for requesting user's location

// bot.hears("location", (ctx) => {
//     console.log(ctx.from)
//     bot.telegram.sendMessage(ctx.chat.id, 'Can we access your location?', requestLocationKeyboard);
// })

// //constructor for providing phone number to the bot

// const requestPhoneKeyboard = {
//     "reply_markup": {
//         "one_time_keyboard": true,
//         "keyboard": [
            // [{
            //     text: "My phone number",
            //     request_contact: true,
            //     one_time_keyboard: true
            // }],
//             ["Cancel"]
//         ]
//     }
// };
// //constructor for proving location to the bot

// const requestLocationKeyboard = {
//     "reply_markup": {
//         "one_time_keyboard": true,
//         "keyboard": [
//             [{
//                 text: "My location",
//                 request_location: true,
//                 one_time_keyboard: true
//             }],
//             ["Cancel"]
//         ]
//     }

// }

// bot.hears('animals', ctx => {
//     console.log(ctx.from)
//     let animalMessage = `great, here are pictures of animals you would love`;
//     ctx.deleteMessage();
//     bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
//         reply_markup: {
            // inline_keyboard: [
            //     [{
            //             text: "dog",
            //             callback_data: 'dog'
            //         },
            //         {
            //             text: "cat",
            //             callback_data: 'cat'
            //         }
            //     ],

//             ]
//         }
//     })
// })

// //method that returns image of a dog

// bot.action('dog', ctx => {
//     bot.telegram.sendPhoto(ctx.chat.id, {
//         source: "res/dog.jpeg"
//     })

// })

// //method that returns image of a cat 

// bot.action('cat', ctx => {
//     bot.telegram.sendPhoto(ctx.chat.id, {
//         source: "res/cat.jpeg"
//     })

// })


//link do tego jak wywołać to z objektu: https://stackoverflow.com/questions/49709371/get-random-variable-with-javascript
//skrypt do drugiego pliku base.js


// const pObj = {
//     p1 : {
//         a: Math.round(Math.random()*10),
//         b: Math.round(Math.random()*10),
//         resultStr: `${a}+${b}`,
//         resultInt: a+b
//     },
//     p2 : {
//         a: Math.round(Math.random()*100),
//         b: Math.round(Math.random()*100),
//         resultStr: `${a}+${b}`,
//         resultInt: a+b
//     },
//     p3 : {
//         a: Math.round(Math.random()*10),
//         b: Math.round(Math.random()*10),
//         resultStr: `${a}-${b}`,
//         resultInt: a-b
//     },
//     p4 : {
//         a: Math.round(Math.random()*100),
//         b: Math.round(Math.random()*100),
//         resultStr: `${a}-${b}`,
//         resultInt: a-b
//     },
//     p5 : {
//         a: Math.round(Math.random()*10),
//         b: Math.round(Math.random()*10),
//         resultStr: `${a}*${b}`,
//         resultInt: a*b
//     },
//     p6 : {
//         a: Math.round(Math.random()*20),
//         b: Math.round(Math.random()*20),
//         resultStr: `${a}*${b}`,
//         resultInt: a*b
 //   },
    // p7 : {
    //     a: Math.round(Math.random()*100),
    //     b: Math.round(Math.random()*100),
    //     resultStr: `${a}-${b}`,
    //     resultInt: a+b
    // },
    // p8 : {
    //     a: Math.round(Math.random()*100),
    //     b: Math.round(Math.random()*100),
    //     resultStr: `${a}-${b}`,
    //     resultInt: a+b
    // },

}


bot.launch();
