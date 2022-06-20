
import express from 'express'
import fetch from 'node-fetch'
const router = express.Router();
const url = 'https://api.mercadolibre.com'

// GET - Search item
router.get('/', async (req, res) => {
  try {
    if (!req.query.q) {
      res.status(404).json('Not Found')
    } else {
      const searchResponse = await fetch(`${url}/sites/MLA/search?q=${req.query.q}&&limit=10`);
      const searchData = await searchResponse.json();

      let items = searchData.results.map( (item)=> {
        return {
            "id": item.id,
            "title": item.title,
            "price": {
              "currency": item.currency_id,
              "amount": item.price,
              "decimals": 2
            },
            "picture": item.thumbnail,
            "condition": item.condition,
            "free_shipping": item.shipping.free_shipping,
            "store": item.seller.eshop
          }
      } )


      let formatedData = {
        "author": {
          "name": "",
          "lastname": "",
        },
        "categories": searchData.available_filters[0].values.map((item) => item.name),
        "items": items
      }

      res.json(formatedData)
    }
  }
  catch (err) {
    res.status(500).json('Internal Server Error');
  }
})



// GET - Get item and description by item id
router.get('/:id', async (req, res) => {
  try {
    // Get item by id
    const itemUrl = `${url}/items/${req.params.id}`
    const item = await fetch(itemUrl);
    const itemData = await item.json();

    // Get description by item id
    const itemDescriptionURL = `${url}/items/${req.params.id}/description`
    const itemDescription = await fetch(itemDescriptionURL);
    const itemDescriptionData = await itemDescription.json();

    const itemFormated = {
      "author": {
        "name": "",
        "lastname": ""
      },
      "item": {
        "id": itemData.id,
        "title": itemData.title,
        "price": {
          "currency": itemData.currency_id,
          "amount": itemData.price,
          "decimals": 0
        },
        "picture": itemData.pictures[0].url,
        "condition": itemData.condition,
        "free_shipping": itemData.shipping.free_shipping,
        "sold_quantity": itemData.sold_quantity,
        "description": itemDescriptionData.plain_text
      }
    }
    res.json(itemFormated)
  }
  catch (err) {
    res.status(500).json('Internal Server Error');
  }
})


export { router }