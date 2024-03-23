import { IApiResponse, ITermin } from '../types';
import { apiInstance } from '../../helpers/api';

export const fetchGlossary = async () => {
    try {
        const candidate = await apiInstance.get<IApiResponse<ITermin[]>>('/glossary');
        return candidate.data;
    } catch (e) {
        throw e;
    }
};
