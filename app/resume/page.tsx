import Image from "next/image";

export default function ResumePage() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border border-gray-700">
          <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-100">Ahsan Moizz</h1>
          <p className="text-gray-400 text-sm">
            Lahore, Pakistan · +92 302 1502223 · jonsonhig@gmail.com
          </p>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold text-pink-500 mb-2">Summary</h2>
        <p className="text-gray-300 leading-relaxed">
          Blockchain and Full-Stack Developer with 3+ years experience. 
          Specialized in smart contracts, DeFi, NFT platforms, zk proofs, and cross-chain bridges.  
          Strong full-stack skills across frontend, backend, databases, and cloud.
        </p>
      </div>

      {/* Work Experience */}
      <div>
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Experience</h2>
        <div className="space-y-6 border-l border-gray-700 pl-6">
          <div>
            <h3 className="font-semibold text-gray-100">
              Senior Blockchain Developer — Daily Blockchain Network
            </h3>
            <p className="text-sm text-gray-400">Toronto · Apr 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Architect of Daily Blockchain protocol</li>
              <li>Delivered DeFi, DAO, NFT, and cross-chain infrastructure</li>
              <li>Designed zk-optimized scaling solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-100">
              Lead Full-Stack & Blockchain Engineer — A.T.I.G.I.N.G
            </h3>
            <p className="text-sm text-gray-400">Goa · Feb 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Led ChatPay: real-time chat + blockchain payments</li>
              <li>Built scalable encrypted messaging infrastructure</li>
              <li>Deployed AWS infra with Docker & Kubernetes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Key Skills</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h3 className="font-semibold text-gray-100">Blockchain</h3>
            <p>Solidity, Rust, zk-SNARKs, Rollups, Bridges, Wallets</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100">Full-Stack</h3>
            <p>React, Next.js, Node.js, Python, PostgreSQL, MongoDB</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100">Cloud & DevOps</h3>
            <p>AWS, Docker, Kubernetes, CI/CD, Vercel</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100">Languages</h3>
            <p>TypeScript, Python, Solidity, Rust, SQL, C++</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-bold text-pink-500 mb-2">Education</h2>
        <p className="text-gray-300">
          Intermediate in Computer Science — Punjab College, Khanewal (2023–2025)
        </p>
      </div>
    </section>
  );
}
