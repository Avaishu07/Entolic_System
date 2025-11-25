# Entolic Systems Website – API Specification (Draft)

This document lists the **backend APIs** that would typically be required to fully support the current React frontend (public website + admin panel). All routes and payloads are examples – adjust to your tech stack and security requirements.

## 1. Public APIs

### 1.1 Contact Form / Leads

- **POST `/api/contact`**  
  Create a new lead when someone submits the contact form or the final CTA.

  **Request body (JSON)**
  - `name` (string, required)
  - `email` (string, required)
  - `phone` (string, optional)
  - `company` (string, optional)
  - `role` (string, optional)
  - `projectType` (string, optional – matches the dropdown on Contact page)
  - `message` (string, required)
  - `wantsNDA` (boolean, optional)

  **Response (201)**
  - `id` (string) – lead ID
  - `createdAt` (ISO date)

  **Used by:** Contact page form, any “Start a project discussion / Schedule a Call” flows when wired to backend.

---

### 1.2 Newsletter Subscription (Footer)

- **POST `/api/newsletter/subscribe`**  
  Store email addresses entered in the footer newsletter form.

  **Request body**
  - `email` (string, required)

  **Response (200)**
  - `status` (`"subscribed"`)

  **Used by:** Footer newsletter form.

---

### 1.3 Jobs & Careers

To power the Careers page dynamically instead of hardcoded data:

- **GET `/api/jobs`**  
  Returns a list of open positions.

  Example fields:
  - `id`, `title`, `location`, `experience`, `type`, `status`, `description`, `requirements`.

- **GET `/api/jobs/:id`**  
  Detailed view of a single job (optional if details are on a separate page).

- **POST `/api/jobs/:id/applications`** (optional)  
  If you later add an application form on the site.

  **Used by:** Careers page and Admin Panel → “Job Posts / Job Applications” when integrated.

---

### 1.4 Blog & Case Studies

To avoid hardcoding cards on the Blog and Case Studies pages:

- **GET `/api/blogs`**  
  List of blog posts (with pagination support later).
- **GET `/api/blogs/:id`**  
  Single blog post details.

- **GET `/api/case-studies`**  
  List of case studies (for the Case Studies page and homepage preview).
- **GET `/api/case-studies/:id`**  
  Single case study details.

  Example fields: `id`, `title`, `client`, `industry`, `problem`, `solution`, `outcome`, `slug`, `publishedAt`.

  **Used by:** Blog page, Case Studies page, homepage CaseStudiesPreview section, Admin Panel → “Blogs”.

---

### 1.5 Public Content & Settings (Optional)

To let non-developers manage homepage text, banners, footer links, etc. from the Admin Panel:

- **GET `/api/content/home`**  
  Returns structured JSON (hero title, subtitles, bullet points, case study highlight IDs, logos, etc.).

- **GET `/api/content/footer`**  
  Footer links, social URLs, legal page slugs.

This is optional but pairs well with the Admin modules like “Banners”, “SEO”, “Media Library”.

---

## 2. Chat & AI Assistant (Future)

Currently the chatbot is fully local in the frontend. If you later want a real backend-powered assistant:

- **POST `/api/chatbot/query`**  
  Send a user question and get an AI or rule-based response.

  **Request body**
  - `message` (string, required)
  - `sessionId` (string, for conversation history, optional)

  **Response**
  - `reply` (string)
  - `sessionId` (string)

**Used by:** Floating `Chatbot` component, Contact page “Chat with AI assistant” if you wire it to backend.

---

## 3. Admin Authentication

To secure the Admin Panel (`/admin` route):

- **POST `/api/admin/login`**  
  Authenticate admin users and return a JWT or session token.

  **Request body**
  - `email` or `username`
  - `password`

  **Response**
  - `token` (JWT or session ID)
  - `user` object with `id`, `name`, `role` (e.g., `"Super Admin"`, `"HR Manager"`).

- **GET `/api/admin/me`**  
  Returns current admin details/permissions, based on token.

- **POST `/api/admin/logout`** (optional depending on auth model).

All **admin routes below should require a valid token** (e.g. via `Authorization: Bearer <token>` header).

---

## 4. Admin CRUD APIs (mapped to AdminPanel modules)

### 4.1 Team Members

Used by: **Admin → Team Members**, and the public “Team”/“About” sections.

- **GET `/api/admin/team-members`**
- **POST `/api/admin/team-members`**
- **PUT `/api/admin/team-members/:id`**
- **DELETE `/api/admin/team-members/:id`**

Fields: `name`, `role`, `shortInfo`, `status`, `photoUrl`, `priority`.

---

### 4.2 Jobs & Applications

Corresponds to: **Admin → Job Posts, Job Applications**.

- **GET `/api/admin/jobs`** / **POST `/api/admin/jobs`** / **PUT `/api/admin/jobs/:id`** / **DELETE**.
- **GET `/api/admin/job-applications`**
- **GET `/api/admin/job-applications/:id`**
- **PUT `/api/admin/job-applications/:id`** (update status, notes).

---

### 4.3 Blogs & Media

- **GET `/api/admin/blogs`**, **POST**, **PUT**, **DELETE**.  
  Manages all blog posts rendered on the public site.

- **GET `/api/admin/media`**  
- **POST `/api/admin/media`** (file upload, returns URL)  
- **DELETE `/api/admin/media/:id`**

Used by: Admin modules “Blogs” and “Media Library”, and indirectly by multiple public pages.

---

### 4.4 Leads / Contact Submissions

Used by: **Admin → Leads** module.

- **GET `/api/admin/leads`**  
  List leads created via `/api/contact` (with pagination and filters).
- **GET `/api/admin/leads/:id`**
- **PUT `/api/admin/leads/:id`** (e.g. update status, internal notes).

---

### 4.5 Banners & SEO Settings

Targets: **Admin → Banners**, **Admin → SEO**, and homepage/SEO data.

- **GET `/api/admin/banners`**, **POST**, **PUT**, **DELETE`**  
  Data for hero banners (titles, subtitles, CTA labels, order, background images).

- **GET `/api/admin/seo`** / **PUT `/api/admin/seo`**  
  Per-page meta title, description, open graph image URLs.

---

### 4.6 System Settings, Backups, Notifications

These match Admin modules but can be implemented later.

- **GET `/api/admin/settings`** / **PUT `/api/admin/settings`**  
  Global configuration (brand name, logo URLs, SMTP, integration keys, etc.).

- **GET `/api/admin/backups`** / **POST `/api/admin/backups`**  
  Managing database or content backups.

- **GET `/api/admin/notifications`** / **PUT `/api/admin/notifications`**  
  Configure what triggers admin notifications.

- **GET `/api/admin/logs`**  
  Activity log for security/audit.

---

## 5. Implementation Notes

- **Authentication**: Use JWT or session-based auth for admin routes; never expose admin endpoints without protection.
- **Validation**: Validate all inputs (contact, newsletter, applications) on both client and server.
- **Rate limiting**: Consider basic rate limits on public POST routes (`/contact`, `/newsletter/subscribe`, `/chatbot/query`).
- **CORS**: If frontend and backend are on different domains, configure CORS accordingly.

This spec is intentionally high-level so you can implement it in any backend framework (Node/Express, NestJS, Django, Laravel, etc.).
