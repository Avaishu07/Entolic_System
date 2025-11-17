import React, { useMemo, useState } from 'react';
import styles from './BlogPage.module.css';
import {
  Clock,
  User,
  ArrowRight,
  Tag,
  TrendingUp,
  Code,
  Lightbulb,
  Rocket,
  Search,
  Filter,
} from 'lucide-react';

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Microservices: Lessons from Production',
      excerpt:
        'Key learnings from architecting and scaling microservices for high-traffic applications serving millions of users.',
      category: 'Engineering',
      author: 'Rahul Sharma',
      readTime: '8 min read',
      date: 'Nov 15, 2024',
      tags: ['Microservices', 'Architecture', 'DevOps'],
      featured: true,
    },
    {
      id: 2,
      title: 'AI-First Product Development: A Practical Guide',
      excerpt:
        'How to integrate AI capabilities into your product roadmap without the hype—real strategies for real results.',
      category: 'AI/ML',
      author: 'Priya Patel',
      readTime: '12 min read',
      date: 'Nov 10, 2024',
      tags: ['AI', 'Product Strategy', 'Machine Learning'],
      featured: true,
    },
    {
      id: 3,
      title: 'From Monolith to Microservices: A FinTech Journey',
      excerpt:
        'How we helped a fintech startup migrate from a monolithic architecture to microservices while maintaining zero downtime.',
      category: 'Case Studies',
      author: 'Amit Kumar',
      readTime: '10 min read',
      date: 'Nov 5, 2024',
      tags: ['FinTech', 'Migration', 'Architecture'],
      featured: false,
    },
    {
      id: 4,
      title: 'Modern React Patterns for Enterprise Applications',
      excerpt:
        'Advanced React patterns and best practices for building maintainable, scalable enterprise web applications.',
      category: 'Engineering',
      author: 'Sneha Reddy',
      readTime: '15 min read',
      date: 'Oct 28, 2024',
      tags: ['React', 'JavaScript', 'Frontend'],
      featured: false,
    },
    {
      id: 5,
      title: 'The Future of Healthcare Technology in India',
      excerpt:
        "Exploring emerging trends in healthtech, telemedicine, and digital health solutions shaping India's healthcare landscape.",
      category: 'Industry Insights',
      author: 'Dr. Vikram Singh',
      readTime: '7 min read',
      date: 'Oct 20, 2024',
      tags: ['HealthTech', 'Telemedicine', 'India'],
      featured: false,
    },
    {
      id: 6,
      title: 'Building a Design System That Scales',
      excerpt:
        'Our approach to creating and maintaining design systems that work across multiple products and teams.',
      category: 'Product',
      author: 'Ananya Desai',
      readTime: '11 min read',
      date: 'Oct 15, 2024',
      tags: ['Design System', 'UX', 'Product'],
      featured: false,
    },
  ];

  const categoryFilters = [
    { id: 'all', label: 'All' },
    { id: 'ai-tech', label: 'AI & Technology' },
    { id: 'dev', label: 'Development' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'security', label: 'Security' },
  ];

  // helper which mirrors postMatchesCategory logic and is used for counts
  const postMatchesCategory = (post, categoryId) => {
    if (categoryId === 'all') return true;

    if (categoryId === 'ai-tech') {
      return (
        post.category === 'AI/ML' ||
        post.tags.some((t) => /ai|ml|machine learning/i.test(t))
      );
    }

    if (categoryId === 'dev') {
      return post.category === 'Engineering' || post.category === 'Product';
    }

    if (categoryId === 'cloud') {
      return post.tags.some((t) => /cloud|kubernetes|aws|azure/i.test(t));
    }

    if (categoryId === 'case-studies') {
      return post.category === 'Case Studies';
    }

    if (categoryId === 'security') {
      return post.tags.some((t) => /security|infosec|compliance/i.test(t));
    }

    return true;
  };

  // compute category counts
  const categoryWithCounts = categoryFilters.map((cat) => ({
    ...cat,
    count:
      cat.id === 'all'
        ? blogPosts.length
        : blogPosts.filter((post) => postMatchesCategory(post, cat.id)).length,
  }));

  const searchFilteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter((post) => {
      const haystack = [post.title, post.excerpt, post.author, post.category, ...post.tags]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [blogPosts, searchQuery]);

  const featuredPosts = useMemo(
    () => searchFilteredPosts.filter((post) => post.featured),
    [searchFilteredPosts],
  );

  const recentPosts = useMemo(() => {
    const nonFeatured = searchFilteredPosts.filter((post) => !post.featured);
    return nonFeatured.filter((post) => postMatchesCategory(post, selectedCategory));
  }, [searchFilteredPosts, selectedCategory]);

  const visibleRecentPosts = recentPosts.slice(0, visibleCount);

  const handleLoadMore = () => setVisibleCount((p) => p + 3);

  return (
    <main className={styles.blogPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Blog · Entolic Systems</p>
            <h1 className={styles.heroHeading}>Tech insights for teams shipping great products</h1>
            <p className={styles.heroSubtitle}>
              Practical engineering, product & AI writing tailored for Indian teams and global builders.
            </p>

            <form className={styles.heroSearch} onSubmit={(e) => e.preventDefault()} role="search" aria-label="Search posts">
              <div className={styles.searchInputWrapper}>
                <Search className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search articles…"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(4);
                  }}
                />
              </div>
            </form>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <TrendingUp className={styles.statIcon} />
                <div>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Articles Published</div>
                </div>
              </div>
              <div className={styles.stat}>
                <Code className={styles.statIcon} />
                <div>
                  <div className={styles.statNumber}>10K+</div>
                  <div className={styles.statLabel}>Developers Reading</div>
                </div>
              </div>
              <div className={styles.stat}>
                <Lightbulb className={styles.statIcon} />
                <div>
                  <div className={styles.statNumber}>Weekly</div>
                  <div className={styles.statLabel}>New Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative shapes */}
        <div style={{
          position: 'absolute',
          left: '-160px',
          bottom: '-176px',
          width: '384px',
          height: '384px',
          borderRadius: '999px',
          background: 'radial-gradient(circle at 30% 30%, rgba(249,115,22,0.2), transparent 60%)',
          pointerEvents: 'none',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          right: '-120px',
          top: '-128px',
          width: '288px',
          height: '288px',
          borderRadius: '999px',
          background: 'radial-gradient(circle at 60% 40%, rgba(14,165,233,0.18), transparent 60%)',
          pointerEvents: 'none',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
      </section>

      {/* Filters + Newsletter */}
      <section className={styles.metaSection}>
        <div className={styles.container}>
          <div className={styles.metaGrid}>
            <div className={styles.filterCard}>
              <div className={styles.filterHeader}>
                <div className={styles.filterTitle}>
                  <Filter className={styles.filterHeaderIcon} />
                  <div>
                    <p>Browse by category</p>
                    <span>Filter insights by topic</span>
                  </div>
                </div>
              </div>

              <div className={styles.filterBar}>
                <Tag className={styles.filterIcon} />
                <div className={styles.categoryFilters}>
                  {categoryWithCounts.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className={
                        selectedCategory === cat.id
                          ? `${styles.categoryBtn} ${styles.categoryBtnActive}`
                          : styles.categoryBtn
                      }
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setVisibleCount(4);
                      }}
                      aria-pressed={selectedCategory === cat.id}
                    >
                      <span>{cat.label}</span>
                      <span className={styles.categoryCount}>{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <aside className={styles.newsletterCard}>
              <h3 className={styles.newsletterTitle}>✨ Stay Updated</h3>
              <p className={styles.newsletterSubtitle}>
                Get the latest tech insights delivered to your inbox weekly.
              </p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  className={styles.newsletterInput}
                  placeholder="your.email@company.com"
                  required
                />
                <button type="submit" className={styles.newsletterButton}>
                  Subscribe
                  <ArrowRight className={styles.newsletterIcon} />
                </button>
              </form>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '8px', position: 'relative', zIndex: 1 }}>
                No spam. Just practical content for teams shipping in India & beyond.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredPosts.length > 0 && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Featured</p>
              <h2 className={styles.sectionHeading}>Top Reads This Month</h2>
            </div>

            <div className={styles.featuredGrid}>
              {featuredPosts.map((post) => (
                <article key={post.id} className={styles.featuredCard}>
                  <div className={styles.featuredCardHeader}>
                    <span className={styles.categoryBadge}>{post.category}</span>
                    <span className={styles.featuredBadge}>
                      <Rocket className={styles.featuredBadgeIcon} />
                      Featured
                    </span>
                  </div>

                  <h3 className={styles.featuredTitle}>{post.title}</h3>
                  <p className={styles.featuredExcerpt}>{post.excerpt}</p>

                  <div className={styles.postMeta}>
                    <div className={styles.authorInfo}>
                      <User className={styles.metaIcon} />
                      <span>{post.author}</span>
                    </div>
                    <div className={styles.metaGroup}>
                      <Clock className={styles.metaIcon} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className={styles.metaGroup}>
                      <span className={styles.metaDot} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className={styles.tags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={`/blog/${post.id}`} className={styles.readMoreLink}>
                    Read full article
                    <ArrowRight className={styles.linkIcon} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent */}
      <section className={styles.postsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Recent Articles</p>
            <h2 className={styles.sectionHeading}>Latest from our team</h2>
          </div>

          {visibleRecentPosts.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No articles match your search and filters yet.</p>
              <span>Try clearing the search or choosing a different category.</span>
            </div>
          ) : (
            <>
              <div className={styles.postsGrid}>
                {visibleRecentPosts.map((post) => (
                  <article key={post.id} className={styles.postCard}>
                    <div className={styles.postTopRow}>
                      <span className={styles.categoryBadge}>{post.category}</span>
                    </div>

                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>

                    <div className={styles.postMeta}>
                      <div className={styles.authorInfo}>
                        <User className={styles.metaIcon} />
                        <span>{post.author}</span>
                      </div>
                      <div className={styles.metaGroup}>
                        <Clock className={styles.metaIcon} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className={styles.metaGroup}>
                        <span className={styles.metaDot} />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <div className={styles.tags}>
                      {post.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a href={`/blog/${post.id}`} className={styles.readMoreLink}>
                      Read article
                      <ArrowRight className={styles.linkIcon} />
                    </a>
                  </article>
                ))}
              </div>

              {visibleCount < recentPosts.length && (
                <div className={styles.loadMoreWrapper}>
                  <button type="button" className={styles.loadMoreButton} onClick={handleLoadMore}>
                    Load more articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
