import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/saga-blue/theme.css'; // Importe o tema do PrimeReact
import 'primereact/resources/primereact.min.css'; // Importe o CSS do PrimeReact
import 'primeicons/primeicons.css'; // Importe os ícones do PrimeIcons
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import ClickEventDemo from "@/components/Galleria";

export default function Home() {
  return (    
    <PrimeReactProvider>
    <ClickEventDemo/>    
    </PrimeReactProvider>
  );
}
