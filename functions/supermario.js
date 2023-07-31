// supermario.js

exports.handler = async (event, context) => {
  if (event.body && event.body.action === 'addFavorite') {
    return {
      statusCode: 200,
      body: JSON.stringify('hello')
    }
  }

  const data = { name: 'mario', age: 35, job: 'plumber' }

  return {
    statusCode: 200, 
    body: JSON.stringify(data)
  }
}