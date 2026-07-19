# freelancerstudio_

> **Custom Engineering & Premium Web Experiences**

A modern, high-performance portfolio application built with a brutalist/Swiss-inspired design philosophy. This repository serves as the digital storefront for **freelancerstudio_**, showcasing premium web applications, headless e-commerce architectures, and scalable digital solutions.

## 🚀 Architecture Overview

This project is built for speed, scalability, and premium aesthetic delivery:
- **Enterprise-Grade Infrastructure:** Built with scalable, headless component architecture.
- **Global Edge Ready:** Designed for immediate, zero-latency deployments on modern edge networks.
- **High-Performance UI:** Engineered with custom CSS grids, fluid typography, and precise micro-animations for an elevated user experience.
- **Secure Form Handling:** Integrated with Web3Forms for secure, serverless contact and project estimation pipelines, protected by invisible honeypots.

## 💻 Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Madhavan-dev18/freelancerstudio.git
   cd freelancerstudio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Duplicate the example environment file to set up your form endpoints.
   ```bash
   cp .env.example .env
   ```
   Add your Web3Forms Access Key to `.env`:
   ```env
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The application will be running at `http://localhost:3000`.

## 📦 Production Build

To compile the application for production deployment:
```bash
npm run build
```
The optimized bundle will be generated in the `dist` directory, ready to be deployed to any static edge hosting provider.

## 🎨 Design Language

**Swiss Brutalism meets High-End Tech:**
- **Typography:** Inter (Primary) & Space Mono (Technical accents)
- **Colors:** Deep monochromatic backgrounds with striking `#FF4500` (Orange) highlights.
- **Accessibility:** Fully semantic HTML and robust ARIA labeling.

---
*© freelancerstudio_ | Code. Learn. Build. Deliver.*
