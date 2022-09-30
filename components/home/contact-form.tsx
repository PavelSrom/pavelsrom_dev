import axios from 'axios'
import { Container, Text } from 'ui'
import { useTranslation } from 'lib/translation'
import { Button, Textarea, TextInput } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import React, { useState } from 'react'

export const ContactForm = () => {
  const { t } = useTranslation('home')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.email || !form.message) return

    setSubmitted(true)
    setLoading(true)

    axios
      .post('/api/contact', form)
      .then(() =>
        showNotification({
          color: 'green',
          title: t('contact.snackbar.success.title'),
          message: t('contact.snackbar.success.text'),
        })
      )
      .catch(() =>
        showNotification({
          color: 'red',
          title: t('contact.snackbar.error.title'),
          message: t('contact.snackbar.error.text'),
        })
      )
      .finally(() => {
        setSubmitted(false)
        setLoading(false)
        setForm({
          email: '',
          message: '',
        })
      })
  }

  return (
    <Container noPadding>
      <section className="bg-lightblue rounded-3xl">
        <div className="px-3 sm:px-8 py-8 md:py-12 lg:px-8 xl:px-16 grid grid-cols-12 lg:gap-16">
          <div className="col-span-12 lg:col-span-6">
            <Text variant="h1">{t('contact.title')}</Text>
            <Text variant="sub" className="mt-8">
              {t('contact.text')}
            </Text>
          </div>
          <form
            onSubmit={handleSubmit}
            className="col-span-12 lg:col-span-6 space-y-12 mt-16 lg:mt-0"
          >
            <TextInput
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.placeholders.email')}
              error={
                submitted && form.email.length === 0
                  ? t('contact.errors.email')
                  : undefined
              }
            />
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.placeholders.message')}
              minRows={4}
              error={
                submitted && form.message.length === 0
                  ? t('contact.errors.message')
                  : undefined
              }
            />
            <Button type="submit" size="lg" loading={loading} fullWidth>
              {t('contact.cta')}
            </Button>
          </form>
        </div>
      </section>
    </Container>
  )
}
