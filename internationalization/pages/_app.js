import { useRouter } from "next/router";
import {NextIntlClientProvider} from 'next-intl';


export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="Europe/Vienna"
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );}
