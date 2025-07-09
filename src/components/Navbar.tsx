import Image from 'next/image';

export default function Navbar() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 2.5rem 1.5rem 2.5rem',
      position: 'absolute',
      top: 0,
      left: 0,
    }}>
      {/* Microsoft logo placeholder */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 32, height: 32, marginRight: 8, background: '#f3f4f6', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Replace with actual logo if available */}
          <Image src="/window.svg" alt="Microsoft Logo" width={28} height={28} />
        </div>
        <span style={{ fontWeight: 500, fontSize: 18, color: '#222' }}>Microsoft</span>
      </div>
      <button style={{
        background: '#e5f0fb',
        color: '#2563eb',
        border: 'none',
        borderRadius: 20,
        padding: '0.5rem 1.25rem',
        fontWeight: 500,
        fontSize: 16,
        cursor: 'pointer',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
      }}>
        Free Assessment
      </button>
    </div>
  );
} 