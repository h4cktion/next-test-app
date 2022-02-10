// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '../../utils/mongodbConnect';

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
