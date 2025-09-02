import Image from "next/image";
import ResumeButton from "../../components/ResumeButton";

export default function ResumePage() {
  return (
    <section className="min-h-screen px-6 py-12 max-w-5xl mx-auto space-y-12">
      {/* Header with Photo + Name */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg">
          {/* Place your image in /public/images/profile.jpg */}
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-pink-500">
            Ahsan Moizz
          </h1>
          <p className="text-gray-300">
            Lahore, Pakistan · +92 302 1502223 · jonsonhig@gmail.com
          </p>
          <ResumeButton />
        </div>
      </div>

      {/* Summary */}
      <section>
        <h2 className="text-2xl font-bold text-pink-400 mb-2">Summary</h2>
        <p className="text-gray-200 leading-relaxed">
          Blockchain and Full-Stack Developer with 3+ years of experience,
          including 1+ year building production-grade blockchain applications.
          Specialized in smart contracts, DeFi/NFT platforms, Layer 2 scaling,
          ZK proofs, bridges, and on/off-ramp systems. Skilled across frontend,
          backend, databases, and cloud infrastructure, with 20+ projects
          delivered. Strong ability to design and scale products from idea to
          production.
        </p>
      </section>

      {/* Work Experience */}
      <section>
        <h2 className="text-2xl font-bold text-pink-400 mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-white">
              Senior Blockchain Developer — Daily Blockchain Network
            </h3>
            <p className="text-sm text-gray-400">Toronto, Canada · Apr 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
              <li>Architect of Daily Blockchain — Quantum + AI + Blockchain protocol</li>
              <li>Delivered DeFi, DAO, NFT, cross-chain bridge infrastructure</li>
              <li>Designed secure multi-sig, zk-optimized scaling solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white">
              Lead Full-Stack & Blockchain Engineer — A.T.I.G.I.N.G
            </h3>
            <p className="text-sm text-gray-400">Goa, India · Feb 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
              <li>Led ChatPay: hybrid real-time chat + blockchain payments</li>
              <li>Built scalable socket-based messaging + encrypted delivery</li>
              <li>Deployed cloud-native infra on AWS with Docker/Kubernetes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold text-pink-400 mb-4">Key Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-200">
          <div>
            <h3 className="font-semibold text-white">Blockchain</h3>
            <p>
              Solidity, Rust, Hardhat, Truffle, Ethers.js, zk-SNARKs,
              Rollups, Cross-Chain Bridges, Wallet Integration, DAO Protocols
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Full-Stack</h3>
            <p>
              React, Next.js, React Native, NestJS, Node.js, Express, Python,
              Django, FastAPI, PostgreSQL, MongoDB
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Cloud & DevOps</h3>
            <p>
              AWS (EC2, S3, Lambda, RDS), Docker, Kubernetes, CI/CD,
              Vercel, Cloudflare
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Languages</h3>
            <p>
              JavaScript, TypeScript, React ,Python, Solidity, Rust, SQL, C++
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-pink-400 mb-2">Education</h2>
        <p className="text-gray-200">
          Intermediate in Computer Science — Punjab College, Khanewal (2023 – 2025)
        </p>
      </section>
    </section>
  );
}
