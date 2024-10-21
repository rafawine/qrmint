import dynamic from 'next/dynamic';

// Desactiva SSR para este componente
const MaterialButton = dynamic(() => import('./ui/components/FilledButton'), {
  ssr: false,
});

export default function Home() {  
  return (
    <div>
      <h1>QRMint</h1>
      <MaterialButton label="Download" />
    </div>
  );
}