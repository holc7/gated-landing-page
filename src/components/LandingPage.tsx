export default function LandingPage() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      width: '100%',
      marginTop: '7rem',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 700,
        color: '#1a1a1a',
        textAlign: 'center',
        marginBottom: '1.5rem',
        lineHeight: 1.1,
      }}>
        Assess Your Data Estate<br />for the Future of AI
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#4b5563',
        textAlign: 'center',
        maxWidth: 600,
        marginBottom: '2.5rem',
      }}>
        Get expert guidance to optimise your data estate<br />and prepare for AI with Microsoft Fabric.
      </p>
      <button style={{
        background: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: 20,
        padding: '0.75rem 2rem',
        fontWeight: 500,
        fontSize: 18,
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(37,99,235,0.08)'
      }}>
        Get free assessment
      </button>
    </main>
  );
} 