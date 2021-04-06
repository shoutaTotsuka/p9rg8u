
const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
})

const fetchContents = async (id = null) => {
  const entries = await client.getEntries({
    content_type: 'articles',
    order: 'fields.id'
  })

  if (entries.items) {
    return id ? entries.items.filter(item => item.fields.id === Number(id)) : entries.items
  }
}

export default fetchContents
