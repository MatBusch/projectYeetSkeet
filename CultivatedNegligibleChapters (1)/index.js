const request = require('request');

const options = {
  url: 'https://www.cftkb.com/shop/discipline/?format=json-pretty',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
    'Content-Type': 'application/json'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    if (info && info.item && info.item.structuredContent && info.item.structuredContent.variants) {
      let findBlack = info.item.structuredContent.variants.filter(i => i.sku === "SQ6037800");
      if (findBlack.length > 0) {
        console.clear();
        console.log("[*] Black Variant of Discipline KB found!");
        console.log("[*] Qty: " + findBlack[0].qtyInStock + " available.");
        const message = `"There are ${findBlack[0].qtyInStock} available"`;
        console.log(message);
      }
    }
  } else {
    console.error(error);
  }
}

request.get(options, callback);