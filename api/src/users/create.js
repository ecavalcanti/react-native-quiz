import User from '../models/User'

export default async (req, res) => {
  try {
    const user = new User (req.body)

    user.password = user.hashPassword(user.password)
    await user.save()

    return res.status(201).json({ user })
  } catch (error) {
    return res.status(500).json({ error })
  }

}