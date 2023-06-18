var { Configuration, OpenAIApi } = require("openai");
var fetch = require("node-fetch");
var { generateWAMessageFromContent } = require("@adiwajshing/baileys");
var fs = require("fs");

let handler = async (m, { conn, text }) => {
if (!text) throw "Halo kak, ada yang bisa saya bantu?"
const configuration = new Configuration({
    apiKey: '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'
});
var openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
m.reply(response.data.choices[0].text)
    }
handler.help = ['openai']
handler.tags = ['fun']
handler.command = /^(chat|ai|openai)$/i
handler.premium = true

module.exports = handler