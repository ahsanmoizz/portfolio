export default function Footer() {
  return (
    <footer className="bg-black/95 text-gray-400 text-center py-6 border-t border-pink-500/30 mt-auto">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="text-pink-400 font-semibold hover:drop-shadow-[0_0_10px_#ff16d1]">
          MyPortfolio
        </span>{" "}
        · All Rights Reserved.
      </p>
    </footer>
  );
}
