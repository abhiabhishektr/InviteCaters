// backend/src/useCases/loginUseCase.ts

import { userRepository } from '../repositories'; 
import { AuthService, TokenService } from '../services'; 
import { errorHelper, returnDTO } from '../helpers'; 

export const loginUseCase = async (employeeId: string, password: string, deviceId: string) => {
    const user = await userRepository.findByEmployeeId(employeeId);
    
    if (!user || !(await AuthService.comparePassword(password, user.password))) {
        throw errorHelper('Invalid credentials', 400);
    }

    if (user.deviceId === 'UNREGISTERED_DEVICE') {
        user.deviceId = deviceId; 
        await userRepository.update(user.id, { deviceId });
    } else if (user.deviceId !== deviceId) {
        throw errorHelper('Access denied: Unrecognized device.', 403);
    }

    const token = TokenService.generateToken(user);
    const userDTO = returnDTO(user, { excludeFields: ['password', '__v'] });

    return {
        token,
        user: userDTO
    };
};
