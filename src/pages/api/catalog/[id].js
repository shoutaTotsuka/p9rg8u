export default function handler(req, res) {
  const {
    query: { id },
  } = req
  const data = {
    1: [
      { image: '1-1.jpg', items: ['item1', 'item2'] },
      { image: '1-2.jpg', items: ['item1', 'item2'] },
      { image: '1-3.jpg', items: ['item1', 'item2'] },
    ],
    2: [
      { image: '2-1.jpg', items: ['item1', 'item2'] },
      { image: '2-2.jpg', items: ['item1', 'item2'] },
      { image: '2-3.jpg', items: ['item1', 'item2'] },
      { image: '2-4.jpg', items: ['item1', 'item2'] },
    ]
  }
  res.status(200).json(data[id])
}
