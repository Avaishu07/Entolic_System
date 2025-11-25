import { useState } from 'react';
import { BarChart2, Users, Briefcase, FileText, Bell, Shield, Settings as SettingsIcon, Activity as ActivityIcon, Sparkles } from 'lucide-react';
import styles from './AdminPanel.module.css';

const ROLES = ['Super Admin', 'Admin', 'HR Manager', 'Editor', 'Viewer'];

const MODULES = [
  { id: 'dashboard', label: 'Dashboard', roles: ROLES },
  { id: 'team', label: 'Team Members', roles: ['Super Admin', 'Admin'] },
  { id: 'jobs', label: 'Job Posts', roles: ['Super Admin', 'Admin', 'HR Manager'] },
  { id: 'applications', label: 'Job Applications', roles: ['Super Admin', 'Admin', 'HR Manager'] },
  { id: 'blogs', label: 'Blogs', roles: ['Super Admin', 'Admin', 'Editor'] },
  { id: 'media', label: 'Media Library', roles: ['Super Admin', 'Admin', 'Editor'] },
  { id: 'leads', label: 'Leads', roles: ['Super Admin', 'Admin'] },
  { id: 'banners', label: 'Banners', roles: ['Super Admin', 'Admin', 'Editor'] },
  { id: 'seo', label: 'SEO', roles: ['Super Admin', 'Admin'] },
  { id: 'logs', label: 'Activity Logs', roles: ['Super Admin'] },
  { id: 'backups', label: 'Backups', roles: ['Super Admin'] },
  { id: 'notifications', label: 'Notifications', roles: ['Super Admin', 'Admin'] },
  { id: 'settings', label: 'Settings', roles: ['Super Admin'] },
  { id: 'admins', label: 'Admin Users', roles: ['Super Admin'] }
];

const sampleStats = {
  team: 12,
  jobs: 5,
  applications: 42,
  blogs: 18,
  leads: 27
};

const sampleTeam = [
  { id: 1, name: 'Rahul Sharma', role: 'Tech Lead', info: 'Leads backend engineering', status: 'Active' },
  { id: 2, name: 'Priya Patel', role: 'Product Manager', info: 'Owns product roadmap', status: 'Active' }
];

const sampleJobs = [
  { id: 'JOB-001', role: 'Senior React Developer', location: 'Pune', experience: '4+ years', status: 'Open' },
  { id: 'JOB-002', role: 'DevOps Engineer', location: 'Remote', experience: '3+ years', status: 'Open' }
];

const sampleBlogs = [
  { id: 1, title: 'Modern React Patterns', status: 'Published', updatedAt: '2025-11-01' },
  { id: 2, title: 'AI-First Product Development', status: 'Draft', updatedAt: '2025-10-20' }
];

const sampleActivity = [
  {
    id: 1,
    label: 'New job application',
    meta: 'Senior React Developer · Pune',
    time: '2 min ago',
  },
  {
    id: 2,
    label: 'Blog published',
    meta: '“AI-First Product Development” by Priya',
    time: '1 hr ago',
  },
  {
    id: 3,
    label: 'New lead captured',
    meta: 'Fintech product demo request from Mumbai',
    time: '3 hrs ago',
  },
];

function AdminPanel() {
  const [currentRole, setCurrentRole] = useState('Super Admin');
  const [activeModule, setActiveModule] = useState('dashboard');

  const allowedModules = MODULES.filter((m) => m.roles.includes(currentRole));
  const currentModuleAllowed = allowedModules.some((m) => m.id === activeModule);

  const changeModule = (id) => {
    setActiveModule(id);
  };

  const renderDashboard = () => (
    <div className={styles.dashboard}>
      <div className={styles.cardGrid}>
        <div className={`${styles.card} ${styles.cardAccent}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIconCircle}>
              <BarChart2 size={18} />
            </div>
            <span className={styles.cardBadge}>Today</span>
          </div>
          <p className={styles.cardTitle}>Overview</p>
          <p className={styles.cardSubtitle}>
            Snapshot of your company website activity.
          </p>
          <div className={styles.cardKpiRow}>
            <div>
              <p className={styles.cardKpiLabel}>Active jobs</p>
              <p className={styles.cardKpiValue}>{sampleStats.jobs}</p>
            </div>
            <div>
              <p className={styles.cardKpiLabel}>New leads</p>
              <p className={styles.cardKpiValue}>{sampleStats.leads}</p>
            </div>
            <div>
              <p className={styles.cardKpiLabel}>New applications</p>
              <p className={styles.cardKpiValue}>{sampleStats.applications}</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIconCircle}>
              <Users size={16} />
            </div>
            <span className={`${styles.cardTrend} ${styles.trendPositive}`}>
              +3 this month
            </span>
          </div>
          <p className={styles.cardLabel}>Team members</p>
          <p className={styles.cardValue}>{sampleStats.team}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIconCircle}>
              <Briefcase size={16} />
            </div>
            <span className={styles.cardTrend}>Hiring</span>
          </div>
          <p className={styles.cardLabel}>Active job posts</p>
          <p className={styles.cardValue}>{sampleStats.jobs}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIconCircle}>
              <FileText size={16} />
            </div>
            <span className={styles.cardTrend}>Content</span>
          </div>
          <p className={styles.cardLabel}>Published blogs</p>
          <p className={styles.cardValue}>{sampleStats.blogs}</p>
        </div>
      </div>

      <div className={styles.dashboardBottom}>
        <div className={styles.activityPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelTitleRow}>
              <ActivityIcon size={16} />
              <span>Recent activity</span>
            </div>
            <span className={styles.panelBadge}>Live</span>
          </div>
          <ul className={styles.activityList}>
            {sampleActivity.map((item) => (
              <li key={item.id} className={styles.activityItem}>
                <span className={styles.activityDot} />
                <div>
                  <p className={styles.activityLabel}>{item.label}</p>
                  <p className={styles.activityMeta}>{item.meta}</p>
                </div>
                <span className={styles.activityTime}>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.pipelinePanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelTitleRow}>
              <Sparkles size={16} />
              <span>Hiring pipeline</span>
            </div>
          </div>
          <div className={styles.pipelineRow}>
            <div className={styles.pipelineStage}>
              <span className={styles.pipelineLabel}>New</span>
              <span className={styles.pipelineValue}>12</span>
            </div>
            <div className={styles.pipelineStage}>
              <span className={styles.pipelineLabel}>Reviewed</span>
              <span className={styles.pipelineValue}>18</span>
            </div>
            <div className={styles.pipelineStage}>
              <span className={styles.pipelineLabel}>Selected</span>
              <span className={styles.pipelineValue}>4</span>
            </div>
          </div>
          <p className={styles.pipelineHint}>
            Use the Job Applications module to move candidates between stages.
          </p>
        </div>
      </div>
    </div>
  );

  const renderTeam = () => (
    <>
      <p className={styles.moduleDescription}>
        Manage team members for the public website team section.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Short Info</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleTeam.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.info}</td>
                <td>
                  <span className={member.status === 'Active' ? styles.badgeSuccess : styles.badgeMuted}>
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  const renderJobs = () => (
    <>
      <p className={styles.moduleDescription}>
        Configure job openings shown on the Careers page.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Role</th>
              <th>Location</th>
              <th>Experience</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.role}</td>
                <td>{job.location}</td>
                <td>{job.experience}</td>
                <td>{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  const renderBlogs = () => (
    <>
      <p className={styles.moduleDescription}>
        Draft, publish, and manage blog posts.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {sampleBlogs.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.status}</td>
                <td>{blog.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  const renderPlaceholder = (title, description) => (
    <div className={styles.placeholder}>
      <p className={styles.placeholderTitle}>{title}</p>
      <p className={styles.placeholderText}>{description}</p>
      <p className={styles.placeholderHint}>
        This section is wired into the admin panel UI and ready for backend integration.
      </p>
    </div>
  );

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return renderDashboard();
      case 'team':
        return renderTeam();
      case 'jobs':
        return renderJobs();
      case 'blogs':
        return renderBlogs();
      case 'applications':
        return renderPlaceholder(
          'Job Applications',
          'Review applications, update status, and add HR notes.'
        );
      case 'media':
        return renderPlaceholder(
          'Media Library',
          'Upload and manage images, PDFs, and videos used across the site.'
        );
      case 'leads':
        return renderPlaceholder(
          'Leads / Contact Submissions',
          'View contact form submissions and export to Excel from here.'
        );
      case 'banners':
        return renderPlaceholder(
          'Banners',
          'Manage homepage hero banners, CTA button text, and order.'
        );
      case 'seo':
        return renderPlaceholder(
          'SEO',
          'Control meta tags, OG tags, and URL slugs for key pages.'
        );
      case 'logs':
        return renderPlaceholder(
          'Activity Logs',
          'Audit admin actions, login activity, and security events.'
        );
      case 'backups':
        return renderPlaceholder(
          'Backups',
          'Configure automatic backups and restore points for the system.'
        );
      case 'notifications':
        return renderPlaceholder(
          'Notifications',
          'Configure internal admin notifications for new events.'
        );
      case 'settings':
        return renderPlaceholder(
          'Settings',
          'Manage website branding, SMTP, and integration keys.'
        );
      case 'admins':
        return renderPlaceholder(
          'Admin Users',
          'Create admin accounts, assign roles, and reset passwords.'
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>Entolic Admin</div>
        <div className={styles.roleSwitcher}>
          <label htmlFor="role-select">Current role</label>
          <select
            id="role-select"
            value={currentRole}
            onChange={(e) => {
              const newRole = e.target.value;
              setCurrentRole(newRole);
              // ensure active module is allowed for new role
              const firstAllowed = MODULES.find((m) => m.roles.includes(newRole));
              if (firstAllowed && !firstAllowed.roles.includes(currentRole)) {
                setActiveModule(firstAllowed.id);
              }
            }}
          >
            {ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <nav className={styles.nav}>
          {allowedModules.map((module) => (
            <button
              key={module.id}
              type="button"
              className={
                activeModule === module.id
                  ? `${styles.navItem} ${styles.navItemActive}`
                  : styles.navItem
              }
              onClick={() => changeModule(module.id)}
            >
              {module.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className={styles.main}>
        <header className={styles.mainHeader}>
          <div className={styles.mainHeaderLeft}>
            <h1 className={styles.mainTitle}>
              {MODULES.find((m) => m.id === activeModule)?.label || 'Dashboard'}
            </h1>
            <p className={styles.mainSubtitle}>
              Company website admin · Entolic Systems
            </p>
          </div>
          <div className={styles.mainHeaderRight}>
            <span className={styles.rolePill}>{currentRole}</span>
            <span className={styles.headerChip}>Environment: Demo</span>
            <span className={styles.headerChipMuted}>Last sync: 2 min ago</span>
          </div>
        </header>

        {!currentModuleAllowed ? (
          <div className={styles.placeholder}>
            <p className={styles.placeholderTitle}>Access restricted</p>
            <p className={styles.placeholderText}>
              The current role does not have permission to view this module. Choose a
              different role from the sidebar.
            </p>
          </div>
        ) : (
          <section className={styles.moduleContent}>{renderActiveModule()}</section>
        )}
      </main>
    </div>
  );
}

export default AdminPanel;
