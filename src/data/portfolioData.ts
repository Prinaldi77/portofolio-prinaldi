import type { LocalizedPortfolioData, PortfolioData } from '../types/portfolio';
import { idData, idProfile, idTechStack, idJourney, idProjects } from './id';
import { enData, enProfile, enTechStack, enJourney, enProjects } from './en';

// Re-export individual localized datasets and sub-items for maximum flexibility
export {
  idData,
  idProfile,
  idTechStack,
  idJourney,
  idProjects,
  enData,
  enProfile,
  enTechStack,
  enJourney,
  enProjects,
};

// Main localized data map consumed by the app
export const localizedPortfolioData: LocalizedPortfolioData = {
  en: enData,
  id: idData,
};

// Default fallback export
export const portfolioData: PortfolioData = localizedPortfolioData.en;
export default portfolioData;
