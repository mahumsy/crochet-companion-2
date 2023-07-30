exports.handler = async (event) => {
    const { user } = context.clientContext;
  
    return {
      statusCode: 200,
      body: JSON.stringify(user.favorites)
    }
  }