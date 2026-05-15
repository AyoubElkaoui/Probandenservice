import type { Metadata } from 'next';
import { services } from '@/lib/services';
import { PageHeader } from '@/components/PageHeader';
import { ServiceGrid } from '@/components/ServiceGrid';
import { EmergencyBand } from '@/components/EmergencyBand';

export const metadata: Metadata = {
  title: 'Diensten — Banden, uitlijnen, airco & spoed',
  description:
    'Alle bandenservices in Culemborg — banden kopen, wisselen, 3D uitlijnen, airco vullen, 24/7 spoedservice en bandenopslag. Deskundige technici, servicegarantie.',
  alternates: { canonical: '/diensten' },
};

export default function DienstenPage() {
  return (
    <>
      <PageHeader
        eyebrow="DIENSTEN"
        title={<>Zes vakken.<br />Eén werkplaats.</>}
        lede={`Van een eenvoudige bandenwissel tot een nachtelijke pechmelding — wij doen alles wat uw banden en wielen aangaan. Hieronder de ${services.length} diensten waar wij dagelijks mee bezig zijn.`}
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Diensten' }]}
      />
      <div style={{ padding: '64px 0 120px', background: 'var(--bg)' }}>
        <div className="container">
          <ServiceGrid />
        </div>
      </div>
      <EmergencyBand />
    </>
  );
}
