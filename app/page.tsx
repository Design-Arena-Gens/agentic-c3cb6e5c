export default function Home() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="headline">
        <div className="badge">Welcome</div>
        <h1 id="headline">Hello, World.</h1>
        <p>
          A crisp, professional greeting designed with meticulous typography, modern
          gradients, and delightful motion.
        </p>
        <button type="button" className="primary-action">
          Explore More
        </button>
      </section>
      <footer>
        Crafted with care &mdash; Agentic Studio
      </footer>
    </main>
  );
}
