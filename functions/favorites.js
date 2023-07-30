exports.handler = async (event, context) => {
    const { user } = context.clientContext;
  
    return {
      statusCode: 200,
      body: JSON.stringify(user.favorites)
    }
  }