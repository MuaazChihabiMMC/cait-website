import ServicePage, { serviceMetadata } from '@/components/site/ServicePage';
import { getService } from '@/lib/services';

const service = getService('/softwareentwicklung');

export const metadata = serviceMetadata(service);

export default function SoftwarePage() {
  return <ServicePage service={service} />;
}
