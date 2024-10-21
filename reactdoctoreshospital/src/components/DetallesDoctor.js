import React from 'react';

const DetallesDoctor = ({ doctor, show, handleClose }) => {
    return (
        <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Detalles del Doctor</h5>
                    </div>
                    <div className="modal-body">
                        {doctor && (
                            <div>
                                <p><strong>Apellido:</strong> {doctor.apellido}</p>
                                <p><strong>Especialidad:</strong> {doctor.especialidad}</p>
                                <p><strong>Salario:</strong> {doctor.salario}</p>
                                <p><strong>ID Hospital:</strong> {doctor.idHospital}</p>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetallesDoctor;
