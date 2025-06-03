export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center" }}>
      <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-muted-foreground">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}