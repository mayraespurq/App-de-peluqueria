// Screens1.jsx — Onboarding, Auth, Home, Reservar

// ─────────── 1. ONBOARDING ───────────
function ScreenOnboarding({ accent, goTo, page = 0 }) {
  const pages = [
  { eyebrow: '01 · Bienvenida', title: 'Tu próximo\ncorte, en 30\nsegundos.', sub: 'Reserva con tu estilista favorito sin llamadas, sin esperas.' },
  { eyebrow: '02 · Elige', title: 'Los mejores\nestilistas de\ntu barrio.', sub: 'Perfiles, portfolio y reseñas reales. Tú decides.' },
  { eyebrow: '03 · Disfruta', title: 'Recordatorios,\nreprograma con\nun toque.', sub: 'Nosotros nos encargamos del resto.' }];

  const p = pages[page];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FAF7F2' }}>
      <div style={{ height: 420, position: 'relative', margin: '62px 16px 0', borderRadius: 28, overflow: 'hidden' }}>
        <Placeholder label={`hero · ${p.eyebrow.split('·')[1].trim()}`}
        bgImage="https://d375139ucebi94.cloudfront.net/region2/es/4127/biz_photo/d8f39812fda74aa08fb9287f4ab87c-argeny-peluqueria-biz-photo-c633180347e440cc918db251638b5f-booksy.jpeg"
        style={{ width: '100%', height: '100%' }} />
        <div style={{
          position: 'absolute', top: 18, left: 18,
          fontFamily: 'ui-monospace, monospace', fontSize: 10,
          letterSpacing: 1.2, color: '#fff',
          background: 'rgba(0,0,0,0.4)', padding: '4px 10px', borderRadius: 999,
          backdropFilter: 'blur(8px)'
        }}>STUDIO</div>
      </div>
      <div style={{ padding: '36px 28px 0', flex: 1 }}>
        <div style={{
          fontFamily: 'ui-monospace, monospace', fontSize: 11,
          letterSpacing: 1, color: accent, marginBottom: 14
        }}>{p.eyebrow}</div>
        <h1 style={{
          fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400,
          fontSize: 40, lineHeight: 1.02, letterSpacing: -1.2,
          color: '#1A1815', margin: 0, whiteSpace: 'pre-line'
        }}>{p.title}</h1>
        <p style={{
          fontFamily: 'Inter, system-ui, sans-serif', fontSize: 15,
          lineHeight: 1.5, color: 'rgba(26,24,21,0.6)',
          marginTop: 16, maxWidth: 280
        }}>{p.sub}</p>
      </div>
      <div style={{ padding: '0 20px 44px' }}>
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 24 }}>
          {pages.map((_, i) =>
          <div key={i} style={{
            height: 4, width: i === page ? 24 : 4,
            borderRadius: 2,
            background: i === page ? accent : 'rgba(0,0,0,0.15)',
            transition: 'all 0.3s'
          }} />
          )}
        </div>
        <Button full size="lg" accent={accent} onClick={() => goTo(page < 2 ? { onboardingPage: page + 1 } : { screen: 'login' })}>
          {page < 2 ? 'Siguiente' : 'Empezar'}
          <Icon name="arrowRight" size={18} />
        </Button>
        <div style={{ textAlign: 'center', marginTop: 14 }}>
          <button onClick={() => goTo({ screen: 'login' })} style={{
            background: 'none', border: 'none', fontSize: 14, color: 'rgba(26,24,21,0.5)',
            fontFamily: 'Inter, sans-serif', cursor: 'pointer'
          }}>Saltar</button>
        </div>
      </div>
    </div>);

}

// ─────────── 2. LOGIN / REGISTRO ───────────
function ScreenLogin({ accent, goTo, mode = 'login', setAuthMode }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [focused, setFocused] = React.useState(null);
  const valid = email.includes('@') && password.length >= 6;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FAF7F2', padding: '72px 28px 28px' }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{
          fontFamily: 'ui-monospace, monospace', fontSize: 10,
          letterSpacing: 2, color: accent, marginBottom: 12
        }}>STUDIO</div>
        <h1 style={{
          fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400,
          fontSize: 36, lineHeight: 1.05, letterSpacing: -1,
          color: '#1A1815', margin: 0
        }}>{mode === 'login' ? 'Bienvenida\nde vuelta.' : 'Crea tu\ncuenta.'}</h1>
        <p style={{ fontSize: 14, color: 'rgba(26,24,21,0.55)', marginTop: 10 }}>
          {mode === 'login' ? 'Entra para ver tus reservas.' : 'Un minuto y listo.'}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {mode === 'register' &&
        <InputField icon="user" placeholder="Nombre completo" accent={accent} />
        }
        <InputField icon="mail" placeholder="Email" value={email}
        onChange={setEmail} accent={accent}
        focused={focused === 'e'} onFocus={() => setFocused('e')} onBlur={() => setFocused(null)} />
        <InputField icon="lock" placeholder="Contraseña" type="password" value={password}
        onChange={setPassword} accent={accent}
        focused={focused === 'p'} onFocus={() => setFocused('p')} onBlur={() => setFocused(null)} />
        {mode === 'login' &&
        <div style={{ textAlign: 'right', fontSize: 13, color: accent, marginTop: -4 }}>
            ¿Olvidaste la contraseña?
          </div>
        }
      </div>

      <div style={{ marginTop: 'auto' }}>
        <Button full size="lg" accent={accent}
        style={{ opacity: valid ? 1 : 0.5 }}
        onClick={() => valid && goTo({ screen: 'home' })}>
          {mode === 'login' ? 'Entrar' : 'Crear cuenta'}
        </Button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }} />
          <span style={{ fontSize: 12, color: 'rgba(26,24,21,0.45)' }}>o continúa con</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.08)' }} />
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="ghost" full>
            <Icon name="apple" size={18} /> Apple
          </Button>
          <Button variant="ghost" full>
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22 12c0-.8-.1-1.4-.2-2H12v4h5.6c-.2 1.4-1 2.5-2.2 3.3v2.7h3.5c2-1.9 3.1-4.7 3.1-8z" /><path fill="#34A853" d="M12 22c2.9 0 5.4-1 7.1-2.6l-3.5-2.7c-1 .6-2.2 1-3.6 1-2.8 0-5.1-1.9-6-4.4H2.4v2.8C4.1 19.5 7.8 22 12 22z" /><path fill="#FBBC05" d="M6 13.3c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V6.5H2.4C1.5 8.2 1 10 1 12s.5 3.8 1.4 5.5L6 13.3z" /><path fill="#EA4335" d="M12 5.5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.4 2.1 14.9 1 12 1 7.8 1 4.1 3.5 2.4 7.1L6 9.9c.9-2.5 3.2-4.4 6-4.4z" /></svg>
            Google
          </Button>
        </div>

        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: 'rgba(26,24,21,0.6)' }}>
          {mode === 'login' ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
          <span onClick={() => setAuthMode(mode === 'login' ? 'register' : 'login')}
          style={{ color: accent, fontWeight: 500, cursor: 'pointer' }}>
            {mode === 'login' ? 'Regístrate' : 'Entra'}
          </span>
        </div>
      </div>
    </div>);

}

function InputField({ icon, placeholder, value = '', onChange, type, accent, focused, onFocus, onBlur }) {
  return (
    <div style={{
      height: 54, borderRadius: 16,
      background: '#fff',
      border: `1px solid ${focused ? accent : 'rgba(0,0,0,0.08)'}`,
      display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
      transition: 'border-color 0.15s'
    }}>
      <Icon name={icon} size={18} color="rgba(26,24,21,0.4)" />
      <input
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{
          flex: 1, border: 'none', outline: 'none', background: 'transparent',
          fontSize: 15, fontFamily: 'Inter, system-ui, sans-serif', color: '#1A1815'
        }} />
      
    </div>);

}

// ─────────── 3. HOME ───────────
function ScreenHome({ accent, goTo, dark = false }) {
  const bg = dark ? '#13110F' : '#FAF7F2';
  const fg = dark ? '#FFF' : '#1A1815';
  const muted = dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,24,21,0.55)';
  const cardBg = dark ? '#1D1A16' : '#FFF';

  const services = [
  { icon: 'cut', label: 'Corte', price: 'desde 18€' },
  { icon: 'sparkle', label: 'Color', price: 'desde 45€' },
  { icon: 'scissors', label: 'Peinado', price: 'desde 25€' },
  { icon: 'star', label: 'Tratamiento', price: 'desde 30€' }];


  return (
    <div style={{ height: '100%', background: bg, overflow: 'auto', paddingBottom: 100 }}>
      {/* Top bar */}
      <div style={{ padding: '62px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 13, color: muted, fontFamily: 'Inter' }}>Hola,</div>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 26, color: fg, letterSpacing: -0.5 }}>Lucía</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Icon name="bell" size={18} color={fg} />
          </div>
          <Avatar name="Lucía Morales" size={44} />
        </div>
      </div>

      {/* Next appointment hero card */}
      <div style={{ padding: '28px 20px 0' }}>
        <div style={{
          background: accent, borderRadius: 28, padding: '22px 22px 20px',
          color: '#fff', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: -30, right: -40, width: 160, height: 160,
            borderRadius: '50%', background: 'rgba(255,255,255,0.08)'
          }} />
          <div style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 10,
            letterSpacing: 1.5, opacity: 0.8, marginBottom: 14
          }}>PRÓXIMO TURNO</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 56, lineHeight: 0.95, letterSpacing: -2 }}>28</div>
            <div style={{ paddingBottom: 6 }}>
              <div style={{ fontSize: 15, fontWeight: 500 }}>Abril</div>
              <div style={{ fontSize: 13, opacity: 0.8 }}>Mar · 10:30</div>
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name="Carla Ríos" size={32} tint="rgba(255,255,255,0.2)" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Corte + peinado</div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>con Carla Ríos</div>
            </div>
            <div style={{
              fontSize: 12, padding: '6px 10px', borderRadius: 999,
              background: 'rgba(255,255,255,0.18)', cursor: 'pointer'
            }}>Ver</div>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div style={{ padding: '28px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, color: fg, margin: 0, letterSpacing: -0.3 }}>Reservar</h2>
          <span style={{ fontSize: 13, color: accent, fontWeight: 500 }}>Ver todo</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {services.map((s, i) =>
          <div key={i} onClick={() => goTo({ screen: 'reservar' })} style={{
            background: cardBg, borderRadius: 20, padding: 18,
            border: dark ? '1px solid rgba(255,255,255,0.06)' : 'none',
            cursor: 'pointer'
          }}>
              <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 12
            }}>
                <Icon name={s.icon} size={20} color={accent} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: fg, fontFamily: 'Inter' }}>{s.label}</div>
              <div style={{ fontSize: 12, color: muted, marginTop: 2 }}>{s.price}</div>
            </div>
          )}
        </div>
      </div>

      {/* Recommended stylists */}
      <div style={{ padding: '28px 0 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 24px', marginBottom: 14 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, color: fg, margin: 0, letterSpacing: -0.3 }}>Destacados</h2>
          <span style={{ fontSize: 13, color: accent, fontWeight: 500 }}>Ver todo</span>
        </div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 24px 4px' }}>
          {['Carla', 'Mateo', 'Sofía', 'Diego'].map((n, i) =>
          <div key={i} style={{ width: 140, flexShrink: 0 }}>
              <div style={{ height: 160, borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
                <Placeholder label={`portrait · ${n.toLowerCase()}`} style={{ width: '100%', height: '100%' }} dark={dark} />
                <div style={{
                position: 'absolute', top: 10, right: 10,
                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
                color: '#fff', fontSize: 11, padding: '4px 8px', borderRadius: 999,
                display: 'flex', alignItems: 'center', gap: 3
              }}>
                  <Icon name="star" size={10} color="#FFD35C" /> 4.{8 + i % 2}
                </div>
              </div>
              <div style={{ padding: '10px 2px 0' }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: fg, fontFamily: 'Inter' }}>{n}</div>
                <div style={{ fontSize: 12, color: muted }}>{['Color', 'Corte', 'Peinado', 'Tratamiento'][i]}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tab bar */}
      <TabBar accent={accent} dark={dark} active="home" goTo={goTo} />
    </div>);

}

function TabBar({ accent, dark, active, goTo }) {
  const items = [
  { key: 'home', icon: 'home', label: 'Inicio' },
  { key: 'reservar', icon: 'plus', label: 'Reservar' },
  { key: 'history', icon: 'history', label: 'Historial' },
  { key: 'perfil', icon: 'user', label: 'Perfil' }];

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30,
      padding: '12px 16px 28px',
      background: dark ?
      'linear-gradient(to top, #13110F 60%, rgba(19,17,15,0))' :
      'linear-gradient(to top, #FAF7F2 60%, rgba(250,247,242,0))'
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around',
        background: dark ? '#1D1A16' : '#FFF',
        borderRadius: 999, padding: '10px 8px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
      }}>
        {items.map((it) => {
          const isActive = it.key === active;
          return (
            <div key={it.key} onClick={() => goTo({ screen: it.key })} style={{
              padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
              background: isActive ? accent : 'transparent',
              display: 'flex', alignItems: 'center', gap: 6,
              transition: 'background 0.2s'
            }}>
              <Icon name={it.icon} size={18} color={isActive ? '#fff' : dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,24,21,0.55)'} />
              {isActive && <span style={{ fontSize: 13, color: '#fff', fontWeight: 500, fontFamily: 'Inter' }}>{it.label}</span>}
            </div>);

        })}
      </div>
    </div>);

}

// ─────────── 4. RESERVAR (elegir servicio) ───────────
function ScreenReservar({ accent, goTo, dark, selected = [], toggleService }) {
  const bg = dark ? '#13110F' : '#FAF7F2';
  const fg = dark ? '#FFF' : '#1A1815';
  const muted = dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,24,21,0.55)';
  const cardBg = dark ? '#1D1A16' : '#FFF';

  const categories = [
  { title: 'Cortes', items: [
    { id: 'c1', name: 'Corte mujer', time: '45 min', price: 28 },
    { id: 'c2', name: 'Corte hombre', time: '30 min', price: 18 },
    { id: 'c3', name: 'Flequillo', time: '15 min', price: 8 }]
  },
  { title: 'Color', items: [
    { id: 'k1', name: 'Tinte raíz', time: '60 min', price: 45 },
    { id: 'k2', name: 'Mechas balayage', time: '2h 30', price: 95 }]
  },
  { title: 'Peinados', items: [
    { id: 'p1', name: 'Peinado recogido', time: '45 min', price: 35 }]
  }];


  const total = categories.flatMap((c) => c.items).filter((i) => selected.includes(i.id)).
  reduce((s, i) => s + i.price, 0);

  return (
    <div style={{ height: '100%', background: bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '62px 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
        }} onClick={() => goTo({ screen: 'home' })}>
          <Icon name="chevronLeft" size={18} color={fg} />
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, color: fg }}>Paso 1 de 3</div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ padding: '8px 24px 20px' }}>
        <h1 style={{
          fontFamily: 'Fraunces, serif', fontSize: 32, margin: 0,
          letterSpacing: -0.8, color: fg, lineHeight: 1.05
        }}>¿Qué necesitas?</h1>
        <p style={{ fontSize: 14, color: muted, marginTop: 8 }}>Selecciona uno o varios servicios.</p>
      </div>

      <div style={{ flex: 1, overflow: 'auto', paddingBottom: 120 }}>
        {categories.map((cat, ci) =>
        <div key={ci} style={{ marginBottom: 16 }}>
            <div style={{
            padding: '0 28px 10px',
            fontFamily: 'ui-monospace, monospace', fontSize: 10,
            letterSpacing: 1.5, color: muted, textTransform: 'uppercase'
          }}>{cat.title}</div>
            <div style={{ margin: '0 16px', background: cardBg, borderRadius: 22, overflow: 'hidden' }}>
              {cat.items.map((it, ii) => {
              const sel = selected.includes(it.id);
              return (
                <div key={it.id} onClick={() => toggleService(it.id)} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '16px 18px',
                  borderBottom: ii < cat.items.length - 1 ? `1px solid ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` : 'none',
                  cursor: 'pointer'
                }}>
                    <div style={{
                    width: 22, height: 22, borderRadius: 7,
                    border: `1.5px solid ${sel ? accent : dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)'}`,
                    background: sel ? accent : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                      {sel && <Icon name="check" size={14} color="#fff" strokeWidth={2.5} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 500, color: fg, fontFamily: 'Inter' }}>{it.name}</div>
                      <div style={{ fontSize: 12, color: muted, marginTop: 2, display: 'flex', gap: 8, alignItems: 'center' }}>
                        <Icon name="clock" size={11} color={muted} /> {it.time}
                      </div>
                    </div>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: 18, color: fg }}>{it.price}€</div>
                  </div>);

            })}
            </div>
          </div>
        )}
      </div>

      {/* Sticky footer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '16px 20px 28px',
        background: bg,
        borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: muted }}>{selected.length} servicio{selected.length !== 1 ? 's' : ''}</div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 26, color: fg, letterSpacing: -0.5 }}>{total}€</div>
          </div>
          <Button size="lg" accent={accent} style={{ opacity: selected.length ? 1 : 0.4 }}
          onClick={() => selected.length && goTo({ screen: 'profesional' })}>
            Continuar <Icon name="arrowRight" size={16} />
          </Button>
        </div>
      </div>
    </div>);

}

Object.assign(window, { ScreenOnboarding, ScreenLogin, ScreenHome, ScreenReservar, TabBar });