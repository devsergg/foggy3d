# Supabase Setup Guide for Foggy3D

## 🚀 Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Fill in project details:
   - **Name**: foggy3d
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to San Francisco
6. Click "Create new project"
7. Wait for the project to be created (2-3 minutes)

## 🔧 Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings > API**
2. Copy these two values:
   - **Project URL** (looks like: `https://your-project.supabase.co`)
   - **anon/public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`)

## 🔐 Step 3: Add Environment Variables

1. Open your `.env.local` file in the foggy3d folder
2. Replace the placeholder values with your actual credentials:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🗄️ Step 4: Create Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the contents of `sql/schema.sql` into the editor
4. Click "Run" to create the products table

## 🔄 Step 5: Migrate Your Products

1. Make sure your `.env.local` file is set up correctly
2. Run the migration script:

```bash
npm run migrate
```

This will transfer all your existing products to the Supabase database.

## 🎯 Step 6: Update Your Application

We'll update your Next.js app to use the database instead of the static file.

## 🔧 Step 7: Test the Setup

1. Start your development server: `npm run dev`
2. Check that your products are loading from the database
3. Test the admin interface (if created)

## 🌐 Step 8: Deploy to Vercel

1. Push your changes to GitHub
2. In Vercel dashboard, add the environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Redeploy your application

## 🎉 What You'll Get

- **Easy product management** - Update prices/info through web interface
- **Real-time updates** - Changes appear immediately
- **Backup & history** - All changes are saved and tracked
- **Scalable** - Can handle thousands of products
- **Secure** - Built-in authentication and permissions

## 🆘 Troubleshooting

**Error: "Invalid API key"**
- Check your environment variables are correct
- Make sure there are no extra spaces in the keys

**Error: "Table doesn't exist"**
- Run the SQL schema in Supabase SQL Editor
- Check the table was created in the Table Editor

**Migration fails**
- Make sure environment variables are set
- Check your products data format matches the schema

## 📞 Need Help?

If you run into any issues, let me know and I'll help you troubleshoot! 