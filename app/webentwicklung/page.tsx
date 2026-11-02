import ServicePage, { serviceMetadata } from '@/components/site/ServicePage';
import { getService } from '@/lib/services';

const service = getService('/webentwicklung');

export const metadata = serviceMetadata(service);

export default function WebentwicklungPage() {
  return <ServicePage service={service} />;
}
