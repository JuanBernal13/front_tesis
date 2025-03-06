import React from 'react';

const ResultCard = ({ result, onReset }) => {
  // Determinamos la clase de alerta basada en la predicción
  const getCardClass = () => {
    if (!result.success) return 'danger';
    if (result.prediction) return 'warning';
    return 'success';
  };

  // Convertimos las claves de los antibióticos a nombres legibles
  const getAntibioticName = (code) => {
    const antibioticMap = {
      'FEP_NM': 'Cefepima',
      'ATM_NM': 'Aztreonam',
      'CAZ_NM': 'Ceftazidima',
      'CRO_NM': 'Ceftriaxona',
      'CZO_NM': 'Cefazolina',
      'CIP_NM': 'Ciprofloxacino',
      'CEP_NM': 'Cefepima',
      'SAM_NM': 'Ampicilina/Sulbactam',
      'AMK_NM': 'Amikacina',
      'TZP_NM': 'Piperacilina/Tazobactam'
    };
    
    return antibioticMap[code] || code;
  };

  // Función para renderizar la tabla de detalles de antibióticos
  const renderAntibioticsDetails = () => {
    const details = result.details;
    if (!details) return null;
    
    return (
      <div className="table-responsive mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Antibiótico</th>
              <th>Código</th>
              <th>Valor</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(details).map(([code, value]) => (
              <tr key={code}>
                <td>{getAntibioticName(code)}</td>
                <td>{code}</td>
                <td>{value.toFixed(6)}</td>
                <td>
                  {value > 0 ? (
                    <span className="badge bg-success">Presente</span>
                  ) : (
                    <span className="badge bg-secondary">Ausente</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={`result-card ${getCardClass()}`}>
      <div className="text-center mb-4">
        <h3>
          <i className={`fas fa-${result.success ? 'clipboard-check' : 'exclamation-triangle'} me-2`}></i>
          Resultado del Análisis
        </h3>
      </div>
      
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className={`alert alert-${result.prediction ? 'warning' : 'success'}`} role="alert">
            <h4 className="alert-heading">
              {result.prediction 
                ? <><i className="fas fa-exclamation-triangle me-2"></i>Atención Requerida</>
                : <><i className="fas fa-check-circle me-2"></i>Resultado Favorable</>
              }
            </h4>
            <p>{result.message}</p>
            <hr />
            <p className="mb-0">
              Confianza de la predicción: <strong>{(result.confidence * 100).toFixed(2)}%</strong>
            </p>
          </div>
        </div>
      </div>
      
      {result.success && (
        <>
          <div className="row mb-4">
            <div className="col-md-6">
              <h4>Nivel de Riesgo</h4>
              <div className="mt-3">
                <div className="d-flex align-items-center">
                  <div className="progress flex-grow-1" style={{ height: '25px' }}>
                    <div 
                      className={`progress-bar bg-${
                        result.patientRisk === 'alto' ? 'danger' : 
                        result.patientRisk === 'medio' ? 'warning' : 'success'
                      }`}
                      role="progressbar" 
                      style={{ 
                        width: `${
                          result.patientRisk === 'alto' ? '100%' : 
                          result.patientRisk === 'medio' ? '65%' : '30%'
                        }` 
                      }}
                      aria-valuenow={
                        result.patientRisk === 'alto' ? 100 : 
                        result.patientRisk === 'medio' ? 65 : 30
                      }
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                      {result.patientRisk.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <h4>Antibióticos Recomendados</h4>
              {result.recommendedAntibiotics && result.recommendedAntibiotics.length > 0 ? (
                <ul className="list-group mt-3">
                  {result.recommendedAntibiotics.map((antibiotic, index) => (
                    <li key={index} className="list-group-item">
                      <i className="fas fa-prescription-bottle-alt me-2 text-primary"></i>
                      {getAntibioticName(antibiotic)} <span className="text-muted">({antibiotic})</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted mt-3">No hay recomendaciones específicas.</p>
              )}
            </div>
          </div>
          
          <div className="row">
            <div className="col-12">
              <h4>Detalles de Antibióticos</h4>
              {renderAntibioticsDetails()}
            </div>
          </div>
        </>
      )}
      
      <div className="row mt-4">
        <div className="col-12 text-center">
          <button 
            className="btn btn-primary" 
            onClick={onReset}
          >
            <i className="fas fa-redo me-2"></i>
            Nuevo Análisis
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;