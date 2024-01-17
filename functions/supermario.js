//supermario function:
exports.handler = async (event, context) => {
  console.log('function ran')

  const data = { message:'hello' } 

  // return response to browser
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}