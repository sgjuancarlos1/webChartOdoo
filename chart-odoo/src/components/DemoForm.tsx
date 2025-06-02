'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, CheckCircle, AlertCircle, Mail, Phone, Building } from "lucide-react"
import { sendDemoRequest, initEmailJS, validateEmail, validatePhone, trackDemoRequest, type DemoRequestData } from "@/lib/emailService"

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  company?: string
  companySize?: string
}

export default function DemoForm() {
  const [formData, setFormData] = useState<DemoRequestData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'El nombre de la empresa es requerido'
    }

    if (!formData.companySize) {
      newErrors.companySize = 'Selecciona el tamaño de la empresa'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Ingresa un teléfono válido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendDemoRequest(formData)

      if (result.success) {
        setIsSubmitted(true)
        trackDemoRequest(formData)
      } else {
        setSubmitError(result.message)
      }
    } catch (error) {
      setSubmitError('Error inesperado. Por favor, intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  if (isSubmitted) {
    return (
      <Card className="p-8 bg-white text-gray-800">
        <CardContent className="p-0 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-green-600">¡Solicitud Enviada con Éxito!</h3>
          <p className="text-gray-600 mb-6">
            Gracias <strong>{formData.name}</strong> por tu interés en Chart Odoo.
            Un especialista en IA se pondrá en contacto contigo en las próximas 24 horas
            para agendar tu demo personalizada.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-green-700">
              <Mail className="h-4 w-4" />
              <span>Confirmación enviada a <strong>{formData.email}</strong></span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">¿Qué sigue?</h4>
            <ul className="text-sm text-blue-700 space-y-1 text-left">
              <li>• Revisaremos tu solicitud y necesidades específicas</li>
              <li>• Te contactaremos para agendar la demo en tu horario preferido</li>
              <li>• Prepararemos una presentación personalizada con IA para tu empresa</li>
              <li>• Te mostraremos casos de éxito similares a tu industria</li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              ¿Necesitas contacto inmediato? Llámanos al <strong>+52 55 3362 9528</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="p-8 bg-white text-gray-800">
      <CardContent className="p-0">
        <div className="flex items-center mb-6">
          <img
            src="/chart-odoo-logo.png"
            alt="Chart Odoo Logo"
            className="h-12 w-auto mr-3"
          />
          <div>
            <h3 className="text-2xl font-bold odoo-primary">Solicitar Demo Gratuita</h3>
            <p className="text-sm text-gray-600">Con Inteligencia Artificial integrada</p>
          </div>
        </div>

        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
            <p className="text-red-700 text-sm">{submitError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo *"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none transition-colors ${
                errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-odoo-teal'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email empresarial *"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none transition-colors ${
                errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-odoo-teal'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono (opcional)"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none transition-colors ${
                errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-odoo-teal'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="text"
              name="company"
              placeholder="Nombre de la empresa *"
              value={formData.company}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none transition-colors ${
                errors.company ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-odoo-teal'
              }`}
            />
            {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
          </div>

          <div>
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none transition-colors ${
                errors.companySize ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-odoo-teal'
              }`}
            >
              <option value="">Tamaño de empresa *</option>
              <option value="1-10">1-10 empleados (Microempresa)</option>
              <option value="11-50">11-50 empleados (Pequeña empresa)</option>
              <option value="51-200">51-200 empleados (Mediana empresa)</option>
              <option value="200+">200+ empleados (Gran empresa)</option>
            </select>
            {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Cuéntanos sobre tu proyecto, industria o necesidades específicas (opcional)"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-odoo-teal focus:outline-none transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-odoo-teal hover:bg-teal-600 text-white text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                Enviando solicitud...
              </>
            ) : (
              <>
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Demo con IA
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>juancarlos@chart-e.com</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+52 55 3362 9528</span>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Al enviar este formulario, aceptas que un especialista de Chart Odoo se contacte contigo
            para proporcionarte información sobre nuestras soluciones ERP con IA.
            Respetamos tu privacidad y no compartimos tu información.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
