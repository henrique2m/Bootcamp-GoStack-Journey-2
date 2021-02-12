import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ForgotPasswordControllers from '../controllers/forgotPasswordControllers';
import ResetPasswordControllers from '../controllers/resetPasswordControllers';

const passwordRouter = Router();
const forgotPasswordControllers = new ForgotPasswordControllers();
const resetPasswordControllers = new ResetPasswordControllers();

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordControllers.create,
);
passwordRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  resetPasswordControllers.create,
);

export default passwordRouter;
