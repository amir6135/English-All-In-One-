import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="grid min-h-[50dvh] place-items-center px-6 text-center">
      <div>
        <h1 className="text-2xl font-medium">این صفحه نیست</h1>
        <p className="mt-2 text-muted">از خانه دوباره شروع کنید.</p>
        <Link to="/" className="mt-4 inline-flex h-11 items-center rounded-lg bg-pine px-4 text-sm text-pine-fg">
          خانه
        </Link>
      </div>
    </main>
  );
}
