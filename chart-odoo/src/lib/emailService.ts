import emailjs from '@emailjs/browser'

// Initialize EmailJS
export const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  if (publicKey) {
    emailjs.init(publicKey)
  }
}

export interface DemoRequestData {
  name: string
  email: string
  phone: string
  company: string
  companySize: string
  message: string
}

export const sendDemoRequest = async (formData: DemoRequestData): Promise<{ success: boolean; message: string }> => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL

    if (!serviceId || !templateId) {
      throw new Error('EmailJS configuration is missing')
    }

    // Prepare email parameters
    const emailParams = {
      to_email: contactEmail,
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      phone: formData.phone,
      company_size: formData.companySize,
      message: formData.message,
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    // Send email to Chart Odoo
    const response = await emailjs.send(serviceId, templateId, emailParams)

    if (response.status === 200) {
      // Send confirmation email to user
      await sendConfirmationEmail(formData)

      return {
        success: true,
        message: 'Solicitud enviada correctamente. Te contactaremos pronto.'
      }
    } else {
      throw new Error('Error sending email')
    }
  } catch (error) {
    console.error('Error sending demo request:', error)
    return {
      success: false,
      message: 'Error al enviar la solicitud. Por favor, intenta de nuevo o contacta directamente a juancarlos@chart-e.com'
    }
  }
}

const sendConfirmationEmail = async (formData: DemoRequestData) => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const confirmationTemplateId = 'template_confirmation' // You'll need to create this template

    const confirmationParams = {
      to_email: formData.email,
      to_name: formData.name,
      company: formData.company,
      date: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    await emailjs.send(serviceId!, confirmationTemplateId, confirmationParams)
  } catch (error) {
    console.error('Error sending confirmation email:', error)
    // Don't throw error here, main email was sent successfully
  }
}

// Analytics tracking (optional)
export const trackDemoRequest = (formData: DemoRequestData) => {
  // You can integrate with Google Analytics, Mixpanel, etc.
  if (typeof window !== 'undefined') {
    // Example with Google Analytics
    if (window.gtag) {
      window.gtag('event', 'demo_request', {
        event_category: 'lead_generation',
        event_label: formData.company,
        value: 1
      })
    }
  }
}

// Validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone format (international)
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}
