import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          user_universities: path.resolve(__dirname, 'user/universities.html'),
          user_university_details: path.resolve(__dirname, 'user/university-details.html'),
          user_majors: path.resolve(__dirname, 'user/majors.html'),
          user_major_details: path.resolve(__dirname, 'user/major-details.html'),
          user_find_major: path.resolve(__dirname, 'user/find-major.html'),
          user_compare: path.resolve(__dirname, 'user/compare.html'),
          user_scholarships: path.resolve(__dirname, 'user/scholarships.html'),
          user_scholarship_details: path.resolve(__dirname, 'user/scholarship-details.html'),
          user_career_path: path.resolve(__dirname, 'user/career-path.html'),
          user_favorites: path.resolve(__dirname, 'user/favorites.html'),
          user_account: path.resolve(__dirname, 'user/account.html'),
          user_about: path.resolve(__dirname, 'user/about.html'),
          admin_login: path.resolve(__dirname, 'admin/login.html'),
          admin_dashboard: path.resolve(__dirname, 'admin/dashboard.html'),
          admin_universities: path.resolve(__dirname, 'admin/universities.html'),
          admin_university_add: path.resolve(__dirname, 'admin/university-add.html'),
          admin_university_edit: path.resolve(__dirname, 'admin/university-edit.html'),
          admin_majors: path.resolve(__dirname, 'admin/majors.html'),
          admin_major_add: path.resolve(__dirname, 'admin/major-add.html'),
          admin_major_edit: path.resolve(__dirname, 'admin/major-edit.html'),
          admin_scholarships: path.resolve(__dirname, 'admin/scholarships.html'),
          admin_scholarship_add: path.resolve(__dirname, 'admin/scholarship-add.html'),
          admin_scholarship_edit: path.resolve(__dirname, 'admin/scholarship-edit.html'),
          admin_users: path.resolve(__dirname, 'admin/users.html'),
          admin_news: path.resolve(__dirname, 'admin/news.html'),
          admin_categories: path.resolve(__dirname, 'admin/categories.html'),
          admin_content: path.resolve(__dirname, 'admin/content.html'),
          admin_profile: path.resolve(__dirname, 'admin/profile.html'),
          admin_settings: path.resolve(__dirname, 'admin/settings.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
