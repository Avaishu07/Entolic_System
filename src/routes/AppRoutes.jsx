import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/common/Layout/MainLayout';
import HomePage from '../features/home/HomePage';
import AboutPage from '../features/about/AboutPage';
import ServicesPage from '../features/services/ServicesPage';
import IndustriesPage from '../features/industries/IndustriesPage';
import CaseStudiesPage from '../features/caseStudies/CaseStudiesPage';
import BlogPage from '../features/blog/BlogPage';
import CareersPage from '../features/careers/CareersPage';
import ContactPage from '../features/contact/ContactPage';
import AdminPanel from '../features/admin/AdminPanel';
import PrivacyPolicyPage from '../features/legal/PrivacyPolicyPage';
import TermsPage from '../features/legal/TermsPage';
import CookiePolicyPage from '../features/legal/CookiePolicyPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <HomePage />
        </MainLayout>
      } />
      <Route path="/about" element={
        <MainLayout>
          <AboutPage />
        </MainLayout>
      } />
      <Route path="/services" element={
        <MainLayout>
          <ServicesPage />
        </MainLayout>
      } />
      <Route path="/industries" element={
        <MainLayout>
          <IndustriesPage />
        </MainLayout>
      } />
      <Route path="/case-studies" element={
        <MainLayout>
          <CaseStudiesPage />
        </MainLayout>
      } />
      <Route path="/blog" element={
        <MainLayout>
          <BlogPage />
        </MainLayout>
      } />
      <Route path="/careers" element={
        <MainLayout>
          <CareersPage />
        </MainLayout>
      } />
      <Route path="/contact" element={
        <MainLayout>
          <ContactPage />
        </MainLayout>
      } />
      <Route path="/privacy-policy" element={
        <MainLayout>
          <PrivacyPolicyPage />
        </MainLayout>
      } />
      <Route path="/terms" element={
        <MainLayout>
          <TermsPage />
        </MainLayout>
      } />
      <Route path="/cookie-policy" element={
        <MainLayout>
          <CookiePolicyPage />
        </MainLayout>
      } />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}

export default AppRoutes;
