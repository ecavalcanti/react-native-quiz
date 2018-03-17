import User from '../models/User'

export default async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    return res.json({ user })
  } catch (error) {
    return res.status(500).json({ error })
  }
}