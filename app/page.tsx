export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Finance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Model Equity Dilution<br />
          <span className="text-[#58a6ff]">Through Funding Rounds</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          See exactly how your ownership shrinks with every investment round. Built for founders raising Series A–C and employees evaluating equity offers.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Modeling — $9/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-4 font-semibold">Sample Output</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[#58a6ff] border-b border-[#30363d]">
                  <th className="pb-2 text-left font-semibold">Round</th>
                  <th className="pb-2 text-right font-semibold">Raise</th>
                  <th className="pb-2 text-right font-semibold">Pre-Money Val.</th>
                  <th className="pb-2 text-right font-semibold">Founder %</th>
                </tr>
              </thead>
              <tbody className="text-[#c9d1d9]">
                <tr className="border-b border-[#21262d]">
                  <td className="py-2">Seed</td>
                  <td className="py-2 text-right">$500K</td>
                  <td className="py-2 text-right">$4.5M</td>
                  <td className="py-2 text-right text-green-400">90.0%</td>
                </tr>
                <tr className="border-b border-[#21262d]">
                  <td className="py-2">Series A</td>
                  <td className="py-2 text-right">$3M</td>
                  <td className="py-2 text-right">$12M</td>
                  <td className="py-2 text-right text-yellow-400">72.0%</td>
                </tr>
                <tr>
                  <td className="py-2">Series B</td>
                  <td className="py-2 text-right">$10M</td>
                  <td className="py-2 text-right">$40M</td>
                  <td className="py-2 text-right text-orange-400">57.6%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9<span className="text-xl text-[#8b949e] font-normal">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited funding rounds",
              "Founder & employee equity tracking",
              "Option pool modeling",
              "Exportable cap table summary",
              "Dilution waterfall chart"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Who is this for?",
              a: "Startup founders raising Series A through C, and employees who want to understand how future rounds will affect their equity stake."
            },
            {
              q: "What does the calculator model?",
              a: "Each funding round's pre-money valuation, investment amount, new shares issued, and resulting ownership percentages for all stakeholders including option pools."
            },
            {
              q: "Is my data stored?",
              a: "No. All calculations run in your browser. Nothing is sent to a server, so your cap table data stays completely private."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Equity Dilution Calculator. All rights reserved.
      </footer>
    </main>
  );
}
