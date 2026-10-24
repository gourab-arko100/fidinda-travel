import Link from "next/link";
import Maze from "@/components/Maze";

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <Maze className="page-hero-maze" />
      <div className="container">
        <p className="eyebrow eyebrow-light">404</p>
        <h1>This route isn&rsquo;t on our itinerary.</h1>
        <p className="lead">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <Link href="/" className="btn btn-red">
          Back to home
        </Link>
      </div>
    </section>
  );
}
