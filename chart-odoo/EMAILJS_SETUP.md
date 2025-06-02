# Configuración de EmailJS para Chart Odoo

## 🚀 Pasos para configurar el envío de emails real

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite 200 emails/mes)
3. Confirma tu email

### 2. Configurar servicio de email
1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado para empezar)
   - **Outlook**
   - **Yahoo**
   - **SendGrid** (para producción)
4. Sigue las instrucciones para conectar tu email
5. **Guarda el Service ID** (ej: `service_chartodoo`)

### 3. Crear template para solicitudes de demo
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa este template:

```html
Asunto: Nueva Solicitud de Demo - {{company}} - Chart Odoo

Estimado equipo de Chart Odoo,

Se ha recibido una nueva solicitud de demo con IA:

📋 INFORMACIÓN DEL PROSPECTO
==========================
Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Empresa: {{company}}
Tamaño: {{company_size}}
Fecha: {{date}}

💬 MENSAJE:
{{message}}

👥 ACCIÓN REQUERIDA:
- Contactar en las próximas 24 horas
- Preparar demo personalizada con IA
- Enviar material relevante según el tamaño de empresa

Este email fue enviado automáticamente desde la página web de Chart Odoo.
```

4. **Guarda el Template ID** (ej: `template_demo_request`)

### 4. Crear template de confirmación (opcional)
1. Crea otro template para el usuario:

```html
Asunto: Confirmación - Demo Chart Odoo con IA para {{company}}

Hola {{to_name}},

¡Gracias por tu interés en Chart Odoo!

Hemos recibido tu solicitud de demo para {{company}} el {{date}}.

🤖 PRÓXIMOS PASOS:
==================
✅ Revisaremos tu solicitud y necesidades específicas
✅ Te contactaremos en las próximas 24 horas
✅ Prepararemos una demo personalizada con IA
✅ Te mostraremos casos de éxito de tu industria

📞 CONTACTO DIRECTO:
===================
Email: juancarlos@chart-e.com
Teléfono: +52 55 3362 9528

¡Esperamos poder ayudarte a escalar tu empresa con Odoo e IA!

Saludos,
Equipo Chart Odoo
```

5. **Guarda el Template ID** (ej: `template_confirmation`)

### 5. Obtener Public Key
1. Ve a **Account** > **General**
2. Copia tu **Public Key**

### 6. Configurar variables de entorno
Actualiza el archivo `.env.local`:

```env
# Reemplaza con tus valores reales de EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
NEXT_PUBLIC_CONTACT_EMAIL=juancarlos@chart-e.com
```

### 7. Probar la integración
1. Reinicia el servidor de desarrollo: `bun run dev`
2. Ve a la sección del formulario en la página
3. Llena el formulario con datos de prueba
4. Verifica que llegue el email a tu bandeja

## 🛡️ Configuración de Seguridad

### Limitar dominios permitidos
1. En EmailJS dashboard ve a **Account** > **Allowed Origins**
2. Añade tu dominio de producción: `https://chartodoo.com`
3. Para desarrollo local: `http://localhost:3000`

### Template de variables
Asegúrate de usar solo estas variables en tus templates:
- `{{from_name}}` - Nombre del usuario
- `{{from_email}}` - Email del usuario
- `{{company}}` - Nombre de la empresa
- `{{phone}}` - Teléfono
- `{{company_size}}` - Tamaño de empresa
- `{{message}}` - Mensaje del usuario
- `{{date}}` - Fecha de la solicitud

## 📊 Monitoreo y Analytics

### Configurar Google Analytics (opcional)
1. Añade Google Analytics a tu sitio
2. El código ya incluye tracking de eventos para solicitudes de demo

### Revisar estadísticas en EmailJS
1. Ve a **Analytics** en tu dashboard de EmailJS
2. Revisa tasas de entrega y errores

## 🚀 Alternativas para Producción

### SendGrid (Recomendado para alto volumen)
- Mejor deliverability
- Hasta 100 emails gratis/día
- APIs más robustas

### Integración con CRM
- Zapier para conectar con HubSpot/Salesforce
- Webhooks para integraciones personalizadas

## 🔧 Troubleshooting

### Error: "EmailJS configuration is missing"
- Verifica que las variables de entorno estén configuradas
- Reinicia el servidor después de cambiar `.env.local`

### Emails no llegan
- Revisa la carpeta de spam
- Verifica el Service ID y Template ID
- Checa los logs en EmailJS dashboard

### Rate limits
- Plan gratuito: 200 emails/mes
- Considera upgrade si necesitas más volumen

## 📞 Soporte
Si tienes problemas con la configuración:
- Documentación EmailJS: https://www.emailjs.com/docs/
- Soporte EmailJS: support@emailjs.com
