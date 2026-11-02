import ServicePage, { serviceMetadata } from '@/components/site/ServicePage';
import { getService } from '@/lib/services';

const service = getService('/seo-agentur-berlin');

export const metadata = serviceMetadata(service);

export default function SeoPage() {
  return <ServicePage service={service} />;
}
