// backend/src/helpers/responseHelper.ts
import { Response } from 'express';

interface ResponseData {
    success: boolean;
    message?: string;
    data?: any;
}

export const sendResponse = (res: Response, statusCode: number, responseData: ResponseData) => {
    const { success, message, data } = responseData;

    return res.status(statusCode).json({
        success,
        message: message || undefined,
        data: data || null,
    });
};
