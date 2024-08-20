import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Importa los estilos básicos
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Importa los estilos del complemento


function Pdfview() {
    const pdfjsVersion = '3.11.174';
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (

<div style={{ height: '100vh'}}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl="public/KanbanEase.pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  )
}

export default Pdfview

