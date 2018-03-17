import { ExtractJwt } from 'passport-jwt'

export default {
  secretOrKey: '324&k!n@*q32Y7&21@#*$efewn343298-2428d3783(csdc',
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
}