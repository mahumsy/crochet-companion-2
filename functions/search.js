exports.handler = async (event, context) => {
    const guides = [
      { title: 'crochet pattern 1', author: 'mario' },
      { title: 'Mario Kart Shortcuts You Never Knew Existed', author: 'luigi' },
      { title: 'Ultimate Street Fighter Guide', author: 'chun-li' },
    ]
    const clicked = event.body.clicked || event.headers['x-clicked'] || event.queryStringParameters.clicked
    
  
    if (context.clientContext.user && clicked) {
      // fetch data & then return
      return {
        statusCode: 200,
        body: JSON.stringify(guides)
      }
    }
  
    // return error status
    return {
      statusCode: 401,
      body: JSON.stringify({ mssg: 'you must be logged into see this' })
    }
  
  }