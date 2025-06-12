# AI Calendar Assistant Landing Page

A compelling landing page for an AI-powered calendar assistant that validates demand and captures email signups.

## 🚀 Features

- **Hero Section** with compelling value proposition
- **Problem Section** highlighting pain points with real quotes
- **Solution Preview** with mock dashboard and key features
- **Pricing Comparison** showing competitive advantage
- **Email Capture** with waitlist functionality
- **Responsive Design** optimized for all devices
- **SEO Optimized** with proper meta tags

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: Supabase (for email storage)
- **Deployment**: Vercel (recommended)

## 📦 Getting Started

1. **Clone and Install**
   ```bash
   cd ai-calendar-landing
   npm install
   ```

2. **Set up Supabase** (Optional - for production email storage)
   ```bash
   # Copy environment file
   cp .env.example .env.local
   
   # Add your Supabase credentials to .env.local
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Create Supabase Table** (if using Supabase)
   ```sql
   CREATE TABLE waitlist (
     id BIGSERIAL PRIMARY KEY,
     email TEXT NOT NULL UNIQUE,
     created_at TIMESTAMPTZ DEFAULT NOW()
   );
   
   -- Enable Row Level Security
   ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
   
   -- Allow public inserts
   CREATE POLICY "Anyone can insert" ON waitlist
     FOR INSERT WITH CHECK (true);
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000)

## 📊 Analytics Setup (Optional)

Add Google Analytics to track page views and conversions:

```bash
# Add to .env.local
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Other Platforms

```bash
npm run build
npm start
```

## 📝 Customization

### Key Files to Modify:

- `src/app/page.tsx` - Main landing page content
- `src/components/EmailCapture.tsx` - Email capture form
- `src/lib/supabase.ts` - Database configuration
- `src/app/layout.tsx` - SEO metadata

### Content Updates:

- Update waitlist count in `EmailCapture.tsx`
- Modify pricing in the pricing section
- Change testimonials and quotes
- Update launch timeline

## 🎯 Marketing Strategy

### Phase 1: Validation (Current)
- Collect 500+ email signups
- A/B test different value propositions
- Gather feedback through surveys

### Phase 2: Pre-Launch
- Share mockups with waitlist
- Create demo videos
- Build social media presence

### Phase 3: Launch
- Convert waitlist to paying customers
- Implement referral program
- Scale through content marketing

## 🔧 Technical Notes

- **Email Storage**: Currently uses localStorage for demo. Switch to Supabase for production.
- **Form Validation**: Basic validation included, enhance as needed.
- **Performance**: Images optimized with Next.js Image component.
- **SEO**: Meta tags and structured data included.

## 📈 Key Metrics to Track

- **Conversion Rate**: Visitors to email signups
- **Traffic Sources**: Organic, social, referral
- **Bounce Rate**: Time spent on page
- **Device Breakdown**: Mobile vs desktop usage

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Support

For questions about the landing page:
- Create an issue in the repository
- Email: support@aicalendar.com (when available)

---

Built with ❤️ for productivity enthusiasts who want their time back.
