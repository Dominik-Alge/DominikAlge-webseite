import React, { useState } from 'react';

export default function Contact() {
  // Zustand für den geschützten PDF-Download
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // Das Passwort für den Login (Ersetzen Sie 'Wahlkampf2026' mit Ihrem Wunschpasswort)
  const CORRECT_PASSWORD = 'Wahlkampf2026'; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Falsches Passwort. Bitte versuchen Sie es erneut.');
    }
  };

  return (
    <div id="kontakt" style={styles.container}>
      <h1 style={styles.title}>Kontakt & Unterstützung</h1>
      <p style={styles.subtitle}>
        Gemeinsam für unseren Kanton. Hier finden Sie alle Möglichkeiten, mich zu kontaktieren oder meine Kampagne finanziell zu unterstützen.
      </p>

      <div style={styles.grid}>
        
        {/* SPALTE 1: DIREKTKONTAKT */}
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>📌 Kontakt aufnehmen</h2>
          <p style={styles.text}>Ich freue mich auf den Austausch mit Ihnen.</p>
          <div style={styles.infoBlock}>
            <p><strong>Name:</strong> Dominik & Alge</p>
            <p><strong>Adresse:</strong> Hauptstrasse 71, 9434 Au</p>
            <p><strong>E-Mail:</strong> <a href="mailto:dominik.alge@bluewin.ch" style={styles.link}>dominik.alge@bluewin.ch</a></p>
            <p><strong>Telefon:</strong> <a href="tel:+41 78 689 45 45" style={styles.link}>+41 (0)78 689 45 45</a></p>
          </div>
        </section>

        {/* SPALTE 2: SPENDEN & UNTERSTÜTZUNG */}
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>📊 Kampagne unterstützen</h2>
          <p style={styles.text}>Jeder Beitrag fliesst direkt in die politische Arbeit für den Kanton.</p>
          
          <div style={styles.donationBox}>
            <h3 style={styles.smallTitle}>✨ Schnell & einfach via TWINT</h3>
            <p style={styles.textSmall}>Scannen Sie den QR-Code in Ihrer Twint-App oder nutzen Sie den Link:</p>
            {/* Platzhalter für Twint QR-Code Bild */}
            <div style={styles.qrPlaceholder}>[ Hier Twint-QR-Code Bild einfügen ]</div>
            <a href="https://twint.ch" target="_blank" rel="noreferrer" style={styles.twintButton}>
              Via TWINT spenden
            </a>
          </div>

          <div style={styles.donationBox}>
            <h3 style={styles.smallTitle}>🏦 Bankverbindung (IBAN)</h3>
            <div style={styles.bankDetails}>
              <p><strong>Bank:</strong> [Raiffeisenbank Diepoldsau-Schmitter]</p>
              <p><strong>Konto auf den Namen:</strong> [Dominik Alge]</p>
              <p><strong>IBAN:</strong> CH34 8080 8005 1035 1199 9</p>
            </div>
          </div>
        </section>

        {/* SPALTE 3: INTERNER DOWNLOAD BEREICH */}
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>🔐 Interner Download</h2>
          <p style={styles.text}>Exklusive Materialien (z.B. Argumentarien, Spender-Infos, Kampagnen-Leitfaden).</p>
          
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} style={styles.form}>
              <p style={styles.textSmall}>Bitte geben Sie das Passwort ein, um die PDF-Dateien freizuschalten:</p>
              <input 
                type="password" 
                placeholder="Passwort eingeben" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
              {error && <p style={styles.error}>{error}</p>}
              <button type="submit" style={styles.button}>Login</button>
            </form>
          ) : (
            <div style={styles.successBox}>
              <p style={styles.successText}>✅ Erfolgreich eingeloggt!</p>
              <ul style={styles.downloadList}>
                <li>
                  {/* Pfad zu Ihrem PDF im 'public'-Ordner Ihres React-Projekts */}
                  <a href="/downloads/wahlkampf_dossier_2026.pdf" download style={styles.downloadLink}>
                    📄 Wahlkampf-Dossier 2026 (PDF)
                  </a>
                </li>
                <li>
                  <a href="/downloads/argumentarium.pdf" download style={styles.downloadLink}>
                    📄 Argumentarium & Positionen (PDF)
                  </a>
                </li>
              </ul>
              <button onClick={() => setIsAuthenticated(false)} style={styles.logoutButton}>
                Ausloggen
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

// Einfaches, sauberes Styling direkt in der Datei (CSS-in-JS)
const styles = {
  container: { maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif' },
  title: { fontSize: '2.5rem', color: '#1a365d', marginBottom: '10px', textAlign: 'center' },
  subtitle: { fontSize: '1.1rem', color: '#4a5568', marginBottom: '40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' },
  card: { background: '#f7fafc', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' },
  cardTitle: { fontSize: '1.5rem', color: '#2d3748', marginBottom: '15px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' },
  text: { color: '#4a5568', lineHeight: '1.6', marginBottom: '20px' },
  textSmall: { color: '#718096', fontSize: '0.9rem', marginBottom: '10px' },
  infoBlock: { lineHeight: '2' },
  link: { color: '#3182ce', textDecoration: 'none' },
  donationBox: { background: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '15px', border: '1px solid #edf2f7' },
  smallTitle: { fontSize: '1.1rem', margin: '0 0 10px 0', color: '#2d3748' },
  qrPlaceholder: { background: '#edf2f7', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a0aec0', fontSize: '0.9rem', borderRadius: '6px', marginBottom: '10px', border: '2px dashed #cbd5e0' },
  twintButton: { display: 'block', textAlign: 'center', background: '#00a3e0', color: '#fff', padding: '10px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' },
  bankDetails: { fontSize: '0.95rem', lineHeight: '1.8' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem' },
  button: { background: '#1a365d', color: '#fff', padding: '12px', borderRadius: '6px', border: 'none', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold' },
  error: { color: '#e53e3e', fontSize: '0.9rem', margin: '0' },
  successBox: { background: '#f0fff4', padding: '15px', borderRadius: '8px', border: '1px solid #c6f6d5' },
  successText: { color: '#38a169', fontWeight: 'bold', margin: '0 0 15px 0' },
  downloadList: { listStyleType: 'none', padding: 0, margin: '0 0 20px 0' },
  downloadLink: { color: '#2b6cb0', textDecoration: 'none', fontWeight: 'bold', display: 'block', padding: '5px 0' },
  logoutButton: { background: 'none', border: 'none', color: '#718096', textDecoration: 'underline', cursor: 'pointer', padding: 0 }
};
