import React from 'react';
import Nav from '../components/Navbar'; // Asegúrate de que la ruta del archivo sea correcta

export default function Home() {
    const centerText = {
        textAlign: 'center', 
        margin: '0 auto', 
        maxWidth: '800px',
        padding: '20px',    
    };

    return (
        <div>
            <Nav /> 
            <h1 style={centerText}>Invoice Service</h1>
            <div style={centerText}>
                <p>
                    "Nuestro software de facturación de servicios web es la solución definitiva para simplificar la gestión de facturas en el entorno digital. Diseñado específicamente para negocios en línea, este software te permite crear, enviar y realizar un seguimiento de facturas de manera eficiente. Desde servicios de desarrollo web hasta consultoría en línea, nuestro software se adapta a tus necesidades. Olvídate de las complicaciones contables y mantén un control total sobre tus finanzas. Descubre la comodidad de gestionar tus facturas de servicios web con facilidad y precisión."
                </p>
            </div>
        </div>
    );
}
