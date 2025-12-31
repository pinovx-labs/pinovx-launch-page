import Link from "next/link";

export const faqs = [
  {
    question: "What can I do with the PinovX app?",
    answer: (
      <>
        <p>With PinovX, you can:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Buy crypto with regular money (fiat)</li>
          <li>Sell crypto for regular money (fiat)</li>
        </ul>
        <p className="mt-3">
          Send money to family, friends, or businesses anywhere in the world.
          Please see supported currencies and countries here.
        </p>
      </>
    ),
  },
  {
    question: "Do I need to verify my identity?",
    answer: (
      <>
        <p>
          Yes. We require identity verification only <b>once</b> to keep you and
          PinovX safe:
        </p>

        <ul className="list-disc pl-5 mt-2">
          <li>Individuals: Complete KYC verification</li>
          <li>
            Businesses: Owner completes KYC, then requests KYB via support
          </li>
        </ul>

        <p className="mt-3">
          Learn more in our{" "}
          <Link href="/privacy-policy" className="underline text-green-300">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/aml-policy" className="underline text-green-300">
            AML Policy
          </Link>
          .
        </p>
      </>
    ),
  },
   {
    question:
      'I verified with PinovX through Binance or Bitget. Do I need to verify again?',
    answer: (
      <p>
        Yes. That verification was only for transactions on those exchanges. To
        use the PinovX app, you'll need to download, register and verify
        directly in the app.
      </p>
    ),
  },
  {
    question: 'Does PinovX hold my crypto or money?',
    answer: (
      <div className="space-y-3">
        <p>
          No. We never hold your crypto—you keep it in your own wallet. But you
          can keep regular money (fiat) in your PinovX account. Your fiat is
          held in segregated, safeguarded accounts with our trusted banking
          partners. Neither we, our partners, nor our employees have access to
          your funds—only you can authorize transactions.
        </p>
        <Link href="/" className="block underline hover:opacity-80">
          Click here to see which currencies you can hold.
        </Link>
      </div>
    ),
  },
  {
    question: 'How do I buy or sell crypto on PinovX?',
    answer: (
      <div className="space-y-4">
        <div>
          <p className="font-bold mb-1">Buying:</p>
          <p>
            Give us your wallet address at checkout. Once your payment goes
            through, we send the crypto straight to your wallet. It's faster if
            you already have money (fiat) in your PinovX account.
          </p>
        </div>

        <div>
          <p className="font-bold mb-1">To add money to your PinovX wallet:</p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Watch a video guide
          </a>
        </div>

        <div>
          <p className="font-bold mb-1">To buy cryptocurrency from us:</p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Watch a video guide
          </a>
        </div>

        <div>
          <p className="font-bold mb-1">Selling:</p>
          <p>
            We give you an address to send your crypto. Once it's confirmed
            (usually <strong>5 minutes to 1 hour</strong>), we add the money to
            your PinovX account.
          </p>
        </div>

        <div>
          <p className="font-bold mb-1">To sell cryptocurrency to us:</p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Watch a video guide
          </a>
        </div>
      </div>
    ),
  },
  {
    question: 'How much does it cost to use PinovX?',
    answer: (
      <div className="space-y-3">
        <p>
          Most transactions on PinovX are completely free except CAD to CAD
          transfers—no fees for buying crypto, selling crypto, or sending money
          abroad.
        </p>
        <p>For full details, see our pricing schedule here.</p>
      </div>
    ),
  },
];
