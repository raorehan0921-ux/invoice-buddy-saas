import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service — Invoice Buddy AI',
};

export default function TermsPage() {
  return (
    <main className="bg-void min-h-screen">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-40 pb-24 text-white/70 leading-relaxed">
        <h1 className="font-display text-4xl text-white mb-4">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: 2026</p>

        <p className="mb-6">
          This is placeholder terms-of-service content — replace it with your
          actual terms before launch. It should cover who can use the
          product, what's expected of the customer (accurate data, lawful
          use), what the service does and doesn't guarantee (e.g. the tax
          estimate is a planning tool, not professional tax advice), and how
          billing works if you charge for it.
        </p>
        <h2 className="font-display text-xl text-white mt-10 mb-3">Using the service</h2>
        <p className="mb-6">
          Describe acceptable use, and that the AI-generated content
          (invoices, summaries, tax estimates) should be reviewed by the
          customer before relying on it for filing or sending to clients.
        </p>
        <h2 className="font-display text-xl text-white mt-10 mb-3">Limitation of liability</h2>
        <p className="mb-6">
          Standard language limiting liability for AI-generated inaccuracies,
          downtime, or data loss — consult a lawyer for wording appropriate
          to your jurisdiction before real launch.
        </p>
        <h2 className="font-display text-xl text-white mt-10 mb-3">Contact</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a href="mailto:hello@invoicebuddyai.com" className="text-violet-300 hover:text-violet-200">
            hello@invoicebuddyai.com
          </a>.
        </p>
      </div>
      <Footer />
    </main>
  );
}
