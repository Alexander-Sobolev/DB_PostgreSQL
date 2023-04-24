import jwt from 'jsonwebtoken'

export const generateToken = userId =>
	jwt.sign(
		{
			userId
		},
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: '10d'
		}
	)