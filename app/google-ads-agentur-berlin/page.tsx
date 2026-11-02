import ServicePage, { serviceMetadata } from '@/components/site/ServicePage';
import { getService } from '@/lib/services';

const service = getService('/google-ads-agentur-berlin');

export const metadata = serviceMetadata(service);

export default function GoogleAdsPage() {
  return <ServicePage service={service} />;
}
