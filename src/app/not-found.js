import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-[140px] sm:text-[180px] font-extrabold leading-none bg-gradient-to-r from-[#ebb2ff] to-[#ce85e9] bg-clip-text text-transparent select-none">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-3" style={{ color: "var(--foreground)" }}>
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-10 max-w-md">
        Looks like this page got lost in the funnel. Let&apos;s get you back on track.
      </p>
      <Link href="/" className="btn-gradient rounded-full px-8 py-3 text-base font-semibold">
        Back to Home
      </Link>
    </div>
  );
}
