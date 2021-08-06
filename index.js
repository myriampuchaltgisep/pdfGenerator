
import { getPDF } from './src/fileGenerator'

const generatePDF = async (event, _context) => {
  const response = await getPDF(event);
  return response;
};

export { generatePDF }