// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const query = req.query.q
  const url = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${query}`
  const response = await fetch(url)
  const data = await response.json();
  res.statusCode = 200
  res.json({ photos: data.items })
}
