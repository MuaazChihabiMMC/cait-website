import {
  AdMock,
  BrowserFrame,
  ChartMock,
  ChatMock,
  CodeMock,
  FlowMock,
  NotifyMock,
  PhoneFrame,
  SerpMock,
  SiteMock,
  SocialPostMock,
} from './Mockups';

// Bildmotiv im Kopfbereich jeder Leistungsseite
export default function ServiceVisual({ href }: { href: string }) {
  const float = 'animate-[float_7s_ease-in-out_infinite] motion-reduce:animate-none';
  const floatSlow = 'animate-[float_9s_ease-in-out_infinite_1s] motion-reduce:animate-none';

  let content: React.ReactNode;
  switch (href) {
    case '/seo-agentur-berlin':
      content = (
        <>
          <BrowserFrame url="google.de/search" className="absolute left-0 top-[4%] w-[92%]">
            <SerpMock />
          </BrowserFrame>
          <ChartMock title="Sichtbarkeit bei Google" className={`absolute bottom-[2%] right-0 w-[58%] ${float}`} />
        </>
      );
      break;
    case '/webentwicklung':
      content = (
        <>
          <BrowserFrame className="absolute left-0 top-[6%] w-[88%]">
            <SiteMock />
          </BrowserFrame>
          <PhoneFrame className={`absolute bottom-0 right-0 w-[34%] ${float}`}>
            <SocialPostMock />
          </PhoneFrame>
        </>
      );
      break;
    case '/google-ads-agentur-berlin':
      content = (
        <>
          <AdMock className="absolute left-0 top-[8%] w-[80%]" />
          <ChartMock title="Anfragen aus Anzeigen" className={`absolute bottom-[14%] right-0 w-[64%] ${float}`} />
          <NotifyMock className={`absolute bottom-0 left-[6%] w-[60%] ${floatSlow}`} />
        </>
      );
      break;
    case '/social-media':
      content = (
        <>
          <PhoneFrame className="absolute left-[8%] top-0 w-[46%] -rotate-3">
            <SocialPostMock />
          </PhoneFrame>
          <PhoneFrame className={`absolute right-[4%] top-[16%] w-[42%] rotate-3 ${float}`}>
            <SocialPostMock variant="b" />
          </PhoneFrame>
        </>
      );
      break;
    case '/softwareentwicklung':
      content = (
        <>
          <CodeMock className="absolute left-0 top-[6%] w-[90%]" />
          <FlowMock className={`absolute bottom-[6%] right-0 w-[72%] ${float}`} />
        </>
      );
      break;
    default:
      content = (
        <>
          <ChatMock className="absolute left-0 top-[2%] w-[78%]" />
          <FlowMock className={`absolute bottom-[4%] right-0 w-[70%] ${float}`} />
        </>
      );
  }

  return (
    <div className="relative mx-auto aspect-[1/1] w-full max-w-[520px]" role="img" aria-label="Beispielhafte Darstellung">
      <div aria-hidden="true" className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_65%)] blur-2xl" />
      <div className="parallax-slow absolute inset-0">{content}</div>
    </div>
  );
}
