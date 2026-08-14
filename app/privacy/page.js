import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy — Invoice Buddy AI',
};

export default function PrivacyPage() {
  return (
    <main className="bg-void min-h-screen">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-40 pb-24 text-white/70 leading-relaxed">
        <h1 className="font-display text-4xl text-white mb-4">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: 2026</p>

        <p className="mb-6">
          This is placeholder privacy policy content — replace it with your
          actual policy before launch. It should describe what data Invoice
          Buddy AI collects (e.g. uploaded financial files, chat questions),
          how that data is processed (locally on your own backend, and
          sent to your chosen AI provider for the chat/insight features
          only), how long it's retained, and how customers can request their
          data be deleted.
        </p>
        <h2 className="font-display text-xl text-white mt-10 mb-3">What we collect</h2>
        <p className="mb-6">
          Describe the specific data your version of the product collects —
          uploaded bank statements, invoice descriptions, and any account
          details if you add login/signup later.
        </p>
        <h2 className="font-display text-xl text-white mt-10 mb-3">How it's used</h2>
        <p className="mb-6">
          Explain that data is used only to generate the dashboard, AI chat
          answers, and invoices the customer requests, and is not sold or
          shared with third parties beyond the AI provider needed to power
          those features.
        </p>
        <h2 className="font-display text-xl text-white mt-10 mb-3">Contact</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <a href="mailto:hello@invoicebuddyai.com" className="text-violet-300 hover:text-violet-200">
            hello@invoicebuddyai.com
          </a>.
        </p>
      </div>
      <Footer />
    </main>
  );
}
