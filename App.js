import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import PatientForm from './components/PatientForm';
import ResultCard from './components/ResultCard';
import { predictAntibiotics } from './services/api';

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (patientData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await predictAntibiotics(patientData);
      setResult(response);
    } catch (err) {
      setError('Error al procesar la solicitud. Por favor intente nuevamente.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="app">
      <Navbar />
      <Header title="Sistema de deteccion y obtencion de resistencia bacteriana" 
              subtitle="Complete la información del paciente para obtener las recomendaciones del tratamiento" />
      
      <div className="container">
        {!result ? (
          <PatientForm onSubmit={handleSubmit} loading={loading} />
        ) : (
          <ResultCard result={result} onReset={handleReset} />
        )}
        
        {error && (
          <div className="alert alert-danger mt-4" role="alert">
            <i className="fas fa-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}
      </div>
      
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-container">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <div className="spinner-text">Procesando datos del paciente...</div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;