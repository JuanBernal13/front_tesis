import React, { useState } from 'react';

const PatientForm = ({ onSubmit, loading }) => {
  // Descripción de cada antibiótico
  const antibiotics = [
    { id: 'FEP_NM', name: 'Cefepima (FEP_NM)', desc: 'Antibiótico cefalosporina de cuarta generación', value: 0.244383 },
    { id: 'ATM_NM', name: 'Aztreonam (ATM_NM)', desc: 'Antibiótico monobactámico', value: 0.208789 },
    { id: 'CAZ_NM', name: 'Ceftazidima (CAZ_NM)', desc: 'Cefalosporina de tercera generación', value: 0.171788 },
    { id: 'CRO_NM', name: 'Ceftriaxona (CRO_NM)', desc: 'Cefalosporina de tercera generación', value: 0.105151 },
    { id: 'CZO_NM', name: 'Cefazolina (CZO_NM)', desc: 'Cefalosporina de primera generación', value: 0.052876 },
    { id: 'CIP_NM', name: 'Ciprofloxacino (CIP_NM)', desc: 'Fluoroquinolona', value: 0.042332 },
    { id: 'CEP_NM', name: 'Cefepima (CEP_NM)', desc: 'Cefalosporina de cuarta generación', value: 0.027561 },
    { id: 'SAM_NM', name: 'Ampicilina/Sulbactam (SAM_NM)', desc: 'Combinación de betalactámico con inhibidor', value: 0.024576 },
    { id: 'AMK_NM', name: 'Amikacina (AMK_NM)', desc: 'Aminoglucósido', value: 0.016792 },
    { id: 'TZP_NM', name: 'Piperacilina/Tazobactam (TZP_NM)', desc: 'Combinación de betalactámico con inhibidor', value: 0.012913 }
  ];

  // Estado inicial del formulario
  const initialState = {
    patientName: '',
    patientId: '',
    age: '',
    gender: '',
    FEP_NM: false,
    ATM_NM: false,
    CAZ_NM: false,
    CRO_NM: false,
    CZO_NM: false,
    CIP_NM: false,
    CEP_NM: false,
    SAM_NM: false,
    AMK_NM: false,
    TZP_NM: false
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="content-card">
      <h3 className="text-center mb-4">
        <i className="fas fa-clipboard-list me-2"></i>
        Formulario de Evaluación de Paciente
      </h3>
      
      <form onSubmit={handleSubmit}>
        {/* Información del paciente */}
        <div className="row mb-4">
          <div className="col-md-12">
            <h4 className="mb-3">Información del Paciente</h4>
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="patientName" className="form-label">Nombre del Paciente</label>
            <input
              type="text"
              className="form-control"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="patientId" className="form-label">ID del Paciente</label>
            <input
              type="text"
              className="form-control"
              id="patientId"
              name="patientId"
              value={formData.patientId}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="age" className="form-label">Edad</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              min="0"
              max="120"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="col-md-6 mb-3">
            <label htmlFor="gender" className="form-label">Género</label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar...</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </div>
        </div>
        
        {/* Sección de antibióticos */}
        <div className="row mb-4">
          <div className="col-md-12">
            <h4 className="mb-3">Presencia de Antibióticos</h4>
            <p className="text-muted mb-4">
              Marque los antibióticos que están presentes en el paciente.
            </p>
          </div>
          
          {antibiotics.map((antibiotic) => (
            <div className="col-md-6 mb-3" key={antibiotic.id}>
              <div className="antibiotic-checkbox">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={antibiotic.id}
                    name={antibiotic.id}
                    checked={formData[antibiotic.id]}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor={antibiotic.id}>
                    <strong>{antibiotic.name}</strong>
                  </label>
                  <p className="text-muted mb-0 mt-1">{antibiotic.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-12 text-center">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Procesando...
                </>
              ) : (
                <>
                  <i className="fas fa-stethoscope me-2"></i>
                  Analizar Paciente
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;