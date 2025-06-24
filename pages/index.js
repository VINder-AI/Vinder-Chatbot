import VinderAssistant from '../components/VinderAssistant';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0b0b0b',
      color: 'white',
      fontFamily: 'Inter, Arial, sans-serif',
      flexDirection: 'column'
    }}>
      <h1>Hello VINder!</h1>
      <p>Minimal starter. Deploy works. Add your chatbot next.</p>
      <VinderAssistant />
    </div>
  );
}
