import { Router } from 'express';
import ForgotPasswordControllers from '../controllers/forgotPasswordControllers';
import ResetPasswordControllers from '../controllers/resetPasswordControllers';

const passwordRouter = Router();
const forgotPasswordControllers = new ForgotPasswordControllers();
const resetPasswordControllers = new ResetPasswordControllers();

passwordRouter.post('/forgot', forgotPasswordControllers.create);
passwordRouter.post('/reset', resetPasswordControllers.create);

export default passwordRouter;
