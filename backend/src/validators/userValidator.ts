// backend/src/validators/userValidator.ts
import { body } from 'express-validator';

export const createUserValidator = [
    body('employeeId')
        .isNumeric().withMessage('Employee ID must be a number.')
        .isLength({ min: 4, max: 4 }).withMessage('Employee ID must be 4 digits.'),
    body('name')
        .isString().withMessage('Name must be a string.')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters.'),
    body('password')
        .isString().withMessage('Password must be a string.')
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters.'),
    body('mobileNumber')
        .isNumeric().withMessage('Mobile number must be numeric.')
        .isLength({ min: 10, max: 10 }).withMessage('Mobile number must be 10 digits.'),
];
