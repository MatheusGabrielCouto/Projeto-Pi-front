import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email incorreto').required('Campo obrigtório'),
  password: Yup.string().min(5, 'senha no minimo de 5 digitos').required('Campo obrigtório')
})