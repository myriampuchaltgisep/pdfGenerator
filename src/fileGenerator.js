
const Handlebars = require("handlebars")
import { generatePDF } from './helper'
import pageHtml from './intro.html.js'

const getPDF = async (event) => {
    try {
        const { name = "Myriam", surname = "Puchalt" } = event.queryStringParameters || {};
        const html = await getHtml(name, surname);
        const pdf = await generatePDF(html);
        console.info('PDF generated')
        return {
            headers: {
              "Content-type": "application/pdf",
            },
            statusCode: 200,
            body: pdf.toString("base64"),
            isBase64Encoded: true,
          };
    } catch (error) {
        console.error("Error : ", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error,
          message: "Something went wrong",
        }),
      };
    }
}

const getHtml = (name, surname) => {
    return Handlebars.compile(pageHtml)({
        name: name,
        surname: surname,
    });
}

export { getPDF };
