import VinderAssistant from '@/components/VinderAssistant';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0b0b',
        color: 'white',
        fontFamily: 'Inter, Arial, sans-serif',
        padding: '2rem',
      }}
    >
      <h1>Hello VINder!</h1>
      <p>Minimal starter. Deploy works. Add your chatbot next.</p>

      {/* 🔥 GPT Assistant Embed */}
      <div style={{ marginTop: '2rem' }}>
        <VinderAssistant />
      </div>
    </div>
  );
}
