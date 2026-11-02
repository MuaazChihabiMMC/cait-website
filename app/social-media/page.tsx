import ServicePage, { serviceMetadata } from '@/components/site/ServicePage';
import { getService } from '@/lib/services';

const service = getService('/social-media');

export const metadata = serviceMetadata(service);

export default function SocialMediaPage() {
  return <ServicePage service={service} />;
}
