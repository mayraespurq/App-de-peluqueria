// Screens2.jsx — Profesional, Calendario, Confirmación, Perfil

// ─────────── 5. ELEGIR PROFESIONAL ───────────
function ScreenProfesional({ accent, goTo, dark, proId, setProId }) {
  const bg = dark ? '#13110F' : '#FAF7F2';
  const fg = dark ? '#FFF' : '#1A1815';
  const muted = dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,24,21,0.55)';
  const cardBg = dark ? '#1D1A16' : '#FFF';

  const pros = [
  { id: 'any', name: 'Cualquiera disponible', spec: 'Primer hueco libre', rating: null, years: null, any: true },
  { id: 'carla', name: 'Carla Ríos', spec: 'Color · Balayage', rating: 4.9, reviews: 284, years: 8 },
  { id: 'mateo', name: 'Mateo Vela', spec: 'Corte clásico', rating: 4.8, reviews: 192, years: 12 },
  { id: 'sofia', name: 'Sofía Lang', spec: 'Peinados · Bodas', rating: 5.0, reviews: 67, years: 4 },
  { id: 'diego', name: 'Diego Farré', spec: 'Tratamientos', rating: 4.7, reviews: 121, years: 6 }];


  return (
    <div style={{ height: '100%', background: bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '62px 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
        }} onClick={() => goTo({ screen: 'reservar' })}>
          <Icon name="chevronLeft" size={18} color={fg} />
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, color: fg }}>Paso 2 de 3</div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ padding: '8px 24px 16px' }}>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 32, margin: 0, letterSpacing: -0.8, color: fg, lineHeight: 1.05 }}>Elige a tu estilista.

        </h1>
        <p style={{ fontSize: 14, color: muted, marginTop: 8 }}>O deja que escojamos el primer hueco.</p>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '4px 16px 120px' }}>
        {pros.map((p) => {
          const sel = proId === p.id;
          return (
            <div key={p.id} onClick={() => setProId(p.id)} style={{
              background: cardBg, borderRadius: 20, padding: 16,
              marginBottom: 10, display: 'flex', alignItems: 'center', gap: 14,
              border: `1.5px solid ${sel ? accent : 'transparent'}`,
              cursor: 'pointer', transition: 'border-color 0.15s'
            }}>
              {p.any ?
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                  <Icon name="sparkle" size={24} color={accent} />
                </div> :

              <div style={{ width: 56, height: 56, borderRadius: '50%', overflow: 'hidden' }}>
                  <Placeholder label={p.name.split(' ')[0].toLowerCase()} style={{ width: '100%', height: '100%' }} dark={dark} />
                </div>
              }
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: fg, fontFamily: 'Inter' }}>{p.name}</div>
                <div style={{ fontSize: 13, color: muted, marginTop: 2 }}>{p.spec}</div>
                {p.rating &&
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, fontSize: 12, color: muted }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 3, color: fg }}>
                      <Icon name="star" size={12} color="#E8A93C" /> {p.rating}
                    </span>
                    <span>·</span>
                    <span>{p.reviews} reseñas</span>
                    <span>·</span>
                    <span>{p.years}a</span>
                  </div>
                }
              </div>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                border: `1.5px solid ${sel ? accent : dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}`,
                background: sel ? accent : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                {sel && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />}
              </div>
            </div>);

        })}
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '16px 20px 28px', background: bg,
        borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
      }}>
        <Button full size="lg" accent={accent} style={{ opacity: proId ? 1 : 0.4 }}
        onClick={() => proId && goTo({ screen: 'calendario' })}>
          Ver disponibilidad <Icon name="arrowRight" size={16} />
        </Button>
      </div>
    </div>);

}

// ─────────── 6. CALENDARIO ───────────
function ScreenCalendario({ accent, goTo, dark, slot, setSlot }) {
  const bg = dark ? '#13110F' : '#FAF7F2';
  const fg = dark ? '#FFF' : '#1A1815';
  const muted = dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,24,21,0.55)';
  const cardBg = dark ? '#1D1A16' : '#FFF';

  const dates = Array.from({ length: 10 }, (_, i) => {
    const d = new Date(2026, 3, 27 + i);
    return {
      label: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'][d.getDay()],
      num: d.getDate(),
      key: i,
      unavailable: i === 4 // 1 de mayo — festivo
    };
  });

  const times = {
    morning: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
    afternoon: ['14:00', '14:30', '15:00', '15:30', '16:30', '17:00', '17:30', '18:00']
  };
  const unavailable = ['09:00', '10:00', '14:30', '17:30'];

  const [dateIdx, setDateIdx] = React.useState(slot?.dateIdx ?? 1);
  React.useEffect(() => {if (slot?.time) setSlot({ dateIdx, time: slot.time });}, [dateIdx]);

  return (
    <div style={{ height: '100%', background: bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '62px 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
        }} onClick={() => goTo({ screen: 'profesional' })}>
          <Icon name="chevronLeft" size={18} color={fg} />
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, color: fg }}>Paso 3 de 3</div>
        <div style={{ width: 40 }} />
      </div>

      <div style={{ padding: '8px 24px 20px' }}>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 32, margin: 0, letterSpacing: -0.8, color: fg, lineHeight: 1.05 }}>
          ¿Cuándo te\nviene bien?
        </h1>
        <div style={{
          marginTop: 10, fontSize: 13, color: muted,
          display: 'flex', alignItems: 'center', gap: 6
        }}>
          <Icon name="calendar" size={14} color={muted} /> Abril – Mayo 2026
          <Icon name="chevronDown" size={14} color={muted} />
        </div>
      </div>

      {/* Date strip */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '0 20px 22px', scrollbarWidth: 'none' }}>
        {dates.map((d, i) => {
          const sel = dateIdx === i;
          return (
            <div key={i} onClick={() => !d.unavailable && setDateIdx(i)} style={{
              width: 60, flexShrink: 0, borderRadius: 16,
              padding: '12px 0', textAlign: 'center', cursor: d.unavailable ? 'not-allowed' : 'pointer',
              background: sel ? accent : cardBg,
              opacity: d.unavailable ? 0.35 : 1,
              transition: 'background 0.15s'
            }}>
              <div style={{
                fontSize: 11, color: sel ? 'rgba(255,255,255,0.7)' : muted,
                fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: 0.5
              }}>{d.label}</div>
              <div style={{
                fontFamily: 'Fraunces, serif', fontSize: 22, marginTop: 2,
                color: sel ? '#fff' : fg, letterSpacing: -0.5
              }}>{d.num}</div>
            </div>);

        })}
      </div>

      {/* Time slots */}
      <div style={{ flex: 1, overflow: 'auto', padding: '0 20px 140px' }}>
        {['morning', 'afternoon'].map((period) =>
        <div key={period} style={{ marginBottom: 20 }}>
            <div style={{
            padding: '4px 8px 12px',
            fontFamily: 'ui-monospace, monospace', fontSize: 10,
            letterSpacing: 1.5, color: muted, textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 8
          }}>
              <span>{period === 'morning' ? 'Mañana' : 'Tarde'}</span>
              <span style={{ flex: 1, height: 1, background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
              {times[period].map((t) => {
              const un = unavailable.includes(t);
              const sel = slot?.time === t && slot?.dateIdx === dateIdx;
              return (
                <div key={t} onClick={() => !un && setSlot({ dateIdx, time: t })} style={{
                  height: 48, borderRadius: 14,
                  background: sel ? accent : un ? 'transparent' : cardBg,
                  border: un ? `1px dashed ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}` : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Inter', fontSize: 15, fontWeight: 500,
                  color: sel ? '#fff' : un ? dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)' : fg,
                  textDecoration: un ? 'line-through' : 'none',
                  cursor: un ? 'not-allowed' : 'pointer',
                  transition: 'background 0.15s'
                }}>{t}</div>);

            })}
            </div>
          </div>
        )}
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '16px 20px 28px', background: bg,
        borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
      }}>
        {slot?.time ?
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: muted }}>Seleccionado</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 20, color: fg, letterSpacing: -0.3 }}>
                {dates[dateIdx].label} {dates[dateIdx].num} · {slot.time}
              </div>
            </div>
            <Button size="lg" accent={accent} onClick={() => goTo({ screen: 'confirmacion' })}>
              Reservar <Icon name="arrowRight" size={16} />
            </Button>
          </div> :

        <Button full size="lg" accent={accent} style={{ opacity: 0.4 }}>
            Selecciona un horario
          </Button>
        }
      </div>
    </div>);

}

// ─────────── 7. CONFIRMACIÓN ───────────
function ScreenConfirmacion({ accent, goTo, dark, slot, proId, services }) {
  const bg = dark ? '#13110F' : '#FAF7F2';
  const fg = dark ? '#FFF' : '#1A1815';
  const muted = dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,24,21,0.55)';
  const cardBg = dark ? '#1D1A16' : '#FFF';

  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  const proName = {
    any: 'Primer disponible', carla: 'Carla Ríos', mateo: 'Mateo Vela',
    sofia: 'Sofía Lang', diego: 'Diego Farré'
  }[proId] || 'Carla Ríos';

  const dates = ['Dom 27', 'Lun 28', 'Mar 29', 'Mié 30', 'Jue 1', 'Vie 2', 'Sáb 3', 'Dom 4', 'Lun 5', 'Mar 6'];
  const dateLabel = dates[slot?.dateIdx ?? 1] || 'Lun 28';

  if (!done) {
    return (
      <div style={{ height: '100%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 60, height: 60, borderRadius: '50%',
          border: `3px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
          borderTopColor: accent,
          animation: 'spin 0.8s linear infinite'
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); }}`}</style>
      </div>);

  }

  return (
    <div style={{ height: '100%', background: bg, display: 'flex', flexDirection: 'column', paddingTop: 62 }}>
      <div style={{ padding: '24px 28px 0', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: 76, height: 76, borderRadius: '50%',
          background: accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          <Icon name="check" size={36} color="#fff" strokeWidth={2.5} />
        </div>
        <style>{`@keyframes pop { 0% { transform: scale(0); } 100% { transform: scale(1); } }`}</style>
      </div>

      <div style={{ padding: '22px 28px 4px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 32, margin: 0, letterSpacing: -0.8, color: fg }}>
          ¡Turno\nconfirmado!
        </h1>
        <p style={{ fontSize: 14, color: muted, marginTop: 10, maxWidth: 280, margin: '10px auto 0' }}>
          Te enviamos los detalles por email. También puedes añadirlo a tu calendario.
        </p>
      </div>

      <div style={{ padding: '24px 20px 0', flex: 1, overflow: 'auto' }}>
        <div style={{
          background: cardBg, borderRadius: 24, padding: 20,
          border: `1px dashed ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
        }}>
          {/* Ticket header */}
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, letterSpacing: 1.5, color: muted }}>
              RESERVA #SR-4287
            </div>
            <div style={{
              fontSize: 11, fontFamily: 'Inter', fontWeight: 500,
              padding: '3px 9px', borderRadius: 999,
              background: 'rgba(76, 175, 80, 0.12)', color: '#2E7D32'
            }}>Confirmada</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 20 }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 56, color: fg, letterSpacing: -2, lineHeight: 0.9 }}>
              {dateLabel.split(' ')[1]}
            </div>
            <div style={{ paddingBottom: 8 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: fg, fontFamily: 'Inter' }}>Abril · {dateLabel.split(' ')[0]}</div>
              <div style={{ fontSize: 13, color: muted, marginTop: 2 }}>{slot?.time || '10:30'} – 11:15</div>
            </div>
          </div>

          <Row label="Estilista" value={proName} dark={dark} />
          <Row label="Servicio" value="Corte + peinado" dark={dark} />
          <Row label="Duración" value="45 min" dark={dark} />
          <Row label="Salón" value="Studio — Gràcia, BCN" dark={dark} />

          <div style={{
            marginTop: 16, paddingTop: 16,
            borderTop: `1px dashed ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'
          }}>
            <span style={{ fontSize: 13, color: muted }}>Total</span>
            <span style={{ fontFamily: 'Fraunces, serif', fontSize: 26, color: fg, letterSpacing: -0.5 }}>63€</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <Button variant="ghost" full>
            <Icon name="calendar" size={16} /> Al calendario
          </Button>
          <Button variant="ghost" full>
            <Icon name="share" size={16} /> Compartir
          </Button>
        </div>
      </div>

      <div style={{ padding: '20px 20px 28px' }}>
        <Button full size="lg" variant="dark" onClick={() => goTo({ screen: 'home' })}>
          Listo
        </Button>
      </div>
    </div>);

}

function Row({ label, value, dark }) {
  const muted = dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,24,21,0.55)';
  const fg = dark ? '#FFF' : '#1A1815';
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
      <span style={{ color: muted }}>{label}</span>
      <span style={{ color: fg, fontWeight: 500 }}>{value}</span>
    </div>);

}

// ─────────── 8. PERFIL ───────────
function ScreenPerfil({ accent, goTo, dark }) {
  const bg = dark ? '#13110F' : '#FAF7F2';
  const fg = dark ? '#FFF' : '#1A1815';
  const muted = dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,24,21,0.55)';
  const cardBg = dark ? '#1D1A16' : '#FFF';

  const sections = [
  { title: 'Cuenta', items: [
    { icon: 'user', label: 'Datos personales' },
    { icon: 'lock', label: 'Seguridad', detail: 'Face ID' },
    { icon: 'cards', label: 'Pagos', detail: '•• 4829' }]
  },
  { title: 'Preferencias', items: [
    { icon: 'bell', label: 'Notificaciones', detail: 'On' },
    { icon: 'mapPin', label: 'Salón habitual', detail: 'Gràcia' },
    { icon: 'heart', label: 'Estilistas favoritos', detail: '3' }]
  },
  { title: 'Soporte', items: [
    { icon: 'help', label: 'Centro de ayuda' },
    { icon: 'logout', label: 'Cerrar sesión', danger: true }]
  }];


  return (
    <div style={{ height: '100%', background: bg, overflow: 'auto', paddingBottom: 100 }}>
      <div style={{ padding: '62px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, color: fg, letterSpacing: -0.6 }}>Perfil</div>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Icon name="settings" size={18} color={fg} />
        </div>
      </div>

      {/* Identity card */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          background: cardBg, borderRadius: 24, padding: 20,
          display: 'flex', alignItems: 'center', gap: 16
        }}>
          <Avatar name="Lucía Morales" size={64} tint="#E8DFD3" />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, color: fg, letterSpacing: -0.3 }}>Lucía Morales</div>
            <div style={{ fontSize: 13, color: muted, marginTop: 2 }}>lucia.m@mail.com</div>
            <div style={{
              marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: 11, fontWeight: 500, color: accent,
              padding: '3px 8px', borderRadius: 999,
              background: `${accent}18`
            }}>
              <Icon name="sparkle" size={10} color={accent} /> Cliente · 14 visitas
            </div>
          </div>
          <Icon name="edit" size={18} color={muted} />
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '14px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
        { num: '14', label: 'Visitas' },
        { num: '3', label: 'Próximas' },
        { num: '520€', label: 'Ahorrado' }].
        map((s, i) =>
        <div key={i} style={{ background: cardBg, borderRadius: 18, padding: '14px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, color: fg, letterSpacing: -0.3 }}>{s.num}</div>
            <div style={{ fontSize: 11, color: muted, marginTop: 2 }}>{s.label}</div>
          </div>
        )}
      </div>

      {/* Sections */}
      {sections.map((s, si) =>
      <div key={si} style={{ padding: '24px 0 0' }}>
          <div style={{
          padding: '0 28px 10px',
          fontFamily: 'ui-monospace, monospace', fontSize: 10,
          letterSpacing: 1.5, color: muted, textTransform: 'uppercase'
        }}>{s.title}</div>
          <div style={{ background: cardBg, borderRadius: 22, margin: '0 16px', overflow: 'hidden' }}>
            {s.items.map((it, ii) =>
          <div key={ii} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '14px 18px',
            borderBottom: ii < s.items.length - 1 ?
            `1px solid ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` :
            'none',
            cursor: 'pointer'
          }}>
                <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: it.danger ? 'rgba(220,50,50,0.08)' : dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                  <Icon name={it.icon} size={17} color={it.danger ? '#C73F3F' : fg} />
                </div>
                <div style={{ flex: 1, fontSize: 15, color: it.danger ? '#C73F3F' : fg, fontFamily: 'Inter', fontWeight: 500 }}>{it.label}</div>
                {it.detail && <div style={{ fontSize: 13, color: muted }}>{it.detail}</div>}
                {!it.danger && <Icon name="chevronRight" size={14} color={muted} />}
              </div>
          )}
          </div>
        </div>
      )}

      <TabBar accent={accent} dark={dark} active="perfil" goTo={goTo} />
    </div>);

}

Object.assign(window, { ScreenProfesional, ScreenCalendario, ScreenConfirmacion, ScreenPerfil });