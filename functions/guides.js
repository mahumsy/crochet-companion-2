exports.handler = async (event, context) => {
  const guides = [
    // { title: 'Beat all Zelda Bosses Like a Boss', author: 'mario' },
    // { title: 'Mario Kart Shortcuts You Never Knew Existed', author: 'luigi' },
    // { title: 'Ultimate Street Fighter Guide', author: 'chun-li' },
    {  title: 'Test guide', author: 'Link', htmlContent: '<div><strong>Exciting Content</strong></div>' // Example HTML
        }
  ]

  if (context.clientContext.user) {
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