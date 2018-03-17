import Subject from '../models/Subject'

export default async (req, res) => {
  try {
    const subjects = await Subject.find()
    return res.json({ subjects })
  } catch (error) {
    return res.status(500).json({ error })
  }
}