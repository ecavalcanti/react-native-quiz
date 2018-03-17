import subjects from './subjects'
import users from './users'
import auth from './auth'

export default app => {
  app.use('/subjects', subjects)
  app.use('/users', users)
  app.user('/auth', auth)
}