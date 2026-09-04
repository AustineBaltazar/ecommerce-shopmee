import { Link } from 'react-router-dom'

const categories = [
  { name: 'Carry essentials', detail: 'Bags made for busy days', tone: 'blue' },
  { name: 'Move freely', detail: 'Comfort-first everyday sneakers', tone: 'yellow' },
  { name: 'Keep time', detail: 'Minimal details, maximum impact', tone: 'green' },
]

const featuredProducts = [
  { name: 'Everyday Backpack', price: '$49.99', tag: 'Best seller', mark: 'B' },
  { name: 'Classic Sneakers', price: '$74.99', tag: 'New arrival', mark: 'S' },
  { name: 'Minimal Watch', price: '$89.99', tag: 'Staff pick', mark: 'W' },
]

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">The everyday edit</span>
            <h1>Good things for your everyday.</h1>
            <p>
              Thoughtful essentials, selected to make your routines feel a little more like you.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="primary-action">Shop the collection</Link>
              <Link to="/about" className="text-action">Our story <span aria-hidden="true">-&gt;</span></Link>
            </div>
          </div>
          <div className="hero-showcase" aria-label="Featured ShopMee collection">
            <span className="showcase-label">ShopMee / 01</span>
            <div className="showcase-shape showcase-backpack">B</div>
            <div className="showcase-shape showcase-sneaker">S</div>
            <div className="showcase-note">Small upgrades<br />for daily life.</div>
          </div>
        </div>
      </section>

      <section className="home-section container" aria-labelledby="categories-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Start somewhere</span>
            <h2 id="categories-heading">Find your next favorite.</h2>
          </div>
          <Link to="/shop" className="text-action">View all <span aria-hidden="true">-&gt;</span></Link>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link to="/shop" className={`category-card ${category.tone}`} key={category.name}>
              <span className="category-arrow" aria-hidden="true">-&gt;</span>
              <strong>{category.name}</strong>
              <span>{category.detail}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section featured-section" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Currently into</span>
              <h2 id="featured-heading">A few good picks.</h2>
            </div>
            <Link to="/shop" className="text-action">Shop everything <span aria-hidden="true">-&gt;</span></Link>
          </div>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <Link to="/shop" className="featured-card" key={product.name}>
                <div className="featured-image"><span>{product.mark}</span></div>
                <div className="featured-meta">
                  <span className="product-tag">{product.tag}</span>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="ShopMee benefits">
        <div className="container trust-grid">
          <div><strong>Free shipping</strong><span>On orders over $50</span></div>
          <div><strong>Easy returns</strong><span>30 days to change your mind</span></div>
          <div><strong>Good support</strong><span>Real people, ready to help</span></div>
        </div>
      </section>
    </div>
  )
}
