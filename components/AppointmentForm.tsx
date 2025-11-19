'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const appointmentSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă minim 2 caractere'),
  email: z.string().email('Email invalid'),
  phone: z.string().min(10, 'Telefon invalid'),
  carModel: z.string().min(2, 'Modelul mașinii este obligatoriu'),
  service: z.string().min(2, 'Serviciul este obligatoriu'),
  preferredDate: z.string().min(1, 'Data este obligatorie'),
  preferredTime: z.string().min(1, 'Ora este obligatorie'),
  message: z.string().optional(),
  gdpr: z.boolean().refine((val) => val === true, 'Trebuie să accepți prelucrarea datelor'),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

const services = [
  'Diagnoză Auto',
  'Geometrie Roți',
  'Revizie și Întreținere',
  'Sistem Luminii',
  'Aer Condiționat',
  'Sistem Răcire',
  'Sistem Evacuare',
  'Alt serviciu',
]

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  })

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-primary" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-primary" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            aria-invalid={errors.phone ? 'true' : 'false'}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-primary" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="carModel" className="block text-sm font-medium text-black mb-2">
            Model mașină *
          </label>
          <input
            type="text"
            id="carModel"
            placeholder="ex: Dacia Logan 2015"
            {...register('carModel')}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            aria-invalid={errors.carModel ? 'true' : 'false'}
          />
          {errors.carModel && (
            <p className="mt-1 text-sm text-primary" role="alert">
              {errors.carModel.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
          Serviciu dorit *
        </label>
        <select
          id="service"
          {...register('service')}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
          aria-invalid={errors.service ? 'true' : 'false'}
        >
          <option value="">Selectează un serviciu</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-primary" role="alert">
            {errors.service.message}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-black mb-2">
            Data preferată *
          </label>
          <input
            type="date"
            id="preferredDate"
            {...register('preferredDate')}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            aria-invalid={errors.preferredDate ? 'true' : 'false'}
          />
          {errors.preferredDate && (
            <p className="mt-1 text-sm text-primary" role="alert">
              {errors.preferredDate.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-black mb-2">
            Ora preferată *
          </label>
          <select
            id="preferredTime"
            {...register('preferredTime')}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            aria-invalid={errors.preferredTime ? 'true' : 'false'}
          >
            <option value="">Selectează ora</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>
          {errors.preferredTime && (
            <p className="mt-1 text-sm text-primary" role="alert">
              {errors.preferredTime.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
          Mesaj (opțional)
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Descrie problema sau adaugă detalii suplimentare..."
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('gdpr')}
            className="mt-1 w-5 h-5 border-2 border-gray-200 rounded focus:ring-2 focus:ring-primary"
            aria-invalid={errors.gdpr ? 'true' : 'false'}
          />
          <span className="text-sm text-gray-700">
            Accept prelucrarea datelor mele personale conform{' '}
            <a href="/politica-confidentialitate" className="text-primary hover:underline">
              Politicii de Confidențialitate
            </a>
            . *
          </span>
        </label>
        {errors.gdpr && (
          <p className="mt-1 text-sm text-primary" role="alert">
            {errors.gdpr.message}
          </p>
        )}
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-lg"
          role="alert"
        >
          Programarea a fost trimisă cu succes! Te vom contacta în cel mai scurt timp pentru confirmare.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg"
          role="alert"
        >
          A apărut o eroare. Te rugăm să încerci din nou sau să ne suni direct la +40 763 838 273.
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Se trimite...' : 'Trimite programare'}
      </button>
    </form>
  )
}

