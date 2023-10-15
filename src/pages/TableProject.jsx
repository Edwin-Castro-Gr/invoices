import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import React, { useEffect, useState } from 'react';
import Nav from '../components/Navbar';
import NestedModal from '../pages/Invoice';

// Función para Editar 
function EditRow(row) {
    alert('Editar fila');
    console.log(`Editar fila: ${row.name}`);
}

// Función para Eliminar
function DeleteRow(row) {
    alert('Eliminar Fila');
    console.log(`Editar fila: ${row.name}`);
}

// Función para Generar invoice
function GenerateInvoice(row) {
    alert('Generate Invoice');
    console.log(`Generar factura para: ${row.name}`);
}

export default function TableSheet() {
    const [data, setData] = useState([]);
    const [nestedModalOpen, setNestedModalOpen] = useState(true);

    useEffect(() => {
        import('../dataTest/projects.json')
            .then((jsonData) => {
                setData(jsonData.default);
            })
            .catch((error) => {
                console.error('Error al cargar datos JSON:', error);
            });
    }, []);

    const closeNestedModal = () => {
        setNestedModalOpen(false);
    };

    return (
        <>
            <Nav />
            <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
                <Table
                    stripe="odd"
                    hoverRow
                    sx={{ captionSide: 'top', '& tbody': { bgcolor: 'background.surface' } }}
                >
                    <caption style={{ textAlign: 'center' }}>
                        <h1>Projects</h1>
                    </caption>
                    <thead>
                        <tr>
                            <th style={{ width: '6%' }}>Edit / Delete</th>
                            <th style={{ width: '6%' }}>ID Project</th>
                            <th style={{ width: '7%' }}>Name Project</th>
                            <th style={{ width: '7%' }}>Client</th>
                            <th style={{ width: '22%' }}>Description Project</th>
                            <th style={{ width: '8%' }}>Date Start&nbsp;</th>
                            <th style={{ width: '8%' }}>Date End Preview&nbsp;</th>
                            <th style={{ width: '10%' }}>Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td style={{ display: 'flex', gap: '8px' }}>
                                    <Button
                                        size="s"
                                        variant="outlined"
                                        color="neutral"
                                        onClick={() => EditRow(row)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        size="s"
                                        variant="plain"
                                        color="danger"
                                        onClick={() => DeleteRow(row)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                                <td>{row.idProject}</td>
                                <td>{row.nameProject}</td>
                                <td>{row.client}</td>
                                <td>{row.description}</td>
                                <td>{row.dateStart}</td>
                                <td>{row.dateEnd}</td>
                                <td style={{ display: 'flex', gap: '10px' }}>
                                    <Button
                                        size="s"
                                        variant="outlined"
                                        color="danger"
                                        onClick={() => GenerateInvoice(row)}
                                    >
                                        PDF
                                    </Button>
                                </td>

                                <td>
                                    {/* Button Modal view */}
                                    {nestedModalOpen && (
                                        <NestedModal onClose={closeNestedModal} isOpen={nestedModalOpen} />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
        </>
    );
}
