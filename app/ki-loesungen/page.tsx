import ServicePage, { serviceMetadata } from '@/components/site/ServicePage';
import { getService } from '@/lib/services';

const service = getService('/ki-loesungen');

export const metadata = serviceMetadata(service);

export default function KiPage() {
  return <ServicePage service={service} />;
}
