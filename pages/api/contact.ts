import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

const transport = createTransport({
  service: 'gmail',
  auth: {
    user: 'srompavel98@gmail.com',
    pass: process.env.EMAIL_SECURITY_CODE,
  },
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const emailOptions = {
        from: req.body.email,
        to: 'srompavel98@gmail.com',
        subject: 'New message from pavelsrom.dev',
        text: `
				<FROM ${req.body.email}>:
				
				${req.body.message}
				`,
      }

      transport.sendMail(emailOptions, error => {
        if (error) {
          return res.status(500).json({ error })
        } else {
          return res.status(200).json({ message: 'Message sent successfully' })
        }
      })

      return

    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}
