import alefApiCreator from './AlefApi';
import { EMPLOYEES, EMPLOYEE_COUNT } from './constants/ApiConstants';

const empApi = alefApiCreator();

export const getAllEmployees = () => empApi.get(EMPLOYEES);

export const getEmployeeCount = () => empApi.get(EMPLOYEE_COUNT);

export const createEmployee = (employee) => empApi.post(EMPLOYEES, employee);