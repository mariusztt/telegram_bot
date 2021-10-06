const { Telegraf } = require('telegraf');

const bot = new Telegraf('2003983199:AAEIp-7t3TnVHXXKZp3Jl-4CBbTaRTVbdCg');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, `Cześć ${ctx.from.first_name}!  Witaj w mojej grze matematycznej. Aby rozpocząć, wpisz /play`, {
    })
})
    

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

bot.action('instrukcja', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, `Tu bedzie instrukcja kiedyś`, {
    })

})
let counter = 0;
bot.action('graj', ctx => {
    ctx.deleteMessage()

    counter = 0;

    randomQuestionGenerator()
    

    bot.action('dOdp',ctx => {
        console.log('dobra')
        counter = counter+1;
        ctx.deleteMessage();
        randomQuestionGenerator()
        
    }) 
    bot.action('zOdp',ctx => {
        console.log(counter)
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id, `zła odpowiedź, twój wynik to: ${counter}, jeśli chcesz zagrać jeszcze raz, wpisz /play`, {
        })
    }) 

    function randomQuestionGenerator() {
        const pVar =  {
            pv10 : {
                a:Math.round(Math.random()*10),
                b: Math.round(Math.random()*10),
            },
            pv20 : {
                a: Math.round(Math.random()*20),
                b: Math.round(Math.random()*20),
            },
            pv100 : {
                a: Math.round(Math.random()*100),
                b: Math.round(Math.random()*100),
            },
            
        }
        const pObj = {
            p1 : {
                resultStr: `${pVar.pv10.a}+${pVar.pv10.b}`,
                resultInt: pVar.pv10.a+pVar.pv10.b
            },
            p2 : {
                resultStr: `${pVar.pv100.a}+${pVar.pv100.b}`,
                resultInt: pVar.pv100.a+pVar.pv100.b
            },
            p3 : {
                resultStr: `${pVar.pv10.a}-${pVar.pv10.b}`,
                resultInt: pVar.pv10.a-pVar.pv10.b
            },
            p4 : {
                resultStr: `${pVar.pv100.a}-${pVar.pv100.b}`,
                resultInt: pVar.pv100.a-pVar.pv100.b
            },
            p5 : {
                resultStr: `${pVar.pv10.a}*${pVar.pv10.b}`,
                resultInt: pVar.pv10.a*pVar.pv10.b
            },
            p6 : {
                resultStr: `${pVar.pv20.a}*${pVar.pv20.b}`,
                resultInt: pVar.pv20.a*pVar.pv20.b
           },
        }
        
        function getRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
          }
          
          let randomQuestion = getRandom(Object.values(pObj));
          
          console.log(`Random question: ${randomQuestion.resultStr}`);
          console.log('Random question info', randomQuestion);
        
        
        
        
        bot.telegram.sendMessage(ctx.chat.id, randomQuestion.resultStr, {
            reply_markup: {
                one_time_keyboard : true,
                inline_keyboard: [
                    [{
                        text: randomQuestion.resultInt,
                        callback_data: 'dOdp'
                    },{
                        text: Math.round(Math.random()*200-100),
                        callback_data: 'zOdp',

                    }],
                    [{
                        text: Math.round(Math.random()*200-100),
                        callback_data: 'zOdp'
                    },{
                        text: Math.round(Math.random()*200-100),
                        callback_data: 'zOdp'
                    }],

            ]
            }
            
        });
    }

   
   
})
bot.launch();
