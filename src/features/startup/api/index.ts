import { startupService } from '@/services/startup/startupService';

export const startupApi = {
  getAll: startupService.getAll,
  getById: startupService.getById,
  create: startupService.create,
  update: startupService.update,
};