import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-sans text-6xl font-bold leading-[1.2] text-ink">فهم</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">الصفحة غير موجودة</h1>
      <p className="mt-2 text-muted">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-olive px-6 py-3 font-semibold text-sand"
      >
        العودة إلى فَهْم
      </Link>
    </main>
  );
}
