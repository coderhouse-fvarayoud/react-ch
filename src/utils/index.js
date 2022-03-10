export const PHONE_REGEX = /^\(\d{2,5}\)\s\d{2,4}-\d{4}$|^\d{6,13}$/

export const initialCheckoutFormData = {
  name: {
    value: '',
    error: '',
    opened: false,
    required: true,
    regex: null,
    errorMessages: {
      isEmptyMessage: 'Debés ingresar un nombre',
      isInvalidMessage: 'El nombre ingresado no es válido',
    },
  },
  surname: {
    value: '',
    error: '',
    opened: false,
    required: true,
    regex: null,
    errorMessages: {
      isEmptyMessage: 'Debés ingresar un apellido',
      isInvalidMessage: 'El apellido ingresado no es válido',
    },
  },
  phone: {
    value: '',
    error: '',
    opened: false,
    required: false,
    regex: PHONE_REGEX,
    errorMessages: {
      isEmptyMessage: 'Debés ingresar una teléfono',
      isInvalidMessage: 'El teléfono ingresado no es válido',
    },
  },
  email: {
    value: '',
    error: '',
    opened: false,
    required: false,
    regex: null,
    errorMessages: {
      isEmptyMessage: 'Debés ingresar un email',
      isInvalidMessage: '',
    },
  },
  confirmedEmail: {
    value: '',
    error: '',
    opened: false,
    required: false,
    regex: null,
    errorMessages: {
      isEmptyMessage: 'Debés confirmar tu email',
      isInvalidMessage: 'Los correos no coinciden',
    },
  },
}
