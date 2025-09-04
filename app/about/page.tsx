export default function AboutPage() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-10">
      <h2 className="text-4xl font-bold text-pink-500">About Me</h2>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          I’m a <span className="text-gray-100 font-semibold">full-stack & blockchain engineer</span> 
          with 3+ years of experience, including building large-scale production systems.  
          Skilled in <span className="text-gray-100">Solidity, Rust, Layer 2 scaling, ZK proofs</span>, 
          and <span className="text-gray-100">cross-chain bridges</span>.
        </p>
        <p>
          Beyond blockchain, I work across the stack:{" "}
          <span className="text-gray-100">Next.js, React, NestJS, Python, PostgreSQL, MongoDB</span>.  
          I also deploy and scale systems on{" "}
          <span className="text-gray-100">AWS, Docker, and Vercel</span>.
        </p>
        <p>
          My passion lies at the intersection of{" "}
          <span className="text-gray-100">AI, Web3, and full-stack development</span>, 
          building scalable and user-friendly products.
        </p>
      </div>
    </section>
  );
}
