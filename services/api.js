import axios from 'axios';

// Configura la URL base para el API
const API_URL = 'http://localhost:5000/api';

// Esta función simula la comunicación con el servidor Flask
// En producción, elimina el setTimeout y descomenta la llamada a axios
export const predictAntibiotics = async (patientData) => {
  // Simulación de llamada al API (para desarrollo)
  return new Promise((resolve) => {
    setTimeout(() => {
      // Datos mock para simular la respuesta del servidor
      const mockResponse = {
        success: true,
        prediction: Math.random() > 0.3, // Simula una predicción positiva o negativa
        recommendedAntibiotics: ['CAZ_NM', 'CRO_NM'],
        confidence: 0.87,
        message: 'Predicción completada con éxito',
        patientRisk: 'medio',
        details: {
          FEP_NM: patientData.FEP_NM ? 0.244383 : 0,
          ATM_NM: patientData.ATM_NM ? 0.208789 : 0,
          CAZ_NM: patientData.CAZ_NM ? 0.171788 : 0,
          CRO_NM: patientData.CRO_NM ? 0.105151 : 0,
          CZO_NM: patientData.CZO_NM ? 0.052876 : 0,
          CIP_NM: patientData.CIP_NM ? 0.042332 : 0,
          CEP_NM: patientData.CEP_NM ? 0.027561 : 0,
          SAM_NM: patientData.SAM_NM ? 0.024576 : 0,
          AMK_NM: patientData.AMK_NM ? 0.016792 : 0,
          TZP_NM: patientData.TZP_NM ? 0.012913 : 0
        }
      };
      
      resolve(mockResponse);
    }, 2000); // Simula un retardo de 2 segundos
  });
    
};